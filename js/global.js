( () => {
    var Ul = Object.create;
    var Zt = Object.defineProperty
      , Jl = Object.defineProperties
      , Kl = Object.getOwnPropertyDescriptor
      , Zl = Object.getOwnPropertyDescriptors
      , Ql = Object.getOwnPropertyNames
      , Or = Object.getOwnPropertySymbols
      , Ir = Object.getPrototypeOf
      , Ar = Object.prototype.hasOwnProperty
      , ed = Object.prototype.propertyIsEnumerable
      , td = Reflect.get;
    var _t = Math.pow
      , dn = (i, e, t) => e in i ? Zt(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t
      , G = (i, e) => {
        for (var t in e || (e = {}))
            Ar.call(e, t) && dn(i, t, e[t]);
        if (Or)
            for (var t of Or(e))
                ed.call(e, t) && dn(i, t, e[t]);
        return i
    }
      , ee = (i, e) => Jl(i, Zl(e));
    var Dr = (i, e) => () => (i && (e = i(i = 0)),
    e);
    var zr = (i, e) => () => (e || i((e = {
        exports: {}
    }).exports, e),
    e.exports)
      , id = (i, e) => {
        for (var t in e)
            Zt(i, t, {
                get: e[t],
                enumerable: !0
            })
    }
      , Rr = (i, e, t, n) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let s of Ql(e))
                !Ar.call(i, s) && s !== t && Zt(i, s, {
                    get: () => e[s],
                    enumerable: !(n = Kl(e, s)) || n.enumerable
                });
        return i
    }
    ;
    var Fr = (i, e, t) => (t = i != null ? Ul(Ir(i)) : {},
    Rr(e || !i || !i.__esModule ? Zt(t, "default", {
        value: i,
        enumerable: !0
    }) : t, i))
      , Nr = i => Rr(Zt({}, "__esModule", {
        value: !0
    }), i);
    var Qt = (i, e, t) => (dn(i, typeof e != "symbol" ? e + "" : e, t),
    t);
    var cn = (i, e, t) => td(Ir(i), t, e);
    var le = (i, e, t) => new Promise( (n, s) => {
        var r = l => {
            try {
                o(t.next(l))
            } catch (d) {
                s(d)
            }
        }
          , a = l => {
            try {
                o(t.throw(l))
            } catch (d) {
                s(d)
            }
        }
          , o = l => l.done ? n(l.value) : Promise.resolve(l.value).then(r, a);
        o((t = t.apply(i, e)).next())
    }
    );
    var m = Dr( () => {}
    );
    var fo = zr( (ps, uo) => {
        m();
        (function(i, e) {
            typeof define == "function" && define.amd ? define(e) : typeof ps == "object" ? uo.exports = e() : i.ScrollMagic = e()
        }
        )(ps, function() {
            "use strict";
            var i = function() {
                s.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            };
            i.version = "2.0.8",
            typeof window != "undefined" && window.addEventListener("mousewheel", void 0);
            var e = "data-scrollmagic-pin-spacer";
            i.Controller = function(r) {
                var a = "ScrollMagic.Controller", o = "FORWARD", l = "REVERSE", d = "PAUSED", c = t.defaults, u = this, f = s.extend({}, c, r), p = [], g = !1, h = 0, v = d, b = !0, x = 0, _ = !0, T, y, S = function() {
                    for (var w in f)
                        c.hasOwnProperty(w) || (A(2, 'WARNING: Unknown option "' + w + '"'),
                        delete f[w]);
                    if (f.container = s.get.elements(f.container)[0],
                    !f.container)
                        throw A(1, "ERROR creating object " + a + ": No valid scroll container supplied"),
                        a + " init failed.";
                    b = f.container === window || f.container === document.body || !document.body.contains(f.container),
                    b && (f.container = window),
                    x = L(),
                    f.container.addEventListener("resize", O),
                    f.container.addEventListener("scroll", O);
                    var z = parseInt(f.refreshInterval, 10);
                    f.refreshInterval = s.type.Number(z) ? z : c.refreshInterval,
                    C(),
                    A(3, "added new " + a + " controller (v" + i.version + ")")
                }, C = function() {
                    f.refreshInterval > 0 && (y = window.setTimeout(N, f.refreshInterval))
                }, k = function() {
                    return f.vertical ? s.get.scrollTop(f.container) : s.get.scrollLeft(f.container)
                }, L = function() {
                    return f.vertical ? s.get.height(f.container) : s.get.width(f.container)
                }, $ = this._setScrollPos = function(w) {
                    f.vertical ? b ? window.scrollTo(s.get.scrollLeft(), w) : f.container.scrollTop = w : b ? window.scrollTo(w, s.get.scrollTop()) : f.container.scrollLeft = w
                }
                , I = function() {
                    if (_ && g) {
                        var w = s.type.Array(g) ? g : p.slice(0);
                        g = !1;
                        var z = h;
                        h = u.scrollPos();
                        var q = h - z;
                        q !== 0 && (v = q > 0 ? o : l),
                        v === l && w.reverse(),
                        w.forEach(function(ne, pe) {
                            A(3, "updating Scene " + (pe + 1) + "/" + w.length + " (" + p.length + " total)"),
                            ne.update(!0)
                        }),
                        w.length === 0 && f.loglevel >= 3 && A(3, "updating 0 Scenes (nothing added to controller)")
                    }
                }, M = function() {
                    T = s.rAF(I)
                }, O = function(w) {
                    A(3, "event fired causing an update:", w.type),
                    w.type == "resize" && (x = L(),
                    v = d),
                    g !== !0 && (g = !0,
                    M())
                }, N = function() {
                    if (!b && x != L()) {
                        var w;
                        try {
                            w = new Event("resize",{
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (z) {
                            w = document.createEvent("Event"),
                            w.initEvent("resize", !1, !1)
                        }
                        f.container.dispatchEvent(w)
                    }
                    p.forEach(function(z, q) {
                        z.refresh()
                    }),
                    C()
                }, A = this._log = function(w, z) {
                    f.loglevel >= w && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
                    s.log.apply(window, arguments))
                }
                ;
                this._options = f;
                var D = function(w) {
                    if (w.length <= 1)
                        return w;
                    var z = w.slice(0);
                    return z.sort(function(q, ne) {
                        return q.scrollOffset() > ne.scrollOffset() ? 1 : -1
                    }),
                    z
                };
                return this.addScene = function(w) {
                    if (s.type.Array(w))
                        w.forEach(function(q, ne) {
                            u.addScene(q)
                        });
                    else if (w instanceof i.Scene) {
                        if (w.controller() !== u)
                            w.addTo(u);
                        else if (p.indexOf(w) < 0) {
                            p.push(w),
                            p = D(p),
                            w.on("shift.controller_sort", function() {
                                p = D(p)
                            });
                            for (var z in f.globalSceneOptions)
                                w[z] && w[z].call(w, f.globalSceneOptions[z]);
                            A(3, "adding Scene (now " + p.length + " total)")
                        }
                    } else
                        A(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return u
                }
                ,
                this.removeScene = function(w) {
                    if (s.type.Array(w))
                        w.forEach(function(q, ne) {
                            u.removeScene(q)
                        });
                    else {
                        var z = p.indexOf(w);
                        z > -1 && (w.off("shift.controller_sort"),
                        p.splice(z, 1),
                        A(3, "removing Scene (now " + p.length + " left)"),
                        w.remove())
                    }
                    return u
                }
                ,
                this.updateScene = function(w, z) {
                    return s.type.Array(w) ? w.forEach(function(q, ne) {
                        u.updateScene(q, z)
                    }) : z ? w.update(!0) : g !== !0 && w instanceof i.Scene && (g = g || [],
                    g.indexOf(w) == -1 && g.push(w),
                    g = D(g),
                    M()),
                    u
                }
                ,
                this.update = function(w) {
                    return O({
                        type: "resize"
                    }),
                    w && I(),
                    u
                }
                ,
                this.scrollTo = function(w, z) {
                    if (s.type.Number(w))
                        $.call(f.container, w, z);
                    else if (w instanceof i.Scene)
                        w.controller() === u ? u.scrollTo(w.scrollOffset(), z) : A(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", w);
                    else if (s.type.Function(w))
                        $ = w;
                    else {
                        var q = s.get.elements(w)[0];
                        if (q) {
                            for (; q.parentNode.hasAttribute(e); )
                                q = q.parentNode;
                            var ne = f.vertical ? "top" : "left"
                              , pe = s.get.offset(f.container)
                              , ye = s.get.offset(q);
                            b || (pe[ne] -= u.scrollPos()),
                            u.scrollTo(ye[ne] - pe[ne], z)
                        } else
                            A(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", w)
                    }
                    return u
                }
                ,
                this.scrollPos = function(w) {
                    if (arguments.length)
                        s.type.Function(w) ? k = w : A(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
                    else
                        return k.call(u);
                    return u
                }
                ,
                this.info = function(w) {
                    var z = {
                        size: x,
                        vertical: f.vertical,
                        scrollPos: h,
                        scrollDirection: v,
                        container: f.container,
                        isDocument: b
                    };
                    if (arguments.length) {
                        if (z[w] !== void 0)
                            return z[w];
                        A(1, 'ERROR: option "' + w + '" is not available');
                        return
                    } else
                        return z
                }
                ,
                this.loglevel = function(w) {
                    if (arguments.length)
                        f.loglevel != w && (f.loglevel = w);
                    else
                        return f.loglevel;
                    return u
                }
                ,
                this.enabled = function(w) {
                    if (arguments.length)
                        _ != w && (_ = !!w,
                        u.updateScene(p, !0));
                    else
                        return _;
                    return u
                }
                ,
                this.destroy = function(w) {
                    window.clearTimeout(y);
                    for (var z = p.length; z--; )
                        p[z].destroy(w);
                    return f.container.removeEventListener("resize", O),
                    f.container.removeEventListener("scroll", O),
                    s.cAF(T),
                    A(3, "destroyed " + a + " (reset: " + (w ? "true" : "false") + ")"),
                    null
                }
                ,
                S(),
                u
            }
            ;
            var t = {
                defaults: {
                    container: window,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            i.Controller.addOption = function(r, a) {
                t.defaults[r] = a
            }
            ,
            i.Controller.extend = function(r) {
                var a = this;
                i.Controller = function() {
                    return a.apply(this, arguments),
                    this.$super = s.extend({}, this),
                    r.apply(this, arguments) || this
                }
                ,
                s.extend(i.Controller, a),
                i.Controller.prototype = a.prototype,
                i.Controller.prototype.constructor = i.Controller
            }
            ,
            i.Scene = function(r) {
                var a = "ScrollMagic.Scene", o = "BEFORE", l = "DURING", d = "AFTER", c = n.defaults, u = this, f = s.extend({}, c, r), p = o, g = 0, h = {
                    start: 0,
                    end: 0
                }, v = 0, b = !0, x, _, T = function() {
                    for (var P in f)
                        c.hasOwnProperty(P) || (S(2, 'WARNING: Unknown option "' + P + '"'),
                        delete f[P]);
                    for (var R in c)
                        N(R);
                    M()
                }, y = {};
                this.on = function(P, R) {
                    return s.type.Function(R) ? (P = P.trim().split(" "),
                    P.forEach(function(B) {
                        var X = B.split(".")
                          , H = X[0]
                          , U = X[1];
                        H != "*" && (y[H] || (y[H] = []),
                        y[H].push({
                            namespace: U || "",
                            callback: R
                        }))
                    })) : S(1, "ERROR when calling '.on()': Supplied callback for '" + P + "' is not a valid function!"),
                    u
                }
                ,
                this.off = function(P, R) {
                    return P ? (P = P.trim().split(" "),
                    P.forEach(function(B, X) {
                        var H = B.split(".")
                          , U = H[0]
                          , j = H[1] || ""
                          , De = U === "*" ? Object.keys(y) : [U];
                        De.forEach(function(Xe) {
                            for (var Fe = y[Xe] || [], Dt = Fe.length; Dt--; ) {
                                var Kt = Fe[Dt];
                                Kt && (j === Kt.namespace || j === "*") && (!R || R == Kt.callback) && Fe.splice(Dt, 1)
                            }
                            Fe.length || delete y[Xe]
                        })
                    }),
                    u) : (S(1, "ERROR: Invalid event name supplied."),
                    u)
                }
                ,
                this.trigger = function(P, R) {
                    if (P) {
                        var B = P.trim().split(".")
                          , X = B[0]
                          , H = B[1]
                          , U = y[X];
                        S(3, "event fired:", X, R ? "->" : "", R || ""),
                        U && U.forEach(function(j, De) {
                            (!H || H === j.namespace) && j.callback.call(u, new i.Event(X,j.namespace,u,R))
                        })
                    } else
                        S(1, "ERROR: Invalid event name supplied.");
                    return u
                }
                ,
                u.on("change.internal", function(P) {
                    P.what !== "loglevel" && P.what !== "tweenChanges" && (P.what === "triggerElement" ? L() : P.what === "reverse" && u.update())
                }).on("shift.internal", function(P) {
                    C(),
                    u.update()
                });
                var S = this._log = function(P, R) {
                    f.loglevel >= P && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
                    s.log.apply(window, arguments))
                }
                ;
                this.addTo = function(P) {
                    return P instanceof i.Controller ? _ != P && (_ && _.removeScene(u),
                    _ = P,
                    M(),
                    k(!0),
                    L(!0),
                    C(),
                    _.info("container").addEventListener("resize", $),
                    P.addScene(u),
                    u.trigger("add", {
                        controller: _
                    }),
                    S(3, "added " + a + " to controller"),
                    u.update()) : S(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
                    u
                }
                ,
                this.enabled = function(P) {
                    if (arguments.length)
                        b != P && (b = !!P,
                        u.update(!0));
                    else
                        return b;
                    return u
                }
                ,
                this.remove = function() {
                    if (_) {
                        _.info("container").removeEventListener("resize", $);
                        var P = _;
                        _ = void 0,
                        P.removeScene(u),
                        u.trigger("remove"),
                        S(3, "removed " + a + " from controller")
                    }
                    return u
                }
                ,
                this.destroy = function(P) {
                    return u.trigger("destroy", {
                        reset: P
                    }),
                    u.remove(),
                    u.off("*.*"),
                    S(3, "destroyed " + a + " (reset: " + (P ? "true" : "false") + ")"),
                    null
                }
                ,
                this.update = function(P) {
                    if (_)
                        if (P)
                            if (_.enabled() && b) {
                                var R = _.info("scrollPos"), B;
                                f.duration > 0 ? B = (R - h.start) / (h.end - h.start) : B = R >= h.start ? 1 : 0,
                                u.trigger("update", {
                                    startPos: h.start,
                                    endPos: h.end,
                                    scrollPos: R
                                }),
                                u.progress(B)
                            } else
                                A && p === l && w(!0);
                        else
                            _.updateScene(u, !1);
                    return u
                }
                ,
                this.refresh = function() {
                    return k(),
                    L(),
                    u
                }
                ,
                this.progress = function(P) {
                    if (arguments.length) {
                        var R = !1
                          , B = p
                          , X = _ ? _.info("scrollDirection") : "PAUSED"
                          , H = f.reverse || P >= g;
                        if (f.duration === 0 ? (R = g != P,
                        g = P < 1 && H ? 0 : 1,
                        p = g === 0 ? o : l) : P < 0 && p !== o && H ? (g = 0,
                        p = o,
                        R = !0) : P >= 0 && P < 1 && H ? (g = P,
                        p = l,
                        R = !0) : P >= 1 && p !== d ? (g = 1,
                        p = d,
                        R = !0) : p === l && !H && w(),
                        R) {
                            var U = {
                                progress: g,
                                state: p,
                                scrollDirection: X
                            }
                              , j = p != B
                              , De = function(Xe) {
                                u.trigger(Xe, U)
                            };
                            j && B !== l && (De("enter"),
                            De(B === o ? "start" : "end")),
                            De("progress"),
                            j && p !== l && (De(p === o ? "start" : "end"),
                            De("leave"))
                        }
                        return u
                    } else
                        return g
                }
                ;
                var C = function() {
                    h = {
                        start: v + f.offset
                    },
                    _ && f.triggerElement && (h.start -= _.info("size") * f.triggerHook),
                    h.end = h.start + f.duration
                }
                  , k = function(P) {
                    if (x) {
                        var R = "duration";
                        O(R, x.call(u)) && !P && (u.trigger("change", {
                            what: R,
                            newval: f[R]
                        }),
                        u.trigger("shift", {
                            reason: R
                        }))
                    }
                }
                  , L = function(P) {
                    var R = 0
                      , B = f.triggerElement;
                    if (_ && (B || v > 0)) {
                        if (B)
                            if (B.parentNode) {
                                for (var X = _.info(), H = s.get.offset(X.container), U = X.vertical ? "top" : "left"; B.parentNode.hasAttribute(e); )
                                    B = B.parentNode;
                                var j = s.get.offset(B);
                                X.isDocument || (H[U] -= _.scrollPos()),
                                R = j[U] - H[U]
                            } else
                                S(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0),
                                u.triggerElement(void 0);
                        var De = R != v;
                        v = R,
                        De && !P && u.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    }
                }
                  , $ = function(P) {
                    f.triggerHook > 0 && u.trigger("shift", {
                        reason: "containerResize"
                    })
                }
                  , I = s.extend(n.validate, {
                    duration: function(P) {
                        if (s.type.String(P) && P.match(/^(\.|\d)*\d+%$/)) {
                            var R = parseFloat(P) / 100;
                            P = function() {
                                return _ ? _.info("size") * R : 0
                            }
                        }
                        if (s.type.Function(P)) {
                            x = P;
                            try {
                                P = parseFloat(x.call(u))
                            } catch (B) {
                                P = -1
                            }
                        }
                        if (P = parseFloat(P),
                        !s.type.Number(P) || P < 0)
                            throw x ? (x = void 0,
                            ['Invalid return value of supplied function for option "duration":', P]) : ['Invalid value for option "duration":', P];
                        return P
                    }
                })
                  , M = function(P) {
                    P = arguments.length ? [P] : Object.keys(I),
                    P.forEach(function(R, B) {
                        var X;
                        if (I[R])
                            try {
                                X = I[R](f[R])
                            } catch (U) {
                                X = c[R];
                                var H = s.type.String(U) ? [U] : U;
                                s.type.Array(H) ? (H[0] = "ERROR: " + H[0],
                                H.unshift(1),
                                S.apply(this, H)) : S(1, "ERROR: Problem executing validation callback for option '" + R + "':", U.message)
                            } finally {
                                f[R] = X
                            }
                    })
                }
                  , O = function(P, R) {
                    var B = !1
                      , X = f[P];
                    return f[P] != R && (f[P] = R,
                    M(P),
                    B = X != f[P]),
                    B
                }
                  , N = function(P) {
                    u[P] || (u[P] = function(R) {
                        if (arguments.length)
                            P === "duration" && (x = void 0),
                            O(P, R) && (u.trigger("change", {
                                what: P,
                                newval: f[P]
                            }),
                            n.shifts.indexOf(P) > -1 && u.trigger("shift", {
                                reason: P
                            }));
                        else
                            return f[P];
                        return u
                    }
                    )
                };
                this.controller = function() {
                    return _
                }
                ,
                this.state = function() {
                    return p
                }
                ,
                this.scrollOffset = function() {
                    return h.start
                }
                ,
                this.triggerPosition = function() {
                    var P = f.offset;
                    return _ && (f.triggerElement ? P += v : P += _.info("size") * u.triggerHook()),
                    P
                }
                ;
                var A, D;
                u.on("shift.internal", function(P) {
                    var R = P.reason === "duration";
                    (p === d && R || p === l && f.duration === 0) && w(),
                    R && z()
                }).on("progress.internal", function(P) {
                    w()
                }).on("add.internal", function(P) {
                    z()
                }).on("destroy.internal", function(P) {
                    u.removePin(P.reset)
                });
                var w = function(P) {
                    if (A && _) {
                        var R = _.info()
                          , B = D.spacer.firstChild;
                        if (!P && p === l) {
                            s.css(B, "position") != "fixed" && (s.css(B, {
                                position: "fixed"
                            }),
                            z());
                            var X = s.get.offset(D.spacer, !0)
                              , H = f.reverse || f.duration === 0 ? R.scrollPos - h.start : Math.round(g * f.duration * 10) / 10;
                            X[R.vertical ? "top" : "left"] += H,
                            s.css(D.spacer.firstChild, {
                                top: X.top,
                                left: X.left
                            })
                        } else {
                            var U = {
                                position: D.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            }
                              , j = s.css(B, "position") != U.position;
                            D.pushFollowers ? f.duration > 0 && (p === d && parseFloat(s.css(D.spacer, "padding-top")) === 0 || p === o && parseFloat(s.css(D.spacer, "padding-bottom")) === 0) && (j = !0) : U[R.vertical ? "top" : "left"] = f.duration * g,
                            s.css(B, U),
                            j && z()
                        }
                    }
                }
                  , z = function() {
                    if (A && _ && D.inFlow) {
                        var P = p === d
                          , R = p === o
                          , B = p === l
                          , X = _.info("vertical")
                          , H = D.spacer.firstChild
                          , U = s.isMarginCollapseType(s.css(D.spacer, "display"))
                          , j = {};
                        D.relSize.width || D.relSize.autoFullWidth ? B ? s.css(A, {
                            width: s.get.width(D.spacer)
                        }) : s.css(A, {
                            width: "100%"
                        }) : (j["min-width"] = s.get.width(X ? A : H, !0, !0),
                        j.width = B ? j["min-width"] : "auto"),
                        D.relSize.height ? B ? s.css(A, {
                            height: s.get.height(D.spacer) - (D.pushFollowers ? f.duration : 0)
                        }) : s.css(A, {
                            height: "100%"
                        }) : (j["min-height"] = s.get.height(X ? H : A, !0, !U),
                        j.height = B ? j["min-height"] : "auto"),
                        D.pushFollowers && (j["padding" + (X ? "Top" : "Left")] = f.duration * g,
                        j["padding" + (X ? "Bottom" : "Right")] = f.duration * (1 - g)),
                        s.css(D.spacer, j)
                    }
                }
                  , q = function() {
                    _ && A && p === l && !_.info("isDocument") && w()
                }
                  , ne = function() {
                    _ && A && p === l && ((D.relSize.width || D.relSize.autoFullWidth) && s.get.width(window) != s.get.width(D.spacer.parentNode) || D.relSize.height && s.get.height(window) != s.get.height(D.spacer.parentNode)) && z()
                }
                  , pe = function(P) {
                    _ && A && p === l && !_.info("isDocument") && (P.preventDefault(),
                    _._setScrollPos(_.info("scrollPos") - ((P.wheelDelta || P[_.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -P.detail * 30)))
                };
                this.setPin = function(P, R) {
                    var B = {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }
                      , X = R && R.hasOwnProperty("pushFollowers");
                    if (R = s.extend({}, B, R),
                    P = s.get.elements(P)[0],
                    P) {
                        if (s.css(P, "position") === "fixed")
                            return S(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                            u
                    } else
                        return S(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                        u;
                    if (A) {
                        if (A === P)
                            return u;
                        u.removePin()
                    }
                    A = P;
                    var H = A.parentNode.style.display
                      , U = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    A.parentNode.style.display = "none";
                    var j = s.css(A, "position") != "absolute"
                      , De = s.css(A, U.concat(["display"]))
                      , Xe = s.css(A, ["width", "height"]);
                    A.parentNode.style.display = H,
                    !j && R.pushFollowers && (S(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
                    R.pushFollowers = !1),
                    window.setTimeout(function() {
                        A && f.duration === 0 && X && R.pushFollowers && S(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                    }, 0);
                    var Fe = A.parentNode.insertBefore(document.createElement("div"), A)
                      , Dt = s.extend(De, {
                        position: j ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                    if (j || s.extend(Dt, s.css(A, ["width", "height"])),
                    s.css(Fe, Dt),
                    Fe.setAttribute(e, ""),
                    s.addClass(Fe, R.spacerClass),
                    D = {
                        spacer: Fe,
                        relSize: {
                            width: Xe.width.slice(-1) === "%",
                            height: Xe.height.slice(-1) === "%",
                            autoFullWidth: Xe.width === "auto" && j && s.isMarginCollapseType(De.display)
                        },
                        pushFollowers: R.pushFollowers,
                        inFlow: j
                    },
                    !A.___origStyle) {
                        A.___origStyle = {};
                        var Kt = A.style
                          , jl = U.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                        jl.forEach(function($r) {
                            A.___origStyle[$r] = Kt[$r] || ""
                        })
                    }
                    return D.relSize.width && s.css(Fe, {
                        width: Xe.width
                    }),
                    D.relSize.height && s.css(Fe, {
                        height: Xe.height
                    }),
                    Fe.appendChild(A),
                    s.css(A, {
                        position: j ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }),
                    (D.relSize.width || D.relSize.autoFullWidth) && s.css(A, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }),
                    window.addEventListener("scroll", q),
                    window.addEventListener("resize", q),
                    window.addEventListener("resize", ne),
                    A.addEventListener("mousewheel", pe),
                    A.addEventListener("DOMMouseScroll", pe),
                    S(3, "added pin"),
                    w(),
                    u
                }
                ,
                this.removePin = function(P) {
                    if (A) {
                        if (p === l && w(!0),
                        P || !_) {
                            var R = D.spacer.firstChild;
                            if (R.hasAttribute(e)) {
                                var B = D.spacer.style
                                  , X = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"]
                                  , H = {};
                                X.forEach(function(U) {
                                    H[U] = B[U] || ""
                                }),
                                s.css(R, H)
                            }
                            D.spacer.parentNode.insertBefore(R, D.spacer),
                            D.spacer.parentNode.removeChild(D.spacer),
                            A.parentNode.hasAttribute(e) || (s.css(A, A.___origStyle),
                            delete A.___origStyle)
                        }
                        window.removeEventListener("scroll", q),
                        window.removeEventListener("resize", q),
                        window.removeEventListener("resize", ne),
                        A.removeEventListener("mousewheel", pe),
                        A.removeEventListener("DOMMouseScroll", pe),
                        A = void 0,
                        S(3, "removed pin (reset: " + (P ? "true" : "false") + ")")
                    }
                    return u
                }
                ;
                var ye, lt = [];
                return u.on("destroy.internal", function(P) {
                    u.removeClassToggle(P.reset)
                }),
                this.setClassToggle = function(P, R) {
                    var B = s.get.elements(P);
                    return B.length === 0 || !s.type.String(R) ? (S(1, "ERROR calling method 'setClassToggle()': Invalid " + (B.length === 0 ? "element" : "classes") + " supplied."),
                    u) : (lt.length > 0 && u.removeClassToggle(),
                    ye = R,
                    lt = B,
                    u.on("enter.internal_class leave.internal_class", function(X) {
                        var H = X.type === "enter" ? s.addClass : s.removeClass;
                        lt.forEach(function(U, j) {
                            H(U, ye)
                        })
                    }),
                    u)
                }
                ,
                this.removeClassToggle = function(P) {
                    return P && lt.forEach(function(R, B) {
                        s.removeClass(R, ye)
                    }),
                    u.off("start.internal_class end.internal_class"),
                    ye = void 0,
                    lt = [],
                    u
                }
                ,
                T(),
                u
            }
            ;
            var n = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                },
                validate: {
                    offset: function(r) {
                        if (r = parseFloat(r),
                        !s.type.Number(r))
                            throw ['Invalid value for option "offset":', r];
                        return r
                    },
                    triggerElement: function(r) {
                        if (r = r || void 0,
                        r) {
                            var a = s.get.elements(r)[0];
                            if (a && a.parentNode)
                                r = a;
                            else
                                throw ['Element defined in option "triggerElement" was not found:', r]
                        }
                        return r
                    },
                    triggerHook: function(r) {
                        var a = {
                            onCenter: .5,
                            onEnter: 1,
                            onLeave: 0
                        };
                        if (s.type.Number(r))
                            r = Math.max(0, Math.min(parseFloat(r), 1));
                        else if (r in a)
                            r = a[r];
                        else
                            throw ['Invalid value for option "triggerHook": ', r];
                        return r
                    },
                    reverse: function(r) {
                        return !!r
                    },
                    loglevel: function(r) {
                        if (r = parseInt(r),
                        !s.type.Number(r) || r < 0 || r > 3)
                            throw ['Invalid value for option "loglevel":', r];
                        return r
                    }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            i.Scene.addOption = function(r, a, o, l) {
                r in n.defaults ? i._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + r + "', because it already exists.") : (n.defaults[r] = a,
                n.validate[r] = o,
                l && n.shifts.push(r))
            }
            ,
            i.Scene.extend = function(r) {
                var a = this;
                i.Scene = function() {
                    return a.apply(this, arguments),
                    this.$super = s.extend({}, this),
                    r.apply(this, arguments) || this
                }
                ,
                s.extend(i.Scene, a),
                i.Scene.prototype = a.prototype,
                i.Scene.prototype.constructor = i.Scene
            }
            ,
            i.Event = function(r, a, o, l) {
                l = l || {};
                for (var d in l)
                    this[d] = l[d];
                return this.type = r,
                this.target = this.currentTarget = o,
                this.namespace = a || "",
                this.timeStamp = this.timestamp = Date.now(),
                this
            }
            ;
            var s = i._util = function(r) {
                var a = {}, o, l = function(y) {
                    return parseFloat(y) || 0
                }, d = function(y) {
                    return y.currentStyle ? y.currentStyle : r.getComputedStyle(y)
                }, c = function(y, S, C, k) {
                    if (S = S === document ? r : S,
                    S === r)
                        k = !1;
                    else if (!_.DomElement(S))
                        return 0;
                    y = y.charAt(0).toUpperCase() + y.substr(1).toLowerCase();
                    var L = (C ? S["offset" + y] || S["outer" + y] : S["client" + y] || S["inner" + y]) || 0;
                    if (C && k) {
                        var $ = d(S);
                        L += y === "Height" ? l($.marginTop) + l($.marginBottom) : l($.marginLeft) + l($.marginRight)
                    }
                    return L
                }, u = function(y) {
                    return y.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(S) {
                        return S[1].toUpperCase()
                    })
                };
                a.extend = function(y) {
                    for (y = y || {},
                    o = 1; o < arguments.length; o++)
                        if (!!arguments[o])
                            for (var S in arguments[o])
                                arguments[o].hasOwnProperty(S) && (y[S] = arguments[o][S]);
                    return y
                }
                ,
                a.isMarginCollapseType = function(y) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(y) > -1
                }
                ;
                var f = 0
                  , p = ["ms", "moz", "webkit", "o"]
                  , g = r.requestAnimationFrame
                  , h = r.cancelAnimationFrame;
                for (o = 0; !g && o < p.length; ++o)
                    g = r[p[o] + "RequestAnimationFrame"],
                    h = r[p[o] + "CancelAnimationFrame"] || r[p[o] + "CancelRequestAnimationFrame"];
                g || (g = function(y) {
                    var S = new Date().getTime()
                      , C = Math.max(0, 16 - (S - f))
                      , k = r.setTimeout(function() {
                        y(S + C)
                    }, C);
                    return f = S + C,
                    k
                }
                ),
                h || (h = function(y) {
                    r.clearTimeout(y)
                }
                ),
                a.rAF = g.bind(r),
                a.cAF = h.bind(r);
                var v = ["error", "warn", "log"]
                  , b = r.console || {};
                for (b.log = b.log || function() {}
                ,
                o = 0; o < v.length; o++) {
                    var x = v[o];
                    b[x] || (b[x] = b.log)
                }
                a.log = function(y) {
                    (y > v.length || y <= 0) && (y = v.length);
                    var S = new Date
                      , C = ("0" + S.getHours()).slice(-2) + ":" + ("0" + S.getMinutes()).slice(-2) + ":" + ("0" + S.getSeconds()).slice(-2) + ":" + ("00" + S.getMilliseconds()).slice(-3)
                      , k = v[y - 1]
                      , L = Array.prototype.splice.call(arguments, 1)
                      , $ = Function.prototype.bind.call(b[k], b);
                    L.unshift(C),
                    $.apply(b, L)
                }
                ;
                var _ = a.type = function(y) {
                    return Object.prototype.toString.call(y).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                }
                ;
                _.String = function(y) {
                    return _(y) === "string"
                }
                ,
                _.Function = function(y) {
                    return _(y) === "function"
                }
                ,
                _.Array = function(y) {
                    return Array.isArray(y)
                }
                ,
                _.Number = function(y) {
                    return !_.Array(y) && y - parseFloat(y) + 1 >= 0
                }
                ,
                _.DomElement = function(y) {
                    return typeof HTMLElement == "object" || typeof HTMLElement == "function" ? y instanceof HTMLElement || y instanceof SVGElement : y && typeof y == "object" && y !== null && y.nodeType === 1 && typeof y.nodeName == "string"
                }
                ;
                var T = a.get = {};
                return T.elements = function(y) {
                    var S = [];
                    if (_.String(y))
                        try {
                            y = document.querySelectorAll(y)
                        } catch ($) {
                            return S
                        }
                    if (_(y) === "nodelist" || _.Array(y) || y instanceof NodeList)
                        for (var C = 0, k = S.length = y.length; C < k; C++) {
                            var L = y[C];
                            S[C] = _.DomElement(L) ? L : T.elements(L)
                        }
                    else
                        (_.DomElement(y) || y === document || y === r) && (S = [y]);
                    return S
                }
                ,
                T.scrollTop = function(y) {
                    return y && typeof y.scrollTop == "number" ? y.scrollTop : r.pageYOffset || 0
                }
                ,
                T.scrollLeft = function(y) {
                    return y && typeof y.scrollLeft == "number" ? y.scrollLeft : r.pageXOffset || 0
                }
                ,
                T.width = function(y, S, C) {
                    return c("width", y, S, C)
                }
                ,
                T.height = function(y, S, C) {
                    return c("height", y, S, C)
                }
                ,
                T.offset = function(y, S) {
                    var C = {
                        top: 0,
                        left: 0
                    };
                    if (y && y.getBoundingClientRect) {
                        var k = y.getBoundingClientRect();
                        C.top = k.top,
                        C.left = k.left,
                        S || (C.top += T.scrollTop(),
                        C.left += T.scrollLeft())
                    }
                    return C
                }
                ,
                a.addClass = function(y, S) {
                    S && (y.classList ? y.classList.add(S) : y.className += " " + S)
                }
                ,
                a.removeClass = function(y, S) {
                    S && (y.classList ? y.classList.remove(S) : y.className = y.className.replace(new RegExp("(^|\\b)" + S.split(" ").join("|") + "(\\b|$)","gi"), " "))
                }
                ,
                a.css = function(y, S) {
                    if (_.String(S))
                        return d(y)[u(S)];
                    if (_.Array(S)) {
                        var C = {}
                          , k = d(y);
                        return S.forEach(function(I, M) {
                            C[I] = k[u(I)]
                        }),
                        C
                    } else
                        for (var L in S) {
                            var $ = S[L];
                            $ == parseFloat($) && ($ += "px"),
                            y.style[u(L)] = $
                        }
                }
                ,
                a
            }(window || {});
            return i.Scene.prototype.addIndicators = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
                this
            }
            ,
            i.Scene.prototype.removeIndicators = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
                this
            }
            ,
            i.Scene.prototype.setTween = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
                this
            }
            ,
            i.Scene.prototype.removeTween = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
                this
            }
            ,
            i.Scene.prototype.setVelocity = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
                this
            }
            ,
            i.Scene.prototype.removeVelocity = function() {
                return i._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
                this
            }
            ,
            i
        })
    }
    );
    var _o = zr( (Ii, vs) => {
        m();
        (function(i, e) {
            typeof Ii == "object" && typeof vs == "object" ? vs.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof Ii == "object" ? Ii.Sketchfab = e() : i.Sketchfab = e()
        }
        )(self, () => ( () => {
            "use strict";
            var i = {
                d: (c, u) => {
                    for (var f in u)
                        i.o(u, f) && !i.o(c, f) && Object.defineProperty(c, f, {
                            enumerable: !0,
                            get: u[f]
                        })
                }
                ,
                o: (c, u) => Object.prototype.hasOwnProperty.call(c, u)
            }
              , e = {};
            function t(c) {
                return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                    return typeof u
                }
                : function(u) {
                    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                }
                ,
                t(c)
            }
            i.d(e, {
                default: () => d
            });
            var n = function(c, u) {
                c.forEach(function(f) {
                    this[f] = function() {
                        var p, g = u._requestIdCounter++, h = Array.prototype.slice.call(arguments);
                        if (h.length > 0) {
                            var v = h[h.length - 1];
                            typeof v == "function" && (p = h.pop())
                        }
                        p && (u._pendingRequests[g] = p.bind(this)),
                        u._target.postMessage({
                            type: "api.request",
                            instanceId: u.getIdentifier(),
                            requestId: g,
                            member: f,
                            arguments: h
                        }, u.getDomain())
                    }
                }, this),
                this.addEventListener = function(f, p, g) {
                    f === "viewerready" && u.isViewerReady && p(),
                    u._eventListeners[f] || (u._eventListeners[f] = []),
                    u._eventListeners[f].push(p),
                    g && this.setListenerOptions && (g.name = f,
                    this.setListenerOptions(g))
                }
                ,
                this.removeEventListener = function(f, p) {
                    if (u._eventListeners[f]) {
                        var g = u._eventListeners[f].indexOf(p);
                        g !== -1 && u._eventListeners[f].splice(g, 1)
                    }
                }
            }
              , s = function(c, u, f) {
                this._target = c,
                this._requestIdCounter = 0,
                this._pendingRequests = {},
                this._eventListeners = {},
                this._ready = !1,
                this._domain = f,
                this._instanceId = u,
                this.listenServer()
            };
            s.prototype = {
                getIdentifier: function() {
                    return this._instanceId
                },
                getDomain: function() {
                    return this._domain
                },
                setIdentifier: function(c) {
                    this._instanceId = c
                },
                use: function(c, u) {
                    this._version = c,
                    this._ready = !0;
                    var f = this._requestIdCounter++;
                    this._pendingRequests[f] = function(p, g, h) {
                        p ? u.call(this, p) : u.call(this, null, new n(h,this))
                    }
                    .bind(this),
                    this._target.postMessage({
                        type: "api.initialize",
                        requestId: f,
                        name: c,
                        instanceId: this._instanceId
                    }, this._domain)
                },
                listenServer: function() {
                    if (!this._serverReceiveMessageBinded) {
                        var c = ["api.initialize.result", "api.request.result", "api.event"];
                        this._serverReceiveMessageBinded = function(u) {
                            if (u.origin === this._domain && u.data && u.data.type && u.data.instanceId && u.data.instanceId === this.getIdentifier()) {
                                var f = u.data.type;
                                if (c.indexOf(f) !== -1)
                                    if (f === "api.event") {
                                        var p = u.data.results
                                          , g = p[0];
                                        if (this._eventListeners["*"] || this._eventListeners.all)
                                            return void ["*", "all"].forEach(function(_) {
                                                var T = this._eventListeners[_];
                                                T && T.forEach(function(y) {
                                                    y.apply(y, p)
                                                })
                                            }, this);
                                        var h = p.slice(1)
                                          , v = this._eventListeners[g];
                                        v ? v.forEach(function(_) {
                                            _.apply(_, h)
                                        }) : g === "viewerready" && (this.isViewerReady = !0)
                                    } else {
                                        var b = u.data.requestId
                                          , x = this._pendingRequests[b];
                                        if (!x)
                                            return;
                                        x.apply(null, u.data.results),
                                        this._pendingRequests[b] = void 0
                                    }
                            }
                        }
                        .bind(this),
                        window.addEventListener("message", this._serverReceiveMessageBinded)
                    }
                }
            };
            let r = s;
            var a = /[&|;]+/g;
            function o(c) {
                return t(c) === "object" ? (u = c,
                f = {},
                Object.keys(u).forEach(function(p) {
                    f[p] = Array.isArray(u[p]) ? u[p] : [u[p]]
                }),
                f) : (c[0] === "?" && (c = c.substr(1)),
                c.split(a).reduce(function(p, g) {
                    if (g.length === 0)
                        return p;
                    var h = g.indexOf("=");
                    h === -1 && (h = g.length);
                    var v = decodeURIComponent(g.substr(0, h).replace(/\+/g, "%20"))
                      , b = decodeURIComponent(g.substr(h + 1).replace(/\+/g, "%20"));
                    return p[v] === void 0 && (p[v] = []),
                    p[v].push(b),
                    p
                }, {}));
                var u, f
            }
            window.SketchfabAPIClient = r;
            var l = function(c, u) {
                var f = c
                  , p = u;
                t(c) === "object" && (p = c,
                f = null),
                this._version = f,
                this._target = p,
                window.sketchfabAPIinstances || (window.sketchfabAPIinstances = []),
                window.sketchfabAPIinstances.push(this),
                this._apiId = window.sketchfabAPIinstances.length.toString(),
                this._target.id && (this._apiId += "_" + this._target.id),
                this._target.allow || (this._target.allow = "vr; autoplay; fullscreen"),
                this._client = void 0,
                this._options = void 0,
                this._domain = "sketchfab.com",
                this._domain = this._domain === "same-as-current" ? window.location.hostname : this._domain,
                this._urlTemplate = "https://YYYY/models/XXXX/embed",
                this._url = this._urlTemplate.replace("YYYY", this._domain),
                this._transmitOptions = {},
                this._getURLOptions()
            };
            l.prototype = {
                _urlOptionsDict: {
                    skfb_api_version: {
                        default: "1.12.1",
                        type: "string"
                    }
                },
                _optionsLoaded: function(c) {
                    this._urlOptions = c,
                    this._version = this._getURLOption("skfb_api_version", this._version)
                },
                _getURLOption: function(c, u) {
                    var f = this._urlOptionsDict[c];
                    if (!f)
                        return u;
                    u == null && (u = f.default);
                    var p = this._urlOptions[c];
                    return p && p.length ? p[0] : u
                },
                _getURLOptions: function() {
                    if (!window || !window.location.search)
                        return this._optionsLoaded({});
                    var c = o(window.location.search);
                    for (var u in c)
                        u.startsWith("skfb_") && (this._transmitOptions[u.substr(5)] = c[u]);
                    return this._optionsLoaded(c)
                },
                getEmbedURL: function(c, u) {
                    var f = this._url + "?api_version=" + this._version + "&api_id=" + this._apiId;
                    u && Object.keys(u).forEach(function(g) {
                        u[g] != null && typeof u[g] != "function" && (f += "&" + g.toString() + "=" + u[g].toString())
                    });
                    var p = this._transmitOptions;
                    return Object.keys(this._transmitOptions).forEach(function(g) {
                        f += "&" + g.toString() + "=" + p[g].toString()
                    }),
                    f.replace("XXXX", c)
                },
                init: function(c, u) {
                    this._options = u,
                    this._uid = c,
                    this._realInit()
                },
                _initializeAPIEmbed: function(c) {
                    if (c.data && c.data.instanceId && this._apiId === c.data.instanceId && c.data.type === "api.ready" && this._target.src) {
                        if (c.data.error !== void 0)
                            return this.error(c.data.error),
                            void window.removeEventListener("message", this._initializeAPIEmbedBinded);
                        var u = this._target.src.split("/");
                        u = "https://" + u[2],
                        this._client && (console.log("reusing a Sketchfab instance for multiple client is not supported, please create a new sketchfab instance"),
                        window.removeEventListener("message", this._client._serverReceiveMessageBinded)),
                        this._client = new window.SketchfabAPIClient(this._target.contentWindow,this._apiId,u),
                        this._client.use(this._version, function(f, p) {
                            if (f)
                                throw f;
                            this.success.call(this, p)
                        }
                        .bind(this)),
                        window.removeEventListener("message", this._initializeAPIEmbedBinded)
                    }
                },
                _realInit: function() {
                    this._initializeAPIEmbedBinded || (this._initializeAPIEmbedBinded = this._initializeAPIEmbed.bind(this)),
                    window.addEventListener("message", this._initializeAPIEmbedBinded),
                    this._target.src = this.getEmbedURL(this._uid, this._options)
                },
                success: function(c) {
                    this._options.success && typeof this._options.success == "function" && this._options.success(c)
                },
                error: function(c) {
                    this._options.error && typeof this._options.error == "function" && this._options.error(c)
                },
                show: function() {
                    var c = this._target.style.top;
                    this._target.style.top = "-1000vh",
                    Promise.resolve().then(function() {
                        this._target.style.top = c
                    }
                    .bind(this))
                }
            };
            let d = l;
            return e.default
        }
        )())
    }
    );
    var bs = {};
    id(bs, {
        debounce: () => tc,
        throttle: () => ic
    });
    function tc(i, e, t) {
        let n;
        return function() {
            let s = this
              , r = arguments
              , a = function() {
                n = null,
                t || i.apply(s, r)
            }
              , o = t && !n;
            clearTimeout(n),
            n = setTimeout(a, e),
            o && i.apply(s, r)
        }
    }
    function ic(i, e) {
        let t;
        return function() {
            let n = this
              , s = arguments;
            t || (i.apply(n, s),
            t = !0,
            setTimeout( () => t = !1, e))
        }
    }
    var xs = Dr( () => {
        m()
    }
    );
    m();
    m();
    window.addEventListener("DOMContentLoaded", () => {
        var t, n, s;
        document.querySelectorAll("[data-ls-lang]").forEach(r => {
            r.addEventListener("click", () => {
                window.localStorage.setItem("lang", r.dataset.lsLang)
            }
            )
        }
        );
        let i = ((n = (t = document.querySelector("[data-ls-current]")) == null ? void 0 : t.dataset) == null ? void 0 : n.lsCurrent) || "en-us"
          , e = (s = window.localStorage.getItem("lang")) != null ? s : "en-us";
        if (i !== e) {
            let r = document.querySelector(`[data-ls-lang="${e}"]`);
            if (!r)
                return;
            let a = new URL(r)
              , o = new URL(window.location.href);
            i === "en-us" && a && (a.pathname !== `/${e}` || o.pathname)
        }
    }
    );
    m();
    
    var Br = i => {
        let e = s => {
            window.location.href = s.target.value
        }
          , t = () => {
            i.addEventListener("change", e)
        }
          , n = () => {
            i.removeEventListener("change", e)
        }
        ;
        return t(),
        {
            destroy: n
        }
    }
      , qr = i => {
        let e = () => {
            navigator.clipboard.writeText(i.dataset.socialCopyUrl),
            i.classList.add("copylink--success"),
            setTimeout( () => {
                i.classList.remove("copylink--success")
            }
            , 2e3)
        }
          , t = () => {
            i.addEventListener("click", e)
        }
          , n = () => {
            i.removeEventListener("click", e)
        }
        ;
        return t(),
        {
            destroy: n
        }
    }
    ;
    m();
    var rd = i => {
        let e = i.dataset.gaCategory
          , t = i.dataset.gaLabel
          , n = () => {
            window.dataLayer = window.dataLayer || [],
            window.dataLayer.push({
                event: "buttonClick",
                label: t,
                category: e
            })
        }
        ;
        ( () => {
            i.addEventListener("click", () => n())
        }
        )()
    }
      , ad = () => {
        let i = () => {
            document.querySelectorAll("[data-ga-category]").forEach(n => rd(n))
        }
        ;
        ( () => {
            i()
        }
        )()
    }
      , od = () => {
        ad()
    }
      , Vr = od;
    m();
    m();
    m();
    m();
    var _e = i => {
        let e = document.createElement("template");
        return e.innerHTML = i.trim(),
        e.content.childNodes[0]
    }
      , bt = i => {
        let e = document.createElement("template");
        return e.innerHTML = i,
        e.content.childNodes
    }
    ;
    m();
    var Gr = i => i == null ? !1 : typeof i[Symbol.iterator] == "function";
    window.loadingJs = window.loadingJs || [];
    window.loadedJs = window.loadedJs || [];
    var Hr = i => window.loadedJs.includes(i)
      , ld = i => window.loadingJs.includes(i)
      , Wr = i => le(void 0, null, function*() {
        return Hr(i) ? Promise.resolve() : ld(i) ? new Promise( (e, t) => {
            let n = setInterval( () => {
                Hr(i) && (clearInterval(n),
                e())
            }
            , 50)
        }
        ) : (window.loadingJs.push(i),
        new Promise( (e, t) => {
            let n = document.createElement("script");
            n.onload = () => {
                window.loadedJs.push(i),
                window.loadingJs.splice(window.loadingJs.indexOf(i), 1),
                e()
            }
            ,
            n.onerror = () => {
                t()
            }
            ,
            n.src = i,
            document.head.appendChild(n)
        }
        ))
    });
    var Ei = class {
        constructor(e, t, n) {
            var s, r, a, o;
            this.options = {
                smallPopup: t.layout === "small",
                v2Style: !0,
                track: t.track || t.track === "true",
                trackPopupCloseOnSessionBasis: t.trackPopupCloseOnSessionBasis || t.trackPopupCloseOnSessionBasis === "true",
                animation: t.animation,
                overlayOpacity: (s = t.overlayOpacity) != null ? s : 0,
                overlayBlur: (r = t.overlayBlur) != null ? r : 0,
                layout: t.layout,
                maxWidth: t.maxWidth,
                containerSize: t.containerSize,
                classes: t.classes,
                style: t.style,
                styles: t.styles,
                loadImmediately: t.loadImmediately === !0,
                contentUrl: t.contentUrl,
                onLoad: (a = t.onLoad) != null ? a : () => !0,
                onClose: (o = t.onClose) != null ? o : () => {}
            },
            this.element = n,
            this.grouping = t.grouping,
            this.id = e,
            this.initialize()
        }
        get close() {
            var e;
            return (e = this.popup) == null ? void 0 : e.querySelector("[data-popup-close]")
        }
        get content() {
            return this._content
        }
        set content(e) {
            this._content = typeof e == "string" ? bt(e) : e
        }
        initialize() {
            if (this.createPopupContainer(),
            this.options.track && localStorage.getItem(`popup-${this.grouping}`) === "true") {
                this.doNotShow = !0;
                return
            }
            if (this.options.trackPopupCloseOnSessionBasis && sessionStorage.getItem(`popup-${this.grouping}`) === "true") {
                this.doNotShow = !0;
                return
            }
            this.options.v2Style && this.popup.classList.add("popup--v2", "v2"),
            this.options.smallPopup && this.popup.classList.add("popup--small"),
            this.options.style && this.options.style.length > 0 && this.popup.classList.add(`popup--${this.options.style}`),
            this.getContent().then(e => {
                this.content = e,
                this.options.onLoad(this)
            }
            ).then( () => {
                this.options.loadImmediately && this.show()
            }
            )
        }
        createPopupContainer() {
            this.popup = this.createElements(),
            this.addListeners()
        }
        getContent() {
            return le(this, null, function*() {
                var e;
                return this.element ? this.element.outerHTML : (this.loadingResources = !0,
                fetch((e = this.options.contentUrl) != null ? e : `/popups/${this.id}/index.html`).then(t => (this.loadingResources = !1,
                t.text())))
            })
        }
        show() {
            return le(this, null, function*() {
                this.doNotShow || (yield this.loadPopupAndAddToDOM().then( () => {
                    this.options.smallPopup || document.body.classList.add("popup__body"),
                    this.popup.classList.add("popup--visible"),
                    setTimeout( () => this.popup.classList.add("popup--anim"), 200)
                }
                ))
            })
        }
        loadPopupAndAddToDOM() {
            return le(this, null, function*() {
                document.body.append(this.popup),
                !this.contentAddedToPopup && Gr(this.content) && (this.popup.querySelector(".popup__inner").append(...this.content),
                this.contentAddedToPopup = !0)
            })
        }
        createElements() {
            let e = [];
            this.options.animation && e.push(`popup--anim-${this.options.animation}`),
            this.options.classes && e.push(this.options.classes);
            let t = [];
            this.options.smallPopup || (t.push(`--popup-overlay-opacity: ${this.options.overlayOpacity}`),
            t.push(`--popup-overlay-blur: ${this.options.overlayBlur}px`)),
            this.options.smallPopup && this.options.maxWidth && t.push(`--popup-max-width: ${this.options.maxWidth}`),
            this.options.styles && t.push(this.options.styles);
            let n = [];
            this.options.containerSize && !this.options.smallPopup && n.push(`container--${this.options.containerSize}`);
            let s = '<svg width="11" height="11" fill="currentColor" viewBox="0 0 11 11"><path d="M7.43359 5.375L10.3633 2.44531C10.7441 2.09375 10.7441 1.50781 10.3633 1.15625L9.71875 0.511719C9.36719 0.130859 8.78125 0.130859 8.42969 0.511719L5.5 3.44141L2.54102 0.511719C2.18945 0.130859 1.60352 0.130859 1.25195 0.511719L0.607422 1.15625C0.226562 1.50781 0.226562 2.09375 0.607422 2.44531L3.53711 5.375L0.607422 8.33398C0.226562 8.68555 0.226562 9.27148 0.607422 9.62305L1.25195 10.2676C1.60352 10.6484 2.18945 10.6484 2.54102 10.2676L5.5 7.33789L8.42969 10.2676C8.78125 10.6484 9.36719 10.6484 9.71875 10.2676L10.3633 9.62305C10.7441 9.27148 10.7441 8.68555 10.3633 8.33398L7.43359 5.375Z" fill="white" /></svg>';
            return this.options.v2Style && (s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" width="31" height="31" fill="none"><path stroke="#000" d="m0 1 30 29M29 1 1 30"/></svg>'),
            bt(`<div class="popup">
      <div class="popup__overlay ${e.join(" ")}" style="${t.join("; ")}">
        <div class="popup__outer container ${n.join(" ")}">
          <div class="popup__wrap">
            <button class="popup__close" data-popup-close>${s}</button>
            <div class="popup__inner">
            </div>
          </div>
        </div>
      </div>
    </div>`)[0]
        }
        hide() {
            this.popup.classList.add("popup--anim-reverse"),
            this.popup.classList.remove("popup--anim"),
            setTimeout( () => {
                this.popup.classList.remove("popup--visible"),
                this.popup.classList.remove("popup--anim-reverse"),
                document.body.classList.remove("popup__body"),
                document.body.removeChild(this.popup),
                this.options.onClose()
            }
            , 300),
            !this.options.trackPopupCloseOnSessionBasis && this.options.track && this.grouping && localStorage.setItem(`popup-${this.grouping}`, "true"),
            this.options.trackPopupCloseOnSessionBasis && this.grouping && sessionStorage.setItem(`popup-${this.grouping}`, "true")
        }
        addListeners() {
            this.close.addEventListener("click", this.hide.bind(this))
        }
    }
    ;
    var be = class extends Ei {
        constructor(e, t, n) {
            super(e, t, n)
        }
        loadPopupAndAddToDOM() {
            return le(this, null, function*() {
                if (this.popupFullyLoaded)
                    return cn(be.prototype, this, "loadPopupAndAddToDOM").call(this);
                let e = (t, n) => {
                    this.loadingResources ? setTimeout( () => {
                        e(t, n)
                    }
                    , 200) : t()
                }
                ;
                return cn(be.prototype, this, "loadPopupAndAddToDOM").call(this).then( () => new Promise( (t, n) => e(t, n)).then( () => {
                    ei(this.popup, !0),
                    this.popupFullyLoaded = !0
                }
                ))
            })
        }
    }
    ;
    var un = class {
        constructor(e) {
            this.element = e,
            this.contentId = this.element.dataset.appCardAppId,
            this.popup = null,
            this.init()
        }
        init() {
            this.addEventListeners()
        }
        addEventListeners() {
            this.element.addEventListener("click", this.handleClick.bind(this))
        }
        handleClick(e) {
            this.popup ? this.popup.show() : this.popup = new be(this.element.dataset.popupId,{
                v2Style: !0,
                animation: "fade",
                overlayOpacity: .8,
                overlayBlur: 10,
                classes: "app-card__popup",
                loadImmediately: !0,
                closeOnOverlayClick: !0,
                contentUrl: `/applications/gallery/${this.contentId}.html`
            })
        }
    }
      , Yr = i => new un(i);
    m();
    var dd = i => {
        let e = i.getAttribute("data-bg-image")
          , t = ( () => {
            try {
                return parseFloat(i.dataset.bgImageRatio)
            } catch (s) {
                return 1
            }
        }
        )();
        ( () => {
            let s = i.offsetWidth / t < i.offsetHeight ? i.offsetHeight * t : i.offsetWidth;
            i.style.backgroundImage = "url('" + e + "?w=" + Math.floor(s * window.devicePixelRatio) + "&fm=webp')"
        }
        )()
    }
      , Xr = dd;
    m();
    m();
    var cd = (i, e={}, t={}) => {
        var $, I, M, O, N, A;
        if (!i)
            return;
        let n = JSON.parse(i.getAttribute("data-video"))
          , s = i.querySelector("video")
          , r = i.getAttribute("data-poster")
          , a = i.querySelector(".sanity-video__poster-image")
          , o = i.querySelectorAll(".sanity-video__play-button-wrapper")[0]
          , l = i.dataset.videoOverrides ? JSON.parse(i.dataset.videoOverrides) : {}
          , d = (($ = n == null ? void 0 : n.title) == null ? void 0 : $.length) > 0 && !l.plugins ? {
            mux: {
                debug: !1,
                data: {
                    env_key: "d17speaiv7l277uthp9bjrp7p",
                    video_id: n.video.asset.assetId,
                    video_title: n.title,
                    video_duration: n.video.asset.data.duration,
                    video_stream_type: "on-demand"
                }
            }
        } : l.plugins || {}
          , c = ee(G(G({
            muted: (I = l.forceMuted) != null ? I : n.muted || n.autoplay && n.muted !== !1,
            autoplay: (M = l.forceAutoplay) != null ? M : n.autoplay,
            loop: (O = l.forceLoop) != null ? O : n.loop,
            controls: (N = l.forceControls) != null ? N : n.controls,
            autoload: (A = l.forceAutoload) != null ? A : n.autoload,
            bigPlayButton: !1,
            poster: r
        }, l.preload ? {
            preload: l.preload
        } : {}), e), {
            plugins: d
        })
          , u = {
            progress: 0,
            played: !1,
            paused: !1,
            lastProgress: null
        }
          , f = null
          , p = []
          , g = 0
          , h = !1
          , v = (D, w) => {
            var z;
            !(n != null && n.title) || ((z = n == null ? void 0 : n.title) == null ? void 0 : z.length) === 0 || (window.dataLayer = window.dataLayer || [],
            window.dataLayer.push(G({
                event: "video",
                action: D,
                title: n.title
            }, w ? {
                value: w
            } : {})))
        }
          , b = () => {
            o.classList.remove("sanity-video__play-button--hidden"),
            o.classList.add("sanity-video__play-button--visible")
        }
          , x = () => {
            o.classList.add("sanity-video__play-button--hidden"),
            o.classList.remove("sanity-video__play-button--visible"),
            a && (a.style.display = "none")
        }
          , _ = () => {
            p.sort( (w, z) => w.start - z.start);
            let D = [p[0]];
            for (let w = 1; w < p.length; w++) {
                let z = D[D.length - 1]
                  , q = p[w];
                q.start <= z.end ? z.end = Math.max(z.end, q.end) : D.push(q)
            }
            p = D
        }
          , T = D => {
            let w = .5
              , z = !1;
            for (let q of p)
                if (D >= q.start - w && D <= q.end + w) {
                    D > q.end && (q.end = D),
                    D < q.start && (q.start = D),
                    z = !0;
                    break
                }
            z || p.push({
                start: D,
                end: D
            }),
            _()
        }
          , y = () => {
            let D = 0;
            p.forEach(z => D += z.end - z.start);
            let w = f.duration();
            return Math.round(D / w * 100)
        }
          , S = () => {
            var D;
            if (o.addEventListener("click", w => {
                f.play(),
                x()
            }
            ),
            f.on("pause", () => {
                b()
            }
            ),
            f.on("playing", () => {
                x()
            }
            ),
            f.on("ended", () => {
                b()
            }
            ),
            (n == null ? void 0 : n.title) && ((D = n == null ? void 0 : n.title) == null ? void 0 : D.length) > 0) {
                let w = null;
                f.on("pause", () => {
                    clearTimeout(w),
                    w = setTimeout( () => {
                        let z = y(f.currentTime());
                        v("pause", z),
                        w = null
                    }
                    , 1e3)
                }
                ),
                f.on("ended", () => {
                    v("progress", 100)
                }
                ),
                f.on("seeking", () => {
                    h = !0
                }
                ),
                f.on("seeked", () => {
                    let z = 1;
                    Math.abs(g - f.currentTime) > z && T(g),
                    h = !1
                }
                ),
                f.on("timeupdate", () => {
                    let z = y();
                    h || (T(f.currentTime()),
                    g = f.currentTime),
                    z > u.progress && z > u.progress && Math.floor(z % 10) === 0 && (u.progress = z,
                    v("progress", z))
                }
                ),
                f.on("play", () => {
                    if (w) {
                        clearTimeout(w);
                        return
                    }
                    w = setTimeout( () => {
                        let z = y();
                        v("play", z),
                        w = null
                    }
                    , 1e3)
                }
                )
            }
        }
          , k = {
            element: i,
            video: f,
            destroy: () => {
                f == null || f.dispose()
            }
        };
        return ( () => {
            Wr("https://unpkg.com/@mux/videojs-kit@0.12.0/dist/index.js").then( () => {
                k.video = f = videojs(s, c),
                S(),
                t.onActivate && t.onActivate(f)
            }
            ).catch(D => {
                console.error(D)
            }
            )
        }
        )(),
        k
    }
      , me = cd;
    m();
    var ud = (i, e="normal", t={}) => {
        var f, p, g;
        let n = typeof i == "string" ? bt(i) : i
          , s = _e(`<div class="v2 modal hidden ${t.fadeIn ? "modal--fade-in" : ""} modal--${e} ${(f = t.outerClasses) != null ? f : ""}">
      <div class="modal__inner ${t.classes ? t.classes : ""}">
      <button class="modal__close button button--tertiary button--icon"> 
      <span class="button__inner"> 
        <span class="button__icon"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.832 11.7527L3.53906 4.45977L4.4583 3.54053L11.7512 10.8334C12.3956 11.4778 12.3956 12.5225 11.7512 13.1669L4.4583 20.4598L3.53906 19.5405L10.832 12.2476C10.9686 12.111 10.9686 11.8893 10.832 11.7527ZM13.9583 10.9598L20.4583 4.45977L19.5391 3.54053L13.0391 10.0405L13.9583 10.9598ZM20.4583 19.5405L13.9583 13.0405L13.0391 13.9598L19.5391 20.4598L20.4583 19.5405Z" fill="#22211F"/>
          </svg>
        </span> 
        ${(g = (p = window.translations) == null ? void 0 : p.close) != null ? g : "Close"}
      </span> 
    </button>
      </div>
    </div>`)
          , r = s.querySelector(".modal__inner")
          , a = () => {
            s.querySelector(".modal__close").addEventListener("click", () => {
                d()
            }
            )
        }
          , o = () => {
            s.querySelector(".modal__inner").appendChild(n)
        }
          , l = () => {
            s.classList.remove("hidden"),
            document.body.classList.add("modal--open"),
            t.fadeIn && setTimeout( () => s.classList.add("modal--fade-in-show")),
            r.addEventListener("click", h => {
                h.stopPropagation()
            }
            ),
            s.addEventListener("click", h => {
                d()
            }
            )
        }
          , d = () => {
            s.classList.add("hidden"),
            document.body.classList.remove("modal--open"),
            t.destroyOnClose && u(),
            t.onClose && t.onClose()
        }
          , c = () => {
            document.body.appendChild(s),
            a(),
            o(),
            t.show && l()
        }
          , u = () => {
            document.body.removeChild(s),
            n = null,
            s = null
        }
        ;
        return c(),
        {
            show: l,
            hide: d,
            destroy: u,
            container: s
        }
    }
      , je = ud;
    var ti = class {
        constructor(e) {
            this.button = e,
            this.videoContainer = this.button.querySelector("[data-button-video-full]"),
            this.videoElement = null,
            this.videoClass = null,
            this.video = null,
            this.modal = null,
            this.init()
        }
        closeModal() {
            this.video.pause(),
            this.video.currentTime(0)
        }
        playVideo() {
            this.initializeVideo(),
            this.modal ? (this.modal.show(),
            this.video.play()) : this.modal = je(this.videoElement, "video", {
                show: !0,
                onClose: () => this.closeModal()
            })
        }
        initializeVideo() {
            this.videoClass || (this.videoClass = me(this.videoElement, {
                autoplay: !0
            }, {
                onActivate: e => {
                    this.video = e
                }
            }))
        }
        addEventListeners() {
            this.button.addEventListener("click", () => this.playVideo()),
            this.button.addEventListener("keydown", e => {
                e.keyCode === 13 && this.playVideo()
            }
            )
        }
        init() {
            if (!this.videoContainer && this.button.dataset.buttonVideoPid) {
                let e = _e(`<div class="hidden" data-button-video-full>
          <div class="sanity-video" data-video="{&quot;controls&quot;:true}" data-video-overrides="{}">
            <div class="sanity-video__play-button-wrapper sanity-video__play-button--hidden">
              <div class="sanity-video__play-button">
              </div>
            </div>
            <div class="sanity-video__poster-image"></div>
            <video id="${this.button.dataset.buttonVideoPid}" class="video-js vjs-16-9" controls preload="auto">
              <source src="${this.button.dataset.buttonVideoPid}" type="video/mux">
            </video>
          </div>
        </div>`);
                this.button.append(e),
                this.videoContainer = e
            }
            this.videoElement = this.videoContainer.firstElementChild,
            this.videoContainer.removeChild(this.videoElement),
            this.addEventListeners()
        }
    }
      , jr = ({parent: i}) => {
        let e = i.querySelectorAll("[data-button-video]");
        Array.from(e).forEach(t => {
            new ti(t)
        }
        )
    }
    ;
    m();
    m();
    m();
    m();
    function Ur(i) {
        return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
    }
    function fn(i={}, e={}) {
        Object.keys(e).forEach(t => {
            typeof i[t] == "undefined" ? i[t] = e[t] : Ur(e[t]) && Ur(i[t]) && Object.keys(e[t]).length > 0 && fn(i[t], e[t])
        }
        )
    }
    var Jr = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null
        },
        querySelectorAll() {
            return []
        },
        getElementById() {
            return null
        },
        createEvent() {
            return {
                initEvent() {}
            }
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return []
                }
            }
        },
        createElementNS() {
            return {}
        },
        importNode() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function J() {
        let i = typeof document != "undefined" ? document : {};
        return fn(i, Jr),
        i
    }
    var fd = {
        document: Jr,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return ""
                }
            }
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {}
        },
        requestAnimationFrame(i) {
            return typeof setTimeout == "undefined" ? (i(),
            null) : setTimeout(i, 0)
        },
        cancelAnimationFrame(i) {
            typeof setTimeout != "undefined" && clearTimeout(i)
        }
    };
    function W() {
        let i = typeof window != "undefined" ? window : {};
        return fn(i, fd),
        i
    }
    m();
    m();
    function hd(i) {
        let e = i.__proto__;
        Object.defineProperty(i, "__proto__", {
            get() {
                return e
            },
            set(t) {
                e.__proto__ = t
            }
        })
    }
    var Ue = class extends Array {
        constructor(e) {
            typeof e == "number" ? super(e) : (super(...e || []),
            hd(this))
        }
    }
    ;
    function ii(i=[]) {
        let e = [];
        return i.forEach(t => {
            Array.isArray(t) ? e.push(...ii(t)) : e.push(t)
        }
        ),
        e
    }
    function Kr(i, e) {
        return Array.prototype.filter.call(i, e)
    }
    function pd(i) {
        let e = [];
        for (let t = 0; t < i.length; t += 1)
            e.indexOf(i[t]) === -1 && e.push(i[t]);
        return e
    }
    function md(i, e) {
        if (typeof i != "string")
            return [i];
        let t = []
          , n = e.querySelectorAll(i);
        for (let s = 0; s < n.length; s += 1)
            t.push(n[s]);
        return t
    }
    function V(i, e) {
        let t = W()
          , n = J()
          , s = [];
        if (!e && i instanceof Ue)
            return i;
        if (!i)
            return new Ue(s);
        if (typeof i == "string") {
            let r = i.trim();
            if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                let a = "div";
                r.indexOf("<li") === 0 && (a = "ul"),
                r.indexOf("<tr") === 0 && (a = "tbody"),
                (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (a = "tr"),
                r.indexOf("<tbody") === 0 && (a = "table"),
                r.indexOf("<option") === 0 && (a = "select");
                let o = n.createElement(a);
                o.innerHTML = r;
                for (let l = 0; l < o.childNodes.length; l += 1)
                    s.push(o.childNodes[l])
            } else
                s = md(i.trim(), e || n)
        } else if (i.nodeType || i === t || i === n)
            s.push(i);
        else if (Array.isArray(i)) {
            if (i instanceof Ue)
                return i;
            s = i
        }
        return new Ue(pd(s))
    }
    V.fn = Ue.prototype;
    function Zr(...i) {
        let e = ii(i.map(t => t.split(" ")));
        return this.forEach(t => {
            t.classList.add(...e)
        }
        ),
        this
    }
    function Qr(...i) {
        let e = ii(i.map(t => t.split(" ")));
        return this.forEach(t => {
            t.classList.remove(...e)
        }
        ),
        this
    }
    function ea(...i) {
        let e = ii(i.map(t => t.split(" ")));
        this.forEach(t => {
            e.forEach(n => {
                t.classList.toggle(n)
            }
            )
        }
        )
    }
    function ta(...i) {
        let e = ii(i.map(t => t.split(" ")));
        return Kr(this, t => e.filter(n => t.classList.contains(n)).length > 0).length > 0
    }
    function ia(i, e) {
        if (arguments.length === 1 && typeof i == "string")
            return this[0] ? this[0].getAttribute(i) : void 0;
        for (let t = 0; t < this.length; t += 1)
            if (arguments.length === 2)
                this[t].setAttribute(i, e);
            else
                for (let n in i)
                    this[t][n] = i[n],
                    this[t].setAttribute(n, i[n]);
        return this
    }
    function na(i) {
        for (let e = 0; e < this.length; e += 1)
            this[e].removeAttribute(i);
        return this
    }
    function sa(i) {
        for (let e = 0; e < this.length; e += 1)
            this[e].style.transform = i;
        return this
    }
    function ra(i) {
        for (let e = 0; e < this.length; e += 1)
            this[e].style.transitionDuration = typeof i != "string" ? `${i}ms` : i;
        return this
    }
    function aa(...i) {
        let[e,t,n,s] = i;
        typeof i[1] == "function" && ([e,n,s] = i,
        t = void 0),
        s || (s = !1);
        function r(d) {
            let c = d.target;
            if (!c)
                return;
            let u = d.target.dom7EventData || [];
            if (u.indexOf(d) < 0 && u.unshift(d),
            V(c).is(t))
                n.apply(c, u);
            else {
                let f = V(c).parents();
                for (let p = 0; p < f.length; p += 1)
                    V(f[p]).is(t) && n.apply(f[p], u)
            }
        }
        function a(d) {
            let c = d && d.target ? d.target.dom7EventData || [] : [];
            c.indexOf(d) < 0 && c.unshift(d),
            n.apply(this, c)
        }
        let o = e.split(" "), l;
        for (let d = 0; d < this.length; d += 1) {
            let c = this[d];
            if (t)
                for (l = 0; l < o.length; l += 1) {
                    let u = o[l];
                    c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                    c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []),
                    c.dom7LiveListeners[u].push({
                        listener: n,
                        proxyListener: r
                    }),
                    c.addEventListener(u, r, s)
                }
            else
                for (l = 0; l < o.length; l += 1) {
                    let u = o[l];
                    c.dom7Listeners || (c.dom7Listeners = {}),
                    c.dom7Listeners[u] || (c.dom7Listeners[u] = []),
                    c.dom7Listeners[u].push({
                        listener: n,
                        proxyListener: a
                    }),
                    c.addEventListener(u, a, s)
                }
        }
        return this
    }
    function oa(...i) {
        let[e,t,n,s] = i;
        typeof i[1] == "function" && ([e,n,s] = i,
        t = void 0),
        s || (s = !1);
        let r = e.split(" ");
        for (let a = 0; a < r.length; a += 1) {
            let o = r[a];
            for (let l = 0; l < this.length; l += 1) {
                let d = this[l], c;
                if (!t && d.dom7Listeners ? c = d.dom7Listeners[o] : t && d.dom7LiveListeners && (c = d.dom7LiveListeners[o]),
                c && c.length)
                    for (let u = c.length - 1; u >= 0; u -= 1) {
                        let f = c[u];
                        n && f.listener === n || n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (d.removeEventListener(o, f.proxyListener, s),
                        c.splice(u, 1)) : n || (d.removeEventListener(o, f.proxyListener, s),
                        c.splice(u, 1))
                    }
            }
        }
        return this
    }
    function la(...i) {
        let e = W()
          , t = i[0].split(" ")
          , n = i[1];
        for (let s = 0; s < t.length; s += 1) {
            let r = t[s];
            for (let a = 0; a < this.length; a += 1) {
                let o = this[a];
                if (e.CustomEvent) {
                    let l = new e.CustomEvent(r,{
                        detail: n,
                        bubbles: !0,
                        cancelable: !0
                    });
                    o.dom7EventData = i.filter( (d, c) => c > 0),
                    o.dispatchEvent(l),
                    o.dom7EventData = [],
                    delete o.dom7EventData
                }
            }
        }
        return this
    }
    function da(i) {
        let e = this;
        function t(n) {
            n.target === this && (i.call(this, n),
            e.off("transitionend", t))
        }
        return i && e.on("transitionend", t),
        this
    }
    function ca(i) {
        if (this.length > 0) {
            if (i) {
                let e = this.styles();
                return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
        }
        return null
    }
    function ua(i) {
        if (this.length > 0) {
            if (i) {
                let e = this.styles();
                return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
        }
        return null
    }
    function fa() {
        if (this.length > 0) {
            let i = W()
              , e = J()
              , t = this[0]
              , n = t.getBoundingClientRect()
              , s = e.body
              , r = t.clientTop || s.clientTop || 0
              , a = t.clientLeft || s.clientLeft || 0
              , o = t === i ? i.scrollY : t.scrollTop
              , l = t === i ? i.scrollX : t.scrollLeft;
            return {
                top: n.top + o - r,
                left: n.left + l - a
            }
        }
        return null
    }
    function ha() {
        let i = W();
        return this[0] ? i.getComputedStyle(this[0], null) : {}
    }
    function pa(i, e) {
        let t = W(), n;
        if (arguments.length === 1)
            if (typeof i == "string") {
                if (this[0])
                    return t.getComputedStyle(this[0], null).getPropertyValue(i)
            } else {
                for (n = 0; n < this.length; n += 1)
                    for (let s in i)
                        this[n].style[s] = i[s];
                return this
            }
        if (arguments.length === 2 && typeof i == "string") {
            for (n = 0; n < this.length; n += 1)
                this[n].style[i] = e;
            return this
        }
        return this
    }
    function ma(i) {
        return i ? (this.forEach( (e, t) => {
            i.apply(e, [e, t])
        }
        ),
        this) : this
    }
    function ga(i) {
        let e = Kr(this, i);
        return V(e)
    }
    function va(i) {
        if (typeof i == "undefined")
            return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1)
            this[e].innerHTML = i;
        return this
    }
    function ya(i) {
        if (typeof i == "undefined")
            return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1)
            this[e].textContent = i;
        return this
    }
    function _a(i) {
        let e = W(), t = J(), n = this[0], s, r;
        if (!n || typeof i == "undefined")
            return !1;
        if (typeof i == "string") {
            if (n.matches)
                return n.matches(i);
            if (n.webkitMatchesSelector)
                return n.webkitMatchesSelector(i);
            if (n.msMatchesSelector)
                return n.msMatchesSelector(i);
            for (s = V(i),
            r = 0; r < s.length; r += 1)
                if (s[r] === n)
                    return !0;
            return !1
        }
        if (i === t)
            return n === t;
        if (i === e)
            return n === e;
        if (i.nodeType || i instanceof Ue) {
            for (s = i.nodeType ? [i] : i,
            r = 0; r < s.length; r += 1)
                if (s[r] === n)
                    return !0;
            return !1
        }
        return !1
    }
    function ba() {
        let i = this[0], e;
        if (i) {
            for (e = 0; (i = i.previousSibling) !== null; )
                i.nodeType === 1 && (e += 1);
            return e
        }
    }
    function xa(i) {
        if (typeof i == "undefined")
            return this;
        let e = this.length;
        if (i > e - 1)
            return V([]);
        if (i < 0) {
            let t = e + i;
            return t < 0 ? V([]) : V([this[t]])
        }
        return V([this[i]])
    }
    function Sa(...i) {
        let e, t = J();
        for (let n = 0; n < i.length; n += 1) {
            e = i[n];
            for (let s = 0; s < this.length; s += 1)
                if (typeof e == "string") {
                    let r = t.createElement("div");
                    for (r.innerHTML = e; r.firstChild; )
                        this[s].appendChild(r.firstChild)
                } else if (e instanceof Ue)
                    for (let r = 0; r < e.length; r += 1)
                        this[s].appendChild(e[r]);
                else
                    this[s].appendChild(e)
        }
        return this
    }
    function Ea(i) {
        let e = J(), t, n;
        for (t = 0; t < this.length; t += 1)
            if (typeof i == "string") {
                let s = e.createElement("div");
                for (s.innerHTML = i,
                n = s.childNodes.length - 1; n >= 0; n -= 1)
                    this[t].insertBefore(s.childNodes[n], this[t].childNodes[0])
            } else if (i instanceof Ue)
                for (n = 0; n < i.length; n += 1)
                    this[t].insertBefore(i[n], this[t].childNodes[0]);
            else
                this[t].insertBefore(i, this[t].childNodes[0]);
        return this
    }
    function Ta(i) {
        return this.length > 0 ? i ? this[0].nextElementSibling && V(this[0].nextElementSibling).is(i) ? V([this[0].nextElementSibling]) : V([]) : this[0].nextElementSibling ? V([this[0].nextElementSibling]) : V([]) : V([])
    }
    function Ca(i) {
        let e = []
          , t = this[0];
        if (!t)
            return V([]);
        for (; t.nextElementSibling; ) {
            let n = t.nextElementSibling;
            i ? V(n).is(i) && e.push(n) : e.push(n),
            t = n
        }
        return V(e)
    }
    function wa(i) {
        if (this.length > 0) {
            let e = this[0];
            return i ? e.previousElementSibling && V(e.previousElementSibling).is(i) ? V([e.previousElementSibling]) : V([]) : e.previousElementSibling ? V([e.previousElementSibling]) : V([])
        }
        return V([])
    }
    function Ma(i) {
        let e = []
          , t = this[0];
        if (!t)
            return V([]);
        for (; t.previousElementSibling; ) {
            let n = t.previousElementSibling;
            i ? V(n).is(i) && e.push(n) : e.push(n),
            t = n
        }
        return V(e)
    }
    function Pa(i) {
        let e = [];
        for (let t = 0; t < this.length; t += 1)
            this[t].parentNode !== null && (i ? V(this[t].parentNode).is(i) && e.push(this[t].parentNode) : e.push(this[t].parentNode));
        return V(e)
    }
    function ka(i) {
        let e = [];
        for (let t = 0; t < this.length; t += 1) {
            let n = this[t].parentNode;
            for (; n; )
                i ? V(n).is(i) && e.push(n) : e.push(n),
                n = n.parentNode
        }
        return V(e)
    }
    function La(i) {
        let e = this;
        return typeof i == "undefined" ? V([]) : (e.is(i) || (e = e.parents(i).eq(0)),
        e)
    }
    function $a(i) {
        let e = [];
        for (let t = 0; t < this.length; t += 1) {
            let n = this[t].querySelectorAll(i);
            for (let s = 0; s < n.length; s += 1)
                e.push(n[s])
        }
        return V(e)
    }
    function Oa(i) {
        let e = [];
        for (let t = 0; t < this.length; t += 1) {
            let n = this[t].children;
            for (let s = 0; s < n.length; s += 1)
                (!i || V(n[s]).is(i)) && e.push(n[s])
        }
        return V(e)
    }
    function Ia() {
        for (let i = 0; i < this.length; i += 1)
            this[i].parentNode && this[i].parentNode.removeChild(this[i]);
        return this
    }
    var gd = "resize scroll".split(" ");
    function se(i) {
        function e(...t) {
            if (typeof t[0] == "undefined") {
                for (let n = 0; n < this.length; n += 1)
                    gd.indexOf(i) < 0 && (i in this[n] ? this[n][i]() : V(this[n]).trigger(i));
                return this
            }
            return this.on(i, ...t)
        }
        return e
    }
    var _f = se("click")
      , bf = se("blur")
      , xf = se("focus")
      , Sf = se("focusin")
      , Ef = se("focusout")
      , Tf = se("keyup")
      , Cf = se("keydown")
      , wf = se("keypress")
      , Mf = se("submit")
      , Pf = se("change")
      , kf = se("mousedown")
      , Lf = se("mousemove")
      , $f = se("mouseup")
      , Of = se("mouseenter")
      , If = se("mouseleave")
      , Af = se("mouseout")
      , Df = se("mouseover")
      , zf = se("touchstart")
      , Rf = se("touchend")
      , Ff = se("touchmove")
      , Nf = se("resize")
      , Bf = se("scroll");
    var Aa = {
        addClass: Zr,
        removeClass: Qr,
        hasClass: ta,
        toggleClass: ea,
        attr: ia,
        removeAttr: na,
        transform: sa,
        transition: ra,
        on: aa,
        off: oa,
        trigger: la,
        transitionEnd: da,
        outerWidth: ca,
        outerHeight: ua,
        styles: ha,
        offset: fa,
        css: pa,
        each: ma,
        html: va,
        text: ya,
        is: _a,
        index: ba,
        eq: xa,
        append: Sa,
        prepend: Ea,
        next: Ta,
        nextAll: Ca,
        prev: wa,
        prevAll: Ma,
        parent: Pa,
        parents: ka,
        closest: La,
        find: $a,
        children: Oa,
        filter: ga,
        remove: Ia
    };
    Object.keys(Aa).forEach(i => {
        Object.defineProperty(V.fn, i, {
            value: Aa[i],
            writable: !0
        })
    }
    );
    var F = V;
    m();
    function Da(i) {
        let e = i;
        Object.keys(e).forEach(t => {
            try {
                e[t] = null
            } catch (n) {}
            try {
                delete e[t]
            } catch (n) {}
        }
        )
    }
    function Je(i, e=0) {
        return setTimeout(i, e)
    }
    function Ye() {
        return Date.now()
    }
    function vd(i) {
        let e = W(), t;
        return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
        !t && i.currentStyle && (t = i.currentStyle),
        t || (t = i.style),
        t
    }
    function hn(i, e="x") {
        let t = W(), n, s, r, a = vd(i, null);
        return t.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform,
        s.split(",").length > 6 && (s = s.split(", ").map(o => o.replace(",", ".")).join(", ")),
        r = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        n = r.toString().split(",")),
        e === "x" && (t.WebKitCSSMatrix ? s = r.m41 : n.length === 16 ? s = parseFloat(n[12]) : s = parseFloat(n[4])),
        e === "y" && (t.WebKitCSSMatrix ? s = r.m42 : n.length === 16 ? s = parseFloat(n[13]) : s = parseFloat(n[5])),
        s || 0
    }
    function ni(i) {
        return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
    }
    function yd(i) {
        return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
    }
    function xe(...i) {
        let e = Object(i[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < i.length; n += 1) {
            let s = i[n];
            if (s != null && !yd(s)) {
                let r = Object.keys(Object(s)).filter(a => t.indexOf(a) < 0);
                for (let a = 0, o = r.length; a < o; a += 1) {
                    let l = r[a]
                      , d = Object.getOwnPropertyDescriptor(s, l);
                    d !== void 0 && d.enumerable && (ni(e[l]) && ni(s[l]) ? s[l].__swiper__ ? e[l] = s[l] : xe(e[l], s[l]) : !ni(e[l]) && ni(s[l]) ? (e[l] = {},
                    s[l].__swiper__ ? e[l] = s[l] : xe(e[l], s[l])) : e[l] = s[l])
                }
            }
        }
        return e
    }
    function zt(i, e, t) {
        i.style.setProperty(e, t)
    }
    function Ti({swiper: i, targetPosition: e, side: t}) {
        let n = W(), s = -i.translate, r = null, a, o = i.params.speed;
        i.wrapperEl.style.scrollSnapType = "none",
        n.cancelAnimationFrame(i.cssModeFrameID);
        let l = e > s ? "next" : "prev"
          , d = (u, f) => l === "next" && u >= f || l === "prev" && u <= f
          , c = () => {
            a = new Date().getTime(),
            r === null && (r = a);
            let u = Math.max(Math.min((a - r) / o, 1), 0)
              , f = .5 - Math.cos(u * Math.PI) / 2
              , p = s + f * (e - s);
            if (d(p, e) && (p = e),
            i.wrapperEl.scrollTo({
                [t]: p
            }),
            d(p, e)) {
                i.wrapperEl.style.overflow = "hidden",
                i.wrapperEl.style.scrollSnapType = "",
                setTimeout( () => {
                    i.wrapperEl.style.overflow = "",
                    i.wrapperEl.scrollTo({
                        [t]: p
                    })
                }
                ),
                n.cancelAnimationFrame(i.cssModeFrameID);
                return
            }
            i.cssModeFrameID = n.requestAnimationFrame(c)
        }
        ;
        c()
    }
    m();
    var pn;
    function _d() {
        let i = W()
          , e = J();
        return {
            smoothScroll: e.documentElement && "scrollBehavior"in e.documentElement.style,
            touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch),
            passiveListener: function() {
                let n = !1;
                try {
                    let s = Object.defineProperty({}, "passive", {
                        get() {
                            n = !0
                        }
                    });
                    i.addEventListener("testPassiveListener", null, s)
                } catch (s) {}
                return n
            }(),
            gestures: function() {
                return "ongesturestart"in i
            }()
        }
    }
    function Ci() {
        return pn || (pn = _d()),
        pn
    }
    m();
    var mn;
    function bd({userAgent: i}={}) {
        let e = Ci()
          , t = W()
          , n = t.navigator.platform
          , s = i || t.navigator.userAgent
          , r = {
            ios: !1,
            android: !1
        }
          , a = t.screen.width
          , o = t.screen.height
          , l = s.match(/(Android);?[\s\/]+([\d.]+)?/)
          , d = s.match(/(iPad).*OS\s([\d_]+)/)
          , c = s.match(/(iPod)(.*OS\s([\d_]+))?/)
          , u = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          , f = n === "Win32"
          , p = n === "MacIntel"
          , g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
        return !d && p && e.touch && g.indexOf(`${a}x${o}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/),
        d || (d = [0, 1, "13_0_0"]),
        p = !1),
        l && !f && (r.os = "android",
        r.android = !0),
        (d || u || c) && (r.os = "ios",
        r.ios = !0),
        r
    }
    function za(i={}) {
        return mn || (mn = bd(i)),
        mn
    }
    m();
    var gn;
    function xd() {
        let i = W();
        function e() {
            let t = i.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
        }
        return {
            isSafari: e(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
        }
    }
    function Ra() {
        return gn || (gn = xd()),
        gn
    }
    m();
    function vn({swiper: i, on: e, emit: t}) {
        let n = W()
          , s = null
          , r = null
          , a = () => {
            !i || i.destroyed || !i.initialized || (t("beforeResize"),
            t("resize"))
        }
          , o = () => {
            !i || i.destroyed || !i.initialized || (s = new ResizeObserver(c => {
                r = n.requestAnimationFrame( () => {
                    let {width: u, height: f} = i
                      , p = u
                      , g = f;
                    c.forEach( ({contentBoxSize: h, contentRect: v, target: b}) => {
                        b && b !== i.el || (p = v ? v.width : (h[0] || h).inlineSize,
                        g = v ? v.height : (h[0] || h).blockSize)
                    }
                    ),
                    (p !== u || g !== f) && a()
                }
                )
            }
            ),
            s.observe(i.el))
        }
          , l = () => {
            r && n.cancelAnimationFrame(r),
            s && s.unobserve && i.el && (s.unobserve(i.el),
            s = null)
        }
          , d = () => {
            !i || i.destroyed || !i.initialized || t("orientationchange")
        }
        ;
        e("init", () => {
            if (i.params.resizeObserver && typeof n.ResizeObserver != "undefined") {
                o();
                return
            }
            n.addEventListener("resize", a),
            n.addEventListener("orientationchange", d)
        }
        ),
        e("destroy", () => {
            l(),
            n.removeEventListener("resize", a),
            n.removeEventListener("orientationchange", d)
        }
        )
    }
    m();
    function yn({swiper: i, extendParams: e, on: t, emit: n}) {
        let s = []
          , r = W()
          , a = (d, c={}) => {
            let u = r.MutationObserver || r.WebkitMutationObserver
              , f = new u(p => {
                if (p.length === 1) {
                    n("observerUpdate", p[0]);
                    return
                }
                let g = function() {
                    n("observerUpdate", p[0])
                };
                r.requestAnimationFrame ? r.requestAnimationFrame(g) : r.setTimeout(g, 0)
            }
            );
            f.observe(d, {
                attributes: typeof c.attributes == "undefined" ? !0 : c.attributes,
                childList: typeof c.childList == "undefined" ? !0 : c.childList,
                characterData: typeof c.characterData == "undefined" ? !0 : c.characterData
            }),
            s.push(f)
        }
          , o = () => {
            if (!!i.params.observer) {
                if (i.params.observeParents) {
                    let d = i.$el.parents();
                    for (let c = 0; c < d.length; c += 1)
                        a(d[c])
                }
                a(i.$el[0], {
                    childList: i.params.observeSlideChildren
                }),
                a(i.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
          , l = () => {
            s.forEach(d => {
                d.disconnect()
            }
            ),
            s.splice(0, s.length)
        }
        ;
        e({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        t("init", o),
        t("destroy", l)
    }
    m();
    var Fa = {
        on(i, e, t) {
            let n = this;
            if (!n.eventsListeners || n.destroyed || typeof e != "function")
                return n;
            let s = t ? "unshift" : "push";
            return i.split(" ").forEach(r => {
                n.eventsListeners[r] || (n.eventsListeners[r] = []),
                n.eventsListeners[r][s](e)
            }
            ),
            n
        },
        once(i, e, t) {
            let n = this;
            if (!n.eventsListeners || n.destroyed || typeof e != "function")
                return n;
            function s(...r) {
                n.off(i, s),
                s.__emitterProxy && delete s.__emitterProxy,
                e.apply(n, r)
            }
            return s.__emitterProxy = e,
            n.on(i, s, t)
        },
        onAny(i, e) {
            let t = this;
            if (!t.eventsListeners || t.destroyed || typeof i != "function")
                return t;
            let n = e ? "unshift" : "push";
            return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[n](i),
            t
        },
        offAny(i) {
            let e = this;
            if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
                return e;
            let t = e.eventsAnyListeners.indexOf(i);
            return t >= 0 && e.eventsAnyListeners.splice(t, 1),
            e
        },
        off(i, e) {
            let t = this;
            return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(n => {
                typeof e == "undefined" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach( (s, r) => {
                    (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[n].splice(r, 1)
                }
                )
            }
            ),
            t
        },
        emit(...i) {
            let e = this;
            if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
                return e;
            let t, n, s;
            return typeof i[0] == "string" || Array.isArray(i[0]) ? (t = i[0],
            n = i.slice(1, i.length),
            s = e) : (t = i[0].events,
            n = i[0].data,
            s = i[0].context || e),
            n.unshift(s),
            (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(o => {
                    o.apply(s, [a, ...n])
                }
                ),
                e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(o => {
                    o.apply(s, n)
                }
                )
            }
            ),
            e
        }
    };
    m();
    m();
    function _n() {
        let i = this, e, t, n = i.$el;
        typeof i.params.width != "undefined" && i.params.width !== null ? e = i.params.width : e = n[0].clientWidth,
        typeof i.params.height != "undefined" && i.params.height !== null ? t = i.params.height : t = n[0].clientHeight,
        !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10),
        t = t - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(i, {
            width: e,
            height: t,
            size: i.isHorizontal() ? e : t
        }))
    }
    m();
    function bn() {
        let i = this;
        function e($) {
            return i.isHorizontal() ? $ : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[$]
        }
        function t($, I) {
            return parseFloat($.getPropertyValue(e(I)) || 0)
        }
        let n = i.params
          , {$wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: o} = i
          , l = i.virtual && n.virtual.enabled
          , d = l ? i.virtual.slides.length : i.slides.length
          , c = s.children(`.${i.params.slideClass}`)
          , u = l ? i.virtual.slides.length : c.length
          , f = []
          , p = []
          , g = []
          , h = n.slidesOffsetBefore;
        typeof h == "function" && (h = n.slidesOffsetBefore.call(i));
        let v = n.slidesOffsetAfter;
        typeof v == "function" && (v = n.slidesOffsetAfter.call(i));
        let b = i.snapGrid.length
          , x = i.slidesGrid.length
          , _ = n.spaceBetween
          , T = -h
          , y = 0
          , S = 0;
        if (typeof r == "undefined")
            return;
        typeof _ == "string" && _.indexOf("%") >= 0 && (_ = parseFloat(_.replace("%", "")) / 100 * r),
        i.virtualSize = -_,
        a ? c.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
        }) : c.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
        }),
        n.centeredSlides && n.cssMode && (zt(i.wrapperEl, "--swiper-centered-offset-before", ""),
        zt(i.wrapperEl, "--swiper-centered-offset-after", ""));
        let C = n.grid && n.grid.rows > 1 && i.grid;
        C && i.grid.initSlides(u);
        let k, L = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter($ => typeof n.breakpoints[$].slidesPerView != "undefined").length > 0;
        for (let $ = 0; $ < u; $ += 1) {
            k = 0;
            let I = c.eq($);
            if (C && i.grid.updateSlide($, I, u, e),
            I.css("display") !== "none") {
                if (n.slidesPerView === "auto") {
                    L && (c[$].style[e("width")] = "");
                    let M = getComputedStyle(I[0])
                      , O = I[0].style.transform
                      , N = I[0].style.webkitTransform;
                    if (O && (I[0].style.transform = "none"),
                    N && (I[0].style.webkitTransform = "none"),
                    n.roundLengths)
                        k = i.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                    else {
                        let A = t(M, "width")
                          , D = t(M, "padding-left")
                          , w = t(M, "padding-right")
                          , z = t(M, "margin-left")
                          , q = t(M, "margin-right")
                          , ne = M.getPropertyValue("box-sizing");
                        if (ne && ne === "border-box")
                            k = A + z + q;
                        else {
                            let {clientWidth: pe, offsetWidth: ye} = I[0];
                            k = A + D + w + z + q + (ye - pe)
                        }
                    }
                    O && (I[0].style.transform = O),
                    N && (I[0].style.webkitTransform = N),
                    n.roundLengths && (k = Math.floor(k))
                } else
                    k = (r - (n.slidesPerView - 1) * _) / n.slidesPerView,
                    n.roundLengths && (k = Math.floor(k)),
                    c[$] && (c[$].style[e("width")] = `${k}px`);
                c[$] && (c[$].swiperSlideSize = k),
                g.push(k),
                n.centeredSlides ? (T = T + k / 2 + y / 2 + _,
                y === 0 && $ !== 0 && (T = T - r / 2 - _),
                $ === 0 && (T = T - r / 2 - _),
                Math.abs(T) < 1 / 1e3 && (T = 0),
                n.roundLengths && (T = Math.floor(T)),
                S % n.slidesPerGroup === 0 && f.push(T),
                p.push(T)) : (n.roundLengths && (T = Math.floor(T)),
                (S - Math.min(i.params.slidesPerGroupSkip, S)) % i.params.slidesPerGroup === 0 && f.push(T),
                p.push(T),
                T = T + k + _),
                i.virtualSize += k + _,
                y = k,
                S += 1
            }
        }
        if (i.virtualSize = Math.max(i.virtualSize, r) + v,
        a && o && (n.effect === "slide" || n.effect === "coverflow") && s.css({
            width: `${i.virtualSize + n.spaceBetween}px`
        }),
        n.setWrapperSize && s.css({
            [e("width")]: `${i.virtualSize + n.spaceBetween}px`
        }),
        C && i.grid.updateWrapperSize(k, f, e),
        !n.centeredSlides) {
            let $ = [];
            for (let I = 0; I < f.length; I += 1) {
                let M = f[I];
                n.roundLengths && (M = Math.floor(M)),
                f[I] <= i.virtualSize - r && $.push(M)
            }
            f = $,
            Math.floor(i.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(i.virtualSize - r)
        }
        if (f.length === 0 && (f = [0]),
        n.spaceBetween !== 0) {
            let $ = i.isHorizontal() && a ? "marginLeft" : e("marginRight");
            c.filter( (I, M) => n.cssMode ? M !== c.length - 1 : !0).css({
                [$]: `${_}px`
            })
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
            let $ = 0;
            g.forEach(M => {
                $ += M + (n.spaceBetween ? n.spaceBetween : 0)
            }
            ),
            $ -= n.spaceBetween;
            let I = $ - r;
            f = f.map(M => M < 0 ? -h : M > I ? I + v : M)
        }
        if (n.centerInsufficientSlides) {
            let $ = 0;
            if (g.forEach(I => {
                $ += I + (n.spaceBetween ? n.spaceBetween : 0)
            }
            ),
            $ -= n.spaceBetween,
            $ < r) {
                let I = (r - $) / 2;
                f.forEach( (M, O) => {
                    f[O] = M - I
                }
                ),
                p.forEach( (M, O) => {
                    p[O] = M + I
                }
                )
            }
        }
        if (Object.assign(i, {
            slides: c,
            snapGrid: f,
            slidesGrid: p,
            slidesSizesGrid: g
        }),
        n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
            zt(i.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
            zt(i.wrapperEl, "--swiper-centered-offset-after", `${i.size / 2 - g[g.length - 1] / 2}px`);
            let $ = -i.snapGrid[0]
              , I = -i.slidesGrid[0];
            i.snapGrid = i.snapGrid.map(M => M + $),
            i.slidesGrid = i.slidesGrid.map(M => M + I)
        }
        if (u !== d && i.emit("slidesLengthChange"),
        f.length !== b && (i.params.watchOverflow && i.checkOverflow(),
        i.emit("snapGridLengthChange")),
        p.length !== x && i.emit("slidesGridLengthChange"),
        n.watchSlidesProgress && i.updateSlidesOffset(),
        !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
            let $ = `${n.containerModifierClass}backface-hidden`
              , I = i.$el.hasClass($);
            u <= n.maxBackfaceHiddenSlides ? I || i.$el.addClass($) : I && i.$el.removeClass($)
        }
    }
    m();
    function xn(i) {
        let e = this, t = [], n = e.virtual && e.params.virtual.enabled, s = 0, r;
        typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
        let a = o => n ? e.slides.filter(l => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o)[0] : e.slides.eq(o)[0];
        if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)
                (e.visibleSlides || F([])).each(o => {
                    t.push(o)
                }
                );
            else
                for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                    let o = e.activeIndex + r;
                    if (o > e.slides.length && !n)
                        break;
                    t.push(a(o))
                }
        else
            t.push(a(e.activeIndex));
        for (r = 0; r < t.length; r += 1)
            if (typeof t[r] != "undefined") {
                let o = t[r].offsetHeight;
                s = o > s ? o : s
            }
        (s || s === 0) && e.$wrapperEl.css("height", `${s}px`)
    }
    m();
    function Sn() {
        let i = this
          , e = i.slides;
        for (let t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = i.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
    }
    m();
    function En(i=this && this.translate || 0) {
        let e = this
          , t = e.params
          , {slides: n, rtlTranslate: s, snapGrid: r} = e;
        if (n.length === 0)
            return;
        typeof n[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
        let a = -i;
        s && (a = i),
        n.removeClass(t.slideVisibleClass),
        e.visibleSlidesIndexes = [],
        e.visibleSlides = [];
        for (let o = 0; o < n.length; o += 1) {
            let l = n[o]
              , d = l.swiperSlideOffset;
            t.cssMode && t.centeredSlides && (d -= n[0].swiperSlideOffset);
            let c = (a + (t.centeredSlides ? e.minTranslate() : 0) - d) / (l.swiperSlideSize + t.spaceBetween)
              , u = (a - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (l.swiperSlideSize + t.spaceBetween)
              , f = -(a - d)
              , p = f + e.slidesSizesGrid[o];
            (f >= 0 && f < e.size - 1 || p > 1 && p <= e.size || f <= 0 && p >= e.size) && (e.visibleSlides.push(l),
            e.visibleSlidesIndexes.push(o),
            n.eq(o).addClass(t.slideVisibleClass)),
            l.progress = s ? -c : c,
            l.originalProgress = s ? -u : u
        }
        e.visibleSlides = F(e.visibleSlides)
    }
    m();
    function Tn(i) {
        let e = this;
        if (typeof i == "undefined") {
            let d = e.rtlTranslate ? -1 : 1;
            i = e && e.translate && e.translate * d || 0
        }
        let t = e.params
          , n = e.maxTranslate() - e.minTranslate()
          , {progress: s, isBeginning: r, isEnd: a} = e
          , o = r
          , l = a;
        n === 0 ? (s = 0,
        r = !0,
        a = !0) : (s = (i - e.minTranslate()) / n,
        r = s <= 0,
        a = s >= 1),
        Object.assign(e, {
            progress: s,
            isBeginning: r,
            isEnd: a
        }),
        (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
        r && !o && e.emit("reachBeginning toEdge"),
        a && !l && e.emit("reachEnd toEdge"),
        (o && !r || l && !a) && e.emit("fromEdge"),
        e.emit("progress", s)
    }
    m();
    function Cn() {
        let i = this
          , {slides: e, params: t, $wrapperEl: n, activeIndex: s, realIndex: r} = i
          , a = i.virtual && t.virtual.enabled;
        e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);
        let o;
        a ? o = i.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : o = e.eq(s),
        o.addClass(t.slideActiveClass),
        t.loop && (o.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass));
        let l = o.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
        t.loop && l.length === 0 && (l = e.eq(0),
        l.addClass(t.slideNextClass));
        let d = o.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
        t.loop && d.length === 0 && (d = e.eq(-1),
        d.addClass(t.slidePrevClass)),
        t.loop && (l.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),
        d.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),
        i.emitSlidesClasses()
    }
    m();
    function wn(i) {
        let e = this, t = e.rtlTranslate ? e.translate : -e.translate, {slidesGrid: n, snapGrid: s, params: r, activeIndex: a, realIndex: o, snapIndex: l} = e, d = i, c;
        if (typeof d == "undefined") {
            for (let f = 0; f < n.length; f += 1)
                typeof n[f + 1] != "undefined" ? t >= n[f] && t < n[f + 1] - (n[f + 1] - n[f]) / 2 ? d = f : t >= n[f] && t < n[f + 1] && (d = f + 1) : t >= n[f] && (d = f);
            r.normalizeSlideIndex && (d < 0 || typeof d == "undefined") && (d = 0)
        }
        if (s.indexOf(t) >= 0)
            c = s.indexOf(t);
        else {
            let f = Math.min(r.slidesPerGroupSkip, d);
            c = f + Math.floor((d - f) / r.slidesPerGroup)
        }
        if (c >= s.length && (c = s.length - 1),
        d === a) {
            c !== l && (e.snapIndex = c,
            e.emit("snapIndexChange"));
            return
        }
        let u = parseInt(e.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
        Object.assign(e, {
            snapIndex: c,
            realIndex: u,
            previousIndex: a,
            activeIndex: d
        }),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
        o !== u && e.emit("realIndexChange"),
        (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
    }
    m();
    function Mn(i) {
        let e = this, t = e.params, n = F(i).closest(`.${t.slideClass}`)[0], s = !1, r;
        if (n) {
            for (let a = 0; a < e.slides.length; a += 1)
                if (e.slides[a] === n) {
                    s = !0,
                    r = a;
                    break
                }
        }
        if (n && s)
            e.clickedSlide = n,
            e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(F(n).attr("data-swiper-slide-index"), 10) : e.clickedIndex = r;
        else {
            e.clickedSlide = void 0,
            e.clickedIndex = void 0;
            return
        }
        t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
    }
    var Na = {
        updateSize: _n,
        updateSlides: bn,
        updateAutoHeight: xn,
        updateSlidesOffset: Sn,
        updateSlidesProgress: En,
        updateProgress: Tn,
        updateSlidesClasses: Cn,
        updateActiveIndex: wn,
        updateClickedSlide: Mn
    };
    m();
    m();
    function Pn(i=this.isHorizontal() ? "x" : "y") {
        let e = this
          , {params: t, rtlTranslate: n, translate: s, $wrapperEl: r} = e;
        if (t.virtualTranslate)
            return n ? -s : s;
        if (t.cssMode)
            return s;
        let a = hn(r[0], i);
        return n && (a = -a),
        a || 0
    }
    m();
    function kn(i, e) {
        let t = this
          , {rtlTranslate: n, params: s, $wrapperEl: r, wrapperEl: a, progress: o} = t
          , l = 0
          , d = 0
          , c = 0;
        t.isHorizontal() ? l = n ? -i : i : d = i,
        s.roundLengths && (l = Math.floor(l),
        d = Math.floor(d)),
        s.cssMode ? a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -d : s.virtualTranslate || r.transform(`translate3d(${l}px, ${d}px, ${c}px)`),
        t.previousTranslate = t.translate,
        t.translate = t.isHorizontal() ? l : d;
        let u, f = t.maxTranslate() - t.minTranslate();
        f === 0 ? u = 0 : u = (i - t.minTranslate()) / f,
        u !== o && t.updateProgress(i),
        t.emit("setTranslate", t.translate, e)
    }
    m();
    function Ln() {
        return -this.snapGrid[0]
    }
    m();
    function $n() {
        return -this.snapGrid[this.snapGrid.length - 1]
    }
    m();
    function On(i=0, e=this.params.speed, t=!0, n=!0, s) {
        let r = this
          , {params: a, wrapperEl: o} = r;
        if (r.animating && a.preventInteractionOnTransition)
            return !1;
        let l = r.minTranslate(), d = r.maxTranslate(), c;
        if (n && i > l ? c = l : n && i < d ? c = d : c = i,
        r.updateProgress(c),
        a.cssMode) {
            let u = r.isHorizontal();
            if (e === 0)
                o[u ? "scrollLeft" : "scrollTop"] = -c;
            else {
                if (!r.support.smoothScroll)
                    return Ti({
                        swiper: r,
                        targetPosition: -c,
                        side: u ? "left" : "top"
                    }),
                    !0;
                o.scrollTo({
                    [u ? "left" : "top"]: -c,
                    behavior: "smooth"
                })
            }
            return !0
        }
        return e === 0 ? (r.setTransition(0),
        r.setTranslate(c),
        t && (r.emit("beforeTransitionStart", e, s),
        r.emit("transitionEnd"))) : (r.setTransition(e),
        r.setTranslate(c),
        t && (r.emit("beforeTransitionStart", e, s),
        r.emit("transitionStart")),
        r.animating || (r.animating = !0,
        r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
            !r || r.destroyed || f.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
            r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
            r.onTranslateToWrapperTransitionEnd = null,
            delete r.onTranslateToWrapperTransitionEnd,
            t && r.emit("transitionEnd"))
        }
        ),
        r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
        !0
    }
    var Ba = {
        getTranslate: Pn,
        setTranslate: kn,
        minTranslate: Ln,
        maxTranslate: $n,
        translateTo: On
    };
    m();
    m();
    function In(i, e) {
        let t = this;
        t.params.cssMode || t.$wrapperEl.transition(i),
        t.emit("setTransition", i, e)
    }
    m();
    m();
    function si({swiper: i, runCallbacks: e, direction: t, step: n}) {
        let {activeIndex: s, previousIndex: r} = i
          , a = t;
        if (a || (s > r ? a = "next" : s < r ? a = "prev" : a = "reset"),
        i.emit(`transition${n}`),
        e && s !== r) {
            if (a === "reset") {
                i.emit(`slideResetTransition${n}`);
                return
            }
            i.emit(`slideChangeTransition${n}`),
            a === "next" ? i.emit(`slideNextTransition${n}`) : i.emit(`slidePrevTransition${n}`)
        }
    }
    function An(i=!0, e) {
        let t = this
          , {params: n} = t;
        n.cssMode || (n.autoHeight && t.updateAutoHeight(),
        si({
            swiper: t,
            runCallbacks: i,
            direction: e,
            step: "Start"
        }))
    }
    m();
    function Dn(i=!0, e) {
        let t = this
          , {params: n} = t;
        t.animating = !1,
        !n.cssMode && (t.setTransition(0),
        si({
            swiper: t,
            runCallbacks: i,
            direction: e,
            step: "End"
        }))
    }
    var qa = {
        setTransition: In,
        transitionStart: An,
        transitionEnd: Dn
    };
    m();
    m();
    function zn(i=0, e=this.params.speed, t=!0, n, s) {
        if (typeof i != "number" && typeof i != "string")
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof i}] given.`);
        if (typeof i == "string") {
            let _ = parseInt(i, 10);
            if (!isFinite(_))
                throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${i}] given.`);
            i = _
        }
        let r = this
          , a = i;
        a < 0 && (a = 0);
        let {params: o, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: u, rtlTranslate: f, wrapperEl: p, enabled: g} = r;
        if (r.animating && o.preventInteractionOnTransition || !g && !n && !s)
            return !1;
        let h = Math.min(r.params.slidesPerGroupSkip, a)
          , v = h + Math.floor((a - h) / r.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        let b = -l[v];
        if (o.normalizeSlideIndex)
            for (let _ = 0; _ < d.length; _ += 1) {
                let T = -Math.floor(b * 100)
                  , y = Math.floor(d[_] * 100)
                  , S = Math.floor(d[_ + 1] * 100);
                typeof d[_ + 1] != "undefined" ? T >= y && T < S - (S - y) / 2 ? a = _ : T >= y && T < S && (a = _ + 1) : T >= y && (a = _)
            }
        if (r.initialized && a !== u && (!r.allowSlideNext && b < r.translate && b < r.minTranslate() || !r.allowSlidePrev && b > r.translate && b > r.maxTranslate() && (u || 0) !== a))
            return !1;
        a !== (c || 0) && t && r.emit("beforeSlideChangeStart"),
        r.updateProgress(b);
        let x;
        if (a > u ? x = "next" : a < u ? x = "prev" : x = "reset",
        f && -b === r.translate || !f && b === r.translate)
            return r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            o.effect !== "slide" && r.setTranslate(b),
            x !== "reset" && (r.transitionStart(t, x),
            r.transitionEnd(t, x)),
            !1;
        if (o.cssMode) {
            let _ = r.isHorizontal()
              , T = f ? b : -b;
            if (e === 0) {
                let y = r.virtual && r.params.virtual.enabled;
                y && (r.wrapperEl.style.scrollSnapType = "none",
                r._immediateVirtual = !0),
                p[_ ? "scrollLeft" : "scrollTop"] = T,
                y && requestAnimationFrame( () => {
                    r.wrapperEl.style.scrollSnapType = "",
                    r._swiperImmediateVirtual = !1
                }
                )
            } else {
                if (!r.support.smoothScroll)
                    return Ti({
                        swiper: r,
                        targetPosition: T,
                        side: _ ? "left" : "top"
                    }),
                    !0;
                p.scrollTo({
                    [_ ? "left" : "top"]: T,
                    behavior: "smooth"
                })
            }
            return !0
        }
        return r.setTransition(e),
        r.setTranslate(b),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", e, n),
        r.transitionStart(t, x),
        e === 0 ? r.transitionEnd(t, x) : r.animating || (r.animating = !0,
        r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(T) {
            !r || r.destroyed || T.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
            r.onSlideToWrapperTransitionEnd = null,
            delete r.onSlideToWrapperTransitionEnd,
            r.transitionEnd(t, x))
        }
        ),
        r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
        !0
    }
    m();
    function Rn(i=0, e=this.params.speed, t=!0, n) {
        if (typeof i == "string") {
            let a = parseInt(i, 10);
            if (!isFinite(a))
                throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${i}] given.`);
            i = a
        }
        let s = this
          , r = i;
        return s.params.loop && (r += s.loopedSlides),
        s.slideTo(r, e, t, n)
    }
    m();
    function Fn(i=this.params.speed, e=!0, t) {
        let n = this
          , {animating: s, enabled: r, params: a} = n;
        if (!r)
            return n;
        let o = a.slidesPerGroup;
        a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        let l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
            if (s && a.loopPreventsSlide)
                return !1;
            n.loopFix(),
            n._clientLeft = n.$wrapperEl[0].clientLeft
        }
        return a.rewind && n.isEnd ? n.slideTo(0, i, e, t) : n.slideTo(n.activeIndex + l, i, e, t)
    }
    m();
    function Nn(i=this.params.speed, e=!0, t) {
        let n = this
          , {params: s, animating: r, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: d} = n;
        if (!d)
            return n;
        if (s.loop) {
            if (r && s.loopPreventsSlide)
                return !1;
            n.loopFix(),
            n._clientLeft = n.$wrapperEl[0].clientLeft
        }
        let c = l ? n.translate : -n.translate;
        function u(v) {
            return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
        }
        let f = u(c)
          , p = a.map(v => u(v))
          , g = a[p.indexOf(f) - 1];
        if (typeof g == "undefined" && s.cssMode) {
            let v;
            a.forEach( (b, x) => {
                f >= b && (v = x)
            }
            ),
            typeof v != "undefined" && (g = a[v > 0 ? v - 1 : v])
        }
        let h = 0;
        if (typeof g != "undefined" && (h = o.indexOf(g),
        h < 0 && (h = n.activeIndex - 1),
        s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1,
        h = Math.max(h, 0))),
        s.rewind && n.isBeginning) {
            let v = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
            return n.slideTo(v, i, e, t)
        }
        return n.slideTo(h, i, e, t)
    }
    m();
    function Bn(i=this.params.speed, e=!0, t) {
        let n = this;
        return n.slideTo(n.activeIndex, i, e, t)
    }
    m();
    function qn(i=this.params.speed, e=!0, t, n=.5) {
        let s = this
          , r = s.activeIndex
          , a = Math.min(s.params.slidesPerGroupSkip, r)
          , o = a + Math.floor((r - a) / s.params.slidesPerGroup)
          , l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[o]) {
            let d = s.snapGrid[o]
              , c = s.snapGrid[o + 1];
            l - d > (c - d) * n && (r += s.params.slidesPerGroup)
        } else {
            let d = s.snapGrid[o - 1]
              , c = s.snapGrid[o];
            l - d <= (c - d) * n && (r -= s.params.slidesPerGroup)
        }
        return r = Math.max(r, 0),
        r = Math.min(r, s.slidesGrid.length - 1),
        s.slideTo(r, i, e, t)
    }
    m();
    function Vn() {
        let i = this, {params: e, $wrapperEl: t} = i, n = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView, s = i.clickedIndex, r;
        if (e.loop) {
            if (i.animating)
                return;
            r = parseInt(F(i.clickedSlide).attr("data-swiper-slide-index"), 10),
            e.centeredSlides ? s < i.loopedSlides - n / 2 || s > i.slides.length - i.loopedSlides + n / 2 ? (i.loopFix(),
            s = t.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),
            Je( () => {
                i.slideTo(s)
            }
            )) : i.slideTo(s) : s > i.slides.length - n ? (i.loopFix(),
            s = t.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),
            Je( () => {
                i.slideTo(s)
            }
            )) : i.slideTo(s)
        } else
            i.slideTo(s)
    }
    var Va = {
        slideTo: zn,
        slideToLoop: Rn,
        slideNext: Fn,
        slidePrev: Nn,
        slideReset: Bn,
        slideToClosest: qn,
        slideToClickedSlide: Vn
    };
    m();
    m();
    function Hn() {
        let i = this
          , e = J()
          , {params: t, $wrapperEl: n} = i
          , s = n.children().length > 0 ? F(n.children()[0].parentNode) : n;
        s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
        let r = s.children(`.${t.slideClass}`);
        if (t.loopFillGroupWithBlank) {
            let l = t.slidesPerGroup - r.length % t.slidesPerGroup;
            if (l !== t.slidesPerGroup) {
                for (let d = 0; d < l; d += 1) {
                    let c = F(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                    s.append(c)
                }
                r = s.children(`.${t.slideClass}`)
            }
        }
        t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = r.length),
        i.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
        i.loopedSlides += t.loopAdditionalSlides,
        i.loopedSlides > r.length && i.params.loopedSlidesLimit && (i.loopedSlides = r.length);
        let a = []
          , o = [];
        r.each( (l, d) => {
            F(l).attr("data-swiper-slide-index", d)
        }
        );
        for (let l = 0; l < i.loopedSlides; l += 1) {
            let d = l - Math.floor(l / r.length) * r.length;
            o.push(r.eq(d)[0]),
            a.unshift(r.eq(r.length - d - 1)[0])
        }
        for (let l = 0; l < o.length; l += 1)
            s.append(F(o[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (let l = a.length - 1; l >= 0; l -= 1)
            s.prepend(F(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass))
    }
    m();
    function Gn() {
        let i = this;
        i.emit("beforeLoopFix");
        let {activeIndex: e, slides: t, loopedSlides: n, allowSlidePrev: s, allowSlideNext: r, snapGrid: a, rtlTranslate: o} = i, l;
        i.allowSlidePrev = !0,
        i.allowSlideNext = !0;
        let c = -a[e] - i.getTranslate();
        e < n ? (l = t.length - n * 3 + e,
        l += n,
        i.slideTo(l, 0, !1, !0) && c !== 0 && i.setTranslate((o ? -i.translate : i.translate) - c)) : e >= t.length - n && (l = -t.length + e + n,
        l += n,
        i.slideTo(l, 0, !1, !0) && c !== 0 && i.setTranslate((o ? -i.translate : i.translate) - c)),
        i.allowSlidePrev = s,
        i.allowSlideNext = r,
        i.emit("loopFix")
    }
    m();
    function Wn() {
        let i = this
          , {$wrapperEl: e, params: t, slides: n} = i;
        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
        n.removeAttr("data-swiper-slide-index")
    }
    var Ha = {
        loopCreate: Hn,
        loopFix: Gn,
        loopDestroy: Wn
    };
    m();
    m();
    function Yn(i) {
        let e = this;
        if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
            return;
        let t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
        t.style.cursor = "move",
        t.style.cursor = i ? "grabbing" : "grab"
    }
    m();
    function Xn() {
        let i = this;
        i.support.touch || i.params.watchOverflow && i.isLocked || i.params.cssMode || (i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
    }
    var Ga = {
        setGrabCursor: Yn,
        unsetGrabCursor: Xn
    };
    m();
    m();
    function Sd(i, e=this) {
        function t(n) {
            if (!n || n === J() || n === W())
                return null;
            n.assignedSlot && (n = n.assignedSlot);
            let s = n.closest(i);
            return !s && !n.getRootNode ? null : s || t(n.getRootNode().host)
        }
        return t(e)
    }
    function jn(i) {
        let e = this
          , t = J()
          , n = W()
          , s = e.touchEventsData
          , {params: r, touches: a, enabled: o} = e;
        if (!o || e.animating && r.preventInteractionOnTransition)
            return;
        !e.animating && r.cssMode && r.loop && e.loopFix();
        let l = i;
        l.originalEvent && (l = l.originalEvent);
        let d = F(l.target);
        if (r.touchEventsTarget === "wrapper" && !d.closest(e.wrapperEl).length || (s.isTouchEvent = l.type === "touchstart",
        !s.isTouchEvent && "which"in l && l.which === 3) || !s.isTouchEvent && "button"in l && l.button > 0 || s.isTouched && s.isMoved)
            return;
        let c = !!r.noSwipingClass && r.noSwipingClass !== ""
          , u = i.composedPath ? i.composedPath() : i.path;
        c && l.target && l.target.shadowRoot && u && (d = F(u[0]));
        let f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
          , p = !!(l.target && l.target.shadowRoot);
        if (r.noSwiping && (p ? Sd(f, d[0]) : d.closest(f)[0])) {
            e.allowClick = !0;
            return
        }
        if (r.swipeHandler && !d.closest(r.swipeHandler)[0])
            return;
        a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX,
        a.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY;
        let g = a.currentX
          , h = a.currentY
          , v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
          , b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (v && (g <= b || g >= n.innerWidth - b))
            if (v === "prevent")
                i.preventDefault();
            else
                return;
        if (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        a.startX = g,
        a.startY = h,
        s.touchStartTime = Ye(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
        r.threshold > 0 && (s.allowThresholdMove = !1),
        l.type !== "touchstart") {
            let x = !0;
            d.is(s.focusableElements) && (x = !1,
            d[0].nodeName === "SELECT" && (s.isTouched = !1)),
            t.activeElement && F(t.activeElement).is(s.focusableElements) && t.activeElement !== d[0] && t.activeElement.blur();
            let _ = x && e.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || _) && !d[0].isContentEditable && l.preventDefault()
        }
        e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
        e.emit("touchStart", l)
    }
    m();
    function Un(i) {
        let e = J()
          , t = this
          , n = t.touchEventsData
          , {params: s, touches: r, rtlTranslate: a, enabled: o} = t;
        if (!o)
            return;
        let l = i;
        if (l.originalEvent && (l = l.originalEvent),
        !n.isTouched) {
            n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l);
            return
        }
        if (n.isTouchEvent && l.type !== "touchmove")
            return;
        let d = l.type === "touchmove" && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
          , c = l.type === "touchmove" ? d.pageX : l.pageX
          , u = l.type === "touchmove" ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper) {
            r.startX = c,
            r.startY = u;
            return
        }
        if (!t.allowTouchMove) {
            F(l.target).is(n.focusableElements) || (t.allowClick = !1),
            n.isTouched && (Object.assign(r, {
                startX: c,
                startY: u,
                currentX: c,
                currentY: u
            }),
            n.touchStartTime = Ye());
            return
        }
        if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
            if (t.isVertical()) {
                if (u < r.startY && t.translate <= t.maxTranslate() || u > r.startY && t.translate >= t.minTranslate()) {
                    n.isTouched = !1,
                    n.isMoved = !1;
                    return
                }
            } else if (c < r.startX && t.translate <= t.maxTranslate() || c > r.startX && t.translate >= t.minTranslate())
                return
        }
        if (n.isTouchEvent && e.activeElement && l.target === e.activeElement && F(l.target).is(n.focusableElements)) {
            n.isMoved = !0,
            t.allowClick = !1;
            return
        }
        if (n.allowTouchCallbacks && t.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
            return;
        r.currentX = c,
        r.currentY = u;
        let f = r.currentX - r.startX
          , p = r.currentY - r.startY;
        if (t.params.threshold && Math.sqrt(_t(f, 2) + _t(p, 2)) < t.params.threshold)
            return;
        if (typeof n.isScrolling == "undefined") {
            let b;
            t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + p * p >= 25 && (b = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI,
            n.isScrolling = t.isHorizontal() ? b > s.touchAngle : 90 - b > s.touchAngle)
        }
        if (n.isScrolling && t.emit("touchMoveOpposite", l),
        typeof n.startMoving == "undefined" && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0),
        n.isScrolling) {
            n.isTouched = !1;
            return
        }
        if (!n.startMoving)
            return;
        t.allowClick = !1,
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        n.isMoved || (s.loop && !s.cssMode && t.loopFix(),
        n.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        n.allowMomentumBounce = !1,
        s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)),
        t.emit("sliderMove", l),
        n.isMoved = !0;
        let g = t.isHorizontal() ? f : p;
        r.diff = g,
        g *= s.touchRatio,
        a && (g = -g),
        t.swipeDirection = g > 0 ? "prev" : "next",
        n.currentTranslate = g + n.startTranslate;
        let h = !0
          , v = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (v = 0),
        g > 0 && n.currentTranslate > t.minTranslate() ? (h = !1,
        s.resistance && (n.currentTranslate = t.minTranslate() - 1 + _t(-t.minTranslate() + n.startTranslate + g, v))) : g < 0 && n.currentTranslate < t.maxTranslate() && (h = !1,
        s.resistance && (n.currentTranslate = t.maxTranslate() + 1 - _t(t.maxTranslate() - n.startTranslate - g, v))),
        h && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
        !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
        !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate),
        s.threshold > 0)
            if (Math.abs(g) > s.threshold || n.allowThresholdMove) {
                if (!n.allowThresholdMove) {
                    n.allowThresholdMove = !0,
                    r.startX = r.currentX,
                    r.startY = r.currentY,
                    n.currentTranslate = n.startTranslate,
                    r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                    return
                }
            } else {
                n.currentTranslate = n.startTranslate;
                return
            }
        !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(),
        t.updateSlidesClasses()),
        t.params.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
        t.updateProgress(n.currentTranslate),
        t.setTranslate(n.currentTranslate))
    }
    m();
    function Jn(i) {
        let e = this
          , t = e.touchEventsData
          , {params: n, touches: s, rtlTranslate: r, slidesGrid: a, enabled: o} = e;
        if (!o)
            return;
        let l = i;
        if (l.originalEvent && (l = l.originalEvent),
        t.allowTouchCallbacks && e.emit("touchEnd", l),
        t.allowTouchCallbacks = !1,
        !t.isTouched) {
            t.isMoved && n.grabCursor && e.setGrabCursor(!1),
            t.isMoved = !1,
            t.startMoving = !1;
            return
        }
        n.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
        let d = Ye()
          , c = d - t.touchStartTime;
        if (e.allowClick) {
            let x = l.path || l.composedPath && l.composedPath();
            e.updateClickedSlide(x && x[0] || l.target),
            e.emit("tap click", l),
            c < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", l)
        }
        if (t.lastClickTime = Ye(),
        Je( () => {
            e.destroyed || (e.allowClick = !0)
        }
        ),
        !t.isTouched || !t.isMoved || !e.swipeDirection || s.diff === 0 || t.currentTranslate === t.startTranslate) {
            t.isTouched = !1,
            t.isMoved = !1,
            t.startMoving = !1;
            return
        }
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        let u;
        if (n.followFinger ? u = r ? e.translate : -e.translate : u = -t.currentTranslate,
        n.cssMode)
            return;
        if (e.params.freeMode && n.freeMode.enabled) {
            e.freeMode.onTouchEnd({
                currentPos: u
            });
            return
        }
        let f = 0
          , p = e.slidesSizesGrid[0];
        for (let x = 0; x < a.length; x += x < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
            let _ = x < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            typeof a[x + _] != "undefined" ? u >= a[x] && u < a[x + _] && (f = x,
            p = a[x + _] - a[x]) : u >= a[x] && (f = x,
            p = a[a.length - 1] - a[a.length - 2])
        }
        let g = null
          , h = null;
        n.rewind && (e.isBeginning ? h = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
        let v = (u - a[f]) / p
          , b = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (c > n.longSwipesMs) {
            if (!n.longSwipes) {
                e.slideTo(e.activeIndex);
                return
            }
            e.swipeDirection === "next" && (v >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? g : f + b) : e.slideTo(f)),
            e.swipeDirection === "prev" && (v > 1 - n.longSwipesRatio ? e.slideTo(f + b) : h !== null && v < 0 && Math.abs(v) > n.longSwipesRatio ? e.slideTo(h) : e.slideTo(f))
        } else {
            if (!n.shortSwipes) {
                e.slideTo(e.activeIndex);
                return
            }
            e.navigation && (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl) ? l.target === e.navigation.nextEl ? e.slideTo(f + b) : e.slideTo(f) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : f + b),
            e.swipeDirection === "prev" && e.slideTo(h !== null ? h : f))
        }
    }
    m();
    function wi() {
        let i = this
          , {params: e, el: t} = i;
        if (t && t.offsetWidth === 0)
            return;
        e.breakpoints && i.setBreakpoint();
        let {allowSlideNext: n, allowSlidePrev: s, snapGrid: r} = i;
        i.allowSlideNext = !0,
        i.allowSlidePrev = !0,
        i.updateSize(),
        i.updateSlides(),
        i.updateSlidesClasses(),
        (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
        i.allowSlidePrev = s,
        i.allowSlideNext = n,
        i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
    }
    m();
    function Kn(i) {
        let e = this;
        !e.enabled || e.allowClick || (e.params.preventClicks && i.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
        i.stopImmediatePropagation()))
    }
    m();
    function Zn() {
        let i = this
          , {wrapperEl: e, rtlTranslate: t, enabled: n} = i;
        if (!n)
            return;
        i.previousTranslate = i.translate,
        i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
        i.translate === 0 && (i.translate = 0),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
        let s, r = i.maxTranslate() - i.minTranslate();
        r === 0 ? s = 0 : s = (i.translate - i.minTranslate()) / r,
        s !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
        i.emit("setTranslate", i.translate, !1)
    }
    var Wa = !1;
    function Ed() {}
    var Ya = (i, e) => {
        let t = J()
          , {params: n, touchEvents: s, el: r, wrapperEl: a, device: o, support: l} = i
          , d = !!n.nested
          , c = e === "on" ? "addEventListener" : "removeEventListener"
          , u = e;
        if (!l.touch)
            r[c](s.start, i.onTouchStart, !1),
            t[c](s.move, i.onTouchMove, d),
            t[c](s.end, i.onTouchEnd, !1);
        else {
            let f = s.start === "touchstart" && l.passiveListener && n.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1;
            r[c](s.start, i.onTouchStart, f),
            r[c](s.move, i.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: d
            } : d),
            r[c](s.end, i.onTouchEnd, f),
            s.cancel && r[c](s.cancel, i.onTouchEnd, f)
        }
        (n.preventClicks || n.preventClicksPropagation) && r[c]("click", i.onClick, !0),
        n.cssMode && a[c]("scroll", i.onScroll),
        n.updateOnWindowResize ? i[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", wi, !0) : i[u]("observerUpdate", wi, !0)
    }
    ;
    function Td() {
        let i = this
          , e = J()
          , {params: t, support: n} = i;
        i.onTouchStart = jn.bind(i),
        i.onTouchMove = Un.bind(i),
        i.onTouchEnd = Jn.bind(i),
        t.cssMode && (i.onScroll = Zn.bind(i)),
        i.onClick = Kn.bind(i),
        n.touch && !Wa && (e.addEventListener("touchstart", Ed),
        Wa = !0),
        Ya(i, "on")
    }
    function Cd() {
        Ya(this, "off")
    }
    var Xa = {
        attachEvents: Td,
        detachEvents: Cd
    };
    m();
    m();
    var ja = (i, e) => i.grid && e.grid && e.grid.rows > 1;
    function Qn() {
        let i = this
          , {activeIndex: e, initialized: t, loopedSlides: n=0, params: s, $el: r} = i
          , a = s.breakpoints;
        if (!a || a && Object.keys(a).length === 0)
            return;
        let o = i.getBreakpoint(a, i.params.breakpointsBase, i.el);
        if (!o || i.currentBreakpoint === o)
            return;
        let d = (o in a ? a[o] : void 0) || i.originalParams
          , c = ja(i, s)
          , u = ja(i, d)
          , f = s.enabled;
        c && !u ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`),
        i.emitContainerClasses()) : !c && u && (r.addClass(`${s.containerModifierClass}grid`),
        (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && s.grid.fill === "column") && r.addClass(`${s.containerModifierClass}grid-column`),
        i.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(v => {
            let b = s[v] && s[v].enabled
              , x = d[v] && d[v].enabled;
            b && !x && i[v].disable(),
            !b && x && i[v].enable()
        }
        );
        let p = d.direction && d.direction !== s.direction
          , g = s.loop && (d.slidesPerView !== s.slidesPerView || p);
        p && t && i.changeDirection(),
        xe(i.params, d);
        let h = i.params.enabled;
        Object.assign(i, {
            allowTouchMove: i.params.allowTouchMove,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev
        }),
        f && !h ? i.disable() : !f && h && i.enable(),
        i.currentBreakpoint = o,
        i.emit("_beforeBreakpoint", d),
        g && t && (i.loopDestroy(),
        i.loopCreate(),
        i.updateSlides(),
        i.slideTo(e - n + i.loopedSlides, 0, !1)),
        i.emit("breakpoint", d)
    }
    m();
    function es(i, e="window", t) {
        if (!i || e === "container" && !t)
            return;
        let n = !1
          , s = W()
          , r = e === "window" ? s.innerHeight : t.clientHeight
          , a = Object.keys(i).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                let l = parseFloat(o.substr(1));
                return {
                    value: r * l,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        }
        );
        a.sort( (o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
        for (let o = 0; o < a.length; o += 1) {
            let {point: l, value: d} = a[o];
            e === "window" ? s.matchMedia(`(min-width: ${d}px)`).matches && (n = l) : d <= t.clientWidth && (n = l)
        }
        return n || "max"
    }
    var Ua = {
        setBreakpoint: Qn,
        getBreakpoint: es
    };
    m();
    m();
    function wd(i, e) {
        let t = [];
        return i.forEach(n => {
            typeof n == "object" ? Object.keys(n).forEach(s => {
                n[s] && t.push(e + s)
            }
            ) : typeof n == "string" && t.push(e + n)
        }
        ),
        t
    }
    function ts() {
        let i = this
          , {classNames: e, params: t, rtl: n, $el: s, device: r, support: a} = i
          , o = wd(["initialized", t.direction, {
            "pointer-events": !a.touch
        }, {
            "free-mode": i.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: n
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
        e.push(...o),
        s.addClass([...e].join(" ")),
        i.emitContainerClasses()
    }
    m();
    function is() {
        let i = this
          , {$el: e, classNames: t} = i;
        e.removeClass(t.join(" ")),
        i.emitContainerClasses()
    }
    var Ja = {
        addClasses: ts,
        removeClasses: is
    };
    m();
    m();
    function ns(i, e, t, n, s, r) {
        let a = W(), o;
        function l() {
            r && r()
        }
        !F(i).parent("picture")[0] && (!i.complete || !s) && e ? (o = new a.Image,
        o.onload = l,
        o.onerror = l,
        n && (o.sizes = n),
        t && (o.srcset = t),
        e && (o.src = e)) : l()
    }
    m();
    function ss() {
        let i = this;
        i.imagesToLoad = i.$el.find("img");
        function e() {
            typeof i == "undefined" || i === null || !i || i.destroyed || (i.imagesLoaded !== void 0 && (i.imagesLoaded += 1),
            i.imagesLoaded === i.imagesToLoad.length && (i.params.updateOnImagesReady && i.update(),
            i.emit("imagesReady")))
        }
        for (let t = 0; t < i.imagesToLoad.length; t += 1) {
            let n = i.imagesToLoad[t];
            i.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
        }
    }
    var Ka = {
        loadImage: ns,
        preloadImages: ss
    };
    m();
    function Md() {
        let i = this
          , {isLocked: e, params: t} = i
          , {slidesOffsetBefore: n} = t;
        if (n) {
            let s = i.slides.length - 1
              , r = i.slidesGrid[s] + i.slidesSizesGrid[s] + n * 2;
            i.isLocked = i.size > r
        } else
            i.isLocked = i.snapGrid.length === 1;
        t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
        t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
        e && e !== i.isLocked && (i.isEnd = !1),
        e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
    }
    var Za = {
        checkOverflow: Md
    };
    m();
    var rs = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    m();
    function as(i, e) {
        return function(n={}) {
            let s = Object.keys(n)[0]
              , r = n[s];
            if (typeof r != "object" || r === null) {
                xe(e, n);
                return
            }
            if (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && i[s] === !0 && (i[s] = {
                auto: !0
            }),
            !(s in i && "enabled"in r)) {
                xe(e, n);
                return
            }
            i[s] === !0 && (i[s] = {
                enabled: !0
            }),
            typeof i[s] == "object" && !("enabled"in i[s]) && (i[s].enabled = !0),
            i[s] || (i[s] = {
                enabled: !1
            }),
            xe(e, n)
        }
    }
    var os = {
        eventsEmitter: Fa,
        update: Na,
        translate: Ba,
        transition: qa,
        slide: Va,
        loop: Ha,
        grabCursor: Ga,
        events: Xa,
        breakpoints: Ua,
        checkOverflow: Za,
        classes: Ja,
        images: Ka
    }
      , ls = {}
      , Pe = class {
        constructor(...e) {
            let t, n;
            if (e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? n = e[0] : [t,n] = e,
            n || (n = {}),
            n = xe({}, n),
            t && !n.el && (n.el = t),
            n.el && F(n.el).length > 1) {
                let o = [];
                return F(n.el).each(l => {
                    let d = xe({}, n, {
                        el: l
                    });
                    o.push(new Pe(d))
                }
                ),
                o
            }
            let s = this;
            s.__swiper__ = !0,
            s.support = Ci(),
            s.device = za({
                userAgent: n.userAgent
            }),
            s.browser = Ra(),
            s.eventsListeners = {},
            s.eventsAnyListeners = [],
            s.modules = [...s.__modules__],
            n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
            let r = {};
            s.modules.forEach(o => {
                o({
                    swiper: s,
                    extendParams: as(n, r),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            }
            );
            let a = xe({}, rs, r);
            return s.params = xe({}, a, ls, n),
            s.originalParams = xe({}, s.params),
            s.passedParams = xe({}, n),
            s.params && s.params.on && Object.keys(s.params.on).forEach(o => {
                s.on(o, s.params.on[o])
            }
            ),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            s.$ = F,
            Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: F(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return s.params.direction === "horizontal"
                },
                isVertical() {
                    return s.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function() {
                    let l = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , d = ["pointerdown", "pointermove", "pointerup"];
                    return s.touchEventsTouch = {
                        start: l[0],
                        move: l[1],
                        end: l[2],
                        cancel: l[3]
                    },
                    s.touchEventsDesktop = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    },
                    s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: Ye(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
        }
        enable() {
            let e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            let e = this;
            !e.enabled || (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            let n = this;
            e = Math.min(Math.max(e, 0), 1);
            let s = n.minTranslate()
              , a = (n.maxTranslate() - s) * e + s;
            n.translateTo(a, typeof t == "undefined" ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses()
        }
        emitContainerClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            let t = e.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            let t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0).join(" ")
        }
        emitSlidesClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            let t = [];
            e.slides.each(n => {
                let s = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: s
                }),
                e.emit("_slideClass", n, s)
            }
            ),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1) {
            let n = this
              , {params: s, slides: r, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: d} = n
              , c = 1;
            if (s.centeredSlides) {
                let u = r[d].swiperSlideSize, f;
                for (let p = d + 1; p < r.length; p += 1)
                    r[p] && !f && (u += r[p].swiperSlideSize,
                    c += 1,
                    u > l && (f = !0));
                for (let p = d - 1; p >= 0; p -= 1)
                    r[p] && !f && (u += r[p].swiperSlideSize,
                    c += 1,
                    u > l && (f = !0))
            } else if (e === "current")
                for (let u = d + 1; u < r.length; u += 1)
                    (t ? a[u] + o[u] - a[d] < l : a[u] - a[d] < l) && (c += 1);
            else
                for (let u = d - 1; u >= 0; u -= 1)
                    a[d] - a[u] < l && (c += 1);
            return c
        }
        update() {
            let e = this;
            if (!e || e.destroyed)
                return;
            let {snapGrid: t, params: n} = e;
            n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses();
            function s() {
                let a = e.rtlTranslate ? e.translate * -1 : e.translate
                  , o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
                e.setTranslate(o),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let r;
            e.params.freeMode && e.params.freeMode.enabled ? (s(),
            e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? r = e.slideTo(e.slides.length - 1, 0, !1, !0) : r = e.slideTo(e.activeIndex, 0, !1, !0),
            r || s()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            let n = this
              , s = n.params.direction;
            return e || (e = s === "horizontal" ? "vertical" : "horizontal"),
            e === s || e !== "horizontal" && e !== "vertical" || (n.$el.removeClass(`${n.params.containerModifierClass}${s}`).addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            n.params.direction = e,
            n.slides.each(r => {
                e === "vertical" ? r.style.width = "" : r.style.height = ""
            }
            ),
            n.emit("changeDirection"),
            t && n.update()),
            n
        }
        changeLanguageDirection(e) {
            let t = this;
            t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
            t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
            t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            let t = this;
            if (t.mounted)
                return !0;
            let n = F(e || t.params.el);
            if (e = n[0],
            !e)
                return !1;
            e.swiper = t;
            let s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
              , a = ( () => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    let o = F(e.shadowRoot.querySelector(s()));
                    return o.children = l => n.children(l),
                    o
                }
                return n.children ? n.children(s()) : F(n).children(s())
            }
            )();
            if (a.length === 0 && t.params.createElements) {
                let l = J().createElement("div");
                a = F(l),
                l.className = t.params.wrapperClass,
                n.append(l),
                n.children(`.${t.params.slideClass}`).each(d => {
                    a.append(d)
                }
                )
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: a,
                wrapperEl: a[0],
                mounted: !0,
                rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
                rtlTranslate: t.params.direction === "horizontal" && (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
                wrongRTL: a.css("display") === "-webkit-box"
            }),
            !0
        }
        init(e) {
            let t = this;
            return t.initialized || t.mount(e) === !1 || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e=!0, t=!0) {
            let n = this
              , {params: s, $el: r, $wrapperEl: a, slides: o} = n;
            return typeof n.params == "undefined" || n.destroyed || (n.emit("beforeDestroy"),
            n.initialized = !1,
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t && (n.removeClasses(),
            r.removeAttr("style"),
            a.removeAttr("style"),
            o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach(l => {
                n.off(l)
            }
            ),
            e !== !1 && (n.$el[0].swiper = null,
            Da(n)),
            n.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            xe(ls, e)
        }
        static get extendedDefaults() {
            return ls
        }
        static get defaults() {
            return rs
        }
        static installModule(e) {
            Pe.prototype.__modules__ || (Pe.prototype.__modules__ = []);
            let t = Pe.prototype.__modules__;
            typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(t => Pe.installModule(t)),
            Pe) : (Pe.installModule(e),
            Pe)
        }
    }
    ;
    Object.keys(os).forEach(i => {
        Object.keys(os[i]).forEach(e => {
            Pe.prototype[e] = os[i][e]
        }
        )
    }
    );
    Pe.use([vn, yn]);
    var de = Pe;
    m();
    m();
    function ke({swiper: i, extendParams: e, on: t, emit: n}) {
        let s = J()
          , r = W();
        i.keyboard = {
            enabled: !1
        },
        e({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        });
        function a(d) {
            if (!i.enabled)
                return;
            let {rtlTranslate: c} = i
              , u = d;
            u.originalEvent && (u = u.originalEvent);
            let f = u.keyCode || u.charCode
              , p = i.params.keyboard.pageUpDown
              , g = p && f === 33
              , h = p && f === 34
              , v = f === 37
              , b = f === 39
              , x = f === 38
              , _ = f === 40;
            if (!i.allowSlideNext && (i.isHorizontal() && b || i.isVertical() && _ || h) || !i.allowSlidePrev && (i.isHorizontal() && v || i.isVertical() && x || g))
                return !1;
            if (!(u.shiftKey || u.altKey || u.ctrlKey || u.metaKey) && !(s.activeElement && s.activeElement.nodeName && (s.activeElement.nodeName.toLowerCase() === "input" || s.activeElement.nodeName.toLowerCase() === "textarea"))) {
                if (i.params.keyboard.onlyInViewport && (g || h || v || b || x || _)) {
                    let T = !1;
                    if (i.$el.parents(`.${i.params.slideClass}`).length > 0 && i.$el.parents(`.${i.params.slideActiveClass}`).length === 0)
                        return;
                    let y = i.$el
                      , S = y[0].clientWidth
                      , C = y[0].clientHeight
                      , k = r.innerWidth
                      , L = r.innerHeight
                      , $ = i.$el.offset();
                    c && ($.left -= i.$el[0].scrollLeft);
                    let I = [[$.left, $.top], [$.left + S, $.top], [$.left, $.top + C], [$.left + S, $.top + C]];
                    for (let M = 0; M < I.length; M += 1) {
                        let O = I[M];
                        if (O[0] >= 0 && O[0] <= k && O[1] >= 0 && O[1] <= L) {
                            if (O[0] === 0 && O[1] === 0)
                                continue;
                            T = !0
                        }
                    }
                    if (!T)
                        return
                }
                i.isHorizontal() ? ((g || h || v || b) && (u.preventDefault ? u.preventDefault() : u.returnValue = !1),
                ((h || b) && !c || (g || v) && c) && i.slideNext(),
                ((g || v) && !c || (h || b) && c) && i.slidePrev()) : ((g || h || x || _) && (u.preventDefault ? u.preventDefault() : u.returnValue = !1),
                (h || _) && i.slideNext(),
                (g || x) && i.slidePrev()),
                n("keyPress", f)
            }
        }
        function o() {
            i.keyboard.enabled || (F(s).on("keydown", a),
            i.keyboard.enabled = !0)
        }
        function l() {
            !i.keyboard.enabled || (F(s).off("keydown", a),
            i.keyboard.enabled = !1)
        }
        t("init", () => {
            i.params.keyboard.enabled && o()
        }
        ),
        t("destroy", () => {
            i.keyboard.enabled && l()
        }
        ),
        Object.assign(i.keyboard, {
            enable: o,
            disable: l
        })
    }
    m();
    m();
    m();
    function Rt(i, e, t, n) {
        let s = J();
        return i.params.createElements && Object.keys(n).forEach(r => {
            if (!t[r] && t.auto === !0) {
                let a = i.$el.children(`.${n[r]}`)[0];
                a || (a = s.createElement("div"),
                a.className = n[r],
                i.$el.append(a)),
                t[r] = a,
                e[r] = a
            }
        }
        ),
        t
    }
    function ce({swiper: i, extendParams: e, on: t, emit: n}) {
        e({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        i.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        };
        function s(p) {
            let g;
            return p && (g = F(p),
            i.params.uniqueNavElements && typeof p == "string" && g.length > 1 && i.$el.find(p).length === 1 && (g = i.$el.find(p))),
            g
        }
        function r(p, g) {
            let h = i.params.navigation;
            p && p.length > 0 && (p[g ? "addClass" : "removeClass"](h.disabledClass),
            p[0] && p[0].tagName === "BUTTON" && (p[0].disabled = g),
            i.params.watchOverflow && i.enabled && p[i.isLocked ? "addClass" : "removeClass"](h.lockClass))
        }
        function a() {
            if (i.params.loop)
                return;
            let {$nextEl: p, $prevEl: g} = i.navigation;
            r(g, i.isBeginning && !i.params.rewind),
            r(p, i.isEnd && !i.params.rewind)
        }
        function o(p) {
            p.preventDefault(),
            !(i.isBeginning && !i.params.loop && !i.params.rewind) && (i.slidePrev(),
            n("navigationPrev"))
        }
        function l(p) {
            p.preventDefault(),
            !(i.isEnd && !i.params.loop && !i.params.rewind) && (i.slideNext(),
            n("navigationNext"))
        }
        function d() {
            let p = i.params.navigation;
            if (i.params.navigation = Rt(i, i.originalParams.navigation, i.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !(p.nextEl || p.prevEl))
                return;
            let g = s(p.nextEl)
              , h = s(p.prevEl);
            g && g.length > 0 && g.on("click", l),
            h && h.length > 0 && h.on("click", o),
            Object.assign(i.navigation, {
                $nextEl: g,
                nextEl: g && g[0],
                $prevEl: h,
                prevEl: h && h[0]
            }),
            i.enabled || (g && g.addClass(p.lockClass),
            h && h.addClass(p.lockClass))
        }
        function c() {
            let {$nextEl: p, $prevEl: g} = i.navigation;
            p && p.length && (p.off("click", l),
            p.removeClass(i.params.navigation.disabledClass)),
            g && g.length && (g.off("click", o),
            g.removeClass(i.params.navigation.disabledClass))
        }
        t("init", () => {
            i.params.navigation.enabled === !1 ? f() : (d(),
            a())
        }
        ),
        t("toEdge fromEdge lock unlock", () => {
            a()
        }
        ),
        t("destroy", () => {
            c()
        }
        ),
        t("enable disable", () => {
            let {$nextEl: p, $prevEl: g} = i.navigation;
            p && p[i.enabled ? "removeClass" : "addClass"](i.params.navigation.lockClass),
            g && g[i.enabled ? "removeClass" : "addClass"](i.params.navigation.lockClass)
        }
        ),
        t("click", (p, g) => {
            let {$nextEl: h, $prevEl: v} = i.navigation
              , b = g.target;
            if (i.params.navigation.hideOnClick && !F(b).is(v) && !F(b).is(h)) {
                if (i.pagination && i.params.pagination && i.params.pagination.clickable && (i.pagination.el === b || i.pagination.el.contains(b)))
                    return;
                let x;
                h ? x = h.hasClass(i.params.navigation.hiddenClass) : v && (x = v.hasClass(i.params.navigation.hiddenClass)),
                n(x === !0 ? "navigationShow" : "navigationHide"),
                h && h.toggleClass(i.params.navigation.hiddenClass),
                v && v.toggleClass(i.params.navigation.hiddenClass)
            }
        }
        );
        let u = () => {
            i.$el.removeClass(i.params.navigation.navigationDisabledClass),
            d(),
            a()
        }
          , f = () => {
            i.$el.addClass(i.params.navigation.navigationDisabledClass),
            c()
        }
        ;
        Object.assign(i.navigation, {
            enable: u,
            disable: f,
            update: a,
            init: d,
            destroy: c
        })
    }
    m();
    m();
    function Ne(i="") {
        return `.${i.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function ue({swiper: i, extendParams: e, on: t, emit: n}) {
        let s = "swiper-pagination";
        e({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: h => h,
                formatFractionTotal: h => h,
                bulletClass: `${s}-bullet`,
                bulletActiveClass: `${s}-bullet-active`,
                modifierClass: `${s}-`,
                currentClass: `${s}-current`,
                totalClass: `${s}-total`,
                hiddenClass: `${s}-hidden`,
                progressbarFillClass: `${s}-progressbar-fill`,
                progressbarOppositeClass: `${s}-progressbar-opposite`,
                clickableClass: `${s}-clickable`,
                lockClass: `${s}-lock`,
                horizontalClass: `${s}-horizontal`,
                verticalClass: `${s}-vertical`,
                paginationDisabledClass: `${s}-disabled`
            }
        }),
        i.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let r, a = 0;
        function o() {
            return !i.params.pagination.el || !i.pagination.el || !i.pagination.$el || i.pagination.$el.length === 0
        }
        function l(h, v) {
            let {bulletActiveClass: b} = i.params.pagination;
            h[v]().addClass(`${b}-${v}`)[v]().addClass(`${b}-${v}-${v}`)
        }
        function d() {
            let h = i.rtl
              , v = i.params.pagination;
            if (o())
                return;
            let b = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length, x = i.pagination.$el, _, T = i.params.loop ? Math.ceil((b - i.loopedSlides * 2) / i.params.slidesPerGroup) : i.snapGrid.length;
            if (i.params.loop ? (_ = Math.ceil((i.activeIndex - i.loopedSlides) / i.params.slidesPerGroup),
            _ > b - 1 - i.loopedSlides * 2 && (_ -= b - i.loopedSlides * 2),
            _ > T - 1 && (_ -= T),
            _ < 0 && i.params.paginationType !== "bullets" && (_ = T + _)) : typeof i.snapIndex != "undefined" ? _ = i.snapIndex : _ = i.activeIndex || 0,
            v.type === "bullets" && i.pagination.bullets && i.pagination.bullets.length > 0) {
                let y = i.pagination.bullets, S, C, k;
                if (v.dynamicBullets && (r = y.eq(0)[i.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                x.css(i.isHorizontal() ? "width" : "height", `${r * (v.dynamicMainBullets + 4)}px`),
                v.dynamicMainBullets > 1 && i.previousIndex !== void 0 && (a += _ - (i.previousIndex - i.loopedSlides || 0),
                a > v.dynamicMainBullets - 1 ? a = v.dynamicMainBullets - 1 : a < 0 && (a = 0)),
                S = Math.max(_ - a, 0),
                C = S + (Math.min(y.length, v.dynamicMainBullets) - 1),
                k = (C + S) / 2),
                y.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(L => `${v.bulletActiveClass}${L}`).join(" ")),
                x.length > 1)
                    y.each(L => {
                        let $ = F(L)
                          , I = $.index();
                        I === _ && $.addClass(v.bulletActiveClass),
                        v.dynamicBullets && (I >= S && I <= C && $.addClass(`${v.bulletActiveClass}-main`),
                        I === S && l($, "prev"),
                        I === C && l($, "next"))
                    }
                    );
                else {
                    let L = y.eq(_)
                      , $ = L.index();
                    if (L.addClass(v.bulletActiveClass),
                    v.dynamicBullets) {
                        let I = y.eq(S)
                          , M = y.eq(C);
                        for (let O = S; O <= C; O += 1)
                            y.eq(O).addClass(`${v.bulletActiveClass}-main`);
                        if (i.params.loop)
                            if ($ >= y.length) {
                                for (let O = v.dynamicMainBullets; O >= 0; O -= 1)
                                    y.eq(y.length - O).addClass(`${v.bulletActiveClass}-main`);
                                y.eq(y.length - v.dynamicMainBullets - 1).addClass(`${v.bulletActiveClass}-prev`)
                            } else
                                l(I, "prev"),
                                l(M, "next");
                        else
                            l(I, "prev"),
                            l(M, "next")
                    }
                }
                if (v.dynamicBullets) {
                    let L = Math.min(y.length, v.dynamicMainBullets + 4)
                      , $ = (r * L - r) / 2 - k * r
                      , I = h ? "right" : "left";
                    y.css(i.isHorizontal() ? I : "top", `${$}px`)
                }
            }
            if (v.type === "fraction" && (x.find(Ne(v.currentClass)).text(v.formatFractionCurrent(_ + 1)),
            x.find(Ne(v.totalClass)).text(v.formatFractionTotal(T))),
            v.type === "progressbar") {
                let y;
                v.progressbarOpposite ? y = i.isHorizontal() ? "vertical" : "horizontal" : y = i.isHorizontal() ? "horizontal" : "vertical";
                let S = (_ + 1) / T
                  , C = 1
                  , k = 1;
                y === "horizontal" ? C = S : k = S,
                x.find(Ne(v.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${k})`).transition(i.params.speed)
            }
            v.type === "custom" && v.renderCustom ? (x.html(v.renderCustom(i, _ + 1, T)),
            n("paginationRender", x[0])) : n("paginationUpdate", x[0]),
            i.params.watchOverflow && i.enabled && x[i.isLocked ? "addClass" : "removeClass"](v.lockClass)
        }
        function c() {
            let h = i.params.pagination;
            if (o())
                return;
            let v = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length
              , b = i.pagination.$el
              , x = "";
            if (h.type === "bullets") {
                let _ = i.params.loop ? Math.ceil((v - i.loopedSlides * 2) / i.params.slidesPerGroup) : i.snapGrid.length;
                i.params.freeMode && i.params.freeMode.enabled && !i.params.loop && _ > v && (_ = v);
                for (let T = 0; T < _; T += 1)
                    h.renderBullet ? x += h.renderBullet.call(i, T, h.bulletClass) : x += `<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;
                b.html(x),
                i.pagination.bullets = b.find(Ne(h.bulletClass))
            }
            h.type === "fraction" && (h.renderFraction ? x = h.renderFraction.call(i, h.currentClass, h.totalClass) : x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,
            b.html(x)),
            h.type === "progressbar" && (h.renderProgressbar ? x = h.renderProgressbar.call(i, h.progressbarFillClass) : x = `<span class="${h.progressbarFillClass}"></span>`,
            b.html(x)),
            h.type !== "custom" && n("paginationRender", i.pagination.$el[0])
        }
        function u() {
            i.params.pagination = Rt(i, i.originalParams.pagination, i.params.pagination, {
                el: "swiper-pagination"
            });
            let h = i.params.pagination;
            if (!h.el)
                return;
            let v = F(h.el);
            v.length !== 0 && (i.params.uniqueNavElements && typeof h.el == "string" && v.length > 1 && (v = i.$el.find(h.el),
            v.length > 1 && (v = v.filter(b => F(b).parents(".swiper")[0] === i.el))),
            h.type === "bullets" && h.clickable && v.addClass(h.clickableClass),
            v.addClass(h.modifierClass + h.type),
            v.addClass(i.isHorizontal() ? h.horizontalClass : h.verticalClass),
            h.type === "bullets" && h.dynamicBullets && (v.addClass(`${h.modifierClass}${h.type}-dynamic`),
            a = 0,
            h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" && h.progressbarOpposite && v.addClass(h.progressbarOppositeClass),
            h.clickable && v.on("click", Ne(h.bulletClass), function(x) {
                x.preventDefault();
                let _ = F(this).index() * i.params.slidesPerGroup;
                i.params.loop && (_ += i.loopedSlides),
                i.slideTo(_)
            }),
            Object.assign(i.pagination, {
                $el: v,
                el: v[0]
            }),
            i.enabled || v.addClass(h.lockClass))
        }
        function f() {
            let h = i.params.pagination;
            if (o())
                return;
            let v = i.pagination.$el;
            v.removeClass(h.hiddenClass),
            v.removeClass(h.modifierClass + h.type),
            v.removeClass(i.isHorizontal() ? h.horizontalClass : h.verticalClass),
            i.pagination.bullets && i.pagination.bullets.removeClass && i.pagination.bullets.removeClass(h.bulletActiveClass),
            h.clickable && v.off("click", Ne(h.bulletClass))
        }
        t("init", () => {
            i.params.pagination.enabled === !1 ? g() : (u(),
            c(),
            d())
        }
        ),
        t("activeIndexChange", () => {
            (i.params.loop || typeof i.snapIndex == "undefined") && d()
        }
        ),
        t("snapIndexChange", () => {
            i.params.loop || d()
        }
        ),
        t("slidesLengthChange", () => {
            i.params.loop && (c(),
            d())
        }
        ),
        t("snapGridLengthChange", () => {
            i.params.loop || (c(),
            d())
        }
        ),
        t("destroy", () => {
            f()
        }
        ),
        t("enable disable", () => {
            let {$el: h} = i.pagination;
            h && h[i.enabled ? "removeClass" : "addClass"](i.params.pagination.lockClass)
        }
        ),
        t("lock unlock", () => {
            d()
        }
        ),
        t("click", (h, v) => {
            let b = v.target
              , {$el: x} = i.pagination;
            if (i.params.pagination.el && i.params.pagination.hideOnClick && x && x.length > 0 && !F(b).hasClass(i.params.pagination.bulletClass)) {
                if (i.navigation && (i.navigation.nextEl && b === i.navigation.nextEl || i.navigation.prevEl && b === i.navigation.prevEl))
                    return;
                let _ = x.hasClass(i.params.pagination.hiddenClass);
                n(_ === !0 ? "paginationShow" : "paginationHide"),
                x.toggleClass(i.params.pagination.hiddenClass)
            }
        }
        );
        let p = () => {
            i.$el.removeClass(i.params.pagination.paginationDisabledClass),
            i.pagination.$el && i.pagination.$el.removeClass(i.params.pagination.paginationDisabledClass),
            u(),
            c(),
            d()
        }
          , g = () => {
            i.$el.addClass(i.params.pagination.paginationDisabledClass),
            i.pagination.$el && i.pagination.$el.addClass(i.params.pagination.paginationDisabledClass),
            f()
        }
        ;
        Object.assign(i.pagination, {
            enable: p,
            disable: g,
            render: c,
            update: d,
            init: u,
            destroy: f
        })
    }
    m();
    m();
    m();
    m();
    m();
    m();
    function Se({swiper: i, extendParams: e, on: t}) {
        e({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        i.a11y = {
            clicked: !1
        };
        let n = null;
        function s(M) {
            let O = n;
            O.length !== 0 && (O.html(""),
            O.html(M))
        }
        function r(M=16) {
            let O = () => Math.round(16 * Math.random()).toString(16);
            return "x".repeat(M).replace(/x/g, O)
        }
        function a(M) {
            M.attr("tabIndex", "0")
        }
        function o(M) {
            M.attr("tabIndex", "-1")
        }
        function l(M, O) {
            M.attr("role", O)
        }
        function d(M, O) {
            M.attr("aria-roledescription", O)
        }
        function c(M, O) {
            M.attr("aria-controls", O)
        }
        function u(M, O) {
            M.attr("aria-label", O)
        }
        function f(M, O) {
            M.attr("id", O)
        }
        function p(M, O) {
            M.attr("aria-live", O)
        }
        function g(M) {
            M.attr("aria-disabled", !0)
        }
        function h(M) {
            M.attr("aria-disabled", !1)
        }
        function v(M) {
            if (M.keyCode !== 13 && M.keyCode !== 32)
                return;
            let O = i.params.a11y
              , N = F(M.target);
            i.navigation && i.navigation.$nextEl && N.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(),
            i.isEnd ? s(O.lastSlideMessage) : s(O.nextSlideMessage)),
            i.navigation && i.navigation.$prevEl && N.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(),
            i.isBeginning ? s(O.firstSlideMessage) : s(O.prevSlideMessage)),
            i.pagination && N.is(Ne(i.params.pagination.bulletClass)) && N[0].click()
        }
        function b() {
            if (i.params.loop || i.params.rewind || !i.navigation)
                return;
            let {$nextEl: M, $prevEl: O} = i.navigation;
            O && O.length > 0 && (i.isBeginning ? (g(O),
            o(O)) : (h(O),
            a(O))),
            M && M.length > 0 && (i.isEnd ? (g(M),
            o(M)) : (h(M),
            a(M)))
        }
        function x() {
            return i.pagination && i.pagination.bullets && i.pagination.bullets.length
        }
        function _() {
            return x() && i.params.pagination.clickable
        }
        function T() {
            let M = i.params.a11y;
            !x() || i.pagination.bullets.each(O => {
                let N = F(O);
                i.params.pagination.clickable && (a(N),
                i.params.pagination.renderBullet || (l(N, "button"),
                u(N, M.paginationBulletMessage.replace(/\{\{index\}\}/, N.index() + 1)))),
                N.is(`.${i.params.pagination.bulletActiveClass}`) ? N.attr("aria-current", "true") : N.removeAttr("aria-current")
            }
            )
        }
        let y = (M, O, N) => {
            a(M),
            M[0].tagName !== "BUTTON" && (l(M, "button"),
            M.on("keydown", v)),
            u(M, N),
            c(M, O)
        }
          , S = () => {
            i.a11y.clicked = !0
        }
          , C = () => {
            requestAnimationFrame( () => {
                requestAnimationFrame( () => {
                    i.destroyed || (i.a11y.clicked = !1)
                }
                )
            }
            )
        }
          , k = M => {
            if (i.a11y.clicked)
                return;
            let O = M.target.closest(`.${i.params.slideClass}`);
            if (!O || !i.slides.includes(O))
                return;
            let N = i.slides.indexOf(O) === i.activeIndex
              , A = i.params.watchSlidesProgress && i.visibleSlides && i.visibleSlides.includes(O);
            N || A || M.sourceCapabilities && M.sourceCapabilities.firesTouchEvents || (i.isHorizontal() ? i.el.scrollLeft = 0 : i.el.scrollTop = 0,
            i.slideTo(i.slides.indexOf(O), 0))
        }
          , L = () => {
            let M = i.params.a11y;
            M.itemRoleDescriptionMessage && d(F(i.slides), M.itemRoleDescriptionMessage),
            M.slideRole && l(F(i.slides), M.slideRole);
            let O = i.params.loop ? i.slides.filter(N => !N.classList.contains(i.params.slideDuplicateClass)).length : i.slides.length;
            M.slideLabelMessage && i.slides.each( (N, A) => {
                let D = F(N)
                  , w = i.params.loop ? parseInt(D.attr("data-swiper-slide-index"), 10) : A
                  , z = M.slideLabelMessage.replace(/\{\{index\}\}/, w + 1).replace(/\{\{slidesLength\}\}/, O);
                u(D, z)
            }
            )
        }
          , $ = () => {
            let M = i.params.a11y;
            i.$el.append(n);
            let O = i.$el;
            M.containerRoleDescriptionMessage && d(O, M.containerRoleDescriptionMessage),
            M.containerMessage && u(O, M.containerMessage);
            let N = i.$wrapperEl
              , A = M.id || N.attr("id") || `swiper-wrapper-${r(16)}`
              , D = i.params.autoplay && i.params.autoplay.enabled ? "off" : "polite";
            f(N, A),
            p(N, D),
            L();
            let w, z;
            i.navigation && i.navigation.$nextEl && (w = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (z = i.navigation.$prevEl),
            w && w.length && y(w, A, M.nextSlideMessage),
            z && z.length && y(z, A, M.prevSlideMessage),
            _() && i.pagination.$el.on("keydown", Ne(i.params.pagination.bulletClass), v),
            i.$el.on("focus", k, !0),
            i.$el.on("pointerdown", S, !0),
            i.$el.on("pointerup", C, !0)
        }
        ;
        function I() {
            n && n.length > 0 && n.remove();
            let M, O;
            i.navigation && i.navigation.$nextEl && (M = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (O = i.navigation.$prevEl),
            M && M.off("keydown", v),
            O && O.off("keydown", v),
            _() && i.pagination.$el.off("keydown", Ne(i.params.pagination.bulletClass), v),
            i.$el.off("focus", k, !0),
            i.$el.off("pointerdown", S, !0),
            i.$el.off("pointerup", C, !0)
        }
        t("beforeInit", () => {
            n = F(`<span class="${i.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        ),
        t("afterInit", () => {
            !i.params.a11y.enabled || $()
        }
        ),
        t("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
            !i.params.a11y.enabled || L()
        }
        ),
        t("fromEdge toEdge afterInit lock unlock", () => {
            !i.params.a11y.enabled || b()
        }
        ),
        t("paginationUpdate", () => {
            !i.params.a11y.enabled || T()
        }
        ),
        t("destroy", () => {
            !i.params.a11y.enabled || I()
        }
        )
    }
    m();
    m();
    m();
    function Be({swiper: i, extendParams: e, on: t, emit: n}) {
        let s;
        i.autoplay = {
            running: !1,
            paused: !1
        },
        e({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        function r() {
            if (!i.size) {
                i.autoplay.running = !1,
                i.autoplay.paused = !1;
                return
            }
            let h = i.slides.eq(i.activeIndex)
              , v = i.params.autoplay.delay;
            h.attr("data-swiper-autoplay") && (v = h.attr("data-swiper-autoplay") || i.params.autoplay.delay),
            clearTimeout(s),
            s = Je( () => {
                let b;
                i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(),
                b = i.slidePrev(i.params.speed, !0, !0),
                n("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? o() : (b = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0),
                n("autoplay")) : (b = i.slidePrev(i.params.speed, !0, !0),
                n("autoplay")) : i.params.loop ? (i.loopFix(),
                b = i.slideNext(i.params.speed, !0, !0),
                n("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? o() : (b = i.slideTo(0, i.params.speed, !0, !0),
                n("autoplay")) : (b = i.slideNext(i.params.speed, !0, !0),
                n("autoplay")),
                (i.params.cssMode && i.autoplay.running || b === !1) && r()
            }
            , v)
        }
        function a() {
            return typeof s != "undefined" || i.autoplay.running ? !1 : (i.autoplay.running = !0,
            n("autoplayStart"),
            r(),
            !0)
        }
        function o() {
            return !i.autoplay.running || typeof s == "undefined" ? !1 : (s && (clearTimeout(s),
            s = void 0),
            i.autoplay.running = !1,
            n("autoplayStop"),
            !0)
        }
        function l(h) {
            !i.autoplay.running || i.autoplay.paused || (s && clearTimeout(s),
            i.autoplay.paused = !0,
            h === 0 || !i.params.autoplay.waitForTransition ? (i.autoplay.paused = !1,
            r()) : ["transitionend", "webkitTransitionEnd"].forEach(v => {
                i.$wrapperEl[0].addEventListener(v, c)
            }
            ))
        }
        function d() {
            let h = J();
            h.visibilityState === "hidden" && i.autoplay.running && l(),
            h.visibilityState === "visible" && i.autoplay.paused && (r(),
            i.autoplay.paused = !1)
        }
        function c(h) {
            !i || i.destroyed || !i.$wrapperEl || h.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(v => {
                i.$wrapperEl[0].removeEventListener(v, c)
            }
            ),
            i.autoplay.paused = !1,
            i.autoplay.running ? r() : o())
        }
        function u() {
            i.params.autoplay.disableOnInteraction ? o() : (n("autoplayPause"),
            l()),
            ["transitionend", "webkitTransitionEnd"].forEach(h => {
                i.$wrapperEl[0].removeEventListener(h, c)
            }
            )
        }
        function f() {
            i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1,
            n("autoplayResume"),
            r())
        }
        function p() {
            i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", u),
            i.$el.on("mouseleave", f))
        }
        function g() {
            i.$el.off("mouseenter", u),
            i.$el.off("mouseleave", f)
        }
        t("init", () => {
            i.params.autoplay.enabled && (a(),
            J().addEventListener("visibilitychange", d),
            p())
        }
        ),
        t("beforeTransitionStart", (h, v, b) => {
            i.autoplay.running && (b || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(v) : o())
        }
        ),
        t("sliderFirstMove", () => {
            i.autoplay.running && (i.params.autoplay.disableOnInteraction ? o() : l())
        }
        ),
        t("touchEnd", () => {
            i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && r()
        }
        ),
        t("destroy", () => {
            g(),
            i.autoplay.running && o(),
            J().removeEventListener("visibilitychange", d)
        }
        ),
        Object.assign(i.autoplay, {
            pause: l,
            run: r,
            start: a,
            stop: o
        })
    }
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    function dt(i) {
        let {effect: e, swiper: t, on: n, setTranslate: s, setTransition: r, overwriteParams: a, perspective: o, recreateShadows: l, getEffectParams: d} = i;
        n("beforeInit", () => {
            if (t.params.effect !== e)
                return;
            t.classNames.push(`${t.params.containerModifierClass}${e}`),
            o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
            let u = a ? a() : {};
            Object.assign(t.params, u),
            Object.assign(t.originalParams, u)
        }
        ),
        n("setTranslate", () => {
            t.params.effect === e && s()
        }
        ),
        n("setTransition", (u, f) => {
            t.params.effect === e && r(f)
        }
        ),
        n("transitionEnd", () => {
            if (t.params.effect === e && l) {
                if (!d || !d().slideShadows)
                    return;
                t.slides.each(u => {
                    t.$(u).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                }
                ),
                l()
            }
        }
        );
        let c;
        n("virtualUpdate", () => {
            t.params.effect === e && (t.slides.length || (c = !0),
            requestAnimationFrame( () => {
                c && t.slides && t.slides.length && (s(),
                c = !1)
            }
            ))
        }
        )
    }
    m();
    function xt(i, e) {
        return i.transformEl ? e.find(i.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : e
    }
    m();
    function Ft({swiper: i, duration: e, transformEl: t, allSlides: n}) {
        let {slides: s, activeIndex: r, $wrapperEl: a} = i;
        if (i.params.virtualTranslate && e !== 0) {
            let o = !1, l;
            n ? l = t ? s.find(t) : s : l = t ? s.eq(r).find(t) : s.eq(r),
            l.transitionEnd( () => {
                if (o || !i || i.destroyed)
                    return;
                o = !0,
                i.animating = !1;
                let d = ["webkitTransitionEnd", "transitionend"];
                for (let c = 0; c < d.length; c += 1)
                    a.trigger(d[c])
            }
            )
        }
    }
    function ct({swiper: i, extendParams: e, on: t}) {
        e({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        dt({
            effect: "fade",
            swiper: i,
            on: t,
            setTranslate: () => {
                let {slides: r} = i
                  , a = i.params.fadeEffect;
                for (let o = 0; o < r.length; o += 1) {
                    let l = i.slides.eq(o)
                      , c = -l[0].swiperSlideOffset;
                    i.params.virtualTranslate || (c -= i.translate);
                    let u = 0;
                    i.isHorizontal() || (u = c,
                    c = 0);
                    let f = i.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(l[0].progress), 0) : 1 + Math.min(Math.max(l[0].progress, -1), 0);
                    xt(a, l).css({
                        opacity: f
                    }).transform(`translate3d(${c}px, ${u}px, 0px)`)
                }
            }
            ,
            setTransition: r => {
                let {transformEl: a} = i.params.fadeEffect;
                (a ? i.slides.find(a) : i.slides).transition(r),
                Ft({
                    swiper: i,
                    duration: r,
                    transformEl: a,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !i.params.cssMode
            })
        })
    }
    m();
    m();
    m();
    m();
    m();
    m();
    m();
    var Pd = (i, e={}) => {
        let t = i.children[0]
          , n = G({
            vertical: !1,
            playing: !0,
            duration: 0
        }, e)
          , s = n.playing
          , r = n.vertical
          , a = g => {
            t.style.animationDuration = `${g}s`
        }
          , o = () => {
            s = !0,
            t.style.animationPlayState = "running"
        }
          , l = () => {
            s = !1,
            t.style.animationPlayState = "paused"
        }
          , d = () => {
            r ? i.classList.add("progress-bar__vertical") : i.classList.remove("progress-bar__vertical")
        }
          , c = g => {
            r = g
        }
          , u = g => {
            e.vertical ? t.style.transform = `translate3d(0, -${100 - g * 100}%, 0)` : t.style.transform = `translate3d(-${100 - g * 100}%, 0, 0)`
        }
          , f = () => {
            t.style.animationPlayState = "paused",
            a(2),
            d()
        }
          , p = () => {}
        ;
        return f(),
        {
            play: o,
            stop: l,
            setVertical: c,
            setDuration: a,
            destroy: p,
            progress: u
        }
    }
      , Mi = Pd;
    m();
    var it = () => {
        let i = window.innerWidth
          , e = "0px"
          , t = "576px"
          , n = "768px"
          , s = "1024px"
          , r = "1280px";
        return {
            xs: window.matchMedia(`(max-width: ${parseInt(e, 10) - 1}px)`).matches,
            sm: window.matchMedia(`(max-width: ${parseInt(t, 10) - 1}px)`).matches,
            md: window.matchMedia(`(max-width: ${parseInt(n, 10) - 1}px)`).matches,
            lg: window.matchMedia(`(max-width: ${parseInt(s, 10) - 1}px)`).matches,
            xl: window.matchMedia(`(max-width: ${parseInt(r, 10) - 1}px)`).matches
        }
    }
    ;
    var kd = (i, e=!0, t={}, n={}) => {
        let s = Array.from(i.querySelectorAll("[data-progress]"))
          , r = i.dataset.csCaptionsDisplay
          , a = []
          , o = G({
            grabCursor: i.dataset.grabCursor === "true",
            slidesPerView: e ? 4 : 1,
            centeredSlides: !e,
            spaceBetween: e ? null : 50,
            direction: r != null ? r : e ? "vertical" : "horizontal",
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            autoplay: !1
        }, t)
          , l = null
          , d = (h, v) => {
            a.length > 0 && a[h].setDuration(v),
            l.slides.forEach(b => b.firstElementChild.classList.remove("is-active")),
            l.slides[h].firstElementChild.classList.add("is-active"),
            l.slideTo(h)
        }
          , c = h => {
            n.onChangeSlide && n.onChangeSlide(h)
        }
          , u = h => {
            a.length > 0 && a[h].play()
        }
          , f = h => {
            a.length > 0 && a[h].stop()
        }
          , p = () => {
            l = new de(i,ee(G({}, o), {
                modules: [ce, ue]
            })),
            s.forEach(h => {
                a.push(Mi(h, {
                    vertical: e,
                    playing: !1,
                    duration: 3
                }))
            }
            ),
            l.slides.forEach( (h, v) => {
                h.firstElementChild.addEventListener("click", () => c(v))
            }
            )
        }
          , g = () => {
            a.forEach(h => h.destroy()),
            l.destroy()
        }
        ;
        return p(),
        {
            element: i,
            swiper: l,
            playSlide: u,
            pauseSlide: f,
            destroy: g,
            setActiveSlide: d
        }
    }
      , Ld = (i, e=!0, t={}, n={}) => {
        let s = G({
            grabCursor: !0,
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 30,
            direction: "horizontal",
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            autoplay: !1
        }, t)
          , r = i.querySelectorAll(".sanity-video")
          , a = []
          , o = null
          , l = 0
          , d = null
          , c = () => {}
          , u = S => {
            a[S].trigger("pause"),
            a[S].trigger("stop"),
            a[S].currentTime(0)
        }
          , f = () => {
            u(l)
        }
          , p = () => {
            try {
                a[l].currentTime(0),
                a[l].play()
            } catch (S) {
                console.warn(`Could not start video ${l}`)
            }
        }
          , g = () => {
            try {
                return Math.round(a[o.activeIndex].duration() * 10) / 10
            } catch (S) {
                return console.warn(`Could not get time for player with index ${o.activeIndex}`),
                5
            }
        }
          , h = (S=!0) => {
            n.onChangeSlide && n.onChangeSlide(o.activeIndex, g()),
            l !== o.activeIndex && (f(),
            l = o.activeIndex),
            S === !0 && p()
        }
          , v = S => {
            o.slideTo(S)
        }
          , b = () => {
            o.activeIndex + 1 === a.length ? o.slideTo(0) : o.slideNext()
        }
          , x = (S, C) => {
            C.on("play", () => {
                n.onSlidePlay && l === S && n.onSlidePlay(S)
            }
            ),
            C.on("ended", () => {
                n.onSlidePlay && l === S && b()
            }
            ),
            C.on("stop", () => {
                n.onSlidePause && l === S && n.onSlidePause(S)
            }
            ),
            C.on("pause", () => {
                n.onSlidePause && l === S && n.onSlidePause(S)
            }
            )
        }
          , _ = (S, C) => {
            let k = () => {
                x(S, C),
                S === o.activeIndex && h(!1)
            }
            ;
            a[S] = C,
            C.isReady_ ? k() : C.one("loadedmetadata", k)
        }
          , T = () => {
            d.unobserve(i),
            a = Array.from(r).map(S => null),
            Array.from(r).map( (S, C) => {
                me(S, {
                    loop: !1,
                    autoplay: !1,
                    autoload: !0
                }, {
                    onActivate: k => {
                        _(C, k)
                    }
                })
            }
            )
        }
        ;
        return ( () => {
            o = new de(i,ee(G({}, s), {
                on: {
                    slideChange: () => h(!0)
                },
                modules: [ct, ce, ue]
            })),
            d = new IntersectionObserver(T,{
                root: i,
                rootMargin: "0px",
                threshold: 1
            }),
            d.observe(i)
        }
        )(),
        {
            element: i,
            swiper: o,
            changeSlide: v,
            destroy: c
        }
    }
      , Qa = (i, e={}, t={}, {varyDirectionForMobile: n=!0, direction: s="vertical"}={}) => {
        let r = null
          , a = null
          , o = s === "vertical"
          , l = () => {
            r = Ld(i.querySelector("[data-cs-slides]"), o, G({}, t), {
                onChangeSlide: (p, g) => {
                    a.setActiveSlide(p, g)
                }
                ,
                onSlidePlay: p => {
                    a.playSlide(p)
                }
                ,
                onSlidePause: p => {
                    a.pauseSlide(p)
                }
            }),
            a = kd(i.querySelector("[data-cs-captions]"), o, G({}, e), {
                onChangeSlide: p => {
                    r.changeSlide(p)
                }
            })
        }
          , d = () => {
            r.destroy(),
            a.destroy()
        }
          , c = () => {
            let p = it();
            o === p.lg && n && (o = !p.lg,
            d(),
            l())
        }
          , u = () => {
            o = n ? !it().lg : s === "vertical",
            l(),
            window.addEventListener("resize", c)
        }
          , f = () => {
            window.removeEventListener("resize", c)
        }
        ;
        return u(),
        {
            element: i,
            slideSwiper: r,
            captionSwiper: a,
            destroy: f
        }
    }
    ;
    m();
    var $d = (i, e=!1) => {
        let t = i.querySelector("[data-collapsible-expand]")
          , n = i.querySelector("[data-collapsible-content]")
          , s = null
          , r = !0;
        i.hasAttribute("data-default-expanded") && (r = !1);
        let a = () => {
            !s && !e ? n.style.maxHeight = "fit-content" : n.style.maxHeight = r ? "0px" : `${n.scrollHeight}px`,
            r ? t.classList.remove("active") : t.classList.add("active")
        }
          , o = c => {
            c !== s && !e && (s = c,
            a())
        }
          , l = () => {
            r = !r,
            a()
        }
        ;
        return ( () => {
            t.addEventListener("click", l),
            a()
        }
        )(),
        {
            setIsMobile: o
        }
    }
      , Od = i => {
        let e = i.querySelectorAll("[data-collapsible-group]")
          , t = i.dataset.collapsibleCollapseDesktop === "true"
          , n = []
          , s = () => {
            let a = it();
            n.forEach(o => o.setIsMobile(a.md))
        }
        ;
        ( () => {
            Array.from(e).forEach(a => {
                n.push($d(a, t))
            }
            ),
            window.addEventListener("resize", s),
            s()
        }
        )()
    }
      , eo = Od;
    m();
    var Id = i => {
        let e = Array.from(i.querySelectorAll("[data-cm-section]"))
          , t = s => {
            let r = s.querySelector("[data-cm-open]")
              , a = s.querySelector("[data-cm-modal]");
            r.addEventListener("click", () => {
                je(_e(a.children[0].outerHTML), "inner", {
                    show: !0,
                    classes: "content-modals__modal-inner",
                    outerClasses: "content-modals__modal-outer",
                    fadeIn: !0,
                    destroyOnClose: !0
                })
            }
            )
        }
        ;
        return ( () => {
            e.forEach(s => t(s))
        }
        )(),
        {}
    }
      , to = Id;
    m();
    var Ad = i => {
        let e = i.dataset.countdownTimerLayout
          , t = e === "circles" ? Date.parse(i.dataset.countdownTimerStartdatetime) : null
          , n = Date.parse(i.dataset.countdownTimer)
          , s = t ? n - t : null
          , r = s ? Math.floor(s / (1e3 * 3600 * 24)) : null
          , a = {
            days: i.querySelector('[data-value="days"]').firstElementChild,
            hours: i.querySelector('[data-value="hours"]').firstElementChild,
            mins: i.querySelector('[data-value="minutes"]').firstElementChild,
            secs: i.querySelector('[data-value="seconds"]').firstElementChild
        }
          , o = e === "circles" ? {
            days: i.querySelector('[data-value="days"] svg circle'),
            hours: i.querySelector('[data-value="hours"] svg circle'),
            mins: i.querySelector('[data-value="minutes"] svg circle'),
            secs: i.querySelector('[data-value="seconds"] svg circle')
        } : {}
          , l = () => {
            let u = n - new Date;
            if (u < 0)
                return {
                    total: new Date,
                    days: 0,
                    hours: 0,
                    mins: 0,
                    secs: 0
                };
            let f = Math.floor(u / (1e3 * 60 * 60 * 24))
              , p = Math.floor(u / (1e3 * 60 * 60) % 24)
              , g = Math.floor(u / 1e3 / 60 % 60)
              , h = Math.floor(u / 1e3 % 60);
            return {
                total: u,
                days: f,
                hours: p,
                mins: g,
                secs: h
            }
        }
          , d = () => {
            let u = l();
            a.secs.textContent = u.secs.toString().padStart(2, "0"),
            a.mins.textContent = u.mins.toString().padStart(2, "0"),
            a.hours.textContent = u.hours.toString().padStart(2, "0"),
            a.days.textContent = u.days.toString().padStart(2, "0"),
            e === "circles" && t && (o.days.style.strokeDashoffset = `${377 - u.days / r * 377}`,
            o.hours.style.strokeDashoffset = `${377 - u.hours / 24 * 377}`,
            o.mins.style.strokeDashoffset = `${377 - u.mins / 60 * 377}`,
            o.secs.style.strokeDashoffset = `${377 - u.secs / 60 * 377}`)
        }
        ;
        return ( () => {
            setInterval( () => {
                d()
            }
            , 500)
        }
        )(),
        {}
    }
      , io = Ad;
    m();
    var Dd = i => {
        i.key == "d" && document.querySelectorAll("[data-debug]").forEach(t => {
            t.classList.contains("hidden") ? t.classList.remove("hidden") : t.classList.add("hidden")
        }
        )
    }
      , no = Dd;
    m();
    var zd = i => {
        let e = i.querySelector(".swiper")
          , t = i.dataset.flexCarouselDelay && i.dataset.flexCarouselDelay != 0 ? {
            delay: parseInt(i.dataset.flexCarouselDelay) * 1e3,
            disableOnInteraction: !0
        } : !1
          , n = {
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 0,
            autoplay: t,
            loop: !0,
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            },
            effect: "slide",
            speed: 1e3
        }
          , s = null
          , r = () => {
            s && (s.destroy(),
            s = null)
        }
          , a = () => {
            Array.from(e.querySelectorAll(".swiper-slide .flex-content__media .sanity-video")).forEach(l => {
                l._video = me(l)
            }
            )
        }
        ;
        return ( () => {
            s = new de(e,ee(G({}, n), {
                on: {
                    init: () => a()
                },
                modules: [Se, ce, Be, ue, ke]
            }))
        }
        )(),
        {
            destroy: r
        }
    }
      , so = zd;
    m();
    m();
    var ro = (i, e={}, t="") => {
        var n, s, r, a, o, l;
        return `<div class="Aviadrones.-image-wrapper"><img
        alt="${i.imgAlt ? i.imgAlt : ""}"
        height="${i.height}"
        width="${i.width}"
        class="${t}"
        src="${(s = (n = i == null ? void 0 : i.images) == null ? void 0 : n.fallback) == null ? void 0 : s.src}"
        srcSet="${(a = (r = i == null ? void 0 : i.images) == null ? void 0 : r.fallback) == null ? void 0 : a.srcSet}"
        sizes="${(l = (o = i == null ? void 0 : i.images) == null ? void 0 : o.fallback) == null ? void 0 : l.sizes}"
        style="${e.imgFit ? `object-fit: ${e.imgFit};` : ""} ${e.imgStyles ? e.imgStyles : ""}"
        loading="${e.loading ? e.loading : "lazy"}"
      /></div> `
    }
    ;
    m();
    var Rd = (i, e={}) => {
        var g, h, v, b;
        let t = i.innerHTML
          , n = {
            grabCursor: i.dataset.grabCursor === "true",
            slidesPerView: (g = i.dataset.slidesPerView) != null ? g : 1,
            centeredSlides: i.dataset.centered !== "false",
            centeredSlidesBounds: i.dataset.centeredSlidesBounds === "true",
            spaceBetween: isNaN(parseInt(i.dataset.spaceBetween)) ? 0 : parseInt(i.dataset.spaceBetween),
            direction: (h = i.dataset.direction) != null ? h : "horizontal",
            autoHeight: i.dataset.autoHeight === "true",
            navigation: i.dataset.navigation === "true",
            pagination: G({
                type: (v = i.dataset.paginationType) != null ? v : "bullets",
                clickable: i.dataset.clickable !== "false"
            }, i.dataset.paginationElement ? {
                el: i.dataset.paginationElement
            } : {})
        }
          , s = (b = i.dataset.breakpoint) != null ? b : "md";
        delete n.breakpoint;
        let r = null
          , a = () => {}
          , o = x => {
            let _ = ee(G({}, n), {
                on: {
                    slideChange: a
                },
                modules: [ce, ue, Se]
            });
            _.pagination && (_.pagination.el = i.querySelector(".swiper-pagination")),
            r = new de(x,_),
            e.onInitializationComplete && e.onInitializationComplete()
        }
          , l = () => {
            r && (r.destroy(),
            r = null,
            e.onDestroyComplete && e.onDestroyComplete())
        }
          , d = () => {
            let x = Array.from(i.querySelectorAll(":scope > :not([class^='swiper-'])"));
            i.insertAdjacentHTML("afterbegin", `<div class="swiper">
        <div class="swiper-wrapper">${x.map(_ => `<div class="swiper-slide">${_.outerHTML}</div>`).join("")}
        </div>
        <div class="swiper-pagination"></div>
        ${n.navigation ? `
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        ` : ""}
      </div>`),
            x.forEach(_ => i.removeChild(_))
        }
          , c = () => {
            i.querySelectorAll(":scope > [class^='swiper']").forEach(x => i.removeChild(x)),
            i.insertAdjacentHTML("afterbegin", t)
        }
          , u = () => {
            let x = it();
            x[s] && !r ? (i.classList.remove("responsive-slider--md-grid"),
            d(),
            o(i.querySelector(".swiper"))) : !x[s] && r && (i.classList.add("responsive-slider--md-grid"),
            l(),
            c())
        }
          , f = () => {
            window.addEventListener("resize", () => u())
        }
        ;
        return ( () => {
            f(),
            u()
        }
        )(),
        {
            element: i,
            swiper: r
        }
    }
      , Pi = Rd;
    var Fd = i => {
        let e = {
            autoHeight: !0,
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            grabCursor: !0,
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 12,
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            },
            keyboard: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }
          , t = JSON.parse(unescape(i.dataset.igImages))
          , n = bt(t.map(v => `<div class="swiper-slide">${ro(v)}</div>`).join(""))
          , s = null
          , r = null
          , a = null
          , o = null
          , l = !1
          , d = () => {
            s = _e(`<div class="swiper">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-navigation">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>`)
        }
          , c = v => {
            d(),
            r = je(s, "image-lightbox", {
                show: !0
            }),
            s.querySelector(".swiper-wrapper").append(...n),
            a = new de(s,ee(G({
                initialSlide: v
            }, e), {
                modules: [Se, ct, ce, ue, ke]
            }))
        }
          , u = v => {
            r ? (a.slideTo(v, 0, !1),
            r.show()) : c(v)
        }
          , f = () => {
            Array.from(i.querySelectorAll("[data-ig-index]")).forEach(v => {
                let b = parseInt(v.dataset.igIndex);
                v.addEventListener("click", () => u(b))
            }
            )
        }
          , p = () => {
            l = !it().md
        }
          , g = () => {
            o = Pi(i.querySelector(".responsive-slider"), {
                onInitializationComplete: () => {
                    f()
                }
                ,
                onDestroyComplete: () => {
                    f()
                }
            }),
            f(),
            window.addEventListener("resize", p)
        }
          , h = () => {
            a && (a.destroy(),
            a = null),
            r && (r.destroy(),
            r = null),
            window.removeEventListener("resize", p)
        }
        ;
        return g(),
        {
            destroy: h
        }
    }
      , ao = Fd;
    m();
    m();
    var ri = (i, e) => {
        let t = i.getFormElem()[0]
          , n = getSelection.call.bind([].slice);
        n(t.querySelectorAll("[style]")).concat(t).forEach(function(a) {
            a.removeAttribute("style")
        }),
        n(document.styleSheets).forEach(function(a) {
            ([mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(a.ownerNode) != -1 || t.contains(a.ownerNode)) && (a.disabled = !0)
        }),
        e || t.setAttribute("data-styles-ready", "true")
    }
      , ki = i => {
        let t = i.getFormElem()[0].querySelector("input[name=confirmtxt]");
        !t || t.value == "" ? i.submittable(!0) : i.submittable(!1)
    }
      , Li = () => le(void 0, null, function*() {
        return window.MktoForms2 ? Promise.resolve() : new Promise( (i, e) => {
            let t = document.createElement("script");
            t.onload = () => {
                i()
            }
            ,
            t.onerror = () => {
                i()
            }
            ,
            t.src = "https://pages.aviadrones.com/js/forms2/js/forms2.min.js",
            document.head.appendChild(t)
        }
        )
    });
    var Nd = (i, e=null) => le(void 0, null, function*() {
        return Li().then( () => {
            let t = i.getAttribute("data-marketo-form-id")
              , n = document.getElementById("mktoForm_" + t)
              , s = a => {
                window.dataLayer = window.dataLayer || [],
                window.dataLayer.push(a)
            }
              , r = a => {
                a.value || a.options[a.selectedIndex].value !== "" ? i.querySelectorAll("label[for=" + a.id + "]")[0].classList.add("mktoValid") : i.querySelectorAll("label[for=" + a.id + "]")[0].classList.remove("mktoValid")
            }
            ;
            return new Promise( (a, o) => {
                MktoForms2.loadForm("//pages.aviadrones.com", "784-TUF-591", t, l => {
                    ri(l);
                    let d = i.getAttribute("data-show-success");
                    Bd(i),
                    i.elements.recentUTMUrl && (i.elements.recentUTMUrl.value = window.location.href.split("?")[0]),
                    i.classList.add("init");
                    for (let u in i.elements)
                        if (i.elements[u].tagName == "INPUT" || i.elements[u].tagName == "TEXTAREA") {
                            if (i.elements[u].addEventListener("change", f => {
                                r(f.target)
                            }
                            ),
                            i.elements[u].type == "checkbox") {
                                let f = i.querySelector("#Lbl" + i.elements[u].id);
                                f && f.setAttribute("for", i.elements[u].id)
                            }
                        } else
                            i.elements[u].tagName == "SELECT" && (i.querySelectorAll("label[for=" + i.elements[u].id + "]")[0].classList.add("Aviadrones.-select"),
                            i.elements[u].addEventListener("change", f => {
                                r(f.target)
                            }
                            ));
                    l.onValidate(u => {
                        if (!u)
                            Object.keys(l.getValues()).forEach(p => {
                                let g = document.querySelector("#mktoForm_" + t + " [name=" + p + "]");
                                if (g) {
                                    let h = document.querySelector("#mktoForm_" + t + " label[for=" + p + "]");
                                    h && g.value !== "" && h.classList.add("mktoValid")
                                }
                            }
                            );
                        else {
                            try {
                                Object.keys(l.getValues()).forEach(p => {
                                    if (document.querySelector("#mktoForm_" + t + " [name=" + p + "]")) {
                                        let h = document.querySelector("#mktoForm_" + t + " label[for=" + p + "]");
                                        h && h.classList.add("mktoValid")
                                    }
                                }
                                )
                            } catch (f) {
                                console.log(f)
                            }
                            ki(l)
                        }
                    }
                    ),
                    l.onSuccess( (u, f) => {
                        if (d) {
                            if (i.dataset.gaFormType) {
                                let p = {
                                    event: "formSubmit",
                                    formType: i.dataset.gaFormType,
                                    formDescription: i.dataset.gaFormDesc,
                                    vertical: i.dataset.gaVertical
                                };
                                s(p)
                            }
                            return i.classList.add("marketo-form--success"),
                            Array.from(document.querySelectorAll(`[data-module-id="${i.dataset.marketoFormModule}"]`)).forEach(p => {
                                p.classList.add("market-form--module-success")
                            }
                            ),
                            !1
                        }
                        return !1
                    }
                    );
                    let c = new CustomEvent("marketoFormLoaded",{
                        detail: l
                    });
                    return document.dispatchEvent(c),
                    a(l)
                }
                )
            }
            )
        }
        )
    });
    function Bd(i) {
        var e = {
            utm_campaign: "Recent_UTM_Campaign__c",
            utm_source: "Recent_UTM_Source__c",
            utm_medium: "Recent_UTM_Medium__c",
            utm_term: "Recent_UTM_Term__c",
            utm_content: "Recent_UTM_Content__c"
        };
        let t = qd("utmcookie");
        if (t) {
            var n = JSON.parse(t);
            Object.keys(n).map(s => {
                i.elements[e[n[s].key]] && (i.elements[e[n[s].key]].value = n[s].value)
            }
            )
        }
    }
    function qd(i) {
        let e = i + "="
          , n = decodeURIComponent(document.cookie).split(";");
        for (let s = 0; s < n.length; s++) {
            let r = n[s];
            for (; r.charAt(0) == " "; )
                r = r.substring(1);
            if (r.indexOf(e) == 0)
                return r.substring(e.length, r.length)
        }
        return ""
    }
    var $i = Nd;
    m();
    m();
    var Nt = class {
        constructor(e, t, n="a") {
            this.category = t,
            this.container = e,
            this.selector = n,
            this.init()
        }
        init() {
            this.trackNavClicks()
        }
        trackClick(e) {
            let t = e.target
              , n = {
                event: "navItemClick",
                category: this.category,
                label: t.innerText,
                url: t.href
            };
            !n.label && !n.url || n.label.length === 0 && n.url.length === 0 || (window.dataLayer = window.dataLayer || [],
            window.dataLayer.push(n))
        }
        trackNavClicks() {
            this.container.querySelectorAll(this.selector).forEach(t => {
                t.addEventListener("click", n => this.trackClick(n))
            }
            )
        }
    }
    ;
    var Vd = i => {
        let e = n => {
            let s = i.querySelector(".mktoButton")
              , r = i.dataset.nlLoadingText
              , a = i.dataset.nlSuccess
              , o = null
              , l = () => {
                s.innerText = r,
                s.disabled = !0
            }
              , d = h => {
                h.value ? i.querySelectorAll("label[for=" + h.id + "]")[0].classList.add("mktoValid") : i.querySelectorAll("label[for=" + h.id + "]")[0].classList.remove("mktoValid")
            }
              , c = () => {
                o && (i.removeChild(o),
                o = null)
            }
              , u = () => {
                c(),
                Array.from(i.children).forEach(h => {
                    i.removeChild(h)
                }
                ),
                i.appendChild(_e(`<p class="newsletter__message-success py-1 px-2">${a}</p>`)),
                i.classList.add("newsletter--success")
            }
              , f = () => {
                window.dataLayer = window.dataLayer || [],
                window.dataLayer.push({
                    event: "emailSignup",
                    signupLocation: "Footer"
                })
            }
              , p = () => (i.querySelectorAll("input[type='email']").forEach(h => {
                d(h)
            }
            ),
            l(),
            f(),
            !1);
            (h => {
                h.onSubmit(v => (p(),
                !1)),
                h.onSuccess( (v, b) => (u(),
                !1)),
                h.onValidate(v => {
                    v && ki(h)
                }
                ),
                MktoForms2.onFormRender( () => {
                    ri(h)
                }
                ),
                window.addEventListener("resize", () => {
                    ri(h)
                }
                ),
                i.querySelectorAll("input, textarea").forEach(v => {
                    v.addEventListener("change", b => {
                        d(v)
                    }
                    )
                }
                )
            }
            )(n)
        }
        ;
        return ( () => {
            Li().then( () => {
                MktoForms2.loadForm("//pages.aviadrones.com", "784-TUF-591", "1282", e)
            }
            )
        }
        )(),
        {}
    }
      , oo = i => {
        if (!i)
            return;
        let e = null
          , t = new Nt(i,"footer");
        function n(a, o) {
            a.forEach(l => {
                if (l.isIntersecting) {
                    let d = i.querySelector("[data-nl]");
                    d && (e = Vd(d)),
                    o.disconnect()
                }
            }
            )
        }
        let s = {
            root: null,
            rootMargin: "1000px",
            threshold: 0
        };
        return new IntersectionObserver(n,s).observe(i),
        {
            newsletter: e
        }
    }
    ;
    m();
    var ai = class {
        constructor(e, t) {
            this.element = e,
            this.container = t
        }
        get hidden() {
            return this.element.classList.contains("filtered")
        }
        set hidden(e) {
            e ? this.element.classList.add("filtered") : this.element.classList.remove("filtered")
        }
    }
      , cs = class extends ai {
        constructor(e, t) {
            super(e, t),
            this.id = e.dataset.parentDepartmentId,
            this.departments = Array.from(this.container.querySelectorAll(`.job-listings__department[data-parent-department-id="${e.dataset.parentDepartmentId}"]`)).map(n => new us(n,this.container))
        }
        get numberOfJobs() {
            return this.departments.reduce( (e, t) => e + t.numberOfJobs, 0)
        }
        filter(e) {
            this.departments.forEach(t => t.filter(e)),
            this.hidden = this.departments.every(t => t.hidden)
        }
    }
      , us = class extends ai {
        constructor(e, t) {
            super(e, t),
            this.id = e.dataset.departmentId,
            this.parentId = e.dataset.parentDepartmentId,
            this.jobListings = Array.from(this.container.querySelectorAll(`.job-listings__job[data-department-id="${e.dataset.departmentId}"]`)).map(n => new fs(n,this.container))
        }
        get numberOfJobs() {
            return this.jobListings.filter(e => !e.hidden).length
        }
        get hidden() {
            return super.hidden
        }
        set hidden(e) {
            e && this.jobListings.forEach(t => t.hidden = !0),
            super.hidden = e
        }
        filter(e) {
            if (e.departmentId !== "" && e.departmentId !== this.id && e.departmentId !== this.parentId) {
                this.hidden = !0;
                return
            }
            let t = G({}, e);
            delete t.departmentId,
            this.jobListings.forEach(n => {
                n.filter(t)
            }
            ),
            this.hidden = this.jobListings.every(n => n.hidden)
        }
    }
      , fs = class extends ai {
        constructor(e, t) {
            super(e, t)
        }
        filter(e) {
            let t = 0
              , n = Object.keys(e).filter(s => e[s] !== "");
            n.forEach(s => {
                t += this.element.dataset[s] === e[s] ? 1 : 0
            }
            ),
            this.hidden = t !== n.length
        }
    }
      , hs = class {
        constructor(e) {
            this.container = e,
            this.departmentSelect = this.container.querySelector("#jobListings_department"),
            this.locationSelect = this.container.querySelector("#jobListings_location"),
            this.filters = {
                departmentId: this.departmentSelect.value,
                locationId: this.locationSelect.value
            },
            this.total = 0,
            this.parentDepartments = Array.from(this.container.querySelectorAll(".job-listings__parent-department")).map(t => new cs(t,this.container)),
            this.noResultsElement = this.container.querySelector(".job-listings__no-results"),
            this.addEventListeners(),
            this.onFilterChange()
        }
        addEventListeners() {
            this.departmentSelect.addEventListener("change", e => {
                this.filters.departmentId = e.target.value,
                this.onFilterChange()
            }
            ),
            this.locationSelect.addEventListener("change", e => {
                this.filters.locationId = e.target.value,
                this.onFilterChange()
            }
            )
        }
        onFilterChange() {
            this.parentDepartments.forEach(e => e.filter(this.filters)),
            this.total = this.parentDepartments.reduce( (e, t) => e + t.numberOfJobs, 0),
            this.container.querySelector(".job-listings__total span").innerHTML = this.total,
            this.noResultsElement.classList.toggle("hidden", this.total !== 0)
        }
    }
      , Hd = i => ({
        JobListings: new hs(i)
    })
      , lo = Hd;
    m();
    var Gd = i => {
        let e = i.querySelector("[data-newsroom-more]")
          , t = i.querySelector("[data-newsroom-more-button]")
          , n = () => {
            e.classList.toggle("hidden"),
            e.classList.contains("hidden") ? t.innerHTML = t.dataset.newsroomMoreText : t.innerHTML = t.dataset.newsroomLessText
        }
        ;
        ( () => {
            t == null || t.addEventListener("click", n)
        }
        )()
    }
      , co = Gd;
    m();
    var ms = Fr(fo());
    var Wd = (i, e) => {
        let t = null
          , n = i.querySelector("[data-progress]")
          , s = o => {
            t == null || t.progress(o)
        }
          , r = o => {
            o ? (i.classList.add("parallax-slider__caption--active"),
            e.classList.add("parallax-slider__media-item--active")) : (i.classList.remove("parallax-slider__caption--active"),
            e.classList.remove("parallax-slider__media-item--active"))
        }
        ;
        return ( () => {
            n && (t = Mi(n, {
                vertical: !0,
                playing: !1,
                duration: 3
            }))
        }
        )(),
        {
            progress: s,
            setActive: r
        }
    }
      , Yd = i => {
        let e = []
          , t = i.dataset.pcs === "fullscreen"
          , n = i.querySelector("[data-pcs-container]")
          , s = i.querySelector("[data-pcs-pin]")
          , r = i.querySelector("[data-pcs-grid]")
          , a = i.dataset.pcsInitialMedia === "true"
          , o = 0
          , l = !1
          , d = null
          , c = null
          , u = null
          , f = y => {
            let S = y > 0 && a ? 1 : 0
              , C = e.length - S
              , k = 1 / C
              , L = Math.floor(C * y) + S;
            L >= e.length && (L = e.length - 1);
            let $ = (y - (L - S) * k) / k;
            for (let I = 0; I < e.length; I++)
                e[I].progress(L === I ? $ : L < I ? 0 : 1),
                e[I].setActive(I === L);
            o = y
        }
          , p = () => {
            e.length = 0;
            let y = Array.from(i.querySelectorAll("[data-pcs-caption]"))
              , S = Array.from(i.querySelectorAll("[data-pcs-media]"));
            e.push(...y.map( (C, k) => Wd(C, S[k])))
        }
          , g = () => {
            l = window.innerWidth < 1024
        }
          , h = () => {
            let y = i.querySelector("[data-pcs-media-container]");
            l && t && y.parentElement === s ? (r.append(y),
            i.classList.remove("parallax-slider--fs-images")) : !l && t && y.parentElement === r && (s.prepend(y),
            i.classList.add("parallax-slider--fs-images"))
        }
          , v = () => {
            let y = l;
            g(),
            y !== l && h(),
            p(),
            f(o)
        }
          , b = () => {
            d && x(),
            d = new ms.default.Controller,
            c = new ms.default.Scene({
                triggerElement: n,
                duration: e.length * 1e3,
                triggerHook: 0,
                offset: 0
            }).setPin(s).on("progress", y => f(y.progress)).addTo(d)
        }
          , x = () => {
            d.destroy(!0),
            c.destroy(!0)
        }
          , _ = () => {
            u && clearTimeout(u),
            u = setTimeout( () => {
                v(),
                b(),
                u = null
            }
            , 200)
        }
        ;
        return ( () => {
            v(),
            b(),
            window.addEventListener("resize", () => _())
        }
        )(),
        {
            destroy: x
        }
    }
      , ho = Yd;
    m();
    m();
    m();
    var po = () => {
        let i = document.documentElement
          , e = document.body
          , t = "scrollTop"
          , n = "scrollHeight";
        return (i[t] || e[t]) / ((i[n] || e[n]) - i.clientHeight) * 100
    }
    ;
    var Oi = class extends be {
        constructor(e, t, n) {
            super(e, t, n),
            this.options.hookPercentage = t.hookPercentage,
            this.previousScrollPosition = -1
        }
        onScroll() {
            this.previousScrollPosition >= this.options.hookPercentage || (this.previousScrollPosition = po(),
            this.previousScrollPosition >= this.options.hookPercentage && this.show())
        }
        addListeners() {
            window.addEventListener("scroll", this.onScroll.bind(this)),
            super.addListeners()
        }
    }
    ;
    var Xd = ({parent: i}) => {
        let e = {};
        return window.popups && Array.isArray(window.popups) && window.popups.forEach(n => {
            e[n.id] = n.hookPercentage ? new Oi(n.id,n) : new be(n.id,n)
        }
        ),
        i.querySelectorAll("[data-popup-link]").forEach(n => {
            let s = JSON.parse(n.dataset.popupOptions)
              , r = e[s.id] = new be(n.dataset.popupLink,s);
            n.addEventListener("click", a => {
                r.show(),
                a.preventDefault()
            }
            )
        }
        ),
        {
            popups: e
        }
    }
      , mo = Xd;
    m();
    var jd = i => {
        let e = i.querySelector(".swiper")
          , t = {
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 16,
            breakpoints: {
                1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 32
                }
            },
            autoplay: {
                delay: 12e3,
                disableOnInteraction: !0
            },
            loop: !0,
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            },
            navigation: {
                prevEl: ".gradient-left",
                nextEl: ".gradient-right"
            },
            effect: "slide",
            speed: 1e3
        }
          , n = null
          , s = () => {
            n && (n.destroy(),
            n = null)
        }
        ;
        return ( () => {
            n = new de(e,ee(G({}, t), {
                modules: [Se, ce, Be, ue, ke]
            }))
        }
        )(),
        {
            destroy: s
        }
    }
      , go = jd;
    m();
    var gs = class {
        constructor(e) {
            Qt(this, "_fixedNav", !1);
            Qt(this, "headerHeight", 0);
            Qt(this, "_headerOffset", 0);
            Qt(this, "sticky", !1);
            this.container = e,
            this.wrapper = e.querySelector("[data-sn-wrap]"),
            this.mobileTitle = e.querySelector("[data-sn-title-mobile]"),
            this.mobileExpandButton = this.mobileTitle.querySelector("button"),
            this.desktopTitle = e.querySelector("[data-sn-title]"),
            this.sticky = e.hasAttribute("data-sn-sticky"),
            this.init()
        }
        get fixedNav() {
            return this._fixedNav
        }
        set fixedNav(e) {
            e !== this._fixedNav && (e ? (this.container.classList.add("sn--fixed"),
            this.container.style.height = `${this.wrapper.getBoundingClientRect().height}px`) : (this.container.classList.remove("sn--fixed"),
            this.container.style.removeProperty("height")),
            this._fixedNav = e)
        }
        get headerOffset() {
            return this._headerOffset
        }
        set headerOffset(e) {
            e > 0 && this._headerOffset >= 0 || e > this.headerHeight && !this.fixedNav || (e >= 0 && (e = 0),
            document.body.style.setProperty("--header-offset", `${e}px`),
            this.container.style.top = `${-e}px`,
            this._headerOffset = e)
        }
        get expanded() {
            return this.container.classList.contains("sn--expanded")
        }
        set expanded(e) {
            this.container.classList.toggle("sn--expanded", e)
        }
        init() {
            this.addEventListeners(),
            this.updateNavPosition()
        }
        addEventListeners() {
            this.sticky && (window.addEventListener("resize", this.updateNavPosition.bind(this)),
            window.addEventListener("scroll", this.updateNavPosition.bind(this))),
            this.mobileExpandButton.addEventListener("click", () => {
                this.expanded = !this.expanded
            }
            )
        }
        updateNavPosition() {
            if (!this.sticky)
                return;
            this.headerHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--header-height"), 10);
            let e = this.wrapper.getBoundingClientRect().top
              , t = this.container.getBoundingClientRect().top;
            t >= 0 ? (this.fixedNav = !1,
            this.headerOffset = -(this.headerHeight - t)) : e < this.headerHeight + 10 && (this.fixedNav = !0,
            this.headerOffset = -(this.headerHeight - e))
        }
    }
      , vo = i => {
        new gs(i)
    }
    ;
    m();
    var Ud = i => {
        let e = i.querySelector(".swiper")
          , t = {
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 12,
            autoplay: {
                delay: 3e3,
                disableOnInteraction: !1
            },
            loop: !0,
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            },
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            speed: 2e3
        }
          , n = null
          , s = () => {
            n && (n.destroy(),
            n = null)
        }
        ;
        return ( () => {
            n = new de(e,ee(G({}, t), {
                modules: [Se, ct, ce, Be, ue, ke]
            }))
        }
        )(),
        {
            destroy: s
        }
    }
      , yo = Ud;
    m();
    var bo = Fr(_o())
      , Jd = i => {
        let e = i.querySelector("iframe")
          , t = null
          , n = i.dataset.sketchfabId
          , s = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          , r = null
          , a = () => {}
          , o = (f, p) => {
            !s || f.forEach(g => {
                !g.isIntersecting && (r || t) && (r == null || r.stop(),
                r = null,
                t = null,
                e.src = "")
            }
            )
        }
          , l = () => {
            r || (t = new bo.default(e),
            t.init(n, {
                success: f => {
                    r = f,
                    r.start(),
                    r.addEventListener("viewerready", a)
                }
            }))
        }
          , d = (f, p) => {
            f.forEach(g => {
                g.isIntersecting && l()
            }
            )
        }
          , c = () => {
            new IntersectionObserver( (p, g) => {
                d(p, g),
                o(p, g)
            }
            ).observe(e)
        }
          , u = f => {
            console.error("Sketchfab Viewing API Error - ", f)
        }
        ;
        c()
    }
      , xo = Jd;
    m();
    m();
    function Ai(i) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
                i[n] = t[n]
        }
        return i
    }
    var Kd = {
        read: function(i) {
            return i[0] === '"' && (i = i.slice(1, -1)),
            i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(i) {
            return encodeURIComponent(i).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    };
    function ys(i, e) {
        function t(s, r, a) {
            if (typeof document != "undefined") {
                a = Ai({}, e, a),
                typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)),
                a.expires && (a.expires = a.expires.toUTCString()),
                s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var o = "";
                for (var l in a)
                    !a[l] || (o += "; " + l,
                    a[l] !== !0 && (o += "=" + a[l].split(";")[0]));
                return document.cookie = s + "=" + i.write(r, s) + o
            }
        }
        function n(s) {
            if (!(typeof document == "undefined" || arguments.length && !s)) {
                for (var r = document.cookie ? document.cookie.split("; ") : [], a = {}, o = 0; o < r.length; o++) {
                    var l = r[o].split("=")
                      , d = l.slice(1).join("=");
                    try {
                        var c = decodeURIComponent(l[0]);
                        if (a[c] = i.read(d, c),
                        s === c)
                            break
                    } catch (u) {}
                }
                return s ? a[s] : a
            }
        }
        return Object.create({
            set: t,
            get: n,
            remove: function(s, r) {
                t(s, "", Ai({}, r, {
                    expires: -1
                }))
            },
            withAttributes: function(s) {
                return ys(this.converter, Ai({}, this.attributes, s))
            },
            withConverter: function(s) {
                return ys(Ai({}, this.converter, s), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(e)
            },
            converter: {
                value: Object.freeze(i)
            }
        })
    }
    var St = ys(Kd, {
        path: "/"
    });
    function _s() {
        let i = "utmcookie"
          , e = ["utm_campaign", "utm_source", "utm_medium", "utm_content"]
          , t = []
          , n = St.get(i);
        e.forEach(s => {
            let r = Zd(s.toLowerCase());
            r && t.push({
                key: s,
                value: r
            })
        }
        ),
        n && t.length > 0 ? St.set(i, JSON.stringify(Object.assign({}, JSON.parse(n), t)), {
            domain: window.location.hostname.indexOf("aviadrones.com") > -1 ? "aviadrones.com" : window.location.hostname
        }) : St.set(i, JSON.stringify(t), {
            domain: window.location.hostname.indexOf("aviadrones.com") > -1 ? "aviadrones.com" : window.location.hostname
        })
    }
    function Zd(i, e=window.location.href) {
        i = i.replace(/[[\]]/g, "\\$&");
        let n = new RegExp("[?&]" + i + "(=([^&#]*)|&|#|$)").exec(e);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }
    m();
    var Qd = i => {
        let e = i.querySelector("[data-video-module-play]")
          , t = i.querySelector("[data-video-module-full]")
          , n = i.querySelector("[data-video-module-clip]")
          , s = i.dataset.videoModuleModal === "true"
          , r = null
          , a = null
          , o = null
          , l = null
          , d = () => {}
          , c = () => {
            o.video.pause(),
            o.video.currentTime(0),
            l && l.video.play()
        }
          , u = () => {
            o = me(r, {
                autoplay: !0
            }),
            s ? a ? (a.show(),
            o.video.play()) : a = je(r, "video", {
                show: !0,
                onClose: () => c()
            }) : (i.classList.add("video-module--playing"),
            t.append(r)),
            l && l.video.pause()
        }
          , f = g => {
            o = g,
            o.on("pause", () => d())
        }
        ;
        return ( () => {
            r = t.firstElementChild,
            t.removeChild(r),
            l = me(n.querySelector(".sanity-video")),
            i.addEventListener("click", () => u()),
            i.addEventListener("keydown", g => {
                g.keyCode === 13 && u()
            }
            )
        }
        )(),
        {}
    }
      , So = Qd;
    m();
    var ec = i => {
        let e = i.querySelector("[data-video-modal-button]")
          , t = i.querySelector("[data-video-modal-content]")
          , n = null
          , s = null
          , r = null
          , a = () => {
            s.destroy(),
            s = null,
            n.destroy()
        }
          , o = () => {
            r = _e(t.innerHTML.toString()),
            n = je(r, "video", {
                show: !0,
                onClose: () => a()
            }),
            s = me(n.container.querySelector(".sanity-video"), {
                autoplay: !0
            })
        }
          , l = () => {
            e.addEventListener("click", () => o())
        }
          , d = () => {
            l()
        }
          , c = () => {
            s.destroy()
        }
        ;
        return d(),
        {
            destroy: c
        }
    }
      , Eo = ec;
    m();
    var {throttle: nc} = (xs(),
    Nr(bs))
      , Ss = class {
        constructor(e) {
            let t = e.offsetTop;
            this._startingOffsetY = t,
            this.element = e,
            this.addEventListeners(),
            this.onScroll()
        }
        get startAtPercent() {
            var e;
            return 100 - parseInt((e = this.element.dataset.animStart) != null ? e : 0)
        }
        get endAtPercent() {
            var e;
            return 100 - parseInt((e = this.element.dataset.animEnd) != null ? e : 100)
        }
        get yPosition() {
            return this.element.parentElement.getBoundingClientRect().top + this._startingOffsetY
        }
        addEventListeners() {
            window.addEventListener("scroll", nc(this.onScroll.bind(this), 50))
        }
        updatePosition(e) {
            throw new Error("updatePosition() not implemented")
        }
        onScroll() {
            let e = this.calculateProgress();
            this.updatePosition(e)
        }
        calculateProgress() {
            let e = window.innerHeight
              , t = 0;
            this.element.offsetHeight - e > 0 && (t = (this.element.offsetHeight - e) * (1 - this.yPosition / e));
            let n = (this.yPosition + t) / e * 100;
            return n <= this.startAtPercent && n >= this.endAtPercent ? (n - this.startAtPercent) / (this.endAtPercent - this.startAtPercent) : n < this.startAtPercent ? 1 : 0
        }
    }
      , Di = class extends Ss {
        constructor(e) {
            super(e),
            this.yPosition = this.element.getBoundingClientRect().top
        }
        get initialOffset() {
            var e;
            return parseInt((e = this.element.dataset.animOffset) != null ? e : 100) / 100 * this.element.offsetHeight
        }
        get initialOpacity() {
            return parseInt(this.element.dataset.animOpacity === void 0 ? 100 : this.element.dataset.animOpacity) / 100
        }
        get initialBlur() {
            var e;
            return parseInt((e = this.element.dataset.animBlur) != null ? e : 0)
        }
        get yPosition() {
            return this._yPosition = this.element.parentElement.getBoundingClientRect().top + this._startingOffsetY,
            this._yPosition
        }
        set yPosition(e) {
            this._yPosition = e
        }
        set offset(e) {
            e !== this._offset && (this._offset = e,
            this.element.style.setProperty("--anim-offset-y", `${this._offset}px`))
        }
        get offset() {
            var e;
            return (e = this._offset) != null ? e : 0
        }
        set opacity(e) {
            e !== this._opacity && (this._opacity = e,
            this.element.style.setProperty("--anim-opacity", this._opacity))
        }
        set blur(e) {
            e !== this._blur && (this._blur = e,
            this.element.style.setProperty("--anim-blur", `${this._blur}px`))
        }
        get blur() {
            var e;
            return (e = this._blur) != null ? e : 0
        }
        get opacity() {
            var e;
            return (e = this._opacity) != null ? e : 1
        }
        updatePosition(e) {
            this.offset = this.initialOffset * (1 - e),
            this.initialOpacity !== 1 && (this.opacity = 1 - (1 - this.initialOpacity) * (1 - e)),
            this.initialBlur !== 1 && (this.blur = this.initialBlur * (1 - e))
        }
    }
      , Es = class extends Di {
        constructor(e) {
            super(e),
            this.initialPosition(),
            this.steps = Array.from(e.querySelectorAll("[data-anim-step]"))
        }
        initialPosition() {
            this.initialOpacity !== 1 && (this.opacity = 1 - (1 - this.initialOpacity)),
            this.initialBlur !== 1 && (this.blur = this.initialBlur)
        }
        updatePosition(e) {
            if (this.steps && this.steps.length > 0) {
                let t = e * this.steps.length;
                this.steps.forEach( (n, s) => {
                    t > s && t < s + 1 ? n.classList.add("active") : n.classList.remove("active")
                }
                )
            }
        }
    }
      , To = () => {
        document.querySelectorAll("[data-anim='linear']").forEach(t => {
            new Di(t)
        }
        ),
        document.querySelectorAll("[data-anim='linear-step']").forEach(t => {
            new Es(t)
        }
        )
    }
    ;
    m();
    var sc = i => {
        let e = null;
        try {
            e = _e(i.dataset.threeSixtyEmbed)
        } catch (n) {
            console.error(n)
        }
        if (!e)
            return;
        let t = document.createElement("iframe");
        t.setAttribute("allow", "xr-spatial-tracking; gyroscope; accelerometer"),
        t.setAttribute("allowfullscreen", ""),
        t.setAttribute("frameborder", "0"),
        t.setAttribute("scrolling", "no"),
        t.setAttribute("width", "100%"),
        t.setAttribute("height", "790px"),
        t.setAttribute("src", e.dataset.kuula),
        i.appendChild(t)
    }
      , Co = sc;
    m();
    var Ts = class {
        constructor(e) {
            this.element = e,
            this.options = e.dataset.basicGallery == "" ? {} : JSON.parse(e.dataset.basicGallery),
            this.init()
        }
        init() {
            this.swiper = new de(this.element,ee(G({
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "slide",
                speed: 1e3,
                navigation: {
                    nextEl: this.element.querySelector(".swiper-button-next"),
                    prevEl: this.element.querySelector(".swiper-button-prev")
                },
                pagination: {
                    el: this.element.querySelector(".swiper-pagination"),
                    clickable: !0
                },
                on: {
                    slideChange: function() {
                        let e = this.el.querySelectorAll("video");
                        e.length > 0 && e.forEach(t => {
                            t.pause()
                        }
                        )
                    }
                }
            }, this.options), {
                modules: [Se, ce, Be, ue, ke]
            }))
        }
    }
      , wo = i => new Ts(i);
    m();
    var rc = (i, e) => {
        let s = !1
          , r = null
          , a = () => {
            let b = document.querySelector("header.header[data-header]")
              , x = b.getBoundingClientRect();
            return window.innerWidth / 2 - x.width / 2 + parseInt(window.getComputedStyle(b).paddingRight) - 24 + 4
        }
          , o = () => {
            let b = document.querySelector("div.ascend-sticky-reg")
              , x = document.querySelector("div.ascend-sticky-reg .container");
            return !b || !b.classList.contains("ascend-sticky-reg--fixed") ? 34 : x.getBoundingClientRect().height + 34
        }
          , l = () => {
            !window.drift || !s || window.drift.config({
                verticalOffset: o(),
                horizontalOffset: a()
            })
        }
          , d = () => {
            r || (r = window.requestAnimationFrame( () => {
                p(),
                l(),
                r = null
            }
            ))
        }
          , c = () => le(void 0, null, function*() {
            return new Promise( (b, x) => {
                (function() {
                    let _ = window.driftt = window.drift = window.driftt || [];
                    if (!_.init) {
                        if (_.invoked)
                            return void (window.console && console.error && console.error("Drift snippet included twice."));
                        _.invoked = !0,
                        _.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
                        _.factory = function(T) {
                            return function() {
                                let y = Array.prototype.slice.call(arguments);
                                return y.unshift(T),
                                _.push(y),
                                _
                            }
                        }
                        ,
                        _.methods.forEach(function(T) {
                            _[T] = _.factory(T)
                        }),
                        _.load = function(T) {
                            let S = Math.ceil(new Date / 3e5) * 3e5
                              , C = document.createElement("script");
                            C.type = "text/javascript",
                            C.async = !0,
                            C.crossorigin = "anonymous",
                            C.src = "https://js.driftt.com/include/" + S + "/" + T + ".js";
                            let k = document.getElementsByTagName("script")[0];
                            k.parentNode.insertBefore(C, k)
                        }
                    }
                }
                )(),
                drift.SNIPPET_VERSION = "0.3.1",
                drift.load("vhhacgucu259"),
                drift.on("ready", _ => {
                    b(_)
                }
                )
            }
            )
        })
          , u = () => {
            window.drift.on("chatClose", () => {
                s = !1,
                window.drift.api.widget.hide()
            }
            ),
            window.drift.api.startInteraction({
                interactionId: 359995
            }),
            window.drift.api.widget.show(),
            s = !0,
            l()
        }
          , f = null
          , p = () => {
            if (!f)
                return;
            let b = 12;
            f.style.bottom = `${o() + 8}px`,
            f.style.right = a() + b + "px"
        }
          , g = () => {
            f = document.body.appendChild(document.createElement("div")),
            p(),
            f.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.818 106.818">
       <g transform="translate(-73.591 -148.341)">
          <rect width="26.263" height="7" x="154.146" y="195.331" fill="#ffffff" fill-opacity="0.087" rx="6.911" ry="6.419"/>
          <rect width="26.263" height="7" x="36.256" y="231.802" fill="#ffffff" fill-opacity="0.17" rx="6.911" ry="6.419" transform="rotate(-30)"/>
          <rect width="26.263" height="7" x="-84.075" y="204.442" fill="#ffffff" fill-opacity="0.253" rx="6.911" ry="6.419" transform="rotate(-60)"/>
          <rect width="26.263" height="7" x="-174.604" y="120.581" fill="#ffffff" fill-opacity="0.336" rx="6.911" ry="6.419" transform="rotate(-90)"/>
          <rect width="26.263" height="7" x="-211.075" y="2.692" fill="#ffffff" fill-opacity="0.419" rx="6.911" ry="6.419" transform="rotate(-120)"/>
          <rect width="26.263" height="7" x="-183.715" y="-117.639" fill="#ffffff" fill-opacity="0.502" rx="6.911" ry="6.419" transform="rotate(-150)"/>
          <rect width="26.263" height="7" x="-99.854" y="-208.169" fill="#ffffff" fill-opacity="0.585" rx="6.911" ry="6.419" transform="scale(-1)"/>
          <rect width="26.263" height="7" x="18.035" y="-244.639" fill="#ffffff" fill-opacity="0.668" rx="6.911" ry="6.419" transform="rotate(150)"/>
          <rect width="26.263" height="7" x="138.366" y="-217.279" fill="#ffffff" fill-opacity="0.751" rx="6.911" ry="6.419" transform="rotate(120)"/>
          <rect width="26.263" height="7" x="228.896" y="-133.419" fill="#ffffff" fill-opacity="0.834" rx="6.911" ry="6.419" transform="rotate(90)"/>
          <rect width="26.263" height="7" x="265.366" y="-15.529" fill="#ffffff" fill-opacity="0.917" rx="6.911" ry="6.419" transform="rotate(60)"/>
          <rect width="26.263" height="7" x="238.006" y="104.802" fill="#ffffff" rx="6.911" ry="6.419" transform="rotate(30)"/>
       </g></svg>`,
            f.classList.add("drift-loading-icon")
        }
          , h = () => {
            !f || f.remove()
        }
        ;
        return ( () => {
            i.addEventListener("click", b => {
                if (window.drift && checkCookiePreference("targeting"))
                    u();
                else if (!window.drift && checkCookiePreference("targeting"))
                    g(),
                    c().then(x => {
                        window.dataLayer.push({
                            event: "drift-active"
                        }),
                        h(),
                        u()
                    }
                    );
                else if (i.dataset.popupOptions && e) {
                    let x = JSON.parse(i.dataset.popupOptions);
                    new e(i.dataset.driftPopup,ee(G({}, x), {
                        onLoad: _ => {
                            _.show()
                        }
                    }))
                } else
                    return;
                return b.preventDefault(),
                !1
            }
            ),
            window.addEventListener("scroll", () => d()),
            window.addEventListener("resize", () => d())
        }
        )(),
        {
            element: i
        }
    }
      , Mo = rc;
    m();
    var Cs = class {
        constructor(e) {
            this.container = e,
            this.content = e.querySelector("[data-drop-content-module-content]"),
            this.moduleId = e.dataset.dropContentModule,
            this.innerContent = e.querySelector("[data-drop-content-module-inner-content]"),
            this.closeButton = e.nextElementSibling.querySelector("[data-drop-content-module-close]"),
            this.callerModuleId = null,
            this.addEventListeners(),
            this.setAnimationDuration(),
            this.title = e.dataset.dropContentName
        }
        addEventListeners() {
            this.content.addEventListener("click", () => setTimeout(this.setAnimationDuration.bind(this), 1e3)),
            window.addEventListener("dropInContentToggle", this.handleToggle.bind(this)),
            window.addEventListener("resize", this.handleResize.bind(this)),
            this.closeButton.addEventListener("click", this.toggle.bind(this))
        }
        handleToggle(e) {
            e.detail.moduleId === this.moduleId && (this.toggle(),
            this.callerModuleId = e.detail.containerModuleId)
        }
        setAnimationDuration() {
            this.container.style.setProperty("--drop-in-content-module-anim-duration", `${this.height() / (window.innerHeight / 2) * .2 + .1}s`)
        }
        handleResize() {
            this.setAnimationDuration()
        }
        height() {
            let e = parseInt(window.getComputedStyle(this.container).paddingBottom) + parseInt(window.getComputedStyle(this.container).paddingTop);
            return this.innerContent.scrollHeight + e
        }
        scrollIntoView(e) {
            let t = e.getBoundingClientRect().top
              , n = window.scrollY
              , s = parseInt(document.body.style.getPropertyValue("--header-height"));
            window.scrollTo({
                top: n + t - s,
                left: 0,
                behavior: "smooth"
            })
        }
        sendAnalytics() {
            this.title && this.title.length > 0 && (window.dataLayer = window.dataLayer || [],
            window.dataLayer.push({
                event: "drawer",
                action: this.isOpen ? "open" : "close",
                title: this.title
            }))
        }
        open() {
            this.container.parentElement.classList.add("drop-in-content--open"),
            this.scrollIntoView(this.container),
            window.dispatchEvent(new CustomEvent("dropInContentOpen",{
                detail: {
                    moduleId: this.moduleId
                }
            }))
        }
        close() {
            if (this.container.parentElement.classList.remove("drop-in-content--open"),
            this.callerModuleId) {
                let e = document.querySelector(`[data-module-id="${this.callerModuleId}"]`);
                e && this.scrollIntoView(e)
            }
            window.dispatchEvent(new CustomEvent("dropInContentClose",{
                detail: {
                    moduleId: this.moduleId
                }
            }))
        }
        get isOpen() {
            return this.container.parentElement.classList.contains("drop-in-content--open")
        }
        toggle() {
            this.isOpen ? this.close() : this.open(),
            this.sendAnalytics()
        }
    }
      , Po = i => new Cs(i);
    m();
    var ws = class {
        constructor(e) {
            this.container = e;
            let t = JSON.parse(e.dataset.buttonDropContent);
            this.moduleId = t.moduleId,
            this.containerModuleId = t.containerModuleId,
            this.addEventListeners()
        }
        addEventListeners() {
            this.container.addEventListener("click", this.handleClick.bind(this)),
            window.addEventListener("dropInContentOpen", e => {
                e.detail.moduleId === this.moduleId && (this.open = !0)
            }
            ),
            window.addEventListener("dropInContentClose", e => {
                e.detail.moduleId === this.moduleId && (this.open = !1)
            }
            )
        }
        get open() {
            return this.container.classList.contains("is-active")
        }
        set open(e) {
            e ? this.container.classList.add("is-active") : this.container.classList.remove("is-active")
        }
        handleClick() {
            window.dispatchEvent(new CustomEvent("dropInContentToggle",{
                detail: {
                    moduleId: this.moduleId,
                    containerModuleId: this.containerModuleId
                }
            }))
        }
    }
      , ko = i => new ws(i);
    m();
    var Ms = class {
        constructor(e) {
            this.container = e,
            this.options = JSON.parse(this.container.dataset.variableContentCarousel),
            this.init()
        }
        init() {
            let e = ee(G({}, this.options), {
                pagination: {
                    clickable: !0,
                    el: this.container.querySelector(".swiper-pagination")
                },
                navigation: {
                    nextEl: this.container.querySelector(".variable-content-carousel__next"),
                    prevEl: this.container.querySelector(".variable-content-carousel__prev")
                },
                watchOverflow: !0,
                effect: "slide",
                speed: 1e3,
                modules: [Se, ce, Be, ue, ke]
            });
            this.slider = new de(this.container.querySelector(".swiper"),e)
        }
    }
      , Lo = i => new Ms(i);
    m();
    m();
    var oi = class {
        constructor(e) {
            this.container = e,
            this.items = Array.from(this.container.querySelectorAll(".animate-text__item")),
            this.current = 0,
            this.initDelay = parseFloat(this.container.dataset.animateTextDelay) * 1e3,
            this.init()
        }
        init() {
            this.initDelay > 0 && setInterval( () => {
                this.next()
            }
            , this.initDelay)
        }
        get current() {
            return this._current
        }
        set current(e) {
            e !== this._current && (this.resetNotActive(),
            this.hideCurrent(),
            this._current = e,
            this.items[this.current].classList.add("animate-text__item--active"),
            this.items[this.current].classList.remove("animate-text__item--initial"))
        }
        resetNotActive() {
            this.items.filter(e => !e.classList.contains("animate-text__item--active")).forEach(e => {
                e.classList.remove("animate-text__item--end"),
                e.classList.add("animate-text__item--initial")
            }
            )
        }
        hideCurrent() {
            !this.items[this.current] || (this.items[this.current].classList.add("animate-text__item--end"),
            this.items[this.current].classList.remove("animate-text__item--active"))
        }
        next() {
            this.current = this.items.length - 1 > this.current ? this.current + 1 : 0
        }
    }
      , $o = i => new oi(i);
    var Ps = class {
        constructor(e) {
            this.container = e,
            this.text = e.querySelector("[data-animate-text]"),
            this.videos = {},
            this.videoElements = {
                desktop: e.querySelector(".bg-media__media--desktop [data-video]"),
                mobile: e.querySelector(".bg-media__media--mobile [data-video]")
            },
            this.timings = this.container.dataset.timedVideoAndTextHero.split(",").map(t => parseFloat(t)),
            this.timings[0] !== 0 && this.timings.unshift(0),
            this.text = new oi(this.container.querySelector("[data-animate-text]")),
            this.currentSection = 0,
            this.init()
        }
        get video() {
            return this.videos[this._videoKey]
        }
        set video(e) {
            if (!e) {
                this._videoKey = null;
                return
            }
            e !== this._videoKey && (this._videoKey && this.videos[this._videoKey].video.pause(),
            this.videos[e] ? this.videos[e].video.play() : this.videos[e] = me(this.videoElements[e], {
                muted: !0,
                loop: !0
            }, {
                onActivate: this.onVideoActivate.bind(this)
            }),
            this._videoKey = e)
        }
        onVideoActivate(e) {
            e.on("timeupdate", this.onVideoTimeUpdate.bind(this)),
            e.readyState >= 4 ? e.play() : e.on("canplaythrough", () => {
                e.play()
            }
            ),
            this.text.current = 0
        }
        get currentSection() {
            return this._currentSection
        }
        set currentSection(e) {
            e !== this._currentSection && (this._currentSection = e,
            this.text.current = e)
        }
        onVideoTimeUpdate() {
            var t;
            let e = (t = this.video.video) == null ? void 0 : t.currentTime();
            if (this.currentSection + 1 < this.timings.length && e > this.timings[this.currentSection + 1])
                this.currentSection++;
            else if (e < this.timings[this.currentSection]) {
                let n = this.currentSection;
                for (let s = this.currentSection; s >= 0; s--)
                    e < this.timings[s] && (n = s - 1);
                this.currentSection = n
            }
        }
        setupVideo() {
            window.innerWidth < 768 ? this.video = "mobile" : this.video = "desktop"
        }
        init() {
            this.setupVideo(),
            window.addEventListener("resize", this.setupVideo.bind(this))
        }
    }
      , Oo = i => new Ps(i);
    m();
    var ks = class {
        constructor(e) {
            this.container = e,
            this.video = null,
            this.played = !1,
            this.desktopVideo = e.querySelector(".bg-media__media--desktop [data-video]"),
            this.mobileVideo = e.querySelector(".bg-media__media--mobile [data-video]"),
            this.init()
        }
        get video() {
            return this._video
        }
        set video(e) {
            var t;
            e !== ((t = this._video) == null ? void 0 : t.element) && (this._video && this.video.destroy(),
            this._video = me(e, {
                muted: !0,
                loop: !0
            }, {
                onActivate: this.onVideoActivate.bind(this)
            }))
        }
        onVideoActivate(e) {
            e.on("timeupdate", this.onVideoTimeUpdate.bind(this)),
            e.readyState >= 4 ? e.play() : e.on("canplaythrough", () => {
                e.play()
            }
            )
        }
        onVideoTimeUpdate() {
            let e = this.video.video.currentTime();
            e >= 1.3 && !this.played ? (this.played = !0,
            this.container.classList.add("x10-hero__outer--end")) : e < .5 && this.container.classList.contains("x10-hero__outer--end") && (this.container.classList.remove("x10-hero__outer--end"),
            this.played = !1)
        }
        setupVideo() {
            window.innerWidth < 768 && this.mobileVideo ? this.video = this.mobileVideo : this.video = this.desktopVideo
        }
        init() {
            this.setupVideo()
        }
    }
      , Io = i => new ks(i);
    m();
    m();
    m();
    function nt(i) {
        if (i === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
    }
    function qo(i, e) {
        i.prototype = Object.create(e.prototype),
        i.prototype.constructor = i,
        i.__proto__ = e
    }
    var Ie = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, qt = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, js, Ee, Q, Ve = 1e8, Z = 1 / Ve, Rs = Math.PI * 2, ac = Rs / 4, oc = 0, Vo = Math.sqrt, lc = Math.cos, dc = Math.sin, fe = function(e) {
        return typeof e == "string"
    }, re = function(e) {
        return typeof e == "function"
    }, rt = function(e) {
        return typeof e == "number"
    }, Wi = function(e) {
        return typeof e == "undefined"
    }, Qe = function(e) {
        return typeof e == "object"
    }, Oe = function(e) {
        return e !== !1
    }, Us = function() {
        return typeof window != "undefined"
    }, zi = function(e) {
        return re(e) || fe(e)
    }, Ho = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
    , Te = Array.isArray, Fs = /(?:-?\.?\d|\.)+/gi, Js = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Mt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ls = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ks = /[+-]=-?[.\d]+/, Go = /[^,'"\[\]\s]+/gi, cc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, te, Ke, Ns, Zs, Re = {}, Bi = {}, Wo, Yo = function(e) {
        return (Bi = wt(e, Re)) && Ce
    }, Yi = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, hi = function(e, t) {
        return !t && console.warn(e)
    }, Xo = function(e, t) {
        return e && (Re[e] = t) && Bi && (Bi[e] = t) || Re
    }, pi = function() {
        return 0
    }, uc = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Ri = {
        suppressEvents: !0,
        kill: !1
    }, fc = {
        suppressEvents: !0
    }, Qs = {}, ft = [], Bs = {}, jo, Le = {}, $s = {}, Ao = 30, Fi = [], er = "", tr = function(e) {
        var t = e[0], n, s;
        if (Qe(t) || re(t) || (e = [e]),
        !(n = (t._gsap || {}).harness)) {
            for (s = Fi.length; s-- && !Fi[s].targetTest(t); )
                ;
            n = Fi[s]
        }
        for (s = e.length; s--; )
            e[s] && (e[s]._gsap || (e[s]._gsap = new sr(e[s],n))) || e.splice(s, 1);
        return e
    }, ht = function(e) {
        return e._gsap || tr(He(e))[0]._gsap
    }, ir = function(e, t, n) {
        return (n = e[t]) && re(n) ? e[t]() : Wi(n) && e.getAttribute && e.getAttribute(t) || n
    }, we = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, ae = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, he = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, Pt = function(e, t) {
        var n = t.charAt(0)
          , s = parseFloat(t.substr(2));
        return e = parseFloat(e),
        n === "+" ? e + s : n === "-" ? e - s : n === "*" ? e * s : e / s
    }, hc = function(e, t) {
        for (var n = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < n; )
            ;
        return s < n
    }, qi = function() {
        var e = ft.length, t = ft.slice(0), n, s;
        for (Bs = {},
        ft.length = 0,
        n = 0; n < e; n++)
            s = t[n],
            s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
    }, Uo = function(e, t, n, s) {
        ft.length && !Ee && qi(),
        e.render(t, n, s || Ee && t < 0 && (e._initted || e._startAt)),
        ft.length && !Ee && qi()
    }, Jo = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Go).length < 2 ? t : fe(e) ? e.trim() : e
    }, Ko = function(e) {
        return e
    }, Ge = function(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }, pc = function(e) {
        return function(t, n) {
            for (var s in n)
                s in t || s === "duration" && e || s === "ease" || (t[s] = n[s])
        }
    }, wt = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, Do = function i(e, t) {
        for (var n in t)
            n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Qe(t[n]) ? i(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }, Vi = function(e, t) {
        var n = {}, s;
        for (s in e)
            s in t || (n[s] = e[s]);
        return n
    }, ci = function(e) {
        var t = e.parent || te
          , n = e.keyframes ? pc(Te(e.keyframes)) : Ge;
        if (Oe(e.inherit))
            for (; t; )
                n(e, t.vars.defaults),
                t = t.parent || t._dp;
        return e
    }, mc = function(e, t) {
        for (var n = e.length, s = n === t.length; s && n-- && e[n] === t[n]; )
            ;
        return n < 0
    }, Zo = function(e, t, n, s, r) {
        n === void 0 && (n = "_first"),
        s === void 0 && (s = "_last");
        var a = e[s], o;
        if (r)
            for (o = t[r]; a && a[r] > o; )
                a = a._prev;
        return a ? (t._next = a._next,
        a._next = t) : (t._next = e[n],
        e[n] = t),
        t._next ? t._next._prev = t : e[s] = t,
        t._prev = a,
        t.parent = t._dp = e,
        t
    }, Xi = function(e, t, n, s) {
        n === void 0 && (n = "_first"),
        s === void 0 && (s = "_last");
        var r = t._prev
          , a = t._next;
        r ? r._next = a : e[n] === t && (e[n] = a),
        a ? a._prev = r : e[s] === t && (e[s] = r),
        t._next = t._prev = t.parent = null
    }, pt = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
        e._act = 0
    }, Et = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; )
                n._dirty = 1,
                n = n.parent;
        return e
    }, gc = function(e) {
        for (var t = e.parent; t && t.parent; )
            t._dirty = 1,
            t.totalDuration(),
            t = t.parent;
        return e
    }, qs = function(e, t, n, s) {
        return e._startAt && (Ee ? e._startAt.revert(Ri) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
    }, vc = function i(e) {
        return !e || e._ts && i(e.parent)
    }, zo = function(e) {
        return e._repeat ? Vt(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, Vt = function(e, t) {
        var n = Math.floor(e /= t);
        return e && n === e ? n - 1 : n
    }, Hi = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, ji = function(e) {
        return e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || Z) || 0))
    }, Ui = function(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = he(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
        ji(e),
        n._dirty || Et(n, e)),
        e
    }, Qo = function(e, t) {
        var n;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Hi(e.rawTime(), t),
        (!t._dur || vi(0, t.totalDuration(), n) - t._tTime > Z) && t.render(n, !0)),
        Et(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp; )
                    n.rawTime() >= 0 && n.totalTime(n._tTime),
                    n = n._dp;
            e._zTime = -Z
        }
    }, Ze = function(e, t, n, s) {
        return t.parent && pt(t),
        t._start = he((rt(n) ? n : n || e !== te ? qe(e, n, t) : e._time) + t._delay),
        t._end = he(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        Zo(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Vs(t) || (e._recent = t),
        s || Qo(e, t),
        e._ts < 0 && Ui(e, e._tTime),
        e
    }, el = function(e, t) {
        return (Re.ScrollTrigger || Yi("scrollTrigger", t)) && Re.ScrollTrigger.create(t, e)
    }, tl = function(e, t, n, s, r) {
        if (or(e, t, r),
        !e._initted)
            return 1;
        if (!n && e._pt && !Ee && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && jo !== $e.frame)
            return ft.push(e),
            e._lazy = [r, s],
            1
    }, yc = function i(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t))
    }, Vs = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, _c = function(e, t, n, s) {
        var r = e.ratio, a = t < 0 || !t && (!e._start && yc(e) && !(!e._initted && Vs(e)) || (e._ts < 0 || e._dp._ts < 0) && !Vs(e)) ? 0 : 1, o = e._rDelay, l = 0, d, c, u;
        if (o && e._repeat && (l = vi(0, e._tDur, t),
        c = Vt(l, o),
        e._yoyo && c & 1 && (a = 1 - a),
        c !== Vt(e._tTime, o) && (r = 1 - a,
        e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== r || Ee || s || e._zTime === Z || !t && e._zTime) {
            if (!e._initted && tl(e, t, s, n, l))
                return;
            for (u = e._zTime,
            e._zTime = t || (n ? Z : 0),
            n || (n = t && !u),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            d = e._pt; d; )
                d.r(a, d.d),
                d = d._next;
            t < 0 && qs(e, t, n, !0),
            e._onUpdate && !n && ze(e, "onUpdate"),
            l && e._repeat && !n && e.parent && ze(e, "onRepeat"),
            (t >= e._tDur || t < 0) && e.ratio === a && (a && pt(e, 1),
            !n && !Ee && (ze(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, bc = function(e, t, n) {
        var s;
        if (n > t)
            for (s = e._first; s && s._start <= n; ) {
                if (s.data === "isPause" && s._start > t)
                    return s;
                s = s._next
            }
        else
            for (s = e._last; s && s._start >= n; ) {
                if (s.data === "isPause" && s._start < t)
                    return s;
                s = s._prev
            }
    }, Ht = function(e, t, n, s) {
        var r = e._repeat
          , a = he(t) || 0
          , o = e._tTime / e._tDur;
        return o && !s && (e._time *= a / e._dur),
        e._dur = a,
        e._tDur = r ? r < 0 ? 1e10 : he(a * (r + 1) + e._rDelay * r) : a,
        o > 0 && !s && Ui(e, e._tTime = e._tDur * o),
        e.parent && ji(e),
        n || Et(e.parent, e),
        e
    }, Ro = function(e) {
        return e instanceof ge ? Et(e) : Ht(e, e._dur)
    }, xc = {
        _start: 0,
        endTime: pi,
        totalDuration: pi
    }, qe = function i(e, t, n) {
        var s = e.labels, r = e._recent || xc, a = e.duration() >= Ve ? r.endTime(!1) : e._dur, o, l, d;
        return fe(t) && (isNaN(t) || t in s) ? (l = t.charAt(0),
        d = t.substr(-1) === "%",
        o = t.indexOf("="),
        l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
        (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (o < 0 ? r : n).totalDuration() / 100 : 1)) : o < 0 ? (t in s || (s[t] = a),
        s[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
        d && n && (l = l / 100 * (Te(n) ? n[0] : n).totalDuration()),
        o > 1 ? i(e, t.substr(0, o - 1), n) + l : a + l)) : t == null ? a : +t
    }, ui = function(e, t, n) {
        var s = rt(t[1]), r = (s ? 2 : 1) + (e < 2 ? 0 : 1), a = t[r], o, l;
        if (s && (a.duration = t[1]),
        a.parent = n,
        e) {
            for (o = a,
            l = n; l && !("immediateRender"in o); )
                o = l.vars.defaults || {},
                l = Oe(l.vars.inherit) && l.parent;
            a.immediateRender = Oe(o.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1]
        }
        return new oe(t[0],a,t[r + 1])
    }, mt = function(e, t) {
        return e || e === 0 ? t(e) : t
    }, vi = function(e, t, n) {
        return n < e ? e : n > t ? t : n
    }, ve = function(e, t) {
        return !fe(e) || !(t = cc.exec(e)) ? "" : t[1]
    }, Sc = function(e, t, n) {
        return mt(n, function(s) {
            return vi(e, t, s)
        })
    }, Hs = [].slice, il = function(e, t) {
        return e && Qe(e) && "length"in e && (!t && !e.length || e.length - 1 in e && Qe(e[0])) && !e.nodeType && e !== Ke
    }, Ec = function(e, t, n) {
        return n === void 0 && (n = []),
        e.forEach(function(s) {
            var r;
            return fe(s) && !t || il(s, 1) ? (r = n).push.apply(r, He(s)) : n.push(s)
        }) || n
    }, He = function(e, t, n) {
        return Q && !t && Q.selector ? Q.selector(e) : fe(e) && !n && (Ns || !Gt()) ? Hs.call((t || Zs).querySelectorAll(e), 0) : Te(e) ? Ec(e, n) : il(e) ? Hs.call(e, 0) : e ? [e] : []
    }, Gs = function(e) {
        return e = He(e)[0] || hi("Invalid scope") || {},
        function(t) {
            var n = e.current || e.nativeElement || e;
            return He(t, n.querySelectorAll ? n : n === e ? hi("Invalid scope") || Zs.createElement("div") : e)
        }
    }, nl = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }, sl = function(e) {
        if (re(e))
            return e;
        var t = Qe(e) ? e : {
            each: e
        }
          , n = Tt(t.ease)
          , s = t.from || 0
          , r = parseFloat(t.base) || 0
          , a = {}
          , o = s > 0 && s < 1
          , l = isNaN(s) || o
          , d = t.axis
          , c = s
          , u = s;
        return fe(s) ? c = u = {
            center: .5,
            edges: .5,
            end: 1
        }[s] || 0 : !o && l && (c = s[0],
        u = s[1]),
        function(f, p, g) {
            var h = (g || t).length, v = a[h], b, x, _, T, y, S, C, k, L;
            if (!v) {
                if (L = t.grid === "auto" ? 0 : (t.grid || [1, Ve])[1],
                !L) {
                    for (C = -Ve; C < (C = g[L++].getBoundingClientRect().left) && L < h; )
                        ;
                    L < h && L--
                }
                for (v = a[h] = [],
                b = l ? Math.min(L, h) * c - .5 : s % L,
                x = L === Ve ? 0 : l ? h * u / L - .5 : s / L | 0,
                C = 0,
                k = Ve,
                S = 0; S < h; S++)
                    _ = S % L - b,
                    T = x - (S / L | 0),
                    v[S] = y = d ? Math.abs(d === "y" ? T : _) : Vo(_ * _ + T * T),
                    y > C && (C = y),
                    y < k && (k = y);
                s === "random" && nl(v),
                v.max = C - k,
                v.min = k,
                v.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (L > h ? h - 1 : d ? d === "y" ? h / L : L : Math.max(L, h / L)) || 0) * (s === "edges" ? -1 : 1),
                v.b = h < 0 ? r - h : r,
                v.u = ve(t.amount || t.each) || 0,
                n = n && h < 0 ? hl(n) : n
            }
            return h = (v[f] - v.min) / v.max || 0,
            he(v.b + (n ? n(h) : h) * v.v) + v.u
        }
    }, Ws = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(n) {
            var s = he(Math.round(parseFloat(n) / e) * e * t);
            return (s - s % 1) / t + (rt(n) ? 0 : ve(n))
        }
    }, rl = function(e, t) {
        var n = Te(e), s, r;
        return !n && Qe(e) && (s = n = e.radius || Ve,
        e.values ? (e = He(e.values),
        (r = !rt(e[0])) && (s *= s)) : e = Ws(e.increment)),
        mt(t, n ? re(e) ? function(a) {
            return r = e(a),
            Math.abs(r - a) <= s ? r : a
        }
        : function(a) {
            for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), d = Ve, c = 0, u = e.length, f, p; u--; )
                r ? (f = e[u].x - o,
                p = e[u].y - l,
                f = f * f + p * p) : f = Math.abs(e[u] - o),
                f < d && (d = f,
                c = u);
            return c = !s || d <= s ? e[c] : a,
            r || c === a || rt(a) ? c : c + ve(a)
        }
        : Ws(e))
    }, al = function(e, t, n, s) {
        return mt(Te(e) ? !t : n === !0 ? !!(n = 0) : !s, function() {
            return Te(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (s = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * s) / s
        })
    }, Tc = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return function(s) {
            return t.reduce(function(r, a) {
                return a(r)
            }, s)
        }
    }, Cc = function(e, t) {
        return function(n) {
            return e(parseFloat(n)) + (t || ve(n))
        }
    }, wc = function(e, t, n) {
        return ll(e, t, 0, 1, n)
    }, ol = function(e, t, n) {
        return mt(n, function(s) {
            return e[~~t(s)]
        })
    }, Mc = function i(e, t, n) {
        var s = t - e;
        return Te(e) ? ol(e, i(0, e.length), t) : mt(n, function(r) {
            return (s + (r - e) % s) % s + e
        })
    }, Pc = function i(e, t, n) {
        var s = t - e
          , r = s * 2;
        return Te(e) ? ol(e, i(0, e.length - 1), t) : mt(n, function(a) {
            return a = (r + (a - e) % r) % r || 0,
            e + (a > s ? r - a : a)
        })
    }, Wt = function(e) {
        for (var t = 0, n = "", s, r, a, o; ~(s = e.indexOf("random(", t)); )
            a = e.indexOf(")", s),
            o = e.charAt(s + 7) === "[",
            r = e.substr(s + 7, a - s - 7).match(o ? Go : Fs),
            n += e.substr(t, s - t) + al(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5),
            t = a + 1;
        return n + e.substr(t, e.length - t)
    }, ll = function(e, t, n, s, r) {
        var a = t - e
          , o = s - n;
        return mt(r, function(l) {
            return n + ((l - e) / a * o || 0)
        })
    }, kc = function i(e, t, n, s) {
        var r = isNaN(e + t) ? 0 : function(p) {
            return (1 - p) * e + p * t
        }
        ;
        if (!r) {
            var a = fe(e), o = {}, l, d, c, u, f;
            if (n === !0 && (s = 1) && (n = null),
            a)
                e = {
                    p: e
                },
                t = {
                    p: t
                };
            else if (Te(e) && !Te(t)) {
                for (c = [],
                u = e.length,
                f = u - 2,
                d = 1; d < u; d++)
                    c.push(i(e[d - 1], e[d]));
                u--,
                r = function(g) {
                    g *= u;
                    var h = Math.min(f, ~~g);
                    return c[h](g - h)
                }
                ,
                n = t
            } else
                s || (e = wt(Te(e) ? [] : {}, e));
            if (!c) {
                for (l in t)
                    rr.call(o, e, l, "get", t[l]);
                r = function(g) {
                    return cr(g, o) || (a ? e.p : e)
                }
            }
        }
        return mt(n, r)
    }, Fo = function(e, t, n) {
        var s = e.labels, r = Ve, a, o, l;
        for (a in s)
            o = s[a] - t,
            o < 0 == !!n && o && r > (o = Math.abs(o)) && (l = a,
            r = o);
        return l
    }, ze = function(e, t, n) {
        var s = e.vars, r = s[t], a = Q, o = e._ctx, l, d, c;
        if (!!r)
            return l = s[t + "Params"],
            d = s.callbackScope || e,
            n && ft.length && qi(),
            o && (Q = o),
            c = l ? r.apply(d, l) : r.call(d),
            Q = a,
            c
    }, li = function(e) {
        return pt(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ee),
        e.progress() < 1 && ze(e, "onInterrupt"),
        e
    }, Bt, dl = [], cl = function(e) {
        if (!!e)
            if (e = !e.name && e.default || e,
            Us() || e.headless) {
                var t = e.name
                  , n = re(e)
                  , s = t && !n && e.init ? function() {
                    this._props = []
                }
                : e
                  , r = {
                    init: pi,
                    render: cr,
                    add: rr,
                    kill: Wc,
                    modifier: Gc,
                    rawVars: 0
                }
                  , a = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Ji,
                    aliases: {},
                    register: 0
                };
                if (Gt(),
                e !== s) {
                    if (Le[t])
                        return;
                    Ge(s, Ge(Vi(e, r), a)),
                    wt(s.prototype, wt(r, Vi(e, a))),
                    Le[s.prop = t] = s,
                    e.targetTest && (Fi.push(s),
                    Qs[t] = 1),
                    t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                Xo(t, s),
                e.register && e.register(Ce, s, Me)
            } else
                dl.push(e)
    }, K = 255, di = {
        aqua: [0, K, K],
        lime: [0, K, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, K],
        navy: [0, 0, 128],
        white: [K, K, K],
        olive: [128, 128, 0],
        yellow: [K, K, 0],
        orange: [K, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [K, 0, 0],
        pink: [K, 192, 203],
        cyan: [0, K, K],
        transparent: [K, K, K, 0]
    }, Os = function(e, t, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
        (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * K + .5 | 0
    }, ul = function(e, t, n) {
        var s = e ? rt(e) ? [e >> 16, e >> 8 & K, e & K] : 0 : di.black, r, a, o, l, d, c, u, f, p, g;
        if (!s) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
            di[e])
                s = di[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (r = e.charAt(1),
                a = e.charAt(2),
                o = e.charAt(3),
                e = "#" + r + r + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                e.length === 9)
                    return s = parseInt(e.substr(1, 6), 16),
                    [s >> 16, s >> 8 & K, s & K, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                s = [e >> 16, e >> 8 & K, e & K]
            } else if (e.substr(0, 3) === "hsl") {
                if (s = g = e.match(Fs),
                !t)
                    l = +s[0] % 360 / 360,
                    d = +s[1] / 100,
                    c = +s[2] / 100,
                    a = c <= .5 ? c * (d + 1) : c + d - c * d,
                    r = c * 2 - a,
                    s.length > 3 && (s[3] *= 1),
                    s[0] = Os(l + 1 / 3, r, a),
                    s[1] = Os(l, r, a),
                    s[2] = Os(l - 1 / 3, r, a);
                else if (~e.indexOf("="))
                    return s = e.match(Js),
                    n && s.length < 4 && (s[3] = 1),
                    s
            } else
                s = e.match(Fs) || di.transparent;
            s = s.map(Number)
        }
        return t && !g && (r = s[0] / K,
        a = s[1] / K,
        o = s[2] / K,
        u = Math.max(r, a, o),
        f = Math.min(r, a, o),
        c = (u + f) / 2,
        u === f ? l = d = 0 : (p = u - f,
        d = c > .5 ? p / (2 - u - f) : p / (u + f),
        l = u === r ? (a - o) / p + (a < o ? 6 : 0) : u === a ? (o - r) / p + 2 : (r - a) / p + 4,
        l *= 60),
        s[0] = ~~(l + .5),
        s[1] = ~~(d * 100 + .5),
        s[2] = ~~(c * 100 + .5)),
        n && s.length < 4 && (s[3] = 1),
        s
    }, fl = function(e) {
        var t = []
          , n = []
          , s = -1;
        return e.split(st).forEach(function(r) {
            var a = r.match(Mt) || [];
            t.push.apply(t, a),
            n.push(s += a.length + 1)
        }),
        t.c = n,
        t
    }, No = function(e, t, n) {
        var s = "", r = (e + s).match(st), a = t ? "hsla(" : "rgba(", o = 0, l, d, c, u;
        if (!r)
            return e;
        if (r = r.map(function(f) {
            return (f = ul(f, t, 1)) && a + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
        }),
        n && (c = fl(e),
        l = n.c,
        l.join(s) !== c.c.join(s)))
            for (d = e.replace(st, "1").split(Mt),
            u = d.length - 1; o < u; o++)
                s += d[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (c.length ? c : r.length ? r : n).shift());
        if (!d)
            for (d = e.split(st),
            u = d.length - 1; o < u; o++)
                s += d[o] + r[o];
        return s + d[u]
    }, st = function() {
        var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in di)
            i += "|" + e + "\\b";
        return new RegExp(i + ")","gi")
    }(), Lc = /hsl[a]?\(/, nr = function(e) {
        var t = e.join(" "), n;
        if (st.lastIndex = 0,
        st.test(t))
            return n = Lc.test(t),
            e[1] = No(e[1], n),
            e[0] = No(e[0], n, fl(e[1])),
            !0
    }, mi, $e = function() {
        var i = Date.now, e = 500, t = 33, n = i(), s = n, r = 1e3 / 240, a = r, o = [], l, d, c, u, f, p, g = function h(v) {
            var b = i() - s, x = v === !0, _, T, y, S;
            if ((b > e || b < 0) && (n += b - t),
            s += b,
            y = s - n,
            _ = y - a,
            (_ > 0 || x) && (S = ++u.frame,
            f = y - u.time * 1e3,
            u.time = y = y / 1e3,
            a += _ + (_ >= r ? 4 : r - _),
            T = 1),
            x || (l = d(h)),
            T)
                for (p = 0; p < o.length; p++)
                    o[p](y, f, S, v)
        };
        return u = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(v) {
                return f / (1e3 / (v || 60))
            },
            wake: function() {
                Wo && (!Ns && Us() && (Ke = Ns = window,
                Zs = Ke.document || {},
                Re.gsap = Ce,
                (Ke.gsapVersions || (Ke.gsapVersions = [])).push(Ce.version),
                Yo(Bi || Ke.GreenSockGlobals || !Ke.gsap && Ke || {}),
                dl.forEach(cl)),
                c = typeof requestAnimationFrame != "undefined" && requestAnimationFrame,
                l && u.sleep(),
                d = c || function(v) {
                    return setTimeout(v, a - u.time * 1e3 + 1 | 0)
                }
                ,
                mi = 1,
                g(2))
            },
            sleep: function() {
                (c ? cancelAnimationFrame : clearTimeout)(l),
                mi = 0,
                d = pi
            },
            lagSmoothing: function(v, b) {
                e = v || 1 / 0,
                t = Math.min(b || 33, e)
            },
            fps: function(v) {
                r = 1e3 / (v || 240),
                a = u.time * 1e3 + r
            },
            add: function(v, b, x) {
                var _ = b ? function(T, y, S, C) {
                    v(T, y, S, C),
                    u.remove(_)
                }
                : v;
                return u.remove(v),
                o[x ? "unshift" : "push"](_),
                Gt(),
                _
            },
            remove: function(v, b) {
                ~(b = o.indexOf(v)) && o.splice(b, 1) && p >= b && p--
            },
            _listeners: o
        },
        u
    }(), Gt = function() {
        return !mi && $e.wake()
    }, Y = {}, $c = /^[\d.\-M][\d.\-,\s]/, Oc = /["']/g, Ic = function(e) {
        for (var t = {}, n = e.substr(1, e.length - 3).split(":"), s = n[0], r = 1, a = n.length, o, l, d; r < a; r++)
            l = n[r],
            o = r !== a - 1 ? l.lastIndexOf(",") : l.length,
            d = l.substr(0, o),
            t[s] = isNaN(d) ? d.replace(Oc, "").trim() : +d,
            s = l.substr(o + 1).trim();
        return t
    }, Ac = function(e) {
        var t = e.indexOf("(") + 1
          , n = e.indexOf(")")
          , s = e.indexOf("(", t);
        return e.substring(t, ~s && s < n ? e.indexOf(")", n + 1) : n)
    }, Dc = function(e) {
        var t = (e + "").split("(")
          , n = Y[t[0]];
        return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Ic(t[1])] : Ac(e).split(",").map(Jo)) : Y._CE && $c.test(e) ? Y._CE("", e) : n
    }, hl = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, pl = function i(e, t) {
        for (var n = e._first, s; n; )
            n instanceof ge ? i(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? i(n.timeline, t) : (s = n._ease,
            n._ease = n._yEase,
            n._yEase = s,
            n._yoyo = t)),
            n = n._next
    }, Tt = function(e, t) {
        return e && (re(e) ? e : Y[e] || Dc(e)) || t
    }, kt = function(e, t, n, s) {
        n === void 0 && (n = function(l) {
            return 1 - t(1 - l)
        }
        ),
        s === void 0 && (s = function(l) {
            return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
        }
        );
        var r = {
            easeIn: t,
            easeOut: n,
            easeInOut: s
        }, a;
        return we(e, function(o) {
            Y[o] = Re[o] = r,
            Y[a = o.toLowerCase()] = n;
            for (var l in r)
                Y[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Y[o + "." + l] = r[l]
        }),
        r
    }, ml = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, Is = function i(e, t, n) {
        var s = t >= 1 ? t : 1
          , r = (n || (e ? .3 : .45)) / (t < 1 ? t : 1)
          , a = r / Rs * (Math.asin(1 / s) || 0)
          , o = function(c) {
            return c === 1 ? 1 : s * Math.pow(2, -10 * c) * dc((c - a) * r) + 1
        }
          , l = e === "out" ? o : e === "in" ? function(d) {
            return 1 - o(1 - d)
        }
        : ml(o);
        return r = Rs / r,
        l.config = function(d, c) {
            return i(e, d, c)
        }
        ,
        l
    }, As = function i(e, t) {
        t === void 0 && (t = 1.70158);
        var n = function(a) {
            return a ? --a * a * ((t + 1) * a + t) + 1 : 0
        }
          , s = e === "out" ? n : e === "in" ? function(r) {
            return 1 - n(1 - r)
        }
        : ml(n);
        return s.config = function(r) {
            return i(e, r)
        }
        ,
        s
    };
    we("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
        var t = e < 5 ? e + 1 : e;
        kt(i + ",Power" + (t - 1), e ? function(n) {
            return Math.pow(n, t)
        }
        : function(n) {
            return n
        }
        , function(n) {
            return 1 - Math.pow(1 - n, t)
        }, function(n) {
            return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
        })
    });
    Y.Linear.easeNone = Y.none = Y.Linear.easeIn;
    kt("Elastic", Is("in"), Is("out"), Is());
    (function(i, e) {
        var t = 1 / e
          , n = 2 * t
          , s = 2.5 * t
          , r = function(o) {
            return o < t ? i * o * o : o < n ? i * Math.pow(o - 1.5 / e, 2) + .75 : o < s ? i * (o -= 2.25 / e) * o + .9375 : i * Math.pow(o - 2.625 / e, 2) + .984375
        };
        kt("Bounce", function(a) {
            return 1 - r(1 - a)
        }, r)
    }
    )(7.5625, 2.75);
    kt("Expo", function(i) {
        return i ? Math.pow(2, 10 * (i - 1)) : 0
    });
    kt("Circ", function(i) {
        return -(Vo(1 - i * i) - 1)
    });
    kt("Sine", function(i) {
        return i === 1 ? 1 : -lc(i * ac) + 1
    });
    kt("Back", As("in"), As("out"), As());
    Y.SteppedEase = Y.steps = Re.SteppedEase = {
        config: function(e, t) {
            e === void 0 && (e = 1);
            var n = 1 / e
              , s = e + (t ? 0 : 1)
              , r = t ? 1 : 0
              , a = 1 - Z;
            return function(o) {
                return ((s * vi(0, a, o) | 0) + r) * n
            }
        }
    };
    qt.ease = Y["quad.out"];
    we("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
        return er += i + "," + i + "Params,"
    });
    var sr = function(e, t) {
        this.id = oc++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : ir,
        this.set = t ? t.getSetter : Ji
    }
      , gi = function() {
        function i(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Ht(this, +t.duration, 1, 1),
            this.data = t.data,
            Q && (this._ctx = Q,
            Q.data.push(this)),
            mi || $e.wake()
        }
        var e = i.prototype;
        return e.delay = function(n) {
            return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay),
            this._delay = n,
            this) : this._delay
        }
        ,
        e.duration = function(n) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(n) {
            return arguments.length ? (this._dirty = 0,
            Ht(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(n, s) {
            if (Gt(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ui(this, n),
                !r._dp || r.parent || Qo(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Ze(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== n || !this._dur && !s || this._initted && Math.abs(this._zTime) === Z || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n),
            Uo(this, n, s)),
            this
        }
        ,
        e.time = function(n, s) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + zo(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), s) : this._time
        }
        ,
        e.totalProgress = function(n, s) {
            return arguments.length ? this.totalTime(this.totalDuration() * n, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
        }
        ,
        e.progress = function(n, s) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + zo(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }
        ,
        e.iteration = function(n, s) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (n - 1) * r, s) : this._repeat ? Vt(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(n, s) {
            if (!arguments.length)
                return this._rts === -Z ? 0 : this._rts;
            if (this._rts === n)
                return this;
            var r = this.parent && this._ts ? Hi(this.parent._time, this) : this._tTime;
            return this._rts = +n || 0,
            this._ts = this._ps || n === -Z ? 0 : this._rts,
            this.totalTime(vi(-Math.abs(this._delay), this._tDur, r), s !== !1),
            ji(this),
            gc(this)
        }
        ,
        e.paused = function(n) {
            return arguments.length ? (this._ps !== n && (this._ps = n,
            n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Gt(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Z && (this._tTime -= Z)))),
            this) : this._ps
        }
        ,
        e.startTime = function(n) {
            if (arguments.length) {
                this._start = n;
                var s = this.parent || this._dp;
                return s && (s._sort || !this.parent) && Ze(s, this, n - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(n) {
            return this._start + (Oe(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(n) {
            var s = this.parent || this._dp;
            return s ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Hi(s.rawTime(n), this) : this._tTime : this._tTime
        }
        ,
        e.revert = function(n) {
            n === void 0 && (n = fc);
            var s = Ee;
            return Ee = n,
            (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n),
            this.totalTime(-.01, n.suppressEvents)),
            this.data !== "nested" && n.kill !== !1 && this.kill(),
            Ee = s,
            this
        }
        ,
        e.globalTime = function(n) {
            for (var s = this, r = arguments.length ? n : s.rawTime(); s; )
                r = s._start + r / (Math.abs(s._ts) || 1),
                s = s._dp;
            return !this.parent && this._sat ? this._sat.globalTime(n) : r
        }
        ,
        e.repeat = function(n) {
            return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n,
            Ro(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(n) {
            if (arguments.length) {
                var s = this._time;
                return this._rDelay = n,
                Ro(this),
                s ? this.time(s) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(n) {
            return arguments.length ? (this._yoyo = n,
            this) : this._yoyo
        }
        ,
        e.seek = function(n, s) {
            return this.totalTime(qe(this, n), Oe(s))
        }
        ,
        e.restart = function(n, s) {
            return this.play().totalTime(n ? -this._delay : 0, Oe(s))
        }
        ,
        e.play = function(n, s) {
            return n != null && this.seek(n, s),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(n, s) {
            return n != null && this.seek(n || this.totalDuration(), s),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(n, s) {
            return n != null && this.seek(n, s),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(n) {
            return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Z : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -Z,
            this
        }
        ,
        e.isActive = function() {
            var n = this.parent || this._dp, s = this._start, r;
            return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= s && r < this.endTime(!0) - Z)
        }
        ,
        e.eventCallback = function(n, s, r) {
            var a = this.vars;
            return arguments.length > 1 ? (s ? (a[n] = s,
            r && (a[n + "Params"] = r),
            n === "onUpdate" && (this._onUpdate = s)) : delete a[n],
            this) : a[n]
        }
        ,
        e.then = function(n) {
            var s = this;
            return new Promise(function(r) {
                var a = re(n) ? n : Ko
                  , o = function() {
                    var d = s.then;
                    s.then = null,
                    re(a) && (a = a(s)) && (a.then || a === s) && (s.then = d),
                    r(a),
                    s.then = d
                };
                s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o
            }
            )
        }
        ,
        e.kill = function() {
            li(this)
        }
        ,
        i
    }();
    Ge(gi.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Z,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var ge = function(i) {
        qo(e, i);
        function e(n, s) {
            var r;
            return n === void 0 && (n = {}),
            r = i.call(this, n) || this,
            r.labels = {},
            r.smoothChildTiming = !!n.smoothChildTiming,
            r.autoRemoveChildren = !!n.autoRemoveChildren,
            r._sort = Oe(n.sortChildren),
            te && Ze(n.parent || te, nt(r), s),
            n.reversed && r.reverse(),
            n.paused && r.paused(!0),
            n.scrollTrigger && el(nt(r), n.scrollTrigger),
            r
        }
        var t = e.prototype;
        return t.to = function(s, r, a) {
            return ui(0, arguments, this),
            this
        }
        ,
        t.from = function(s, r, a) {
            return ui(1, arguments, this),
            this
        }
        ,
        t.fromTo = function(s, r, a, o) {
            return ui(2, arguments, this),
            this
        }
        ,
        t.set = function(s, r, a) {
            return r.duration = 0,
            r.parent = this,
            ci(r).repeatDelay || (r.repeat = 0),
            r.immediateRender = !!r.immediateRender,
            new oe(s,r,qe(this, a),1),
            this
        }
        ,
        t.call = function(s, r, a) {
            return Ze(this, oe.delayedCall(0, s, r), a)
        }
        ,
        t.staggerTo = function(s, r, a, o, l, d, c) {
            return a.duration = r,
            a.stagger = a.stagger || o,
            a.onComplete = d,
            a.onCompleteParams = c,
            a.parent = this,
            new oe(s,a,qe(this, l)),
            this
        }
        ,
        t.staggerFrom = function(s, r, a, o, l, d, c) {
            return a.runBackwards = 1,
            ci(a).immediateRender = Oe(a.immediateRender),
            this.staggerTo(s, r, a, o, l, d, c)
        }
        ,
        t.staggerFromTo = function(s, r, a, o, l, d, c, u) {
            return o.startAt = a,
            ci(o).immediateRender = Oe(o.immediateRender),
            this.staggerTo(s, r, o, l, d, c, u)
        }
        ,
        t.render = function(s, r, a) {
            var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, c = s <= 0 ? 0 : he(s), u = this._zTime < 0 != s < 0 && (this._initted || !d), f, p, g, h, v, b, x, _, T, y, S, C;
            if (this !== te && c > l && s >= 0 && (c = l),
            c !== this._tTime || a || u) {
                if (o !== this._time && d && (c += this._time - o,
                s += this._time - o),
                f = c,
                T = this._start,
                _ = this._ts,
                b = !_,
                u && (d || (o = this._zTime),
                (s || !r) && (this._zTime = s)),
                this._repeat) {
                    if (S = this._yoyo,
                    v = d + this._rDelay,
                    this._repeat < -1 && s < 0)
                        return this.totalTime(v * 100 + s, r, a);
                    if (f = he(c % v),
                    c === l ? (h = this._repeat,
                    f = d) : (h = ~~(c / v),
                    h && h === c / v && (f = d,
                    h--),
                    f > d && (f = d)),
                    y = Vt(this._tTime, v),
                    !o && this._tTime && y !== h && this._tTime - y * v - this._dur <= 0 && (y = h),
                    S && h & 1 && (f = d - f,
                    C = 1),
                    h !== y && !this._lock) {
                        var k = S && y & 1
                          , L = k === (S && h & 1);
                        if (h < y && (k = !k),
                        o = k ? 0 : c % d ? d : c,
                        this._lock = 1,
                        this.render(o || (C ? 0 : he(h * v)), r, !d)._lock = 0,
                        this._tTime = c,
                        !r && this.parent && ze(this, "onRepeat"),
                        this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                        o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (d = this._dur,
                        l = this._tDur,
                        L && (this._lock = 2,
                        o = k ? d : -1e-4,
                        this.render(o, !0),
                        this.vars.repeatRefresh && !C && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !b)
                            return this;
                        pl(this, C)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (x = bc(this, he(o), he(f)),
                x && (c -= f - (f = x._start))),
                this._tTime = c,
                this._time = f,
                this._act = !_,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = s,
                o = 0),
                !o && f && !r && !h && (ze(this, "onStart"),
                this._tTime !== c))
                    return this;
                if (f >= o && s >= 0)
                    for (p = this._first; p; ) {
                        if (g = p._next,
                        (p._act || f >= p._start) && p._ts && x !== p) {
                            if (p.parent !== this)
                                return this.render(s, r, a);
                            if (p.render(p._ts > 0 ? (f - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (f - p._start) * p._ts, r, a),
                            f !== this._time || !this._ts && !b) {
                                x = 0,
                                g && (c += this._zTime = -Z);
                                break
                            }
                        }
                        p = g
                    }
                else {
                    p = this._last;
                    for (var $ = s < 0 ? s : f; p; ) {
                        if (g = p._prev,
                        (p._act || $ <= p._end) && p._ts && x !== p) {
                            if (p.parent !== this)
                                return this.render(s, r, a);
                            if (p.render(p._ts > 0 ? ($ - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + ($ - p._start) * p._ts, r, a || Ee && (p._initted || p._startAt)),
                            f !== this._time || !this._ts && !b) {
                                x = 0,
                                g && (c += this._zTime = $ ? -Z : Z);
                                break
                            }
                        }
                        p = g
                    }
                }
                if (x && !r && (this.pause(),
                x.render(f >= o ? 0 : -Z)._zTime = f >= o ? 1 : -1,
                this._ts))
                    return this._start = T,
                    ji(this),
                    this.render(s, r, a);
                this._onUpdate && !r && ze(this, "onUpdate", !0),
                (c === l && this._tTime >= this.totalDuration() || !c && o) && (T === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((s || !d) && (c === l && this._ts > 0 || !c && this._ts < 0) && pt(this, 1),
                !r && !(s < 0 && !o) && (c || o || !l) && (ze(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        t.add = function(s, r) {
            var a = this;
            if (rt(r) || (r = qe(this, r, s)),
            !(s instanceof gi)) {
                if (Te(s))
                    return s.forEach(function(o) {
                        return a.add(o, r)
                    }),
                    this;
                if (fe(s))
                    return this.addLabel(s, r);
                if (re(s))
                    s = oe.delayedCall(0, s);
                else
                    return this
            }
            return this !== s ? Ze(this, s, r) : this
        }
        ,
        t.getChildren = function(s, r, a, o) {
            s === void 0 && (s = !0),
            r === void 0 && (r = !0),
            a === void 0 && (a = !0),
            o === void 0 && (o = -Ve);
            for (var l = [], d = this._first; d; )
                d._start >= o && (d instanceof oe ? r && l.push(d) : (a && l.push(d),
                s && l.push.apply(l, d.getChildren(!0, r, a)))),
                d = d._next;
            return l
        }
        ,
        t.getById = function(s) {
            for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
                if (r[a].vars.id === s)
                    return r[a]
        }
        ,
        t.remove = function(s) {
            return fe(s) ? this.removeLabel(s) : re(s) ? this.killTweensOf(s) : (Xi(this, s),
            s === this._recent && (this._recent = this._last),
            Et(this))
        }
        ,
        t.totalTime = function(s, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = he($e.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
            i.prototype.totalTime.call(this, s, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        t.addLabel = function(s, r) {
            return this.labels[s] = qe(this, r),
            this
        }
        ,
        t.removeLabel = function(s) {
            return delete this.labels[s],
            this
        }
        ,
        t.addPause = function(s, r, a) {
            var o = oe.delayedCall(0, r || pi, a);
            return o.data = "isPause",
            this._hasPause = 1,
            Ze(this, o, qe(this, s))
        }
        ,
        t.removePause = function(s) {
            var r = this._first;
            for (s = qe(this, s); r; )
                r._start === s && r.data === "isPause" && pt(r),
                r = r._next
        }
        ,
        t.killTweensOf = function(s, r, a) {
            for (var o = this.getTweensOf(s, a), l = o.length; l--; )
                ut !== o[l] && o[l].kill(s, r);
            return this
        }
        ,
        t.getTweensOf = function(s, r) {
            for (var a = [], o = He(s), l = this._first, d = rt(r), c; l; )
                l instanceof oe ? hc(l._targets, o) && (d ? (!ut || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (c = l.getTweensOf(o, r)).length && a.push.apply(a, c),
                l = l._next;
            return a
        }
        ,
        t.tweenTo = function(s, r) {
            r = r || {};
            var a = this, o = qe(a, s), l = r, d = l.startAt, c = l.onStart, u = l.onStartParams, f = l.immediateRender, p, g = oe.to(a, Ge({
                ease: r.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: r.duration || Math.abs((o - (d && "time"in d ? d.time : a._time)) / a.timeScale()) || Z,
                onStart: function() {
                    if (a.pause(),
                    !p) {
                        var v = r.duration || Math.abs((o - (d && "time"in d ? d.time : a._time)) / a.timeScale());
                        g._dur !== v && Ht(g, v, 0, 1).render(g._time, !0, !0),
                        p = 1
                    }
                    c && c.apply(g, u || [])
                }
            }, r));
            return f ? g.render(0) : g
        }
        ,
        t.tweenFromTo = function(s, r, a) {
            return this.tweenTo(r, Ge({
                startAt: {
                    time: qe(this, s)
                }
            }, a))
        }
        ,
        t.recent = function() {
            return this._recent
        }
        ,
        t.nextLabel = function(s) {
            return s === void 0 && (s = this._time),
            Fo(this, qe(this, s))
        }
        ,
        t.previousLabel = function(s) {
            return s === void 0 && (s = this._time),
            Fo(this, qe(this, s), 1)
        }
        ,
        t.currentLabel = function(s) {
            return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + Z)
        }
        ,
        t.shiftChildren = function(s, r, a) {
            a === void 0 && (a = 0);
            for (var o = this._first, l = this.labels, d; o; )
                o._start >= a && (o._start += s,
                o._end += s),
                o = o._next;
            if (r)
                for (d in l)
                    l[d] >= a && (l[d] += s);
            return Et(this)
        }
        ,
        t.invalidate = function(s) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(s),
                r = r._next;
            return i.prototype.invalidate.call(this, s)
        }
        ,
        t.clear = function(s) {
            s === void 0 && (s = !0);
            for (var r = this._first, a; r; )
                a = r._next,
                this.remove(r),
                r = a;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            s && (this.labels = {}),
            Et(this)
        }
        ,
        t.totalDuration = function(s) {
            var r = 0, a = this, o = a._last, l = Ve, d, c, u;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
            if (a._dirty) {
                for (u = a.parent; o; )
                    d = o._prev,
                    o._dirty && o.totalDuration(),
                    c = o._start,
                    c > l && a._sort && o._ts && !a._lock ? (a._lock = 1,
                    Ze(a, o, c - o._delay, 1)._lock = 0) : l = c,
                    c < 0 && o._ts && (r -= c,
                    (!u && !a._dp || u && u.smoothChildTiming) && (a._start += c / a._ts,
                    a._time -= c,
                    a._tTime -= c),
                    a.shiftChildren(-c, !1, -1 / 0),
                    l = 0),
                    o._end > r && o._ts && (r = o._end),
                    o = d;
                Ht(a, a === te && a._time > r ? a._time : r, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        e.updateRoot = function(s) {
            if (te._ts && (Uo(te, Hi(s, te)),
            jo = $e.frame),
            $e.frame >= Ao) {
                Ao += Ie.autoSleep || 120;
                var r = te._first;
                if ((!r || !r._ts) && Ie.autoSleep && $e._listeners.length < 2) {
                    for (; r && !r._ts; )
                        r = r._next;
                    r || $e.sleep()
                }
            }
        }
        ,
        e
    }(gi);
    Ge(ge.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var zc = function(e, t, n, s, r, a, o) {
        var l = new Me(this._pt,e,t,0,1,dr,null,r), d = 0, c = 0, u, f, p, g, h, v, b, x;
        for (l.b = n,
        l.e = s,
        n += "",
        s += "",
        (b = ~s.indexOf("random(")) && (s = Wt(s)),
        a && (x = [n, s],
        a(x, e, t),
        n = x[0],
        s = x[1]),
        f = n.match(Ls) || []; u = Ls.exec(s); )
            g = u[0],
            h = s.substring(d, u.index),
            p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1),
            g !== f[c++] && (v = parseFloat(f[c - 1]) || 0,
            l._pt = {
                _next: l._pt,
                p: h || c === 1 ? h : ",",
                s: v,
                c: g.charAt(1) === "=" ? Pt(v, g) - v : parseFloat(g) - v,
                m: p && p < 4 ? Math.round : 0
            },
            d = Ls.lastIndex);
        return l.c = d < s.length ? s.substring(d, s.length) : "",
        l.fp = o,
        (Ks.test(s) || b) && (l.e = 0),
        this._pt = l,
        l
    }, rr = function(e, t, n, s, r, a, o, l, d, c) {
        re(s) && (s = s(r || 0, e, a));
        var u = e[t], f = n !== "get" ? n : re(u) ? d ? e[t.indexOf("set") || !re(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : u, p = re(u) ? d ? qc : yl : lr, g;
        if (fe(s) && (~s.indexOf("random(") && (s = Wt(s)),
        s.charAt(1) === "=" && (g = Pt(f, s) + (ve(f) || 0),
        (g || g === 0) && (s = g))),
        !c || f !== s || Ys)
            return !isNaN(f * s) && s !== "" ? (g = new Me(this._pt,e,t,+f || 0,s - (f || 0),typeof u == "boolean" ? Hc : _l,0,p),
            d && (g.fp = d),
            o && g.modifier(o, this, e),
            this._pt = g) : (!u && !(t in e) && Yi(t, s),
            zc.call(this, e, t, f, s, p, l || Ie.stringFilter, d))
    }, Rc = function(e, t, n, s, r) {
        if (re(e) && (e = fi(e, r, t, n, s)),
        !Qe(e) || e.style && e.nodeType || Te(e) || Ho(e))
            return fe(e) ? fi(e, r, t, n, s) : e;
        var a = {}, o;
        for (o in e)
            a[o] = fi(e[o], r, t, n, s);
        return a
    }, ar = function(e, t, n, s, r, a) {
        var o, l, d, c;
        if (Le[e] && (o = new Le[e]).init(r, o.rawVars ? t[e] : Rc(t[e], s, r, a, n), n, s, a) !== !1 && (n._pt = l = new Me(n._pt,r,e,0,1,o.render,o,0,o.priority),
        n !== Bt))
            for (d = n._ptLookup[n._targets.indexOf(r)],
            c = o._props.length; c--; )
                d[o._props[c]] = l;
        return o
    }, ut, Ys, or = function i(e, t, n) {
        var s = e.vars, r = s.ease, a = s.startAt, o = s.immediateRender, l = s.lazy, d = s.onUpdate, c = s.runBackwards, u = s.yoyoEase, f = s.keyframes, p = s.autoRevert, g = e._dur, h = e._startAt, v = e._targets, b = e.parent, x = b && b.data === "nested" ? b.vars.targets : v, _ = e._overwrite === "auto" && !js, T = e.timeline, y, S, C, k, L, $, I, M, O, N, A, D, w;
        if (T && (!f || !r) && (r = "none"),
        e._ease = Tt(r, qt.ease),
        e._yEase = u ? hl(Tt(u === !0 ? r : u, qt.ease)) : 0,
        u && e._yoyo && !e._repeat && (u = e._yEase,
        e._yEase = e._ease,
        e._ease = u),
        e._from = !T && !!s.runBackwards,
        !T || f && !s.stagger) {
            if (M = v[0] ? ht(v[0]).harness : 0,
            D = M && s[M.prop],
            y = Vi(s, Qs),
            h && (h._zTime < 0 && h.progress(1),
            t < 0 && c && o && !p ? h.render(-1, !0) : h.revert(c && g ? Ri : uc),
            h._lazy = 0),
            a) {
                if (pt(e._startAt = oe.set(v, Ge({
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !h && Oe(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: d && function() {
                        return ze(e, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, a))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ee || !o && !p) && e._startAt.revert(Ri),
                o && g && t <= 0 && n <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (c && g && !h) {
                if (t && (o = !1),
                C = Ge({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: o && !h && Oe(l),
                    immediateRender: o,
                    stagger: 0,
                    parent: b
                }, y),
                D && (C[M.prop] = D),
                pt(e._startAt = oe.set(v, C)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ee ? e._startAt.revert(Ri) : e._startAt.render(-1, !0)),
                e._zTime = t,
                !o)
                    i(e._startAt, Z, Z);
                else if (!t)
                    return
            }
            for (e._pt = e._ptCache = 0,
            l = g && Oe(l) || l && !g,
            S = 0; S < v.length; S++) {
                if (L = v[S],
                I = L._gsap || tr(v)[S]._gsap,
                e._ptLookup[S] = N = {},
                Bs[I.id] && ft.length && qi(),
                A = x === v ? S : x.indexOf(L),
                M && (O = new M).init(L, D || y, e, A, x) !== !1 && (e._pt = k = new Me(e._pt,L,O.name,0,1,O.render,O,0,O.priority),
                O._props.forEach(function(z) {
                    N[z] = k
                }),
                O.priority && ($ = 1)),
                !M || D)
                    for (C in y)
                        Le[C] && (O = ar(C, y, e, A, L, x)) ? O.priority && ($ = 1) : N[C] = k = rr.call(e, L, C, "get", y[C], A, x, 0, s.stringFilter);
                e._op && e._op[S] && e.kill(L, e._op[S]),
                _ && e._pt && (ut = e,
                te.killTweensOf(L, N, e.globalTime(t)),
                w = !e.parent,
                ut = 0),
                e._pt && l && (Bs[I.id] = 1)
            }
            $ && ur(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = d,
        e._initted = (!e._op || e._pt) && !w,
        f && t <= 0 && T.render(Ve, !0, !0)
    }, Fc = function(e, t, n, s, r, a, o, l) {
        var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, f, p;
        if (!d)
            for (d = e._ptCache[t] = [],
            f = e._ptLookup,
            p = e._targets.length; p--; ) {
                if (c = f[p][t],
                c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
                        c = c._next;
                if (!c)
                    return Ys = 1,
                    e.vars[t] = "+=0",
                    or(e, o),
                    Ys = 0,
                    l ? hi(t + " not eligible for reset") : 1;
                d.push(c)
            }
        for (p = d.length; p--; )
            u = d[p],
            c = u._pt || u,
            c.s = (s || s === 0) && !r ? s : c.s + (s || 0) + a * c.c,
            c.c = n - c.s,
            u.e && (u.e = ae(n) + ve(u.e)),
            u.b && (u.b = c.s + ve(u.b))
    }, Nc = function(e, t) {
        var n = e[0] ? ht(e[0]).harness : 0, s = n && n.aliases, r, a, o, l;
        if (!s)
            return t;
        r = wt({}, t);
        for (a in s)
            if (a in r)
                for (l = s[a].split(","),
                o = l.length; o--; )
                    r[l[o]] = r[a];
        return r
    }, Bc = function(e, t, n, s) {
        var r = t.ease || s || "power1.inOut", a, o;
        if (Te(t))
            o = n[e] || (n[e] = []),
            t.forEach(function(l, d) {
                return o.push({
                    t: d / (t.length - 1) * 100,
                    v: l,
                    e: r
                })
            });
        else
            for (a in t)
                o = n[a] || (n[a] = []),
                a === "ease" || o.push({
                    t: parseFloat(e),
                    v: t[a],
                    e: r
                })
    }, fi = function(e, t, n, s, r) {
        return re(e) ? e.call(t, n, s, r) : fe(e) && ~e.indexOf("random(") ? Wt(e) : e
    }, gl = er + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", vl = {};
    we(gl + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
        return vl[i] = 1
    });
    var oe = function(i) {
        qo(e, i);
        function e(n, s, r, a) {
            var o;
            typeof s == "number" && (r.duration = s,
            s = r,
            r = null),
            o = i.call(this, a ? s : ci(s)) || this;
            var l = o.vars, d = l.duration, c = l.delay, u = l.immediateRender, f = l.stagger, p = l.overwrite, g = l.keyframes, h = l.defaults, v = l.scrollTrigger, b = l.yoyoEase, x = s.parent || te, _ = (Te(n) || Ho(n) ? rt(n[0]) : "length"in s) ? [n] : He(n), T, y, S, C, k, L, $, I;
            if (o._targets = _.length ? tr(_) : hi("GSAP target " + n + " not found. https://gsap.com", !Ie.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = p,
            g || f || zi(d) || zi(c)) {
                if (s = o.vars,
                T = o.timeline = new ge({
                    data: "nested",
                    defaults: h || {},
                    targets: x && x.data === "nested" ? x.vars.targets : _
                }),
                T.kill(),
                T.parent = T._dp = nt(o),
                T._start = 0,
                f || zi(d) || zi(c)) {
                    if (C = _.length,
                    $ = f && sl(f),
                    Qe(f))
                        for (k in f)
                            ~gl.indexOf(k) && (I || (I = {}),
                            I[k] = f[k]);
                    for (y = 0; y < C; y++)
                        S = Vi(s, vl),
                        S.stagger = 0,
                        b && (S.yoyoEase = b),
                        I && wt(S, I),
                        L = _[y],
                        S.duration = +fi(d, nt(o), y, L, _),
                        S.delay = (+fi(c, nt(o), y, L, _) || 0) - o._delay,
                        !f && C === 1 && S.delay && (o._delay = c = S.delay,
                        o._start += c,
                        S.delay = 0),
                        T.to(L, S, $ ? $(y, L, _) : 0),
                        T._ease = Y.none;
                    T.duration() ? d = c = 0 : o.timeline = 0
                } else if (g) {
                    ci(Ge(T.vars.defaults, {
                        ease: "none"
                    })),
                    T._ease = Tt(g.ease || s.ease || "none");
                    var M = 0, O, N, A;
                    if (Te(g))
                        g.forEach(function(D) {
                            return T.to(_, D, ">")
                        }),
                        T.duration();
                    else {
                        S = {};
                        for (k in g)
                            k === "ease" || k === "easeEach" || Bc(k, g[k], S, g.easeEach);
                        for (k in S)
                            for (O = S[k].sort(function(D, w) {
                                return D.t - w.t
                            }),
                            M = 0,
                            y = 0; y < O.length; y++)
                                N = O[y],
                                A = {
                                    ease: N.e,
                                    duration: (N.t - (y ? O[y - 1].t : 0)) / 100 * d
                                },
                                A[k] = N.v,
                                T.to(_, A, M),
                                M += A.duration;
                        T.duration() < d && T.to({}, {
                            duration: d - T.duration()
                        })
                    }
                }
                d || o.duration(d = T.duration())
            } else
                o.timeline = 0;
            return p === !0 && !js && (ut = nt(o),
            te.killTweensOf(_),
            ut = 0),
            Ze(x, nt(o), r),
            s.reversed && o.reverse(),
            s.paused && o.paused(!0),
            (u || !d && !g && o._start === he(x._time) && Oe(u) && vc(nt(o)) && x.data !== "nested") && (o._tTime = -Z,
            o.render(Math.max(0, -c) || 0)),
            v && el(nt(o), v),
            o
        }
        var t = e.prototype;
        return t.render = function(s, r, a) {
            var o = this._time, l = this._tDur, d = this._dur, c = s < 0, u = s > l - Z && !c ? l : s < Z ? 0 : s, f, p, g, h, v, b, x, _, T;
            if (!d)
                _c(this, s, r, a);
            else if (u !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
                if (f = u,
                _ = this.timeline,
                this._repeat) {
                    if (h = d + this._rDelay,
                    this._repeat < -1 && c)
                        return this.totalTime(h * 100 + s, r, a);
                    if (f = he(u % h),
                    u === l ? (g = this._repeat,
                    f = d) : (g = ~~(u / h),
                    g && g === he(u / h) && (f = d,
                    g--),
                    f > d && (f = d)),
                    b = this._yoyo && g & 1,
                    b && (T = this._yEase,
                    f = d - f),
                    v = Vt(this._tTime, h),
                    f === o && !a && this._initted && g === v)
                        return this._tTime = u,
                        this;
                    g !== v && (_ && this._yEase && pl(_, b),
                    this.vars.repeatRefresh && !b && !this._lock && this._time !== h && this._initted && (this._lock = a = 1,
                    this.render(he(h * g), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (tl(this, c ? s : f, a, r, u))
                        return this._tTime = 0,
                        this;
                    if (o !== this._time && !(a && this.vars.repeatRefresh && g !== v))
                        return this;
                    if (d !== this._dur)
                        return this.render(s, r, a)
                }
                if (this._tTime = u,
                this._time = f,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = x = (T || this._ease)(f / d),
                this._from && (this.ratio = x = 1 - x),
                f && !o && !r && !g && (ze(this, "onStart"),
                this._tTime !== u))
                    return this;
                for (p = this._pt; p; )
                    p.r(x, p.d),
                    p = p._next;
                _ && _.render(s < 0 ? s : _._dur * _._ease(f / this._dur), r, a) || this._startAt && (this._zTime = s),
                this._onUpdate && !r && (c && qs(this, s, r, a),
                ze(this, "onUpdate")),
                this._repeat && g !== v && this.vars.onRepeat && !r && this.parent && ze(this, "onRepeat"),
                (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && qs(this, s, !0, !0),
                (s || !d) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && pt(this, 1),
                !r && !(c && !o) && (u || o || b) && (ze(this, u === l ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(u < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function(s) {
            return (!s || !this.vars.runBackwards) && (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(s),
            i.prototype.invalidate.call(this, s)
        }
        ,
        t.resetTo = function(s, r, a, o, l) {
            mi || $e.wake(),
            this._ts || this.play();
            var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
            return this._initted || or(this, d),
            c = this._ease(d / this._dur),
            Fc(this, s, r, a, o, c, d, l) ? this.resetTo(s, r, a, o, 1) : (Ui(this, 0),
            this.parent || Zo(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        t.kill = function(s, r) {
            if (r === void 0 && (r = "all"),
            !s && (!r || r === "all"))
                return this._lazy = this._pt = 0,
                this.parent ? li(this) : this;
            if (this.timeline) {
                var a = this.timeline.totalDuration();
                return this.timeline.killTweensOf(s, r, ut && ut.vars.overwrite !== !0)._first || li(this),
                this.parent && a !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / a, 0, 1),
                this
            }
            var o = this._targets, l = s ? He(s) : o, d = this._ptLookup, c = this._pt, u, f, p, g, h, v, b;
            if ((!r || r === "all") && mc(o, l))
                return r === "all" && (this._pt = 0),
                li(this);
            for (u = this._op = this._op || [],
            r !== "all" && (fe(r) && (h = {},
            we(r, function(x) {
                return h[x] = 1
            }),
            r = h),
            r = Nc(o, r)),
            b = o.length; b--; )
                if (~l.indexOf(o[b])) {
                    f = d[b],
                    r === "all" ? (u[b] = r,
                    g = f,
                    p = {}) : (p = u[b] = u[b] || {},
                    g = r);
                    for (h in g)
                        v = f && f[h],
                        v && ((!("kill"in v.d) || v.d.kill(h) === !0) && Xi(this, v, "_pt"),
                        delete f[h]),
                        p !== "all" && (p[h] = 1)
                }
            return this._initted && !this._pt && c && li(this),
            this
        }
        ,
        e.to = function(s, r) {
            return new e(s,r,arguments[2])
        }
        ,
        e.from = function(s, r) {
            return ui(1, arguments)
        }
        ,
        e.delayedCall = function(s, r, a, o) {
            return new e(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: s,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: a,
                onReverseCompleteParams: a,
                callbackScope: o
            })
        }
        ,
        e.fromTo = function(s, r, a) {
            return ui(2, arguments)
        }
        ,
        e.set = function(s, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new e(s,r)
        }
        ,
        e.killTweensOf = function(s, r, a) {
            return te.killTweensOf(s, r, a)
        }
        ,
        e
    }(gi);
    Ge(oe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    we("staggerTo,staggerFrom,staggerFromTo", function(i) {
        oe[i] = function() {
            var e = new ge
              , t = Hs.call(arguments, 0);
            return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0),
            e[i].apply(e, t)
        }
    });
    var lr = function(e, t, n) {
        return e[t] = n
    }
      , yl = function(e, t, n) {
        return e[t](n)
    }
      , qc = function(e, t, n, s) {
        return e[t](s.fp, n)
    }
      , Vc = function(e, t, n) {
        return e.setAttribute(t, n)
    }
      , Ji = function(e, t) {
        return re(e[t]) ? yl : Wi(e[t]) && e.setAttribute ? Vc : lr
    }
      , _l = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
      , Hc = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
      , dr = function(e, t) {
        var n = t._pt
          , s = "";
        if (!e && t.b)
            s = t.b;
        else if (e === 1 && t.e)
            s = t.e;
        else {
            for (; n; )
                s = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + s,
                n = n._next;
            s += t.c
        }
        t.set(t.t, t.p, s, t)
    }
      , cr = function(e, t) {
        for (var n = t._pt; n; )
            n.r(e, n.d),
            n = n._next
    }
      , Gc = function(e, t, n, s) {
        for (var r = this._pt, a; r; )
            a = r._next,
            r.p === s && r.modifier(e, t, n),
            r = a
    }
      , Wc = function(e) {
        for (var t = this._pt, n, s; t; )
            s = t._next,
            t.p === e && !t.op || t.op === e ? Xi(this, t, "_pt") : t.dep || (n = 1),
            t = s;
        return !n
    }
      , Yc = function(e, t, n, s) {
        s.mSet(e, t, s.m.call(s.tween, n, s.mt), s)
    }
      , ur = function(e) {
        for (var t = e._pt, n, s, r, a; t; ) {
            for (n = t._next,
            s = r; s && s.pr > t.pr; )
                s = s._next;
            (t._prev = s ? s._prev : a) ? t._prev._next = t : r = t,
            (t._next = s) ? s._prev = t : a = t,
            t = n
        }
        e._pt = r
    }
      , Me = function() {
        function i(t, n, s, r, a, o, l, d, c) {
            this.t = n,
            this.s = r,
            this.c = a,
            this.p = s,
            this.r = o || _l,
            this.d = l || this,
            this.set = d || lr,
            this.pr = c || 0,
            this._next = t,
            t && (t._prev = this)
        }
        var e = i.prototype;
        return e.modifier = function(n, s, r) {
            this.mSet = this.mSet || this.set,
            this.set = Yc,
            this.m = n,
            this.mt = r,
            this.tween = s
        }
        ,
        i
    }();
    we(er + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
        return Qs[i] = 1
    });
    Re.TweenMax = Re.TweenLite = oe;
    Re.TimelineLite = Re.TimelineMax = ge;
    te = new ge({
        sortChildren: !1,
        defaults: qt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    Ie.stringFilter = nr;
    var Ct = []
      , Ni = {}
      , Xc = []
      , Bo = 0
      , jc = 0
      , Ds = function(e) {
        return (Ni[e] || Xc).map(function(t) {
            return t()
        })
    }
      , Xs = function() {
        var e = Date.now()
          , t = [];
        e - Bo > 2 && (Ds("matchMediaInit"),
        Ct.forEach(function(n) {
            var s = n.queries, r = n.conditions, a, o, l, d;
            for (o in s)
                a = Ke.matchMedia(s[o]).matches,
                a && (l = 1),
                a !== r[o] && (r[o] = a,
                d = 1);
            d && (n.revert(),
            l && t.push(n))
        }),
        Ds("matchMediaRevert"),
        t.forEach(function(n) {
            return n.onMatch(n, function(s) {
                return n.add(null, s)
            })
        }),
        Bo = e,
        Ds("matchMedia"))
    }
      , bl = function() {
        function i(t, n) {
            this.selector = n && Gs(n),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = jc++,
            t && this.add(t)
        }
        var e = i.prototype;
        return e.add = function(n, s, r) {
            re(n) && (r = s,
            s = n,
            n = re);
            var a = this
              , o = function() {
                var d = Q, c = a.selector, u;
                return d && d !== a && d.data.push(a),
                r && (a.selector = Gs(r)),
                Q = a,
                u = s.apply(a, arguments),
                re(u) && a._r.push(u),
                Q = d,
                a.selector = c,
                a.isReverted = !1,
                u
            };
            return a.last = o,
            n === re ? o(a, function(l) {
                return a.add(null, l)
            }) : n ? a[n] = o : o
        }
        ,
        e.ignore = function(n) {
            var s = Q;
            Q = null,
            n(this),
            Q = s
        }
        ,
        e.getTweens = function() {
            var n = [];
            return this.data.forEach(function(s) {
                return s instanceof i ? n.push.apply(n, s.getTweens()) : s instanceof oe && !(s.parent && s.parent.data === "nested") && n.push(s)
            }),
            n
        }
        ,
        e.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        e.kill = function(n, s) {
            var r = this;
            if (n ? function() {
                for (var o = r.getTweens(), l = r.data.length, d; l--; )
                    d = r.data[l],
                    d.data === "isFlip" && (d.revert(),
                    d.getChildren(!0, !0, !1).forEach(function(c) {
                        return o.splice(o.indexOf(c), 1)
                    }));
                for (o.map(function(c) {
                    return {
                        g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                        t: c
                    }
                }).sort(function(c, u) {
                    return u.g - c.g || -1 / 0
                }).forEach(function(c) {
                    return c.t.revert(n)
                }),
                l = r.data.length; l--; )
                    d = r.data[l],
                    d instanceof ge ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(),
                    d.kill()) : !(d instanceof oe) && d.revert && d.revert(n);
                r._r.forEach(function(c) {
                    return c(n, r)
                }),
                r.isReverted = !0
            }() : this.data.forEach(function(o) {
                return o.kill && o.kill()
            }),
            this.clear(),
            s)
                for (var a = Ct.length; a--; )
                    Ct[a].id === this.id && Ct.splice(a, 1)
        }
        ,
        e.revert = function(n) {
            this.kill(n || {})
        }
        ,
        i
    }()
      , Uc = function() {
        function i(t) {
            this.contexts = [],
            this.scope = t,
            Q && Q.data.push(this)
        }
        var e = i.prototype;
        return e.add = function(n, s, r) {
            Qe(n) || (n = {
                matches: n
            });
            var a = new bl(0,r || this.scope), o = a.conditions = {}, l, d, c;
            Q && !a.selector && (a.selector = Q.selector),
            this.contexts.push(a),
            s = a.add("onMatch", s),
            a.queries = n;
            for (d in n)
                d === "all" ? c = 1 : (l = Ke.matchMedia(n[d]),
                l && (Ct.indexOf(a) < 0 && Ct.push(a),
                (o[d] = l.matches) && (c = 1),
                l.addListener ? l.addListener(Xs) : l.addEventListener("change", Xs)));
            return c && s(a, function(u) {
                return a.add(null, u)
            }),
            this
        }
        ,
        e.revert = function(n) {
            this.kill(n || {})
        }
        ,
        e.kill = function(n) {
            this.contexts.forEach(function(s) {
                return s.kill(n, !0)
            })
        }
        ,
        i
    }()
      , Gi = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.forEach(function(s) {
                return cl(s)
            })
        },
        timeline: function(e) {
            return new ge(e)
        },
        getTweensOf: function(e, t) {
            return te.getTweensOf(e, t)
        },
        getProperty: function(e, t, n, s) {
            fe(e) && (e = He(e)[0]);
            var r = ht(e || {}).get
              , a = n ? Ko : Jo;
            return n === "native" && (n = ""),
            e && (t ? a((Le[t] && Le[t].get || r)(e, t, n, s)) : function(o, l, d) {
                return a((Le[o] && Le[o].get || r)(e, o, l, d))
            }
            )
        },
        quickSetter: function(e, t, n) {
            if (e = He(e),
            e.length > 1) {
                var s = e.map(function(c) {
                    return Ce.quickSetter(c, t, n)
                })
                  , r = s.length;
                return function(c) {
                    for (var u = r; u--; )
                        s[u](c)
                }
            }
            e = e[0] || {};
            var a = Le[t]
              , o = ht(e)
              , l = o.harness && (o.harness.aliases || {})[t] || t
              , d = a ? function(c) {
                var u = new a;
                Bt._pt = 0,
                u.init(e, n ? c + n : c, Bt, 0, [e]),
                u.render(1, u),
                Bt._pt && cr(1, Bt)
            }
            : o.set(e, l);
            return a ? d : function(c) {
                return d(e, l, n ? c + n : c, o, 1)
            }
        },
        quickTo: function(e, t, n) {
            var s, r = Ce.to(e, wt((s = {},
            s[t] = "+=0.1",
            s.paused = !0,
            s), n || {})), a = function(l, d, c) {
                return r.resetTo(t, l, d, c)
            };
            return a.tween = r,
            a
        },
        isTweening: function(e) {
            return te.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Tt(e.ease, qt.ease)),
            Do(qt, e || {})
        },
        config: function(e) {
            return Do(Ie, e || {})
        },
        registerEffect: function(e) {
            var t = e.name
              , n = e.effect
              , s = e.plugins
              , r = e.defaults
              , a = e.extendTimeline;
            (s || "").split(",").forEach(function(o) {
                return o && !Le[o] && !Re[o] && hi(t + " effect requires " + o + " plugin.")
            }),
            $s[t] = function(o, l, d) {
                return n(He(o), Ge(l || {}, r), d)
            }
            ,
            a && (ge.prototype[t] = function(o, l, d) {
                return this.add($s[t](o, Qe(l) ? l : (d = l) && {}, this), d)
            }
            )
        },
        registerEase: function(e, t) {
            Y[e] = Tt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Tt(e, t) : Y
        },
        getById: function(e) {
            return te.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var n = new ge(e), s, r;
            for (n.smoothChildTiming = Oe(e.smoothChildTiming),
            te.remove(n),
            n._dp = 0,
            n._time = n._tTime = te._time,
            s = te._first; s; )
                r = s._next,
                (t || !(!s._dur && s instanceof oe && s.vars.onComplete === s._targets[0])) && Ze(n, s, s._start - s._delay),
                s = r;
            return Ze(te, n, 0),
            n
        },
        context: function(e, t) {
            return e ? new bl(e,t) : Q
        },
        matchMedia: function(e) {
            return new Uc(e)
        },
        matchMediaRefresh: function() {
            return Ct.forEach(function(e) {
                var t = e.conditions, n, s;
                for (s in t)
                    t[s] && (t[s] = !1,
                    n = 1);
                n && e.revert()
            }) || Xs()
        },
        addEventListener: function(e, t) {
            var n = Ni[e] || (Ni[e] = []);
            ~n.indexOf(t) || n.push(t)
        },
        removeEventListener: function(e, t) {
            var n = Ni[e]
              , s = n && n.indexOf(t);
            s >= 0 && n.splice(s, 1)
        },
        utils: {
            wrap: Mc,
            wrapYoyo: Pc,
            distribute: sl,
            random: al,
            snap: rl,
            normalize: wc,
            getUnit: ve,
            clamp: Sc,
            splitColor: ul,
            toArray: He,
            selector: Gs,
            mapRange: ll,
            pipe: Tc,
            unitize: Cc,
            interpolate: kc,
            shuffle: nl
        },
        install: Yo,
        effects: $s,
        ticker: $e,
        updateRoot: ge.updateRoot,
        plugins: Le,
        globalTimeline: te,
        core: {
            PropTween: Me,
            globals: Xo,
            Tween: oe,
            Timeline: ge,
            Animation: gi,
            getCache: ht,
            _removeLinkedListItem: Xi,
            reverting: function() {
                return Ee
            },
            context: function(e) {
                return e && Q && (Q.data.push(e),
                e._ctx = Q),
                Q
            },
            suppressOverwrites: function(e) {
                return js = e
            }
        }
    };
    we("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
        return Gi[i] = oe[i]
    });
    $e.add(ge.updateRoot);
    Bt = Gi.to({}, {
        duration: 0
    });
    var Jc = function(e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
        return n
    }
      , Kc = function(e, t) {
        var n = e._targets, s, r, a;
        for (s in t)
            for (r = n.length; r--; )
                a = e._ptLookup[r][s],
                a && (a = a.d) && (a._pt && (a = Jc(a, s)),
                a && a.modifier && a.modifier(t[s], e, n[r], s))
    }
      , zs = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(s, r, a) {
                a._onInit = function(o) {
                    var l, d;
                    if (fe(r) && (l = {},
                    we(r, function(c) {
                        return l[c] = 1
                    }),
                    r = l),
                    t) {
                        l = {};
                        for (d in r)
                            l[d] = t(r[d]);
                        r = l
                    }
                    Kc(o, r)
                }
            }
        }
    }
      , Ce = Gi.registerPlugin({
        name: "attr",
        init: function(e, t, n, s, r) {
            var a, o, l;
            this.tween = n;
            for (a in t)
                l = e.getAttribute(a) || "",
                o = this.add(e, "setAttribute", (l || 0) + "", t[a], s, r, 0, 0, a),
                o.op = a,
                o.b = l,
                this._props.push(a)
        },
        render: function(e, t) {
            for (var n = t._pt; n; )
                Ee ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
                n = n._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var n = t.length; n--; )
                this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
        }
    }, zs("roundProps", Ws), zs("modifiers"), zs("snap", rl)) || Gi;
    oe.version = ge.version = Ce.version = "3.12.5";
    Wo = 1;
    Us() && Gt();
    var Zc = Y.Power0
      , Qc = Y.Power1
      , eu = Y.Power2
      , tu = Y.Power3
      , iu = Y.Power4
      , nu = Y.Linear
      , su = Y.Quad
      , ru = Y.Cubic
      , au = Y.Quart
      , ou = Y.Quint
      , lu = Y.Strong
      , du = Y.Elastic
      , cu = Y.Back
      , uu = Y.SteppedEase
      , fu = Y.Bounce
      , hu = Y.Sine
      , pu = Y.Expo
      , mu = Y.Circ;
    m();
    var xl, gt, Xt, yr, It, gu, Sl, _r, vu = function() {
        return typeof window != "undefined"
    }, ot = {}, Ot = 180 / Math.PI, jt = Math.PI / 180, Yt = Math.atan2, El = 1e8, br = /([A-Z])/g, yu = /(left|right|width|margin|padding|x)/i, _u = /[\s,\(]\S/, et = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, pr = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, bu = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, xu = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, Su = function(e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    }, Ll = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, $l = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    }, Eu = function(e, t, n) {
        return e.style[t] = n
    }, Tu = function(e, t, n) {
        return e.style.setProperty(t, n)
    }, Cu = function(e, t, n) {
        return e._gsap[t] = n
    }, wu = function(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }, Mu = function(e, t, n, s, r) {
        var a = e._gsap;
        a.scaleX = a.scaleY = n,
        a.renderTransform(r, a)
    }, Pu = function(e, t, n, s, r) {
        var a = e._gsap;
        a[t] = n,
        a.renderTransform(r, a)
    }, ie = "transform", Ae = ie + "Origin", ku = function i(e, t) {
        var n = this
          , s = this.target
          , r = s.style
          , a = s._gsap;
        if (e in ot && r) {
            if (this.tfm = this.tfm || {},
            e !== "transform")
                e = et[e] || e,
                ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                    return n.tfm[o] = at(s, o)
                }) : this.tfm[e] = a.x ? a[e] : at(s, e),
                e === Ae && (this.tfm.zOrigin = a.zOrigin);
            else
                return et.transform.split(",").forEach(function(o) {
                    return i.call(n, o, t)
                });
            if (this.props.indexOf(ie) >= 0)
                return;
            a.svg && (this.svgo = s.getAttribute("data-svg-origin"),
            this.props.push(Ae, t, "")),
            e = ie
        }
        (r || t) && this.props.push(e, t, r[e])
    }, Ol = function(e) {
        e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
    }, Lu = function() {
        var e = this.props, t = this.target, n = t.style, s = t._gsap, r, a;
        for (r = 0; r < e.length; r += 3)
            e[r + 1] ? t[e[r]] = e[r + 2] : e[r + 2] ? n[e[r]] = e[r + 2] : n.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(br, "-$1").toLowerCase());
        if (this.tfm) {
            for (a in this.tfm)
                s[a] = this.tfm[a];
            s.svg && (s.renderTransform(),
            t.setAttribute("data-svg-origin", this.svgo || "")),
            r = _r(),
            (!r || !r.isStart) && !n[ie] && (Ol(n),
            s.zOrigin && n[Ae] && (n[Ae] += " " + s.zOrigin + "px",
            s.zOrigin = 0,
            s.renderTransform()),
            s.uncache = 1)
        }
    }, Il = function(e, t) {
        var n = {
            target: e,
            props: [],
            revert: Lu,
            save: ku
        };
        return e._gsap || Ce.core.getCache(e),
        t && t.split(",").forEach(function(s) {
            return n.save(s)
        }),
        n
    }, Al, mr = function(e, t) {
        var n = gt.createElementNS ? gt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : gt.createElement(e);
        return n && n.style ? n : gt.createElement(e)
    }, tt = function i(e, t, n) {
        var s = getComputedStyle(e);
        return s[t] || s.getPropertyValue(t.replace(br, "-$1").toLowerCase()) || s.getPropertyValue(t) || !n && i(e, Ut(t) || t, 1) || ""
    }, Tl = "O,Moz,ms,Ms,Webkit".split(","), Ut = function(e, t, n) {
        var s = t || It
          , r = s.style
          , a = 5;
        if (e in r && !n)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Tl[a] + e in r); )
            ;
        return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Tl[a] : "") + e
    }, gr = function() {
        vu() && window.document && (xl = window,
        gt = xl.document,
        Xt = gt.documentElement,
        It = mr("div") || {
            style: {}
        },
        gu = mr("div"),
        ie = Ut(ie),
        Ae = ie + "Origin",
        It.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Al = !!Ut("perspective"),
        _r = Ce.core.reverting,
        yr = 1)
    }, fr = function i(e) {
        var t = mr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, r = this.style.cssText, a;
        if (Xt.appendChild(t),
        t.appendChild(this),
        this.style.display = "block",
        e)
            try {
                a = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = i
            } catch (o) {}
        else
            this._gsapBBox && (a = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        Xt.removeChild(t),
        this.style.cssText = r,
        a
    }, Cl = function(e, t) {
        for (var n = t.length; n--; )
            if (e.hasAttribute(t[n]))
                return e.getAttribute(t[n])
    }, Dl = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch (n) {
            t = fr.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === fr || (t = fr.call(e, !0)),
        t && !t.width && !t.x && !t.y ? {
            x: +Cl(e, ["x", "cx", "x1"]) || 0,
            y: +Cl(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    }, zl = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Dl(e))
    }, At = function(e, t) {
        if (t) {
            var n = e.style, s;
            t in ot && t !== Ae && (t = ie),
            n.removeProperty ? (s = t.substr(0, 2),
            (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            n.removeProperty(s === "--" ? t : t.replace(br, "-$1").toLowerCase())) : n.removeAttribute(t)
        }
    }, vt = function(e, t, n, s, r, a) {
        var o = new Me(e._pt,t,n,0,1,a ? $l : Ll);
        return e._pt = o,
        o.b = s,
        o.e = r,
        e._props.push(n),
        o
    }, wl = {
        deg: 1,
        rad: 1,
        turn: 1
    }, $u = {
        grid: 1,
        flex: 1
    }, yt = function i(e, t, n, s) {
        var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", o = It.style, l = yu.test(t), d = e.tagName.toLowerCase() === "svg", c = (d ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, f = s === "px", p = s === "%", g, h, v, b;
        if (s === a || !r || wl[s] || wl[a])
            return r;
        if (a !== "px" && !f && (r = i(e, t, n, "px")),
        b = e.getCTM && zl(e),
        (p || a === "%") && (ot[t] || ~t.indexOf("adius")))
            return g = b ? e.getBBox()[l ? "width" : "height"] : e[c],
            ae(p ? r / g * u : r / 100 * g);
        if (o[l ? "width" : "height"] = u + (f ? a : s),
        h = ~t.indexOf("adius") || s === "em" && e.appendChild && !d ? e : e.parentNode,
        b && (h = (e.ownerSVGElement || {}).parentNode),
        (!h || h === gt || !h.appendChild) && (h = gt.body),
        v = h._gsap,
        v && p && v.width && l && v.time === $e.time && !v.uncache)
            return ae(r / v.width * u);
        if (p && (t === "height" || t === "width")) {
            var x = e.style[t];
            e.style[t] = u + s,
            g = e[c],
            x ? e.style[t] = x : At(e, t)
        } else
            (p || a === "%") && !$u[tt(h, "display")] && (o.position = tt(e, "position")),
            h === e && (o.position = "static"),
            h.appendChild(It),
            g = It[c],
            h.removeChild(It),
            o.position = "absolute";
        return l && p && (v = ht(h),
        v.time = $e.time,
        v.width = h[c]),
        ae(f ? g * r / u : g && r ? u / g * r : 0)
    }, at = function(e, t, n, s) {
        var r;
        return yr || gr(),
        t in et && t !== "transform" && (t = et[t],
        ~t.indexOf(",") && (t = t.split(",")[0])),
        ot[t] && t !== "transform" ? (r = bi(e, s),
        r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : Zi(tt(e, Ae)) + " " + r.zOrigin + "px") : (r = e.style[t],
        (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = Ki[t] && Ki[t](e, t, n) || tt(e, t) || ir(e, t) || (t === "opacity" ? 1 : 0))),
        n && !~(r + "").trim().indexOf(" ") ? yt(e, t, r, n) + n : r
    }, Ou = function(e, t, n, s) {
        if (!n || n === "none") {
            var r = Ut(t, e, 1)
              , a = r && tt(e, r, 1);
            a && a !== n ? (t = r,
            n = a) : t === "borderColor" && (n = tt(e, "borderTopColor"))
        }
        var o = new Me(this._pt,e.style,t,0,1,dr), l = 0, d = 0, c, u, f, p, g, h, v, b, x, _, T, y;
        if (o.b = n,
        o.e = s,
        n += "",
        s += "",
        s === "auto" && (h = e.style[t],
        e.style[t] = s,
        s = tt(e, t) || s,
        h ? e.style[t] = h : At(e, t)),
        c = [n, s],
        nr(c),
        n = c[0],
        s = c[1],
        f = n.match(Mt) || [],
        y = s.match(Mt) || [],
        y.length) {
            for (; u = Mt.exec(s); )
                v = u[0],
                x = s.substring(l, u.index),
                g ? g = (g + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1),
                v !== (h = f[d++] || "") && (p = parseFloat(h) || 0,
                T = h.substr((p + "").length),
                v.charAt(1) === "=" && (v = Pt(p, v) + T),
                b = parseFloat(v),
                _ = v.substr((b + "").length),
                l = Mt.lastIndex - _.length,
                _ || (_ = _ || Ie.units[t] || T,
                l === s.length && (s += _,
                o.e += _)),
                T !== _ && (p = yt(e, t, h, _) || 0),
                o._pt = {
                    _next: o._pt,
                    p: x || d === 1 ? x : ",",
                    s: p,
                    c: b - p,
                    m: g && g < 4 || t === "zIndex" ? Math.round : 0
                });
            o.c = l < s.length ? s.substring(l, s.length) : ""
        } else
            o.r = t === "display" && s === "none" ? $l : Ll;
        return Ks.test(s) && (o.e = 0),
        this._pt = o,
        o
    }, Ml = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Iu = function(e) {
        var t = e.split(" ")
          , n = t[0]
          , s = t[1] || "50%";
        return (n === "top" || n === "bottom" || s === "left" || s === "right") && (e = n,
        n = s,
        s = e),
        t[0] = Ml[n] || n,
        t[1] = Ml[s] || s,
        t.join(" ")
    }, Au = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n = t.t, s = n.style, r = t.u, a = n._gsap, o, l, d;
            if (r === "all" || r === !0)
                s.cssText = "",
                l = 1;
            else
                for (r = r.split(","),
                d = r.length; --d > -1; )
                    o = r[d],
                    ot[o] && (l = 1,
                    o = o === "transformOrigin" ? Ae : ie),
                    At(n, o);
            l && (At(n, ie),
            a && (a.svg && n.removeAttribute("transform"),
            bi(n, 1),
            a.uncache = 1,
            Ol(s)))
        }
    }, Ki = {
        clearProps: function(e, t, n, s, r) {
            if (r.data !== "isFromStart") {
                var a = e._pt = new Me(e._pt,t,n,0,0,Au);
                return a.u = s,
                a.pr = -10,
                a.tween = r,
                e._props.push(n),
                1
            }
        }
    }, _i = [1, 0, 0, 1, 0, 0], Rl = {}, Fl = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, Pl = function(e) {
        var t = tt(e, ie);
        return Fl(t) ? _i : t.substr(7).match(Js).map(ae)
    }, xr = function(e, t) {
        var n = e._gsap || ht(e), s = e.style, r = Pl(e), a, o, l, d;
        return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
        r = [l.a, l.b, l.c, l.d, l.e, l.f],
        r.join(",") === "1,0,0,1,0,0" ? _i : r) : (r === _i && !e.offsetParent && e !== Xt && !n.svg && (l = s.display,
        s.display = "block",
        a = e.parentNode,
        (!a || !e.offsetParent) && (d = 1,
        o = e.nextElementSibling,
        Xt.appendChild(e)),
        r = Pl(e),
        l ? s.display = l : At(e, "display"),
        d && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Xt.removeChild(e))),
        t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
    }, vr = function(e, t, n, s, r, a) {
        var o = e._gsap, l = r || xr(e, !0), d = o.xOrigin || 0, c = o.yOrigin || 0, u = o.xOffset || 0, f = o.yOffset || 0, p = l[0], g = l[1], h = l[2], v = l[3], b = l[4], x = l[5], _ = t.split(" "), T = parseFloat(_[0]) || 0, y = parseFloat(_[1]) || 0, S, C, k, L;
        n ? l !== _i && (C = p * v - g * h) && (k = T * (v / C) + y * (-h / C) + (h * x - v * b) / C,
        L = T * (-g / C) + y * (p / C) - (p * x - g * b) / C,
        T = k,
        y = L) : (S = Dl(e),
        T = S.x + (~_[0].indexOf("%") ? T / 100 * S.width : T),
        y = S.y + (~(_[1] || _[0]).indexOf("%") ? y / 100 * S.height : y)),
        s || s !== !1 && o.smooth ? (b = T - d,
        x = y - c,
        o.xOffset = u + (b * p + x * h) - b,
        o.yOffset = f + (b * g + x * v) - x) : o.xOffset = o.yOffset = 0,
        o.xOrigin = T,
        o.yOrigin = y,
        o.smooth = !!s,
        o.origin = t,
        o.originIsAbsolute = !!n,
        e.style[Ae] = "0px 0px",
        a && (vt(a, o, "xOrigin", d, T),
        vt(a, o, "yOrigin", c, y),
        vt(a, o, "xOffset", u, o.xOffset),
        vt(a, o, "yOffset", f, o.yOffset)),
        e.setAttribute("data-svg-origin", T + " " + y)
    }, bi = function(e, t) {
        var n = e._gsap || new sr(e);
        if ("x"in n && !t && !n.uncache)
            return n;
        var s = e.style, r = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), d = tt(e, Ae) || "0", c, u, f, p, g, h, v, b, x, _, T, y, S, C, k, L, $, I, M, O, N, A, D, w, z, q, ne, pe, ye, lt, P, R;
        return c = u = f = h = v = b = x = _ = T = 0,
        p = g = 1,
        n.svg = !!(e.getCTM && zl(e)),
        l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[ie] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ie] !== "none" ? l[ie] : "")),
        s.scale = s.rotate = s.translate = "none"),
        C = xr(e, n.svg),
        n.svg && (n.uncache ? (z = e.getBBox(),
        d = n.xOrigin - z.x + "px " + (n.yOrigin - z.y) + "px",
        w = "") : w = !t && e.getAttribute("data-svg-origin"),
        vr(e, w || d, !!w || n.originIsAbsolute, n.smooth !== !1, C)),
        y = n.xOrigin || 0,
        S = n.yOrigin || 0,
        C !== _i && (I = C[0],
        M = C[1],
        O = C[2],
        N = C[3],
        c = A = C[4],
        u = D = C[5],
        C.length === 6 ? (p = Math.sqrt(I * I + M * M),
        g = Math.sqrt(N * N + O * O),
        h = I || M ? Yt(M, I) * Ot : 0,
        x = O || N ? Yt(O, N) * Ot + h : 0,
        x && (g *= Math.abs(Math.cos(x * jt))),
        n.svg && (c -= y - (y * I + S * O),
        u -= S - (y * M + S * N))) : (R = C[6],
        lt = C[7],
        ne = C[8],
        pe = C[9],
        ye = C[10],
        P = C[11],
        c = C[12],
        u = C[13],
        f = C[14],
        k = Yt(R, ye),
        v = k * Ot,
        k && (L = Math.cos(-k),
        $ = Math.sin(-k),
        w = A * L + ne * $,
        z = D * L + pe * $,
        q = R * L + ye * $,
        ne = A * -$ + ne * L,
        pe = D * -$ + pe * L,
        ye = R * -$ + ye * L,
        P = lt * -$ + P * L,
        A = w,
        D = z,
        R = q),
        k = Yt(-O, ye),
        b = k * Ot,
        k && (L = Math.cos(-k),
        $ = Math.sin(-k),
        w = I * L - ne * $,
        z = M * L - pe * $,
        q = O * L - ye * $,
        P = N * $ + P * L,
        I = w,
        M = z,
        O = q),
        k = Yt(M, I),
        h = k * Ot,
        k && (L = Math.cos(k),
        $ = Math.sin(k),
        w = I * L + M * $,
        z = A * L + D * $,
        M = M * L - I * $,
        D = D * L - A * $,
        I = w,
        A = z),
        v && Math.abs(v) + Math.abs(h) > 359.9 && (v = h = 0,
        b = 180 - b),
        p = ae(Math.sqrt(I * I + M * M + O * O)),
        g = ae(Math.sqrt(D * D + R * R)),
        k = Yt(A, D),
        x = Math.abs(k) > 2e-4 ? k * Ot : 0,
        T = P ? 1 / (P < 0 ? -P : P) : 0),
        n.svg && (w = e.getAttribute("transform"),
        n.forceCSS = e.setAttribute("transform", "") || !Fl(tt(e, ie)),
        w && e.setAttribute("transform", w))),
        Math.abs(x) > 90 && Math.abs(x) < 270 && (r ? (p *= -1,
        x += h <= 0 ? 180 : -180,
        h += h <= 0 ? 180 : -180) : (g *= -1,
        x += x <= 0 ? 180 : -180)),
        t = t || n.uncache,
        n.x = c - ((n.xPercent = c && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a,
        n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a,
        n.z = f + a,
        n.scaleX = ae(p),
        n.scaleY = ae(g),
        n.rotation = ae(h) + o,
        n.rotationX = ae(v) + o,
        n.rotationY = ae(b) + o,
        n.skewX = x + o,
        n.skewY = _ + o,
        n.transformPerspective = T + a,
        (n.zOrigin = parseFloat(d.split(" ")[2]) || !t && n.zOrigin || 0) && (s[Ae] = Zi(d)),
        n.xOffset = n.yOffset = 0,
        n.force3D = Ie.force3D,
        n.renderTransform = n.svg ? zu : Al ? Nl : Du,
        n.uncache = 0,
        n
    }, Zi = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, hr = function(e, t, n) {
        var s = ve(t);
        return ae(parseFloat(t) + parseFloat(yt(e, "x", n + "px", s))) + s
    }, Du = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        Nl(e, t)
    }, Lt = "0deg", yi = "0px", $t = ") ", Nl = function(e, t) {
        var n = t || this
          , s = n.xPercent
          , r = n.yPercent
          , a = n.x
          , o = n.y
          , l = n.z
          , d = n.rotation
          , c = n.rotationY
          , u = n.rotationX
          , f = n.skewX
          , p = n.skewY
          , g = n.scaleX
          , h = n.scaleY
          , v = n.transformPerspective
          , b = n.force3D
          , x = n.target
          , _ = n.zOrigin
          , T = ""
          , y = b === "auto" && e && e !== 1 || b === !0;
        if (_ && (u !== Lt || c !== Lt)) {
            var S = parseFloat(c) * jt, C = Math.sin(S), k = Math.cos(S), L;
            S = parseFloat(u) * jt,
            L = Math.cos(S),
            a = hr(x, a, C * L * -_),
            o = hr(x, o, -Math.sin(S) * -_),
            l = hr(x, l, k * L * -_ + _)
        }
        v !== yi && (T += "perspective(" + v + $t),
        (s || r) && (T += "translate(" + s + "%, " + r + "%) "),
        (y || a !== yi || o !== yi || l !== yi) && (T += l !== yi || y ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + $t),
        d !== Lt && (T += "rotate(" + d + $t),
        c !== Lt && (T += "rotateY(" + c + $t),
        u !== Lt && (T += "rotateX(" + u + $t),
        (f !== Lt || p !== Lt) && (T += "skew(" + f + ", " + p + $t),
        (g !== 1 || h !== 1) && (T += "scale(" + g + ", " + h + $t),
        x.style[ie] = T || "translate(0, 0)"
    }, zu = function(e, t) {
        var n = t || this, s = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.rotation, d = n.skewX, c = n.skewY, u = n.scaleX, f = n.scaleY, p = n.target, g = n.xOrigin, h = n.yOrigin, v = n.xOffset, b = n.yOffset, x = n.forceCSS, _ = parseFloat(a), T = parseFloat(o), y, S, C, k, L;
        l = parseFloat(l),
        d = parseFloat(d),
        c = parseFloat(c),
        c && (c = parseFloat(c),
        d += c,
        l += c),
        l || d ? (l *= jt,
        d *= jt,
        y = Math.cos(l) * u,
        S = Math.sin(l) * u,
        C = Math.sin(l - d) * -f,
        k = Math.cos(l - d) * f,
        d && (c *= jt,
        L = Math.tan(d - c),
        L = Math.sqrt(1 + L * L),
        C *= L,
        k *= L,
        c && (L = Math.tan(c),
        L = Math.sqrt(1 + L * L),
        y *= L,
        S *= L)),
        y = ae(y),
        S = ae(S),
        C = ae(C),
        k = ae(k)) : (y = u,
        k = f,
        S = C = 0),
        (_ && !~(a + "").indexOf("px") || T && !~(o + "").indexOf("px")) && (_ = yt(p, "x", a, "px"),
        T = yt(p, "y", o, "px")),
        (g || h || v || b) && (_ = ae(_ + g - (g * y + h * C) + v),
        T = ae(T + h - (g * S + h * k) + b)),
        (s || r) && (L = p.getBBox(),
        _ = ae(_ + s / 100 * L.width),
        T = ae(T + r / 100 * L.height)),
        L = "matrix(" + y + "," + S + "," + C + "," + k + "," + _ + "," + T + ")",
        p.setAttribute("transform", L),
        x && (p.style[ie] = L)
    }, Ru = function(e, t, n, s, r) {
        var a = 360, o = fe(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Ot : 1), d = l - s, c = s + d + "deg", u, f;
        return o && (u = r.split("_")[1],
        u === "short" && (d %= a,
        d !== d % (a / 2) && (d += d < 0 ? a : -a)),
        u === "cw" && d < 0 ? d = (d + a * El) % a - ~~(d / a) * a : u === "ccw" && d > 0 && (d = (d - a * El) % a - ~~(d / a) * a)),
        e._pt = f = new Me(e._pt,t,n,s,d,bu),
        f.e = c,
        f.u = "deg",
        e._props.push(n),
        f
    }, kl = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, Fu = function(e, t, n) {
        var s = kl({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, d, c, u, f, p, g;
        s.svg ? (d = n.getAttribute("transform"),
        n.setAttribute("transform", ""),
        a[ie] = t,
        o = bi(n, 1),
        At(n, ie),
        n.setAttribute("transform", d)) : (d = getComputedStyle(n)[ie],
        a[ie] = t,
        o = bi(n, 1),
        a[ie] = d);
        for (l in ot)
            d = s[l],
            c = o[l],
            d !== c && r.indexOf(l) < 0 && (p = ve(d),
            g = ve(c),
            u = p !== g ? yt(n, l, d, g) : parseFloat(d),
            f = parseFloat(c),
            e._pt = new Me(e._pt,o,l,u,f - u,pr),
            e._pt.u = g || 0,
            e._props.push(l));
        kl(o, s)
    };
    we("padding,margin,Width,Radius", function(i, e) {
        var t = "Top"
          , n = "Right"
          , s = "Bottom"
          , r = "Left"
          , a = (e < 3 ? [t, n, s, r] : [t + r, t + n, s + n, s + r]).map(function(o) {
            return e < 2 ? i + o : "border" + o + i
        });
        Ki[e > 1 ? "border" + i : i] = function(o, l, d, c, u) {
            var f, p;
            if (arguments.length < 4)
                return f = a.map(function(g) {
                    return at(o, g, d)
                }),
                p = f.join(" "),
                p.split(f[0]).length === 5 ? f[0] : p;
            f = (c + "").split(" "),
            p = {},
            a.forEach(function(g, h) {
                return p[g] = f[h] = f[h] || f[(h - 1) / 2 | 0]
            }),
            o.init(l, p, u)
        }
    });
    var Sr = {
        name: "css",
        register: gr,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, s, r) {
            var a = this._props, o = e.style, l = n.vars.startAt, d, c, u, f, p, g, h, v, b, x, _, T, y, S, C, k;
            yr || gr(),
            this.styles = this.styles || Il(e),
            k = this.styles.props,
            this.tween = n;
            for (h in t)
                if (h !== "autoRound" && (c = t[h],
                !(Le[h] && ar(h, t, n, s, e, r)))) {
                    if (p = typeof c,
                    g = Ki[h],
                    p === "function" && (c = c.call(n, s, e, r),
                    p = typeof c),
                    p === "string" && ~c.indexOf("random(") && (c = Wt(c)),
                    g)
                        g(this, e, h, c, n) && (C = 1);
                    else if (h.substr(0, 2) === "--")
                        d = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                        c += "",
                        st.lastIndex = 0,
                        st.test(d) || (v = ve(d),
                        b = ve(c)),
                        b ? v !== b && (d = yt(e, h, d, b) + b) : v && (c += v),
                        this.add(o, "setProperty", d, c, s, r, 0, 0, h),
                        a.push(h),
                        k.push(h, 0, o[h]);
                    else if (p !== "undefined") {
                        if (l && h in l ? (d = typeof l[h] == "function" ? l[h].call(n, s, e, r) : l[h],
                        fe(d) && ~d.indexOf("random(") && (d = Wt(d)),
                        ve(d + "") || d === "auto" || (d += Ie.units[h] || ve(at(e, h)) || ""),
                        (d + "").charAt(1) === "=" && (d = at(e, h))) : d = at(e, h),
                        f = parseFloat(d),
                        x = p === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                        x && (c = c.substr(2)),
                        u = parseFloat(c),
                        h in et && (h === "autoAlpha" && (f === 1 && at(e, "visibility") === "hidden" && u && (f = 0),
                        k.push("visibility", 0, o.visibility),
                        vt(this, o, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        h !== "scale" && h !== "transform" && (h = et[h],
                        ~h.indexOf(",") && (h = h.split(",")[0]))),
                        _ = h in ot,
                        _) {
                            if (this.styles.save(h),
                            T || (y = e._gsap,
                            y.renderTransform && !t.parseTransform || bi(e, t.parseTransform),
                            S = t.smoothOrigin !== !1 && y.smooth,
                            T = this._pt = new Me(this._pt,o,ie,0,1,y.renderTransform,y,0,-1),
                            T.dep = 1),
                            h === "scale")
                                this._pt = new Me(this._pt,y,"scaleY",y.scaleY,(x ? Pt(y.scaleY, x + u) : u) - y.scaleY || 0,pr),
                                this._pt.u = 0,
                                a.push("scaleY", h),
                                h += "X";
                            else if (h === "transformOrigin") {
                                k.push(Ae, 0, o[Ae]),
                                c = Iu(c),
                                y.svg ? vr(e, c, 0, S, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0,
                                b !== y.zOrigin && vt(this, y, "zOrigin", y.zOrigin, b),
                                vt(this, o, h, Zi(d), Zi(c)));
                                continue
                            } else if (h === "svgOrigin") {
                                vr(e, c, 1, S, 0, this);
                                continue
                            } else if (h in Rl) {
                                Ru(this, y, h, f, x ? Pt(f, x + c) : c);
                                continue
                            } else if (h === "smoothOrigin") {
                                vt(this, y, "smooth", y.smooth, c);
                                continue
                            } else if (h === "force3D") {
                                y[h] = c;
                                continue
                            } else if (h === "transform") {
                                Fu(this, c, e);
                                continue
                            }
                        } else
                            h in o || (h = Ut(h) || h);
                        if (_ || (u || u === 0) && (f || f === 0) && !_u.test(c) && h in o)
                            v = (d + "").substr((f + "").length),
                            u || (u = 0),
                            b = ve(c) || (h in Ie.units ? Ie.units[h] : v),
                            v !== b && (f = yt(e, h, d, b)),
                            this._pt = new Me(this._pt,_ ? y : o,h,f,(x ? Pt(f, x + u) : u) - f,!_ && (b === "px" || h === "zIndex") && t.autoRound !== !1 ? Su : pr),
                            this._pt.u = b || 0,
                            v !== b && b !== "%" && (this._pt.b = d,
                            this._pt.r = xu);
                        else if (h in o)
                            Ou.call(this, e, h, d, x ? x + c : c);
                        else if (h in e)
                            this.add(e, h, d || e[h], x ? x + c : c, s, r);
                        else if (h !== "parseTransform") {
                            Yi(h, c);
                            continue
                        }
                        _ || (h in o ? k.push(h, 0, o[h]) : k.push(h, 1, d || e[h])),
                        a.push(h)
                    }
                }
            C && ur(this)
        },
        render: function(e, t) {
            if (t.tween._time || !_r())
                for (var n = t._pt; n; )
                    n.r(e, n.d),
                    n = n._next;
            else
                t.styles.revert()
        },
        get: at,
        aliases: et,
        getSetter: function(e, t, n) {
            var s = et[t];
            return s && s.indexOf(",") < 0 && (t = s),
            t in ot && t !== Ae && (e._gsap.x || at(e, "x")) ? n && Sl === n ? t === "scale" ? wu : Cu : (Sl = n || {}) && (t === "scale" ? Mu : Pu) : e.style && !Wi(e.style[t]) ? Eu : ~t.indexOf("-") ? Tu : Ji(e, t)
        },
        core: {
            _removeProperty: At,
            _getMatrix: xr
        }
    };
    Ce.utils.checkPrefix = Ut;
    Ce.core.getStyleSaver = Il;
    (function(i, e, t, n) {
        var s = we(i + "," + e + "," + t, function(r) {
            ot[r] = 1
        });
        we(e, function(r) {
            Ie.units[r] = "deg",
            Rl[r] = 1
        }),
        et[s[13]] = i + "," + e,
        we(n, function(r) {
            var a = r.split(":");
            et[a[1]] = s[a[0]]
        })
    }
    )("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    we("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
        Ie.units[i] = "px"
    });
    Ce.registerPlugin(Sr);
    var xi = Ce.registerPlugin(Sr) || Ce
      , s_ = xi.core.Tween;
    var Er = class {
        constructor(e) {
            this.container = e,
            this.titles = this.container.querySelectorAll(".ascend-hero__title-part"),
            this.buttonContainer = this.container.querySelector(".ascend-hero__buttons"),
            this.subtitle = this.container.querySelector(".ascend-hero__subtitle"),
            this.init()
        }
        init() {
            this.tl = xi.timeline();
            let e = Array.from(this.titles);
            this.tl.to(e, {
                stagger: {
                    each: .5,
                    onStart: function(t) {
                        this.targets()[0].classList.add("ascend-hero__title-part--end")
                    }
                }
            }).to(this.subtitle, {
                delay: .75,
                duration: .75,
                onStart: function(t) {
                    this.targets()[0].classList.add("ascend-hero__title-part--end")
                }
            }).to(this.buttonContainer, {
                delay: .3,
                duration: .75,
                onStart: function(t) {
                    this.targets()[0].classList.add("ascend-hero__title-part--end")
                }
            })
        }
    }
      , Nu = i => ({
        ascendHero: new Er(i)
    })
      , Bl = Nu;
    m();
    var Tr = class {
        constructor(e) {
            this.container = e,
            this.footer = document.querySelector("footer.site-footer"),
            this.hideAtModuleId = this.container.dataset.ascendStickyRegHideAt,
            this.showAt = this.container.dataset.ascendStickyRegShowAt,
            this.closeButton = this.container.querySelector("[data-ascend-sticky-reg-close]"),
            this.addListeners(),
            this.checkScroll()
        }
        addListeners() {
            window.addEventListener("scroll", this.checkScroll.bind(this)),
            window.addEventListener("resize", this.checkScroll.bind(this)),
            this.closeButton && (this.checkPreviouslyClosed(),
            this.closeButton.addEventListener("click", this.close.bind(this)))
        }
        checkPreviouslyClosed() {
            localStorage.getItem("ascend-sticky-reg-closed") === "true" && this.close()
        }
        close() {
            this.container.classList.add("ascend-sticky-reg--closed"),
            localStorage.setItem("ascend-sticky-reg-closed", "true")
        }
        set sticky(e) {
            this._sticky !== e && (e ? this.container.classList.add("ascend-sticky-reg--fixed") : this.container.classList.remove("ascend-sticky-reg--fixed"),
            this._sticky = e)
        }
        get sticky() {
            return this._sticky
        }
        checkVisibleByScrollPosition() {
            let e = window.scrollY || window.pageYOffset
              , t = this.showAt ? parseInt(this.showAt) / 100 : 0
              , n = (document.body.scrollHeight - window.innerHeight) * t;
            return e >= n
        }
        checkVisibleByElementPosition() {
            let e = this.container.getBoundingClientRect()
              , t = window.innerHeight || document.documentElement.clientHeight
              , n = e.top + e.height <= t;
            return this.sticky && (n = this.container.parentElement.getBoundingClientRect().top + e.height <= t),
            n
        }
        checkScroll() {
            this.sticky = this.showAt ? this.checkVisibleByScrollPosition() : this.checkVisibleByElementPosition(),
            this.checkHiddenAndHide()
        }
        checkHiddenAndHide() {
            let e = this.container.getBoundingClientRect()
              , t = [this.footer];
            this.hideAtModuleId && t.push(document.querySelector(`[data-module-id="${this.hideAtModuleId}"]`));
            let n = !1;
            t.forEach(s => {
                if (s) {
                    let r = s.getBoundingClientRect();
                    e.top + e.height > r.top && (n = !0)
                }
            }
            ),
            n || !this.sticky && this.showAt ? this.container.classList.add("ascend-sticky-reg--hidden") : this.container.classList.remove("ascend-sticky-reg--hidden")
        }
    }
      , Bu = i => new Tr(i)
      , ql = Bu;
    m();
    var Cr = class {
        constructor(e, t, n, s) {
            this.container = e,
            this.locale = n,
            this.formShortCode = t,
            this.onLoad = s == null ? void 0 : s.onLoad,
            this.onSuccess = s == null ? void 0 : s.onSuccess,
            this.form = null,
            this.init()
        }
        init() {
            this.loadForm()
        }
        loadForm() {
            fetch(`https://www.aviadrones.com${this.locale && this.locale !== "en-us" ? `/${this.locale.toLowerCase()}` : ""}/forms/${this.formShortCode}`).then(e => {
                e.ok && e.text().then(t => le(this, null, function*() {
                    this.container.innerHTML = t,
                    $i(this.container.querySelector("form")).then(n => {
                        this.form = n,
                        this.onLoad && this.onLoad(),
                        this.loadComplete()
                    }
                    )
                }))
            }
            )
        }
        loadComplete() {
            this.form.onSuccess( (e, t) => {
                this.container.querySelector(".loadable-form__title").style.display = "none",
                this.onSuccess && this.onSuccess()
            }
            )
        }
        destroy() {
            this.container.innerHTML = "",
            this.container = null
        }
    }
      , wr = class {
        constructor() {
            var e;
            this.container = (e = document.querySelector("[data-contact-form-options]")) != null ? e : this.createFormsContainer(),
            this.locale = this.container.dataset.contactFormLocale,
            this.formContainer = this.container.querySelector(".contact-forms__form"),
            this.backContainer = this.container.querySelector(".contact-forms__back"),
            this.backButton = this.backContainer.querySelector("[data-contact-back]"),
            this.options = this.container.querySelector(".contact-forms__options"),
            this.numOptions = this.options.querySelectorAll("[data-contact-form]").length,
            this.currentForm = null,
            this.init()
        }
        init() {
            if (this.addEventListeners(),
            this.numOptions === 1) {
                this.backButton.style.display = "none";
                return
            }
            document.body.appendChild(this.container)
        }
        addEventListeners() {
            this.container.querySelector("[data-contact-close]").addEventListener("click", () => {
                this.hide()
            }
            ),
            this.container.addEventListener("touchmove", function(e) {
                e.target.closest(".contact-forms") || e.preventDefault()
            }, !1),
            this.backButton.addEventListener("click", () => {
                this.showOptions()
            }
            ),
            this.container.querySelectorAll("[data-contact-form]").forEach(e => {
                e.addEventListener("click", () => {
                    this.showContactForm(e.dataset.contactForm)
                }
                )
            }
            )
        }
        createFormsContainer() {
            return _e(`<div class="contact-forms v2">
        <div class="contact-forms__container">
           <div class="contact-forms__close-container">
             <button class="contact-forms__close" data-contact-close>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><g clip-path="url(#plusicon)"><path fill="#fff" fill-rule="evenodd" d="M13.3 9.9V.7h-2v9.2h2Zm-2 3.1H1v-2h10.3a2 2 0 0 1 2 2v10.3h-2V13Zm12.3-2h-9.2v2h9.2v-2Z" clip-rule="evenodd"></path></g><defs><clipPath id="plusicon"><path fill="#fff" d="M.3 0h24v24H.3z"></path></clipPath></defs></svg>
             </button>
           </div>
            <div class="contact-forms__body">
              <div class="contact-forms__options">
               <div class="contact-forms__header">
                  <h2 class="contact-forms__title">What team would you like to contact today?</h2>
               </div>
                <button class="button contact-forms__option" data-contact-form="sales" data-contact-form-id="1363">Sales</button>
                <a href="https://support.aviadrones.com" class="button contact-forms__option">Support</a>
                <button class="button contact-forms__option" data-contact-form="partner" data-contact-form-id="1364">Tech Partnership</button>
                <button class="button contact-forms__option" data-contact-form="reseller" data-contact-form-id="1369">Reseller</button>
                <button class="button contact-forms__option" data-contact-form="press" data-contact-form-id="1368">Press</button>
              </div>
              <div class="contact-forms__form">
              </div>
              <div class="contact-forms__back Aviadrones.-form">
                 <button class="button button--transparent contact-forms__back-button" data-contact-back>Back</button>
              </div>
            </div>
        </div>
      </div>`)
        }
        showContactForm(e) {
            if (this.formContainer.innerHTML = "",
            !this.options.querySelector(`[data-contact-form="${e}"]`))
                if (this.numOptions === 1)
                    e = this.options.querySelector("[data-contact-form]").dataset.contactForm;
                else {
                    this.showOptions();
                    return
                }
            this.currentForm = new Cr(this.formContainer,e,this.locale,{
                onLoad: this.formLoaded.bind(this),
                onSuccess: this.formPosted.bind(this)
            }),
            this.showForm()
        }
        formLoaded() {
            this.backContainer.classList.add("contact-forms__back--visible")
        }
        formPosted() {
            this.backContainer.classList.remove("contact-forms__back--visible")
        }
        showOptions() {
            this.options.classList.remove("contact-forms__options--hidden"),
            this.formContainer.classList.remove("contact-forms__form--visible"),
            this.backContainer.classList.remove("contact-forms__back--visible"),
            this.currentForm && (this.currentForm.destroy(),
            this.currentForm = null)
        }
        showForm() {
            this.options.classList.add("contact-forms__options--hidden"),
            this.formContainer.classList.add("contact-forms__form--visible")
        }
        get open() {
            return this.container.classList.contains("contact-forms--open")
        }
        set open(e) {
            e ? (window.innerWidth < 1024 && document.body.classList.add("no-scroll"),
            this.container.classList.add("contact-forms--open")) : (document.body.classList.remove("no-scroll"),
            this.container.classList.remove("contact-forms--open"),
            this.showOptions())
        }
        show(e) {
            this.numOptions === 1 && (e = this.options.querySelector("[data-contact-form]").dataset.contactForm),
            e !== "all" && (this.options.classList.add("contact-forms--noanimation"),
            this.showContactForm(e),
            window.requestAnimationFrame( () => {
                this.options.classList.remove("contact-forms--noanimation")
            }
            )),
            this.open = !0
        }
        hide() {
            this.open = !1
        }
    }
      , Vl = new wr
      , Hl = () => {
        document.querySelectorAll("[data-contact]").forEach(n => {
            n.addEventListener("click", s => {
                Vl.show(n.dataset.contact),
                s.preventDefault(),
                s.stopPropagation()
            }
            )
        }
        );
        let e = new URLSearchParams(window.location.search)
          , t = e.get("chat") === "sales" ? "all" : e.get("chat");
        e.get("contact") && (t = e.get("contact")),
        t && Vl.show(t)
    }
    ;
    m();
    var Mr = class {
        constructor(e) {
            this.animatedElement = e,
            this.textContent = this.animatedElement.textContent,
            this.originalTextContent = this.textContent,
            this.range = document.createRange(),
            this.lines = [],
            this.lineCharacters = [],
            this.animationDelay = parseInt(e.dataset.animationDelay),
            this.animationDuration = parseInt(e.dataset.animationDuration),
            this.addListeners(),
            this.init()
        }
        addListeners() {
            window.addEventListener("resize", () => {
                this.isVisible(this.animatedElement) && this.restoreOriginalText()
            }
            )
        }
        isVisible(e) {
            let {top: t, bottom: n} = e.getBoundingClientRect()
              , s = window.innerHeight || document.documentElement.clientHeight;
            return (t > 0 || n > 0) && t < s
        }
        restoreOriginalText() {
            this.animatedElement.textContent = this.originalTextContent
        }
        init() {
            this.animatedElement.innerHTML = this.animatedElement.textContent.replace(/<br>/g, "");
            for (let t = 0; t < this.textContent.length; t++) {
                this.range.setStart(this.animatedElement.firstChild, 0),
                this.range.setEnd(this.animatedElement.firstChild, t + 1);
                let n = this.range.getClientRects().length - 1;
                this.lines[n] || this.lines.push(this.lineCharacters = []),
                this.lineCharacters.push(this.textContent.charAt(t))
            }
            this.lines = this.lines.map(t => t.join("")),
            this.animatedElement.textContent = "";
            let e = this.animationDelay;
            this.lines.forEach(t => {
                let n = document.createElement("span")
                  , s = document.createElement("span");
                n.classList.add("outer"),
                s.classList.add("inner"),
                s.style.transitionDuration = `${this.animationDuration}ms`,
                s.textContent = t,
                n.append(s),
                this.animatedElement.append(n),
                setTimeout( () => {
                    s.classList.add("initialize-animation")
                }
                , e),
                e = e + this.animationDelay
            }
            ),
            this.animatedElement.style.opacity = 1
        }
    }
      , qu = i => new Mr(i)
      , Gl = qu;
    m();
    var Pr = class {
        constructor(e) {
            this.container = e,
            this.init()
        }
        init() {
            this.loadFormPromise = new Promise( (e, t) => {
                document.addEventListener("marketoFormLoaded", n => {
                    e(n.detail)
                }
                )
            }
            ),
            this.fetchUserData().then(e => le(this, null, function*() {
                return this.userData = e,
                this.loadFormPromise
            })).then(e => this.initForm(e)).catch(e => {
                window.location.href = "/"
            }
            )
        }
        initForm(e) {
            return le(this, null, function*() {
                this.userData || (this.userData = {
                    email: this.email,
                    id: this.id
                }),
                this.populateForm(e, this.userData);
                let t = this.container.querySelector('input[name="Unsubscribed"]');
                t.addEventListener("change", () => {
                    t.checked && this.container.querySelectorAll('input[type="checkbox"]').forEach(s => {
                        s.name !== "Unsubscribed" && (s.checked = !1)
                    }
                    )
                }
                );
                let n = this.container.querySelectorAll('input[type="checkbox"]');
                n.forEach(s => {
                    s.addEventListener("change", () => {
                        s.checked && s.name !== "Unsubscribed" ? t.checked = !1 : n.some(r => r.checked) || (t.checked = !0)
                    }
                    )
                }
                ),
                this.container.querySelector('input[name="Email"]').setAttribute("readonly", "true")
            })
        }
        populateForm(e, t) {
            let n = G({}, t);
            n.Email = t.email,
            delete n.email,
            n.FirstName = t.firstName,
            delete n.firstName,
            n.LastName = t.lastName,
            delete n.lastName,
            e.setValues(n),
            e.validate()
        }
        fetchUserData() {
            return le(this, null, function*() {
                let e = new URLSearchParams(window.location.search)
                  , t = e.get("email")
                  , n = e.get("id")
                  , s = document.documentElement.lang;
                if (!t || !n)
                    return;
                this.email = t,
                this.id = n;
                let r = JSON.stringify({
                    id: n,
                    email: t,
                    locale: s
                });
                return (yield(yield fetch("/.netlify/functions/fetch-subscriptions", {
                    method: "POST",
                    body: r
                })).json()).lead
            })
        }
    }
      , Wl = i => new Pr(i);
    m();
    var {debounce: Vu} = (xs(),
    Nr(bs))
      , kr = class {
        constructor(e, t) {
            this.container = t,
            this.element = e,
            this.image = this.element.querySelector(".Aviadrones.-image-wrapper"),
            this.image && (this.checkImagePosition(),
            window.addEventListener("resize", Vu(this.checkImagePosition.bind(this), 500)))
        }
        checkImagePosition() {
            this.image.style.right && (this.image.style.right = "0");
            let e = this.container.getBoundingClientRect()
              , t = 8
              , n = this.image.getBoundingClientRect();
            n.right > e.right - t && (this.image.style.right = n.right - e.right + t + "px")
        }
    }
      , Lr = class {
        constructor(e) {
            this.container = e,
            this.items = Array.from(this.container.querySelectorAll(".text-hover-wall__item")).map(t => new kr(t,this.container)),
            this.container.classList.remove("text-hover-wall--initial")
        }
    }
      , Hu = i => ({
        textHoverWall: new Lr(i)
    })
      , Yl = Hu;
    var ei = (i, e=!1) => {
        [{
            componentFunction: xo,
            selector: "[data-sketchfab]"
        }, {
            componentFunction: oo,
            selector: "[data-footer]"
        }, {
            componentFunction: To
        }, {
            componentFunction: so,
            selector: "[data-flex-carousel]"
        }, {
            componentFunction: Xr,
            selector: "[data-bg-image]",
            intersectionObserver: {
                threshold: 0
            }
        }, {
            componentFunction: lo,
            selector: "[data-job-listings]"
        }, {
            componentFunction: Pi,
            selector: "[data-responsive-slider]"
        }, {
            componentFunction: me,
            selector: "[data-video-player]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 600px 0px"
            }
        }, {
            componentFunction: eo,
            selector: "[data-collapsible]"
        }, {
            componentFunction: Qa,
            selector: "[data-cs]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 200px 0px"
            }
        }, {
            componentFunction: yo,
            selector: "[data-simple-image-carousel]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 200px 0px"
            }
        }, {
            componentFunction: ao,
            selector: "[data-ig]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 200px 0px"
            }
        }, {
            componentFunction: co,
            selector: "[data-newsroom]"
        }, {
            componentFunction: Eo,
            selector: "[data-video-modal]"
        }, {
            componentFunction: Br,
            selector: "[data-category-nav]"
        }, {
            componentFunction: vo,
            selector: "[data-sn]"
        }, {
            componentFunction: mo
        }, {
            componentFunction: Co,
            selector: "[data-three-sixty-embed]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "1000px 0px 1000px 0px"
            }
        }, {
            componentFunction: io,
            selector: "[data-countdown-timer]"
        }, {
            componentFunction: So,
            selector: "[data-video-module]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "200px 0px 200px 0px"
            }
        }, {
            componentFunction: ho,
            selector: "[data-pcs]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "200px 0px 200px 0px"
            }
        }, {
            componentFunction: to,
            selector: "[data-cm]"
        }, {
            componentFunction: qr,
            selector: "[data-social-copy]"
        }, {
            componentFunction: Vr
        }, {
            componentFunction: _s
        }, {
            componentFunction: Wl,
            selector: "[data-subscription-management]"
        }, {
            componentFunction: $i,
            selector: "[data-marketo-form]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: `0px 0px ${window.innerHeight * 3}px 0px`
            }
        }, {
            componentFunction: go,
            selector: "[data-pullquote-carousel]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 600px 0px"
            }
        }, {
            componentFunction: jr
        }, {
            componentFunction: Hl
        }, {
            componentFunction: Bl,
            selector: "[data-ascend-hero]"
        }, {
            componentFunction: Gl,
            selector: "[data-animated-headline]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "200px 0px"
            }
        }, {
            componentFunction: ql,
            selector: "[data-ascend-sticky-reg]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "10000px 0px 300px 0px"
            }
        }, {
            componentFunction: Yr,
            selector: "[data-app-card]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 300px 0px"
            }
        }, {
            componentFunction: wo,
            selector: "[data-basic-gallery]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 300px 0px"
            }
        }, {
            componentFunction: n => Mo(n, be),
            selector: "[data-drift]"
        }, {
            componentFunction: ko,
            selector: "[data-button-drop-content]"
        }, {
            componentFunction: Po,
            selector: "[data-drop-content-module]"
        }, {
            componentFunction: Lo,
            selector: "[data-variable-content-carousel]"
        }, {
            componentFunction: Oo,
            selector: "[data-timed-video-and-text-hero]"
        }, {
            componentFunction: Io,
            selector: "[data-x10-hero]"
        }, {
            componentFunction: Yl,
            selector: "[data-text-hover-wall]",
            intersectionObserver: {
                threshold: 0,
                rootMargin: "0px 0px 0px 0px"
            }
        }, {
            componentFunction: $o,
            selector: "[data-animate-text-delay]"
        }].forEach(n => {
            if (i.jsModules = i.jsModules || [],
            !n.selector && !e) {
                let r = n.componentFunction({
                    parent: i
                });
                r && i.jsModules.push(r);
                return
            }
            i.querySelectorAll(n.selector).forEach(r => {
                var a, o;
                if (n.intersectionObserver) {
                    let l = null;
                    l = new IntersectionObserver(d => {
                        let c = !1;
                        d.forEach(u => {
                            c || u.intersectionRatio > 0 && (i.jsModules.push(n.componentFunction(r, {
                                parent: i
                            })),
                            l.unobserve(r),
                            c = !0)
                        }
                        )
                    }
                    ,{
                        root: null,
                        rootMargin: (a = n.intersectionObserver.rootMargin) != null ? a : "0px",
                        threshold: (o = n.intersectionObserver.threshold) != null ? o : 0
                    }),
                    l.observe(r)
                } else
                    i.jsModules.push(n.componentFunction(r, {
                        parent: i
                    }))
            }
            )
        }
        ),
        window.addEventListener("keypress", no)
    }
    ;
    window._initializeComponents = ei;
    m();
    m();
    m();
    m();
    var We = class {
        constructor(e) {
            !e || (this.container = e,
            this.events = [],
            this.mouseOver = !1,
            this._addEventListeners())
        }
        _createEventListener(e, t) {
            this.events[t != null ? t : e] = [],
            this.container.addEventListener(e, n => this.callEvents(t != null ? t : e, n))
        }
        _addEventListeners() {
            this._createEventListener("mouseover"),
            this._createEventListener("mouseout"),
            this._createEventListener("keydown", "itemselected")
        }
        fireAllEvents(e) {
            this.events[e].forEach(t => t(this))
        }
        callEvents(e, t) {
            switch (e) {
            case "mouseover":
                this.mouseOver = !0;
                break;
            case "mouseout":
                this.mouseOver = !1;
                break;
            case "itemselected":
                this.mouseOver = t.keyCode === 32 || t.keyCode === 13;
                break;
            default:
                break
            }
            this.fireAllEvents(e)
        }
        on(e, t) {
            this.events[e] || this._createEventListener(e),
            this.events[e].push(t)
        }
    }
    ;
    m();
    m();
    m();
    var Qi = class extends We {
        constructor(e, t) {
            super(e),
            this.container = e,
            this.options = t,
            this.init()
        }
        init() {
            this.container.querySelector(".sub-nav__link-inner") || (this.container.innerHTML = `<span class="sub-nav__link-inner"><span class="sub-nav__link-text">${this.container.innerHTML}</span></span>`,
            this.hide())
        }
        get animating() {
            return this.container.classList.contains("sub-nav__link--animate")
        }
        set animating(e) {
            e ? this.container.classList.add("sub-nav__link--animate") : this.container.classList.remove("sub-nav__link--animate")
        }
        show() {
            this.container.classList.remove("sub-nav__link--initial")
        }
        hide() {
            this.container.classList.add("sub-nav__link--initial"),
            this.animating = !1
        }
    }
    ;
    var Si = class {
        constructor(e, t={
            animDuration: .8
        }) {
            this.container = e,
            this.menuItems = Array.from(this.container.querySelectorAll(".sub-nav__link")).map(n => new Qi(n,t)),
            this.columns = Array.from(this.container.querySelectorAll(".sub-nav__column")),
            this.columns.length === 0 && (this.columns = [this.container])
        }
        show() {
            if (this.menuItems.length === 0) {
                this.columns.forEach(t => t.classList.remove("sub-nav__column--initial"));
                return
            }
            let e = .3 / this.menuItems.length;
            this.tl = xi.timeline({
                stagger: e
            }),
            this.tl.to(this.menuItems, {
                delay: .3,
                stagger: {
                    each: e,
                    duration: .3,
                    ease: "power2.inOut",
                    onComplete: function(t) {
                        this.targets()[0].animating = !1
                    },
                    onStart: function(t) {
                        this.targets()[0].show()
                    }
                },
                onStart: () => {
                    this.columns.forEach(t => t.classList.remove("sub-nav__column--initial"))
                }
            })
        }
        hide() {
            this.tl && (this.tl.pause(),
            this.tl.seek(0)),
            this.menuItems.forEach(e => e.hide()),
            this.columns.forEach(e => e.classList.add("sub-nav__column--initial"))
        }
    }
    ;
    var en = class extends We {
        constructor(e) {
            super(e),
            this.key = this.container.dataset.subNav,
            this.container = e,
            this.items = Array.from(this.container.querySelectorAll("[data-sub-nav-item]")),
            this.animationColumns = Array.from(this.container.querySelectorAll("[data-sub-nav-column]")).map(t => new Si(t)),
            this.animation = new Si(this.container),
            this.media = [],
            this.visible = !1,
            this.init()
        }
        init() {
            this.container.querySelectorAll("[data-button-video-pid]").forEach(e => {
                try {
                    this.media.push(new ti(e))
                } catch (t) {
                    console.error(t)
                }
            }
            )
        }
        get isMobile() {
            return window.innerWidth < 1280
        }
        show() {
            this.isMobile ? this.animation.show() : this.animationColumns.forEach(e => e.show()),
            this.container.classList.remove("sub-nav--initial"),
            this.visible = !0
        }
        hide() {
            !this.visible || (this.isMobile ? this.animation.hide() : this.animationColumns.forEach(e => e.hide()),
            this.container.classList.add("sub-nav--initial"),
            this.visible = !1)
        }
    }
    ;
    var tn = class extends We {
        constructor(e, t={}) {
            super(e),
            this.container = e,
            this.callbacks = t,
            this.subNavigationGroups = Array.from(this.container.querySelectorAll("[data-sub-nav]")).map(n => new en(n)),
            this.current = null,
            this.init()
        }
        get open() {
            return this.current !== null
        }
        init() {
            this.callbacks.mouseOver && this.on("mouseenter", () => this.callbacks.mouseOver()),
            this.callbacks.mouseOut && this.on("mouseleave", () => this.callbacks.mouseOut())
        }
        set maxHeight(e) {
            this._maxHeight = e
        }
        get maxHeight() {
            return this._maxHeight
        }
        set height(e) {
            e > 0 && this.maxHeight && window.innerWidth < 1280 && (e = this.maxHeight),
            this.container.style.setProperty("--sub-nav-height", `${e}px`)
        }
        updateHeight() {
            this.current && (this.height = this.current.container.offsetHeight)
        }
        show(e) {
            var t;
            if (!this.current || this.current.key !== e) {
                let n = this.subNavigationGroups.filter(s => s.key === e).pop();
                n == null || n.show(),
                (t = this.current) == null || t.hide(),
                this.current = n
            }
            this.updateHeight()
        }
        hide(e) {
            var t;
            (t = this.current) == null || t.hide(),
            this.height = 0,
            this.current = null
        }
    }
    ;
    m();
    var nn = class extends We {
        constructor(e, t={}) {
            super(e),
            this.key = this.container.dataset.navButton,
            this.callbacks = t
        }
        init() {
            this.on("click", () => this.callbacks.show(this.key))
        }
        set active(e) {
            this._active = e
        }
        get active() {
            return this._active
        }
    }
    ;
    m();
    var sn = class extends We {
        constructor(e, t) {
            super(e),
            this.container = e,
            this.callbacks = t,
            this.key = this.container.dataset.navButton,
            this.visible = !1,
            this.active = !1,
            this.mouseMoved = !1,
            this.mouseTimeout = null,
            this.init()
        }
        init() {
            this.on("mouseover", () => {
                this.mouseTimeout = setTimeout( () => {
                    this.mouseMoved = !0,
                    setTimeout( () => {
                        this.mouseMoved = !1
                    }
                    , 100),
                    this.show()
                }
                , 150)
            }
            ),
            this.on("mouseout", () => {
                this.mouseTimeout && (clearTimeout(this.mouseTimeout),
                this.mouseTimeout = null),
                this.active && this.hide()
            }
            ),
            this.on("click", e => {
                if (this.mouseMoved && this.active) {
                    e.preventDefault(),
                    this.mouseMoved = !1;
                    return
                }
                this.active ? this.hide() : this.show()
            }
            )
        }
        show() {
            this.callbacks.show && this.callbacks.show(this.key)
        }
        hide() {
            this.callbacks.hide && this.callbacks.hide(this.key)
        }
        set active(e) {
            e !== this._active && (e ? (this.container.classList.add("nav__button--selected"),
            this.visible = !0) : (this.container.classList.remove("nav__button--selected"),
            this.visible = !1),
            this._active = e)
        }
        get active() {
            return this._active
        }
    }
    ;
    var rn = class {
        constructor(e) {
            this.container = e,
            this.modes = {
                MOBILE: "mobile",
                DESKTOP: "desktop"
            },
            this.mode = this.modes.DESKTOP,
            this.subNavigationContainer = this.container.querySelector("[data-sub-nav-container]"),
            this.navigationItems = {},
            this.mobileNavigationItems = {},
            this.subNavigation = null,
            this.init()
        }
        init() {
            Array.from(this.container.querySelectorAll("[data-nav] [data-nav-button]")).forEach(e => this.addNavigationItem(e)),
            Array.from(this.subNavigationContainer.querySelectorAll("[data-nav-button]")).forEach(e => this.addMobileNavigationItem(e)),
            this.subNavigation = new tn(this.subNavigationContainer,{
                mouseOver: e => this.mode === this.modes.DESKTOP ? this.show(e) : null,
                mouseOut: e => this.mode === this.modes.DESKTOP ? this.hide(e) : null
            }),
            Array.from(this.subNavigationContainer.querySelectorAll("[data-sub-nav-mobile-back]")).forEach(e => {
                e.addEventListener("click", () => this.show("main"))
            }
            ),
            this.adjustForDeviceWidth(),
            window.addEventListener("resize", () => this.adjustForDeviceWidth()),
            document.addEventListener("keydown", e => {
                (e.key === "Escape" || e.keyCode === 27) && this.subNavigation.hide()
            }
            )
        }
        addMobileNavigationItem(e) {
            let t = new nn(e,{
                show: n => this.show(n),
                hide: n => this.hide(n)
            });
            this.mobileNavigationItems[e.dataset.navButton] = t,
            t.on("click", () => this.show(e.dataset.navButton))
        }
        addNavigationItem(e) {
            this.navigationItems[e.dataset.navButton] = new sn(e,{
                show: t => this.show(t),
                hide: t => this.hide(t)
            })
        }
        show(e) {
            var t;
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = null),
            e && (this.navigationItems[(t = this.subNavigation.current) == null ? void 0 : t.key] && (this.navigationItems[this.subNavigation.current.key].active = !1),
            this.navigationItems[e] && (this.navigationItems[e].active = !0),
            this.subNavigation.show(e))
        }
        set maxSubNavHeight(e) {
            this.subNavigation.maxHeight = e
        }
        get maxSubNavHeight() {
            return this.subNavigation.maxHeight
        }
        hideSubNavigation() {
            Object.keys(this.navigationItems).forEach(e => {
                this.navigationItems[e].active = !1
            }
            ),
            this.subNavigation.hide()
        }
        hideDesktop() {
            this.timeout = setTimeout( () => {
                this.hideSubNavigation(),
                this.timeout = null
            }
            , 300)
        }
        hideMobile() {
            this.hideSubNavigation()
        }
        hide() {
            this.mode === this.modes.DESKTOP ? this.hideDesktop() : this.hideMobile()
        }
        adjustForDeviceWidth() {
            let e = this.mode;
            this.mode = window.innerWidth < 1280 ? this.modes.MOBILE : this.modes.DESKTOP,
            e !== this.mode && this.hide()
        }
    }
    ;
    m();
    m();
    var Jt = class {
        constructor(e) {
            this.container = e,
            this.initEventListeners()
        }
        setLocaleCookie(e) {
            let t = new Date;
            t.setTime(t.getTime() + 30 * 24 * 60 * 60 * 1e3);
            let n = "expires=" + t.toUTCString();
            document.cookie = "locale=" + e + ";" + n + ";path=/"
        }
        initEventListeners() {
            var e;
            (e = this.container) == null || e.querySelectorAll("a").forEach(t => {
                t.addEventListener("click", () => (this.setLocaleCookie(t.dataset.lsLang),
                window.location.reload(),
                !1))
            }
            )
        }
    }
    ;
    var an = class {
        constructor(e, t) {
            this.buttonElement = e,
            this.switcherElement = t,
            this.timeout = null,
            this.init()
        }
        init() {
            this.buttonElement.addEventListener("click", () => this.toggle()),
            this.buttonElement.addEventListener("keydown", e => {
                e.keyCode === 13 && this.toggle()
            }
            ),
            this.buttonElement.addEventListener("mouseenter", () => this.show()),
            this.buttonElement.addEventListener("mouseleave", () => this.hide()),
            this.switcherElement.addEventListener("mouseenter", () => this.show()),
            this.switcherElement.addEventListener("mouseleave", () => this.hide()),
            this.lang = new Jt(this.switcherElement)
        }
        toggle() {
            this.switcherElement.classList.contains("locale-switcher--active") ? this.hide() : this.show()
        }
        show() {
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = null),
            this.switcherElement.classList.add("locale-switcher--active")
        }
        hide() {
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = null),
            this.switcherElement.classList.remove("locale-switcher--active")
        }
    }
    ;
    m();
    var Xl = "Aviadrones.-banner"
      , on = class {
        constructor(e, t) {
            this.container = e,
            this.header = t,
            this.bannerCleared = St.get(Xl) === "true",
            this.addEventListeners(),
            this.calculateHeaderPosition()
        }
        set bannerCleared(e) {
            e ? this.container.classList.add("hidden") : this.container.classList.remove("hidden"),
            St.set(Xl, e === !0 ? "true" : null),
            this._bannerCleared = e
        }
        get bannerCleared() {
            return this._bannerCleared
        }
        addEventListeners() {
            var e;
            this.bannerCleared || (window.addEventListener("scroll", () => this.calculateHeaderPosition()),
            (e = document.querySelector(".announcement-banner__dismiss")) == null || e.addEventListener("click", () => {
                this.bannerCleared = !0,
                this.calculateHeaderPosition()
            }
            ),
            window.addEventListener("resize", () => this.calculateHeaderPosition()))
        }
        get height() {
            return this.container.offsetHeight
        }
        set headerPos(e) {
            if (this._headerPos !== e) {
                this._headerPos = e;
                let t = new CustomEvent("headerOffsetChange",{
                    detail: {
                        offset: this._headerPos,
                        offsetName: "announcementBanner"
                    }
                });
                document.dispatchEvent(t)
            }
        }
        get headerPos() {
            return this._headerPos
        }
        calculateHeaderPosition() {
            let e = this.height - window.scrollY
              , t = window.getComputedStyle(this.header)
              , n = parseInt(t.marginBottom);
            e >= 0 ? this.header.style.marginTop = n + this.height + "px" : this.headerPos !== 0 && (this.header.style.marginTop = n + "px")
        }
    }
    ;
    var ln = class {
        constructor(e) {
            this.container = e,
            this.analytics = new Nt(e,"header","a,button"),
            this.navigation = new rn(e),
            this.mobileMenuButton = this.container.querySelector("[data-mobile-menu-button]"),
            this.logo = e.querySelector("[data-logo]"),
            this.offsets = {},
            this.events = {
                offsetChange: [],
                heightChange: []
            },
            this.mobileLanguages = new Jt(e.querySelector("[data-mobile-lang]")),
            this.init(),
            this.updateHeaderSize()
        }
        init() {
            let e = document.getElementById("announcement-banner");
            e && (this.announcementBanner = new on(e,this.container));
            let t = this.container.querySelector("[data-locale-button]")
              , n = this.container.querySelector("[data-locale-switcher]");
            t && n && (this.languageSwitcher = new an(t,n)),
            this.mobileMenuButton.addEventListener("click", () => this.toggleMobileMenu()),
            window.addEventListener("resize", () => this.adjustForDeviceWidth()),
            window.addEventListener("resize", () => this.updateHeaderSize()),
            this.adjustForDeviceWidth()
        }
        callEvent(e, ...t) {
            this.events[e] && this.events[e].forEach(n => n(...t))
        }
        setBodyProperty(e, t, n) {
            document.body.style.getPropertyValue(e) !== t && (document.body.style.setProperty(e, t),
            n())
        }
        headerOffsetChange(e, t) {
            this.offsets[e] = t,
            this.updateOffset()
        }
        get offsetHeight() {
            return this.container.offsetHeight + this.container.offsetTop + 16
        }
        setHeightOnBody() {
            this.setBodyProperty("--header-height", `${this.offsetHeight}px`, () => {
                this.callEvent("heightChange", this.container.offsetHeight)
            }
            )
        }
        updateHeaderSize() {
            this.setHeightOnBody()
        }
        updateOffset() {
            this.top = Object.values(this.offsets).reduce( (e, t) => e + t, 0)
        }
        getAvailableSubNavHeight() {
            let e = this.logo.getBoundingClientRect()
              , t = getComputedStyle(this.container)
              , n = t.getPropertyValue("--header-padding")
              , s = t.getPropertyValue("--header-margin");
            return window.innerHeight - (e.top + e.height + parseInt(n, 10) + parseInt(s, 10))
        }
        set mobileMenuOpen(e) {
            e ? (this.navigation.show("main"),
            this.container.classList.add("header--mobile"),
            document.body.classList.add("no-scroll")) : (this.navigation.hide(),
            this.container.classList.remove("header--mobile"),
            document.body.classList.remove("no-scroll")),
            this._mobileMenuOpen = e
        }
        get mobileMenuOpen() {
            return this._mobileMenuOpen
        }
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        }
        adjustForDeviceWidth() {
            this.mobileMenuOpen && window.innerWidth >= 1280 ? (this.mobileMenuOpen = !1,
            this.navigation.maxSubNavHeight = null) : this.navigation.maxSubNavHeight = this.getAvailableSubNavHeight()
        }
    }
    ;
    m();
    var Gu = (i, e) => {
        let t = ee(G({
            overlayOpacity: .5,
            maxWidth: "800px",
            animation: "fade",
            containerSize: "small",
            layout: "large",
            style: "dark",
            overlayBlur: 30,
            track: !1
        }, e), {
            loadImmediately: !0
        });
        return new be(i,t)
    }
    ;
    window.createPopup = Gu;
    window.addEventListener("load", () => {
        if (ei(document),
        window.dispatchEvent(new CustomEvent("jsModulesInitialized")),
        window.location.hash.length > 0) {
            let i = document.querySelector(window.location.hash);
            i && window.requestAnimationFrame( () => {
                window.scrollTo(0, i.offsetTop)
            }
            )
        }
    }
    );
    window.addEventListener("DOMContentLoaded", () => {
        let i = new ln(document.querySelector("[data-header]"))
    }
    );
}
)();
/*
 * @author Sanford Whiteman
 * @version v1.104
 * @license MIT License: This license must appear with all reproductions of this software.
 *
 * Create a completely barebones, user-styles-only Marketo form
 * by removing inline STYLE attributes and disabling STYLE and LINK elements
 */
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/*! js-cookie v3.0.5 | MIT */
//# sourceMappingURL=global.js.map
