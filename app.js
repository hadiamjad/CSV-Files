(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888, 1902], {
    94184: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a)
                            }
                        } else if ("object" === i) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var s in n)
                                r.call(n, s) && n[s] && e.push(s)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    26905: function(e) {
        e.exports = function(e, t, n, r, o) {
            for (t = t.split ? t.split(".") : t,
            r = 0; r < t.length; r++)
                e = e ? e[t[r]] : o;
            return e === o ? n : e
        }
    },
    69135: function(e, t, n) {
        e.exports = n(57007)
    },
    7544: function(e, t, n) {
        e.exports = n(81902)
    },
    11752: function(e, t, n) {
        e.exports = n(50090)
    },
    48253: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = function(e, t, r, o) {
            var i = n(20822).normalizeLocalePath
              , a = n(88315).detectDomainLocale
              , s = t || i(e, r).detectedLocale
              , c = a(o, void 0, s);
            if (c) {
                var u = "http".concat(c.http ? "" : "s", "://")
                  , l = s === c.defaultLocale ? "" : "/".concat(s);
                return "".concat(u).concat(c.domain).concat("").concat(l).concat(e)
            }
            return !1
        }
        ;
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    62747: function(e, t, n) {
        "use strict";
        var r = n(930)
          , o = n(85696)
          , i = n(7980);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, n = e.src, s = e.sizes, c = e.unoptimized, m = void 0 !== c && c, g = e.priority, w = void 0 !== g && g, k = e.loading, C = e.lazyRoot, P = void 0 === C ? null : C, E = e.lazyBoundary, A = e.className, I = e.quality, D = e.width, L = e.height, N = e.style, T = e.objectFit, M = e.objectPosition, R = e.onLoadingComplete, U = e.placeholder, B = void 0 === U ? "empty" : U, Z = e.blurDataURL, F = u(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]), G = l.useContext(p.ImageConfigContext), H = l.useMemo((function() {
                var e = b || G || f.imageConfigDefault
                  , t = [].concat(i(e.deviceSizes), i(e.imageSizes)).sort((function(e, t) {
                    return e - t
                }
                ))
                  , n = e.deviceSizes.sort((function(e, t) {
                    return e - t
                }
                ));
                return a({}, e, {
                    allSizes: t,
                    deviceSizes: n
                })
            }
            ), [G]), z = F, V = s ? "responsive" : "intrinsic";
            "layout"in z && (z.layout && (V = z.layout),
            delete z.layout);
            var W = S;
            if ("loader"in z) {
                if (z.loader) {
                    var q = z.loader;
                    W = function(e) {
                        e.config;
                        var t = u(e, ["config"]);
                        return q(t)
                    }
                }
                delete z.loader
            }
            var $ = "";
            if (function(e) {
                return "object" === typeof e && (_(e) || function(e) {
                    return void 0 !== e.src
                }(e))
            }(n)) {
                var Y = _(n) ? n.default : n;
                if (!Y.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));
                if (Z = Z || Y.blurDataURL,
                $ = Y.src,
                (!V || "fill" !== V) && (L = L || Y.height,
                D = D || Y.width,
                !Y.height || !Y.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))
            }
            var K = !w && ("lazy" === k || "undefined" === typeof k);
            ((n = "string" === typeof n ? n : $).startsWith("data:") || n.startsWith("blob:")) && (m = !0,
            K = !1);
            h.has(n) && (K = !1);
            H.unoptimized && (m = !0);
            var J, Q = l.useState(!1), X = o(Q, 2), ee = X[0], te = X[1], ne = v.useIntersection({
                rootRef: P,
                rootMargin: E || "200px",
                disabled: !K
            }), re = o(ne, 3), oe = re[0], ie = re[1], ae = re[2], se = !K || ie, ce = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, ue = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, le = !1, de = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: T,
                objectPosition: M
            }, fe = x(D), ve = x(L), pe = x(I);
            0;
            var me = Object.assign({}, N, de)
              , ge = "blur" !== B || ee ? {} : {
                backgroundSize: T || "cover",
                backgroundPosition: M || "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("'.concat(Z, '")')
            };
            if ("fill" === V)
                ce.display = "block",
                ce.position = "absolute",
                ce.top = 0,
                ce.left = 0,
                ce.bottom = 0,
                ce.right = 0;
            else if ("undefined" !== typeof fe && "undefined" !== typeof ve) {
                var be = ve / fe
                  , he = isNaN(be) ? "100%" : "".concat(100 * be, "%");
                "responsive" === V ? (ce.display = "block",
                ce.position = "relative",
                le = !0,
                ue.paddingTop = he) : "intrinsic" === V ? (ce.display = "inline-block",
                ce.position = "relative",
                ce.maxWidth = "100%",
                le = !0,
                ue.maxWidth = "100%",
                J = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(fe, "%27%20height=%27").concat(ve, "%27/%3e")) : "fixed" === V && (ce.display = "inline-block",
                ce.position = "relative",
                ce.width = fe,
                ce.height = ve)
            } else
                0;
            var ye = {
                src: y,
                srcSet: void 0,
                sizes: void 0
            };
            se && (ye = O({
                config: H,
                src: n,
                unoptimized: m,
                layout: V,
                width: fe,
                quality: pe,
                sizes: s,
                loader: W
            }));
            var we = n;
            0;
            0;
            var _e = (r(t = {}, "imagesrcset", ye.srcSet),
            r(t, "imagesizes", ye.sizes),
            r(t, "crossOrigin", z.crossOrigin),
            t)
              , Oe = l.default.useLayoutEffect
              , xe = l.useRef(R)
              , Se = l.useRef(n);
            l.useEffect((function() {
                xe.current = R
            }
            ), [R]),
            Oe((function() {
                Se.current !== n && (ae(),
                Se.current = n)
            }
            ), [ae, n]);
            var ke = a({
                isLazy: K,
                imgAttributes: ye,
                heightInt: ve,
                widthInt: fe,
                qualityInt: pe,
                layout: V,
                className: A,
                imgStyle: me,
                blurStyle: ge,
                loading: k,
                config: H,
                unoptimized: m,
                placeholder: B,
                loader: W,
                srcString: we,
                onLoadingCompleteRef: xe,
                setBlurComplete: te,
                setIntersection: oe,
                isVisible: se,
                noscriptSizes: s
            }, z);
            return l.default.createElement(l.default.Fragment, null, l.default.createElement("span", {
                style: ce
            }, le ? l.default.createElement("span", {
                style: ue
            }, J ? l.default.createElement("img", {
                style: {
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: J
            }) : null) : null, l.default.createElement(j, Object.assign({}, ke))), w ? l.default.createElement(d.default, null, l.default.createElement("link", Object.assign({
                key: "__nimg-" + ye.src + ye.srcSet + ye.sizes,
                rel: "preload",
                as: "image",
                href: ye.srcSet ? void 0 : ye.src
            }, _e))) : null)
        }
        ;
        var a = n(6495).Z
          , s = n(92648).Z
          , c = n(91598).Z
          , u = n(17273).Z
          , l = c(n(67294))
          , d = s(n(3876))
          , f = n(8266)
          , v = n(74811)
          , p = n(79933)
          , m = (n(44511),
        n(20952));
        function g(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        var b = {
            deviceSizes: [350, 400, 768, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        }
          , h = new Set
          , y = (new Map,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        var w = new Map([["default", function(e) {
            var t = e.config
              , n = e.src
              , r = e.width
              , o = e.quality;
            return n.endsWith(".svg") && !t.dangerouslyAllowSVG ? n : "".concat(m.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
        }
        ], ["imgix", function(e) {
            var t = e.config
              , n = e.src
              , r = e.width
              , o = e.quality
              , i = new URL("".concat(t.path).concat(g(n)))
              , a = i.searchParams;
            return a.set("auto", a.getAll("auto").join(",") || "format"),
            a.set("fit", a.get("fit") || "max"),
            a.set("w", a.get("w") || r.toString()),
            o && a.set("q", o.toString()),
            i.href
        }
        ], ["cloudinary", function(e) {
            var t = e.config
              , n = e.src
              , r = ["f_auto", "c_limit", "w_" + e.width, "q_" + (e.quality || "auto")].join(",") + "/";
            return "".concat(t.path).concat(r).concat(g(n))
        }
        ], ["akamai", function(e) {
            var t = e.config
              , n = e.src
              , r = e.width;
            return "".concat(t.path).concat(g(n), "?imwidth=").concat(r)
        }
        ], ["custom", function(e) {
            var t = e.src;
            throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function _(e) {
            return void 0 !== e.default
        }
        function O(e) {
            var t = e.config
              , n = e.src
              , r = e.unoptimized
              , o = e.layout
              , a = e.width
              , s = e.quality
              , c = e.sizes
              , u = e.loader;
            if (r)
                return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
            var l = function(e, t, n, r) {
                var o = e.deviceSizes
                  , a = e.allSizes;
                if (r && ("fill" === n || "responsive" === n)) {
                    for (var s, c = /(^|\s)(1?\d?\d)vw/g, u = []; s = c.exec(r); s)
                        u.push(parseInt(s[2]));
                    if (u.length) {
                        var l = .01 * Math.min.apply(Math, u);
                        return {
                            widths: a.filter((function(e) {
                                return e >= o[0] * l
                            }
                            )),
                            kind: "w"
                        }
                    }
                    return {
                        widths: a,
                        kind: "w"
                    }
                }
                return "number" !== typeof t || "fill" === n || "responsive" === n ? {
                    widths: o,
                    kind: "w"
                } : {
                    widths: i(new Set([t, 2 * t].map((function(e) {
                        return a.find((function(t) {
                            return t >= e
                        }
                        )) || a[a.length - 1]
                    }
                    )))),
                    kind: "x"
                }
            }(t, a, o, c)
              , d = l.widths
              , f = l.kind
              , v = d.length - 1;
            return {
                sizes: c || "w" !== f ? c : "100vw",
                srcSet: d.map((function(e, r) {
                    return "".concat(u({
                        config: t,
                        src: n,
                        quality: s,
                        width: e
                    }), " ").concat("w" === f ? e : r + 1).concat(f)
                }
                )).join(", "),
                src: u({
                    config: t,
                    src: n,
                    quality: s,
                    width: d[v]
                })
            }
        }
        function x(e) {
            return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
        function S(e) {
            var t, n = (null == (t = e.config) ? void 0 : t.loader) || "default", r = w.get(n);
            if (r)
                return r(e);
            throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "), ". Received: ").concat(n))
        }
        function k(e, t, n, r, o, i) {
            e && e.src !== y && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t,
            ("decode"in e ? e.decode() : Promise.resolve()).catch((function() {}
            )).then((function() {
                if (e.parentNode && (h.add(t),
                "blur" === r && i(!0),
                null == o ? void 0 : o.current)) {
                    var n = e.naturalWidth
                      , a = e.naturalHeight;
                    o.current({
                        naturalWidth: n,
                        naturalHeight: a
                    })
                }
            }
            )))
        }
        var j = function(e) {
            var t = e.imgAttributes
              , n = (e.heightInt,
            e.widthInt)
              , r = e.qualityInt
              , o = e.layout
              , i = e.className
              , s = e.imgStyle
              , c = e.blurStyle
              , d = e.isLazy
              , f = e.placeholder
              , v = e.loading
              , p = e.srcString
              , m = e.config
              , g = e.unoptimized
              , b = e.loader
              , h = e.onLoadingCompleteRef
              , y = e.setBlurComplete
              , w = e.setIntersection
              , _ = e.onLoad
              , x = e.onError
              , S = (e.isVisible,
            e.noscriptSizes)
              , j = u(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
            return v = d ? "lazy" : v,
            l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, j, t, {
                decoding: "async",
                "data-nimg": o,
                className: i,
                style: a({}, s, c),
                ref: l.useCallback((function(e) {
                    w(e),
                    (null == e ? void 0 : e.complete) && k(e, p, 0, f, h, y)
                }
                ), [w, p, o, f, h, y]),
                onLoad: function(e) {
                    k(e.currentTarget, p, 0, f, h, y),
                    _ && _(e)
                },
                onError: function(e) {
                    "blur" === f && y(!0),
                    x && x(e)
                }
            })), (d || "blur" === f) && l.default.createElement("noscript", null, l.default.createElement("img", Object.assign({}, j, O({
                config: m,
                src: p,
                unoptimized: g,
                layout: o,
                width: n,
                quality: r,
                sizes: S,
                loader: b
            }), {
                decoding: "async",
                "data-nimg": o,
                style: s,
                className: i,
                loading: v
            }))))
        };
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    39601: function(e, t, n) {
        "use strict";
        var r = n(85696);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = n(92648).Z
          , i = n(17273).Z
          , a = o(n(67294))
          , s = n(77689)
          , c = n(25174)
          , u = n(44355)
          , l = n(59221)
          , d = n(74811)
          , f = n(48253)
          , v = n(92546)
          , p = {};
        function m(e, t, n, r) {
            if (e && s.isLocalURL(t)) {
                Promise.resolve(e.prefetch(t, n, r)).catch((function(e) {
                    0
                }
                ));
                var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                p[t + "%" + n + (o ? "%" + o : "")] = !0
            }
        }
        var g = a.default.forwardRef((function(e, t) {
            var n, o = e.href, g = e.as, b = e.children, h = e.prefetch, y = e.passHref, w = e.replace, _ = e.shallow, O = e.scroll, x = e.locale, S = e.onClick, k = e.onMouseEnter, j = e.onTouchStart, C = e.legacyBehavior, P = void 0 === C ? !0 !== Boolean(!1) : C, E = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = b,
            !P || "string" !== typeof n && "number" !== typeof n || (n = a.default.createElement("a", null, n));
            var A = !1 !== h
              , I = a.default.useContext(u.RouterContext)
              , D = a.default.useContext(l.AppRouterContext);
            D && (I = D);
            var L, N = a.default.useMemo((function() {
                var e = s.resolveHref(I, o, !0)
                  , t = r(e, 2)
                  , n = t[0]
                  , i = t[1];
                return {
                    href: n,
                    as: g ? s.resolveHref(I, g) : i || n
                }
            }
            ), [I, o, g]), T = N.href, M = N.as, R = a.default.useRef(T), U = a.default.useRef(M);
            P && (L = a.default.Children.only(n));
            var B = P ? L && "object" === typeof L && L.ref : t
              , Z = d.useIntersection({
                rootMargin: "200px"
            })
              , F = r(Z, 3)
              , G = F[0]
              , H = F[1]
              , z = F[2]
              , V = a.default.useCallback((function(e) {
                U.current === M && R.current === T || (z(),
                U.current = M,
                R.current = T),
                G(e),
                B && ("function" === typeof B ? B(e) : "object" === typeof B && (B.current = e))
            }
            ), [M, B, T, z, G]);
            a.default.useEffect((function() {
                var e = H && A && s.isLocalURL(T)
                  , t = "undefined" !== typeof x ? x : I && I.locale
                  , n = p[T + "%" + M + (t ? "%" + t : "")];
                e && !n && m(I, T, M, {
                    locale: t
                })
            }
            ), [M, T, H, x, A, I]);
            var W = {
                ref: V,
                onClick: function(e) {
                    P || "function" !== typeof S || S(e),
                    P && L.props && "function" === typeof L.props.onClick && L.props.onClick(e),
                    e.defaultPrevented || function(e, t, n, r, o, i, c, u, l, d) {
                        if ("A" !== e.currentTarget.nodeName.toUpperCase() || !function(e) {
                            var t = e.currentTarget.target;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) && s.isLocalURL(n)) {
                            e.preventDefault();
                            var f = function() {
                                "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: i,
                                    locale: u,
                                    scroll: c
                                }) : t[o ? "replace" : "push"](n, {
                                    forceOptimisticNavigation: !d
                                })
                            };
                            l ? a.default.startTransition(f) : f()
                        }
                    }(e, I, T, M, w, _, O, x, Boolean(D), A)
                },
                onMouseEnter: function(e) {
                    P || "function" !== typeof k || k(e),
                    P && L.props && "function" === typeof L.props.onMouseEnter && L.props.onMouseEnter(e),
                    !A && D || s.isLocalURL(T) && m(I, T, M, {
                        priority: !0
                    })
                },
                onTouchStart: function(e) {
                    P || "function" !== typeof j || j(e),
                    P && L.props && "function" === typeof L.props.onTouchStart && L.props.onTouchStart(e),
                    !A && D || s.isLocalURL(T) && m(I, T, M, {
                        priority: !0
                    })
                }
            };
            if (!P || y || "a" === L.type && !("href"in L.props)) {
                var q = "undefined" !== typeof x ? x : I && I.locale
                  , $ = I && I.isLocaleDomain && f.getDomainLocale(M, q, I.locales, I.domainLocales);
                W.href = $ || v.addBasePath(c.addLocale(M, q, I && I.defaultLocale))
            }
            return P ? a.default.cloneElement(L, W) : a.default.createElement("a", Object.assign({}, E, W), n)
        }
        ));
        t.default = g,
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    20822: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.normalizeLocalePath = void 0;
        t.normalizeLocalePath = function(e, t) {
            return n(68848).normalizeLocalePath(e, t)
        }
        ,
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    74811: function(e, t, n) {
        "use strict";
        var r = n(85696);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootRef
              , n = e.rootMargin
              , u = e.disabled || !a
              , l = o.useState(!1)
              , d = r(l, 2)
              , f = d[0]
              , v = d[1]
              , p = o.useState(null)
              , m = r(p, 2)
              , g = m[0]
              , b = m[1];
            o.useEffect((function() {
                if (a) {
                    if (u || f)
                        return;
                    if (g && g.tagName) {
                        var e = function(e, t, n) {
                            var r = function(e) {
                                var t, n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }, r = c.find((function(e) {
                                    return e.root === n.root && e.margin === n.margin
                                }
                                ));
                                if (r && (t = s.get(r)))
                                    return t;
                                var o = new Map
                                  , i = new IntersectionObserver((function(e) {
                                    e.forEach((function(e) {
                                        var t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    ))
                                }
                                ),e);
                                return t = {
                                    id: n,
                                    observer: i,
                                    elements: o
                                },
                                c.push(n),
                                s.set(n, t),
                                t
                            }(n)
                              , o = r.id
                              , i = r.observer
                              , a = r.elements;
                            return a.set(e, t),
                            i.observe(e),
                            function() {
                                if (a.delete(e),
                                i.unobserve(e),
                                0 === a.size) {
                                    i.disconnect(),
                                    s.delete(o);
                                    var t = c.findIndex((function(e) {
                                        return e.root === o.root && e.margin === o.margin
                                    }
                                    ));
                                    t > -1 && c.splice(t, 1)
                                }
                            }
                        }(g, (function(e) {
                            return e && v(e)
                        }
                        ), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return e
                    }
                } else if (!f) {
                    var r = i.requestIdleCallback((function() {
                        return v(!0)
                    }
                    ));
                    return function() {
                        return i.cancelIdleCallback(r)
                    }
                }
            }
            ), [g, u, n, t, f]);
            var h = o.useCallback((function() {
                v(!1)
            }
            ), []);
            return [b, f, h]
        }
        ;
        var o = n(67294)
          , i = n(85095)
          , a = "function" === typeof IntersectionObserver
          , s = new Map
          , c = [];
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    81902: function(e, t, n) {
        "use strict";
        var r = n(33227)
          , o = n(88361)
          , i = n(85971)
          , a = n(52715)
          , s = n(91193)
          , c = n(87794);
        function u(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(e);
                if (t) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return a(this, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AppInitialProps", {
            enumerable: !0,
            get: function() {
                return f.AppInitialProps
            }
        }),
        Object.defineProperty(t, "NextWebVitalsMetric", {
            enumerable: !0,
            get: function() {
                return f.NextWebVitalsMetric
            }
        }),
        Object.defineProperty(t, "AppType", {
            enumerable: !0,
            get: function() {
                return f.AppType
            }
        }),
        t.default = void 0;
        var l = n(60932).Z
          , d = (0,
        n(92648).Z)(n(67294))
          , f = n(44511);
        function v(e) {
            return p.apply(this, arguments)
        }
        function p() {
            return (p = l(c.mark((function e(t) {
                var n, r, o;
                return c.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.Component,
                            r = t.ctx,
                            e.next = 3,
                            f.loadGetInitialProps(n, r);
                        case 3:
                            return o = e.sent,
                            e.abrupt("return", {
                                pageProps: o
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var m = function(e) {
            i(n, e);
            var t = u(n);
            function n() {
                return r(this, n),
                t.apply(this, arguments)
            }
            return o(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.Component
                      , n = e.pageProps;
                    return d.default.createElement(t, Object.assign({}, n))
                }
            }]),
            n
        }(d.default.Component);
        m.origGetInitialProps = v,
        m.getInitialProps = v,
        t.default = m
    },
    6452: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AmpStateContext = void 0;
        var r = (0,
        n(92648).Z)(n(67294)).default.createContext({});
        t.AmpStateContext = r
    },
    25271: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isInAmpMode = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , n = void 0 !== t && t
              , r = e.hybrid
              , o = void 0 !== r && r
              , i = e.hasQuery
              , a = void 0 !== i && i;
            return n || o && a
        }
    },
    57007: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAmp = function() {
            return i.isInAmpMode(r.default.useContext(o.AmpStateContext))
        }
        ;
        var r = (0,
        n(92648).Z)(n(67294))
          , o = n(6452)
          , i = n(25271);
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    59221: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
        var r = (0,
        n(92648).Z)(n(67294))
          , o = r.default.createContext(null);
        t.AppRouterContext = o;
        var i = r.default.createContext(null);
        t.LayoutRouterContext = i;
        var a = r.default.createContext(null);
        t.GlobalLayoutRouterContext = a;
        var s = r.default.createContext(null);
        t.TemplateContext = s
    },
    91897: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = i.default
              , o = (null == t ? void 0 : t.suspense) ? {} : {
                loading: function(e) {
                    e.error,
                    e.isLoading;
                    return e.pastDelay,
                    null
                }
            };
            e instanceof Promise ? o.loader = function() {
                return e
            }
            : "function" === typeof e ? o.loader = e : "object" === typeof e && (o = r({}, o, e));
            if ((o = r({}, o, t)).suspense)
                throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
            o.suspense && (delete o.ssr,
            delete o.loading);
            o.loadableGenerated && delete (o = r({}, o, o.loadableGenerated)).loadableGenerated;
            if ("boolean" === typeof o.ssr && !o.suspense) {
                if (!o.ssr)
                    return delete o.ssr,
                    a(n, o);
                delete o.ssr
            }
            return n(o)
        }
        ,
        t.noSSR = a;
        var r = n(6495).Z
          , o = n(92648).Z
          , i = (o(n(67294)),
        o(n(70346)));
        function a(e, t) {
            return delete t.webpack,
            delete t.modules,
            e(t)
        }
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    3876: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultHead = l,
        t.default = void 0;
        var r = n(6495).Z
          , o = n(92648).Z
          , i = (0,
        n(91598).Z)(n(67294))
          , a = o(n(28402))
          , s = n(6452)
          , c = n(84938)
          , u = n(25271);
        n(44511);
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [i.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function d(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var f = ["name", "httpEquiv", "charSet", "itemProp"];
        function v(e, t) {
            var n = t.inAmpMode;
            return e.reduce(d, []).reverse().concat(l(n).reverse()).filter(function() {
                var e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return function(o) {
                    var i = !0
                      , a = !1;
                    if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        var s = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(s) ? i = !1 : e.add(s)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (var c = 0, u = f.length; c < u; c++) {
                            var l = f[c];
                            if (o.props.hasOwnProperty(l))
                                if ("charSet" === l)
                                    n.has(l) ? i = !1 : n.add(l);
                                else {
                                    var d = o.props[l]
                                      , v = r[l] || new Set;
                                    "name" === l && a || !v.has(d) ? (v.add(d),
                                    r[l] = v) : i = !1
                                }
                        }
                    }
                    return i
                }
            }()).reverse().map((function(e, t) {
                var o = e.key || t;
                if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                    return e.props.href.startsWith(t)
                }
                ))) {
                    var a = r({}, e.props || {});
                    return a["data-href"] = a.href,
                    a.href = void 0,
                    a["data-optimized-fonts"] = !0,
                    i.default.cloneElement(e, a)
                }
                return i.default.cloneElement(e, {
                    key: o
                })
            }
            ))
        }
        var p = function(e) {
            var t = e.children
              , n = i.useContext(s.AmpStateContext)
              , r = i.useContext(c.HeadManagerContext);
            return i.default.createElement(a.default, {
                reduceComponentsToState: v,
                headManager: r,
                inAmpMode: u.isInAmpMode(n)
            }, t)
        };
        t.default = p,
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    66857: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LoadableContext = void 0;
        var r = (0,
        n(92648).Z)(n(67294)).default.createContext(null);
        t.LoadableContext = r
    },
    70346: function(e, t, n) {
        "use strict";
        var r = n(33227)
          , o = n(88361);
        function i(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return a(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, s = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return s = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    i = e
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(6495).Z
          , c = (0,
        n(92648).Z)(n(67294))
          , u = n(66857)
          , l = n(61688).useSyncExternalStore
          , d = []
          , f = []
          , v = !1;
        function p(e) {
            var t = e()
              , n = {
                loading: !0,
                loaded: null,
                error: null
            };
            return n.promise = t.then((function(e) {
                return n.loading = !1,
                n.loaded = e,
                e
            }
            )).catch((function(e) {
                throw n.loading = !1,
                n.error = e,
                e
            }
            )),
            n
        }
        var m = function() {
            function e(t, n) {
                r(this, e),
                this._loadFn = t,
                this._opts = n,
                this._callbacks = new Set,
                this._delay = null,
                this._timeout = null,
                this.retry()
            }
            return o(e, [{
                key: "promise",
                value: function() {
                    return this._res.promise
                }
            }, {
                key: "retry",
                value: function() {
                    var e = this;
                    this._clearTimeouts(),
                    this._res = this._loadFn(this._opts.loader),
                    this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    var t = this._res
                      , n = this._opts;
                    t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                        e._update({
                            pastDelay: !0
                        })
                    }
                    ), n.delay)),
                    "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                        e._update({
                            timedOut: !0
                        })
                    }
                    ), n.timeout))),
                    this._res.promise.then((function() {
                        e._update({}),
                        e._clearTimeouts()
                    }
                    )).catch((function(t) {
                        e._update({}),
                        e._clearTimeouts()
                    }
                    )),
                    this._update({})
                }
            }, {
                key: "_update",
                value: function(e) {
                    this._state = s({}, this._state, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, e),
                    this._callbacks.forEach((function(e) {
                        return e()
                    }
                    ))
                }
            }, {
                key: "_clearTimeouts",
                value: function() {
                    clearTimeout(this._delay),
                    clearTimeout(this._timeout)
                }
            }, {
                key: "getCurrentValue",
                value: function() {
                    return this._state
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var t = this;
                    return this._callbacks.add(e),
                    function() {
                        t._callbacks.delete(e)
                    }
                }
            }]),
            e
        }();
        function g(e) {
            return function(e, t) {
                var n = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null,
                    suspense: !1
                }, t);
                n.suspense && (n.lazy = c.default.lazy(n.loader));
                var r = null;
                function o() {
                    if (!r) {
                        var t = new m(e,n);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }
                if (!v) {
                    var a = n.webpack ? n.webpack() : n.modules;
                    a && f.push((function(e) {
                        var t, n = i(a);
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                var r = t.value;
                                if (-1 !== e.indexOf(r))
                                    return o()
                            }
                        } catch (s) {
                            n.e(s)
                        } finally {
                            n.f()
                        }
                    }
                    ))
                }
                function d() {
                    o();
                    var e = c.default.useContext(u.LoadableContext);
                    e && Array.isArray(n.modules) && n.modules.forEach((function(t) {
                        e(t)
                    }
                    ))
                }
                var p = n.suspense ? function(e, t) {
                    return d(),
                    c.default.createElement(n.lazy, s({}, e, {
                        ref: t
                    }))
                }
                : function(e, t) {
                    d();
                    var o = l(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                    return c.default.useImperativeHandle(t, (function() {
                        return {
                            retry: r.retry
                        }
                    }
                    ), []),
                    c.default.useMemo((function() {
                        return o.loading || o.error ? c.default.createElement(n.loading, {
                            isLoading: o.loading,
                            pastDelay: o.pastDelay,
                            timedOut: o.timedOut,
                            error: o.error,
                            retry: r.retry
                        }) : o.loaded ? c.default.createElement((t = o.loaded) && t.__esModule ? t.default : t, e) : null;
                        var t
                    }
                    ), [e, o])
                }
                ;
                return p.preload = function() {
                    return o()
                }
                ,
                p.displayName = "LoadableComponent",
                c.default.forwardRef(p)
            }(p, e)
        }
        function b(e, t) {
            for (var n = []; e.length; ) {
                var r = e.pop();
                n.push(r(t))
            }
            return Promise.all(n).then((function() {
                if (e.length)
                    return b(e, t)
            }
            ))
        }
        g.preloadAll = function() {
            return new Promise((function(e, t) {
                b(d).then(e, t)
            }
            ))
        }
        ,
        g.preloadReady = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return new Promise((function(t) {
                var n = function() {
                    return v = !0,
                    t()
                };
                b(f, e).then(n, n)
            }
            ))
        }
        ,
        window.__NEXT_PRELOADREADY = g.preloadReady;
        var h = g;
        t.default = h
    },
    28402: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.headManager
              , n = e.reduceComponentsToState;
            function s() {
                if (t && t.mountedInstances) {
                    var o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(o, e))
                }
            }
            if (o) {
                var c;
                null == t || null == (c = t.mountedInstances) || c.add(e.children),
                s()
            }
            return i((function() {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                function() {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            )),
            i((function() {
                return t && (t._pendingUpdate = s),
                function() {
                    t && (t._pendingUpdate = s)
                }
            }
            )),
            a((function() {
                return t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null),
                function() {
                    t && t._pendingUpdate && (t._pendingUpdate(),
                    t._pendingUpdate = null)
                }
            }
            )),
            null
        }
        ;
        var r = (0,
        n(91598).Z)(n(67294));
        var o = !1
          , i = o ? function() {}
        : r.useLayoutEffect
          , a = o ? function() {}
        : r.useEffect
    },
    48472: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, {
            $: function() {
                return r
            }
        }),
        function(e) {
            e.UPCOMING = "UPCOMING",
            e.LIVE = "LIVE",
            e.PAST = "PAST",
            e.CANCELLED = "CANCELLED",
            e.POSTPONED = "POSTPONED",
            e.UNKNOWN = "UNKNOWN",
            e.INTERRUPTED = "INTERRUPTED",
            e.DELETED = "DELETED",
            e.ABANDONED = "ABANDONED",
            e.SUSPENDED = "SUSPENDED",
            e.DELAYED = "DELAYED"
        }(r || (r = {}))
    },
    37713: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return o
            }
        });
        var r = n(48472)
          , o = function(e) {
            switch (e) {
            case 0:
                return r.$.UPCOMING;
            case 1:
                return r.$.LIVE;
            case 2:
                return r.$.PAST;
            case 3:
                return r.$.CANCELLED;
            case 4:
                return r.$.POSTPONED;
            case 6:
                return r.$.INTERRUPTED;
            case 7:
                return r.$.DELETED;
            case 8:
                return r.$.ABANDONED;
            case 9:
                return r.$.SUSPENDED;
            case 10:
                return r.$.DELAYED;
            default:
                return r.$.UNKNOWN
            }
        }
    },
    87622: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return u
            },
            J: function() {
                return l
            }
        });
        var r = n(67294)
          , o = n(42642)
          , i = n(83454)
          , a = new Promise((function(e, t) {
            if (!(0,
            o.S)())
                return e();
            var n = new Image;
            n.onload = function() {
                e()
            }
            ,
            n.onerror = function() {
                t()
            }
            ,
            n.src = "".concat(i.env.PUBLIC_CDN || "/ls-web-assets/", "images/webp-format-test.webp")
        }
        ))
          , s = n(85893)
          , c = (0,
        r.createContext)({
            ImageComponent: void 0,
            isWebpSupported: !0
        })
          , u = function(e) {
            var t = e.ImageComponent
              , n = e.children
              , o = function() {
                var e = (0,
                r.useState)(!0)
                  , t = e[0]
                  , n = e[1];
                return a.catch((function() {
                    return n(!1)
                }
                )),
                t
            }();
            return (0,
            s.jsx)(c.Provider, {
                value: {
                    ImageComponent: t,
                    isWebpSupported: o
                },
                children: n
            })
        }
          , l = function() {
            return (0,
            r.useContext)(c)
        }
    },
    18531: function(e, t, n) {
        "use strict";
        n.d(t, {
            c2: function() {
                return c
            },
            l4: function() {
                return s
            }
        });
        var r = n(67294)
          , o = n(75473)
          , i = n(85893)
          , a = (0,
        r.createContext)({
            pushNotificationMessage: o.Z
        })
          , s = function(e) {
            var t, n, o = e.children, s = (0,
            r.useState)(), c = s[0], u = s[1];
            return t = !!c,
            n = function() {
                u(void 0)
            }
            ,
            (0,
            r.useEffect)((function() {
                t && setTimeout((function() {
                    n()
                }
                ), 3e3)
            }
            ), [t, n]),
            (0,
            i.jsx)(a.Provider, {
                value: {
                    notificationMessage: c,
                    pushNotificationMessage: u
                },
                children: o
            })
        }
          , c = function() {
            return (0,
            r.useContext)(a)
        }
    },
    3700: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return a
            }
        });
        var r = n(67294)
          , o = n(14930)
          , i = n(75473)
          , a = (0,
        r.createContext)({
            activeSport: o.ActiveSportEnum.football,
            queryString: "",
            queryParams: {},
            category: "home",
            isNativePage: !1,
            isSevPage: !1,
            isDesktopView: !1,
            setIsDesktopView: i.Z,
            toggleExploreMenu: i.Z,
            setCurrentModal: i.Z,
            modalIframeRef: void 0,
            prevModalRef: void 0,
            currentModal: void 0,
            modalViewStateRef: void 0,
            isExploreMenuOpened: !1,
            leftMenuLinks: {},
            setLeftMenuLinks: i.Z,
            isAmp: !1,
            generated: 0,
            segmentTracking: null
        })
    },
    93033: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(3700)
          , i = function() {
            return (0,
            r.useContext)(o.Q)
        }
    },
    16622: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return o
            }
        });
        var r = n(67294)
          , o = function() {
            var e = (0,
            r.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            r.useEffect)((function() {
                n(!0)
            }
            ), []),
            t
        }
    },
    31561: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return o
            }
        });
        var r = n(67294)
          , o = (0,
        n(42642).S)() ? r.useLayoutEffect : r.useEffect
    },
    22759: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(73997)
          , i = function(e) {
            var t = e.onMessageReceivedHandler
              , n = e.skipJsonStructureCheck
              , i = e.originUrl
              , a = e.typePropName;
            (0,
            r.useEffect)((function() {
                var e = function(e) {
                    var t = e.onMessageReceivedHandler
                      , n = e.skipJsonStructureCheck
                      , r = e.originUrl
                      , i = e.typePropName
                      , a = void 0 === i ? "type" : i;
                    return function(e) {
                        if (e.origin === r) {
                            var i = e.data;
                            if (n || (0,
                            o.yX)(i)) {
                                var s = n ? i : JSON.parse(i)
                                  , c = s[a];
                                s && c && t(c, s.payload, s.id)
                            }
                        }
                    }
                }({
                    onMessageReceivedHandler: t,
                    skipJsonStructureCheck: n,
                    originUrl: i,
                    typePropName: a
                });
                return window.addEventListener("message", e),
                function() {
                    window.removeEventListener("message", e)
                }
            }
            ), [t, i, n, a])
        }
    },
    11817: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return s
            }
        });
        var r = n(67294)
          , o = n(28501)
          , i = n(42642)
          , a = function(e, t) {
            return e.includes("?") ? "".concat(e, "&").concat(t) : "".concat(e, "?").concat(t)
        }
          , s = function() {
            var e = (0,
            o.L)().isDesktopWidth;
            return (0,
            r.useCallback)((function(t) {
                var n = t.redirectLink
                  , r = t.medium
                  , o = t.campaign
                  , s = function(e) {
                    var t = e.redirectLink
                      , n = e.messageId
                      , r = e.medium
                      , o = e.campaign
                      , i = e.deviceType
                      , s = new URLSearchParams("platform=".concat(i, "&medium=").concat(r));
                    n && s.set("lsm_click_id", n),
                    o && s.set("campaign", o);
                    var c = s.toString()
                      , u = function(e) {
                        if (l.searchParams.has(e)) {
                            var t = decodeURI(l.searchParams.get(e) || "");
                            l.searchParams.set(e, encodeURI(a(t, c)))
                        }
                    }
                      , l = new URL(t);
                    return l.host.toLowerCase().includes("onelink.me") && (u("af_dp"),
                    u("af_web_dp")),
                    a(l.toString(), c)
                }({
                    redirectLink: n,
                    messageId: t.messageId,
                    medium: r,
                    campaign: o,
                    deviceType: e ? "desktop" : "mobile_web"
                });
                (0,
                i.S)() && window && window.open(s, "_blank")
            }
            ), [e])
        }
    },
    28501: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return c
            }
        });
        var r = n(67294)
          , o = n(93033)
          , i = n(42642)
          , a = 1024
          , s = function() {
            return (0,
            i.S)() ? window.innerWidth : a
        }
          , c = function() {
            var e = (0,
            o.b)().isDesktopView
              , t = (0,
            r.useState)(s())
              , n = t[0]
              , i = t[1];
            return (0,
            r.useEffect)((function() {
                i(s())
            }
            ), []),
            (0,
            r.useEffect)((function() {
                var e, t = function() {
                    clearTimeout(e),
                    e = setTimeout((function() {
                        return i(s())
                    }
                    ), 200)
                };
                return window.addEventListener("resize", t),
                function() {
                    window.removeEventListener("resize", t)
                }
            }
            ), []),
            (0,
            r.useMemo)((function() {
                return {
                    isSmallestWidth: n <= 320 && !e,
                    isVerySmallWidth: n < 350 && !e,
                    isSmallMobileWidth: n < 400 && !e,
                    isTabletWidth: n <= 590 && !e,
                    isDesktopWidth: n >= a || e,
                    viewport: n >= a || e ? "desktop" : "mobile"
                }
            }
            ), [n, e])
        }
    },
    62340: function(e, t, n) {
        "use strict";
        n.d(t, {
            LogLevelEnum: function() {
                return r.LogLevelEnum
            }
        });
        var r = n(45722);
        n.o(r, "ActiveLangEnum") && n.d(t, {
            ActiveLangEnum: function() {
                return r.ActiveLangEnum
            }
        }),
        n.o(r, "ActiveSportEnum") && n.d(t, {
            ActiveSportEnum: function() {
                return r.ActiveSportEnum
            }
        }),
        n.o(r, "FavouriteTypeEnum") && n.d(t, {
            FavouriteTypeEnum: function() {
                return r.FavouriteTypeEnum
            }
        }),
        n.o(r, "RevalidateInterval") && n.d(t, {
            RevalidateInterval: function() {
                return r.RevalidateInterval
            }
        }),
        n.o(r, "SessionStorageKeys") && n.d(t, {
            SessionStorageKeys: function() {
                return r.SessionStorageKeys
            }
        })
    },
    9268: function(e, t, n) {
        "use strict";
        n.d(t, {
            AD: function() {
                return r
            },
            X5: function() {
                return i
            },
            ik: function() {
                return o
            }
        });
        var r, o, i;
        !function(e) {
            e.scores = "scores",
            e.favourites = "favourites",
            e.match_details_info = "match_details_info",
            e.match_details_lineups = "match_details_lineups",
            e.match_details_summary = "match_details_summary",
            e.match_details_h2h = "match_details_h2h"
        }(r || (r = {})),
        function(e) {
            e.productClose = "productClose",
            e.marketingClose = "marketingClose",
            e.marketingButton = "marketingButton",
            e.LiveScore6 = "LiveScore6"
        }(o || (o = {})),
        function(e) {
            e.BasketballNBA = "BasketballNBA",
            e.BoxingJoshua = "BoxingJoshua",
            e.CricketIPL = "CricketIPL",
            e.FootballDefault = "FootballDefault",
            e.FootballEngland = "FootballEngland",
            e.FootballEnglandAlt = "FootballEnglandAlt",
            e.FootballIreland = "FootballIreland",
            e.FootballIrelandAlt = "FootballIrelandAlt",
            e.FootballNetherlands = "FootballNetherlands",
            e.FootballNetherlandsAlt = "FootballNetherlandsAlt",
            e.FootballNigeria = "FootballNigeria",
            e.FootballNigeriaAlt = "FootballNigeriaAlt",
            e.FootballUCL = "FootballUCL",
            e.GenericBlackFriday = "GenericBlackFriday",
            e.GenericCompetition = "GenericCompetition",
            e.GenericMegaboost = "GenericMegaboost",
            e.GenericPriceboost = "GenericPriceboost",
            e.GenericStandard = "GenericStandard",
            e.GenericXmas = "GenericXmas",
            e.GolfMasters = "GolfMasters",
            e.HorseracingCheltenham = "HorseracingCheltenham",
            e.HorseracingDefault = "HorseracingDefault",
            e.TennisDefault = "TennisDefault",
            e.TennisWimbledon = "TennisWimbledon"
        }(i || (i = {}))
    },
    14930: function(e, t, n) {
        "use strict";
        n.d(t, {
            ActiveLangEnum: function() {
                return i
            },
            ActiveSportEnum: function() {
                return u
            },
            ActiveSportIdMap: function() {
                return p
            },
            BadgesResEnum: function() {
                return s
            },
            ContentLanguageEnum: function() {
                return a
            },
            DOMAIN_DEFAULT: function() {
                return b
            },
            DomainEnum: function() {
                return v
            },
            DomainMapping: function() {
                return h
            },
            FavouriteTypeEnum: function() {
                return l
            },
            RevalidateInterval: function() {
                return c
            },
            RouteChangeEnum: function() {
                return d
            },
            ScreenNamesEnum: function() {
                return o
            },
            SessionStorageKeys: function() {
                return f
            }
        });
        var r, o, i, a, s, c, u, l, d, f, v, p, m = n(59499), g = n(33525);
        n.o(g, "EventVideoEnum") && n.d(t, {
            EventVideoEnum: function() {
                return g.EventVideoEnum
            }
        }),
        n.o(g, "LogLevelEnum") && n.d(t, {
            LogLevelEnum: function() {
                return g.LogLevelEnum
            }
        }),
        function(e) {
            e.Scores = "Scores",
            e.SEV = "SEV",
            e.Favourites = "Favourites",
            e.Explore = "Explore",
            e.Competitions = "Competitions",
            e.Matches = "Matches",
            e.Table = "Table",
            e.Live = "Live",
            e.Teams = "Teams",
            e.Index = "Index"
        }(o || (o = {})),
        function(e) {
            e.en = "en",
            e.de = "de",
            e.es = "es",
            e.it = "it"
        }(i || (i = {})),
        function(e) {
            e.de = "de-DE",
            e.en = "en-GB",
            e.it = "it-IT",
            e.es = "es-ES"
        }(a || (a = {})),
        function(e) {
            e.high = "high",
            e.medium = "medium"
        }(s || (s = {})),
        function(e) {
            e[e.FiveSeconds = 5] = "FiveSeconds",
            e[e.TenSeconds = 10] = "TenSeconds",
            e[e.FifteenSeconds = 15] = "FifteenSeconds",
            e[e.ThirtySeconds = 30] = "ThirtySeconds",
            e[e.OneMinute = 60] = "OneMinute",
            e[e.ThreeMinutes = 300] = "ThreeMinutes",
            e[e.FiveMinutes = 300] = "FiveMinutes",
            e[e.TenMinutes = 600] = "TenMinutes",
            e[e.FifteenMinutes = 900] = "FifteenMinutes",
            e[e.TwentyMinutes = 1200] = "TwentyMinutes",
            e[e.OneHour = 3600] = "OneHour",
            e[e.OneDay = 86400] = "OneDay",
            e[e.OneYear = 31536e3] = "OneYear"
        }(c || (c = {})),
        function(e) {
            e.football = "football",
            e.hockey = "hockey",
            e.basketball = "basketball",
            e.tennis = "tennis",
            e.cricket = "cricket"
        }(u || (u = {})),
        function(e) {
            e.matches = "matches",
            e.competitions = "competitions"
        }(l || (l = {})),
        function(e) {
            e.routeChangeStart = "routeChangeStart",
            e.routeChangeComplete = "routeChangeComplete",
            e.routeChangeError = "routeChangeError"
        }(d || (d = {})),
        function(e) {
            e.segmentScreenView = "ls.segment-screen-view",
            e.segmentBannerImpressionHash = "ls.segment-banner-impression-hash"
        }(f || (f = {})),
        function(e) {
            e.livescorecom = "livescorecom",
            e.livescorecomtr = "livescorecomtr"
        }(v || (v = {})),
        function(e) {
            e.football = "1",
            e.hockey = "5",
            e.basketball = "23",
            e.tennis = "2",
            e.cricket = "73"
        }(p || (p = {}));
        var b = "default"
          , h = (r = {},
        (0,
        m.Z)(r, b, v.livescorecom),
        (0,
        m.Z)(r, "https://www.dev-react.livescore.com.tr", v.livescorecomtr),
        (0,
        m.Z)(r, "https://www.test-react.livescore.com.tr", v.livescorecomtr),
        (0,
        m.Z)(r, "https://www.test2-react.livescore.com.tr", v.livescorecomtr),
        (0,
        m.Z)(r, "https://www.loadtest-react.livescore.com.tr", v.livescorecomtr),
        (0,
        m.Z)(r, "https://www.preprod-react.livescore.com.tr", v.livescorecomtr),
        (0,
        m.Z)(r, "https://www.livescore.com.tr", v.livescorecomtr),
        r)
    },
    13930: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return r
            }
        });
        var r;
        n(14930);
        !function(e) {
            e[e.trace = 0] = "trace",
            e[e.debug = 1] = "debug",
            e[e.info = 2] = "info",
            e[e.warn = 3] = "warn",
            e[e.error = 4] = "error"
        }(r || (r = {}))
    },
    24610: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, {
            R: function() {
                return r
            }
        }),
        function(e) {
            e.VOD = "VOD",
            e.YOUTUBE = "YOUTUBE"
        }(r || (r = {}))
    },
    45722: function(e, t, n) {
        "use strict";
        n.d(t, {
            ActiveLangEnum: function() {
                return o.ActiveLangEnum
            },
            ActiveSportEnum: function() {
                return o.ActiveSportEnum
            },
            AnnouncementBannerPageEnum: function() {
                return r.AD
            },
            ContentLanguageEnum: function() {
                return o.ContentLanguageEnum
            },
            EventVideoEnum: function() {
                return c.R
            },
            FavouriteTypeEnum: function() {
                return o.FavouriteTypeEnum
            },
            LogLevelEnum: function() {
                return i.m
            },
            RevalidateInterval: function() {
                return o.RevalidateInterval
            },
            ScreenNamesEnum: function() {
                return o.ScreenNamesEnum
            },
            SessionStorageKeys: function() {
                return o.SessionStorageKeys
            }
        });
        var r = n(9268)
          , o = n(14930);
        n.o(o, "EventVideoEnum") && n.d(t, {
            EventVideoEnum: function() {
                return o.EventVideoEnum
            }
        }),
        n.o(o, "LogLevelEnum") && n.d(t, {
            LogLevelEnum: function() {
                return o.LogLevelEnum
            }
        });
        var i = n(13930)
          , a = n(6278);
        n.o(a, "EventVideoEnum") && n.d(t, {
            EventVideoEnum: function() {
                return a.EventVideoEnum
            }
        });
        var s = n(54443);
        n.o(s, "EventVideoEnum") && n.d(t, {
            EventVideoEnum: function() {
                return s.EventVideoEnum
            }
        });
        var c = n(24610)
    },
    39474: function(e, t, n) {
        "use strict";
        var r, o;
        n.d(t, {
            y: function() {
                return r
            }
        }),
        function(e) {
            e.Fixtures = "fixtures",
            e.Results = "results"
        }(r || (r = {})),
        function(e) {
            e.all = "all",
            e.goals = "goals",
            e.assists = "assists",
            e.shotsOnTarget = "shots-on-target",
            e.yellowCards = "yellow-cards",
            e.redCards = "red-cards"
        }(o || (o = {}))
    },
    15631: function(e, t, n) {
        "use strict";
        var r, o, i, a, s;
        n.d(t, {
            FavouriteAction: function() {
                return s
            },
            MatchStatusMappingEnum: function() {
                return i
            },
            MatchTrackerActionEnum: function() {
                return r
            },
            SettingsTypeEnum: function() {
                return a
            },
            SportIdMap: function() {
                return o
            }
        }),
        function(e) {
            e.expand = "expand",
            e.collapse = "collapse"
        }(r || (r = {})),
        function(e) {
            e.football = "1",
            e.hockey = "5",
            e.basketball = "23",
            e.tennis = "2",
            e.cricket = "73"
        }(o || (o = {})),
        function(e) {
            e.UPCOMING = "notStarted",
            e.LIVE = "live",
            e.PAST = "finished",
            e.CANCELLED = "canceled",
            e.POSTPONED = "postponed",
            e.INTERRUPTED = "interrupted",
            e.DELETED = "deleted",
            e.ABANDONED = "abandoned",
            e.SUSPENDED = "suspended",
            e.DELAYED = "delayed",
            e.UNKNOWN = "unknown",
            e.NONE = "none"
        }(i || (i = {})),
        function(e) {
            e.timezone = "timezone"
        }(a || (a = {})),
        function(e) {
            e.add = "add",
            e.remove = "remove"
        }(s || (s = {}))
    },
    54443: function() {},
    44693: function(e, t, n) {
        "use strict";
        n.d(t, {
            cg: function() {
                return c
            },
            vf: function() {
                return a
            },
            xP: function() {
                return s
            }
        });
        var r = n(42964);
        function o(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return i(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return s = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    a = e
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw a
                    }
                }
            }
        }
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var a = function(e) {
            var t, n = [], r = o(e.headers.entries());
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value;
                    n.push({
                        name: i[0],
                        value: i[1]
                    })
                }
            } catch (a) {
                r.e(a)
            } finally {
                r.f()
            }
            return n
        }
          , s = function(e, t) {
            return new Promise((function(n) {
                setTimeout((function() {
                    return n(t)
                }
                ), e)
            }
            ))
        }
          , c = function(e) {
            return function(e) {
                return e.text().then((function(e) {
                    return e ? JSON.parse(e) : {}
                }
                ))
            }(function(e) {
                if (!e.ok)
                    throw r.k.error("Request failed", {
                        status: e.status,
                        statusText: e.statusText,
                        ok: e.ok,
                        headers: a(e),
                        url: e.url
                    })(),
                    e;
                return e
            }(e))
        }
    },
    54355: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return o
            }
        });
        var r = n(42642)
          , o = function(e) {
            (0,
            r.S)() && (window.dataLayer = window.dataLayer || [],
            window.dataLayer.push(e))
        }
    },
    7335: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bt: function() {
                return H
            },
            DJ: function() {
                return m
            },
            Fe: function() {
                return F
            },
            Fo: function() {
                return C
            },
            H8: function() {
                return M
            },
            Hd: function() {
                return L
            },
            Je: function() {
                return P
            },
            OF: function() {
                return B
            },
            OH: function() {
                return c
            },
            QR: function() {
                return T
            },
            Qh: function() {
                return _
            },
            Uk: function() {
                return I
            },
            VA: function() {
                return j
            },
            Vk: function() {
                return k
            },
            WZ: function() {
                return p
            },
            ZM: function() {
                return g
            },
            a4: function() {
                return A
            },
            aF: function() {
                return d
            },
            bz: function() {
                return O
            },
            ek: function() {
                return U
            },
            gS: function() {
                return N
            },
            gn: function() {
                return x
            },
            jH: function() {
                return f
            },
            l: function() {
                return h
            },
            o7: function() {
                return S
            },
            p6: function() {
                return l
            },
            pw: function() {
                return y
            },
            qq: function() {
                return G
            },
            s3: function() {
                return w
            },
            xZ: function() {
                return v
            },
            yS: function() {
                return Z
            },
            zS: function() {
                return D
            },
            zs: function() {
                return R
            }
        });
        var r = n(27812)
          , o = n(16835)
          , i = n(59397)
          , a = n(14930)
          , s = ["MMMM", "MMM", "MM", "M"]
          , c = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = "dateFormat-".concat(e, "-").concat(JSON.stringify(t));
            return (0,
            i.R)(n, (function() {
                return new Intl.DateTimeFormat(e,t)
            }
            ))
        }
          , u = function(e) {
            return e < 10 ? "0".concat(e) : "".concat(e)
        }
          , l = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.ActiveLangEnum.en
              , o = n ? e.getUTCHours() : e.getHours()
              , i = u(o)
              , l = n ? e.getUTCMinutes() : e.getMinutes()
              , d = u(l)
              , f = n ? e.getUTCDate() : e.getDate()
              , v = u(f)
              , p = (n ? e.getUTCMonth() : e.getMonth()) + 1
              , m = u(p)
              , g = c(r, {
                month: "short"
            }).format(e)
              , b = c(r, {
                month: "long"
            }).format(e)
              , h = n ? e.getUTCFullYear() : e.getFullYear();
            t = t.replace("HH", i).replace("mm", d).replace("DD", v).replace("D", "".concat(f)).replace("YYYY", "".concat(h));
            for (var y = [b, g, m, "".concat(p)], w = 0; w < s.length; w++)
                if (t.indexOf(s[w]) > -1) {
                    t = t.replace(s[w], y[w]);
                    break
                }
            return t
        }
          , d = function(e) {
            return -1 * (e || new Date).getTimezoneOffset() / 60
        }
          , f = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = new Date(t);
            return isNaN(Number(e)) ? t : (n ? (r.setMonth(t.getUTCMonth()),
            r.setDate(t.getUTCDate()),
            r.setHours(t.getUTCHours()),
            r.setMinutes(t.getUTCMinutes() + 60 * Number(e))) : (r.setMonth(t.getMonth()),
            r.setDate(t.getDate()),
            r.setHours(t.getHours()),
            r.setMinutes(t.getMinutes() + 60 * Number(e))),
            r)
        }
          , v = function(e, t) {
            if (!t)
                return e;
            var n = new Date(e)
              , r = e.getMinutes();
            return null === n || void 0 === n || n.setMinutes(t + r),
            n
        }
          , p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ActiveLangEnum.en;
            return l(e, "D MMMM YYYY", void 0, t)
        }
          , m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ActiveLangEnum.en
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "short"
              , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
            return c(t, {
                year: n,
                month: r,
                day: o
            }).format(e)
        }
          , g = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ActiveLangEnum.en
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "short";
            return c(t, {
                weekday: n
            }).format(e)
        }
          , b = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d)/
          , h = (new Date(2021,7,1),
        function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e)
                return null;
            t && e.setHours(e.getHours() + t);
            var r = new Date
              , o = r.getTimezoneOffset() === e.getTimezoneOffset();
            if (o || n)
                return e;
            var i = r.getTimezoneOffset() > e.getTimezoneOffset() ? 1 : -1;
            return e.setHours(e.getHours() + i),
            e
        }
        )
          , y = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!b.test(String(e)))
                return null;
            var r = b.exec(String(e))
              , i = (0,
            o.Z)(r, 6)
              , a = i[1]
              , s = i[2]
              , c = i[3]
              , u = i[4]
              , l = i[5]
              , d = new Date("".concat(a, "/").concat(s, "/").concat(c, " ").concat(u, ":").concat(l));
            return h(d, t, n)
        }
          , w = function(e) {
            return e ? Number(l(e, "YYYYMMDDHHmm00", !1)) : null
        }
          , _ = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ActiveLangEnum.en;
            return e.getFullYear() !== (new Date).getFullYear() ? "".concat(e.getFullYear()) : l(e, "D MMM", !1, t)
        }
          , O = function(e, t) {
            return l(e, "DD MMM")
        }
          , x = function(e) {
            return l(e, "DD/MM/YYYY")
        }
          , S = function(e) {
            return l(e, "YYYY-MM-DD", !0)
        }
          , k = function(e) {
            return l(e, "YYYY-MM-DD", !1)
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
            return e instanceof Date ? l(e, "YYYYMMDD") : e.replace(/-/g, "")
        }
          , C = function(e, t, n) {
            return n ? e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate() : e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
        }
          , P = function(e) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(e))
                return !1;
            var t = e.split("-").map((function(e) {
                return Number(e)
            }
            )).splice(0, 3);
            return E.apply(void 0, (0,
            r.Z)(t))
        }
          , E = function(e, t, n) {
            return !(e < 1970 || e > 9999 || t < 1 || t > 12) && !(n < 1 || n > {
                1: 31,
                2: !(e % 4) && e % 100 || !(e % 400) ? 29 : 28,
                3: 31,
                4: 30,
                5: 31,
                6: 30,
                7: 31,
                8: 31,
                9: 30,
                10: 31,
                11: 30,
                12: 31
            }[String(t)])
        }
          , A = function(e, t) {
            return function(e, t, n) {
                return Array.from({
                    length: e
                }).map((function(e, r) {
                    var o = new Date("".concat(t, "/").concat(n, "/").concat(r + 1));
                    return {
                        day: r + 1,
                        dateKey: "".concat(t).concat(u(n)).concat(u(r + 1)),
                        date: o,
                        dateParam: k(o)
                    }
                }
                ))
            }(function(e, t) {
                return new Date(e,t,0).getDate()
            }(e, t), e, t)
        }
          , I = function(e, t) {
            var n = e.getFullYear() === t.getFullYear()
              , r = e.getMonth() === t.getMonth()
              , o = e.getDate() === t.getDate();
            return n && r && o
        }
          , D = function(e, t) {
            return t ? new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()) : new Date(e.getFullYear(),e.getMonth(),e.getDate())
        }
          , L = function(e) {
            if (isNaN(e))
                return "";
            var t = Math.floor(e / 60)
              , n = Math.floor(e - 60 * t)
              , r = n < 10 ? "0".concat(n) : n;
            return "".concat(t, ":").concat(r)
        }
          , N = function(e, t) {
            var n = y(e);
            return null === n || void 0 === n || n.setUTCMinutes(n.getUTCMinutes() - 60 * Number(t)),
            n
        }
          , T = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ActiveLangEnum.en
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , r = arguments.length > 3 ? arguments[3] : void 0;
            return l(e, n ? "HH:mm, DD MMMM YYYY" : "DD MMMM YYYY", r, t)
        }
          , M = function() {
            return (new Date).getFullYear()
        }
          , R = function(e) {
            return e ? l(e, "HH:mm") : ""
        }
          , U = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? e.getTime() > f(0, t, !0).getTime() : e.getTime() > t.getTime()
        }
          , B = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? e.getTime() <= f(0, t, !0).getTime() : e.getTime() <= t.getTime()
        }
          , Z = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
            return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        }
          , F = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date
              , n = t.getTime() - 6e4 * t.getTimezoneOffset()
              , r = n + 6e4 * e;
            return new Date(r)
        }
          , G = function() {
            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now(), a = null === (e = f(o, y(Number(n)) || void 0)) || void 0 === e ? void 0 : e.getTime(), s = null === (t = f(o, y(Number(r)) || void 0)) || void 0 === t ? void 0 : t.getTime();
            return i >= a && i <= s
        }
          , H = function(e, t, n) {
            if (!e || !t || !n)
                return !1;
            var r = 864e5
              , o = (new Date).getTime();
            return e.getTime() >= o - r * t && e.getTime() <= o + r * n
        }
    },
    49136: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return h
            }
        });
        var r = n(42642)
          , o = (0,
        r.S)() ? window.navigator.userAgent.toLowerCase() : ""
          , i = function() {
            return o.includes("windows")
        }
          , a = function() {
            return !i() && o.includes("iphone")
        }
          , s = function() {
            return o.includes("ipod")
        }
          , c = (0,
        r.S)() && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
          , u = function() {
            return o.includes("ipad") || c
        }
          , l = /^((?!chrome|android).)*safari/i.test(o)
          , d = function() {
            return !i() && o.includes("android")
        }
          , f = function() {
            return d() && o.includes("mobile")
        }
          , v = function() {
            return d() && !o.includes("mobile")
        }
          , p = function() {
            return i() && o.includes("phone")
        }
          , m = function() {
            return i() && o.includes("touch") && !p()
        }
          , g = function() {
            return f() || a() || s() || p()
        }
          , b = function() {
            return u() || v() || m()
        }
          , h = {
            isMacOS: o.includes("mac"),
            isIOS: a() || s() || u(),
            isIphone: a(),
            isIpod: s(),
            isIpad: u(),
            isOpera: !!(0,
            r.S)() && (!!window.opr && !!opr.addons || !!window.opera || o.includes(" opr/")),
            isSafari: l,
            isAndroid: d(),
            isAndroidPhone: f(),
            isAndroidTablet: v(),
            isWindows: i(),
            isWindowsPhone: p(),
            isWindowsTablet: m(),
            isMobileDevice: g(),
            isTabletDevice: b(),
            isDesktopDevice: !b() && !g()
        }
    },
    18564: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ds: function() {
                return c
            },
            Hb: function() {
                return v
            },
            Pd: function() {
                return d
            },
            c3: function() {
                return i
            },
            k8: function() {
                return a
            },
            t6: function() {
                return f
            },
            uK: function() {
                return s
            },
            uU: function() {
                return l
            },
            zG: function() {
                return u
            }
        });
        var r = n(27812)
          , o = n(14930)
          , i = function(e) {
            return e && e === o.ActiveSportEnum.football ? "soccer" : e
        }
          , a = function(e) {
            return e ? Object.keys(e).map((function(t) {
                return "".concat(t, ":").concat(!!e[t] && e[t])
            }
            )).join("__") : ""
        }
          , s = function(e) {
            var t = Object.keys(e).map((function(t) {
                return "'".concat(t, "': ").concat(e[t])
            }
            ));
            return "Props: ".concat(t.join(" | "))
        }
          , c = function(e, t) {
            var n = null;
            return function() {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                clearTimeout(Number(n)),
                n = setTimeout((function() {
                    return e.apply(void 0, o)
                }
                ), t)
            }
        }
          , u = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return t.reduce((function(e, t) {
                    return t(e)
                }
                ), e)
            }
        }
          , l = function(e, t, n) {
            return t.every((function(e) {
                return 0 === e || Boolean(e)
            }
            )) ? [].concat((0,
            r.Z)(t), (0,
            r.Z)(n || []), [e]) : null
        }
          , d = function(e, t) {
            for (var n = [], r = 0; r < e.length; r += t)
                n.push(e.slice(r, r + t));
            return n
        }
          , f = function(e, t) {
            return Array(Math.max(e, t)).fill("")
        }
          , v = function(e) {
            return null === e || void 0 === e ? void 0 : e.includes("/_next/data")
        }
    },
    76599: function(e, t, n) {
        "use strict";
        n.d(t, {
            n: function() {
                return i
            }
        });
        var r = n(54355)
          , o = n(18564)
          , i = function(e, t, n, i) {
            var a, s, c, u, l, d;
            (0,
            r.z)({
                event: "clientSideError",
                errorZone: e,
                error: t,
                componentStack: null === n || void 0 === n ? void 0 : n.componentStack,
                componentProps: (0,
                o.uK)(i || {}),
                geoIp: null === (a = window) || void 0 === a || null === (s = a.ls) || void 0 === s || null === (c = s.userInfo) || void 0 === c ? void 0 : c.countryCode,
                env: null === (u = window) || void 0 === u || null === (l = u.ls) || void 0 === l ? void 0 : l.env,
                version: null === (d = window.ls) || void 0 === d ? void 0 : d.version
            })
        }
    },
    42642: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return r
            }
        });
        var r = function() {
            return !0
        }
    },
    94423: function(e, t, n) {
        "use strict";
        n.d(t, {
            $o: function() {
                return r
            },
            dZ: function() {
                return i
            },
            qQ: function() {
                return o
            }
        });
        var r = function(e) {
            if ("undefined" === typeof localStorage)
                return null;
            try {
                return localStorage.getItem(e)
            } catch (t) {
                return null
            }
        }
          , o = function(e, t) {
            if ("undefined" === typeof localStorage)
                return null;
            try {
                localStorage.setItem(e, t)
            } catch (n) {}
        }
          , i = function(e) {
            if ("undefined" === typeof localStorage)
                return null;
            try {
                return localStorage.removeItem(e)
            } catch (t) {}
        }
    },
    75473: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var r = function() {}
    },
    59397: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return o
            }
        });
        var r = {}
          , o = function(e, t) {
            return r[e] = r[e] || t(),
            r[e]
        }
    },
    5524: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return i
            },
            y: function() {
                return o
            }
        });
        var r = n(83454).env.PUBLIC_CDN || "/ls-web-assets/"
          , o = function(e) {
            return "string" === typeof e ? e : "".concat(r).concat(e.src, ".").concat(null === e || void 0 === e ? void 0 : e.ext[0])
        }
          , i = function(e, t) {
            return "string" === typeof e ? e : e && "".concat(r).concat(e.src, ".").concat(t || "webp" !== (null === e || void 0 === e ? void 0 : e.ext[0]) ? null === e || void 0 === e ? void 0 : e.ext[0] : null === e || void 0 === e ? void 0 : e.ext[1])
        }
    },
    82611: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return r
            },
            VV: function() {
                return i
            },
            t_: function() {
                return o
            }
        });
        var r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ("undefined" === typeof sessionStorage)
                return null;
            try {
                var n = sessionStorage.getItem(e);
                return t ? JSON.parse(n || "null") : n
            } catch (r) {
                return null
            }
        }
          , o = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("undefined" === typeof sessionStorage)
                return null;
            try {
                sessionStorage.setItem(e, n ? JSON.stringify(t) : String(t))
            } catch (r) {}
        }
          , i = function(e) {
            if ("undefined" === typeof sessionStorage)
                return null;
            try {
                return sessionStorage.removeItem(e)
            } catch (t) {}
        }
    },
    73997: function(e, t, n) {
        "use strict";
        n.d(t, {
            D0: function() {
                return i
            },
            fm: function() {
                return r
            },
            hb: function() {
                return o
            },
            yX: function() {
                return a
            }
        });
        var r = function(e) {
            return e && 0 !== e.length ? e.charAt(0).toUpperCase() + e.slice(1) : ""
        }
          , o = function(e) {
            if (e) {
                var t = e.toLowerCase();
                if ("true" === t)
                    return !0;
                if ("false" === t)
                    return !1
            }
        }
          , i = function(e) {
            var t, n = {};
            for (var r in e)
                n[(t = r,
                t.replace(/[\w]([A-Z])/g, (function(e) {
                    return "".concat(e[0], "_").concat(e[1])
                }
                )).toLowerCase())] = e[r];
            return n
        }
          , a = function(e) {
            if ("string" !== typeof e)
                return !1;
            try {
                var t = JSON.parse(e)
                  , n = Object.prototype.toString.call(t);
                return "[object Object]" === n || "[object Array]" === n
            } catch (r) {
                return !1
            }
        }
    },
    25298: function(e, t, n) {
        "use strict";
        n.d(t, {
            CT: function() {
                return a
            },
            LZ: function() {
                return c
            },
            Tn: function() {
                return s
            }
        });
        var r = n(59499);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var a = {
            shouldRetryOnError: !0,
            errorRetryInterval: 5e3,
            errorRetryCount: 3
        }
          , s = {
            revalidateOnFocus: !1,
            revalidateOnMount: void 0,
            revalidateOnReconnect: !1
        }
          , c = function(e) {
            var t = e.isValidating
              , n = e.error
              , r = e.data;
            return i(i({}, e), {}, {
                isLoading: t || void 0 === n && void 0 === r,
                error: n || null,
                data: r
            })
        }
    },
    39379: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return i
            },
            N: function() {
                return o
            }
        });
        var r = n(94423)
          , o = (n(14930),
        function() {
            var e = (0,
            r.$o)("ls.timeZoneOffset");
            return e ? parseFloat(e) : void 0
        }
        )
          , i = function(e) {
            "undefined" === typeof e ? (0,
            r.dZ)("ls.timeZoneOffset") : (0,
            r.qQ)("ls.timeZoneOffset", "".concat(e))
        }
    },
    39145: function(e, t, n) {
        "use strict";
        n.d(t, {
            M0: function() {
                return d
            },
            Ph: function() {
                return i
            },
            YB: function() {
                return c
            },
            _A: function() {
                return l
            },
            fg: function() {
                return s
            },
            hs: function() {
                return u
            },
            mi: function() {
                return a
            }
        });
        var r = n(27812)
          , o = (n(45722),
        ["isAdult", "tz", "btag", "ads"])
          , i = function(e, t) {
            return new URLSearchParams(e).get(t)
        }
          , a = function(e) {
            return !e || e.endsWith("/") || e.includes("?") ? e : "".concat(e, "/")
        }
          , s = function(e) {
            var t = e.split("?");
            if (t.length >= 2) {
                var n = function() {
                    for (var e = t[1].split(/[&;]/g), n = function(t) {
                        o.some((function(n) {
                            return e[t].includes(n)
                        }
                        )) || e.splice(t, 1)
                    }, r = e.length; r-- > 0; )
                        n(r);
                    return {
                        v: t[0] + (e.length > 0 ? "?".concat(e.join("&")) : "")
                    }
                }();
                if ("object" === typeof n)
                    return n.v
            }
            return e
        }
          , c = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return [].concat(o, (0,
            r.Z)(t)).reduce((function(t, n) {
                return e.hasOwnProperty(n) && void 0 !== e[n] && (t[n] = e[n]),
                t
            }
            ), {})
        }
          , u = function(e) {
            return e.replace(/ /g, "-").replace(/[^\w\s-]/g, "").toLowerCase()
        }
          , l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object.keys(e).filter((function(t) {
                return !!e[t]
            }
            )).map((function(t) {
                return "".concat(t, "=").concat(e[t])
            }
            )).join("&")
        }
          , d = function(e) {
            var t = null !== e && void 0 !== e && e.limit && parseInt(null === e || void 0 === e ? void 0 : e.limit) ? parseInt(null === e || void 0 === e ? void 0 : e.limit) : void 0
              , n = "false" !== (null === e || void 0 === e ? void 0 : e.tags)
              , r = "false" !== (null === e || void 0 === e ? void 0 : e.isAdult);
            return {
                countLimit: t,
                activeTab: null !== e && void 0 !== e && e.tab ? e.tab : null,
                shouldShowTags: n,
                isUserAdult: r,
                pageOffset: null !== e && void 0 !== e && e.page && Number(null === e || void 0 === e ? void 0 : e.page) ? Number(null === e || void 0 === e ? void 0 : e.page) : null,
                isPersonalizedAds: "false" !== (null === e || void 0 === e ? void 0 : e.ads),
                tz: (null === e || void 0 === e ? void 0 : e.tz) || null,
                geo: null === e || void 0 === e ? void 0 : e.geo
            }
        }
    },
    26816: function(e, t, n) {
        "use strict";
        n.d(t, {
            oc: function() {
                return g
            },
            $G: function() {
                return b
            }
        });
        var r = n(59499)
          , o = n(27812)
          , i = n(67294)
          , a = n(26905);
        const s = /{{(.*?)}}/g;
        var c = n(42642)
          , u = n(78567)
          , l = n(24674)
          , d = n(85893)
          , f = function(e) {
            var t = ""
              , n = e || {};
            return {
                set(e, t) {
                    n[e] = Object.assign(n[e] || {}, t)
                },
                locale: e=>t = e || t,
                table: e=>n[e],
                t(e, r, o) {
                    var i, c = a(n[o || t], e, "");
                    return "function" === typeof c ? c(r) : "string" === typeof c ? (i = r,
                    c.replace(s, ((e,t,n)=>{
                        for (e = 0,
                        n = i,
                        t = t.trim().split("."); n && e < t.length; )
                            n = n[t[e++]];
                        return null != n ? n : ""
                    }
                    ))) : c
                }
            }
        }()
          , v = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var r = f.t.apply(f, t);
            return "" === r && (0,
            c.S)() && /\./.test(t[0]) && console.warn("\x1b[36m%s\x1b[0m", "Missed translate key(consider adding this to the page level): ".concat(t[0], " ")),
            "" !== r ? r : Array.isArray(t[0]) ? t[0].join(".") : t[0]
        }
          , p = function(e) {
            var t = b()
              , n = t.langDict
              , r = t.activeLocale;
            try {
                var i = [r].concat((0,
                o.Z)(e.split("."))).reduce((function(e, t) {
                    return e[t]
                }
                ), n);
                if (i)
                    return i;
                throw new Error("Translations not found")
            } catch (a) {
                return {
                    error: a
                }
            }
        }
          , m = (0,
        i.createContext)({
            activeLocale: u.Z,
            t: v,
            langDict: (0,
            r.Z)({}, u.Z, {}),
            useMultipleTranslations: p
        })
          , g = function(e) {
            var t = e.children
              , n = e.lang
              , r = e.langDict
              , o = void 0 === r ? {} : r
              , a = (0,
            l.G)(n)
              , s = (0,
            i.useCallback)((function() {
                return a && o && (f.locale(a),
                f.set(a, o[a])),
                v.apply(void 0, arguments)
            }
            ), [o, a])
              , c = {
                activeLocale: a,
                langDict: o,
                t: s,
                useMultipleTranslations: p
            };
            return (0,
            d.jsx)(m.Provider, {
                value: c,
                children: t
            })
        }
          , b = function() {
            return (0,
            i.useContext)(m)
        }
    },
    51005: function(e, t, n) {
        "use strict";
        n.d(t, {
            $G: function() {
                return o.$G
            },
            Gy: function() {
                return r.G
            },
            oc: function() {
                return o.oc
            }
        });
        n(78567);
        var r = n(24674)
          , o = n(26816)
    },
    78567: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var r = n(14930).ActiveLangEnum.en
    },
    24674: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return i
            }
        });
        var r = n(14930)
          , o = n(78567)
          , i = function(e) {
            return e && e in r.ActiveLangEnum ? e : o.Z
        }
    },
    42964: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return d
            },
            k: function() {
                return l
            }
        });
        var r = n(59499)
          , o = n(16835)
          , i = n(13930);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var c = function(e) {
            return Object.entries(e || {}).reduce((function(e, t) {
                var n = (0,
                o.Z)(t, 2)
                  , i = n[0]
                  , a = n[1];
                return s(s({}, e), {}, (0,
                r.Z)({}, "prop.".concat(i), a))
            }
            ), {})
        }
          , u = n(76599)
          , l = {
            message: function(e, t) {
                return console.log(e, t && c(t))
            },
            error: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return function(r) {
                    return (0,
                    u.n)("parsingLevel", {
                        name: "parsing Error",
                        message: e
                    }, void 0, t),
                    console.error(e, t && c(t), r),
                    n
                }
            },
            messageToFile: function(e, t) {
                (0,
                u.n)("parsingLevel", {
                    name: "parsing Error",
                    message: e
                }, void 0, t),
                (null !== t && void 0 !== t && t.level || 0 === (null === t || void 0 === t ? void 0 : t.level)) && (null === t || void 0 === t ? void 0 : t.level) !== i.m.error ? (null === t || void 0 === t ? void 0 : t.level) === i.m.warn ? console.warn(e, t && c(t)) : console.log(e, t && c(t)) : console.error(e, t && c(t))
            }
        }
          , d = {
            startBenchmark: function() {},
            endBenchmark: function() {},
            clearBenchmark: function() {}
        }
    },
    90603: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bm: function() {
                return f
            },
            YH: function() {
                return d
            },
            ni: function() {
                return m
            },
            x4: function() {
                return v
            },
            z2: function() {
                return p
            }
        });
        var r, o = n(50029), i = n(59499), a = n(87794), s = n.n(a), c = n(67342);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        !function(e) {
            e.LOGIN = "login",
            e.LOGOUT = "logout",
            e.PROLONG = "prolong",
            e.TOKEN_LOGIN = "tokenlogin"
        }(r || (r = {}));
        var l = function(e, t) {
            var n;
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0,
                        i.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                "Content-Type": "application/json",
                "Client-Id": e,
                "Client-App-Version": null === (n = window) || void 0 === n ? void 0 : n.ls.version,
                "Client-OS-Version": navigator.userAgent,
                "Client-Language": "en"
            }, t && {
                "Session-Token": t
            })
        }
          , d = function() {
            var e = (0,
            o.Z)(s().mark((function e() {
                var t, n, o, i, a, u, d, f = arguments;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = f.length > 0 && void 0 !== f[0] ? f[0] : "",
                            n = f.length > 1 ? f[1] : void 0,
                            o = f.length > 2 ? f[2] : void 0,
                            i = l(n, t),
                            e.next = 6,
                            (0,
                            c.rd)("POST", o, r.PROLONG, {}, i);
                        case 6:
                            if (a = e.sent,
                            u = a.data,
                            200 !== (d = a.status) || 0 !== (null === u || void 0 === u ? void 0 : u.resultCode)) {
                                e.next = 12;
                                break
                            }
                            return (0,
                            c.bs)(u.data),
                            e.abrupt("return", {
                                status: d,
                                data: u.data
                            });
                        case 12:
                            return e.abrupt("return", {
                                status: d,
                                data: null
                            });
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , f = function() {
            var e = (0,
            o.Z)(s().mark((function e(t, n, o) {
                var i, a, u, d, f, v;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return u = l(n),
                            e.next = 3,
                            (0,
                            c.rd)("POST", o, r.TOKEN_LOGIN, {
                                refreshToken: t
                            }, u);
                        case 3:
                            if (d = e.sent,
                            f = d.data,
                            200 !== (v = d.status) || 0 !== (null === f || void 0 === f ? void 0 : f.resultCode) || null === f || void 0 === f || null === (i = f.data) || void 0 === i || !i.platformToken || null === f || void 0 === f || null === (a = f.data) || void 0 === a || !a.platformRefreshToken) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", {
                                status: v,
                                data: f.data
                            });
                        case 8:
                            return e.abrupt("return", {
                                status: v,
                                data: null
                            });
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , v = function() {
            var e = (0,
            o.Z)(s().mark((function e(t) {
                var n, o, i, a, u, d, f, v, p, m;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return o = t.username,
                            i = t.password,
                            a = t.onError,
                            u = t.onSuccess,
                            d = t.platformClientId,
                            f = t.baseUrl,
                            v = {
                                username: o,
                                password: i
                            },
                            p = l(d),
                            e.next = 5,
                            (0,
                            c.rd)("POST", f, r.LOGIN, v, p);
                        case 5:
                            200 === (m = e.sent).status && null !== (n = m.data) && void 0 !== n && n.data && 0 === m.data.resultCode ? ((0,
                            c.bs)(m.data.data),
                            setTimeout((function() {
                                return u(m.data)
                            }
                            ), 500)) : setTimeout((function() {
                                return a(m)
                            }
                            ), 500);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , p = function(e) {
            (0,
            c.bs)(e.data)
        }
          , m = function() {
            var e = (0,
            o.Z)(s().mark((function e(t, n) {
                var o, i, a;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            c.MQ)(t, n);
                        case 2:
                            return o = e.sent,
                            i = l(t, o || ""),
                            e.next = 6,
                            (0,
                            c.rd)("POST", n, r.LOGOUT, {}, i);
                        case 6:
                            return a = (0,
                            c.lx)(),
                            (0,
                            c.J5)(),
                            e.abrupt("return", a);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
    },
    73382: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(75473)
          , i = (0,
        r.createContext)({
            isLoggedIn: !1,
            setIsLoggedIn: o.Z,
            isAuthEnabled: !1,
            setAccessToken: o.Z,
            platformClientId: "lsm-desktop",
            removeTokensAndLogout: o.Z
        })
    },
    75175: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(73382)
          , i = function() {
            return (0,
            r.useContext)(o.J)
        }
    },
    55051: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return p
            },
            X: function() {
                return m
            }
        });
        var r = n(67294)
          , o = (n(62340),
        n(22759))
          , i = n(28501)
          , a = (n(15631),
        n(75219))
          , s = n(41788)
          , c = n(90603)
          , u = n(75175)
          , l = {
            register: "register",
            forgotpassword: "password_reset",
            resetpassword: "reset_details",
            editpassword: "edit_details"
        }
          , d = ["@page/hide"]
          , f = ["@page/show", "@page/geo"]
          , v = ["ForgotPassword", "ForgotSuccessful"]
          , p = ["@register/error", "@app/error"]
          , m = function(e, t, n, m, g) {
            var b = (0,
            i.L)().isDesktopWidth
              , h = (0,
            a.K)(n, t, m)
              , y = h.trackTapEvent
              , w = h.trackEvent
              , _ = h.identifyEvent
              , O = (0,
            u.a)().setAccessToken
              , x = (0,
            r.useRef)(null)
              , S = (0,
            r.useCallback)((function(n, r) {
                f.includes(n) && (x.current = r.name.toLowerCase()),
                (d.includes(n) && v.includes(r.name) || "@app/invalid_data" === n && "email" === r.name) && y({
                    action: "ForgotSuccessful" === r.name ? "enter_code" : "reset_code",
                    feature: "password_reset"
                }, {
                    screenClass: "account",
                    screenName: s.o3.forgotPassword
                }),
                "@http/success" === n && x.current && !(r.name || "").startsWith("validator/") && r.result.successful && l[x.current] && w("Process Success", {
                    feature: l[x.current] || null,
                    messageDisplayed: r.result.message || null
                }),
                "@app/invalid_data" === n && x.current && w("Process Failed", {
                    feature: l[x.current] || null,
                    isAdult: e,
                    errorMessage: r.message || null,
                    errorCode: r.error || r.code || null
                }),
                p.includes(n) && !(r.name || "").startsWith("validator/") && x.current && w("Process Failed", {
                    feature: l[x.current] || null,
                    errorMessage: r.message || r.error.message || null,
                    errorCode: r.code || r.error.code || r.error || null
                }),
                "@http/success" === n && r && "Register" === r.name && r.result && r.result.data.platformToken && r.result.data.userInfo.userProfile.email && ((0,
                c.z2)(r.result),
                O(r.result.data.platformToken),
                _({
                    email: r.result.data.userInfo.userProfile.email,
                    userId: String(r.result.data.userInfo.userProfile.userId),
                    isLoggedIn: !0,
                    isAdult: e,
                    geo: t,
                    viewport: b ? "desktop" : "mobile"
                }, !0),
                w("Process Success", {
                    feature: "register",
                    messageDisplayed: "Registration successful"
                }))
            }
            ), [t, _, b, e, O, w, y]);
            return (0,
            o.T)({
                onMessageReceivedHandler: S,
                originUrl: g
            }),
            S
        }
    },
    67342: function(e, t, n) {
        "use strict";
        n.d(t, {
            rd: function() {
                return k
            },
            Mw: function() {
                return A
            },
            hP: function() {
                return C
            },
            lx: function() {
                return _
            },
            MQ: function() {
                return P
            },
            dO: function() {
                return O
            },
            pw: function() {
                return h
            },
            jb: function() {
                return j
            },
            J5: function() {
                return S
            },
            bs: function() {
                return w
            }
        });
        var r = n(50029)
          , o = n(59499)
          , i = n(87794)
          , a = n.n(i);
        function s(e) {
            this.message = e
        }
        s.prototype = new Error,
        s.prototype.name = "InvalidCharacterError";
        var c = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1)
                throw new s("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var n, r, o = 0, i = 0, a = ""; r = t.charAt(i++); ~r && (n = o % 4 ? 64 * n + r : r,
            o++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
            return a
        }
        ;
        function u(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Illegal base64url string!"
            }
            try {
                return function(e) {
                    return decodeURIComponent(c(e).replace(/(.)/g, (function(e, t) {
                        var n = t.charCodeAt(0).toString(16).toUpperCase();
                        return n.length < 2 && (n = "0" + n),
                        "%" + n
                    }
                    )))
                }(t)
            } catch (e) {
                return c(t)
            }
        }
        function l(e) {
            this.message = e
        }
        l.prototype = new Error,
        l.prototype.name = "InvalidTokenError";
        var d = function(e, t) {
            if ("string" != typeof e)
                throw new l("Invalid token specified");
            var n = !0 === (t = t || {}).header ? 0 : 1;
            try {
                return JSON.parse(u(e.split(".")[n]))
            } catch (e) {
                throw new l("Invalid token specified: " + e.message)
            }
        }
          , f = n(14930)
          , v = n(94423)
          , p = n(42964)
          , m = n(90603);
        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = function(e) {
            try {
                if (e) {
                    var t = d(e);
                    return Date.now() >= 1e3 * t.exp
                }
            } catch (s) {}
            return !0
        }
          , y = function(e) {
            try {
                if (e) {
                    var t = d(e);
                    return Math.round(1e3 * t.exp - Date.now())
                }
            } catch (s) {}
            return null
        }
          , w = function(e) {
            var t, n, r, o, i = _(), a = b(b(b(b({}, e.platformToken && {
                accessToken: e.platformToken
            }), e.sessionId && {
                sessionId: e.sessionId
            }), (null === (t = e.userInfo) || void 0 === t || null === (n = t.userProfile) || void 0 === n ? void 0 : n.email) && {
                userEmail: null === (r = e.userInfo) || void 0 === r || null === (o = r.userProfile) || void 0 === o ? void 0 : o.email
            }), e.platformRefreshToken && {
                refreshToken: e.platformRefreshToken
            });
            if (a.refreshToken) {
                var s = y(a.refreshToken);
                s && (a.refreshTokenTTL = String(s),
                a.lastTokenRefresh = String(Date.now()))
            }
            (0,
            v.qQ)("ls.authDetails", JSON.stringify(b(b({}, i), a)))
        }
          , _ = function() {
            var e = (0,
            v.$o)("ls.authDetails");
            try {
                return JSON.parse(e || "")
            } catch (s) {}
            return null
        }
          , O = function() {
            var e, t, n, r = _();
            return {
                accessToken: null !== (e = r && r.accessToken) && void 0 !== e ? e : "",
                refreshToken: null !== (t = r && r.refreshToken) && void 0 !== t ? t : "",
                sessionId: null !== (n = r && r.sessionId) && void 0 !== n ? n : ""
            }
        }
          , x = function() {
            var e = _() || {}
              , t = e.lastTokenRefresh
              , n = e.refreshTokenTTL;
            return {
                lastTokenRefresh: t && Number(t),
                refreshTokenTTL: n && Number(n)
            }
        }
          , S = function() {
            (0,
            v.dZ)("ls.authDetails")
        }
          , k = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments.length > 2 ? arguments[2] : void 0
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
              , i = arguments.length > 4 ? arguments[4] : void 0;
            try {
                return fetch(t + n, b({
                    method: e,
                    mode: "cors",
                    cache: "no-cache",
                    headers: i
                }, o && {
                    body: JSON.stringify(o)
                })).then(function() {
                    var e = (0,
                    r.Z)(a().mark((function e(t) {
                        var n, r;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.json();
                                case 2:
                                    return n = e.sent,
                                    r = n.error_description || n.message || null,
                                    e.abrupt("return", {
                                        status: t.status,
                                        message: 200 !== t.status && n ? r : null,
                                        data: n
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()).catch((function(e) {
                    return Promise.resolve({
                        status: -1,
                        message: e.message || e.name || null,
                        data: e
                    })
                }
                ))
            } catch (s) {
                return Promise.resolve({
                    status: 500,
                    message: s.message || s.name,
                    data: null
                })
            }
        }
          , j = function() {
            var e = (0,
            r.Z)(a().mark((function e(t, n) {
                var r, o, i, s, c, u, l, d = arguments;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = d.length > 2 && void 0 !== d[2] ? d[2] : E,
                            o = O(),
                            i = o.accessToken,
                            s = o.sessionId,
                            !((c = y(i)) && c - 1e3 * f.RevalidateInterval.ThreeMinutes > 0)) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", {
                                status: "successTokenRefresh",
                                accessToken: i,
                                sessionId: s
                            });
                        case 5:
                            if (!s) {
                                e.next = 17;
                                break
                            }
                            return e.next = 8,
                            (0,
                            m.YH)(s, t, n);
                        case 8:
                            if (u = e.sent,
                            null === (l = u.data) || void 0 === l || !l.platformToken) {
                                e.next = 14;
                                break
                            }
                            return e.abrupt("return", {
                                status: "successTokenRefresh",
                                accessToken: l.platformToken,
                                sessionId: s
                            });
                        case 14:
                            return e.next = 16,
                            A(r, t, n, !0);
                        case 16:
                        case 19:
                            return e.abrupt("return", e.sent);
                        case 17:
                            return e.next = 19,
                            A(r, t, n, !0);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , C = function() {
            var e = (0,
            r.Z)(a().mark((function e(t, n) {
                var r, o, i;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            j(t, n);
                        case 2:
                            if (r = e.sent,
                            o = r.status,
                            i = r.accessToken,
                            "successTokenRefresh" !== o) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", i);
                        case 7:
                            return e.abrupt("return", null);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , P = function() {
            var e = (0,
            r.Z)(a().mark((function e(t, n) {
                var r, o, i;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            j(t, n);
                        case 2:
                            if (r = e.sent,
                            o = r.status,
                            i = r.sessionId,
                            "successTokenRefresh" !== o) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", i);
                        case 7:
                            return e.abrupt("return", null);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , E = 30
          , A = function() {
            var e = (0,
            r.Z)(a().mark((function e() {
                var t, n, r, o, i, s, c, u, l, d, f, v, g = arguments;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = g.length > 0 && void 0 !== g[0] ? g[0] : E,
                            n = g.length > 1 ? g[1] : void 0,
                            r = g.length > 2 ? g[2] : void 0,
                            o = g.length > 3 && void 0 !== g[3] && g[3],
                            i = O(),
                            s = i.refreshToken,
                            c = x(),
                            u = c.refreshTokenTTL,
                            l = c.lastTokenRefresh,
                            d = Math.round(u / t),
                            !(l + d <= Date.now()) && !o) {
                                e.next = 27;
                                break
                            }
                            if (!s || h(s)) {
                                e.next = 25;
                                break
                            }
                            return e.next = 13,
                            (0,
                            m.Bm)(s, n, r);
                        case 13:
                            if (f = e.sent,
                            null === (v = f.data) || void 0 === v || !v.platformToken || null === v || void 0 === v || !v.platformRefreshToken) {
                                e.next = 20;
                                break
                            }
                            return w(v),
                            e.abrupt("return", {
                                status: "successTokenRefresh",
                                accessToken: v.platformToken || "",
                                sessionId: v.sessionId || ""
                            });
                        case 20:
                            return e.next = 22,
                            (0,
                            m.ni)(n, r);
                        case 22:
                            return e.abrupt("return", {
                                status: "networkError"
                            });
                        case 23:
                            e.next = 27;
                            break;
                        case 25:
                            return p.k.message("Both platform tokens have expired"),
                            e.abrupt("return", {
                                status: "tokensExpired"
                            });
                        case 27:
                            return e.abrupt("return", {
                                status: "tokenSkipUpdate"
                            });
                        case 28:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
    },
    8848: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return u
            }
        });
        var r = n(94184)
          , o = n.n(r)
          , i = (n(67294),
        n(38379))
          , a = n.n(i)
          , s = n(94239)
          , c = n(85893)
          , u = function(e) {
            var t = e.text
              , n = e.testId
              , r = e.type
              , i = void 0 === r ? "primary" : r
              , u = e.htmlType
              , l = void 0 === u ? "button" : u
              , d = e.onClick
              , f = e.href
              , v = e.block
              , p = e.ampOn
              , m = e.isFullHref
              , g = void 0 !== m && m
              , b = e.isDisabled
              , h = e.className
              , y = o()(a().btn, i, h, {
                fullWidth: v,
                isDisabled: b
            });
            return f ? (0,
            c.jsx)(s.r, {
                isFullHref: g,
                href: f,
                prefetch: !1,
                className: y,
                children: t
            }) : (0,
            c.jsx)("button", {
                "data-testid": n,
                disabled: b,
                type: l,
                onClick: d,
                className: y,
                on: p,
                children: t
            })
        }
    },
    11671: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return r.z
            }
        });
        var r = n(8848)
    },
    65426: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return g
            }
        });
        var r = n(92777)
          , o = n(82262);
        function i(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var a = n(90607);
        var s = n(14027);
        function c(e, t) {
            if (t && ("object" === s(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return i(e)
        }
        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            u(e)
        }
        var l = n(59499)
          , d = n(67294)
          , f = n(76599)
          , v = function() {
            return null
        }
          , p = n(85893);
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        var g = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (0,
                a.Z)(e, t)
            }(n, e);
            var t = m(n);
            function n() {
                var e;
                (0,
                r.Z)(this, n);
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
                    a[s] = arguments[s];
                return e = t.call.apply(t, [this].concat(a)),
                (0,
                l.Z)(i(e), "state", {
                    hasError: !1
                }),
                e
            }
            return (0,
            o.Z)(n, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    var n = this.props
                      , r = n.errorZone
                      , o = n.onError
                      , i = n.componentProps;
                    o && o(r, e, t),
                    (0,
                    f.n)(r, e, t, i)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.FallbackComponent
                      , n = void 0 === t ? v : t
                      , r = e.doNotRenderFallback;
                    return this.state.hasError && !r ? (0,
                    p.jsx)(n, {}) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function(e) {
                    return {
                        hasError: !0
                    }
                }
            }]),
            n
        }(d.Component)
    },
    25549: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return r.S
            }
        });
        var r = n(65426)
    },
    6813: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return f
            }
        });
        var r = n(59499)
          , o = n(4730)
          , i = n(67294)
          , a = n(87622)
          , s = n(85893)
          , c = n(83454)
          , u = ["link", "width", "height", "isAmpImg", "testId"];
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = function(e) {
            var t = e.link
              , n = e.width
              , r = e.height
              , l = e.isAmpImg
              , f = e.testId
              , v = (0,
            o.Z)(e, u)
              , p = (0,
            a.J)()
              , m = p.ImageComponent
              , g = p.isWebpSupported;
            if (m && "img" !== m)
                return i.createElement(m, d(d({}, v), {}, {
                    id: f,
                    isAmpImg: l,
                    width: n,
                    height: r,
                    link: t
                }));
            var b = "string" === typeof t ? t : "".concat(c.env.PUBLIC_CDN || "/ls-web-assets", "/").concat(null === t || void 0 === t ? void 0 : t.src, ".").concat(g || "webp" !== (null === t || void 0 === t ? void 0 : t.ext[0]) ? null === t || void 0 === t ? void 0 : t.ext[0] : null === t || void 0 === t ? void 0 : t.ext[1]);
            return (0,
            s.jsx)("img", {
                src: b,
                id: f,
                alt: v.alt
            })
        }
    },
    94239: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return p
            }
        });
        var r = n(59499)
          , o = n(94184)
          , i = n.n(o)
          , a = n(67294)
          , s = n(93033)
          , c = n(39145)
          , u = n(68393)
          , l = n.n(u)
          , d = n(85893);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p = function(e) {
            var t = e.dataId
              , n = e.href
              , r = void 0 === n ? "#" : n
              , o = e.children
              , u = e.as
              , f = void 0 === u ? "a" : u
              , p = e.className
              , m = e.onClick
              , g = e.testId
              , b = e.prefetch
              , h = void 0 !== b && b
              , y = e.style
              , w = e.on
              , _ = e.target
              , O = e.isFullHref
              , x = void 0 !== O && O
              , S = e.rel
              , k = (0,
            s.b)().queryString;
            if ("a" !== f && !m)
                return a.createElement(f, {
                    passHref: !0,
                    target: _,
                    prefetch: h,
                    href: r,
                    style: y,
                    on: w,
                    rel: S
                }, (0,
                d.jsx)("a", {
                    id: g,
                    "data-id": t,
                    className: i()(p, l().customLink),
                    children: o
                }));
            var j = "#" === r || x ? r : (0,
            c.fg)("".concat(r).concat(k));
            return (0,
            d.jsx)("a", v(v({
                style: y,
                href: j,
                className: i()(p, l().customLink),
                onClick: m,
                target: _,
                rel: S,
                id: g
            }, w && {
                on: w
            }), {}, {
                children: o
            }))
        }
    },
    30003: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return p
            }
        });
        var r = n(67294)
          , o = (n(15631),
        n(51005))
          , i = n(75175)
          , a = n(67342)
          , s = n(75219)
          , c = n(41788)
          , u = n(43960)
          , l = n.n(u)
          , d = n(11671)
          , f = n(6813)
          , v = n(85893)
          , p = r.memo((function(e) {
            var t = e.className
              , n = void 0 === t ? "" : t
              , u = e.isSev
              , p = void 0 !== u && u
              , m = e.onClick
              , g = e.segmentConfig
              , b = e.geoIpCountryCode
              , h = e.isOneTrustAllowed
              , y = e.openModalClick
              , w = (0,
            o.$G)().t
              , _ = (0,
            s.K)(g, b, h).trackTapEvent
              , O = (0,
            r.useCallback)((function(e) {
                _({
                    action: "open",
                    feature: p ? "register_sev" : "register_drawer"
                }),
                m && m(),
                y("RegistrationForm")(e)
            }
            ), [y, p, m, _])
              , x = (0,
            r.useCallback)((function(e) {
                _({
                    action: "open",
                    feature: p ? "login_sev" : "login_drawer"
                }),
                m && m(),
                y("LoginForm")(e)
            }
            ), [y, p, m, _])
              , S = (0,
            r.useCallback)((function(e) {
                _({
                    action: "open",
                    feature: "account"
                }, {
                    screenClass: "settings",
                    screenName: c.o3.settingsDetails
                }),
                y("AccountDetails")(e)
            }
            ), [y, _])
              , k = (0,
            i.a)()
              , j = k.isAuthEnabled
              , C = k.isLoggedIn;
            if (!j)
                return null;
            var P = (0,
            a.lx)();
            return C && P && P.userEmail ? (0,
            v.jsx)("div", {
                id: "LoginOrRegisterButtons__loggedIn",
                children: (0,
                v.jsxs)("div", {
                    onClick: S,
                    id: "burger-menu__account",
                    className: n,
                    title: P.userEmail,
                    children: [(0,
                    v.jsx)("div", {
                        className: l().loggedInIcon,
                        children: (0,
                        v.jsx)(f.E, {
                            width: 20,
                            height: 20,
                            link: {
                                src: "svgs/common/user-account-24ec3334e4973038ec425ca0ee24f091",
                                ext: ["svg"]
                            }
                        })
                    }), (0,
                    v.jsx)("span", {
                        children: P.userEmail
                    })]
                })
            }) : (0,
            v.jsxs)("div", {
                id: "burger-menu__login",
                className: n,
                children: [(0,
                v.jsx)(d.z, {
                    testId: "login-button",
                    type: "secondary",
                    text: w("common.account.login"),
                    block: !0,
                    onClick: x
                }), (0,
                v.jsx)(d.z, {
                    testId: "register-button",
                    type: "primary",
                    text: w("common.account.joinNow"),
                    block: !0,
                    onClick: O
                })]
            })
        }
        ));
        p.displayName = "LoginOrRegisterButtons"
    },
    89357: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return u
            }
        });
        var r = n(59499)
          , o = n(4730)
          , i = n(67294)
          , a = ["as", "children"];
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var u = i.forwardRef((function(e, t) {
            var n = e.as
              , r = e.children
              , s = (0,
            o.Z)(e, a);
            return i.createElement(n, c(c({}, s), {}, {
                ref: t
            }), r)
        }
        ));
        u.displayName = "ProxyComp"
    },
    76234: function(e, t, n) {
        "use strict";
        n.d(t, {
            EH: function() {
                return g
            },
            Nv: function() {
                return v
            }
        });
        var r = n(59499)
          , o = n(48472)
          , i = n(45722)
          , a = (n(14930),
        n(7335))
          , s = n(73997)
          , c = n(17613);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = {
            isAvailable: !1,
            streamingLink: "",
            isOutdated: !0
        }
          , f = function(e, t, n) {
            var r, o;
            return !(t.allowedCountries && (null === (r = t.allowedCountries) || void 0 === r || !r.includes(e)) || t.deniedCountries && null !== (o = t.deniedCountries) && void 0 !== o && o.includes(e)) && n.some((function(t) {
                return !t.allowedCountries && !t.deniedCountries || t.allowedCountries && t.allowedCountries.includes(e) || t.deniedCountries && !t.deniedCountries.includes(e)
            }
            ))
        }
          , v = function(e, t, n, r, o, i) {
            var c, u, l = null === i || void 0 === i || null === (c = i.streaming) || void 0 === c || null === (u = c[e]) || void 0 === u ? void 0 : u[15];
            if (r && l && f(t, l, r)) {
                var d, v, p, m, g, b;
                if (!r[0].entryId || !r[0].startTime)
                    return {
                        state: "disabled",
                        isAvailable: !1
                    };
                var h = Number(r[0].startTime)
                  , y = (0,
                a.ek)(new Date(h), void 0, !1)
                  , w = !!(0,
                s.hb)(r[0].isLive);
                return n || o ? {
                    state: "desktop",
                    isLive: w,
                    isUpcoming: y,
                    startTime: h,
                    videoId: r[0].entryId,
                    thumbnail: r[0].thumbnail || "",
                    isAvailable: w || y
                } : {
                    state: "mobile",
                    isLive: w,
                    isUpcoming: y,
                    iosDownloadLink: null !== (d = null === i || void 0 === i || null === (v = i.links) || void 0 === v || null === (p = v.staticLinks) || void 0 === p ? void 0 : p.iosDownloadLink) && void 0 !== d ? d : "",
                    androidDownloadLink: null !== (m = null === i || void 0 === i || null === (g = i.links) || void 0 === g || null === (b = g.staticLinks) || void 0 === b ? void 0 : b.androidDownloadLink) && void 0 !== m ? m : "",
                    isAvailable: w || y
                }
            }
            return {
                state: "disabled",
                isAvailable: !1
            }
        }
          , p = function(e) {
            var t, n, r, o = null === e || void 0 === e || null === (t = e.sections) || void 0 === t || null === (n = t.find((function(e) {
                return e.videoPlaylist.type === i.EventVideoEnum.VOD
            }
            ))) || void 0 === n ? void 0 : n.videoPlaylist, a = (0,
            c.uy)((null === o || void 0 === o ? void 0 : o.items) || null);
            return l(l({}, l(l({}, o), {}, {
                items: a
            })), {}, {
                isAvailable: !(null === o || void 0 === o || null === (r = o.items) || void 0 === r || !r.length)
            })
        }
          , m = function(e) {
            var t, n, r, o, a, s, c, u = null === e || void 0 === e || null === (t = e.sections) || void 0 === t || null === (n = t.find((function(e) {
                return e.videoPlaylist.type === i.EventVideoEnum.YOUTUBE
            }
            ))) || void 0 === n ? void 0 : n.videoPlaylist, d = !(null === u || void 0 === u || null === (r = u.items) || void 0 === r || !r.length), f = null === u || void 0 === u || null === (o = u.items) || void 0 === o || null === (a = o[0]) || void 0 === a ? void 0 : a.embeddable;
            return l(l({
                isAvailable: d
            }, d && {
                streamId: null === u || void 0 === u || null === (s = u.items) || void 0 === s || null === (c = s[0]) || void 0 === c ? void 0 : c.streamId
            }), {}, {
                areHighLightsDisplayed: d && f,
                isNotEmbeddable: d && !f
            })
        }
          , g = function(e, t, n, r, o) {
            var i, a, s, c, u, d, f, g;
            if ((null === e || void 0 === e || null === (i = e.external) || void 0 === i || null === (a = i.streaming) || void 0 === a ? void 0 : a.enabled) && n || o) {
                var h = v(e.common.activeSport, e.common.countryCode, e.common.isDesktopWidth, (null === n || void 0 === n ? void 0 : n[15]) || [], null === (s = e.common) || void 0 === s || null === (c = s.deviceConfig) || void 0 === c ? void 0 : c.isTabletDevice, e.external)
                  , y = l(l(l({
                    LSMediaEvent: h
                }, n && {
                    LSBetEvent: b(e, t, n, r, null === h || void 0 === h ? void 0 : h.state)
                }), o && {
                    VODMediaEvent: p(o),
                    YouTubeHighlights: m(o),
                    isVideoValidating: o.isVideoValidating
                }), {}, {
                    hasAnyStreamingEvent: !1
                });
                return y.hasAnyStreamingEvent = (null === y || void 0 === y || null === (u = y.LSBetEvent) || void 0 === u ? void 0 : u.isAvailable) || "disabled" !== (null === y || void 0 === y || null === (d = y.LSMediaEvent) || void 0 === d ? void 0 : d.state) || (null === y || void 0 === y || null === (f = y.VODMediaEvent) || void 0 === f ? void 0 : f.isAvailable) || (null === y || void 0 === y || null === (g = y.YouTubeHighlights) || void 0 === g ? void 0 : g.isAvailable) || !1,
                y
            }
        }
          , b = function(e, t, n, r, i) {
            var a, s, c, u, l, v;
            if (!("disabled" === i))
                return d;
            var p = n && n[12]
              , m = r && r[12]
              , g = null === e || void 0 === e || null === (a = e.common) || void 0 === a ? void 0 : a.countryCode
              , b = e.common.activeSport
              , h = null === (s = e.external) || void 0 === s || null === (c = s.streaming) || void 0 === c || null === (u = c[b]) || void 0 === u ? void 0 : u[12]
              , y = p && h && f(g, h, p.filter((function(e) {
                return "LIVE_STREAMING" === e.type
            }
            )));
            if (!m || !p || !h || !y || !e.common.isUserAdult)
                return d;
            var w = (e.common.deviceConfig || {}).isMobileDevice
              , _ = h.desktop
              , O = h.mobile
              , x = h[g] || {}
              , S = x.desktop
              , k = x.mobile
              , j = h[g]
              , C = w ? null === (l = k || (j ? void 0 : O)) || void 0 === l ? void 0 : l.replace(/{eventId}/g, m) : null === (v = S || (j ? void 0 : _)) || void 0 === v ? void 0 : v.replace(/{eventId}/g, m)
              , P = t === o.$.POSTPONED || t === o.$.CANCELLED || t === o.$.PAST;
            return C ? {
                isAvailable: !0,
                streamingLink: C,
                isOutdated: P
            } : d
        }
    },
    17613: function(e, t, n) {
        "use strict";
        n.d(t, {
            DG: function() {
                return a
            },
            cw: function() {
                return i
            },
            uy: function() {
                return o
            }
        });
        var r = n(27812)
          , o = function(e) {
            var t;
            if (null !== e && void 0 !== e && null !== (t = e[0]) && void 0 !== t && t.featured)
                return e;
            var n = null === e || void 0 === e ? void 0 : e.find((function(e) {
                return !!e.featured
            }
            ))
              , o = null === e || void 0 === e ? void 0 : e.filter((function(e) {
                return e.streamId !== (null === n || void 0 === n ? void 0 : n.streamId)
            }
            ));
            return n && o ? [n].concat((0,
            r.Z)(o)) : e
        }
          , i = function(e, t) {
            return t && (null === t || void 0 === t ? void 0 : t.getTime()) - e || null
        }
          , a = function(e) {
            if (e) {
                var t = new URLSearchParams(e);
                return Object.fromEntries(t.entries())
            }
        }
    },
    62951: function(e, t, n) {
        "use strict";
        n.d(t, {
            US: function() {
                return m
            },
            Vj: function() {
                return S
            },
            a_: function() {
                return y
            },
            b6: function() {
                return O
            },
            dE: function() {
                return j
            },
            eJ: function() {
                return h
            },
            fs: function() {
                return k
            },
            gQ: function() {
                return b
            },
            lz: function() {
                return _
            },
            tX: function() {
                return g
            }
        });
        var r = n(59499)
          , o = n(8322)
          , i = n.n(o)
          , a = n(48472)
          , s = (n(37713),
        n(9268))
          , c = n(14930)
          , u = (n(39474),
        n(15631))
          , l = (n(7335),
        n(73997))
          , d = n(59108)
          , f = n(41788);
        n(50628);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = function(e) {
            return u.MatchStatusMappingEnum[a.$[e]] || u.MatchStatusMappingEnum.NONE
        }
          , g = function(e, t) {
            var n = (new URLSearchParams(location.search).get("tab") || "all").replace(t, "").toLowerCase().trim();
            return {
                screenClass: {
                    home: "teams_table_home",
                    away: "teams_table_away",
                    all: "teams_table"
                }[n],
                screenName: "Teams - ".concat({
                    home: "Table Home",
                    away: "Table Away",
                    all: "Table"
                }[n], " - ").concat(e),
                tab: (0,
                l.fm)(n)
            }
        }
          , b = function() {
            var e, t, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 ? arguments[1] : void 0, a = {
                leagueId: null === i || void 0 === i || null === (e = i.stageId) || void 0 === e ? void 0 : e.toString(),
                sportId: o ? u.SportIdMap[o] : null === i || void 0 === i ? void 0 : i.sportId
            }, c = {
                awayTeamId: null === i || void 0 === i ? void 0 : i.awayTeamId,
                countryId: null === i || void 0 === i || null === (t = i.countryId) || void 0 === t ? void 0 : t.toString(),
                eventId: null === i || void 0 === i ? void 0 : i.id,
                homeTeamId: null === i || void 0 === i ? void 0 : i.homeTeamId,
                matchState: i ? m(i.eventStatus) : void 0
            };
            return n = {},
            (0,
            r.Z)(n, s.AD.scores, p({
                screenClass: "list",
                screenName: "Home"
            }, a)),
            (0,
            r.Z)(n, s.AD.favourites, p({
                screenClass: "list",
                screenName: "Favourites - ".concat(o || (null === i || void 0 === i ? void 0 : i.sportId))
            }, a)),
            (0,
            r.Z)(n, s.AD.match_details_info, p(p({
                screenClass: "match_info",
                screenName: "Match - Info - ".concat(null === i || void 0 === i ? void 0 : i.homeTeamName, " v ").concat(null === i || void 0 === i ? void 0 : i.awayTeamName)
            }, c), a)),
            (0,
            r.Z)(n, s.AD.match_details_summary, p(p({
                screenClass: "match_info",
                screenName: "Match - Info - ".concat(null === i || void 0 === i ? void 0 : i.homeTeamName, " v ").concat(null === i || void 0 === i ? void 0 : i.awayTeamName)
            }, c), a)),
            (0,
            r.Z)(n, s.AD.match_details_lineups, p(p({
                screenClass: "match_line_ups",
                screenName: "Match - Line-ups - ".concat(null === i || void 0 === i ? void 0 : i.homeTeamName, " v ").concat(null === i || void 0 === i ? void 0 : i.awayTeamName)
            }, c), a)),
            (0,
            r.Z)(n, s.AD.match_details_h2h, p(p({
                screenClass: "match_h2h",
                screenName: "Match - H2H - ".concat(null === i || void 0 === i ? void 0 : i.homeTeamName, " v ").concat(null === i || void 0 === i ? void 0 : i.awayTeamName)
            }, c), a)),
            n
        }
          , h = function(e) {
            var t, n, o = e.sport, i = e.favouriteKind, a = e.segmentView, s = e.event, l = e.competitionName, d = e.selectedDate, v = e.matchTab, g = e.competitionTab, b = e.leagueId, h = s ? {
                leagueId: s.stageId,
                sportId: o ? u.SportIdMap[o] : null === s || void 0 === s ? void 0 : s.sportId,
                awayTeamId: s.awayTeamId,
                countryId: null === (t = s.countryId) || void 0 === t ? void 0 : t.toString(),
                eventId: s.id,
                homeTeamId: s.homeTeamId,
                matchState: m(s.eventStatus)
            } : {}, y = !s && b ? {
                leagueId: b,
                sportId: u.SportIdMap[o || c.ActiveSportEnum.football]
            } : {};
            return (n = {},
            (0,
            r.Z)(n, f.Ek.scores, p({
                screenClass: "list",
                screenName: "Home"
            }, h)),
            (0,
            r.Z)(n, f.Ek.live, p({
                screenClass: "list",
                screenName: "Live"
            }, h)),
            (0,
            r.Z)(n, f.Ek.date, p({
                screenClass: "list",
                screenName: "List - ".concat(d)
            }, h)),
            (0,
            r.Z)(n, f.Ek.favourites, p(p({
                screenClass: "list",
                screenName: "Favourites - ".concat(f.rQ[i])
            }, y), h)),
            (0,
            r.Z)(n, f.Ek.matchDetails, p({
                screenClass: "match_".concat(v),
                screenName: "Match - ".concat(v, " - ").concat(null === s || void 0 === s ? void 0 : s.homeTeamName, " v ").concat(null === s || void 0 === s ? void 0 : s.awayTeamName)
            }, h)),
            (0,
            r.Z)(n, f.Ek.competition, p(p({
                screenClass: "leagues_".concat(g),
                screenName: "Leagues - ".concat(g, " - ").concat(l)
            }, h), y)),
            n)[a]
        }
          , y = function(e, t, n) {
            var r, o;
            return {
                action: t,
                screenClass: "match_tracker",
                screenName: "Match - Tracker - ".concat(null === e || void 0 === e ? void 0 : e.homeTeamName, " v ").concat(null === e || void 0 === e ? void 0 : e.awayTeamName),
                awayTeamId: null === e || void 0 === e ? void 0 : e.awayTeamId,
                countryId: null === e || void 0 === e || null === (r = e.countryId) || void 0 === r ? void 0 : r.toString(),
                eventId: null === e || void 0 === e ? void 0 : e.id,
                homeTeamId: null === e || void 0 === e ? void 0 : e.homeTeamId,
                leagueId: null === e || void 0 === e || null === (o = e.stageId) || void 0 === o ? void 0 : o.toString(),
                matchState: m(null === e || void 0 === e ? void 0 : e.eventStatus),
                sportId: n ? u.SportIdMap[n] : null === e || void 0 === e ? void 0 : e.sportId
            }
        }
          , w = function(e) {
            return e.toLowerCase()
        }
          , _ = function(e) {
            switch (null === e || void 0 === e ? void 0 : e.toLowerCase()) {
            case w("Info"):
                return s.AD.match_details_info;
            case w("Summary"):
                return s.AD.match_details_summary;
            case w("Lineups"):
                return s.AD.match_details_lineups;
            case w("H2H"):
                return s.AD.match_details_h2h;
            default:
                return null
            }
        }
          , O = function(e, t) {
            return null !== e && void 0 !== e && e.evaluate ? {
                streamTitle: e.evaluate("{mediaProxy.entry.name}"),
                streamDuration: e.evaluate("{duration}"),
                streamPosition: t ? ((new Date).getTime() - t) / 1e3 : e.evaluate("{video.player.currentTime}")
            } : null
        }
          , x = ["news_detail", "news_list"]
          , S = function(e, t) {
            if (e && t && !x.includes(e))
                return u.SportIdMap[t]
        }
          , k = function(e) {
            return i().hash(e)
        }
          , j = function() {
            return "ajs-next-".concat(i().hash(Date.now() + (0,
            d.v4)()))
        }
    },
    75219: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return g
            }
        });
        var r = n(59499)
          , o = n(4730)
          , i = n(67294)
          , a = n(93033)
          , s = (n(14930),
        n(54355))
          , c = n(94423)
          , u = n(73997)
          , l = n(42964)
          , d = n(50628)
          , f = ["userId"];
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = function() {
            var e = (0,
            c.$o)("xtremepush.data");
            if (e)
                try {
                    return JSON.parse(e).id
                } catch (t) {
                    l.k.error("xtremepush.data localStorage json parsing failed", {
                        xtremepushDataJSON: e,
                        error: JSON.stringify(t)
                    })(t)
                }
        }
          , g = function(e, t, r) {
            var l = (0,
            a.b)().segmentTracking
              , v = (0,
            d.S)(t, e)
              , g = (0,
            i.useCallback)((function(e, t, o) {
                var i = (0,
                u.D0)(t)
                  , a = {
                    page: {
                        path: window.location.pathname,
                        url: window.location.href
                    }
                };
                if (n.g.analytics)
                    o ? n.g.analytics.track(e, i, a, o) : n.g.analytics.track(e, i, a);
                else {
                    if (o && "undefined" !== typeof r && "undefined" !== typeof v && (!v || !r))
                        return void (o && o());
                    (0,
                    s.z)({
                        event: "segment_track",
                        kind: e,
                        params: i,
                        callback: o
                    })
                }
            }
            ), [r, v])
              , b = (0,
            i.useCallback)((function(e, t, n) {
                g("Tap Events", p({
                    screenClass: (null === t || void 0 === t ? void 0 : t.screenClass) || (null === l || void 0 === l ? void 0 : l.screenClass),
                    screenName: (null === t || void 0 === t ? void 0 : t.screenName) || (null === l || void 0 === l ? void 0 : l.screenName)
                }, e), n)
            }
            ), [null === l || void 0 === l ? void 0 : l.screenClass, null === l || void 0 === l ? void 0 : l.screenName, g])
              , h = (0,
            i.useCallback)((function(e, t, n) {
                var r = n && n();
                b(e, t, r)
            }
            ), [b])
              , y = (0,
            i.useCallback)((function(e) {
                (0,
                s.z)((0,
                u.D0)(p(p(p({
                    event: "ad_banner_impression",
                    kind: "Advertisement",
                    screenClass: null === l || void 0 === l ? void 0 : l.screenClass,
                    screenName: null === l || void 0 === l ? void 0 : l.screenName
                }, null === l || void 0 === l ? void 0 : l.sportParams), null === l || void 0 === l ? void 0 : l.newsParams), e)))
            }
            ), [l]);
            return {
                trackTapEventCbInit: h,
                trackEvent: g,
                identifyEvent: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (r || !localStorage.getItem("ls.segment.segmentIdentifyCalled")) {
                        var i = p(p({}, t), {}, {
                            xtremePushId: m()
                        })
                          , a = i.userId
                          , l = (0,
                        o.Z)(i, f)
                          , d = (0,
                        u.D0)(l);
                        n.g.analytics ? ((0,
                        c.qQ)("ls.segment.latestSegmentConfig", JSON.stringify(e)),
                        a ? n.g.analytics.identify(a, d) : n.g.analytics.identify(d)) : (0,
                        s.z)({
                            event: "segment_identify",
                            params: d
                        }),
                        localStorage.setItem("ls.segment.segmentIdentifyCalled", "true")
                    }
                },
                trackTapEvent: b,
                trackAdImpression: y
            }
        }
    },
    96816: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return a
            }
        });
        var r = n(67294)
          , o = n(50628)
          , i = n(62951)
          , a = function(e, t, n) {
            var a = (0,
            o.S)(e, t);
            return (0,
            r.useCallback)((function() {
                return "undefined" !== typeof n && "undefined" !== typeof a && (!a || !n) ? "" : (0,
                i.dE)()
            }
            ), [n, a])
        }
    },
    27816: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return p
            }
        });
        var r = n(59499)
          , o = n(4730)
          , i = n(67294)
          , a = n(14930)
          , s = (n(15631),
        n(42642))
          , c = n(82611)
          , u = n(75219)
          , l = ["metaData"];
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var v = {
            screenClass: void 0,
            screenName: void 0,
            sportId: void 0,
            countryId: void 0
        }
          , p = function(e, t, n) {
            var r = (0,
            u.K)(e, t, n).trackEvent;
            return (0,
            i.useEffect)((function() {
                var e, t;
                (0,
                s.S)() && (0 !== (null === (e = history) || void 0 === e || null === (t = e.state) || void 0 === t ? void 0 : t.idx) || document.referrer && window.location.href !== document.referrer || (0,
                c.VV)(a.SessionStorageKeys.segmentScreenView))
            }
            ), []),
            {
                trackScreenView: (0,
                i.useCallback)((function(e) {
                    var t = e.metaData
                      , n = (0,
                    o.Z)(e, l)
                      , i = (0,
                    c.G)(a.SessionStorageKeys.segmentScreenView, !0) || v
                      , s = null === i || void 0 === i ? void 0 : i.screenClass
                      , u = null === i || void 0 === i ? void 0 : i.screenName
                      , d = null === i || void 0 === i ? void 0 : i.sportId
                      , p = null === i || void 0 === i ? void 0 : i.eventId;
                    (0,
                    c.t_)(a.SessionStorageKeys.segmentScreenView, f(f(f({}, v), n), {}, {
                        metaData: t
                    }), !0),
                    (u !== n.screenName || d !== n.sportId || "age_gate" === n.screenClass && void 0 === d && void 0 === n.sportId || "odds_widget" === n.screenClass && p !== n.eventId || s === n.screenClass && i.leagueId !== n.leagueId) && r("Screen View", f(f({}, n), {}, {
                        prevScreenClass: s,
                        prevScreenName: u
                    }))
                }
                ), [r])
            }
        }
    },
    41788: function(e, t, n) {
        "use strict";
        var r, o, i, a, s;
        n.d(t, {
            Ek: function() {
                return a
            },
            nU: function() {
                return s
            },
            o3: function() {
                return r
            },
            rQ: function() {
                return o
            },
            ub: function() {
                return i
            }
        }),
        function(e) {
            e.home = "Home",
            e.login = "Login",
            e.settingsMenu = "Settings - Menu",
            e.settingsDetails = "Settings - Details",
            e.forgotPassword = "Account - Forgot Password",
            e.accountDetails = "Account - Details"
        }(r || (r = {})),
        function(e) {
            e.league = "competitions",
            e.event = "matches"
        }(o || (o = {})),
        function(e) {
            e.competitions = "league",
            e.matches = "event"
        }(i || (i = {})),
        function(e) {
            e.scores = "home",
            e.live = "live",
            e.date = "date",
            e.favourites = "favourites",
            e.matchDetails = "matchDetails",
            e.competition = "competition"
        }(a || (a = {})),
        function(e) {
            e.scores = "Scores",
            e.streaming = "Streaming",
            e.favourites = "Favourites",
            e.news = "News",
            e.livescoreBet = "Bet",
            e.mobile = "Get the app",
            e["free-to-play-games"] = "Six"
        }(s || (s = {}))
    },
    50628: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return a
            },
            g: function() {
                return i
            }
        });
        var r = n(48472)
          , o = n(62340)
          , i = function(e, t) {
            var n = t === r.$.LIVE || t === r.$.PAST;
            switch (e) {
            case o.ActiveSportEnum.cricket:
                return "Scorecard";
            case o.ActiveSportEnum.tennis || o.ActiveSportEnum.basketball:
                return "Info";
            default:
                return n ? "Summary" : "Info"
            }
        }
          , a = function(e, t) {
            var n = (t || {}).segment_geo_constraints
              , r = void 0 === n ? [] : n
              , o = (e || "").toUpperCase()
              , i = r.find((function(e) {
                return e.countries.includes(o)
            }
            ));
            return !(i && 0 === i.percentage)
        }
    },
    45990: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return u
            }
        });
        var r = n(69135)
          , o = (n(67294),
        n(8013))
          , i = n(22383)
          , a = n(83207)
          , s = n.n(a)
          , c = n(85893)
          , u = function(e) {
            var t = e.hiddenAds
              , n = void 0 === t ? [] : t
              , a = e.adsTargeting
              , u = (0,
            r.useAmp)();
            return n.includes(o.GoogleADFormatEnum.Sticky_Bottom) ? null : (0,
            c.jsx)("div", {
                className: s().adsHolder,
                children: u ? (0,
                c.jsx)(i.x, {
                    id: o.GoogleAdIds.Footer,
                    width: o.Dimensions[o.GoogleADFormatEnum.Sticky_Bottom][1][0],
                    height: o.Dimensions[o.GoogleADFormatEnum.Sticky_Bottom][1][1],
                    targeting: a,
                    format: o.GoogleADFormatEnum.Sticky_Bottom,
                    isSticky: !0,
                    advertiseUnitPathName: o.AdUnitPathNameEnum.newsSticky
                }) : (0,
                c.jsx)(o.GoogleAD, {
                    format: o.GoogleADFormatEnum.Sticky_Bottom,
                    id: o.GoogleAdIds.Footer,
                    responsive: !0,
                    targeting: a
                })
            })
        }
    },
    55143: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return c
            }
        });
        n(67294);
        var r = n(82079)
          , o = n(40895)
          , i = n(99019)
          , a = n.n(i)
          , s = n(85893)
          , c = function(e) {
            var t = e.adsTargeting;
            return (0,
            s.jsx)("div", {
                id: "header-ads-holder",
                className: a().headerAdsHolder,
                children: (0,
                s.jsx)(r.y, {
                    id: o.QH.Header,
                    format: o._$.Top_Banner,
                    targeting: t,
                    responsive: !0
                })
            })
        }
    },
    25922: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(93033)
          , i = function(e) {
            var t = e.id
              , n = e.setNativeAdHasData
              , i = e.isHiddenWhenNoAdContent
              , a = (0,
            r.useState)(!0)
              , s = a[0]
              , c = a[1]
              , u = (0,
            r.useState)(!1)
              , l = u[0]
              , d = u[1]
              , f = (0,
            o.b)().isAdBlockDetected
              , v = (0,
            r.useCallback)((function() {
                d(!0)
            }
            ), []);
            return (0,
            r.useEffect)((function() {
                if (l && i) {
                    var e = document.querySelectorAll("#".concat(t, " iframe"));
                    null !== e && void 0 !== e && e.length ? (c(!0),
                    n && n(!0)) : (c(!1),
                    n && n(!1))
                }
            }
            ), [t, l, n, i]),
            f ? {
                hasAdContent: !1
            } : i ? {
                hasAdContent: s,
                isBannerLoaded: l,
                onSlotRenderComplete: v
            } : {
                hasAdContent: !0
            }
        }
    },
    89313: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return l
            }
        });
        n(67294);
        var r = n(93033)
          , o = n(28501)
          , i = n(49136)
          , a = n(8013)
          , s = n(61158)
          , c = n.n(s)
          , u = n(85893)
          , l = function(e) {
            var t = e.adsTargeting
              , n = (0,
            r.b)().isDesktopView
              , s = i.v.isTabletDevice;
            return !(0,
            o.L)().isDesktopWidth || n || s ? null : (0,
            u.jsxs)("div", {
                className: c().skinAdHolder,
                id: "skin-ad-holder",
                children: [(0,
                u.jsx)(a.GoogleAD, {
                    id: a.GoogleAdIds.Skin,
                    format: a.GoogleADFormatEnum.Skin,
                    targeting: t,
                    isOutOfPage: !0
                }), (0,
                u.jsx)(a.GoogleAD, {
                    id: a.GoogleAdIds.SkinRefresh,
                    format: a.GoogleADFormatEnum.Skin_Refresh,
                    targeting: t,
                    isOutOfPage: !0
                })]
            })
        }
    },
    94740: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dc: function() {
                return d
            },
            cQ: function() {
                return l
            },
            aX: function() {
                return f
            }
        });
        n(67294);
        var r = n(51005)
          , o = n(4078)
          , i = n.n(o)
          , a = n(85893)
          , s = function(e) {
            var t = e.title
              , n = void 0 === t ? "" : t
              , r = e.description
              , o = void 0 === r ? "" : r;
            return (0,
            a.jsxs)("div", {
                className: i().wrapper,
                children: [(0,
                a.jsx)("div", {
                    children: n
                }), (0,
                a.jsx)("div", {
                    children: o
                })]
            })
        }
          , c = n(50686)
          , u = n.n(c)
          , l = function() {
            var e = (0,
            r.$G)().t;
            return (0,
            a.jsx)("noscript", {
                children: (0,
                a.jsx)("div", {
                    children: (0,
                    a.jsx)(s, {
                        title: (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsxs)("p", {
                                className: u().pContainer,
                                children: [e("errorNotifications.jsDisabledError.part1"), " ", (0,
                                a.jsxs)("strong", {
                                    children: [e("errorNotifications.jsDisabledError.part2"), " "]
                                }), e("errorNotifications.jsDisabledError.part3"), " ", (0,
                                a.jsxs)("strong", {
                                    children: [" ", e("errorNotifications.jsDisabledError.part4")]
                                }), e("errorNotifications.jsDisabledError.part5"), " ", (0,
                                a.jsxs)("strong", {
                                    children: [e("errorNotifications.jsDisabledError.part6"), " "]
                                }), e("errorNotifications.jsDisabledError.part7")]
                            }), (0,
                            a.jsx)("br", {}), (0,
                            a.jsxs)("p", {
                                className: u().pContainer,
                                children: [e("errorNotifications.jsDisabledError.part8"), " ", (0,
                                a.jsxs)("strong", {
                                    children: [e("errorNotifications.jsDisabledError.part9"), " "]
                                }), e("errorNotifications.jsDisabledError.part10"), " ", (0,
                                a.jsxs)("strong", {
                                    children: [" ", e("errorNotifications.jsDisabledError.part11")]
                                })]
                            }), (0,
                            a.jsx)("br", {}), (0,
                            a.jsxs)("p", {
                                className: u().pContainer,
                                children: [e("errorNotifications.jsDisabledError.part12"), " ", (0,
                                a.jsx)("a", {
                                    href: "https://www.livescores.com",
                                    children: "https://www.livescores.com"
                                })]
                            })]
                        }),
                        description: ""
                    })
                })
            })
        }
          , d = function() {
            var e = (0,
            r.$G)().t;
            return (0,
            a.jsx)(s, {
                title: (0,
                a.jsxs)("p", {
                    children: [e("errorNotifications.dataError.part1"), " ", (0,
                    a.jsxs)("strong", {
                        children: [e("errorNotifications.dataError.part2"), " "]
                    }), e("errorNotifications.dataError.part3"), " ", (0,
                    a.jsxs)("strong", {
                        children: [" ", e("errorNotifications.dataError.part4")]
                    })]
                }),
                description: (0,
                a.jsxs)("p", {
                    children: [e("errorNotifications.dataError.part5"), " ", (0,
                    a.jsxs)("strong", {
                        children: [e("errorNotifications.dataError.part6"), " "]
                    }), e("errorNotifications.dataError.part7")]
                })
            })
        }
          , f = function() {
            var e = (0,
            r.$G)().t;
            return (0,
            a.jsx)(s, {
                title: (0,
                a.jsxs)("p", {
                    children: [e("errorNotifications.notificationError.part1"), " ", (0,
                    a.jsxs)("strong", {
                        children: [e("errorNotifications.notificationError.part2"), " "]
                    }), e("errorNotifications.notificationError.part3"), " ", (0,
                    a.jsxs)("strong", {
                        children: [" ", e("errorNotifications.notificationError.part4")]
                    })]
                }),
                description: (0,
                a.jsxs)("p", {
                    children: [e("errorNotifications.notificationError.part5"), " ", (0,
                    a.jsxs)("strong", {
                        children: [e("errorNotifications.notificationError.part6"), " "]
                    })]
                })
            })
        }
    },
    11594: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dc: function() {
                return r.Dc
            },
            aX: function() {
                return r.aX
            },
            cQ: function() {
                return r.cQ
            }
        });
        var r = n(94740)
    },
    82079: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return Z
            }
        });
        var r = n(59499)
          , o = n(67294)
          , i = n(16622)
          , a = (n(13930),
        n(25549))
          , s = n(25922)
          , c = n(94184)
          , u = n.n(c)
          , l = n(11752)
          , d = n.n(l)
          , f = n(93033)
          , v = n(28501)
          , p = n(49136)
          , m = n(76234)
          , g = n(84398)
          , b = n(18564)
          , h = n(17033)
          , y = n(22016)
          , w = n(31561)
          , _ = n(75219)
          , O = n(68667)
          , x = n(25275)
          , S = n(3900)
          , k = n(44814)
          , j = n(40895)
          , C = n(12392)
          , P = n.n(C)
          , E = n(82384)
          , A = n(85893);
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var L = p.v.isTabletDevice
          , N = [j._$.Top_MPU, j._$.x300x100, j._$.Skin, j._$.Outstream]
          , T = d()().publicRuntimeConfig
          , M = (0,
        h.tQ)()
          , R = function(e) {
            var t = e.id
              , n = e.className
              , i = e.format
              , a = e.targeting
              , s = e.responsive
              , c = e.isSingleRequestEnabled
              , l = e.minWindowWidth
              , d = e.maxWindowWidth
              , p = e.resizeDebounce
              , S = e.refreshInterval
              , C = e.onSlotRenderEnded
              , I = e.isOutOfPage
              , R = e.isLabelHidden
              , U = e.children
              , B = e.isFixedHeight
              , Z = e.advertiseUnitPathName
              , F = (0,
            o.useState)(0)
              , G = F[0]
              , H = F[1]
              , z = (0,
            o.useState)(0)
              , V = z[0]
              , W = z[1]
              , q = (0,
            o.useState)([0, 0])
              , $ = q[0]
              , Y = q[1]
              , K = (0,
            o.useState)(!1)
              , J = K[0]
              , Q = K[1]
              , X = (0,
            o.useState)(!1)
              , ee = X[0]
              , te = X[1]
              , ne = (0,
            o.useRef)(null)
              , re = (0,
            o.useRef)(null)
              , oe = (0,
            o.useRef)(null)
              , ie = (0,
            o.useRef)(!1)
              , ae = (0,
            o.useRef)()
              , se = (0,
            f.b)()
              , ce = se.activeSport
              , ue = se.isSevPage
              , le = (0,
            k.a)()
              , de = le.geoIpCountryCode
              , fe = le.externalAppConfig
              , ve = le.isUserAdult
              , pe = le.isNpAdsEnabled
              , me = (0,
            v.L)().isDesktopWidth
              , ge = Z || ((null === a || void 0 === a ? void 0 : a.adUnitPathName) || j.dr.ros)
              , be = (0,
            g.U)({
                format: i,
                isDesktopWidth: me,
                isInPopup: M,
                adUnitPathName: ge
            })
              , he = (0,
            o.useMemo)((function() {
                var e = null === a || void 0 === a ? void 0 : a.sport
                  , t = null !== a && void 0 !== a && a.lsMedia ? (0,
                m.Nv)(e, de, me, a.lsMedia, L, fe).state : void 0;
                return (0,
                h.me)(D(D(D({}, a), e && {
                    sport: e
                }), {}, {
                    format: i,
                    isUserAdult: String(ve),
                    googleAdsEnv: T.PUBLIC_GOOGLE_ADS_ENV,
                    lsSite: "LiveScore",
                    isSevPage: ue
                }, t && {
                    lsMediaState: t
                }))
            }
            ), [i, a, de, ve])
              , ye = (0,
            o.useCallback)((function() {
                var e = ne.current;
                S && e && !N.includes(i) && (oe.current = setInterval((function() {
                    document.hidden || (h.Gn.pubads().refresh([e]),
                    Q(!1))
                }
                ), S))
            }
            ), [i, S])
              , we = (0,
            o.useCallback)((function() {
                var e, n;
                if (null !== (e = window) && void 0 !== e && null !== (n = e.teads) && void 0 !== n && n.cleanup && window.teads.cleanup(),
                null !== h.Gn && void 0 !== h.Gn && h.Gn.pubads) {
                    var r = (0,
                    h.lT)(t);
                    r && h.Gn.cmd.push((function() {
                        var e = r.getSlotId().getId();
                        h.Gn.destroySlots([r]);
                        var t = document.getElementById("google_ads_iframe_".concat(e, "__container__"));
                        t && t.remove(),
                        ne.current = null
                    }
                    ))
                }
            }
            ), [t])
              , _e = (0,
            o.useCallback)((function(e) {
                var t = e.getTargetingMap();
                Object.keys(he).every((function(e) {
                    return t[e] && t[e][0] === he[e]
                }
                )) || (e.clearTargeting(),
                (0,
                h.c_)(e, he),
                h.Gn.pubads().refresh([e]))
            }
            ), [he])
              , Oe = (0,
            o.useCallback)((function() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = null === ae || void 0 === ae ? void 0 : ae.current;
                if (r && be) {
                    var o = r.offsetWidth
                      , a = (0,
                    h.zm)(i, !me, M)
                      , c = (0,
                    h.kt)(a, o, s)
                      , u = V || (null === (e = window) || void 0 === e ? void 0 : e.innerWidth);
                    if ((void 0 !== l && u < l || void 0 !== d && u > d) && (c = []),
                    (n || JSON.stringify(c) !== JSON.stringify(re.current)) && (I || c && c.length)) {
                        var f = (0,
                        h._3)(c);
                        H(f),
                        re.current = c,
                        we();
                        var v = (0,
                        h.bS)(c)
                          , p = I ? null === h.Gn || void 0 === h.Gn ? void 0 : h.Gn.defineOutOfPageSlot(be, t) : null === h.Gn || void 0 === h.Gn ? void 0 : h.Gn.defineSlot(be, v, t);
                        ne.current = p,
                        p && (p.addService(h.Gn.pubads()),
                        (0,
                        h.c_)(p, he),
                        h.Gn.cmd.push((function() {
                            h.Gn.display(t),
                            h.Gn.pubads().refresh([p])
                        }
                        )))
                    }
                }
            }
            ), [be, i, me, s, V, l, d, I, we, t, he])
              , xe = function() {
                var e = (0,
                o.useState)(null)
                  , t = e[0]
                  , n = e[1]
                  , r = (0,
                O.a)()
                  , i = r.segmentConfig
                  , a = r.geoIpCountryCode
                  , s = (0,
                x.H)().isOneTrustAllowed
                  , c = (0,
                _.K)(i, a, s).trackAdImpression;
                return (0,
                o.useEffect)((function() {
                    return t && (c(t),
                    n(null)),
                    function() {
                        n(null)
                    }
                }
                ), [t, c]),
                {
                    impressionInfo: t,
                    setImpressionInfo: n
                }
            }()
              , Se = xe.setImpressionInfo
              , ke = (0,
            o.useCallback)((function(e) {
                var n = e.slot;
                if (n === ne.current) {
                    var r = n.getContentUrl()
                      , o = n.getResponseInformation() || {}
                      , i = o.lineItemId
                      , a = o.creativeId
                      , s = o.advertiserId
                      , c = o.campaignId;
                    Se({
                        adType: r,
                        adLineItem: i,
                        adCreative: a,
                        advertiserId: s,
                        campaignId: c,
                        adPlacement: t
                    })
                }
            }
            ), [t]);
            !function(e) {
                var t = e.id
                  , n = e.path
                  , r = e.currentSlot
                  , i = e.refreshSlotWhenDimensionChanged
                  , a = e.initSlotAutoRefresh
                  , s = e.handleAdTracking
                  , c = e.removeSlot
                  , u = e.setWindowWidth
                  , l = e.setScriptLoaded
                  , d = e.setSlotDimensions
                  , f = e.setIsAdVisible
                  , v = e.geoIpCountryCode
                  , p = e.resizeDebounce
                  , m = e.onSlotRenderEnded
                  , g = e.isSingleRequestEnabled
                  , y = e.responsive
                  , w = e.isNpAdsEnabled;
                (0,
                o.useEffect)((function() {
                    if (v) {
                        var e = function() {
                            var e = function() {
                                var e, n;
                                u(null === (e = window) || void 0 === e ? void 0 : e.innerWidth);
                                var r = document.getElementById(t);
                                (null === r || void 0 === r || null === (n = r.getElementsByTagName("iframe")) || void 0 === n ? void 0 : n.length) && (null === r || void 0 === r || r.removeAttribute("style"))
                            };
                            p && (0,
                            b.Ds)(e, Number(p)),
                            e()
                        };
                        return r.current || ((0,
                        h.mS)({
                            onSlotRenderEnded: m,
                            path: n,
                            isSingleRequestEnabled: g,
                            isNpAdsEnabled: w
                        }),
                        y && window.addEventListener("resize", e),
                        h.Gn.cmd.push((function() {
                            l(!0),
                            i(!0),
                            a(),
                            h.Gn.pubads().addEventListener("slotRenderEnded", (function(e) {
                                var t = e.slot;
                                t && t === r.current && !e.isEmpty && e.size && (d((function() {
                                    return e.size
                                }
                                )),
                                f(!0))
                            }
                            )),
                            h.Gn.pubads().addEventListener("impressionViewable", s)
                        }
                        ))),
                        function() {
                            y && window.removeEventListener("resize", e),
                            r.current && c()
                        }
                    }
                }
                ), [t, v])
            }({
                id: t,
                path: be,
                currentSlot: ne,
                refreshSlotWhenDimensionChanged: Oe,
                initSlotAutoRefresh: ye,
                handleAdTracking: ke,
                removeSlot: we,
                setWindowWidth: W,
                setScriptLoaded: te,
                setSlotDimensions: Y,
                setIsAdVisible: Q,
                geoIpCountryCode: de,
                resizeDebounce: p,
                onSlotRenderEnded: C,
                isSingleRequestEnabled: c,
                responsive: s,
                isNpAdsEnabled: pe
            }),
            function(e) {
                var t = e.windowWidth
                  , n = e.isScriptLoaded
                  , r = e.refreshSlotWhenDimensionChanged
                  , i = e.responsive;
                (0,
                o.useEffect)((function() {
                    i && t && n && r()
                }
                ), [t, n, r, i])
            }({
                responsive: s,
                windowWidth: V,
                isScriptLoaded: ee,
                refreshSlotWhenDimensionChanged: Oe
            }),
            function(e) {
                var t = e.id
                  , n = e.slot
                  , r = e.activeSport
                  , i = e.targeting
                  , a = e.refreshInterval
                  , s = e.format
                  , c = e.autoRefreshIntervalId
                  , u = e.refreshSlotTargeting
                  , l = e.initSlotAutoRefresh
                  , d = e.shouldBeRefreshedInViewport;
                (0,
                o.useEffect)((function() {
                    if (!n)
                        return function() {
                            clearInterval(Number(c.current))
                        }
                        ;
                    var e = (0,
                    h.hH)(document.getElementById(t))
                      , r = null
                      , o = (0,
                    b.Ds)((function() {
                        d.current && (0,
                        h.hH)(document.getElementById(t)) && (u(n),
                        d.current = !1)
                    }
                    ), 200);
                    return e || s === y.GoogleADFormatEnum.Skin || s === y.GoogleADFormatEnum.Skin_Refresh ? r = setTimeout((function() {
                        u(n)
                    }
                    ), 500) : (d.current = !0,
                    document.addEventListener("scroll", o)),
                    l(),
                    function() {
                        d.current = !1,
                        clearInterval(Number(c.current)),
                        clearInterval(Number(r)),
                        document.removeEventListener("scroll", o)
                    }
                }
                ), [r, i, t, a, s, u, l])
            }({
                slot: ne.current,
                activeSport: ce || null,
                targeting: a,
                id: t,
                refreshInterval: S,
                format: i,
                autoRefreshIntervalId: oe,
                refreshSlotTargeting: _e,
                initSlotAutoRefresh: ye,
                shouldBeRefreshedInViewport: ie
            }),
            function(e) {
                var t = e.slotNodeRef
                  , n = e.slotWidth;
                (0,
                w.L)((function() {
                    var e;
                    (null === (e = t.current) || void 0 === e ? void 0 : e.firstChild).style.maxWidth = "".concat(n, "px")
                }
                ), [t, n])
            }({
                slotNodeRef: ae,
                slotWidth: G
            });
            var je = (0,
            o.useMemo)((function() {
                return D(D({}, B && {
                    minHeight: (0,
                    h.pv)(i, !me, M)
                }), G && {
                    maxWidth: G
                })
            }
            ), [i, me, B, G]);
            return (0,
            A.jsx)("div", {
                className: u()(n, P().fullWidth, {
                    gad__slot__shown: B || J
                }),
                ref: ae,
                "data-prop-position": i,
                "data-ad-unit-id": be,
                "data-div-id": t,
                id: "".concat(t, "-wrapper"),
                children: (0,
                A.jsxs)("div", {
                    className: u()(P().adsWidthWrapper, (0,
                    r.Z)({}, P().bottomAdsMargin, i === j._$.Sticky_Bottom)),
                    style: je,
                    children: [ee && J && U, (0,
                    A.jsx)("div", {
                        id: t,
                        "data-test-id": "".concat(t, "-internal")
                    }), ee && J && (0,
                    A.jsx)(E._, {
                        slotId: t,
                        slotHeight: $[1],
                        slotWidth: $[0],
                        isLabelHidden: R
                    })]
                })
            })
        };
        function U(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        R.defaultProps = {
            responsive: !0,
            isSingleRequestEnabled: !1,
            resizeDebounce: 100,
            refreshInterval: S.C
        };
        var Z = function(e) {
            var t = (0,
            i.t)()
              , n = (0,
            o.useMemo)((function() {
                return B({
                    id: e.id,
                    path: e.path,
                    format: e.format
                }, B(B({}, e.targeting), {}, {
                    lsMedia: void 0
                }))
            }
            ), [e.format, e.id, e.path, e.targeting])
              , r = (0,
            s.S)({
                id: e.id,
                setNativeAdHasData: void 0,
                isHiddenWhenNoAdContent: null === e || void 0 === e ? void 0 : e.isHiddenWhenNoAdContent
            })
              , c = r.hasAdContent
              , u = r.onSlotRenderComplete;
            return c && t ? (0,
            A.jsx)(a.S, {
                componentProps: n,
                errorZone: "adSlot",
                children: (0,
                A.jsx)(R, B(B({}, e), {}, {
                    onSlotRenderEnded: (null === e || void 0 === e ? void 0 : e.onSlotRenderEnded) || u
                }))
            }) : null
        }
    },
    22383: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return m
            }
        });
        var r = n(59499)
          , o = n(11752)
          , i = n.n(o)
          , a = n(67294)
          , s = (n(14930),
        n(94423))
          , c = n(84398)
          , u = n(82384)
          , l = n(17033)
          , d = n(85893);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p = i()().publicRuntimeConfig
          , m = function(e) {
            var t = e.width
              , n = e.height
              , r = e.targeting
              , o = e.format
              , i = e.isSticky
              , f = void 0 !== i && i
              , m = e.id
              , g = e.advertiseUnitPathName
              , b = null === r || void 0 === r ? void 0 : r.sport
              , h = (0,
            a.useMemo)((function() {
                return JSON.stringify((0,
                l.me)(v(v(v({}, r), b && {
                    sport: b
                }), {}, {
                    format: o,
                    isUserAdult: (0,
                    s.$o)("ls.isUserAdult"),
                    googleAdsEnv: p.PUBLIC_GOOGLE_ADS_ENV,
                    lsSite: "LiveScore"
                })))
            }
            ), [r, b, o])
              , y = (0,
            c.U)({
                format: o,
                isDesktopWidth: !1,
                isInPopup: !1,
                adUnitPathName: g || (null === r || void 0 === r ? void 0 : r.adUnitPathName)
            });
            return (0,
            d.jsx)(d.Fragment, {
                children: f ? (0,
                d.jsx)("amp-sticky-ad", {
                    layout: "nodisplay",
                    children: (0,
                    d.jsx)("amp-ad", {
                        width: t,
                        height: n,
                        type: "doubleclick",
                        "data-slot": y,
                        json: h
                    })
                }) : (0,
                d.jsxs)("div", {
                    children: [(0,
                    d.jsx)("amp-ad", {
                        id: m,
                        width: t,
                        height: n,
                        type: "doubleclick",
                        "data-slot": y,
                        json: h
                    }), (0,
                    d.jsx)(u._, {
                        slotId: m,
                        slotHeight: n,
                        slotWidth: t
                    })]
                })
            })
        }
    },
    82384: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return p
            }
        });
        var r = n(59499)
          , o = n(94184)
          , i = n.n(o)
          , a = n(67294)
          , s = n(28501)
          , c = n(40895)
          , u = n(74130)
          , l = n.n(u)
          , d = n(85893);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p = function(e) {
            var t, n = e.slotHeight, o = e.slotWidth, u = e.slotId, f = e.isLabelHidden, p = (0,
            s.L)().isSmallestWidth, m = (0,
            a.useMemo)((function() {
                return (u === c.QH.Header || u === c.QH.Footer) && !(p && u === c.QH.Footer)
            }
            ), [u, p]);
            if (!(0,
            a.useMemo)((function() {
                return !f && u !== c.QH.Skin && u !== c.QH.SkinRefresh && u !== c.QH.Outstream
            }
            ), [f, u]))
                return null;
            var g = "".concat("number" === typeof n ? n : 0, "px");
            return (0,
            d.jsx)("div", {
                className: i()(l().publiciLabel, (t = {},
                (0,
                r.Z)(t, l().isAdLabelSideways, m),
                (0,
                r.Z)(t, l().isRotated, m),
                (0,
                r.Z)(t, l().isBlackBackground, u === c.QH.Footer),
                t)),
                "data-test-id": "".concat(u, "-label"),
                style: v(v({}, m && n ? {
                    width: g
                } : {}), o > 0 ? {
                    right: "calc((100% - ".concat(o, "px) / 2")
                } : {}),
                children: (0,
                d.jsx)("span", {
                    children: "Publicidad"
                })
            })
        }
    },
    17033: function(e, t, n) {
        "use strict";
        n.d(t, {
            Gn: function() {
                return r
            },
            SZ: function() {
                return l
            },
            _3: function() {
                return b
            },
            bS: function() {
                return u
            },
            c_: function() {
                return m
            },
            hH: function() {
                return d
            },
            kt: function() {
                return g
            },
            lT: function() {
                return f
            },
            mS: function() {
                return v
            },
            me: function() {
                return p
            },
            pv: function() {
                return c
            },
            tQ: function() {
                return a
            },
            zm: function() {
                return s
            }
        });
        var r, o = n(27812), i = (n(14930),
        n(40895)), a = function() {
            return window.opener && window.opener !== window || !1
        }, s = function(e, t, n, r) {
            var o = t ? i.uP[e] : i.Db[e];
            return o ? e === i._$.Top_Banner && r ? [o[1]] : e === i._$.Sticky_Bottom ? t && !n ? [o[1]] : [o[0]] : e === i._$.fluid ? [o[0]] : o : []
        }, c = function(e, t, n) {
            var r = s(e, t, n);
            return Number(r.reduce((function(e, t) {
                return t[1] < e || 0 === e ? Number(t[1]) : e
            }
            ), 0))
        }, u = function(e) {
            var t, n;
            return "fluid" === (null === e || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t[1]) ? null === e || void 0 === e || null === (n = e[0]) || void 0 === n ? void 0 : n[1] : (0,
            o.Z)(e)
        }, l = [i._$.Sticky_Bottom], d = function(e) {
            if (!e)
                return !1;
            var t = e.getBoundingClientRect();
            return t.bottom > 0 && t.right > 0 && t.left < (window.innerWidth || document.documentElement.clientWidth) && t.top < (window.innerHeight || document.documentElement.clientHeight)
        }, f = function(e) {
            var t;
            return null !== (t = r) && void 0 !== t && t.pubads && r.pubads().getSlots().find((function(t) {
                return t.getSlotElementId() === e
            }
            )) || null
        }, v = function(e) {
            var t = !!r;
            r || (window.googletag = window.googletag || {
                cmd: []
            },
            r = window.googletag);
            var n = e.path
              , o = e.isSingleRequestEnabled
              , i = e.onSlotRenderEnded;
            e.isNpAdsEnabled && r.cmd.push((function() {
                r.pubads().setPrivacySettings({
                    nonPersonalizedAds: !0
                })
            }
            )),
            i && r.cmd.push((function() {
                r.pubads().addEventListener("slotRenderEnded", (function(e) {
                    e.slot.getAdUnitPath() === n && i(e)
                }
                ))
            }
            )),
            t || r.cmd.push((function() {
                o && r.pubads().enableSingleRequest(),
                r.pubads().enableAsyncRendering(),
                r.pubads().collapseEmptyDivs(),
                r.pubads().disableInitialLoad(),
                r.pubads().enableLazyLoad({
                    fetchMarginPercent: 200,
                    renderMarginPercent: 100,
                    mobileScaling: 2
                }),
                r.enableServices()
            }
            ))
        }, p = function(e) {
            var t = {};
            return t[i.S7.LS_Environment] = e.googleAdsEnv || "testing",
            t[i.S7.Opera_mini] = e.isOperaMini ? "Yes" : "No",
            t[i.S7.LS_Position] = e.format,
            t[i.S7.LS_BrandSafe] = e.newsArticleSensitiveContent ? "False" : "True",
            t[i.S7.LS_Site] = e.lsSite,
            t[i.S7.LS_Age_Gate] = String("false" === e.isUserAdult),
            e.staticPageName ? t[i.S7.LS_Page] = e.staticPageName : e.sport && (t[i.S7.LS_Sport] = e.sport,
            e.sportCategory && (t[e.sport] = e.sportCategory)),
            e.matchId && (t[i.S7.LS_Match] = e.matchId),
            e.team && (t[i.S7.LS_Team] = e.team),
            e.league && (t[i.S7.LS_League] = e.league),
            e.country && (t[i.S7.LS_Country] = e.country),
            e.screen && (t[i.S7.LS_Screen] = e.screen),
            e.newsArticleCategory && (t[i.S7.LS_News_Category] = e.newsArticleCategory),
            e.newsArticleTitle && (t[i.S7.LS_News_Article_Title] = e.newsArticleTitle),
            e.newsArticleId && (t[i.S7.LS_News_Article_Id] = e.newsArticleId),
            e.newsArticleTags && (t[i.S7.LS_News_Tags] = e.newsArticleTags),
            e.newsArticleTeam && (t[i.S7.LS_News_Team] = e.newsArticleTeam),
            e.newsArticleLeague && (t[i.S7.LS_News_League] = e.newsArticleLeague),
            e.isSevPage && (t[i.S7.LS_TV_Player] = "desktop" === e.lsMediaState ? "Yes" : "No"),
            e.format === i._$.fluid && (t[i.S7.platform] = e.platform,
            t[i.S7.medium] = e.medium,
            e.lsm_click_id && (t[i.S7.lsm_click_id] = e.lsm_click_id)),
            t
        };
        function m(e, t) {
            Object.keys(t).forEach((function(n) {
                return e.setTargeting(n, t[n])
            }
            ))
        }
        var g = function(e, t, n) {
            return n ? e.filter((function(e) {
                return e[0] <= t
            }
            )) : e
        }
          , b = function(e) {
            return e.reduce((function(e, t) {
                return e > t[0] ? e : t[0]
            }
            ), 0)
        }
    },
    84398: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return s
            }
        });
        var r = n(67294)
          , o = n(93033)
          , i = n(3900)
          , a = n(40895)
          , s = function(e) {
            var t = e.format
              , n = e.isInPopup
              , s = e.isDesktopWidth
              , c = e.adUnitPathName
              , u = (0,
            o.b)()
              , l = u.isNativePage
              , d = u.isAmp;
            return (0,
            r.useMemo)((function() {
                if (!c)
                    return "";
                var e, r, o = null === a.a4 || void 0 === a.a4 ? void 0 : a.a4[t], u = i.H;
                l ? e = "native" : e = d ? null !== u && void 0 !== u && null !== (r = u.amp) && void 0 !== r && r[c] ? "amp" : "mobile" : s || n ? "desktop" : "mobile";
                var f = u[e][c];
                return o ? f + o : f
            }
            ), [t, s, c])
        }
    },
    8013: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            AdUnitPathNameEnum: function() {
                return i.dr
            },
            AdsTargetingPageNameEnum: function() {
                return i.P$
            },
            Dimensions: function() {
                return i.Db
            },
            DimensionsMobile: function() {
                return i.uP
            },
            GoogleAD: function() {
                return r.y
            },
            GoogleADFormatEnum: function() {
                return i._$
            },
            GoogleAdIds: function() {
                return i.QH
            },
            NewsMpuGoogleAdFormat: function() {
                return i.a4
            },
            TargetingKeysEnum: function() {
                return i.S7
            },
            events: function() {
                return i.U3
            },
            setTargetingForSlot: function() {
                return o.c_
            }
        });
        var r = n(82079)
          , o = n(17033)
          , i = n(40895)
    },
    79709: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return h
            },
            n: function() {
                return b
            }
        });
        var r = n(59499)
          , o = n(4730)
          , i = n(41664)
          , a = n.n(i)
          , s = n(11163)
          , c = n(67294)
          , u = n(93033)
          , l = n(39145)
          , d = n(51005)
          , f = n(85893)
          , v = ["onClick", "className", "children", "href", "id", "scroll"]
          , p = ["children", "params", "className", "href", "replace", "onClick", "scroll", "additionalWhiteListedParams"];
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b = function(e) {
            var t = e.onClick
              , n = e.className
              , r = e.children
              , i = e.href
              , s = e.id
              , c = (e.scroll,
            (0,
            o.Z)(e, v))
              , d = (0,
            u.b)().queryString
              , p = (0,
            l.fg)("".concat(i).concat(d));
            return t || n ? (0,
            f.jsx)(a(), g(g({
                href: p
            }, c), {}, {
                passHref: !0,
                children: (0,
                f.jsx)("a", {
                    id: s,
                    onClick: t,
                    className: n,
                    children: r
                })
            })) : (0,
            f.jsx)(a(), g(g({
                href: p
            }, c), {}, {
                children: c.passHref ? r : (0,
                f.jsx)("a", {
                    children: r
                })
            }))
        }
          , h = c.forwardRef((function(e, t) {
            var n = e.children
              , r = e.params
              , i = e.className
              , c = e.href
              , v = e.replace
              , m = e.onClick
              , b = e.scroll
              , h = e.additionalWhiteListedParams
              , y = void 0 === h ? [] : h
              , w = (0,
            o.Z)(e, p)
              , _ = (0,
            s.useRouter)().asPath
              , O = (0,
            d.$G)().activeLocale
              , x = (0,
            u.b)()
              , S = x.queryParams
              , k = x.rootLink
              , j = c || k || "/".concat(O).concat(_.split("?")[0])
              , C = g(g({}, S || {}), r || {})
              , P = new URLSearchParams((0,
            l.YB)(C, y)).toString();
            return (0,
            f.jsx)(a(), {
                scroll: b,
                replace: v,
                href: "".concat(j).concat(P ? "?".concat(P) : ""),
                children: (0,
                f.jsx)("a", g(g({}, w), {}, {
                    ref: t,
                    className: i,
                    onClick: m,
                    children: n
                }))
            })
        }
        ));
        h.displayName = "LinkWithQueryParams"
    },
    13932: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return r.a
            },
            n: function() {
                return r.n
            }
        });
        var r = n(79709)
    },
    16249: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return f
            }
        });
        var r = n(69135)
          , o = n(25675)
          , i = n.n(o)
          , a = n(67294)
          , s = n(87622)
          , c = n(93033)
          , u = n(5524)
          , l = n(85893)
          , d = {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=)"
        }
          , f = function(e) {
            var t = e.link
              , n = e.fallbackLink
              , o = e.isHtmlImg
              , f = e.isAmpImg
              , v = e.useMap
              , p = e.className
              , m = e.layout
              , g = e.alt
              , b = void 0 === g ? "" : g
              , h = e.width
              , y = e.height
              , w = e.testId
              , _ = e.onClick
              , O = e.onError
              , x = (0,
            r.useAmp)()
              , S = (0,
            c.b)().isNativePage
              , k = (0,
            s.J)().isWebpSupported
              , j = (0,
            a.useRef)(null)
              , C = (0,
            a.useState)(!1)
              , P = C[0]
              , E = C[1]
              , A = (0,
            a.useCallback)((function(e) {
                O && O(e),
                E(!0)
            }
            ), [O])
              , I = (0,
            a.useMemo)((function() {
                var e = (0,
                u.R)(t, !!k);
                return P && n || !e && n ? (0,
                u.R)(n, !!k) : e
            }
            ), [t, n, P, k]);
            return I ? f || x ? (0,
            l.jsx)("amp-img", {
                src: I,
                width: h,
                height: y,
                alt: b,
                class: p,
                id: w,
                layout: m || "intrinsic"
            }) : o || S ? (0,
            l.jsx)("img", {
                ref: j,
                loading: "lazy",
                src: I,
                alt: b,
                className: p,
                useMap: v,
                id: w,
                onClick: _,
                height: y,
                width: h,
                onError: A,
                style: d
            }) : (0,
            l.jsx)(i(), {
                src: I,
                width: h,
                height: y,
                alt: b,
                unoptimized: !0,
                className: p,
                useMap: v,
                layout: m,
                id: w,
                onClick: _,
                onError: A
            }) : null
        }
    },
    93909: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return r.o
            }
        });
        var r = n(16249)
    },
    81622: function(e, t, n) {
        "use strict";
        n.d(t, {
            qq: function() {
                return a
            }
        });
        var r = n(94423)
          , o = n(59108)
          , i = "ajs_anonymous_id"
          , a = function() {
            var e = function() {
                var e = (0,
                r.$o)(i);
                if (e)
                    return JSON.parse(e);
                var t = (0,
                o.v4)();
                return (0,
                r.qQ)(i, JSON.stringify(t)),
                t
            }();
            if (e) {
                var t = e.split("-").pop();
                if (t) {
                    var n = parseInt(t, 16);
                    if (!isNaN(n) && isFinite(n))
                        return n % 1e6
                }
            }
            return 0
        }()
    },
    85955: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(75473)
          , i = (0,
        r.createContext)({
            timeZoneOffset: 0,
            isUserAdult: !1,
            isNpAdsEnabled: !1,
            isCmpShown: !1,
            isAnalyticScriptsEnabled: !1,
            isSimpleCmpEnabled: !1,
            setTimeZoneOffset: o.Z,
            publicDomain: "",
            isAnnouncementsConfigLoaded: !1,
            isExternalAppConfigLoading: !1,
            isSegmentConfigLoading: !1,
            setIsUserAdult: o.Z,
            isSegmentInitialized: !1
        })
    },
    44814: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return i
            }
        });
        var r = n(67294)
          , o = n(85955)
          , i = function() {
            return (0,
            r.useContext)(o.S)
        }
    },
    68667: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return r.a
            }
        });
        var r = n(44814)
    },
    11815: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return s
            }
        });
        var r = n(67294)
          , o = n(42642)
          , i = n(81622)
          , a = n(68667)
          , s = function() {
            var e = (0,
            a.a)()
              , t = e.geoIpCountryCode
              , n = e.segmentConfig || {}
              , s = n.segment_geo_constraints
              , c = void 0 === s ? [] : s
              , u = n.revision
              , l = n.segment_default_percentage
              , d = (t || "").toUpperCase()
              , f = c.find((function(e) {
                return e.countries.includes(d)
            }
            ));
            return (0,
            r.useCallback)((function() {
                return {
                    sampleDomain: (0,
                    o.S)() ? window.location.host : "",
                    sampleGeo: t,
                    sampleRevisionNumber: u,
                    samplePercentage: (null === f || void 0 === f ? void 0 : f.percentage) || l,
                    sampleRemainder: i.qq
                }
            }
            ), [t, u, l, null === f || void 0 === f ? void 0 : f.percentage])
        }
    },
    88206: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var r = n(67294)
          , o = n(93033)
          , i = n(14930)
          , a = n(7335)
          , s = n(44814)
          , c = n(31128)
          , u = function(e) {
            var t = e.announcementBannerPage
              , n = e.announcementsConfig
              , u = e.bannersLimit
              , l = void 0 === u ? 1 : u
              , d = (0,
            o.b)().activeSport
              , f = void 0 === d ? i.ActiveSportEnum.football : d
              , v = (0,
            s.a)()
              , p = v.timeZoneOffset
              , m = v.isUserAdult
              , g = v.geoIpCountryCode
              , b = (n || {}).announcements;
            return (0,
            r.useMemo)((function() {
                if (null === b || void 0 === b || !b.length)
                    return [];
                var e = (0,
                c.Y)();
                return b.filter((function(n) {
                    var r, o, i, s, c, u, l, d = n.constraints, v = n.id;
                    if (!n.enabled)
                        return !1;
                    var b = null === d || void 0 === d || !d.age_restricted || m
                      , h = !(null !== d && void 0 !== d && null !== (r = d.allowed_countries) && void 0 !== r && r.length)
                      , y = null === d || void 0 === d || null === (o = d.allowed_countries) || void 0 === o ? void 0 : o.includes(g || "")
                      , w = null === d || void 0 === d || null === (i = d.blocked_countries) || void 0 === i ? void 0 : i.includes(g || "")
                      , _ = null === d || void 0 === d || null === (s = d.allowed_sports) || void 0 === s ? void 0 : s.includes(f)
                      , O = t && (null === d || void 0 === d || null === (c = d.placements) || void 0 === c ? void 0 : c.includes(t));
                    return !(!((0,
                    a.qq)(null === d || void 0 === d || null === (u = d.time) || void 0 === u ? void 0 : u.start_utc, null === d || void 0 === d || null === (l = d.time) || void 0 === l ? void 0 : l.end_utc, p) && b && !w && _ && (y || h) && O) || e.includes(v || ""))
                }
                )).slice(0, l)
            }
            ), [b, l, m, g, f, t, p])
        }
    },
    6397: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return i
            }
        });
        var r = n(67294)
          , o = (n(14930),
        n(42642))
          , i = function() {
            var e, t, n, i = (0,
            r.useState)((0,
            o.S)() && (null === (e = window) || void 0 === e || null === (t = e.ls) || void 0 === t || null === (n = t.userInfo) || void 0 === n ? void 0 : n.countryCode) || void 0), a = i[0], s = i[1];
            return (0,
            r.useEffect)((function() {
                if (!a) {
                    var e, t, n, r = function(e) {
                        !a && s(e.detail)
                    };
                    if ((0,
                    o.S)())
                        document.addEventListener("userCountryIpReceived", r),
                        !a && null !== (e = window) && void 0 !== e && null !== (t = e.ls) && void 0 !== t && null !== (n = t.userInfo) && void 0 !== n && n.countryCode && s(window.ls.userInfo.countryCode);
                    return function() {
                        (0,
                        o.S)() && document.removeEventListener("userCountryIpReceived", r)
                    }
                }
            }
            ), [a]),
            a
        }
    },
    45331: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return i
            }
        });
        n(14930);
        var r = n(94423)
          , o = n(44814)
          , i = function() {
            var e, t, n = (0,
            o.a)(), i = n.externalAppConfig, a = n.geoIpCountryCode, s = null === i || void 0 === i || null === (e = i.ageGating) || void 0 === e || null === (t = e.allowedCountries) || void 0 === t ? void 0 : t.includes(a || ""), c = (0,
            r.$o)("ls.isUserAdult");
            return s && !c
        }
    },
    99676: function(e, t, n) {
        "use strict";
        n.d(t, {
            d: function() {
                return l
            }
        });
        var r = n(67294)
          , o = n(93033)
          , i = n(75219)
          , a = n(41788)
          , s = n(44814)
          , c = n(25275)
          , u = function(e, t) {
            "AccountDetails" === t && e({
                action: "close",
                feature: "edit_password"
            }, {
                screenClass: "account",
                screenName: a.o3.accountDetails
            }),
            "ForgottenPassword" === t && e({
                action: "close",
                feature: "password_reset"
            }, {
                screenClass: "account",
                screenName: a.o3.forgotPassword
            }),
            "LoginForm" === t && e({
                action: "close",
                feature: "register"
            })
        }
          , l = function() {
            var e = (0,
            s.a)()
              , t = e.segmentConfig
              , n = e.geoIpCountryCode
              , a = (0,
            c.H)().isOneTrustAllowed
              , l = (0,
            i.K)(t, n, a).trackTapEvent
              , d = (0,
            o.b)()
              , f = d.modalIframeRef
              , v = d.setCurrentModal
              , p = d.currentModal
              , m = d.prevModalRef
              , g = d.modalViewStateRef
              , b = (0,
            r.useCallback)((function() {
                var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (r && u(l, p),
                "AddressFinder" !== (null === g || void 0 === g ? void 0 : g.current)) ? (g && (g.current = ""),
                v(void 0),
                m && (m.current = null)) : null === f || void 0 === f || null === (e = f.current) || void 0 === e || null === (t = e.contentWindow) || void 0 === t || null === (n = t.history) || void 0 === n || n.back()
            }
            ), [p, f, g, m, v, l])
              , h = (0,
            r.useCallback)((function(e) {
                v(e)
            }
            ), [v])
              , y = (0,
            r.useCallback)((function(e) {
                return function(t) {
                    t && t.preventDefault && t.preventDefault(),
                    t && t.stopPropagation && t.stopPropagation(),
                    v(e)
                }
            }
            ), [v]);
            return {
                modalIframeRef: f,
                openModal: h,
                openModalClick: y,
                currentModal: p,
                closeModal: b,
                prevModalRef: m,
                modalViewStateRef: g
            }
        }
    },
    25275: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return a
            }
        });
        var r = n(67294)
          , o = n(44814)
          , i = n(65967)
          , a = function() {
            var e, t = (0,
            o.a)(), n = t.geoIpCountryCode, a = void 0 === n ? "" : n, s = t.externalAppConfig, c = (0,
            i.N)();
            return {
                isOneTrustAllowed: (0,
                r.useMemo)((function() {
                    var e, t;
                    if (a)
                        return !!c && (null === s || void 0 === s || null === (e = s.consentManagement) || void 0 === e || null === (t = e.allowedCountries) || void 0 === t ? void 0 : t.includes(a))
                }
                ), [a, c, null === s || void 0 === s || null === (e = s.consentManagement) || void 0 === e ? void 0 : e.allowedCountries])
            }
        }
    },
    65967: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return c
            }
        });
        var r = n(11752)
          , o = n.n(r)
          , i = n(67294)
          , a = n(44814)
          , s = o()().publicRuntimeConfig
          , c = function() {
            var e = (0,
            a.a)().publicDomain;
            return (0,
            i.useMemo)((function() {
                var t = e || s.PUBLIC_DOMAIN;
                return {
                    localhost: "7ae2bd13-8d61-4748-b95a-5cbe00208622-test",
                    "www.dev-react.livescore.com": "7ae2bd13-8d61-4748-b95a-5cbe00208622",
                    "www.test-react.livescore.com": "47ceb929-3989-4313-a46a-af455e56e8bf",
                    "www.test2-react.livescore.com": "193caded-e7d6-44d2-b250-d2e9b0b88004",
                    "www.preprod-react.livescore.com": "83bebf55-2a3f-4155-aeab-1ce1055da3f2",
                    "www.livescore.com": "4053d637-9dda-4e14-9992-69ea73b1ba1b",
                    "www.livescore.com.tr": "2e5ac98e-4896-447d-96f8-dfb28b5b0db2"
                }[new URL(t).hostname]
            }
            ), [e])
        }
    },
    8217: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return s
            }
        });
        var r = n(11163)
          , o = n(67294)
          , i = n(14930)
          , a = function(e, t) {
            return !(!e || !t) && (null === e || void 0 === e ? void 0 : e.split("?")[0]) !== (null === t || void 0 === t ? void 0 : t.split("?")[0])
        }
          , s = function(e, t) {
            var n = (0,
            r.useRouter)()
              , s = (0,
            o.useState)(!1)
              , c = s[0]
              , u = s[1];
            return (0,
            o.useEffect)((function() {
                var r, o, s, c, l = function(t, r) {
                    !r.shallow && a(t, n.asPath) && (e && e(t, n.asPath),
                    c = setTimeout((function() {
                        u(!0)
                    }
                    ), 300))
                }, d = function(e, r) {
                    !r.shallow && a(e, n.asPath) && (t && t(),
                    u(!1),
                    clearTimeout(c))
                }, f = function(e, n) {
                    t && t(e, n),
                    u(!1),
                    clearTimeout(c)
                };
                return null === (r = n.events) || void 0 === r || r.on(i.RouteChangeEnum.routeChangeStart, l),
                null === (o = n.events) || void 0 === o || o.on(i.RouteChangeEnum.routeChangeComplete, d),
                null === (s = n.events) || void 0 === s || s.on(i.RouteChangeEnum.routeChangeError, f),
                function() {
                    n.events.off(i.RouteChangeEnum.routeChangeStart, l),
                    n.events.off(i.RouteChangeEnum.routeChangeComplete, d),
                    n.events.off(i.RouteChangeEnum.routeChangeError, f),
                    c && clearTimeout(c)
                }
            }
            ), [t, e, n.asPath, n.events]),
            c
        }
    },
    943: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return Qn
            }
        });
        var r = n(27812)
          , o = n(16835)
          , i = n(50029)
          , a = n(59499);
        function s() {
            return s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        var c = n(87794)
          , u = n.n(c)
          , l = n(69135)
          , d = n(7544)
          , f = n(11752)
          , v = n.n(f)
          , p = n(5152)
          , m = n.n(p)
          , g = n(67294)
          , b = n(9008)
          , h = n.n(b)
          , y = n(42642)
          , w = n(85893);
        function _(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var x = function(e) {
            var t = e.activeLocale;
            return e.isAmp ? null : (0,
            w.jsx)(h(), {
                children: (0,
                w.jsx)("script", {
                    id: "langDict",
                    dangerouslySetInnerHTML: {
                        __html: "window.langDict = ".concat(JSON.stringify((0,
                        a.Z)({}, t, {
                            common: n.g.langDict[t].common,
                            footer: n.g.langDict[t].footer,
                            errorNotifications: n.g.langDict[t].errorNotifications
                        })))
                    }
                })
            })
        }
          , S = n(87622)
          , k = n(18531)
          , j = n(3700);
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var E = function(e) {
            var t = e.activeSport
              , n = e.page
              , r = e.category
              , o = e.categoryId
              , i = e.stage
              , a = e.children
              , s = e.isNativePage
              , c = void 0 !== s && s
              , u = e.isSevPage
              , l = void 0 !== u && u
              , d = e.isDesktopView
              , f = e.rootLink
              , v = e.leftMenuLinks
              , p = e.isAmp
              , m = void 0 !== p && p
              , b = e.queryParams
              , h = e.generated
              , y = e.segmentTracking
              , _ = e.announcementBannerPage
              , O = e.isAdBlockDetected
              , x = (0,
            g.useState)({
                isDesktopView: d,
                isExploreMenuOpened: !1,
                currentModal: void 0,
                leftMenuLinks: v || null
            })
              , S = x[0]
              , k = x[1]
              , C = (0,
            g.useRef)(null)
              , E = (0,
            g.useRef)("")
              , A = (0,
            g.useRef)(null)
              , I = b && Object.keys(b).length > 0 ? "?".concat(new URLSearchParams(b).toString()) : ""
              , D = P(P({}, S), {}, {
                generated: h,
                isNativePage: c,
                isSevPage: l,
                queryParams: b,
                queryString: I,
                rootLink: f,
                page: n,
                isAmp: m,
                category: r,
                categoryId: o,
                stage: i,
                activeSport: t,
                segmentTracking: y,
                modalViewStateRef: E,
                modalIframeRef: C,
                prevModalRef: A,
                announcementBannerPage: _,
                isAdBlockDetected: O,
                setIsDesktopView: function(e) {
                    k(P(P({}, S), {}, {
                        isDesktopView: e
                    }))
                },
                setCurrentModal: function(e) {
                    k(P(P({}, S), {}, {
                        currentModal: e
                    }))
                },
                toggleExploreMenu: function(e) {
                    k(P(P({}, S), {}, {
                        isExploreMenuOpened: e
                    }))
                },
                setLeftMenuLinks: function(e) {
                    k(P(P({}, S), {}, {
                        leftMenuLinks: e
                    }))
                }
            });
            return (0,
            w.jsx)(j.Q.Provider, {
                value: D,
                children: a
            })
        }
          , A = n(14930)
          , I = (n(13930),
        n(18564))
          , D = n(39145)
          , L = n(51005)
          , N = n(25549)
          , T = n(28501)
          , M = n(94423)
          , R = n(62340)
          , U = n(75473)
          , B = function(e, t) {
            var n = (0,
            g.useRef)(U.Z);
            (0,
            g.useEffect)((function() {
                n.current = e
            }
            )),
            (0,
            g.useEffect)((function() {
                if (t && t >= 0) {
                    var e = setInterval((function() {
                        return n.current()
                    }
                    ), t);
                    return function() {
                        return clearInterval(e)
                    }
                }
            }
            ), [t])
        }
          , Z = n(73382)
          , F = n(67342)
          , G = function(e) {
            var t = e.geoIpCountryCode
              , n = e.registrationConfig
              , r = e.children
              , o = e.platformClientId
              , i = e.baseUrl
              , a = n || {}
              , s = a.enabled
              , c = void 0 !== s && s
              , u = a.allowedCountries
              , l = void 0 === u ? [] : u
              , d = a.refreshIntervalDenominator
              , f = (0,
            g.useState)((0,
            F.dO)().accessToken)
              , v = f[0]
              , p = f[1]
              , m = (0,
            g.useState)(!(0,
            F.pw)(v || ""))
              , b = m[0]
              , h = m[1]
              , y = c && l.includes(t)
              , _ = (0,
            g.useCallback)((function() {
                p(void 0),
                h(!1),
                (0,
                F.J5)()
            }
            ), [])
              , O = (0,
            g.useCallback)((function() {
                y && (0,
                F.jb)(o, i).then((function(e) {
                    var t = e.status
                      , n = e.accessToken;
                    "successTokenRefresh" === t && (h(!0),
                    p(n)),
                    "tokensExpired" !== t && "networkError" !== t || _()
                }
                ))
            }
            ), [y, o, i, _])
              , x = (0,
            g.useCallback)((function() {
                y && b && (0,
                F.Mw)(d, o, i).then((function(e) {
                    var t = e.status
                      , n = e.accessToken;
                    "tokenSkipUpdate" !== t && ("successTokenRefresh" === t && (h(!0),
                    p(n)),
                    "tokensExpired" !== t && "networkError" !== t || _())
                }
                ))
            }
            ), [y, b, d, o, i, _])
              , S = (0,
            g.useMemo)((function() {
                return y && v && b ? 1e3 * R.RevalidateInterval.FifteenSeconds : null
            }
            ), [v, y, b])
              , k = (0,
            g.useMemo)((function() {
                return y && v && b ? 1e3 * R.RevalidateInterval.FiveMinutes : null
            }
            ), [v, y, b]);
            (0,
            g.useEffect)(O, [v, O]),
            (0,
            g.useEffect)(x, []),
            B(O, S),
            B(x, k);
            var j = (0,
            g.useMemo)((function() {
                return y ? {
                    isLoggedIn: b,
                    setIsLoggedIn: U.Z,
                    isAuthEnabled: y,
                    setAccessToken: p,
                    removeTokensAndLogout: U.Z,
                    platformClientId: o
                } : {
                    isLoggedIn: !1,
                    setIsLoggedIn: h,
                    isAuthEnabled: !1,
                    setAccessToken: p,
                    platformClientId: o,
                    removeTokensAndLogout: _
                }
            }
            ), [y, b, o, _]);
            return (0,
            w.jsx)(Z.J.Provider, {
                value: j,
                children: r
            })
        }
          , H = n(68667)
          , z = n(25275)
          , V = n(55051)
          , W = n(57252)
          , q = v()().publicRuntimeConfig
          , $ = (0,
        W.i)(q.PUBLIC_PORTAL_PAGES_DOMAIN)
          , Y = function(e) {
            var t = e.geoIpCountryCode
              , n = e.isUserAdult
              , r = e.segmentConfig
              , o = e.isOneTrustAllowed;
            return (0,
            V.X)(n, t, r, o, $),
            null
        }
          , K = g.memo(Y)
          , J = function(e) {
            var t = e.children
              , n = e.geoIpCountryCode
              , r = void 0 === n ? "" : n
              , o = e.baseAuthUrl
              , i = (0,
            H.a)()
              , a = i.externalAppConfig
              , s = i.segmentConfig
              , c = i.isUserAdult
              , u = (0,
            T.L)().isDesktopWidth
              , l = (0,
            z.H)().isOneTrustAllowed
              , d = (0,
            g.useMemo)((function() {
                return "true" === (0,
                M.$o)("ls.automationTests") ? "lsm-test" : u ? "lsm-desktop" : "lsm-web"
            }
            ), [u]);
            return (0,
            w.jsxs)(G, {
                platformClientId: d,
                registrationConfig: null === a || void 0 === a ? void 0 : a.registration,
                geoIpCountryCode: r,
                baseUrl: o,
                children: [(0,
                w.jsx)(K, {
                    geoIpCountryCode: r,
                    isUserAdult: c,
                    segmentConfig: s,
                    isOneTrustAllowed: l
                }), t]
            })
        }
          , Q = n(94184)
          , X = n.n(Q)
          , ee = (n(15631),
        n(75175))
          , te = n(30003)
          , ne = n(75219)
          , re = n(13932)
          , oe = n(16249)
          , ie = n(44814)
          , ae = n(99676)
          , se = n(69358)
          , ce = n(94125)
          , ue = n.n(ce);
        function le(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function de(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? le(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var fe = "tap:".concat(se.s_.mask, ".toggleClass(class='isActive'),").concat(se.s_.body, ".toggleClass(class='isActive')")
          , ve = function(e) {
            var t, n, r, o, i, s = e.isAmp, c = (0,
            ie.a)(), u = c.externalAppConfig, l = c.segmentConfig, d = c.geoIpCountryCode, f = (0,
            ee.a)(), v = f.isLoggedIn, p = f.isAuthEnabled, m = (0,
            L.$G)(), b = m.t, h = m.activeLocale, y = (null === u || void 0 === u || null === (t = u.links) || void 0 === t ? void 0 : t.staticLinks) || {}, _ = y.androidDownloadLink, O = y.iosDownloadLink, x = "/".concat(h, "/mobile/"), S = (0,
            g.useState)(!1), k = S[0], j = S[1], C = (0,
            z.H)().isOneTrustAllowed, P = (0,
            ne.K)(l, d, C).trackTapEvent, E = (0,
            ae.d)().openModalClick, A = null === u || void 0 === u || null === (n = u.registration) || void 0 === n || null === (r = n.sideMenuAuth) || void 0 === r ? void 0 : r.allowedCountries.includes(d || ""), I = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return function() {
                    P({
                        action: "click",
                        feature: "settings",
                        value: e,
                        tab: n
                    }),
                    t && (0,
                    se.q1)()
                }
            }, D = (0,
            g.useCallback)((function() {
                P({
                    action: "close",
                    feature: "settings"
                }),
                (0,
                se.q1)()
            }
            ), [P]), N = (0,
            g.useCallback)((function() {
                (0,
                se.q1)(!1)
            }
            ), []), T = s ? {
                on: fe,
                role: "button",
                tabindex: 1
            } : {
                onClick: D
            };
            return (0,
            g.useEffect)((function() {
                j(!(!p || s))
            }
            ), [s, p, v]),
            (0,
            w.jsxs)("div", {
                id: se.s_.root,
                children: [(0,
                w.jsx)("div", de(de({}, T), {}, {
                    id: se.s_.mask,
                    className: X()(ue().mask)
                })), (0,
                w.jsxs)("div", {
                    id: se.s_.body,
                    className: X()(ue().menu, (0,
                    a.Z)({}, ue().amp, s)),
                    children: [(0,
                    w.jsxs)("div", {
                        className: ue().sections,
                        id: se.s_.sections,
                        children: [(0,
                        w.jsxs)("div", {
                            className: ue().logo,
                            children: [(0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f",
                                    ext: ["svg"]
                                },
                                width: 107,
                                height: 18,
                                alt: "livescore logo",
                                testId: "burger-menu_top-menu-outlined"
                            }), (0,
                            w.jsx)("span", de(de({}, T), {}, {
                                children: (0,
                                w.jsx)(oe.o, {
                                    link: {
                                        src: "images/close-23b5358e55b7af37c1a12881e8f6745d",
                                        ext: ["svg"]
                                    },
                                    width: 16,
                                    height: 16,
                                    alt: "close_button",
                                    testId: "burger-menu_close-button",
                                    className: ue().close
                                })
                            }))]
                        }), k && A && (0,
                        w.jsx)(te.l, {
                            className: v ? ue().link : ue().loginButtons,
                            onClick: N,
                            segmentConfig: l,
                            geoIpCountryCode: d,
                            isOneTrustAllowed: C,
                            openModalClick: E
                        }), (0,
                        w.jsx)(re.n, {
                            href: "/".concat(h, "/settings/"),
                            passHref: !0,
                            children: (0,
                            w.jsxs)("a", {
                                onClick: I("Settings"),
                                id: "burger-menu__settings",
                                className: ue().link,
                                children: [(0,
                                w.jsx)(oe.o, {
                                    link: {
                                        src: "svgs/common/settings-93fa6dc453e27bfdda72a51f32a038be",
                                        ext: ["svg"]
                                    },
                                    height: 20,
                                    width: 20
                                }), (0,
                                w.jsx)("span", {
                                    children: b("common.settings")
                                })]
                            })
                        }), (0,
                        w.jsxs)("a", {
                            id: "burger_menu_whatIsNew",
                            className: ue().link,
                            href: null === u || void 0 === u || null === (o = u.links) || void 0 === o || null === (i = o.burgerMenu) || void 0 === i ? void 0 : i.whatIsNew,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "svgs/common/what-is-new-bab859cf6a083e641eada77c89c4f8af",
                                    ext: ["svg"]
                                },
                                height: 20,
                                width: 20
                            }), (0,
                            w.jsx)("span", {
                                children: b("common.whatIsNew")
                            })]
                        }), (0,
                        w.jsxs)("a", {
                            onClick: I("Faq"),
                            id: "burger_menu_faq",
                            className: ue().link,
                            href: "https://help.livescore.com/hc/en-gb",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "svgs/common/faq-a0e9069b9f57219c5b82ec970032f813",
                                    ext: ["svg"]
                                },
                                height: 20,
                                width: 20
                            }), (0,
                            w.jsx)("span", {
                                children: b("common.faq")
                            })]
                        }), (0,
                        w.jsx)(re.n, {
                            href: "/".concat(h, "/contact/"),
                            passHref: !0,
                            children: (0,
                            w.jsxs)("a", {
                                onClick: I("Contact"),
                                id: "burger-menu__contact",
                                className: ue().link,
                                children: [(0,
                                w.jsx)(oe.o, {
                                    link: {
                                        src: "svgs/common/contact-us-4b6b9ad6f8722457fd138462f7ae72c4",
                                        ext: ["svg"]
                                    },
                                    height: 20,
                                    width: 20
                                }), (0,
                                w.jsx)("span", {
                                    children: b("common.contact")
                                })]
                            })
                        }), (0,
                        w.jsxs)("a", {
                            className: ue().link,
                            id: "burger-menu__advertise",
                            onClick: I("Advertise"),
                            href: "https://livescoregroup.com/advertise/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [(0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "svgs/common/advertise-455249c8113e16b00846232ce9abc1da",
                                    ext: ["svg"]
                                },
                                height: 20,
                                width: 20
                            }), (0,
                            w.jsx)("span", {
                                children: b("common.advertise")
                            })]
                        }), (0,
                        w.jsx)(re.n, {
                            href: "/".concat(h, "/mobile/"),
                            passHref: !0,
                            children: (0,
                            w.jsxs)("a", {
                                onClick: I("Mobile"),
                                id: "burger-menu__mobile",
                                className: ue().link,
                                children: [(0,
                                w.jsx)(oe.o, {
                                    link: {
                                        src: "svgs/common/mobile-4811d14c0f726fad586220569e58c0f2",
                                        ext: ["svg"]
                                    },
                                    height: 20,
                                    width: 20
                                }), (0,
                                w.jsx)("span", {
                                    children: b("common.mobile")
                                })]
                            })
                        }), (0,
                        w.jsx)(re.n, {
                            href: "/".concat(h, "/policy/"),
                            passHref: !0,
                            children: (0,
                            w.jsxs)("a", {
                                onClick: I("Policy"),
                                id: "burger-menu__policy",
                                className: ue().link,
                                children: [(0,
                                w.jsx)(oe.o, {
                                    link: {
                                        src: "svgs/common/lock-8d5863c3eac3cda85874713d8c5ddde0",
                                        ext: ["svg"]
                                    },
                                    height: 20,
                                    width: 20
                                }), (0,
                                w.jsx)("span", {
                                    children: b("common.policy")
                                })]
                            })
                        })]
                    }), (0,
                    w.jsxs)("div", {
                        className: ue().promo,
                        children: [(0,
                        w.jsxs)("div", {
                            className: ue().imgWrapper,
                            children: [(0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "images/ls-logo-short-aa656307866f11d89261c5369a085e44",
                                    ext: ["svg"]
                                },
                                width: 40,
                                height: 40,
                                alt: "LS logo",
                                testId: "burger-menu_top-menu-rounded-logo",
                                isHtmlImg: !0
                            }), (0,
                            w.jsx)("span", {
                                className: ue().logoText,
                                children: b("common.getUpdates")
                            })]
                        }), (0,
                        w.jsxs)("div", {
                            className: ue().imgWrapper,
                            children: [(0,
                            w.jsx)(re.n, {
                                passHref: !0,
                                href: O || x,
                                children: (0,
                                w.jsx)("a", {
                                    id: "ios_download_link",
                                    onClick: I("Apple app store", !1, "outbound"),
                                    children: (0,
                                    w.jsx)(oe.o, {
                                        className: ue().banner,
                                        link: {
                                            src: "images/app_store-f26d940693193e7817576a67dde9b6cc",
                                            ext: ["webp", "png"]
                                        },
                                        width: 105,
                                        height: 36,
                                        alt: "app-store",
                                        testId: "burger-menu_ios-badge"
                                    })
                                })
                            }), (0,
                            w.jsx)(re.n, {
                                passHref: !0,
                                href: _ || x,
                                children: (0,
                                w.jsx)("a", {
                                    id: "android_download_link",
                                    href: "",
                                    onClick: I("Google Play", !1, "outbound"),
                                    children: (0,
                                    w.jsx)(oe.o, {
                                        className: ue().banner,
                                        link: {
                                            src: "images/google_play-d5124d23c134d8a4693f7615d16462fa",
                                            ext: ["webp", "png"]
                                        },
                                        width: 119,
                                        height: 36,
                                        alt: "google-play",
                                        testId: "burger-menu_android-badge"
                                    })
                                })
                            })]
                        }), (0,
                        w.jsx)("div", {
                            className: ue().partnerWrapper,
                            children: (0,
                            w.jsx)(oe.o, {
                                link: {
                                    src: "svgs/common/cristianoRonaldo-b52670bcc6431c5e45c4ce4c5c4befb4",
                                    ext: ["svg"]
                                },
                                width: 125,
                                height: 72,
                                alt: "cristiano Ronaldo",
                                testId: "burger-menu_top-menu-christiano-la-liga",
                                layout: "fixed",
                                isHtmlImg: !0
                            })
                        })]
                    })]
                })]
            })
        }
          , pe = n(11163)
          , me = n(42964)
          , ge = n(65967)
          , be = n(16622)
          , he = n(6813)
          , ye = n(88573)
          , we = n.n(ye)
          , _e = function(e) {
            var t = e.closeBar
              , n = (0,
            L.$G)()
              , r = n.t
              , o = n.activeLocale
              , i = (0,
            be.t)()
              , a = (0,
            l.useAmp)();
            return i || a ? (0,
            w.jsxs)("div", {
                id: "simpleCookieBar",
                children: [(0,
                w.jsx)("div", {
                    className: we().overlay
                }), (0,
                w.jsx)("div", {
                    className: we().outer,
                    children: (0,
                    w.jsxs)("div", {
                        className: we().inner,
                        children: [(0,
                        w.jsx)("button", {
                            id: "simpleCookieBarCloseButton",
                            type: "button",
                            title: "Close",
                            className: we().close,
                            onClick: t,
                            on: "tap:onetrust-amp-consent.accept",
                            children: (0,
                            w.jsx)(he.E, {
                                width: 24,
                                height: 24,
                                link: {
                                    src: "svgs/common/close-8ee0371d88a3a48c51aaf5a537565626",
                                    ext: ["svg"]
                                }
                            })
                        }), (0,
                        w.jsxs)("div", {
                            children: [r("common.cookieBar.line1"), "\xa0", (0,
                            w.jsx)("a", {
                                rel: "nofollow",
                                href: "/".concat(o, "/cookies/"),
                                children: r("common.cookieBar.cookiesLink")
                            }), "\xa0", r("common.cookieBar.line2"), "\xa0", (0,
                            w.jsx)("a", {
                                rel: "nofollow",
                                href: "/".concat(o, "/policy/"),
                                children: r("common.cookieBar.policyLink")
                            }), "\xa0", r("common.cookieBar.line3"), "\xa0", (0,
                            w.jsx)("a", {
                                rel: "nofollow",
                                href: "/".concat(o, "/terms/"),
                                children: r("common.cookieBar.termsLink")
                            })]
                        })]
                    })
                })]
            }) : null
        }
          , Oe = n(27551)
          , xe = n.n(Oe)
          , Se = function(e) {
            var t = e.cmpAmpDomain
              , n = e.cmpId;
            return (0,
            w.jsxs)("amp-consent", {
                id: "onetrust-amp-consent",
                layout: "nodisplay",
                type: "onetrust",
                children: [(0,
                w.jsx)("script", {
                    type: "application/json",
                    dangerouslySetInnerHTML: {
                        __html: '\n{\n   "uiConfig":{\n      "overlay":true\n   },\n   "consentInstanceId": "onetrust-amp-consent",\n   "promptUI":"simpleConsent_Flow",\n   "consentRequired": true,\n   "geoOverride": {\n      "oneTrustCountries": {\n        "promptUI":"onetrustConsent_Flow"\n      }\n   }\n}\n'
                    }
                }), (0,
                w.jsx)("div", {
                    id: "onetrustConsent_Flow",
                    className: xe().popupOverlay,
                    children: (0,
                    w.jsx)("amp-iframe", {
                        id: "idFrame",
                        layout: "fill",
                        sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
                        src: "".concat(t, "/onetrust.html?cmpid=").concat(n),
                        children: (0,
                        w.jsx)("amp-img", {
                            src: "".concat(t, "?cmpid=").concat(n),
                            layout: "fill",
                            placeholder: !0
                        })
                    })
                }), (0,
                w.jsx)("div", {
                    id: "simpleConsent_Flow",
                    children: (0,
                    w.jsx)(_e, {})
                })]
            })
        }
          , ke = "hideOneTrust"
          , je = function(e) {
            var t = e.oneTrustId
              , n = (0,
            g.useState)(!1)
              , r = n[0]
              , o = n[1]
              , i = (0,
            g.useMemo)((function() {
                return !!r && !((0,
                M.$o)(ke) === ke)
            }
            ), [r]);
            return (0,
            g.useEffect)((function() {
                if ((0,
                y.S)()) {
                    var e = setTimeout((function() {
                        o(!0)
                    }
                    ), 3e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), []),
            i ? (0,
            w.jsxs)(h(), {
                children: [(0,
                w.jsx)("script", {
                    src: "https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js",
                    type: "text/javascript",
                    "data-domain-script": t
                }), (0,
                w.jsx)("script", {
                    src: "//js-sec.indexww.com/ht/p/188832-82910719724410.js"
                })]
            }) : null
        }
          , Ce = v()().publicRuntimeConfig
          , Pe = function() {
            var e = (0,
            l.useAmp)()
              , t = (0,
            ge.N)();
            return t ? e ? (0,
            w.jsx)(Se, {
                cmpAmpDomain: Ce.PUBLIC_AMP_CMP_DOMAIN,
                cmpId: t
            }) : (0,
            w.jsx)(je, {
                oneTrustId: t
            }) : (me.k.error("ERROR: No oneTrust ID found for OneTrust, cmpId: ".concat(t)),
            null)
        };
        function Ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    e[r] = n[r]
            }
            return e
        }
        var Ae = function e(t, n) {
            function r(e, r, o) {
                if ("undefined" !== typeof document) {
                    "number" === typeof (o = Ee({}, n, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                    o.expires && (o.expires = o.expires.toUTCString()),
                    e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    var i = "";
                    for (var a in o)
                        o[a] && (i += "; " + a,
                        !0 !== o[a] && (i += "=" + o[a].split(";")[0]));
                    return document.cookie = e + "=" + t.write(r, e) + i
                }
            }
            return Object.create({
                set: r,
                get: function(e) {
                    if ("undefined" !== typeof document && (!arguments.length || e)) {
                        for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, o = 0; o < n.length; o++) {
                            var i = n[o].split("=")
                              , a = i.slice(1).join("=");
                            try {
                                var s = decodeURIComponent(i[0]);
                                if (r[s] = t.read(a, s),
                                e === s)
                                    break
                            } catch (c) {}
                        }
                        return e ? r[e] : r
                    }
                },
                remove: function(e, t) {
                    r(e, "", Ee({}, t, {
                        expires: -1
                    }))
                },
                withAttributes: function(t) {
                    return e(this.converter, Ee({}, this.attributes, t))
                },
                withConverter: function(t) {
                    return e(Ee({}, this.converter, t), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(n)
                },
                converter: {
                    value: Object.freeze(t)
                }
            })
        }({
            read: function(e) {
                return '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }, {
            path: "/"
        })
          , Ie = Ae
          , De = function() {
            var e = (0,
            H.a)().isSimpleCmpEnabled
              , t = (0,
            g.useCallback)((function() {
                var e, t, n = new Date;
                n.setTime(n.getTime() + 1e3 * A.RevalidateInterval.OneYear),
                Ie.set("ls.simpleCookieBar", "true", {
                    expires: n
                }),
                e = "cmpDetailsEvent",
                t = {
                    isSimpleCmpEnabled: !0
                },
                document.dispatchEvent(new CustomEvent(e,{
                    detail: t
                }))
            }
            ), []);
            return e ? null : (0,
            w.jsx)(_e, {
                closeBar: t
            })
        }
          , Le = function() {
            var e = function() {
                var e = (0,
                pe.useRouter)().asPath
                  , t = (0,
                g.useMemo)((function() {
                    return ["/native/", "/mobile-policy/", "/mobile-cookies/"].some((function(t) {
                        return new RegExp(t).test(e.toLowerCase())
                    }
                    ))
                }
                ), [e])
                  , n = (0,
                z.H)().isOneTrustAllowed
                  , r = (0,
                y.S)()
                  , o = r && window.location !== window.parent.location
                  , i = (0,
                l.useAmp)();
                return t || o || (!r || void 0 === n) && !i ? null : n || i ? "oneTrust" : "simpleCookieBar"
            }();
            return "simpleCookieBar" === e ? (0,
            w.jsx)(De, {}) : "oneTrust" === e ? (0,
            w.jsx)(Pe, {}) : null
        }
          , Ne = n(4298)
          , Te = n.n(Ne)
          , Me = n(93033);
        function Re(e) {
            var t = "CONSENT_PREFERENCE_SENT"
              , n = {
                performance_toggle: "C0002",
                access_toggle: "C0003",
                ads_toggle: "C0004",
                personalise_toggle: "STACK42",
                store_info_toggle: "IABV2_1",
                geo_toggle: "ISFV2_1",
                id_toggle: "ISFV2_2"
            };
            function r(e) {
                return -1 < document.cookie.indexOf(e + "=")
            }
            function o(e) {
                for (var t = {}, r = Object.keys(n), o = 0; o < Object.keys(n).length; o++) {
                    var i = r[o];
                    t[i] = e[n[i]]
                }
                return t
            }
            function i() {
                var e = document.getElementById("onetrust-pc-sdk");
                window.IsOneTrustSettingsOpen && e && !(e.offsetWidth || e.offsetHeight || e.getClientRects().length) && window.location.reload()
            }
            function a() {
                var n, a = function() {
                    var e = OneTrust.GetDomainData()
                      , t = {};
                    if (e && e.ConsentIntegrationData && e.ConsentIntegrationData.consentPayload && e.ConsentIntegrationData.consentPayload.purposes && e.Groups)
                        for (var n = e.ConsentIntegrationData.consentPayload.purposes, r = 0; r < e.Groups.length; r++) {
                            var o = function(e, t) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n].TransactionType;
                                    if (e[n].Id === t)
                                        return "OPT_OUT" !== r
                                }
                                return !1
                            }(n, e.Groups[r].PurposeId);
                            t[e.Groups[r].OptanonGroupId] || (t[e.Groups[r].OptanonGroupId] = o),
                            e.Groups[r].Parent && (t[e.Groups[r].Parent] = t[e.Groups[r].Parent] || o)
                        }
                    return t
                }();
                (n = a) && (n = o(n),
                document.dispatchEvent(new CustomEvent(e,{
                    detail: {
                        isNpAdsEnabled: !n.personalise_toggle || !n.ads_toggle,
                        isAnalyticScriptsEnabled: !!n.performance_toggle
                    }
                }))),
                function(e) {
                    var n, a, s = r(t);
                    !0 !== window.IsOneTrustSettingsOpen && s || !e ? i() : (s = o(e),
                    window.analytics ? window.analytics.track("Consent Preference", s, {}, i) : window.dataLayer && window.dataLayer.push({
                        event: "segment_track",
                        kind: "Consent Preference",
                        params: s,
                        callback: i
                    }),
                    e = t,
                    s = 1,
                    n = 730,
                    (a = new Date).setTime(a.getTime() + 24 * n * 60 * 60 * 1e3),
                    n = "expires=" + a.toUTCString(),
                    document.cookie = e + "=" + s + "; " + n + "; path=/")
                }(a)
            }
            window.OptanonWrapper = function() {
                r(t) ? a() : !0 === OneTrust.IsAlertBoxClosedAndValid() && setTimeout(a, 1e3)
            }
        }
        var Ue = function() {
            return (0,
            w.jsx)("script", {
                dangerouslySetInnerHTML: {
                    __html: "(".concat(Re, ")('").concat("cmpDetailsEvent", "');")
                }
            })
        };
        function Be(e, t) {
            var n;
            window && !window.process && (window.process = function(e) {
                if (document.getElementsByTagName("BODY")[0].className += " user-iso-country-" + e.c.toLowerCase(),
                e)
                    try {
                        window.ls.userInfo.countryCode = e.c,
                        document.dispatchEvent(new CustomEvent(t,{
                            detail: e.c
                        }))
                    } catch (e) {
                        console.log("unable to dispatch " + t + ": ", e)
                    }
            }
            ,
            (n = document.createElement("SCRIPT")).src = e,
            document.getElementsByTagName("HEAD")[0].appendChild(n))
        }
        var Ze = v()().publicRuntimeConfig.PUBLIC_GEO_SERVICE_HOST
          , Fe = function() {
            return (0,
            w.jsx)("script", {
                dangerouslySetInnerHTML: {
                    __html: "(".concat(Be, ")('").concat(Ze, "', '").concat("userCountryIpReceived", "');")
                }
            })
        }
          , Ge = n(50628)
          , He = n(81622)
          , ze = m()((function() {
            return n.e(6695).then(n.bind(n, 56695)).then((function(e) {
                return e.SegmentScript
            }
            ))
        }
        ), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [56695]
                }
            }
        })
          , Ve = function() {
            var e = (0,
            H.a)()
              , t = e.geoIpCountryCode
              , n = e.segmentConfig
              , r = e.isAnalyticScriptsEnabled
              , o = (0,
            Ge.S)(t, n)
              , i = n || {}
              , a = i.segment_geo_constraints
              , s = void 0 === a ? [] : a
              , c = i.segment_default_percentage
              , u = void 0 === c ? 0 : c;
            if (!s || !t || !r || !o)
                return null;
            var l = s.find((function(e) {
                return e.countries.includes(t.toUpperCase())
            }
            ))
              , d = 1e6 * (l ? l.percentage : u);
            return He.qq <= d ? (0,
            w.jsx)(ze, {}) : null
        };
        function We(e, t, n) {
            function r(e) {
                location.replace(location.origin + location.pathname + (e.searchParams.toString().length ? "?" + e.searchParams.toString() : ""))
            }
            document.addEventListener(t, (function(t) {
                var o, i, a, s;
                e && e.allowedCountries && e.allowedCountries.includes(t.detail) && (t = localStorage.getItem(n),
                o = new URL(window.location.href),
                a = (i = /isAdult=(\w+)/.exec(o.search)) && i[1],
                s = window.location.href.includes("/news/"),
                "true" === t ? i && s && (o.search = o.search.replace(/[?&]isAdult=[^&]+/, "").replace(/^&/, "?"),
                r(o)) : ("false" !== t || i && "false" === a) && (null !== t || !s || i && a) || (function(e, t) {
                    t = t || "false",
                    e.searchParams.has("isAdult") ? e.searchParams.set("isAdult", t) : e.searchParams.append("isAdult", t)
                }(o),
                r(o)))
            }
            ))
        }
        function qe(e, t, n, r, o, i, a) {
            var s = t.getElementsByTagName(n)[0];
            e.__loadGTM = function() {
                e[r] = e[r] || [],
                e[r].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var i = t.createElement(n)
                  , a = "dataLayer" != r ? "&l=" + r : "";
                i.async = !0,
                i.src = "https://www.googletagmanager.com/gtm.js?id=" + o + a,
                s.parentNode.insertBefore(i, s)
            }
            ,
            e.__loadXtremePushLibrary = function(r) {
                try {
                    e.XtremePushObject = i,
                    e[i] = function() {
                        (e[i].q = e[i].q || []).push(arguments)
                    }
                    ;
                    var o = t.createElement(n);
                    o.src = "https://livescore.webpu.sh/" + a + "/sdk.js",
                    o.async = !0,
                    o.onerror = r,
                    o.onload = r,
                    s.parentNode.insertBefore(o, s)
                } catch (r) {
                    console.log("Could not run the XtremePushObject script: ", r)
                }
            }
            ,
            e.__loadGPT = function(r) {
                try {
                    var o = t.getElementsByTagName(n)[0]
                      , i = t.createElement(n);
                    i.src = "https://www.googletagservices.com/tag/js/gpt.js",
                    i.async = !0,
                    i.onload = function() {
                        e.ls.common.isGptScriptLoaded = !0,
                        document.dispatchEvent(new CustomEvent(r))
                    }
                    ,
                    i.key = "googletagservices",
                    o.parentNode.insertBefore(i, o)
                } catch (r) {
                    console.log("Could not run the Google tag services script: ", r)
                }
            }
        }
        function $e(e, t) {
            e.__loadGPT(t)
        }
        function Ye(e) {
            "serviceWorker"in navigator && window.addEventListener("load", (function() {
                navigator.serviceWorker.register(e).catch((function(e) {
                    console.log("Service Worker registration failed: ", e)
                }
                ))
            }
            ))
        }
        function Ke(e) {
            /C0003:0/.test(e.__jsCookie.get("OptanonConsent")) && e.__loadGTM()
        }
        function Je(e) {
            e.__loadXtremePushLibrary(e.__loadGTM)
        }
        function Qe(e) {
            /C0002:0/.test(e.__jsCookie.get("OptanonConsent")) && e.__loadXtremePushLibrary()
        }
        var Xe = v()().publicRuntimeConfig
          , et = function() {
            var e, t = (0,
            Me.b)(), n = t.isNativePage, r = t.isAmp, o = (0,
            ie.a)(), i = o.externalAppConfig, a = o.isCmpShown, s = JSON.stringify((null === i || void 0 === i ? void 0 : i.ageGating) || {}), c = Xe.PUBLIC_XTREME_PUSH_KEY;
            return (0,
            y.S)() && (window.__jsCookie = Ie),
            (0,
            w.jsxs)(w.Fragment, {
                children: [!n && (0,
                w.jsx)(Ve, {}), !n && (0,
                w.jsx)(Ue, {}), (0,
                w.jsxs)(h(), {
                    children: [(0,
                    w.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(Ye, ")('/service-worker.js');")
                        }
                    }), (0,
                    w.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(qe, ")(window, document, 'script', 'dataLayer', '").concat("GTM-MGW6C35", "', 'xtremepush', '").concat(c, "');")
                        }
                    }), (0,
                    w.jsx)("script", {
                        type: "text/plain",
                        className: "optanon-category-C0002",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(Ke, ")(window);")
                        }
                    }), (0,
                    w.jsx)("script", {
                        type: "text/plain",
                        className: "optanon-category-C0003",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(Qe, ")(window);")
                        }
                    }), (0,
                    w.jsx)("script", {
                        type: a ? "text/javascript" : "text/plain",
                        className: "optanon-category-C0002-C0003",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(Je, ")(window);")
                        }
                    }), (0,
                    w.jsx)("script", {
                        type: n || a ? "text/javascript" : "text/plain",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat($e, ')(window, "').concat("gptScriptLoaded", '");')
                        }
                    })]
                }), !n && !r && (0,
                w.jsx)("script", {
                    dangerouslySetInnerHTML: {
                        __html: "(".concat(We, ")(").concat(s, ", '").concat("userCountryIpReceived", "', '").concat("ls.isUserAdult", "');")
                    }
                }), (null === i || void 0 === i || null === (e = i.ads) || void 0 === e ? void 0 : e.blockerMeasurerScriptEnabled) && (0,
                w.jsx)(Te(), {
                    strategy: "afterInteractive",
                    src: "https://btloader.com/tag?o=4899409753014272&upapi=true"
                }), (0,
                w.jsx)(Fe, {})]
            })
        }
          , tt = n(93909)
          , nt = n(7335)
          , rt = n(39379)
          , ot = n(8100)
          , it = n(25298)
          , at = n(86952);
        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ut = 1e3 * A.RevalidateInterval.TenMinutes;
        function lt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lt(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ft = 1e3 * A.RevalidateInterval.TenMinutes;
        function vt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vt(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var mt = 1e3 * A.RevalidateInterval.OneDay
          , gt = (0,
        M.$o)("ls.segment.latestSegmentConfig")
          , bt = n(85955);
        function ht(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function yt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ht(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var wt = function(e) {
            var t, n = e.children, r = e.queryTimeZoneOffset, o = e.initialExternalAppConfig, i = e.publicDomain, a = e.geoIpCountryCode, s = e.shouldNotRedirectToAgeGatingPage, c = e.isNativePage, u = e.isAdultQueryParam, d = (0,
            l.useAmp)(), f = (0,
            g.useState)({
                timeZoneOffset: d || r || !(0,
                y.S)() ? r && parseFloat(r.replace(/,/g, ".")) || 0 : null !== (t = (0,
                rt.N)()) && void 0 !== t ? t : (0,
                nt.aF)()
            }), v = f[0], p = f[1], m = function(e, t) {
                var n = (0,
                ot.ZP)([e, "fetchExternalAppConfig"], at.Pf, dt(dt(dt({}, it.CT), it.Tn), {}, {
                    refreshInterval: ft,
                    fallbackData: t
                }));
                return {
                    data: n.data,
                    isLoading: n.isValidating
                }
            }(i, o), b = function(e) {
                var t, n, r = e.isAdultQueryParam, o = e.isNativePage, i = e.shouldNotRedirectToAgeGatingPage, a = e.externalAppConfig, s = e.geoIpCountryCode, c = (0,
                g.useState)(), u = c[0], l = c[1], d = null === a || void 0 === a || null === (t = a.ageGating) || void 0 === t || null === (n = t.allowedCountries) || void 0 === n ? void 0 : n.includes(s || "");
                return (0,
                g.useMemo)((function() {
                    var e = (0,
                    M.$o)("ls.isUserAdult");
                    return void 0 !== u ? {
                        isUserAdult: u,
                        setIsUserAdult: l
                    } : o ? {
                        isUserAdult: r,
                        setIsUserAdult: l
                    } : i && null === e ? {
                        isUserAdult: !1,
                        setIsUserAdult: l
                    } : {
                        isUserAdult: !d || "true" === e,
                        setIsUserAdult: l
                    }
                }
                ), [r, d, o, u, i])
            }({
                isAdultQueryParam: u,
                isNativePage: c,
                shouldNotRedirectToAgeGatingPage: s,
                externalAppConfig: m.data,
                geoIpCountryCode: a
            }), h = b.isUserAdult, _ = b.setIsUserAdult, O = function(e) {
                var t = (0,
                Me.b)()
                  , n = t.isSevPage
                  , r = t.announcementBannerPage
                  , o = (0,
                ot.ZP)((0,
                I.uU)("fetchAnnouncementsConfig", [e, !(!n && !r)]), at.B6, ct(ct(ct({}, it.CT), it.Tn), {}, {
                    refreshInterval: ut,
                    revalidateIfStale: !1
                }));
                return {
                    data: o.data,
                    isLoading: o.isValidating
                }
            }(i), x = function() {
                var e = !!gt && JSON.parse(gt)
                  , t = (0,
                ot.ZP)((0,
                I.uU)("fetchSegmentConfig", []), at.xB, pt(pt(pt({}, it.CT), it.Tn), {}, {
                    refreshInterval: e && e.revalidate_interval ? parseInt(e.revalidate_interval) : mt,
                    revalidateIfStale: !0
                }));
                return {
                    data: t.data,
                    isLoading: t.isValidating
                }
            }(), S = function() {
                var e = (0,
                g.useState)((function() {
                    var e = (0,
                    y.S)() && "true" === Ie.get("ls.simpleCookieBar");
                    return {
                        isAnalyticScriptsEnabled: e,
                        isNpAdsEnabled: !1,
                        isCmpShown: e,
                        isSimpleCmpEnabled: e
                    }
                }
                ))
                  , t = e[0]
                  , n = e[1];
                return (0,
                g.useEffect)((function() {
                    var e = function(e) {
                        var t = e.detail
                          , r = t.isNpAdsEnabled
                          , o = t.isSimpleCmpEnabled
                          , i = t.isAnalyticScriptsEnabled;
                        n({
                            isCmpShown: !0,
                            isNpAdsEnabled: !!r,
                            isSimpleCmpEnabled: !!o,
                            isAnalyticScriptsEnabled: !!i || !!o
                        })
                    };
                    return document.addEventListener("cmpDetailsEvent", e),
                    function() {
                        document.removeEventListener("cmpDetailsEvent", e)
                    }
                }
                ), []),
                t
            }(), k = function(e) {
                var t = (0,
                pe.useRouter)().query
                  , n = (0,
                Me.b)().isNativePage
                  , r = (0,
                D.M0)(t).isPersonalizedAds;
                return n ? r : !e
            }(S.isNpAdsEnabled), j = function() {
                var e, t = (0,
                g.useState)(!!(0,
                y.S)() && !(null === (e = window) || void 0 === e || !e.analytics)), n = t[0], r = t[1];
                return (0,
                g.useEffect)((function() {
                    var e;
                    if (!n) {
                        var t = function(e) {
                            var t;
                            r(null === e || void 0 === e || null === (t = e.detail) || void 0 === t ? void 0 : t.isInitialized)
                        };
                        return document.addEventListener("segmentAnalyticsScriptInitialized", t),
                        !n && null !== (e = window) && void 0 !== e && e.analytics && r(!0),
                        function() {
                            document.removeEventListener("segmentAnalyticsScriptInitialized", t)
                        }
                    }
                }
                ), [n]),
                {
                    isSegmentInitialized: n
                }
            }(), C = j.isSegmentInitialized, P = (0,
            g.useState)(), E = P[0], A = P[1];
            (0,
            g.useEffect)((function() {
                var e = "undefined" !== typeof navigator ? navigator.userAgent : void 0;
                A(e)
            }
            ), []);
            var L = yt(yt(yt({}, v), S), {}, {
                isNpAdsEnabled: !k,
                geoIpCountryCode: a,
                isUserAdult: h,
                externalAppConfig: m.data,
                isExternalAppConfigLoading: m.isLoading,
                segmentConfig: x.data,
                isSegmentConfigLoading: x.isLoading,
                announcementsConfig: null === O || void 0 === O ? void 0 : O.data,
                isAnnouncementsConfigLoaded: null === O || void 0 === O ? void 0 : O.isLoading,
                userAgent: E,
                publicDomain: i,
                setIsUserAdult: _,
                setTimeZoneOffset: function(e) {
                    p((function(t) {
                        return yt(yt({}, t), {}, {
                            timeZoneOffset: e
                        })
                    }
                    ))
                },
                isSegmentInitialized: C
            });
            return (0,
            w.jsx)(bt.S.Provider, {
                value: L,
                children: n
            })
        }
          , _t = 1e3 * A.RevalidateInterval.OneMinute
          , Ot = n(6397);
        function xt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var St = function(e) {
            return (0,
            g.useMemo)((function() {
                for (var t, n = /\[\.*(\w+)\]/g, r = e.pathname, o = []; null !== (t = n.exec(r)); )
                    t.index === n.lastIndex && n.lastIndex++,
                    o.push(t[1]);
                var i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? xt(Object(n), !0).forEach((function(t) {
                            (0,
                            a.Z)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, e.query);
                return o.forEach((function(e) {
                    return delete i[e]
                }
                )),
                i
            }
            ), [e.pathname, e.query])
        }
          , kt = n(78567)
          , jt = n(75698);
        function Ct(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Et = n(5524)
          , At = '{ \n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Livescore",\n  "legalName" : "Livescore.com",\n  "url": "https://www.livescore.com",\n  "logo": "'.concat((0,
        Et.y)({
            src: "images/icon-100-1088b523b98febdc12fa9f9ccd929b34",
            ext: ["webp", "png"]
        }), '",\n  "foundingDate": "1998",\n  "address": { \n    "@type": "PostalAddress", \n    "streetAddress": "1st Floor, 10 Piccadilly", \n    "addressLocality": "London", \n    "postalCode": "W1J 0DD", \n    "addressCountry": "UK" },\n  "sameAs": [\n    "https://www.facebook.com/livescore",\n    "https://www.instagram.com/livescore",\n    "https://www.twitter.com/livescore",\n    "https://www.linkedin.com/company/livescore"]\n}')
          , It = (0,
        w.jsxs)(w.Fragment, {
            children: [(0,
            w.jsx)("meta", {
                name: "theme-color",
                content: "#212121"
            }), (0,
            w.jsx)("link", {
                rel: "manifest",
                href: (0,
                Et.y)({
                    src: "manifest-30a2085bee4d8dfdc62dd7e9bf4a6acf",
                    ext: ["json"]
                })
            }), (0,
            w.jsx)("link", {
                rel: "icon",
                href: (0,
                Et.y)({
                    src: "images/favicon-eeef5f90971478b2edba81aad81dc424",
                    ext: ["ico"]
                })
            }), (0,
            w.jsx)("link", {
                rel: "apple-touch-icon",
                href: (0,
                Et.y)({
                    src: "images/apple-touch-icon-ad400f79db6023afb3ac1cd39a100546",
                    ext: ["webp", "png"]
                })
            }), (0,
            w.jsx)("link", {
                rel: "apple-touch-icon-precomposed",
                href: (0,
                Et.y)({
                    src: "images/apple-touch-icon-precomposed-dff85ae0d1dc3c08acc942344a27db19",
                    ext: ["webp", "png"]
                })
            }), (0,
            w.jsx)("link", {
                sizes: "120x120",
                rel: "apple-touch-icon",
                href: (0,
                Et.y)({
                    src: "images/apple-touch-icon-120x120-0c9677706b437eb2c68368de422d012f",
                    ext: ["webp", "png"]
                })
            }), (0,
            w.jsx)("link", {
                sizes: "120x120",
                rel: "apple-touch-icon-precomposed",
                href: (0,
                Et.y)({
                    src: "images/apple-touch-icon-120x120-precomposed-1c6d64d757f5523195050a1d27e6a4c3",
                    ext: ["webp", "png"]
                })
            }), (0,
            w.jsx)("link", {
                rel: "android-touch-icon",
                href: (0,
                Et.y)({
                    src: "images/icon-100-1088b523b98febdc12fa9f9ccd929b34",
                    ext: ["webp", "png"]
                })
            })]
        })
          , Dt = function(e) {
            var t = e.meta
              , n = e.isNativePage
              , r = e.publicDomain
              , o = e.locale
              , i = e.path
              , a = e.isAmp
              , s = (0,
            Me.b)().isDesktopView
              , c = (0,
            g.useMemo)((function() {
                return (0,
                jt.bj)("".concat(r, "/").concat(o).concat(i))
            }
            ), [o, i, r])
              , u = (0,
            g.useMemo)((function() {
                return (0,
                jt.bj)(null !== t && void 0 !== t && t.canonical ? null === t || void 0 === t ? void 0 : t.canonical : "".concat(c))
            }
            ), [c, null === t || void 0 === t ? void 0 : t.canonical])
              , l = (0,
            g.useMemo)((function() {
                return t ? n || t.noIndex && t.noFollow ? "noindex, nofollow" : t.noIndex ? "noindex" : t.noFollow ? "nofollow" : "" : ""
            }
            ), [t, n]);
            return t ? (0,
            w.jsxs)(h(), {
                children: [It, (null === t || void 0 === t ? void 0 : t.title) && (0,
                w.jsx)("title", {
                    children: null === t || void 0 === t ? void 0 : t.title
                }, "title"), !a && (s ? (0,
                w.jsx)("meta", {
                    name: "viewport",
                    content: "width=768, viewport-fit=cover"
                }, "viewport") : (0,
                w.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1.0, viewport-fit=cover"
                }, "viewport")), (null === t || void 0 === t ? void 0 : t.title) && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("meta", {
                        property: "og:title",
                        content: t.title
                    }), (0,
                    w.jsx)("meta", {
                        name: "twitter:title",
                        content: t.title
                    })]
                }), (null === t || void 0 === t ? void 0 : t.description) && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("meta", {
                        name: "description",
                        content: t.description
                    }, "description"), (0,
                    w.jsx)("meta", {
                        property: "og:description",
                        content: t.description
                    }), (0,
                    w.jsx)("meta", {
                        name: "twitter:description",
                        content: t.description
                    })]
                }), (n || (null === t || void 0 === t ? void 0 : t.noIndex) || (null === t || void 0 === t ? void 0 : t.noFollow)) && (0,
                w.jsx)("meta", {
                    name: "robots",
                    content: l
                }), (0,
                w.jsx)("meta", {
                    name: "format-detection",
                    content: "telephone=no"
                }), (0,
                w.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                w.jsx)("meta", {
                    property: "og:image",
                    content: (null === t || void 0 === t ? void 0 : t.largeOgImage) || r + (0,
                    Et.y)({
                        src: "images/ico-app2-a6c954799a7b148cb1227a452ea5d96d",
                        ext: ["webp", "png"]
                    })
                }), c && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("meta", {
                        property: "og:url",
                        content: c
                    }), !a && (0,
                    w.jsx)("link", {
                        rel: "canonical",
                        href: u
                    })]
                }), (0,
                w.jsx)("meta", {
                    name: "twitter:card",
                    content: null !== t && void 0 !== t && t.largeOgImage ? "summary_large_image" : "summary"
                }), (0,
                w.jsx)("meta", {
                    name: "twitter:site",
                    content: "@livescore"
                }), (0,
                w.jsx)("meta", {
                    name: "twitter:image",
                    content: (null === t || void 0 === t ? void 0 : t.largeOgImage) || r + (0,
                    Et.y)({
                        src: "images/ico-app2-a6c954799a7b148cb1227a452ea5d96d",
                        ext: ["webp", "png"]
                    })
                }), (0,
                w.jsx)("meta", {
                    name: "google-site-verification",
                    content: "dPd8zl3nAJkizJyu9E4yttUeMV9kYql3pTOLgCQN-OY"
                }), (0,
                w.jsx)("meta", {
                    name: "msvalidate.01",
                    content: "CD748CEAE850608AD71B3AACBB259E05"
                }), !a && t.organisationSchema && (0,
                w.jsx)("script", {
                    id: "MetaTags",
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: At
                    }
                }), a && (0,
                w.jsx)("meta", {
                    name: "amp-consent-blocking",
                    content: "amp-analytics,amp-ad"
                })]
            }) : (0,
            w.jsx)(w.Fragment, {
                children: It
            })
        }
          , Lt = function(e) {
            var t = e.data;
            return (0,
            w.jsx)(h(), {
                children: (0,
                w.jsx)("script", {
                    id: "SchemaData",
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(t)
                    }
                })
            })
        }
          , Nt = n(45722)
          , Tt = n(11815)
          , Mt = n(45331);
        function Rt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Bt = n(36420)
          , Zt = n(8217)
          , Ft = function() {
            var e = (0,
            M.$o)("ls.visits");
            if (!e)
                return (0,
                M.dZ)("ls.smartbanner-closed-home"),
                (0,
                M.dZ)("ls.smartbanner-closed-favourites"),
                void (0,
                M.qQ)("ls.visits", "0");
            (0,
            M.qQ)("ls.visits", "".concat(parseInt(e, 10) + 1))
        }
          , Gt = n(45990)
          , Ht = n(55143)
          , zt = n(89313)
          , Vt = n(10099)
          , Wt = n.n(Vt)
          , qt = n(11817)
          , $t = n(89357)
          , Yt = n(96816)
          , Kt = n(41788)
          , Jt = function(e) {
            var t = e.item
              , n = e.appDownloadLink
              , r = void 0 === n ? "#" : n
              , o = (0,
            L.$G)().t;
            return (0,
            w.jsx)(g.Fragment, {
                children: (0,
                w.jsx)("a", {
                    href: r,
                    children: (0,
                    w.jsxs)("span", {
                        className: Wt().itemLink,
                        children: [t.icon && (0,
                        w.jsx)(he.E, {
                            link: t.icon,
                            height: 20,
                            width: 20
                        }), (0,
                        w.jsx)("span", {
                            children: o("common.items.bet")
                        })]
                    })
                })
            }, t.id)
        }
          , Qt = function(e) {
            var t = e.item
              , n = e.appDownloadLink
              , r = e.as
              , o = (0,
            L.$G)().t
              , i = t.id.includes("livescoreBet")
              , s = (0,
            H.a)()
              , c = s.segmentConfig
              , u = s.geoIpCountryCode
              , l = (0,
            z.H)().isOneTrustAllowed
              , d = (0,
            ne.K)(c, u, l).trackTapEvent
              , f = (0,
            qt.x)()
              , v = (0,
            Me.b)().isAmp
              , p = void 0 !== v && v
              , m = (0,
            Yt.F)(u, c, l)
              , b = (0,
            g.useCallback)((function(e) {
                var n = {
                    action: "click",
                    feature: "nav",
                    value: i ? Kt.nU.livescoreBet : Kt.nU[t.id],
                    tab: i ? "convergence" : null
                };
                if (i) {
                    e.preventDefault();
                    var r = m();
                    n.messageId = r,
                    f({
                        redirectLink: t.href || "",
                        medium: "nav_icon",
                        messageId: r
                    })
                }
                d(n)
            }
            ), [m, i, t.href, t.id, f, d])
              , h = i ? "#" : t.href;
            return t.isDesktopOnly ? null : p && "common.items.download" === t.name ? (0,
            w.jsx)(Jt, {
                item: t,
                appDownloadLink: n
            }, t.id) : (0,
            w.jsxs)($t.F, {
                onClick: b,
                href: h,
                as: t.as || r || "a",
                id: "".concat(t.name, "__bottom-menu-link"),
                className: X()(Wt().itemLink, t.id, (0,
                a.Z)({}, Wt().isActive, !!t.isActive)),
                children: [t.iconActive && t.icon && (0,
                w.jsx)(he.E, {
                    height: 20,
                    width: 20,
                    link: t.isActive ? t.iconActive : t.icon
                }), (0,
                w.jsx)("span", {
                    children: o(t.name)
                })]
            })
        }
          , Xt = function(e) {
            var t = e.items
              , n = e.as
              , r = void 0 === n ? "a" : n
              , o = e.appDownloadLink;
            return (0,
            w.jsx)("div", {
                className: X()(Wt().bottomMenuWrapper),
                id: "bottom-menu",
                children: null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                    return (0,
                    w.jsx)(Qt, {
                        as: r,
                        item: e,
                        appDownloadLink: o
                    }, "".concat(e.id).concat(t))
                }
                ))
            })
        }
          , en = n(91946)
          , tn = n.n(en)
          , nn = function(e) {
            var t = e.children;
            return (0,
            w.jsx)("div", {
                id: "content-sticky-footer",
                className: tn().contentStickyFooter,
                children: t
            })
        }
          , rn = n(11594)
          , on = n(59229)
          , an = n.n(on)
          , sn = n(94239)
          , cn = n(56693)
          , un = n.n(cn);
        function ln(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function dn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ln(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var fn = function(e) {
            var t = e.links
              , n = e.type
              , r = e.as
              , o = void 0 === r ? "a" : r
              , i = (0,
            L.$G)()
              , s = i.t
              , c = i.activeLocale
              , u = X()(un().linkItem, (0,
            a.Z)({}, un().legal, "legal" === n))
              , l = (0,
            g.useMemo)((function() {
                return t.map((function(e) {
                    return e.external ? dn(dn({}, e), {}, {
                        linkProps: {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }) : e
                }
                ))
            }
            ), [t]);
            return (0,
            w.jsx)(w.Fragment, {
                children: l.map((function(e, r) {
                    var i = e.href
                      , a = e.label
                      , l = e.external
                      , d = e.linkProps;
                    return (0,
                    w.jsxs)(g.Fragment, {
                        children: [i ? (0,
                        w.jsx)("span", {
                            className: u,
                            id: "footer-link-".concat(a),
                            children: (0,
                            w.jsx)(sn.r, dn(dn({
                                href: l ? i : "/".concat(c).concat(i),
                                as: l ? "a" : o,
                                isFullHref: l
                            }, d), {}, {
                                children: (0,
                                w.jsx)("span", {
                                    className: un().footerLink,
                                    id: "footer-link-label",
                                    children: s(a)
                                })
                            }))
                        }) : (0,
                        w.jsx)("span", {
                            className: u,
                            id: "footer-link-label-".concat(a),
                            children: s(a)
                        }), "inline" === n && (r === t.length - 2 ? " and " : r < t.length - 1 && ", ")]
                    }, a)
                }
                ))
            })
        }
          , vn = function(e) {
            var t = e.footerData
              , n = e.toggleIsDesktopView
              , r = e.as
              , o = void 0 === r ? "a" : r
              , i = e.hideMetaData
              , a = (0,
            L.$G)().t
              , s = (0,
            Me.b)()
              , c = s.isDesktopView
              , u = s.setIsDesktopView
              , l = [{
                label: "footer.careers",
                href: "https://www.livescoregroup.com/careers",
                external: !0
            }, {
                label: "footer.mobile",
                href: "/mobile"
            }, {
                label: "footer.advertise",
                href: "https://livescoregroup.com/advertise/",
                external: !0
            }, {
                label: "footer.faq",
                href: "https://help.livescore.com/hc/en-gb",
                external: !0
            }, {
                label: "footer.contact",
                href: "/contact"
            }, {
                label: "footer.newsPublishers",
                href: "/news/publishers/"
            }, {
                label: "footer.privacyNotice",
                href: "/policy/"
            }, {
                label: "footer.cookiePolicy",
                href: "/cookies/"
            }, {
                label: "footer.termsOfUse",
                href: "/terms/"
            }, {
                label: "footer.corporate",
                href: "https://www.livescoregroup.com/",
                external: !0
            }]
              , d = (0,
            g.useCallback)((function() {
                u(!c),
                n()
            }
            ), [c, u, n]);
            return (0,
            w.jsxs)("div", {
                className: an().wrapper,
                id: "footer-wrapper",
                children: [!i && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("h1", {
                        className: an().h1,
                        id: "footer-h1",
                        children: null === t || void 0 === t ? void 0 : t.h1
                    }), (0,
                    w.jsx)("h2", {
                        className: an().h2,
                        id: "footer-h2",
                        children: null === t || void 0 === t ? void 0 : t.h2
                    }), (0,
                    w.jsx)("div", {
                        className: an().meta,
                        id: "footer-meta",
                        dangerouslySetInnerHTML: {
                            __html: (null === t || void 0 === t ? void 0 : t.footer) || ""
                        }
                    }), (0,
                    w.jsx)("div", {
                        className: an().meta,
                        id: "footer-meta1",
                        dangerouslySetInnerHTML: {
                            __html: (null === t || void 0 === t ? void 0 : t.footer1) || ""
                        }
                    }), (0,
                    w.jsx)("div", {
                        className: an().meta,
                        id: "footer-meta2",
                        dangerouslySetInnerHTML: {
                            __html: (null === t || void 0 === t ? void 0 : t.footer2) || ""
                        }
                    })]
                }), (0,
                w.jsxs)("div", {
                    className: an().copyright,
                    id: "footer-copyright",
                    children: ["\xa9 1998-", (0,
                    nt.H8)(), " LiveScore"]
                }), (0,
                w.jsx)("div", {
                    id: "footer-links",
                    children: (0,
                    w.jsx)(fn, {
                        links: l,
                        as: o,
                        type: "legal"
                    })
                }), (0,
                w.jsx)("div", {
                    className: an().desktopView,
                    id: "desktop-view-button-wrapper",
                    children: (0,
                    w.jsx)("span", {
                        className: an().desktopViewButton,
                        onClick: d,
                        id: "desktop-view-button",
                        children: a(c ? "footer.mobileView" : "footer.desktopView")
                    })
                })]
            })
        }
          , pn = n(96037)
          , mn = n.n(pn)
          , gn = function(e) {
            var t = e.message;
            return (0,
            w.jsxs)("div", {
                id: "bottom-notification",
                className: mn().notification,
                children: [(0,
                w.jsx)(he.E, {
                    link: {
                        src: "images/warning-59be4739f8e5b5ddd735a48c7889cc56",
                        ext: ["svg"]
                    },
                    alt: "",
                    width: 20,
                    height: 20
                }), t]
            })
        }
          , bn = n(37032)
          , hn = n.n(bn)
          , yn = function(e) {
            var t = e.as
              , n = e.isAmp
              , r = (0,
            L.$G)().activeLocale;
            return (0,
            w.jsx)($t.F, {
                "data-testid": n ? void 0 : "logo_top-menu-logo-link",
                href: "/".concat(r, "/"),
                as: t,
                children: (0,
                w.jsx)("span", {
                    className: hn().logo,
                    children: n ? (0,
                    w.jsx)(he.E, {
                        link: {
                            src: "images/live-score-outlined-513636440dc835985ff43080b14cbf07",
                            ext: ["webp", "png"]
                        },
                        width: 103,
                        height: 18,
                        alt: "livescore",
                        testId: n ? void 0 : "logo_top-menu-logo-link",
                        isAmpImg: n,
                        isHtmlImg: !0
                    }) : (0,
                    w.jsx)(w.Fragment, {
                        children: (0,
                        w.jsx)(he.E, {
                            link: {
                                src: "svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f",
                                ext: ["svg"]
                            },
                            width: 104,
                            height: 19,
                            alt: "livescore logo",
                            isHtmlImg: !0
                        })
                    })
                })
            })
        }
          , wn = n(2076)
          , _n = n.n(wn)
          , On = function(e) {
            var t, n = e.item, r = e.as, o = (0,
            L.$G)().t, i = n.id.includes("livescoreBet"), s = (0,
            H.a)(), c = s.segmentConfig, u = s.geoIpCountryCode, l = (0,
            z.H)().isOneTrustAllowed, d = (0,
            ne.K)(c, u, l).trackTapEvent, f = (0,
            qt.x)(), v = (0,
            Me.b)().isAmp, p = void 0 !== v && v, m = (0,
            Yt.F)(u, c, l), b = (0,
            g.useCallback)((function(e) {
                var t = {
                    action: "click",
                    feature: "nav",
                    value: i ? Kt.nU.livescoreBet : Kt.nU[n.id],
                    tab: i ? "convergence" : null
                };
                if (i) {
                    e.preventDefault();
                    var r = m();
                    t.messageId = r,
                    f({
                        redirectLink: n.href || "",
                        medium: "nav_icon",
                        messageId: r
                    })
                }
                d(t)
            }
            ), [m, i, n.href, n.id, f, d]), h = i ? "#" : n.href;
            return n.isMobileOnly ? null : (0,
            w.jsxs)($t.F, {
                onClick: b,
                href: h,
                as: n.as || r || "a",
                id: p ? void 0 : "".concat(o(n.name), "__top-menu-link").concat(n.isActive ? "-active" : ""),
                className: X()(_n().itemLink, _n().desktopItems, n.id, (t = {},
                (0,
                a.Z)(t, _n().isActive, !!n.isActive),
                (0,
                a.Z)(t, _n().downloadLink, "common.items.download" === n.name),
                t)),
                children: [n.iconActive && n.icon && (0,
                w.jsx)(he.E, {
                    height: 20,
                    width: 20,
                    link: n.isActive ? n.iconActive : n.icon
                }), (0,
                w.jsx)("span", {
                    children: o(n.name)
                })]
            })
        };
        function xn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Sn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var kn = function(e) {
            var t = e.items
              , n = e.as
              , r = e.isSearchButtonVisible
              , o = void 0 === r || r
              , i = (0,
            T.L)().isDesktopWidth
              , a = (0,
            Me.b)()
              , s = a.toggleExploreMenu
              , c = a.isAmp
              , u = void 0 !== c && c
              , l = (0,
            g.useCallback)((function(e) {
                return e.preventDefault(),
                e.stopPropagation(),
                (0,
                se.q1)()
            }
            ), [])
              , d = (0,
            g.useCallback)((function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                s(!0)
            }
            ), [s])
              , f = Sn({}, u ? {
                on: "tap:burger-menu-mask.toggleClass(class='isActive'),burger-menu-body.toggleClass(class='isActive')",
                role: "button",
                tabindex: 0
            } : {
                onClick: l
            })
              , v = (0,
            be.t)();
            return (0,
            w.jsxs)("header", {
                className: _n().wrapper,
                id: "top-menu",
                children: [(0,
                w.jsxs)("div", {
                    className: _n().brand,
                    children: [(0,
                    w.jsx)("span", Sn(Sn({
                        id: "burger-menu-open",
                        className: X()(_n().itemLink, _n().burgerMenu)
                    }, f), {}, {
                        children: (0,
                        w.jsx)(he.E, {
                            width: 14,
                            height: 14,
                            link: {
                                src: "svgs/common/hamburger-menu-09595bd28744ad1fa99a010f1f41f34b",
                                ext: ["svg"]
                            }
                        })
                    })), (0,
                    w.jsx)(yn, {
                        as: n,
                        isAmp: u
                    })]
                }), !i && o && v && (0,
                w.jsx)("span", {
                    onClick: d,
                    id: "top-menu-search",
                    className: X()(_n().itemLink, _n().search),
                    children: (0,
                    w.jsx)(he.E, {
                        width: 20,
                        height: 20,
                        link: {
                            src: "svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd",
                            ext: ["svg"]
                        }
                    })
                }), t && i && v && (null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                    return (0,
                    w.jsx)(On, {
                        as: n,
                        item: e
                    }, "".concat(e.id).concat(t))
                }
                )))]
            })
        };
        function jn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Cn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Pn = {
            football: {
                src: "svgs/common/football-scores-32bb49253edda337face5fbbd553eeb4",
                ext: ["svg"]
            },
            hockey: {
                src: "svgs/common/hockey-scores-5f99face4232dd04d662007f04582170",
                ext: ["svg"]
            },
            basketball: {
                src: "svgs/common/basketball-scores-4b7aa2ca149d58a2ccf082646a97f618",
                ext: ["svg"]
            },
            cricket: {
                src: "svgs/common/cricket-scores-c1b62a8d15d85f3272850e9e4bf387ff",
                ext: ["svg"]
            },
            tennis: {
                src: "svgs/common/tennis-scores-080213b57cdfbb261e2ddfc66b189d5d",
                ext: ["svg"]
            }
        }
          , En = {
            football: {
                src: "svgs/common/football-scores-active-bbdbd06988e3eeb0bc7440f02e090112",
                ext: ["svg"]
            },
            hockey: {
                src: "svgs/common/hockey-scores-active-30a6cf272fb886a8d7d5eda34cee27b7",
                ext: ["svg"]
            },
            basketball: {
                src: "svgs/common/basketball-scores-active-bd034ce043a148f1d8be73e583029391",
                ext: ["svg"]
            },
            cricket: {
                src: "svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20",
                ext: ["svg"]
            },
            tennis: {
                src: "svgs/common/tennis-scores-active-7abac2c81e369e946a8c5f5cbee41a64",
                ext: ["svg"]
            }
        }
          , An = function(e) {
            var t, n = e.activeSport, i = e.locale, a = e.activeHeaderId, s = e.betLink, c = e.freeToPlay, u = s ? (t = s,
            Object.entries(t).reduce((function(e, t) {
                var n = (0,
                o.Z)(t, 2)
                  , r = n[0]
                  , i = n[1]
                  , a = {
                    as: "a",
                    name: "common.items.bet",
                    id: "livescoreBet".concat(r),
                    icon: {
                        src: "svgs/common/ls-bet-b791da79444f0af09c9979d9bc61ef9c",
                        ext: ["svg"]
                    },
                    iconActive: {
                        src: "svgs/common/ls-bet-b791da79444f0af09c9979d9bc61ef9c",
                        ext: ["svg"]
                    },
                    countryCode: r,
                    isNew: i.isNew,
                    isExternal: !0,
                    isDisabled: !1 === i.enabled
                };
                return i.desktopLink && e.push(Cn(Cn({}, a), {}, {
                    isDesktopOnly: !0,
                    href: i.desktopLink
                })),
                i.mobileLink && e.push(Cn(Cn({}, a), {}, {
                    isMobileOnly: !0,
                    href: i.mobileLink
                })),
                e
            }
            ), [])) : [], l = {
                id: "free-to-play-games",
                name: (null === c || void 0 === c ? void 0 : c.title) || "",
                href: "/".concat(i, "/football-games/").concat(null === c || void 0 === c ? void 0 : c.slug, "/"),
                icon: {
                    UefaChampionsLeague: {
                        src: "svgs/common/UefaChampionsLeague-545201d5525d6083fa4f6a76364a35c0",
                        ext: ["svg"]
                    },
                    ad_icon: {
                        src: "svgs/common/ad-icon-137beeff273339320df79cc37b3183d0",
                        ext: ["svg"]
                    },
                    advertise: {
                        src: "svgs/common/advertise-455249c8113e16b00846232ce9abc1da",
                        ext: ["svg"]
                    },
                    agg: {
                        src: "svgs/common/agg-2843999ec176ba6d5db214ec89451685",
                        ext: ["svg"]
                    },
                    angle_down_black: {
                        src: "svgs/common/angle-down-black-e184e1d1f2f97e888477460ed447c4c1",
                        ext: ["svg"]
                    },
                    angle_left_white: {
                        src: "svgs/common/angle-left-white-1102fc3b6f9ebb3f9e89337037aa75fa",
                        ext: ["svg"]
                    },
                    angle_left: {
                        src: "svgs/common/angle-left-7b4609c41b32b4d1b24d4d45236ade99",
                        ext: ["svg"]
                    },
                    angle_right_white: {
                        src: "svgs/common/angle-right-white-a5319fd4c398df4ba9554245e45beb6b",
                        ext: ["svg"]
                    },
                    angle_right: {
                        src: "svgs/common/angle-right-e3b65eb78057ae0942ccd959afb4b57c",
                        ext: ["svg"]
                    },
                    badge_default: {
                        src: "svgs/common/badge-default-201a546527a7779845697b44be2a618a",
                        ext: ["svg"]
                    },
                    basketball_scores_active: {
                        src: "svgs/common/basketball-scores-active-bd034ce043a148f1d8be73e583029391",
                        ext: ["svg"]
                    },
                    basketball_scores: {
                        src: "svgs/common/basketball-scores-4b7aa2ca149d58a2ccf082646a97f618",
                        ext: ["svg"]
                    },
                    bet_stream: {
                        src: "svgs/common/bet-stream-1b0ab4207286335d3dc82baa8470ad3d",
                        ext: ["svg"]
                    },
                    bet365_logo_vector: {
                        src: "svgs/common/bet365-logo-vector-c2373d6d6a3361ab4282d4ca86ff5045",
                        ext: ["svg"]
                    },
                    calendar: {
                        src: "svgs/common/calendar-62a86ad26c51fe49ea1c6abb202a15b4",
                        ext: ["svg"]
                    },
                    close_ad_icon: {
                        src: "svgs/common/close-ad-icon-3eee8e3f40018205756172b544a231c7",
                        ext: ["svg"]
                    },
                    close_thin: {
                        src: "svgs/common/close-thin-c893a6857e7b74225b562a8b65eb31ed",
                        ext: ["svg"]
                    },
                    close_white: {
                        src: "svgs/common/close-white-c02aa576b4d05e71d1ecc8da128fbf18",
                        ext: ["svg"]
                    },
                    close: {
                        src: "svgs/common/close-8ee0371d88a3a48c51aaf5a537565626",
                        ext: ["svg"]
                    },
                    confirmed: {
                        src: "svgs/common/confirmed-7161a3eede4e7a524f8b368995594508",
                        ext: ["svg"]
                    },
                    contact_us: {
                        src: "svgs/common/contact-us-4b6b9ad6f8722457fd138462f7ae72c4",
                        ext: ["svg"]
                    },
                    copy_link: {
                        src: "svgs/common/copy-link-6fd1f7ee423741c1315666b94a1e38ec",
                        ext: ["svg"]
                    },
                    cricket_scores_active: {
                        src: "svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20",
                        ext: ["svg"]
                    },
                    cricket_scores: {
                        src: "svgs/common/cricket-scores-c1b62a8d15d85f3272850e9e4bf387ff",
                        ext: ["svg"]
                    },
                    cristianoRonaldo: {
                        src: "svgs/common/cristianoRonaldo-b52670bcc6431c5e45c4ce4c5c4befb4",
                        ext: ["svg"]
                    },
                    double_angle_down_primary: {
                        src: "svgs/common/double-angle-down-primary-c2538ba88a22e24ef28559046149892e",
                        ext: ["svg"]
                    },
                    double_angle_down: {
                        src: "svgs/common/double-angle-down-b7425bbc69df4fd83853049f64015b66",
                        ext: ["svg"]
                    },
                    double_angle_left: {
                        src: "svgs/common/double-angle-left-8ae0ece8b225ab7053bfa41eef4c3329",
                        ext: ["svg"]
                    },
                    double_angle_right: {
                        src: "svgs/common/double-angle-right-8b730cf50fc5b5386e2cd996dd01a270",
                        ext: ["svg"]
                    },
                    double_angle_up_primary: {
                        src: "svgs/common/double-angle-up-primary-e73c3adf7de15c3fd93b0671f37034bb",
                        ext: ["svg"]
                    },
                    download: {
                        src: "svgs/common/download-a627554318349f77bb4b3634e94b0205",
                        ext: ["svg"]
                    },
                    ellipsis: {
                        src: "svgs/common/ellipsis-acb5109bad89edc48160f9ed3a4d5981",
                        ext: ["svg"]
                    },
                    eye_closed: {
                        src: "svgs/common/eye-closed-c2482aaf3e6f8788fa0c03c5eeebb8e3",
                        ext: ["svg"]
                    },
                    eye: {
                        src: "svgs/common/eye-e941b4589775e63d9a84dd120607317e",
                        ext: ["svg"]
                    },
                    facebook_logo: {
                        src: "svgs/common/facebook-logo-bbaeebb6393763747ba298b736a96081",
                        ext: ["svg"]
                    },
                    faq: {
                        src: "svgs/common/faq-a0e9069b9f57219c5b82ec970032f813",
                        ext: ["svg"]
                    },
                    favourites_active: {
                        src: "svgs/common/favourites-active-0ca9601f7b40501174924024e45daa3a",
                        ext: ["svg"]
                    },
                    favourites: {
                        src: "svgs/common/favourites-5b58c2e7fd0c287f9bd1fd6b23b15019",
                        ext: ["svg"]
                    },
                    football_scores_active: {
                        src: "svgs/common/football-scores-active-bbdbd06988e3eeb0bc7440f02e090112",
                        ext: ["svg"]
                    },
                    football_scores: {
                        src: "svgs/common/football-scores-32bb49253edda337face5fbbd553eeb4",
                        ext: ["svg"]
                    },
                    hamburger_menu: {
                        src: "svgs/common/hamburger-menu-09595bd28744ad1fa99a010f1f41f34b",
                        ext: ["svg"]
                    },
                    hockey_scores_active: {
                        src: "svgs/common/hockey-scores-active-30a6cf272fb886a8d7d5eda34cee27b7",
                        ext: ["svg"]
                    },
                    hockey_scores: {
                        src: "svgs/common/hockey-scores-5f99face4232dd04d662007f04582170",
                        ext: ["svg"]
                    },
                    info_white: {
                        src: "svgs/common/info-white-2326b798cc9f34c3ab4a7e941948b776",
                        ext: ["svg"]
                    },
                    info: {
                        src: "svgs/common/info-dd4772b875bfb56cca423030b239bc06",
                        ext: ["svg"]
                    },
                    knockout_active: {
                        src: "svgs/common/knockout-active-82ffe321a9378c41af8ee25ece38d7ad",
                        ext: ["svg"]
                    },
                    knockout: {
                        src: "svgs/common/knockout-70b2112281778df28592f1097887e921",
                        ext: ["svg"]
                    },
                    link: {
                        src: "svgs/common/link-38b6c0e79d99f1789ecdee667813501e",
                        ext: ["svg"]
                    },
                    live: {
                        src: "svgs/common/live-9cc2fb1af6dcface698283d0ec166775",
                        ext: ["svg"]
                    },
                    livescore_6: {
                        src: "svgs/common/livescore-6-03661ed84de2e8fd68e9be002bb64820",
                        ext: ["svg"]
                    },
                    livescore_6_active: {
                        src: "svgs/common/livescore-6_active-70e82095ce3c385a7a55485a0eaabbae",
                        ext: ["svg"]
                    },
                    livescore_6_header: {
                        src: "svgs/common/livescore-6_header-936d438aa90502569eea0323fab54524",
                        ext: ["svg"]
                    },
                    livescore_6_round_active: {
                        src: "svgs/common/livescore-6_round_active-addcaa63ebec6c2e6248c7f0449e8434",
                        ext: ["svg"]
                    },
                    livescore_6_round_inactive: {
                        src: "svgs/common/livescore-6_round_inactive-55f58458aa854f606b6608e789c9d5fa",
                        ext: ["svg"]
                    },
                    livescore_logo: {
                        src: "svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f",
                        ext: ["svg"]
                    },
                    lock: {
                        src: "svgs/common/lock-8d5863c3eac3cda85874713d8c5ddde0",
                        ext: ["svg"]
                    },
                    ls_bet_icon: {
                        src: "svgs/common/ls-bet-icon-11a080aac9b0f7b5306b0a014aa73960",
                        ext: ["svg"]
                    },
                    ls_bet_logo: {
                        src: "svgs/common/ls-bet-logo-453b6b82ec5fd6ec326730cb72c0ebb4",
                        ext: ["svg"]
                    },
                    ls_bet: {
                        src: "svgs/common/ls-bet-b791da79444f0af09c9979d9bc61ef9c",
                        ext: ["svg"]
                    },
                    mobile_search: {
                        src: "svgs/common/mobile-search-2b729ef15856930595249a3c2bab7161",
                        ext: ["svg"]
                    },
                    mobile: {
                        src: "svgs/common/mobile-4811d14c0f726fad586220569e58c0f2",
                        ext: ["svg"]
                    },
                    news_article_active: {
                        src: "svgs/common/news-article-active-ac3685b2d0d3bd04a29426965109d243",
                        ext: ["svg"]
                    },
                    news_article: {
                        src: "svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc",
                        ext: ["svg"]
                    },
                    odds_widget_hover: {
                        src: "svgs/common/odds-widget-hover-c3eeb76c9fc35ee6c10a0167cd3afa96",
                        ext: ["svg"]
                    },
                    odds_widget: {
                        src: "svgs/common/odds-widget-1560a8df8f83d6295eb5678f6a6073b1",
                        ext: ["svg"]
                    },
                    pen: {
                        src: "svgs/common/pen-c123be2d2cddf58c8a19666c56baa302",
                        ext: ["svg"]
                    },
                    play: {
                        src: "svgs/common/play-40b83d88ee94f6fdb36b604b80f67c0a",
                        ext: ["svg"]
                    },
                    quote_primary: {
                        src: "svgs/common/quote-primary-0f67034b5b7685f3a9912a2570394c53",
                        ext: ["svg"]
                    },
                    referee: {
                        src: "svgs/common/referee-d0e056d51a19081940f87521c60a495b",
                        ext: ["svg"]
                    },
                    rotate: {
                        src: "svgs/common/rotate-5a81859274651b77fc2be0eda0dc82a1",
                        ext: ["svg"]
                    },
                    search: {
                        src: "svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd",
                        ext: ["svg"]
                    },
                    settings: {
                        src: "svgs/common/settings-93fa6dc453e27bfdda72a51f32a038be",
                        ext: ["svg"]
                    },
                    sev_tv_inactive: {
                        src: "svgs/common/sev-tv-inactive-35fe6bd259fdbf80a077f3000d354b15",
                        ext: ["svg"]
                    },
                    sev_tv: {
                        src: "svgs/common/sev-tv-e1f7689d96f4096e62b8047fb5708a12",
                        ext: ["svg"]
                    },
                    share_icon: {
                        src: "svgs/common/share-icon-4433a71472e6efef29d52298fd29a213",
                        ext: ["svg"]
                    },
                    spectators: {
                        src: "svgs/common/spectators-f3efe5b4e1ab89d3942768b2690ca938",
                        ext: ["svg"]
                    },
                    tennis_scores_active: {
                        src: "svgs/common/tennis-scores-active-7abac2c81e369e946a8c5f5cbee41a64",
                        ext: ["svg"]
                    },
                    tennis_scores: {
                        src: "svgs/common/tennis-scores-080213b57cdfbb261e2ddfc66b189d5d",
                        ext: ["svg"]
                    },
                    toggle_filled: {
                        src: "svgs/common/toggle-filled-b142fe841bf166ce8fefe762f7543bcd",
                        ext: ["svg"]
                    },
                    toggle: {
                        src: "svgs/common/toggle-50e0f9b80491c1e5135b9836442c308b",
                        ext: ["svg"]
                    },
                    tracker_active: {
                        src: "svgs/common/tracker-active-a3e2017dbc32c27ee8fc75cc29767341",
                        ext: ["svg"]
                    },
                    tracker: {
                        src: "svgs/common/tracker-021834b332cb5cd368289ecf9e5105a9",
                        ext: ["svg"]
                    },
                    tv: {
                        src: "svgs/common/tv-11ba3aa0ff39ce827b36b836d469e55d",
                        ext: ["svg"]
                    },
                    twitter: {
                        src: "svgs/common/twitter-359343370df9615f835e275730a3c311",
                        ext: ["svg"]
                    },
                    u18: {
                        src: "svgs/common/u18-5777f595a05be246938fe43b10b05642",
                        ext: ["svg"]
                    },
                    ukraine_flag: {
                        src: "svgs/common/ukraine-flag-b18d396112aa367da3a05391607cde84",
                        ext: ["svg"]
                    },
                    user_account: {
                        src: "svgs/common/user-account-24ec3334e4973038ec425ca0ee24f091",
                        ext: ["svg"]
                    },
                    venue: {
                        src: "svgs/common/venue-bb6d741e46d7436e13f2cf6ce72436b8",
                        ext: ["svg"]
                    },
                    warning: {
                        src: "svgs/common/warning-f86b51eb76f20aa7eae7fb47c3d3b719",
                        ext: ["svg"]
                    },
                    what_is_new: {
                        src: "svgs/common/what-is-new-bab859cf6a083e641eada77c89c4f8af",
                        ext: ["svg"]
                    }
                }[null === c || void 0 === c ? void 0 : c.icon],
                slug: null === c || void 0 === c ? void 0 : c.slug,
                iconActive: {
                    UefaChampionsLeague: {
                        src: "svgs/common/UefaChampionsLeague-545201d5525d6083fa4f6a76364a35c0",
                        ext: ["svg"]
                    },
                    ad_icon: {
                        src: "svgs/common/ad-icon-137beeff273339320df79cc37b3183d0",
                        ext: ["svg"]
                    },
                    advertise: {
                        src: "svgs/common/advertise-455249c8113e16b00846232ce9abc1da",
                        ext: ["svg"]
                    },
                    agg: {
                        src: "svgs/common/agg-2843999ec176ba6d5db214ec89451685",
                        ext: ["svg"]
                    },
                    angle_down_black: {
                        src: "svgs/common/angle-down-black-e184e1d1f2f97e888477460ed447c4c1",
                        ext: ["svg"]
                    },
                    angle_left_white: {
                        src: "svgs/common/angle-left-white-1102fc3b6f9ebb3f9e89337037aa75fa",
                        ext: ["svg"]
                    },
                    angle_left: {
                        src: "svgs/common/angle-left-7b4609c41b32b4d1b24d4d45236ade99",
                        ext: ["svg"]
                    },
                    angle_right_white: {
                        src: "svgs/common/angle-right-white-a5319fd4c398df4ba9554245e45beb6b",
                        ext: ["svg"]
                    },
                    angle_right: {
                        src: "svgs/common/angle-right-e3b65eb78057ae0942ccd959afb4b57c",
                        ext: ["svg"]
                    },
                    badge_default: {
                        src: "svgs/common/badge-default-201a546527a7779845697b44be2a618a",
                        ext: ["svg"]
                    },
                    basketball_scores_active: {
                        src: "svgs/common/basketball-scores-active-bd034ce043a148f1d8be73e583029391",
                        ext: ["svg"]
                    },
                    basketball_scores: {
                        src: "svgs/common/basketball-scores-4b7aa2ca149d58a2ccf082646a97f618",
                        ext: ["svg"]
                    },
                    bet_stream: {
                        src: "svgs/common/bet-stream-1b0ab4207286335d3dc82baa8470ad3d",
                        ext: ["svg"]
                    },
                    bet365_logo_vector: {
                        src: "svgs/common/bet365-logo-vector-c2373d6d6a3361ab4282d4ca86ff5045",
                        ext: ["svg"]
                    },
                    calendar: {
                        src: "svgs/common/calendar-62a86ad26c51fe49ea1c6abb202a15b4",
                        ext: ["svg"]
                    },
                    close_ad_icon: {
                        src: "svgs/common/close-ad-icon-3eee8e3f40018205756172b544a231c7",
                        ext: ["svg"]
                    },
                    close_thin: {
                        src: "svgs/common/close-thin-c893a6857e7b74225b562a8b65eb31ed",
                        ext: ["svg"]
                    },
                    close_white: {
                        src: "svgs/common/close-white-c02aa576b4d05e71d1ecc8da128fbf18",
                        ext: ["svg"]
                    },
                    close: {
                        src: "svgs/common/close-8ee0371d88a3a48c51aaf5a537565626",
                        ext: ["svg"]
                    },
                    confirmed: {
                        src: "svgs/common/confirmed-7161a3eede4e7a524f8b368995594508",
                        ext: ["svg"]
                    },
                    contact_us: {
                        src: "svgs/common/contact-us-4b6b9ad6f8722457fd138462f7ae72c4",
                        ext: ["svg"]
                    },
                    copy_link: {
                        src: "svgs/common/copy-link-6fd1f7ee423741c1315666b94a1e38ec",
                        ext: ["svg"]
                    },
                    cricket_scores_active: {
                        src: "svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20",
                        ext: ["svg"]
                    },
                    cricket_scores: {
                        src: "svgs/common/cricket-scores-c1b62a8d15d85f3272850e9e4bf387ff",
                        ext: ["svg"]
                    },
                    cristianoRonaldo: {
                        src: "svgs/common/cristianoRonaldo-b52670bcc6431c5e45c4ce4c5c4befb4",
                        ext: ["svg"]
                    },
                    double_angle_down_primary: {
                        src: "svgs/common/double-angle-down-primary-c2538ba88a22e24ef28559046149892e",
                        ext: ["svg"]
                    },
                    double_angle_down: {
                        src: "svgs/common/double-angle-down-b7425bbc69df4fd83853049f64015b66",
                        ext: ["svg"]
                    },
                    double_angle_left: {
                        src: "svgs/common/double-angle-left-8ae0ece8b225ab7053bfa41eef4c3329",
                        ext: ["svg"]
                    },
                    double_angle_right: {
                        src: "svgs/common/double-angle-right-8b730cf50fc5b5386e2cd996dd01a270",
                        ext: ["svg"]
                    },
                    double_angle_up_primary: {
                        src: "svgs/common/double-angle-up-primary-e73c3adf7de15c3fd93b0671f37034bb",
                        ext: ["svg"]
                    },
                    download: {
                        src: "svgs/common/download-a627554318349f77bb4b3634e94b0205",
                        ext: ["svg"]
                    },
                    ellipsis: {
                        src: "svgs/common/ellipsis-acb5109bad89edc48160f9ed3a4d5981",
                        ext: ["svg"]
                    },
                    eye_closed: {
                        src: "svgs/common/eye-closed-c2482aaf3e6f8788fa0c03c5eeebb8e3",
                        ext: ["svg"]
                    },
                    eye: {
                        src: "svgs/common/eye-e941b4589775e63d9a84dd120607317e",
                        ext: ["svg"]
                    },
                    facebook_logo: {
                        src: "svgs/common/facebook-logo-bbaeebb6393763747ba298b736a96081",
                        ext: ["svg"]
                    },
                    faq: {
                        src: "svgs/common/faq-a0e9069b9f57219c5b82ec970032f813",
                        ext: ["svg"]
                    },
                    favourites_active: {
                        src: "svgs/common/favourites-active-0ca9601f7b40501174924024e45daa3a",
                        ext: ["svg"]
                    },
                    favourites: {
                        src: "svgs/common/favourites-5b58c2e7fd0c287f9bd1fd6b23b15019",
                        ext: ["svg"]
                    },
                    football_scores_active: {
                        src: "svgs/common/football-scores-active-bbdbd06988e3eeb0bc7440f02e090112",
                        ext: ["svg"]
                    },
                    football_scores: {
                        src: "svgs/common/football-scores-32bb49253edda337face5fbbd553eeb4",
                        ext: ["svg"]
                    },
                    hamburger_menu: {
                        src: "svgs/common/hamburger-menu-09595bd28744ad1fa99a010f1f41f34b",
                        ext: ["svg"]
                    },
                    hockey_scores_active: {
                        src: "svgs/common/hockey-scores-active-30a6cf272fb886a8d7d5eda34cee27b7",
                        ext: ["svg"]
                    },
                    hockey_scores: {
                        src: "svgs/common/hockey-scores-5f99face4232dd04d662007f04582170",
                        ext: ["svg"]
                    },
                    info_white: {
                        src: "svgs/common/info-white-2326b798cc9f34c3ab4a7e941948b776",
                        ext: ["svg"]
                    },
                    info: {
                        src: "svgs/common/info-dd4772b875bfb56cca423030b239bc06",
                        ext: ["svg"]
                    },
                    knockout_active: {
                        src: "svgs/common/knockout-active-82ffe321a9378c41af8ee25ece38d7ad",
                        ext: ["svg"]
                    },
                    knockout: {
                        src: "svgs/common/knockout-70b2112281778df28592f1097887e921",
                        ext: ["svg"]
                    },
                    link: {
                        src: "svgs/common/link-38b6c0e79d99f1789ecdee667813501e",
                        ext: ["svg"]
                    },
                    live: {
                        src: "svgs/common/live-9cc2fb1af6dcface698283d0ec166775",
                        ext: ["svg"]
                    },
                    livescore_6: {
                        src: "svgs/common/livescore-6-03661ed84de2e8fd68e9be002bb64820",
                        ext: ["svg"]
                    },
                    livescore_6_active: {
                        src: "svgs/common/livescore-6_active-70e82095ce3c385a7a55485a0eaabbae",
                        ext: ["svg"]
                    },
                    livescore_6_header: {
                        src: "svgs/common/livescore-6_header-936d438aa90502569eea0323fab54524",
                        ext: ["svg"]
                    },
                    livescore_6_round_active: {
                        src: "svgs/common/livescore-6_round_active-addcaa63ebec6c2e6248c7f0449e8434",
                        ext: ["svg"]
                    },
                    livescore_6_round_inactive: {
                        src: "svgs/common/livescore-6_round_inactive-55f58458aa854f606b6608e789c9d5fa",
                        ext: ["svg"]
                    },
                    livescore_logo: {
                        src: "svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f",
                        ext: ["svg"]
                    },
                    lock: {
                        src: "svgs/common/lock-8d5863c3eac3cda85874713d8c5ddde0",
                        ext: ["svg"]
                    },
                    ls_bet_icon: {
                        src: "svgs/common/ls-bet-icon-11a080aac9b0f7b5306b0a014aa73960",
                        ext: ["svg"]
                    },
                    ls_bet_logo: {
                        src: "svgs/common/ls-bet-logo-453b6b82ec5fd6ec326730cb72c0ebb4",
                        ext: ["svg"]
                    },
                    ls_bet: {
                        src: "svgs/common/ls-bet-b791da79444f0af09c9979d9bc61ef9c",
                        ext: ["svg"]
                    },
                    mobile_search: {
                        src: "svgs/common/mobile-search-2b729ef15856930595249a3c2bab7161",
                        ext: ["svg"]
                    },
                    mobile: {
                        src: "svgs/common/mobile-4811d14c0f726fad586220569e58c0f2",
                        ext: ["svg"]
                    },
                    news_article_active: {
                        src: "svgs/common/news-article-active-ac3685b2d0d3bd04a29426965109d243",
                        ext: ["svg"]
                    },
                    news_article: {
                        src: "svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc",
                        ext: ["svg"]
                    },
                    odds_widget_hover: {
                        src: "svgs/common/odds-widget-hover-c3eeb76c9fc35ee6c10a0167cd3afa96",
                        ext: ["svg"]
                    },
                    odds_widget: {
                        src: "svgs/common/odds-widget-1560a8df8f83d6295eb5678f6a6073b1",
                        ext: ["svg"]
                    },
                    pen: {
                        src: "svgs/common/pen-c123be2d2cddf58c8a19666c56baa302",
                        ext: ["svg"]
                    },
                    play: {
                        src: "svgs/common/play-40b83d88ee94f6fdb36b604b80f67c0a",
                        ext: ["svg"]
                    },
                    quote_primary: {
                        src: "svgs/common/quote-primary-0f67034b5b7685f3a9912a2570394c53",
                        ext: ["svg"]
                    },
                    referee: {
                        src: "svgs/common/referee-d0e056d51a19081940f87521c60a495b",
                        ext: ["svg"]
                    },
                    rotate: {
                        src: "svgs/common/rotate-5a81859274651b77fc2be0eda0dc82a1",
                        ext: ["svg"]
                    },
                    search: {
                        src: "svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd",
                        ext: ["svg"]
                    },
                    settings: {
                        src: "svgs/common/settings-93fa6dc453e27bfdda72a51f32a038be",
                        ext: ["svg"]
                    },
                    sev_tv_inactive: {
                        src: "svgs/common/sev-tv-inactive-35fe6bd259fdbf80a077f3000d354b15",
                        ext: ["svg"]
                    },
                    sev_tv: {
                        src: "svgs/common/sev-tv-e1f7689d96f4096e62b8047fb5708a12",
                        ext: ["svg"]
                    },
                    share_icon: {
                        src: "svgs/common/share-icon-4433a71472e6efef29d52298fd29a213",
                        ext: ["svg"]
                    },
                    spectators: {
                        src: "svgs/common/spectators-f3efe5b4e1ab89d3942768b2690ca938",
                        ext: ["svg"]
                    },
                    tennis_scores_active: {
                        src: "svgs/common/tennis-scores-active-7abac2c81e369e946a8c5f5cbee41a64",
                        ext: ["svg"]
                    },
                    tennis_scores: {
                        src: "svgs/common/tennis-scores-080213b57cdfbb261e2ddfc66b189d5d",
                        ext: ["svg"]
                    },
                    toggle_filled: {
                        src: "svgs/common/toggle-filled-b142fe841bf166ce8fefe762f7543bcd",
                        ext: ["svg"]
                    },
                    toggle: {
                        src: "svgs/common/toggle-50e0f9b80491c1e5135b9836442c308b",
                        ext: ["svg"]
                    },
                    tracker_active: {
                        src: "svgs/common/tracker-active-a3e2017dbc32c27ee8fc75cc29767341",
                        ext: ["svg"]
                    },
                    tracker: {
                        src: "svgs/common/tracker-021834b332cb5cd368289ecf9e5105a9",
                        ext: ["svg"]
                    },
                    tv: {
                        src: "svgs/common/tv-11ba3aa0ff39ce827b36b836d469e55d",
                        ext: ["svg"]
                    },
                    twitter: {
                        src: "svgs/common/twitter-359343370df9615f835e275730a3c311",
                        ext: ["svg"]
                    },
                    u18: {
                        src: "svgs/common/u18-5777f595a05be246938fe43b10b05642",
                        ext: ["svg"]
                    },
                    ukraine_flag: {
                        src: "svgs/common/ukraine-flag-b18d396112aa367da3a05391607cde84",
                        ext: ["svg"]
                    },
                    user_account: {
                        src: "svgs/common/user-account-24ec3334e4973038ec425ca0ee24f091",
                        ext: ["svg"]
                    },
                    venue: {
                        src: "svgs/common/venue-bb6d741e46d7436e13f2cf6ce72436b8",
                        ext: ["svg"]
                    },
                    warning: {
                        src: "svgs/common/warning-f86b51eb76f20aa7eae7fb47c3d3b719",
                        ext: ["svg"]
                    },
                    what_is_new: {
                        src: "svgs/common/what-is-new-bab859cf6a083e641eada77c89c4f8af",
                        ext: ["svg"]
                    }
                }[null === c || void 0 === c ? void 0 : c.icon_active]
            };
            return [{
                id: "scores",
                name: "common.items.scores",
                href: "/".concat(i, "/").concat(n && n !== A.ActiveSportEnum.football ? "".concat(n, "/") : ""),
                icon: Pn[n || A.ActiveSportEnum.football],
                iconActive: En[n || A.ActiveSportEnum.football]
            }, {
                id: "favourites",
                name: "common.items.favourites",
                href: "/".concat(i, "/").concat(null !== n && void 0 !== n ? n : A.ActiveSportEnum.football, "/favourites/matches/"),
                icon: {
                    src: "svgs/common/favourites-5b58c2e7fd0c287f9bd1fd6b23b15019",
                    ext: ["svg"]
                },
                iconActive: {
                    src: "svgs/common/favourites-active-0ca9601f7b40501174924024e45daa3a",
                    ext: ["svg"]
                }
            }, !!c && Cn(Cn({}, l), {}, {
                isMobileOnly: !0
            }), {
                id: "news",
                name: "common.items.news",
                href: "/".concat(i, "/news/"),
                icon: {
                    src: "svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc",
                    ext: ["svg"]
                },
                iconActive: {
                    src: "svgs/common/news-article-active-ac3685b2d0d3bd04a29426965109d243",
                    ext: ["svg"]
                }
            }, !!c && Cn(Cn({}, l), {}, {
                isDesktopOnly: !0
            })].concat((0,
            r.Z)(u), [{
                id: "mobile",
                name: "common.items.download",
                href: "/".concat(i, "/mobile/"),
                icon: {
                    src: "svgs/common/download-a627554318349f77bb4b3634e94b0205",
                    ext: ["svg"]
                },
                iconActive: {
                    src: "svgs/common/download-a627554318349f77bb4b3634e94b0205",
                    ext: ["svg"]
                },
                isDesktopOnly: !0
            }]).reduce((function(e, t) {
                return t ? [].concat((0,
                r.Z)(e), [Cn(Cn({}, t), {}, {
                    isActive: t.isActive || t.id === a
                })]) : e
            }
            ), [])
        }
          , In = (n(74414),
        n(31128))
          , Dn = n(93224)
          , Ln = n.n(Dn)
          , Nn = n(31561);
        function Tn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Mn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Tn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Rn = function(e) {
            var t, n, r, o, i, s, c, u, d, f, v, p, m, b, h, _, O, x, S = e.Component, j = e.pageProps, C = e.meta, P = (0,
            ie.a)().externalAppConfig, E = j.adsTargeting, I = j.layoutContext, D = I.leftMenuLinks, M = I.activeHeaderId, R = I.isArticleContentPage, U = void 0 !== R && R, B = I.hiddenAds, Z = (0,
            Me.b)(), F = Z.activeSport, G = Z.isExploreMenuOpened, H = Z.stage, z = Z.isSevPage, V = Z.isDesktopView, W = (0,
            T.L)().isDesktopWidth, q = (0,
            l.useAmp)(), $ = (0,
            pe.useRouter)(), Y = function(e) {
                var t, n, r = (0,
                ie.a)(), o = r.externalAppConfig, i = r.isUserAdult, a = r.geoIpCountryCode, s = void 0 === a ? "" : a, c = (0,
                Me.b)().activeSport, u = void 0 === c ? A.ActiveSportEnum.football : c, l = (0,
                L.$G)().activeLocale;
                return (0,
                g.useMemo)((function() {
                    var t, n, r, a, c = (null === o || void 0 === o || null === (t = o.ftp) || void 0 === t || null === (n = t.allowedCountries) || void 0 === n ? void 0 : n.includes(s)) && i;
                    return An({
                        activeSport: u,
                        locale: l,
                        activeHeaderId: e,
                        betLink: null === o || void 0 === o || null === (r = o.links) || void 0 === r || null === (a = r.topMenu) || void 0 === a ? void 0 : a.betLink,
                        freeToPlay: c ? null === o || void 0 === o ? void 0 : o.ftp : void 0
                    })
                }
                ), [u, l, e, null === o || void 0 === o || null === (t = o.links) || void 0 === t || null === (n = t.topMenu) || void 0 === n ? void 0 : n.betLink, null === o || void 0 === o ? void 0 : o.ftp, s, i])
            }(M), K = (0,
            be.t)(), J = (0,
            k.c2)().notificationMessage, Q = S.isNativePage || S.isNoLayout, ee = !W && D && G, te = "news" !== M && !(null === S || void 0 === S || null === (t = S.Blocks) || void 0 === t || !t.MobileExploreMenu), ne = q || !W || !V, oe = K && (null === P || void 0 === P ? void 0 : P.ftp) && !W;
            !function(e) {
                (0,
                g.useEffect)((function() {
                    return Ft(),
                    e.events.on(A.RouteChangeEnum.routeChangeComplete, Ft),
                    function() {
                        e.events.off(A.RouteChangeEnum.routeChangeComplete, Ft)
                    }
                }
                ), [e])
            }($),
            function(e) {
                var t = (0,
                ie.a)().isUserAdult;
                (0,
                Nn.L)((function() {
                    return (0,
                    y.S)() && (null !== e && void 0 !== e && e.length && e.forEach((function(e) {
                        document.body.classList.add(e)
                    }
                    )),
                    t && document.body.classList.add("adult")),
                    function() {
                        (0,
                        y.S)() && null !== e && void 0 !== e && e.length && (e.forEach((function(e) {
                            document.body.classList.remove(e)
                        }
                        )),
                        t && document.body.classList.remove("adult"))
                    }
                }
                ), [e, t])
            }(S.bodyClassNames);
            var ae, se = (0,
            g.useMemo)((function() {
                return Mn({}, Mn(Mn({}, E), {}, {
                    lsMedia: void 0
                }))
            }
            ), [E]);
            return Q ? (0,
            w.jsxs)(w.Fragment, {
                children: [(null === (ae = S.Blocks) || void 0 === ae ? void 0 : ae.HorizontalNavigationCenterRow) && (0,
                w.jsx)(S.Blocks.HorizontalNavigationCenterRow, Mn({}, j)), (0,
                w.jsx)(S, Mn({}, j))]
            }) : (0,
            w.jsxs)(w.Fragment, {
                children: [q && (0,
                w.jsx)(rn.cQ, {}), (null === S || void 0 === S || null === (n = S.Blocks) || void 0 === n ? void 0 : n.AuthModal) && (0,
                w.jsx)(N.S, {
                    componentProps: se,
                    errorZone: "authModal",
                    children: (0,
                    w.jsx)(S.Blocks.AuthModal, {})
                }), (0,
                w.jsx)(Ht.P, {
                    adsTargeting: E
                }), (0,
                w.jsxs)("div", {
                    id: "outer-layout-wrapper",
                    className: X()(Ln().outerWrapper, F, "header-".concat(M), (0,
                    a.Z)({
                        isSevPage: z,
                        isStagePage: !!H,
                        isExploreMenuOpened: G
                    }, Ln().articleLayout, U)),
                    children: [(0,
                    w.jsx)("div", {
                        className: Ln().topMenuWrapper,
                        id: "top-menu-holder",
                        children: null !== S && void 0 !== S && null !== (r = S.Blocks) && void 0 !== r && r.TopMenuGame && oe ? (0,
                        w.jsx)(S.Blocks.TopMenuGame, Mn({}, j)) : (0,
                        w.jsx)(kn, {
                            as: re.n,
                            items: Y,
                            isSearchButtonVisible: te
                        })
                    }), ee && (null === (o = S.Blocks) || void 0 === o ? void 0 : o.HorizontalNavigation) && (null === S || void 0 === S || null === (i = S.Blocks) || void 0 === i ? void 0 : i.MobileExploreMenu) && (0,
                    w.jsx)(S.Blocks.MobileExploreMenu, Mn(Mn({}, j), {}, {
                        HorizontalNavigationBlock: (0,
                        w.jsx)(S.Blocks.HorizontalNavigation, Mn({}, j))
                    })), (0,
                    w.jsxs)("div", {
                        className: Ln().innerWrapper,
                        id: "inner-wrapper",
                        children: [(null === (s = S.Blocks) || void 0 === s ? void 0 : s.HorizontalNavigation) && (0,
                        w.jsx)(S.Blocks.HorizontalNavigation, Mn({}, j)), (0,
                        w.jsxs)("div", {
                            id: "layout-columns-container",
                            className: Ln().columnsContainer,
                            children: [(null === (c = S.Blocks) || void 0 === c ? void 0 : c.LeftColumn) && (0,
                            w.jsx)(S.Blocks.LeftColumn, Mn({}, j)), (0,
                            w.jsx)(N.S, {
                                componentProps: se,
                                errorZone: "centerColumn",
                                children: (0,
                                w.jsxs)("div", {
                                    id: "content-center",
                                    className: X()(Ln().innerCenterColumn, {
                                        oneColumn: !(null !== (u = S.Blocks) && void 0 !== u && u.LeftColumn) && !(null !== (d = S.Blocks) && void 0 !== d && d.RightColumn),
                                        twoColumn: !(null !== (f = S.Blocks) && void 0 !== f && f.LeftColumn) && (null === (v = S.Blocks) || void 0 === v ? void 0 : v.RightColumn),
                                        threeColumns: (null === (p = S.Blocks) || void 0 === p ? void 0 : p.LeftColumn) && (null === (m = S.Blocks) || void 0 === m ? void 0 : m.RightColumn)
                                    }),
                                    children: [!q && (0,
                                    w.jsx)(rn.cQ, {}), (null === (b = S.Blocks) || void 0 === b ? void 0 : b.HorizontalNavigationCenterRow) && (0,
                                    w.jsx)(S.Blocks.HorizontalNavigationCenterRow, Mn({}, j)), (0,
                                    w.jsx)(S, Mn({}, j))]
                                })
                            }), (0,
                            w.jsx)("div", {
                                className: X()(Ln().rightColumnWrapper, (0,
                                a.Z)({}, Ln().innerRightColumnOffset, !(null === (h = S.Blocks) || void 0 === h || !h.HorizontalNavigation))),
                                children: (null === (_ = S.Blocks) || void 0 === _ ? void 0 : _.RightColumn) && (0,
                                w.jsx)(S.Blocks.RightColumn, Mn({}, j))
                            })]
                        }), (0,
                        w.jsxs)(nn, {
                            children: [J && (0,
                            w.jsx)(gn, {
                                message: J
                            }), (0,
                            w.jsx)(Gt.U, {
                                hiddenAds: B,
                                adsTargeting: E
                            })]
                        })]
                    }), !$.isFallback && (0,
                    w.jsx)(vn, {
                        as: re.n,
                        toggleIsDesktopView: In.gS,
                        footerData: C,
                        hideMetaData: U
                    }), K && (0,
                    w.jsx)(zt.A, {
                        adsTargeting: E
                    })]
                }), ne && (0,
                w.jsx)(Xt, {
                    as: re.n,
                    items: Y,
                    appDownloadLink: "https://livescoremedia.onelink.me/5KrT/5277cd7d"
                }), (null === S || void 0 === S || null === (O = S.Blocks) || void 0 === O ? void 0 : O.AgeGating) && (0,
                w.jsx)(N.S, {
                    componentProps: se,
                    errorZone: "ageGating",
                    children: (0,
                    w.jsx)(S.Blocks.AgeGating, Mn({}, j))
                }), (null === S || void 0 === S || null === (x = S.Blocks) || void 0 === x ? void 0 : x.SmartBanner) && (0,
                w.jsx)(S.Blocks.SmartBanner, Mn({}, j))]
            })
        }
          , Un = n(82611)
          , Bn = n(62951)
          , Zn = n(27816)
          , Fn = n(88206);
        function Gn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Hn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var zn = function(e) {
            var t = (0,
            Me.b)()
              , n = t.activeSport
              , o = t.announcementBannerPage
              , i = (0,
            H.a)()
              , a = i.announcementsConfig
              , s = i.geoIpCountryCode
              , c = i.isAnnouncementsConfigLoaded
              , u = i.isExternalAppConfigLoading
              , l = i.segmentConfig
              , d = (0,
            z.H)().isOneTrustAllowed
              , f = (0,
            Fn.Z)({
                announcementBannerPage: o,
                announcementsConfig: a
            })
              , v = (0,
            Zn.F)(l, s, d).trackScreenView
              , p = (0,
            Mt.x)()
              , m = (0,
            ae.d)().currentModal
              , b = (0,
            g.useState)(!1)
              , h = b[0]
              , w = b[1];
            (0,
            Nn.L)((function() {
                var e = (0,
                y.S)() && document.getElementById(se.s_.body);
                if (e) {
                    var t = new MutationObserver((function(e) {
                        if (e.some((function(e) {
                            return e.target.id === se.s_.body
                        }
                        ))) {
                            var t = e.some((function(e) {
                                var t;
                                return (0,
                                r.Z)((null === e || void 0 === e || null === (t = e.target) || void 0 === t ? void 0 : t.classList) || []).includes("isActive")
                            }
                            ));
                            w(t)
                        }
                    }
                    ));
                    return t.observe(e, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0,
                        attributeOldValue: !0,
                        characterDataOldValue: !0
                    }),
                    function() {
                        t.disconnect()
                    }
                }
            }
            ), []);
            var _ = function() {
                var e, t = (0,
                ie.a)(), n = t.geoIpCountryCode, r = void 0 === n ? "" : n, o = t.externalAppConfig, i = t.isUserAdult, a = (0,
                Me.b)(), s = a.isNativePage, c = a.isAmp, u = !!r && Object.keys((null === o || void 0 === o || null === (e = o.sportal) || void 0 === e ? void 0 : e.oddsGeoIPClients) || {}).includes(r);
                return (0,
                y.S)() && !c && !s && u && i
            }();
            (0,
            g.useEffect)((function() {
                var t = function(t) {
                    var r = !!t.content && !p;
                    if (m)
                        "LoginForm" === m && v({
                            screenClass: "login",
                            screenName: Kt.o3.login
                        }),
                        "AccountDetails" === m && v({
                            screenClass: "account",
                            screenName: Kt.o3.accountDetails
                        });
                    else if (h)
                        v({
                            screenClass: "settings",
                            screenName: Kt.o3.settingsMenu,
                            bannerIsPresent: r
                        });
                    else if (s && !p && !u && e && "match_info" !== e.screenClass && "match_summary" !== e.screenClass) {
                        var o, i, a, c, l, d, f = Hn(Hn(Hn({
                            screenClass: e.screenClass,
                            screenName: e.screenName,
                            sportId: (0,
                            Bn.Vj)(e.screenClass, n),
                            metaData: e.metaData
                        }, e.sportParams), r && {
                            bannerId: t.id,
                            bannerName: t.layout_type
                        }), {}, {
                            bannerIsPresent: r
                        }), g = (0,
                        Un.G)(Nt.SessionStorageKeys.segmentScreenView, !0), b = "news_detail" === e.screenClass, y = "news_detail" === e.screenClass && ("teams_overview" === (null === g || void 0 === g ? void 0 : g.screenClass) || "teams_news" === (null === g || void 0 === g ? void 0 : g.screenClass)) && (null === g || void 0 === g || null === (o = g.metaData) || void 0 === o ? void 0 : o.teamName) && (null === e || void 0 === e || null === (i = e.metaData) || void 0 === i ? void 0 : i.articleId), w = "news_detail" === e.screenClass && "teams_news_details" === (null === g || void 0 === g ? void 0 : g.screenClass) && (null === e || void 0 === e || null === (a = e.metaData) || void 0 === a ? void 0 : a.articleId) === (null === g || void 0 === g || null === (c = g.metaData) || void 0 === c ? void 0 : c.articleId);
                        if (y)
                            v(Hn(Hn({}, f), {}, {
                                screenClass: "teams_news_details",
                                screenName: "Teams - News Details - ".concat(null === g || void 0 === g || null === (l = g.metaData) || void 0 === l ? void 0 : l.teamName, " - ").concat(null === e || void 0 === e || null === (d = e.metaData) || void 0 === d ? void 0 : d.articleId),
                                prevScreenClass: null === g || void 0 === g ? void 0 : g.screenClass,
                                prevScreenName: null === g || void 0 === g ? void 0 : g.screenName,
                                countryId: null === g || void 0 === g ? void 0 : g.countryId,
                                sportId: null === g || void 0 === g ? void 0 : g.sportId
                            }));
                        else if (!w) {
                            var O, x;
                            if ("teams_table" === e.screenClass && (null === e || void 0 === e || null === (O = e.metaData) || void 0 === O ? void 0 : O.teamName) && (null === e || void 0 === e || null === (x = e.sportParams) || void 0 === x ? void 0 : x.leagueId)) {
                                var S, k, j = (0,
                                Bn.tX)((null === e || void 0 === e || null === (S = e.metaData) || void 0 === S ? void 0 : S.teamName) || "", (null === e || void 0 === e || null === (k = e.sportParams) || void 0 === k ? void 0 : k.leagueId) || ""), C = j.screenName, P = j.screenClass;
                                v(Hn(Hn(Hn(Hn({}, f), e.streamParams), e.newsParams), {}, {
                                    screenName: C,
                                    screenClass: P
                                }))
                            } else if (b) {
                                var E;
                                v(Hn(Hn(Hn(Hn({}, f), e.streamParams), e.newsParams), {}, {
                                    oddsWidgetIsPresent: !(null === e || void 0 === e || null === (E = e.newsParams) || void 0 === E || !E.oddsWidgetIsPresent) && _
                                }))
                            } else
                                v(Hn(Hn(Hn({}, f), e.streamParams), e.newsParams))
                        }
                    }
                };
                c || (f.length ? f.forEach((function(e) {
                    t(e)
                }
                )) : t({}))
            }
            ), [e, v, n, f, a, p, o, s, m, h, _, c, u])
        }
          , Vn = function(e) {
            var t, n = e.Component, r = e.pageProps, o = e.meta, i = e.activeLocale, a = r.layoutContext, s = r.segmentTracking;
            !function() {
                var e = (0,
                Me.b)().isNativePage
                  , t = (0,
                H.a)().publicDomain
                  , n = (0,
                pe.useRouter)()
                  , r = (0,
                g.useCallback)((function(r) {
                    var o = null === r || void 0 === r ? void 0 : r.split("?")[0];
                    e && (0,
                    y.S)() && o !== n.asPath.split("?")[0] && (0,
                    Bt.j)(function(e) {
                        return /\/([^/]+?)\/news\/$/.test(e) ? "OpenNews" : /\/([^/]+?)\/news\/publishers\/$/.test(e) ? "OpenNewsPublishers" : /\/([^/]+?)\/news\/([^/]*?)-\+?\d+\/$/.test(e) ? "OpenNewsArticle" : /\/([^/]+?)\/news\/([^/]\+?\D+)\/$/.test(e) ? "OpenNewsCategory" : /\/([^/]+?)\/news\/team\/([^/]+?)\/$/.test(e) ? "OpenNewsTeamNameTag" : /\/([^/]+?)\/news\/competition\/([^/]+?)\/$/.test(e) ? "OpenNewsTournamentTag" : /\/([^/]+?)\/news\/player\/([^/]+?)\/$/.test(e) ? "OpenNewsPlayerNameTag" : "OpenNewsTag"
                    }(o), {
                        load: "start",
                        url: "".concat(t).concat(o)
                    })
                }
                ), [e, t, n.asPath]);
                (0,
                Zt.l)(r)
            }(),
            function() {
                var e = (0,
                Mt.x)()
                  , t = (0,
                H.a)()
                  , n = t.externalAppConfig
                  , r = t.geoIpCountryCode
                  , o = t.isUserAdult
                  , i = t.isSegmentConfigLoading
                  , a = t.segmentConfig
                  , s = (0,
                z.H)().isOneTrustAllowed
                  , c = (0,
                ne.K)(a, r, s).identifyEvent
                  , u = (0,
                T.L)().isDesktopWidth
                  , l = (0,
                Tt.N)()
                  , d = (0,
                M.$o)("ls.segment.latestSegmentConfig");
                (0,
                g.useEffect)((function() {
                    try {
                        if (d && !i && a && JSON.parse(d)) {
                            var e = JSON.parse(d);
                            parseFloat(e.revision) < (null === a || void 0 === a ? void 0 : a.revision) && c(Ut({
                                isAdult: o,
                                geo: r,
                                viewport: u ? "desktop" : "mobile"
                            }, l()), !0)
                        }
                    } catch (t) {
                        console.log("error in useIdentifyTracking hook")
                    }
                }
                ), [r, l, c, u, i, o, a, d]),
                (0,
                g.useEffect)((function() {
                    n && r && !e && !i && void 0 !== e && c(Ut({
                        isAdult: o,
                        geo: r,
                        viewport: u ? "desktop" : "mobile"
                    }, l()))
                }
                ), [n, r, u, o, e, l, i, c])
            }(),
            zn(s);
            var c = (0,
            l.useAmp)()
              , u = (0,
            H.a)()
              , d = u.externalAppConfig
              , f = u.publicDomain
              , v = (0,
            pe.useRouter)()
              , p = ((null === d || void 0 === d || null === (t = d.consentManagement) || void 0 === t ? void 0 : t.allowedCountries) || []).map((function(e) {
                return e.toLowerCase()
            }
            ));
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(Dt, {
                    isAmp: c,
                    meta: o,
                    publicDomain: f,
                    locale: i,
                    path: v.asPath
                }), (null === a || void 0 === a ? void 0 : a.schemaData) && (0,
                w.jsx)(Lt, {
                    data: null === a || void 0 === a ? void 0 : a.schemaData
                }), (0,
                w.jsx)(Rn, {
                    Component: n,
                    pageProps: r,
                    meta: o
                }), c && (0,
                w.jsx)("amp-geo", {
                    layout: "nodisplay",
                    children: (0,
                    w.jsx)("script", {
                        type: "application/json",
                        dangerouslySetInnerHTML: {
                            __html: '\n{\n   "AmpBind":true,\n   "ISOCountryGroups":{\n      "uk":[\n         "gb"\n      ],\n      "ng":[\n         "ng"\n      ],\n      "oneTrustCountries": '.concat(JSON.stringify(p), "\n   }\n}")
                        }
                    })
                })]
            })
        };
        n(41574);
        function Wn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function qn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wn(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var $n = m()((function() {
            return n.e(1622).then(n.bind(n, 91622)).then((function(e) {
                return e.PullToRefresh
            }
            ))
        }
        ), {
            ssr: !0,
            loadableGenerated: {
                webpack: function() {
                    return [91622]
                }
            }
        })
          , Yn = v()().publicRuntimeConfig;
        function Kn(e) {
            return e in A.ActiveSportEnum ? e : A.ActiveSportEnum.football
        }
        var Jn = function(e) {
            var t, r = (0,
            l.useAmp)(), o = function() {
                var e = (0,
                g.useState)(!1)
                  , t = e[0]
                  , n = e[1];
                return (0,
                g.useEffect)((function() {
                    fetch("https://www3.doubleclick.net", {
                        method: "HEAD",
                        mode: "no-cors",
                        cache: "no-store"
                    }).catch((function(e) {
                        n(!0)
                    }
                    ))
                }
                ), []),
                t
            }();
            (0,
            g.useEffect)((function() {
                if ((0,
                y.S)()) {
                    var e, t, n = document.getElementById("initial-spinner");
                    null !== n && void 0 !== n && null !== (e = n.classList) && void 0 !== e && e.contains("fetching") || null === n || void 0 === n || null === (t = n.parentNode) || void 0 === t || t.removeChild(n)
                }
            }
            ), []);
            var i = e.Component
              , c = e.pageProps
              , u = e.router
              , d = e.externalAppConfig
              , f = e.generated
              , v = e.pageDictFiles
              , p = e.publicDomain
              , m = e.meta
              , b = e.pageProps.layoutContext
              , h = b.meta
              , _ = b.metaParams
              , j = b.shouldNotRedirectToAgeGatingPage
              , C = function(e, t, n) {
                var r = (0,
                pe.useRouter)();
                return (0,
                g.useMemo)((function() {
                    return (0,
                    jt.wT)(Pt(Pt({}, e), t), Pt({
                        lang: r.locale || kt.Z,
                        activeSport: r.query.sport || A.ActiveSportEnum.football
                    }, n))
                }
                ), [e, t, r.locale, r.query.sport, n])
            }(m, h || null, _);
            !function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = (0,
                ot.ZP)(e ? null : "buildId", (function() {
                    return fetch("/api/build-id/").then((function(e) {
                        return e.text()
                    }
                    ))
                }
                ), {
                    refreshInterval: _t,
                    fallbackData: (0,
                    y.S)() && window.ls.buildId,
                    revalidateOnMount: !1,
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1
                }).data;
                (0,
                y.S)() && t !== window.ls.buildId && (console.log("Newer UI experience is available, reloading page..."),
                window.location.reload(!0))
            }(null === c || void 0 === c ? void 0 : c.skipVersionCheck);
            var P = u.locale || A.ActiveLangEnum.en
              , I = Kn(u.query.sport)
              , T = function(e, t) {
                return (0,
                g.useMemo)((function() {
                    return (0,
                    y.S)() && window.langDict ? (0,
                    a.Z)({}, e, O(O({}, window.langDict[e]), t)) : n.g.langDict
                }
                ), [e, t])
            }(P, v)
              , M = (0,
            g.useMemo)((function() {
                return {
                    isSev: (null === i || void 0 === i ? void 0 : i.isSev) || !1,
                    isNativePage: !(null === i || void 0 === i || !i.isNativePage) || !1
                }
            }
            ), [i])
              , R = s({}, c)
              , U = (null === i || void 0 === i ? void 0 : i.isPullToRefreshHidden) || (null === i || void 0 === i ? void 0 : i.isNativePage) || !1
              , B = (0,
            D.M0)(u.query)
              , Z = B.isUserAdult
              , F = B.tz
              , G = (0,
            Ot.r)()
              , H = (0,
            In.jF)()
              , z = St(u)
              , V = (0,
            g.useMemo)((function() {
                return qn({
                    generated: f,
                    rootLink: c.rootLink,
                    activeSport: c.activeSport,
                    category: c.category,
                    stage: c.stage,
                    isDesktopView: H
                }, M)
            }
            ), [f, H, c.activeSport, c.category, c.rootLink, c.stage, M])
              , W = !r && !c.skipExternalScripts;
            return (0,
            w.jsx)(N.S, {
                doNotRenderFallback: !0,
                componentProps: V,
                errorZone: "root",
                children: (0,
                w.jsxs)(L.oc, {
                    langDict: T,
                    lang: (0,
                    L.Gy)(u.locale),
                    children: [(0,
                    w.jsx)(x, {
                        activeLocale: P,
                        isAmp: r
                    }), !U && (0,
                    w.jsx)($n, {}), (0,
                    w.jsx)(E, {
                        generated: f,
                        rootLink: null === c || void 0 === c ? void 0 : c.rootLink,
                        isNativePage: !(null === M || void 0 === M || !M.isNativePage),
                        isSevPage: !(null === M || void 0 === M || !M.isSev),
                        announcementBannerPage: c.layoutContext.announcementBannerPage || void 0,
                        isDesktopView: H,
                        activeSport: I,
                        page: null === (t = R.layoutContext) || void 0 === t ? void 0 : t.page,
                        category: null === c || void 0 === c ? void 0 : c.category,
                        stage: (null === c || void 0 === c ? void 0 : c.stage) || void 0,
                        queryParams: z,
                        leftMenuLinks: R.layoutContext.leftMenuLinks,
                        isAmp: r,
                        segmentTracking: c.segmentTracking,
                        isAdBlockDetected: o,
                        children: (0,
                        w.jsx)(wt, {
                            isAdultQueryParam: Z,
                            geoIpCountryCode: G,
                            publicDomain: p,
                            initialExternalAppConfig: d || void 0,
                            queryTimeZoneOffset: F,
                            shouldNotRedirectToAgeGatingPage: j,
                            isNativePage: !!M.isNativePage,
                            children: (0,
                            w.jsx)(J, {
                                geoIpCountryCode: G,
                                baseAuthUrl: Yn.PUBLIC_PLATFORM_API_URL,
                                children: (0,
                                w.jsx)(S.p, {
                                    ImageComponent: tt.o,
                                    children: (0,
                                    w.jsxs)(k.l4, {
                                        children: [(0,
                                        w.jsx)(Le, {}), W && (0,
                                        w.jsx)(et, {}), (0,
                                        w.jsxs)("div", {
                                            "data-testid": "livescore-app",
                                            id: "__livescore",
                                            children: [(0,
                                            w.jsx)(Vn, {
                                                pageProps: c,
                                                Component: i,
                                                meta: C,
                                                activeLocale: P
                                            }), !(null !== M && void 0 !== M && M.isNativePage) && (0,
                                            w.jsx)(ve, {
                                                isAmp: r
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        };
        Jn.getInitialProps = function() {
            var e = (0,
            i.Z)(u().mark((function e(t) {
                var i, a, s, c, l, f, v, p, m, g, b, h, y, w, _, O, x, S, k, j, C, P;
                return u().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            n.e(3748).then(n.t.bind(n, 33748, 23));
                        case 2:
                            return g = e.sent,
                            b = g.loadAndCollectDictFiles,
                            h = g.getPageDictFiles,
                            y = t.ctx.locale || A.ActiveLangEnum.en,
                            w = Kn(t.router.query.sport),
                            _ = (0,
                            I.Hb)(null === t || void 0 === t || null === (i = t.ctx) || void 0 === i || null === (a = i.req) || void 0 === a ? void 0 : a.url),
                            e.next = 10,
                            Promise.all([_ ? null : (0,
                            at.Pf)(), d.default.getInitialProps(t), b(y, ["common", "footer", "errorNotifications"].concat((0,
                            r.Z)((null === (s = t.Component) || void 0 === s ? void 0 : s.langDict) || []))), n.e(3748).then(n.t.bind(n, 33748, 23))]);
                        case 10:
                            return O = e.sent,
                            x = (0,
                            o.Z)(O, 4),
                            S = x[0],
                            k = x[1],
                            j = x[3].getMetaTags,
                            t.ctx.req && (t.ctx.req.__initialProps = {
                                externalAppConfig: S
                            }),
                            C = h(y, (null === (c = t.Component) || void 0 === c ? void 0 : c.langDict) || []),
                            P = j(null === (l = t.ctx.req) || void 0 === l ? void 0 : l.publicDomain, (null === (f = t.Component.metaKey) || void 0 === f ? void 0 : f.replace("%sport%", w).replace("%category%", t.router.query.category).replace("%gameType%", t.router.query.game)) || "common.default"),
                            e.abrupt("return", qn(qn({}, k), {}, {
                                meta: P,
                                generated: Date.now(),
                                externalAppConfig: S,
                                pageDictFiles: C,
                                publicDomain: null === (v = t.ctx.req) || void 0 === v ? void 0 : v.publicDomain,
                                bodyClassNames: null === (p = t.Component) || void 0 === p || null === (m = p.bodyClassNames) || void 0 === m ? void 0 : m.join(" ")
                            }));
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        var Qn = Jn
    },
    40895: function(e, t, n) {
        "use strict";
        n.d(t, {
            dr: function() {
                return o
            },
            P$: function() {
                return i
            },
            Db: function() {
                return m
            },
            uP: function() {
                return g
            },
            _$: function() {
                return r
            },
            QH: function() {
                return s
            },
            a4: function() {
                return d
            },
            S7: function() {
                return a
            },
            U3: function() {
                return l
            }
        });
        var r, o, i, a, s, c, u, l, d, f = n(59499);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    f.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        !function(e) {
            e.Top_Banner = "Top_Banner",
            e.x300x100 = "x300x100",
            e.Top_MPU = "Top_MPU",
            e.Infeed_MPU = "Infeed_MPU",
            e.Infeed_MPU_1 = "Infeed_MPU_1",
            e.Infeed_MPU_2 = "Infeed_MPU_2",
            e.Infeed_MPU_3 = "Infeed_MPU_3",
            e.Infeed_MPU_4 = "Infeed_MPU_4",
            e.Infeed_MPU_Rest = "Infeed_MPU_Rest",
            e.In_Article_MPU = "In_Article_MPU",
            e.Bottom_MPU = "Bottom_MPU",
            e.Sticky_Bottom = "Sticky_Bottom",
            e.Skin = "Skin",
            e.Skin_Refresh = "Skin_Refresh",
            e.Outstream = "Outstream",
            e.fluid = "fluid",
            e.Infeed_300x250 = "Infeed_300x250",
            e.Infeed_468x60 = "Infeed_468x60",
            e.Infeed_Sticky = "Infeed_Sticky"
        }(r || (r = {})),
        function(e) {
            e.newsList = "newsList",
            e.newsListMpu = "newsListMpu",
            e.newsArticle = "newsArticle",
            e.newsArticleListedMpu = "newsArticleListedMpu",
            e.match = "match",
            e.home = "home",
            e.ros = "ros",
            e.nativeBanner = "nativeBanner",
            e.homePageMpu = "homePageMpu",
            e.newsListLeaderBoard = "newsListLeaderBoard",
            e.newsArticleLeaderBoard = "newsArticleLeaderBoard",
            e.newsSticky = "newsSticky"
        }(o || (o = {})),
        function(e) {
            e.Publishers = "publishers"
        }(i || (i = {})),
        function(e) {
            e.LS_Environment = "LS_Environment",
            e.Opera_mini = "Opera_mini",
            e.LS_Position = "LS_Position",
            e.LS_BrandSafe = "LS_BrandSafe",
            e.LS_Site = "LS_Site",
            e.LS_Page = "LS_Page",
            e.LS_Sport = "LS_Sport",
            e.LS_Match = "LS_Match",
            e.LS_Team = "LS_Team",
            e.LS_League = "LS_League",
            e.LS_Country = "LS_Country",
            e.LS_Screen = "LS_Screen",
            e.LS_News_Category = "LS_News_Category",
            e.LS_News_Article_Title = "LS_News_Article_Title",
            e.LS_News_Article_Id = "LS_News_Article_Id",
            e.LS_News_Tags = "LS_News_Tags",
            e.LS_News_Team = "LS_News_Team",
            e.LS_News_League = "LS_News_League",
            e.LS_Age_Gate = "LS_Age_Gate",
            e.LS_TV_Player = "LS_TV_Player",
            e.platform = "platform",
            e.medium = "medium",
            e.lsm_click_id = "lsm_click_id"
        }(a || (a = {})),
        function(e) {
            e.Header = "gad-header",
            e.RightSm = "gad-right-small",
            e.RightMd = "gad-right-medium",
            e.RightLg = "gad-right-large",
            e.Footer = "gad-footer",
            e.Skin = "gad-skin",
            e.SkinRefresh = "gad-skin-refresh",
            e.Outstream = "gad-outstream",
            e.ArticleMpu = "In_Article_MPU",
            e.NativeBanner = "div-gpt-ad-1639568430387-0",
            e.Mpu = "Mev_Mpu",
            e.NewsFeatured = "gad-news-featured",
            e.NewsTopStories = "gad-news-top-stories",
            e.NewsListItem = "gad-news-list-item",
            e.NewsArticleItem = "gad-news-article-item"
        }(s || (s = {})),
        l || (l = {}),
        function(e) {
            e.Infeed_MPU_1 = "1",
            e.Infeed_MPU_2 = "2",
            e.Infeed_MPU_3 = "3",
            e.Infeed_MPU_4 = "4",
            e.Infeed_MPU_Rest = "Rest"
        }(d || (d = {}));
        var m = (c = {},
        (0,
        f.Z)(c, r.Top_Banner, [[970, 90], [728, 90]]),
        (0,
        f.Z)(c, r.x300x100, [[300, 100]]),
        (0,
        f.Z)(c, r.Top_MPU, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU_1, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU_2, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU_3, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU_4, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_MPU_Rest, [[300, 250]]),
        (0,
        f.Z)(c, r.In_Article_MPU, [[300, 250]]),
        (0,
        f.Z)(c, r.Bottom_MPU, [[300, 600], [300, 250]]),
        (0,
        f.Z)(c, r.Sticky_Bottom, [[468, 60], [320, 50]]),
        (0,
        f.Z)(c, r.Skin, [[1, 1]]),
        (0,
        f.Z)(c, r.Skin_Refresh, [[1, 1]]),
        (0,
        f.Z)(c, r.Outstream, [[1, 1]]),
        (0,
        f.Z)(c, r.fluid, [[448, r.fluid]]),
        (0,
        f.Z)(c, r.Infeed_300x250, [[300, 250]]),
        (0,
        f.Z)(c, r.Infeed_468x60, [[468, 60]]),
        (0,
        f.Z)(c, r.Infeed_Sticky, [[468, 60]]),
        c)
          , g = p(p({}, m), {}, (u = {},
        (0,
        f.Z)(u, r.Infeed_468x60, [[320, 50]]),
        (0,
        f.Z)(u, r.Infeed_Sticky, [[320, 50]]),
        u))
    },
    22016: function(e, t, n) {
        "use strict";
        n.d(t, {
            AdUnitPathNameEnum: function() {
                return i.dr
            },
            GoogleADFormatEnum: function() {
                return i._$
            },
            GoogleAdIds: function() {
                return i.QH
            }
        });
        var r = n(74414);
        n.o(r, "AdUnitPathNameEnum") && n.d(t, {
            AdUnitPathNameEnum: function() {
                return r.AdUnitPathNameEnum
            }
        }),
        n.o(r, "GoogleADFormatEnum") && n.d(t, {
            GoogleADFormatEnum: function() {
                return r.GoogleADFormatEnum
            }
        }),
        n.o(r, "GoogleAdIds") && n.d(t, {
            GoogleAdIds: function() {
                return r.GoogleAdIds
            }
        });
        var o = n(84904);
        n.o(o, "AdUnitPathNameEnum") && n.d(t, {
            AdUnitPathNameEnum: function() {
                return o.AdUnitPathNameEnum
            }
        }),
        n.o(o, "GoogleADFormatEnum") && n.d(t, {
            GoogleADFormatEnum: function() {
                return o.GoogleADFormatEnum
            }
        }),
        n.o(o, "GoogleAdIds") && n.d(t, {
            GoogleAdIds: function() {
                return o.GoogleAdIds
            }
        });
        var i = n(40895)
    },
    74414: function(e, t, n) {
        "use strict";
        var r, o = n(38263);
        n.o(o, "AdUnitPathNameEnum") && n.d(t, {
            AdUnitPathNameEnum: function() {
                return o.AdUnitPathNameEnum
            }
        }),
        n.o(o, "GoogleADFormatEnum") && n.d(t, {
            GoogleADFormatEnum: function() {
                return o.GoogleADFormatEnum
            }
        }),
        n.o(o, "GoogleAdIds") && n.d(t, {
            GoogleAdIds: function() {
                return o.GoogleAdIds
            }
        }),
        function(e) {
            e.football = "football",
            e["ice-hockey"] = "hockey",
            e.hockey = "hockey",
            e.basketball = "basketball",
            e.cricket = "cricket"
        }(r || (r = {}))
    },
    84904: function() {},
    46075: function(e, t, n) {
        "use strict";
        n.d(t, {
            apiCache: function() {
                return O
            },
            getApiCacheKey: function() {
                return p
            }
        });
        var r, o = n(59499), i = n(17091), a = n.n(i), s = n(11297), c = n.n(s), u = n(14930), l = n(13930), d = n(42642), f = n(42964), v = n(83454);
        var p = function(e, t) {
            return "".concat(e, "-").concat(t.filter((function(e) {
                return !!e || 0 === e
            }
            )).join("-"))
        }
          , m = (0,
        d.S)() || "true" === v.env.DISABLE_API_CACHE
          , g = (r = {},
        (0,
        o.Z)(r, u.RevalidateInterval.ThirtySeconds, 52428800),
        (0,
        o.Z)(r, u.RevalidateInterval.OneMinute, 52428800),
        (0,
        o.Z)(r, u.RevalidateInterval.FiveMinutes, 52428800),
        (0,
        o.Z)(r, u.RevalidateInterval.OneHour, 157286400),
        (0,
        o.Z)(r, u.RevalidateInterval.OneYear, 104857600),
        (0,
        o.Z)(r, "defaultSize", 52428800),
        r)
          , b = function(e) {
            var t = c()(e);
            return 0 === t ? 1 : t
        }
          , h = function(e) {
            return globalLs.cacheApi || (globalLs.cacheApi = {}),
            globalLs.cacheApi[e] || m || (globalLs.cacheApi[e] = new (a())({
                ttl: 1e3 * e,
                maxSize: g[e] || g.defaultSize,
                sizeCalculation: b
            })),
            globalLs.cacheApi[e]
        }
          , y = function(e) {
            return e.includes("matchesByDateKey") || e.includes("matchesByStageKey") || e.includes("liveMatchesKey") || e.includes("matchDetails") || e.includes("mediaEventsKey") || e.includes("matchDetailsExtendedKey") || e.includes("externalAppConfigKey") ? u.RevalidateInterval.ThirtySeconds : e.includes("sportalArticleKey") || e.includes("sportalArticlesRelatedKey") || e.includes("sportalArticlesByCategoryKey") || e.includes("teamDetailsKey") || e.includes("playerStatsKey") || e.includes("sportalListByIdKey") ? u.RevalidateInterval.OneMinute : e.includes("sportalCategoriesKey") || e.includes("sportalCategoryBySlugKey") || e.includes("sportalCategoryByIdKey") || e.includes("sportalArticleSearchKey") || e.includes("sportalListsKey") ? u.RevalidateInterval.FifteenMinutes : e.includes("metaCacheKey") || e.includes("leftMenuLinksKey") || e.includes("leftMenuLinksByCategoryKey") ? u.RevalidateInterval.OneHour : e.includes("localesKey") ? u.RevalidateInterval.OneYear : u.RevalidateInterval.OneMinute
        }
          , w = {}
          , _ = {}
          , O = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.parseFn
              , o = void 0 === r ? function(e) {
                return e
            }
            : r
              , i = n.seconds
              , a = h(i || y(e));
            return m || n.revalidate || !a.has(e) ? _[e] ? (w[e] || (w[e] = []),
            f.k.messageToFile("CACHE PENDING ".concat(e), {
                level: l.m.trace
            }),
            new Promise((function(t, n) {
                w[e].push({
                    resolve: t,
                    reject: n
                })
            }
            ))) : (_[e] = !0,
            f.f.startBenchmark(e, l.m.info),
            t().then((function(t) {
                var n, r = o(t);
                return f.f.endBenchmark(e, l.m.info),
                null === (n = w[e]) || void 0 === n || n.forEach((function(t) {
                    var n = t.resolve;
                    f.k.messageToFile("CACHE PENDING RESOLVE ".concat(e), {
                        level: l.m.trace
                    }),
                    n(r)
                }
                )),
                m || a.set(e, r),
                r
            }
            )).catch((function(t) {
                var n;
                throw f.f.clearBenchmark(e),
                null === (n = w[e]) || void 0 === n || n.forEach((function(n) {
                    var r = n.reject;
                    f.k.messageToFile("CACHE PENDING REJECT ".concat(e), {
                        level: l.m.trace
                    }),
                    r(t)
                }
                )),
                new Error(t)
            }
            )).finally((function() {
                delete _[e],
                delete w[e]
            }
            ))) : (f.k.messageToFile("CACHE HIT ".concat(e), {
                level: l.m.trace
            }),
            Promise.resolve(a.get(e)))
        }
    },
    86952: function(e, t, n) {
        "use strict";
        n.d(t, {
            B6: function() {
                return v
            },
            Pf: function() {
                return f
            },
            xB: function() {
                return p
            }
        });
        var r = n(11752)
          , o = n.n(r)
          , i = n(42642)
          , a = n(42964)
          , s = n(46075)
          , c = n(44693)
          , u = function(e) {
            return {}
        }
          , l = o()().publicRuntimeConfig
          , d = l.PUBLIC_EXTERNAL_SEGMENT_CONFIG_URL
          , f = function(e) {
            var t = "".concat((0,
            i.S)() ? e || l.PUBLIC_DOMAIN : l.PUBLIC_LOCAL_DOMAIN, "/api/config/");
            return (0,
            s.apiCache)("externalAppConfigKey", (function() {
                return u(t).catch(a.k.error("Error while getting external app config", {
                    url: t
                }, {}))
            }
            ))
        }
          , v = function(e) {
            var t = "".concat((0,
            i.S)() ? e : l.PUBLIC_LOCAL_DOMAIN, "/api/announcements/");
            return (0,
            s.apiCache)((0,
            s.getApiCacheKey)("announcementsConfigKey", []), (function() {
                return u(t).catch(a.k.error("Error while getting announcements config", {
                    url: t
                }, {}))
            }
            ))
        }
          , p = function() {
            return (0,
            s.apiCache)((0,
            s.getApiCacheKey)("segmentConfigKey", []), (function() {
                return u(d).catch(a.k.error("Error while getting segment config", {
                    externalSegmentConfigURL: d
                }, {}))
            }
            ))
        }
    },
    69358: function(e, t, n) {
        "use strict";
        n.d(t, {
            q1: function() {
                return s
            },
            qg: function() {
                return a
            },
            s_: function() {
                return o
            }
        });
        var r = n(42642)
          , o = {
            root: "burger-menu",
            body: "burger-menu-body",
            mask: "burger-menu-mask",
            sections: "burger-menu-sections"
        }
          , i = !1
          , a = function() {
            if (!(0,
            r.S)())
                return 0;
            var e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
          , s = function(e) {
            var t, n, s, c;
            (0,
            r.S)() && (function(e) {
                var t = a();
                document.body.style.overflow = e ? "hidden" : "",
                document.body.style.paddingRight = e ? "".concat(t, "px") : "",
                document.body.style.touchAction = e ? "none" : ""
            }(i = e || !i),
            null === (t = document.getElementById(o.body)) || void 0 === t || null === (n = t.classList) || void 0 === n || n[i ? "add" : "remove"]("isActive"),
            null === (s = document.getElementById(o.mask)) || void 0 === s || null === (c = s.classList) || void 0 === c || c[i ? "add" : "remove"]("isActive"))
        }
    },
    31128: function(e, t, n) {
        "use strict";
        n.d(t, {
            Af: function() {
                return g
            },
            Y: function() {
                return b
            },
            Y8: function() {
                return f
            },
            _D: function() {
                return d
            },
            e7: function() {
                return m
            },
            gS: function() {
                return p
            },
            jF: function() {
                return v
            }
        });
        var r, o = n(16835), i = n(27812), a = n(59499), s = n(14930), c = n(94423), u = (r = {},
        (0,
        a.Z)(r, s.FavouriteTypeEnum.matches, "my_matches"),
        (0,
        a.Z)(r, s.FavouriteTypeEnum.competitions, "ls.myStages"),
        r), l = function(e, t) {
            (0,
            c.qQ)(u[e], JSON.stringify({
                a: t
            }))
        }, d = function(e) {
            var t = e.activeSport
              , n = e.kind
              , r = e.id
              , o = e.favouritesDetails
              , a = e.sortedFavouritesIds
              , s = e.isFavourite
              , d = (0,
            c.$o)(u[n]);
            if (r) {
                var f = "".concat(t, "-").concat(r).concat(o ? "-".concat(o) : "");
                if (d) {
                    var v, p = JSON.parse(d);
                    if (s)
                        p.a = p.a.filter((function(e) {
                            return e !== f
                        }
                        ));
                    else
                        null === (v = p.a) || void 0 === v || v.push(f);
                    l(n, p.a)
                } else
                    l(n, [f])
            }
            if (d && null !== a && void 0 !== a && a.length) {
                var m = JSON.parse(d);
                if (m && m.a) {
                    var g = m.a.filter((function(e) {
                        return e.split("-")[0] !== t
                    }
                    ));
                    l(n, [].concat((0,
                    i.Z)(a), (0,
                    i.Z)(g)))
                }
            }
        }, f = function(e, t) {
            var n = function(e) {
                var t = (0,
                c.$o)(u[e]);
                if (!t)
                    return [];
                try {
                    var n = JSON.parse(t);
                    return n.a ? n.a : []
                } catch (r) {
                    return []
                }
            }(t)
              , r = n.map((function(e) {
                var t = e.split("-");
                return {
                    id: t[1],
                    sport: t[0],
                    utcStartTime: t[2]
                }
            }
            ));
            return t === s.FavouriteTypeEnum.matches ? r.filter((function(t) {
                return t.sport === e && t.id && t.utcStartTime
            }
            )).sort((function(e, t) {
                return Number(e.utcStartTime) - Number(t.utcStartTime)
            }
            )).map((function(e) {
                return e.id
            }
            )) : r.filter((function(t) {
                return t.sport === e && t.id
            }
            )).map((function(e) {
                return e.id
            }
            ))
        }, v = function() {
            return Boolean((0,
            c.$o)("ls.isDesktop"))
        }, p = function() {
            (0,
            c.qQ)("ls.isDesktop", v() ? "" : "true")
        }, m = function(e, t) {
            return e.length > t.length
        }, g = function(e, t) {
            var n = t.map((function(e) {
                return String(null === e || void 0 === e ? void 0 : e.stageId)
            }
            ))
              , r = (0,
            c.$o)(u[s.FavouriteTypeEnum.competitions]);
            if (r) {
                var i = JSON.parse(r);
                if (i && i.a) {
                    var a = i.a.filter((function(t) {
                        var r = t.split("-")
                          , i = (0,
                        o.Z)(r, 2)
                          , a = i[0]
                          , s = i[1];
                        return e === a ? e === a && n.includes(s) : e && s
                    }
                    ));
                    (0,
                    c.qQ)(u[s.FavouriteTypeEnum.competitions], JSON.stringify({
                        a: a
                    }))
                }
            }
        }, b = function() {
            try {
                var e = (0,
                c.$o)("ls.announcements-closed") || "";
                return JSON.parse(e)
            } catch (t) {}
            return []
        }
    },
    75698: function(e, t, n) {
        "use strict";
        n.d(t, {
            bj: function() {
                return u
            },
            wT: function() {
                return c
            }
        });
        var r = n(59499)
          , o = n(73997);
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var s = [{
            placeholder: /%sport%/g,
            value: "activeSport"
        }, {
            placeholder: /%Sport%/g,
            value: "activeSport",
            isCapitalized: !0
        }, {
            placeholder: /%team1%/g,
            value: "team1"
        }, {
            placeholder: /%Team1%/g,
            value: "team1",
            isCapitalized: !0
        }, {
            placeholder: /%team2%/g,
            value: "team2"
        }, {
            placeholder: /%Team2%/g,
            value: "team2",
            isCapitalized: !0
        }, {
            placeholder: /%categoryDate%/g,
            value: "category"
        }, {
            placeholder: /%CategoryDate%/g,
            value: "category",
            isCapitalized: !0
        }, {
            placeholder: /%stage%/g,
            value: "stage"
        }, {
            placeholder: /%Stage%/g,
            value: "stage",
            isCapitalized: !0
        }, {
            placeholder: /%SubPageName%/g,
            value: "subPageName"
        }, {
            placeholder: /%lang%/g,
            value: "lang"
        }, {
            placeholder: /%TagName%/g,
            value: "tagName",
            isCapitalized: !0
        }, {
            placeholder: /%tagName%/g,
            value: "tagName"
        }, {
            placeholder: /%gameType%/g,
            value: "tagName"
        }]
          , c = function(e, t) {
            return Object.keys(e).reduce((function(e, n) {
                var i = e[n]
                  , c = "string" === typeof i ? s.reduce((function(e, n) {
                    var r = n.isCapitalized ? (0,
                    o.fm)(t[n.value]) : t[n.value];
                    return e.replace(n.placeholder, r)
                }
                ), i) : i;
                return a(a({}, e), {}, (0,
                r.Z)({}, n, c))
            }
            ), e)
        }
          , u = function(e) {
            var t = /(\/_next\/data\/[^\/]+)/gm
              , n = e;
            return RegExp(t).test(n) && (n = e.replace(t, "").replace(".json", "")),
            "/" !== n[n.length - 1] && (n = "".concat(n, "/")),
            n.split("?")[0]
        }
    },
    36420: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return r
            },
            j: function() {
                return o
            }
        });
        var r = function(e, t) {
            var n = new RegExp("(https://.*livescore.+/.{2}/)(news)","g");
            return t && e.length ? e.replace(n, "$1native/news") : e
        }
          , o = function(e, t) {
            var n, r, o, i = JSON.stringify({
                type: e,
                payload: t
            });
            ((null === (n = window) || void 0 === n || null === (r = n.webkit) || void 0 === r || null === (o = r.messageHandlers) || void 0 === o ? void 0 : o.native) || window).postMessage(i, "*")
        }
    },
    57252: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return r
            }
        });
        var r = function(e) {
            if (e)
                try {
                    return new URL(e).origin
                } catch (t) {}
            return ""
        }
    },
    83454: function(e, t, n) {
        "use strict";
        var r, o;
        e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" === typeof (null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(77663)
    },
    6840: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(943)
        }
        ])
    },
    930: function(e) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    41574: function() {},
    38379: function(e) {
        e.exports = {
            btn: "md"
        }
    },
    68393: function(e) {
        e.exports = {
            customLink: "yj",
            pointer: "zj",
            common: "Aj"
        }
    },
    43960: function(e) {
        e.exports = {
            loginButtons: "ph",
            loggedInIcon: "qh"
        }
    },
    83207: function(e) {
        e.exports = {
            adsHolder: "vh"
        }
    },
    99019: function(e) {
        e.exports = {
            headerAdsHolder: "Qe"
        }
    },
    61158: function(e) {
        e.exports = {
            skinAdHolder: "Ke"
        }
    },
    10099: function(e) {
        e.exports = {
            bottomMenuWrapper: "ye",
            itemLink: "ze",
            logo: "Ae",
            isActive: "Be"
        }
    },
    94125: function(e) {
        e.exports = {
            mask: "jb",
            menu: "kb",
            amp: "lb",
            sections: "mb",
            promo: "nb",
            logo: "ob",
            imgWrapper: "pb",
            partnerWrapper: "qb",
            link: "rb",
            loggedInIcon: "sb",
            close: "tb",
            logoText: "ub",
            download: "vb",
            banner: "wb",
            loginButtons: "xb"
        }
    },
    27551: function(e) {
        e.exports = {
            "post-consent-ui": "kl",
            consentDialog: "ll",
            popupOverlay: "ml",
            consentPopup: "nl",
            "manage-settings-link": "ol"
        }
    },
    88573: function(e) {
        e.exports = {
            overlay: "sl",
            outer: "tl",
            inner: "ul",
            close: "vl"
        }
    },
    91946: function(e) {
        e.exports = {
            contentStickyFooter: "Oe"
        }
    },
    50686: function(e) {
        e.exports = {
            pContainer: "a"
        }
    },
    59229: function(e) {
        e.exports = {
            wrapper: "Dh",
            h1: "Eh",
            h2: "Fh",
            meta: "Gh",
            copyright: "Hh",
            desktopView: "Ih",
            desktopViewButton: "Jh"
        }
    },
    56693: function(e) {
        e.exports = {
            linkItem: "pl",
            legal: "ql",
            footerLink: "rl"
        }
    },
    12392: function(e) {
        e.exports = {
            fullWidth: "ve",
            adsWidthWrapper: "we",
            bottomAdsMargin: "xe"
        }
    },
    74130: function(e) {
        e.exports = {
            publiciLabel: "lh",
            isBlackBackground: "mh",
            isAdLabelSideways: "nh",
            isRotated: "oh"
        }
    },
    37032: function(e) {
        e.exports = {
            logo: "Kl"
        }
    },
    4078: function(e) {
        e.exports = {
            wrapper: "Pe"
        }
    },
    96037: function(e) {
        e.exports = {
            notification: "wh"
        }
    },
    2076: function(e) {
        e.exports = {
            logo: "Ce",
            wrapper: "De",
            brand: "Ee",
            itemLink: "Fe",
            isActive: "Ge",
            burgerMenu: "He",
            downloadLink: "Ie",
            desktopItems: "Je"
        }
    },
    93224: function(e) {
        e.exports = {
            outerWrapper: "P",
            innerWrapper: "Q",
            articleLayout: "R",
            columnsContainer: "S",
            topMenuWrapper: "T",
            innerLeftColumn: "U",
            rightColumnWrapper: "V",
            innerRightColumnOffset: "W",
            innerCenterColumn: "X",
            twoColumn: "Y",
            innerRightColumn: "Z",
            ContentRightAds: "aa"
        }
    },
    77663: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, n, r = e.exports = {};
                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function i() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === o || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" === typeof setTimeout ? setTimeout : o
                        } catch (e) {
                            t = o
                        }
                        try {
                            n = "function" === typeof clearTimeout ? clearTimeout : i
                        } catch (e) {
                            n = i
                        }
                    }();
                    var s, c = [], u = !1, l = -1;
                    function d() {
                        u && s && (u = !1,
                        s.length ? c = s.concat(c) : l = -1,
                        c.length && f())
                    }
                    function f() {
                        if (!u) {
                            var e = a(d);
                            u = !0;
                            for (var t = c.length; t; ) {
                                for (s = c,
                                c = []; ++l < t; )
                                    s && s[l].run();
                                l = -1,
                                t = c.length
                            }
                            s = null,
                            u = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function v(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    r.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        c.push(new v(e,t)),
                        1 !== c.length || u || a(f)
                    }
                    ,
                    v.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = p,
                    r.addListener = p,
                    r.once = p,
                    r.off = p,
                    r.removeListener = p,
                    r.removeAllListeners = p,
                    r.emit = p,
                    r.prependListener = p,
                    r.prependOnceListener = p,
                    r.listeners = function(e) {
                        return []
                    }
                    ,
                    r.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(e) {
                var o = n[e];
                if (void 0 !== o)
                    return o.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e](i, i.exports, r),
                    a = !1
                } finally {
                    a && delete n[e]
                }
                return i.exports
            }
            r.ab = "//";
            var o = r(229);
            e.exports = o
        }()
    },
    5152: function(e, t, n) {
        e.exports = n(91897)
    },
    9008: function(e, t, n) {
        e.exports = n(3876)
    },
    25675: function(e, t, n) {
        e.exports = n(62747)
    },
    41664: function(e, t, n) {
        e.exports = n(39601)
    },
    11163: function(e, t, n) {
        e.exports = n(47422)
    },
    4298: function(e, t, n) {
        e.exports = n(82710)
    },
    17091: function() {},
    11297: function() {},
    6278: function() {},
    33525: function() {},
    38263: function() {},
    8322: function(e) {
        e.exports = function(e) {
            "use strict";
            var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            function n(e, t) {
                var n = e[0]
                  , r = e[1]
                  , o = e[2]
                  , i = e[3];
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0,
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0,
                r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0,
                r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0,
                r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0,
                r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0,
                e[0] = n + e[0] | 0,
                e[1] = r + e[1] | 0,
                e[2] = o + e[2] | 0,
                e[3] = i + e[3] | 0
            }
            function r(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4)
                    n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return n
            }
            function o(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4)
                    n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                return n
            }
            function i(e) {
                var t, o, i, a, s, c, u = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= u; t += 64)
                    n(l, r(e.substring(t - 64, t)));
                for (o = (e = e.substring(t - 64)).length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                t = 0; t < o; t += 1)
                    i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (i[t >> 2] |= 128 << (t % 4 << 3),
                t > 55)
                    for (n(l, i),
                    t = 0; t < 16; t += 1)
                        i[t] = 0;
                return a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/),
                s = parseInt(a[2], 16),
                c = parseInt(a[1], 16) || 0,
                i[14] = s,
                i[15] = c,
                n(l, i),
                l
            }
            function a(e) {
                var t, r, i, a, s, c, u = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= u; t += 64)
                    n(l, o(e.subarray(t - 64, t)));
                for (r = (e = t - 64 < u ? e.subarray(t - 64) : new Uint8Array(0)).length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                t = 0; t < r; t += 1)
                    i[t >> 2] |= e[t] << (t % 4 << 3);
                if (i[t >> 2] |= 128 << (t % 4 << 3),
                t > 55)
                    for (n(l, i),
                    t = 0; t < 16; t += 1)
                        i[t] = 0;
                return a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/),
                s = parseInt(a[2], 16),
                c = parseInt(a[1], 16) || 0,
                i[14] = s,
                i[15] = c,
                n(l, i),
                l
            }
            function s(e) {
                var n, r = "";
                for (n = 0; n < 4; n += 1)
                    r += t[e >> 8 * n + 4 & 15] + t[e >> 8 * n & 15];
                return r
            }
            function c(e) {
                var t;
                for (t = 0; t < e.length; t += 1)
                    e[t] = s(e[t]);
                return e.join("")
            }
            function u(e) {
                return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
                e
            }
            function l(e, t) {
                var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                for (n = 0; n < r; n += 1)
                    i[n] = e.charCodeAt(n);
                return t ? i : o
            }
            function d(e) {
                return String.fromCharCode.apply(null, new Uint8Array(e))
            }
            function f(e, t, n) {
                var r = new Uint8Array(e.byteLength + t.byteLength);
                return r.set(new Uint8Array(e)),
                r.set(new Uint8Array(t), e.byteLength),
                n ? r : r.buffer
            }
            function v(e) {
                var t, n = [], r = e.length;
                for (t = 0; t < r - 1; t += 2)
                    n.push(parseInt(e.substr(t, 2), 16));
                return String.fromCharCode.apply(String, n)
            }
            function p() {
                this.reset()
            }
            return c(i("hello")),
            "undefined" === typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                function t(e, t) {
                    return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                }
                ArrayBuffer.prototype.slice = function(n, r) {
                    var o, i, a, s, c = this.byteLength, u = t(n, c), l = c;
                    return r !== e && (l = t(r, c)),
                    u > l ? new ArrayBuffer(0) : (o = l - u,
                    i = new ArrayBuffer(o),
                    a = new Uint8Array(i),
                    s = new Uint8Array(this,u,o),
                    a.set(s),
                    i)
                }
            }(),
            p.prototype.append = function(e) {
                return this.appendBinary(u(e)),
                this
            }
            ,
            p.prototype.appendBinary = function(e) {
                this._buff += e,
                this._length += e.length;
                var t, o = this._buff.length;
                for (t = 64; t <= o; t += 64)
                    n(this._hash, r(this._buff.substring(t - 64, t)));
                return this._buff = this._buff.substring(t - 64),
                this
            }
            ,
            p.prototype.end = function(e) {
                var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1)
                    i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                return this._finish(i, o),
                n = c(this._hash),
                e && (n = v(n)),
                this.reset(),
                n
            }
            ,
            p.prototype.reset = function() {
                return this._buff = "",
                this._length = 0,
                this._hash = [1732584193, -271733879, -1732584194, 271733878],
                this
            }
            ,
            p.prototype.getState = function() {
                return {
                    buff: this._buff,
                    length: this._length,
                    hash: this._hash.slice()
                }
            }
            ,
            p.prototype.setState = function(e) {
                return this._buff = e.buff,
                this._length = e.length,
                this._hash = e.hash,
                this
            }
            ,
            p.prototype.destroy = function() {
                delete this._hash,
                delete this._buff,
                delete this._length
            }
            ,
            p.prototype._finish = function(e, t) {
                var r, o, i, a = t;
                if (e[a >> 2] |= 128 << (a % 4 << 3),
                a > 55)
                    for (n(this._hash, e),
                    a = 0; a < 16; a += 1)
                        e[a] = 0;
                r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/),
                o = parseInt(r[2], 16),
                i = parseInt(r[1], 16) || 0,
                e[14] = o,
                e[15] = i,
                n(this._hash, e)
            }
            ,
            p.hash = function(e, t) {
                return p.hashBinary(u(e), t)
            }
            ,
            p.hashBinary = function(e, t) {
                var n = c(i(e));
                return t ? v(n) : n
            }
            ,
            p.ArrayBuffer = function() {
                this.reset()
            }
            ,
            p.ArrayBuffer.prototype.append = function(e) {
                var t, r = f(this._buff.buffer, e, !0), i = r.length;
                for (this._length += e.byteLength,
                t = 64; t <= i; t += 64)
                    n(this._hash, o(r.subarray(t - 64, t)));
                return this._buff = t - 64 < i ? new Uint8Array(r.buffer.slice(t - 64)) : new Uint8Array(0),
                this
            }
            ,
            p.ArrayBuffer.prototype.end = function(e) {
                var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1)
                    i[t >> 2] |= r[t] << (t % 4 << 3);
                return this._finish(i, o),
                n = c(this._hash),
                e && (n = v(n)),
                this.reset(),
                n
            }
            ,
            p.ArrayBuffer.prototype.reset = function() {
                return this._buff = new Uint8Array(0),
                this._length = 0,
                this._hash = [1732584193, -271733879, -1732584194, 271733878],
                this
            }
            ,
            p.ArrayBuffer.prototype.getState = function() {
                var e = p.prototype.getState.call(this);
                return e.buff = d(e.buff),
                e
            }
            ,
            p.ArrayBuffer.prototype.setState = function(e) {
                return e.buff = l(e.buff, !0),
                p.prototype.setState.call(this, e)
            }
            ,
            p.ArrayBuffer.prototype.destroy = p.prototype.destroy,
            p.ArrayBuffer.prototype._finish = p.prototype._finish,
            p.ArrayBuffer.hash = function(e, t) {
                var n = c(a(new Uint8Array(e)));
                return t ? v(n) : n
            }
            ,
            p
        }()
    },
    53250: function(e, t, n) {
        "use strict";
        var r = n(67294);
        var o = "function" === typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
        }
          , i = r.useState
          , a = r.useEffect
          , s = r.useLayoutEffect
          , c = r.useDebugValue;
        function u(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !o(e, n)
            } catch (r) {
                return !0
            }
        }
        var l = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(e, t) {
            return t()
        }
        : function(e, t) {
            var n = t()
              , r = i({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            })
              , o = r[0].inst
              , l = r[1];
            return s((function() {
                o.value = n,
                o.getSnapshot = t,
                u(o) && l({
                    inst: o
                })
            }
            ), [e, n, t]),
            a((function() {
                return u(o) && l({
                    inst: o
                }),
                e((function() {
                    u(o) && l({
                        inst: o
                    })
                }
                ))
            }
            ), [e]),
            c(n),
            n
        }
        ;
        t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
    },
    61688: function(e, t, n) {
        "use strict";
        e.exports = n(53250)
    },
    59108: function(e, t, n) {
        "use strict";
        n.d(t, {
            v4: function() {
                return a
            }
        });
        for (var r, o = 256, i = []; o--; )
            i[o] = (o + 256).toString(16).substring(1);
        function a() {
            var e, t = 0, n = "";
            if (!r || o + 16 > 256) {
                for (r = Array(t = 256); t--; )
                    r[t] = 256 * Math.random() | 0;
                t = o = 0
            }
            for (; t < 16; t++)
                e = r[o + t],
                n += 6 == t ? i[15 & e | 64] : 8 == t ? i[63 & e | 128] : i[e],
                1 & t && t > 1 && t < 11 && (n += "-");
            return o++,
            n
        }
    },
    52587: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    50029: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , c = s.value
            } catch (u) {
                return void n(u)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                        r(a, o, i, s, c, "next", e)
                    }
                    function c(e) {
                        r(a, o, i, s, c, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    92777: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    82262: function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function o(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    59499: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    4730: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    90607: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    16835: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2937);
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (c) {
                        s = !0,
                        o = c
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || (0,
            r.Z)(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    27812: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(52587);
        var o = n(2937);
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    r.Z)(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || (0,
            o.Z)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    2937: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(52587);
        function o(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return (0,
                    r.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                r.Z)(e, t) : void 0
            }
        }
    },
    8100: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return K
            },
            kY: function() {
                return q
            }
        });
        var r = n(67294);
        function o(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
        function i(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        var a, s = function() {}, c = s(), u = Object, l = function(e) {
            return e === c
        }, d = function(e) {
            return "function" == typeof e
        }, f = function(e, t) {
            return u.assign({}, e, t)
        }, v = "undefined", p = function() {
            return typeof window != v
        }, m = new WeakMap, g = 0, b = function(e) {
            var t, n, r = typeof e, o = e && e.constructor, i = o == Date;
            if (u(e) !== e || i || o == RegExp)
                t = i ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
            else {
                if (t = m.get(e))
                    return t;
                if (t = ++g + "~",
                m.set(e, t),
                o == Array) {
                    for (t = "@",
                    n = 0; n < e.length; n++)
                        t += b(e[n]) + ",";
                    m.set(e, t)
                }
                if (o == u) {
                    t = "#";
                    for (var a = u.keys(e).sort(); !l(n = a.pop()); )
                        l(e[n]) || (t += n + ":" + b(e[n]) + ",");
                    m.set(e, t)
                }
            }
            return t
        }, h = !0, y = p(), w = typeof document != v, _ = y && window.addEventListener ? window.addEventListener.bind(window) : s, O = w ? document.addEventListener.bind(document) : s, x = y && window.removeEventListener ? window.removeEventListener.bind(window) : s, S = w ? document.removeEventListener.bind(document) : s, k = {
            isOnline: function() {
                return h
            },
            isVisible: function() {
                var e = w && document.visibilityState;
                return l(e) || "hidden" !== e
            }
        }, j = {
            initFocus: function(e) {
                return O("visibilitychange", e),
                _("focus", e),
                function() {
                    S("visibilitychange", e),
                    x("focus", e)
                }
            },
            initReconnect: function(e) {
                var t = function() {
                    h = !0,
                    e()
                }
                  , n = function() {
                    h = !1
                };
                return _("online", t),
                _("offline", n),
                function() {
                    x("online", t),
                    x("offline", n)
                }
            }
        }, C = !p() || "Deno"in window, P = function(e) {
            return p() && typeof window.requestAnimationFrame != v ? window.requestAnimationFrame(e) : setTimeout(e, 1)
        }, E = C ? r.useEffect : r.useLayoutEffect, A = "undefined" !== typeof navigator && navigator.connection, I = !C && A && (["slow-2g", "2g"].includes(A.effectiveType) || A.saveData), D = function(e) {
            if (d(e))
                try {
                    e = e()
                } catch (n) {
                    e = ""
                }
            var t = [].concat(e);
            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? b(e) : "", t, e ? "$swr$" + e : ""]
        }, L = new WeakMap, N = function(e, t, n, r, o, i, a) {
            void 0 === a && (a = !0);
            var s = L.get(e)
              , c = s[0]
              , u = s[1]
              , l = s[3]
              , d = c[t]
              , f = u[t];
            if (a && f)
                for (var v = 0; v < f.length; ++v)
                    f[v](n, r, o);
            return i && (delete l[t],
            d && d[0]) ? d[0](2).then((function() {
                return e.get(t)
            }
            )) : e.get(t)
        }, T = 0, M = function() {
            return ++T
        }, R = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return o(void 0, void 0, void 0, (function() {
                var t, n, r, o, a, s, u, v, p, m, g, b, h, y, w, _, O, x, S, k, j;
                return i(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        if (t = e[0],
                        n = e[1],
                        r = e[2],
                        o = e[3],
                        s = !!l((a = "boolean" === typeof o ? {
                            revalidate: o
                        } : o || {}).populateCache) || a.populateCache,
                        u = !1 !== a.revalidate,
                        v = !1 !== a.rollbackOnError,
                        p = a.optimisticData,
                        m = D(n),
                        g = m[0],
                        b = m[2],
                        !g)
                            return [2];
                        if (h = L.get(t),
                        y = h[2],
                        e.length < 3)
                            return [2, N(t, g, t.get(g), c, c, u, !0)];
                        if (w = r,
                        O = M(),
                        y[g] = [O, 0],
                        x = !l(p),
                        S = t.get(g),
                        x && (k = d(p) ? p(S) : p,
                        t.set(g, k),
                        N(t, g, k)),
                        d(w))
                            try {
                                w = w(t.get(g))
                            } catch (C) {
                                _ = C
                            }
                        return w && d(w.then) ? [4, w.catch((function(e) {
                            _ = e
                        }
                        ))] : [3, 2];
                    case 1:
                        if (w = i.sent(),
                        O !== y[g][0]) {
                            if (_)
                                throw _;
                            return [2, w]
                        }
                        _ && x && v && (s = !0,
                        w = S,
                        t.set(g, S)),
                        i.label = 2;
                    case 2:
                        return s && (_ || (d(s) && (w = s(w, S)),
                        t.set(g, w)),
                        t.set(b, f(t.get(b), {
                            error: _
                        }))),
                        y[g][1] = M(),
                        [4, N(t, g, w, _, c, u, !!s)];
                    case 3:
                        if (j = i.sent(),
                        _)
                            throw _;
                        return [2, s ? j : w]
                    }
                }
                ))
            }
            ))
        }, U = function(e, t) {
            for (var n in e)
                e[n][0] && e[n][0](t)
        }, B = function(e, t) {
            if (!L.has(e)) {
                var n = f(j, t)
                  , r = {}
                  , o = R.bind(c, e)
                  , i = s;
                if (L.set(e, [r, {}, {}, {}, o]),
                !C) {
                    var a = n.initFocus(setTimeout.bind(c, U.bind(c, r, 0)))
                      , u = n.initReconnect(setTimeout.bind(c, U.bind(c, r, 1)));
                    i = function() {
                        a && a(),
                        u && u(),
                        L.delete(e)
                    }
                }
                return [e, o, i]
            }
            return [e, L.get(e)[4]]
        }, Z = B(new Map), F = Z[0], G = Z[1], H = f({
            onLoadingSlow: s,
            onSuccess: s,
            onError: s,
            onErrorRetry: function(e, t, n, r, o) {
                var i = n.errorRetryCount
                  , a = o.retryCount
                  , s = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * n.errorRetryInterval;
                !l(i) && a > i || setTimeout(r, s, o)
            },
            onDiscarded: s,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: I ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: I ? 5e3 : 3e3,
            compare: function(e, t) {
                return b(e) == b(t)
            },
            isPaused: function() {
                return !1
            },
            cache: F,
            mutate: G,
            fallback: {}
        }, k), z = function(e, t) {
            var n = f(e, t);
            if (t) {
                var r = e.use
                  , o = e.fallback
                  , i = t.use
                  , a = t.fallback;
                r && i && (n.use = r.concat(i)),
                o && a && (n.fallback = f(o, a))
            }
            return n
        }, V = (0,
        r.createContext)({}), W = function(e) {
            return d(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
        }, q = function() {
            return f(H, (0,
            r.useContext)(V))
        }, $ = function(e, t, n) {
            var r = t[e] || (t[e] = []);
            return r.push(n),
            function() {
                var e = r.indexOf(n);
                e >= 0 && (r[e] = r[r.length - 1],
                r.pop())
            }
        }, Y = {
            dedupe: !0
        }, K = (u.defineProperty((function(e) {
            var t = e.value
              , n = z((0,
            r.useContext)(V), t)
              , o = t && t.provider
              , i = (0,
            r.useState)((function() {
                return o ? B(o(n.cache || F), t) : c
            }
            ))[0];
            return i && (n.cache = i[0],
            n.mutate = i[1]),
            E((function() {
                return i ? i[2] : c
            }
            ), []),
            (0,
            r.createElement)(V.Provider, f(e, {
                value: n
            }))
        }
        ), "default", {
            value: H
        }),
        a = function(e, t, n) {
            var a = n.cache
              , s = n.compare
              , u = n.fallbackData
              , v = n.suspense
              , p = n.revalidateOnMount
              , m = n.refreshInterval
              , g = n.refreshWhenHidden
              , b = n.refreshWhenOffline
              , h = L.get(a)
              , y = h[0]
              , w = h[1]
              , _ = h[2]
              , O = h[3]
              , x = D(e)
              , S = x[0]
              , k = x[1]
              , j = x[2]
              , A = (0,
            r.useRef)(!1)
              , I = (0,
            r.useRef)(!1)
              , T = (0,
            r.useRef)(S)
              , U = (0,
            r.useRef)(t)
              , B = (0,
            r.useRef)(n)
              , Z = function() {
                return B.current
            }
              , F = function() {
                return Z().isVisible() && Z().isOnline()
            }
              , G = function(e) {
                return a.set(j, f(a.get(j), e))
            }
              , H = a.get(S)
              , z = l(u) ? n.fallback[S] : u
              , V = l(H) ? z : H
              , W = a.get(j) || {}
              , q = W.error
              , K = !A.current
              , J = function() {
                return K && !l(p) ? p : !Z().isPaused() && (v ? !l(V) && n.revalidateIfStale : l(V) || n.revalidateIfStale)
            }
              , Q = !(!S || !t) && (!!W.isValidating || K && J())
              , X = function(e, t) {
                var n = (0,
                r.useState)({})[1]
                  , o = (0,
                r.useRef)(e)
                  , i = (0,
                r.useRef)({
                    data: !1,
                    error: !1,
                    isValidating: !1
                })
                  , a = (0,
                r.useCallback)((function(e) {
                    var r = !1
                      , a = o.current;
                    for (var s in e) {
                        var c = s;
                        a[c] !== e[c] && (a[c] = e[c],
                        i.current[c] && (r = !0))
                    }
                    r && !t.current && n({})
                }
                ), []);
                return E((function() {
                    o.current = e
                }
                )),
                [o, i.current, a]
            }({
                data: V,
                error: q,
                isValidating: Q
            }, I)
              , ee = X[0]
              , te = X[1]
              , ne = X[2]
              , re = (0,
            r.useCallback)((function(e) {
                return o(void 0, void 0, void 0, (function() {
                    var t, r, o, u, f, v, p, m, g, b, h, y, w;
                    return i(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if (t = U.current,
                            !S || !t || I.current || Z().isPaused())
                                return [2, !1];
                            u = !0,
                            f = e || {},
                            v = !O[S] || !f.dedupe,
                            p = function() {
                                return !I.current && S === T.current && A.current
                            }
                            ,
                            m = function() {
                                var e = O[S];
                                e && e[1] === o && delete O[S]
                            }
                            ,
                            g = {
                                isValidating: !1
                            },
                            b = function() {
                                G({
                                    isValidating: !1
                                }),
                                p() && ne(g)
                            }
                            ,
                            G({
                                isValidating: !0
                            }),
                            ne({
                                isValidating: !0
                            }),
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]),
                            v && (N(a, S, ee.current.data, ee.current.error, !0),
                            n.loadingTimeout && !a.get(S) && setTimeout((function() {
                                u && p() && Z().onLoadingSlow(S, n)
                            }
                            ), n.loadingTimeout),
                            O[S] = [t.apply(void 0, k), M()]),
                            w = O[S],
                            r = w[0],
                            o = w[1],
                            [4, r];
                        case 2:
                            return r = i.sent(),
                            v && setTimeout(m, n.dedupingInterval),
                            O[S] && O[S][1] === o ? (G({
                                error: c
                            }),
                            g.error = c,
                            h = _[S],
                            !l(h) && (o <= h[0] || o <= h[1] || 0 === h[1]) ? (b(),
                            v && p() && Z().onDiscarded(S),
                            [2, !1]) : (s(ee.current.data, r) ? g.data = ee.current.data : g.data = r,
                            s(a.get(S), r) || a.set(S, r),
                            v && p() && Z().onSuccess(r, S, n),
                            [3, 4])) : (v && p() && Z().onDiscarded(S),
                            [2, !1]);
                        case 3:
                            return y = i.sent(),
                            m(),
                            Z().isPaused() || (G({
                                error: y
                            }),
                            g.error = y,
                            v && p() && (Z().onError(y, S, n),
                            ("boolean" === typeof n.shouldRetryOnError && n.shouldRetryOnError || d(n.shouldRetryOnError) && n.shouldRetryOnError(y)) && F() && Z().onErrorRetry(y, S, n, re, {
                                retryCount: (f.retryCount || 0) + 1,
                                dedupe: !0
                            }))),
                            [3, 4];
                        case 4:
                            return u = !1,
                            b(),
                            p() && v && N(a, S, g.data, g.error, !1),
                            [2, !0]
                        }
                    }
                    ))
                }
                ))
            }
            ), [S])
              , oe = (0,
            r.useCallback)(R.bind(c, a, (function() {
                return T.current
            }
            )), []);
            if (E((function() {
                U.current = t,
                B.current = n
            }
            )),
            E((function() {
                if (S) {
                    var e = S !== T.current
                      , t = re.bind(c, Y)
                      , n = 0
                      , r = $(S, w, (function(e, t, n) {
                        ne(f({
                            error: t,
                            isValidating: n
                        }, s(ee.current.data, e) ? c : {
                            data: e
                        }))
                    }
                    ))
                      , o = $(S, y, (function(e) {
                        if (0 == e) {
                            var r = Date.now();
                            Z().revalidateOnFocus && r > n && F() && (n = r + Z().focusThrottleInterval,
                            t())
                        } else if (1 == e)
                            Z().revalidateOnReconnect && F() && t();
                        else if (2 == e)
                            return re()
                    }
                    ));
                    return I.current = !1,
                    T.current = S,
                    A.current = !0,
                    e && ne({
                        data: V,
                        error: q,
                        isValidating: Q
                    }),
                    J() && (l(V) || C ? t() : P(t)),
                    function() {
                        I.current = !0,
                        r(),
                        o()
                    }
                }
            }
            ), [S, re]),
            E((function() {
                var e;
                function t() {
                    var t = d(m) ? m(V) : m;
                    t && -1 !== e && (e = setTimeout(n, t))
                }
                function n() {
                    ee.current.error || !g && !Z().isVisible() || !b && !Z().isOnline() ? t() : re(Y).then(t)
                }
                return t(),
                function() {
                    e && (clearTimeout(e),
                    e = -1)
                }
            }
            ), [m, g, b, re]),
            (0,
            r.useDebugValue)(V),
            v && l(V) && S)
                throw U.current = t,
                B.current = n,
                I.current = !1,
                l(q) ? re(Y) : q;
            return {
                mutate: oe,
                get data() {
                    return te.data = !0,
                    V
                },
                get error() {
                    return te.error = !0,
                    q
                },
                get isValidating() {
                    return te.isValidating = !0,
                    Q
                }
            }
        }
        ,
        function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = q()
              , r = W(e)
              , o = r[0]
              , i = r[1]
              , s = r[2]
              , c = z(n, s)
              , u = a
              , l = c.use;
            if (l)
                for (var d = l.length; d-- > 0; )
                    u = l[d](u);
            return u(o, i || c.fetcher, c)
        }
        )
    },
    3900: function(e) {
        "use strict";
        e.exports = JSON.parse('{"H":{"desktop":{"ros":"/21707781519/ls_desktop/ls_desktop_ros","home":"/21707781519/ls_desktop/ls_desktop_home","match":"/21707781519/ls_desktop/ls_desktop_match","newsList":"/21707781519/ls_desktop/ls_desktop_news_list","newsListMpu":"/21707781519/ls_desktop/ls_desktop_news_list/LiveScore_Desktop_News_List_Infeed_MPU_","newsArticle":"/21707781519/ls_desktop/ls_desktop_news_article","newsArticleListedMpu":"/21707781519/ls_desktop/ls_desktop_news_article/LiveScore_Desktop_News_Article_Infeed_MPU_","nativeBanner":"/21707781519/ls_desktop/LiveScore_Desktop_Native","homePageMpu":"/21707781519/ls_desktop/ls_desktop_home/Desktop_Homepage_MEV_MPU","newsListLeaderBoard":"/21707781519/ls_desktop/ls_desktop_news_list/LiveScore_Desktop_News_List_Infeed_Sticky","newsArticleLeaderBoard":"/21707781519/ls_desktop/ls_desktop_news_article/LiveScore_Desktop_News_Article_Infeed_Sticky"},"mobile":{"ros":"/21707781519/ls-mweb/ls_mweb_ros","home":"/21707781519/ls-mweb/ls_mweb_hp","match":"/21707781519/ls-mweb/ls_mweb_match","newsList":"/21707781519/ls-mweb/ls_news_list","newsListMpu":"/21707781519/ls-mweb/ls_news_list/LiveScore_Mweb_News_List_Infeed_MPU_","newsArticle":"/21707781519/ls-mweb/ls-articles-mweb","newsArticleListedMpu":"/21707781519/ls-mweb/ls-articles-mweb/LiveScore_Mweb_News_Article_Infeed_MPU_","nativeBanner":"/21707781519/ls-mweb/LiveScore_Mweb_Native","homePageMpu":"/21707781519/ls-mweb/ls_mweb_hp/Mweb_Homepage_MEV_MPU","newsListLeaderBoard":"/21707781519/ls-mweb/ls_news_list/LiveScore_Mweb_News_List_Infeed_Sticky","newsArticleLeaderBoard":"/21707781519/ls-mweb/ls-articles-mweb/LiveScore_Mweb_News_Article_Infeed_Sticky"},"native":{"newsList":"/21707781519/LS-App/news_mpu","newsArticleListedMpu":"/21707781519/LS-App/LiveScore_APP_News_Article/LiveScore_APP_News_Article_Infeed_MPU_","newsListMpu":"/21707781519/LS-App/LiveScore_APP_News_List/LiveScore_APP_News_List_Infeed_MPU_","newsArticle":"/21707781519/LS-App/News_OOP","newsListLeaderBoard":"/21707781519/LS-App/LiveScore_APP_News_List/LiveScore_APP_News_List_Infeed_Sticky","newsArticleLeaderBoard":"/21707781519/LS-App/LiveScore_APP_News_Article/LiveScore_APP_News_Article_Infeed_Sticky"},"amp":{"newsSticky":"/21707781519/LiveScore_AMP/LiveScore_AMP_Mweb_News"}},"C":60000}')
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], (function() {
        return t(6840),
        t(47422)
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
