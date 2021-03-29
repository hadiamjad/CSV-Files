import pandas as pd
import numpy as np
import whois
import os
import json
import math
import ast 
import sqlite3
import requests
import time
import tldextract
import xlsxwriter
import matplotlib.pyplot as plt
import seaborn as sns
from graphviz import Digraph
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from adblockparser import AdblockRules
from virustotal_python import Virustotal
from pprint import pprint

################################################  EasyList/EasyPrivacyList  ####################################
# Description: append the filter rules list
# input: filename = file containing easylist and easyprivacylist 
# return: Adblock rules object
def getRules(filename):
    df = pd.read_excel(filename)
    rules = []
    for i in df.index:
        rules.append(df['url'][i])
    Rules = AdblockRules(rules)
    return Rules

# Description: setting predefined rules
easylist = getRules('/easyList.xlsx')
easyPrivacylist = getRules('/EasyPrivacyList.xlsx')

# Description: extract domain from given url
# input: url = url for which domain is needed
# return: domain
def getDomain(url):
    ext = tldextract.extract(url)
    return ext.domain+"."+ext.suffix

# Description: check if its thirparty request
# input: url = url 
# input: top_level_url = top_level_url 
# return: returns True if its thirdparty request otherwise false
def isThirdPartyReq(url, top_level_url):
    d_url = getDomain(url)
    d_top_level_url = getDomain(top_level_url)
    if d_url == d_top_level_url:
        return False
    else:
        return True

# Description: check if the request is tracking or non-tracking
# input: rules = Adblock rules object 
# input: url = url 
# input: top_level_url = top_level_url 
# input: resource_type = resource_type 
# return: returns True if it has tracking status otherwise false
def CheckTrackingReq(rules, url, top_level_url, resource_type):
    return int(rules.should_block(url, { resource_type: resource_type, 'domain' : getDomain(url), 'third-party': isThirdPartyReq(url, top_level_url) }))

############################################### Ancestoral Nodes ##############################################
# Description: Search the tracking status for each unique script url's in the stack
# input: dataset = complete http_req table with easylist and easyprivacylist flags
# input: callstack = call stack object as shown above
# return: it returns 1 if any ancestoral node has tracking status otherwise 0
def CheckAncestoralNodes(dataset,callstack):
  # handling non-script type
  if callstack['type'] != 'script': return None
  # unique scripts in the stack
  unique_scripts = []
  # recursively insert unique scripts in the stack
  rec_stack_checker(callstack["stack"], unique_scripts)
  # check the tracking status of the unique scripts
  return check_script_url(dataset, unique_scripts)

# Description: Search the tracking status for each unique script url's in the stack
# input: dataset = complete http_req table with easylist and easyprivacylist flags
# input: unique_scripts = unique scripts in the given stack
# return: it returns 1 if any unique script url has tracking status otherwise 0
def check_script_url(dataset, unique_scripts):
  for i in range(len(unique_scripts)):
    for j in dataset.index:
      if dataset['http_req'][j] == unique_scripts[i]: 
        if dataset['easylistflag'][j] == 1 or dataset['easyprivacylistflag'][j] == 1: return 1
  return 0


# Description: it appends the unique script url's recursively
# input: stack = stack object as shown in the image above
# input: unique_scripts = unique scripts in the given stack
# return: nothing
def rec_stack_checker(stack, unique_scripts):
  # append unique script_url's 
  for item in stack['callFrames']:
    if item['url'] not in unique_scripts:
      unique_scripts.append(item['url'])
  # if parent object doen't exist return (base-case)
  if 'parent' not in stack.keys(): return
  # else send a recursive call for this
  else: rec_stack_checker(stack['parent'], unique_scripts)

########################################### Initilization ##################################################
# Description: Handles all initilization process like EasyList, EasyPrivacyList, Ancestor Flags
# input: JSONfile_path = file containg the http request data 
# return: returns updated dataframe
def intilization(JSONfile_path):
  # reading file as dataframe
  dataset = pd.read_json(JSONfile_path, lines=True)
  # adding easylistflag column
  dataset['easylistflag'] = dataset.apply(lambda row: CheckTrackingReq(easylist, row.http_req,row.top_level_url, row.resource_type), axis = 1)
  print('EasyList done')
  # adding easyprivacylistflag column
  dataset['easyprivacylistflag'] = dataset.apply(lambda row: CheckTrackingReq(easyPrivacylist, row.http_req,row.top_level_url, row.resource_type), axis = 1)
  print('EasyPrivacyList done')

  # extracting unique top_level_url
  sites = dataset['top_level_url'].unique()
  # returning dataset
  retDataset = pd.DataFrame()
  # adding ancestoral flag
  # extracting site by site data
  for site in sites:
    df = dataset.loc[cmpdataset['top_level_url'] == site]
    df["ancestorflag"] = df.apply(lambda row: CheckAncestoralNodes(df, row.call_stack), axis = 1)
    retDataset = retDataset.append(df)
  print('Ancestoral Nodes done')
  # return dataset
  return retDataset

########################################### DataFrame To Excel #############################################
# Description: Converts dataframe to excel file
# input: dataset = dataframe to be converted
# input: filename = name of the csv file 'test.xlsx'
# return: nothing
def df_to_excel(dataset, filename):
  writer = pd.ExcelWriter(filename, engine='xlsxwriter',options={'strings_to_urls': False})
  dataset.to_excel(writer)
  writer.close()

########################################### Distribution Graph Plotter ##########################################
# Description: Creates distribution plot
# input: dataset = file containing complete columns EL, EPL, AF
# input: dickey = 'domain', 'hostname', 'script'
# return: nothing just creates plot
def DistGraphPlotter(dataset, dickey):
  # dictionary for storing key value pairs
  # key as specified in input parameter
  # value is a list = [tracking_calls, non-tracking_calls]
  dic={}
  # iterating complete dataset
  for i in dataset.index:
    # handling non-script type
    if dataset['call_stack'][i]['type'] != 'script': pass
    else:
      # handling input key specification
      if dickey == 'domain':
         key = getDomain(dataset['http_req'][i])
      elif dickey == 'hostname':
        pass
      elif dickey == 'script':
        pass

      # inserting dickey as a new pair
      if dickey not in dic.keys():
        if dataset['easylistflag'][i] == 1 or dataset['easyprivacylistflag'][i] == 1 or dataset['ancestorflag'][i] == 1:
          dic[dickey] = [1, 0]
        else:
          dic[dickey] = [0, 1]
      # updating dickey if it exits already
      else:
        if dataset['easylistflag'][i] == 1 or dataset['easyprivacylistflag'][i] == 1 or dataset['ancestorflag'][i] == 1:
          dic[dickey][0] += 1
        else:
          dic[dickey][1] += 1
      # creating dataframe for dist graph plotting
      data = []
      for i in dic.keys():
          # calculating ratio i.e log10 (tracking_calls/non-tracking_calls)
          data.append((i, dic[i][0], dic[i][1], math.log((dic[i][0]+0.001)/(dic[i][1]+0.001), 10)))
      df = pd.DataFrame(
              data,
              columns=[dickey, "tracking_calls", "non-tracking_calls", "log10 (tracking_calls/non-tracking_calls)"])
      # Saving Excel File
      df_to_excel(df, 'DomainAnalysis.xlsx')
      # creating distplot using sns
      plot = sns.displot(data=df, x="log10 (tracking_calls/non-tracking_calls)", kde=True,stat="probability")
      plot.savefig("DomainAnalysis.png")

##################################### Main ##################################################
dataset = intilization('/request.json')
DistGraphPlotter(dataset, 'domain')