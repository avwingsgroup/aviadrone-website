( () => {
    var Yn = Object.defineProperty
      , Wn = Object.defineProperties;
    var Xn = Object.getOwnPropertyDescriptors;
    var rr = Object.getOwnPropertySymbols;
    var Gn = Object.prototype.hasOwnProperty
      , jn = Object.prototype.propertyIsEnumerable;
    var nr = (a, t, e) => t in a ? Yn(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : a[t] = e
      , ht = (a, t) => {
        for (var e in t || (t = {}))
            Gn.call(t, e) && nr(a, e, t[e]);
        if (rr)
            for (var e of rr(t))
                jn.call(t, e) && nr(a, e, t[e]);
        return a
    }
      , bt = (a, t) => Wn(a, Xn(t));
    var I = (a, t) => () => (a && (t = a(a = 0)),
    t);
    var Jn = (a, t) => () => (t || a((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Pt = (a, t, e) => new Promise( (i, r) => {
        var n = l => {
            try {
                o(e.next(l))
            } catch (u) {
                r(u)
            }
        }
          , s = l => {
            try {
                o(e.throw(l))
            } catch (u) {
                r(u)
            }
        }
          , o = l => l.done ? i(l.value) : Promise.resolve(l.value).then(n, s);
        o((e = e.apply(a, t)).next())
    }
    );
    var E = I( () => {}
    );
    var $n, sr, or = I( () => {
        E();
        $n = (a, t) => {
            let r = !1
              , n = null
              , s = () => {
                let g = document.querySelector("header.header[data-header]")
                  , v = g.getBoundingClientRect();
                return window.innerWidth / 2 - v.width / 2 + parseInt(window.getComputedStyle(g).paddingRight) - 24 + 4
            }
              , o = () => {
                let g = document.querySelector("div.ascend-sticky-reg")
                  , v = document.querySelector("div.ascend-sticky-reg .container");
                return !g || !g.classList.contains("ascend-sticky-reg--fixed") ? 34 : v.getBoundingClientRect().height + 34
            }
              , l = () => {
                !window.drift || !r || window.drift.config({
                    verticalOffset: o(),
                    horizontalOffset: s()
                })
            }
              , u = () => {
                n || (n = window.requestAnimationFrame( () => {
                    _(),
                    l(),
                    n = null
                }
                ))
            }
              , h = () => Pt(void 0, null, function*() {
                return new Promise( (g, v) => {
                    (function() {
                        let y = window.driftt = window.drift = window.driftt || [];
                        if (!y.init) {
                            if (y.invoked)
                                return void (window.console && console.error && console.error("Drift snippet included twice."));
                            y.invoked = !0,
                            y.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
                            y.factory = function(x) {
                                return function() {
                                    let w = Array.prototype.slice.call(arguments);
                                    return w.unshift(x),
                                    y.push(w),
                                    y
                                }
                            }
                            ,
                            y.methods.forEach(function(x) {
                                y[x] = y.factory(x)
                            }),
                            y.load = function(x) {
                                let S = Math.ceil(new Date / 3e5) * 3e5
                                  , T = document.createElement("script");
                                T.type = "text/javascript",
                                T.async = !0,
                                T.crossorigin = "anonymous",
                                T.src = "https://js.driftt.com/include/" + S + "/" + x + ".js";
                                let k = document.getElementsByTagName("script")[0];
                                k.parentNode.insertBefore(T, k)
                            }
                        }
                    }
                    )(),
                    drift.SNIPPET_VERSION = "0.3.1",
                    drift.load("vhhacgucu259"),
                    drift.on("ready", y => {
                        g(y)
                    }
                    )
                }
                )
            })
              , d = () => {
                window.drift.on("chatClose", () => {
                    r = !1,
                    window.drift.api.widget.hide()
                }
                ),
                window.drift.api.startInteraction({
                    interactionId: 359995
                }),
                window.drift.api.widget.show(),
                r = !0,
                l()
            }
              , f = null
              , _ = () => {
                if (!f)
                    return;
                let g = 12;
                f.style.bottom = `${o() + 8}px`,
                f.style.right = s() + g + "px"
            }
              , m = () => {
                f = document.body.appendChild(document.createElement("div")),
                _(),
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
              , c = () => {
                !f || f.remove()
            }
            ;
            return ( () => {
                a.addEventListener("click", g => {
                    if (window.drift && checkCookiePreference("targeting"))
                        d();
                    else if (!window.drift && checkCookiePreference("targeting"))
                        m(),
                        h().then(v => {
                            window.dataLayer.push({
                                event: "drift-active"
                            }),
                            c(),
                            d()
                        }
                        );
                    else if (a.dataset.popupOptions && t) {
                        let v = JSON.parse(a.dataset.popupOptions);
                        new t(a.dataset.driftPopup,bt(ht({}, v), {
                            onLoad: y => {
                                y.show()
                            }
                        }))
                    } else
                        return;
                    return g.preventDefault(),
                    !1
                }
                ),
                window.addEventListener("scroll", () => u()),
                window.addEventListener("resize", () => u())
            }
            )(),
            {
                element: a
            }
        }
        ,
        sr = $n
    }
    );
    
    var ct, Qt = I( () => {
        E();
        ct = class {
            constructor(t) {
                !t || (this.container = t,
                this.events = [],
                this.mouseOver = !1,
                this._addEventListeners())
            }
            _createEventListener(t, e) {
                this.events[e != null ? e : t] = [],
                this.container.addEventListener(t, i => this.callEvents(e != null ? e : t, i))
            }
            _addEventListeners() {
                this._createEventListener("mouseover"),
                this._createEventListener("mouseout"),
                this._createEventListener("keydown", "itemselected")
            }
            fireAllEvents(t) {
                this.events[t].forEach(e => e(this))
            }
            callEvents(t, e) {
                switch (t) {
                case "mouseover":
                    this.mouseOver = !0;
                    break;
                case "mouseout":
                    this.mouseOver = !1;
                    break;
                case "itemselected":
                    this.mouseOver = e.keyCode === 32 || e.keyCode === 13;
                    break;
                default:
                    break
                }
                this.fireAllEvents(t)
            }
            on(t, e) {
                this.events[t] || this._createEventListener(t),
                this.events[t].push(e)
            }
        }
    }
    );
    var Ce, lr = I( () => {
        E();
        Qt();
        Ce = class extends ct {
            constructor(t, e) {
                super(t),
                this.container = t,
                this.options = e,
                this.init()
            }
            init() {
                this.container.querySelector(".sub-nav__link-inner") || (this.container.innerHTML = `<span class="sub-nav__link-inner"><span class="sub-nav__link-text">${this.container.innerHTML}</span></span>`,
                this.hide())
            }
            get animating() {
                return this.container.classList.contains("sub-nav__link--animate")
            }
            set animating(t) {
                t ? this.container.classList.add("sub-nav__link--animate") : this.container.classList.remove("sub-nav__link--animate")
            }
            show() {
                this.container.classList.remove("sub-nav__link--initial")
            }
            hide() {
                this.container.classList.add("sub-nav__link--initial"),
                this.animating = !1
            }
        }
    }
    );
    function Tt(a) {
        if (a === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    }
    function mr(a, t) {
        a.prototype = Object.create(t.prototype),
        a.prototype.constructor = a,
        a.__proto__ = t
    }
    var ot, Kt, wi, Q, B, dt, z, ui, Kn, ts, gr, es, is, G, U, kt, Ne, vt, st, xi, Pe, vr, Z, hi, bi, Ht, ii, Ti, yr, rs, q, mt, ci, Si, ut, Ae, wr, xr, ze, ve, br, ye, ns, Oe, ss, ki, Lt, fi, Tr, rt, ri, ur, Le, Ei, Ci, Mt, Pi, et, H, j, Yt, os, De, Sr, kr, Er, pt, as, Ut, hr, Re, pe, ls, Cr, Be, At, Bt, us, di, hs, cr, te, Ie, qe, Ve, Pr, gt, Or, Lr, cs, _i, fs, ds, ee, fr, _s, ft, me, Dt, be, $, ps, pi, Mr, ms, _t, mi, Ar, Dr, gi, Rr, Ir, gs, vs, ys, Fr, ws, xs, re, Nr, bs, dr, lt, de, Zt, zr, Br, F, _e, ni, qr, Vr, _r, St, Ts, Oi, we, nt, ie, L, Ss, ks, Es, Cs, Ps, Ur, Hr, qt, Wt, Yr, si, oi, Li, xe, J, Os, Mi, Ls, Ai, Ot, vi, Di, Ms, As, Ds, ge, Wr, Xr, W, Ri, Gr, Rs, Is, Ue, jr, Fs, Ii, Fi, Ns, zs, Bs, Ni, it, Vt, Me, qs, pr, Vs, ai, yi, Jr, Us, Fe, Hs, Ys, li, K, Ws, Xs, Gs, js, Js, $s, Qs, Zs, Ks, to, eo, io, ro, no, so, oo, ao, lo, zi = I( () => {
        E();
        ot = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Kt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        dt = 1e8,
        z = 1 / dt,
        ui = Math.PI * 2,
        Kn = ui / 4,
        ts = 0,
        gr = Math.sqrt,
        es = Math.cos,
        is = Math.sin,
        G = function(t) {
            return typeof t == "string"
        }
        ,
        U = function(t) {
            return typeof t == "function"
        }
        ,
        kt = function(t) {
            return typeof t == "number"
        }
        ,
        Ne = function(t) {
            return typeof t == "undefined"
        }
        ,
        vt = function(t) {
            return typeof t == "object"
        }
        ,
        st = function(t) {
            return t !== !1
        }
        ,
        xi = function() {
            return typeof window != "undefined"
        }
        ,
        Pe = function(t) {
            return U(t) || G(t)
        }
        ,
        vr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
        ,
        Z = Array.isArray,
        hi = /(?:-?\.?\d|\.)+/gi,
        bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ii = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Ti = /[+-]=-?[.\d]+/,
        yr = /[^,'"\[\]\s]+/gi,
        rs = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ut = {},
        Ae = {},
        xr = function(t) {
            return (Ae = Ut(t, ut)) && K
        }
        ,
        ze = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }
        ,
        ve = function(t, e) {
            return !e && console.warn(t)
        }
        ,
        br = function(t, e) {
            return t && (ut[t] = e) && Ae && (Ae[t] = e) || ut
        }
        ,
        ye = function() {
            return 0
        }
        ,
        ns = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        Oe = {
            suppressEvents: !0,
            kill: !1
        },
        ss = {
            suppressEvents: !0
        },
        ki = {},
        Lt = [],
        fi = {},
        rt = {},
        ri = {},
        ur = 30,
        Le = [],
        Ei = "",
        Ci = function(t) {
            var e = t[0], i, r;
            if (vt(e) || U(e) || (t = [t]),
            !(i = (e._gsap || {}).harness)) {
                for (r = Le.length; r-- && !Le[r].targetTest(e); )
                    ;
                i = Le[r]
            }
            for (r = t.length; r--; )
                t[r] && (t[r]._gsap || (t[r]._gsap = new Li(t[r],i))) || t.splice(r, 1);
            return t
        }
        ,
        Mt = function(t) {
            return t._gsap || Ci(_t(t))[0]._gsap
        }
        ,
        Pi = function(t, e, i) {
            return (i = t[e]) && U(i) ? t[e]() : Ne(i) && t.getAttribute && t.getAttribute(e) || i
        }
        ,
        et = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        }
        ,
        H = function(t) {
            return Math.round(t * 1e5) / 1e5 || 0
        }
        ,
        j = function(t) {
            return Math.round(t * 1e7) / 1e7 || 0
        }
        ,
        Yt = function(t, e) {
            var i = e.charAt(0)
              , r = parseFloat(e.substr(2));
            return t = parseFloat(t),
            i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
        }
        ,
        os = function(t, e) {
            for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
                ;
            return r < i
        }
        ,
        De = function() {
            var t = Lt.length, e = Lt.slice(0), i, r;
            for (fi = {},
            Lt.length = 0,
            i = 0; i < t; i++)
                r = e[i],
                r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
        }
        ,
        Sr = function(t, e, i, r) {
            Lt.length && !Q && De(),
            t.render(e, i, r || Q && e < 0 && (t._initted || t._startAt)),
            Lt.length && !Q && De()
        }
        ,
        kr = function(t) {
            var e = parseFloat(t);
            return (e || e === 0) && (t + "").match(yr).length < 2 ? e : G(t) ? t.trim() : t
        }
        ,
        Er = function(t) {
            return t
        }
        ,
        pt = function(t, e) {
            for (var i in e)
                i in t || (t[i] = e[i]);
            return t
        }
        ,
        as = function(t) {
            return function(e, i) {
                for (var r in i)
                    r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
            }
        }
        ,
        Ut = function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
        ,
        hr = function a(t, e) {
            for (var i in e)
                i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = vt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
            return t
        }
        ,
        Re = function(t, e) {
            var i = {}, r;
            for (r in t)
                r in e || (i[r] = t[r]);
            return i
        }
        ,
        pe = function(t) {
            var e = t.parent || q
              , i = t.keyframes ? as(Z(t.keyframes)) : pt;
            if (st(t.inherit))
                for (; e; )
                    i(t, e.vars.defaults),
                    e = e.parent || e._dp;
            return t
        }
        ,
        ls = function(t, e) {
            for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
                ;
            return i < 0
        }
        ,
        Cr = function(t, e, i, r, n) {
            i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
            var s = t[r], o;
            if (n)
                for (o = e[n]; s && s[n] > o; )
                    s = s._prev;
            return s ? (e._next = s._next,
            s._next = e) : (e._next = t[i],
            t[i] = e),
            e._next ? e._next._prev = e : t[r] = e,
            e._prev = s,
            e.parent = e._dp = t,
            e
        }
        ,
        Be = function(t, e, i, r) {
            i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
            var n = e._prev
              , s = e._next;
            n ? n._next = s : t[i] === e && (t[i] = s),
            s ? s._prev = n : t[r] === e && (t[r] = n),
            e._next = e._prev = e.parent = null
        }
        ,
        At = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
            t._act = 0
        }
        ,
        Bt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i; )
                    i._dirty = 1,
                    i = i.parent;
            return t
        }
        ,
        us = function(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent;
            return t
        }
        ,
        di = function(t, e, i, r) {
            return t._startAt && (Q ? t._startAt.revert(Oe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
        }
        ,
        hs = function a(t) {
            return !t || t._ts && a(t.parent)
        }
        ,
        cr = function(t) {
            return t._repeat ? te(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }
        ,
        te = function(t, e) {
            var i = Math.floor(t /= e);
            return t && i === t ? i - 1 : i
        }
        ,
        Ie = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }
        ,
        qe = function(t) {
            return t._end = j(t._start + (t._tDur / Math.abs(t._ts || t._rts || z) || 0))
        }
        ,
        Ve = function(t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = j(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
            qe(t),
            i._dirty || Bt(i, t)),
            t
        }
        ,
        Pr = function(t, e) {
            var i;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Ie(t.rawTime(), e),
            (!e._dur || be(0, e.totalDuration(), i) - e._tTime > z) && e.render(i, !0)),
            Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp; )
                        i.rawTime() >= 0 && i.totalTime(i._tTime),
                        i = i._dp;
                t._zTime = -z
            }
        }
        ,
        gt = function(t, e, i, r) {
            return e.parent && At(e),
            e._start = j((kt(i) ? i : i || t !== q ? ft(t, i, e) : t._time) + e._delay),
            e._end = j(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            Cr(t, e, "_first", "_last", t._sort ? "_start" : 0),
            _i(e) || (t._recent = e),
            r || Pr(t, e),
            t._ts < 0 && Ve(t, t._tTime),
            t
        }
        ,
        Or = function(t, e) {
            return (ut.ScrollTrigger || ze("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
        }
        ,
        Lr = function(t, e, i, r, n) {
            if (Di(t, e, n),
            !t._initted)
                return 1;
            if (!i && t._pt && !Q && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Tr !== nt.frame)
                return Lt.push(t),
                t._lazy = [n, r],
                1
        }
        ,
        cs = function a(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e))
        }
        ,
        _i = function(t) {
            var e = t.data;
            return e === "isFromStart" || e === "isStart"
        }
        ,
        fs = function(t, e, i, r) {
            var n = t.ratio, s = e < 0 || !e && (!t._start && cs(t) && !(!t._initted && _i(t)) || (t._ts < 0 || t._dp._ts < 0) && !_i(t)) ? 0 : 1, o = t._rDelay, l = 0, u, h, d;
            if (o && t._repeat && (l = be(0, t._tDur, e),
            h = te(l, o),
            t._yoyo && h & 1 && (s = 1 - s),
            h !== te(t._tTime, o) && (n = 1 - s,
            t.vars.repeatRefresh && t._initted && t.invalidate())),
            s !== n || Q || r || t._zTime === z || !e && t._zTime) {
                if (!t._initted && Lr(t, e, r, i, l))
                    return;
                for (d = t._zTime,
                t._zTime = e || (i ? z : 0),
                i || (i = e && !d),
                t.ratio = s,
                t._from && (s = 1 - s),
                t._time = 0,
                t._tTime = l,
                u = t._pt; u; )
                    u.r(s, u.d),
                    u = u._next;
                e < 0 && di(t, e, i, !0),
                t._onUpdate && !i && lt(t, "onUpdate"),
                l && t._repeat && !i && t.parent && lt(t, "onRepeat"),
                (e >= t._tDur || e < 0) && t.ratio === s && (s && At(t, 1),
                !i && !Q && (lt(t, s ? "onComplete" : "onReverseComplete", !0),
                t._prom && t._prom()))
            } else
                t._zTime || (t._zTime = e)
        }
        ,
        ds = function(t, e, i) {
            var r;
            if (i > e)
                for (r = t._first; r && r._start <= i; ) {
                    if (r.data === "isPause" && r._start > e)
                        return r;
                    r = r._next
                }
            else
                for (r = t._last; r && r._start >= i; ) {
                    if (r.data === "isPause" && r._start < e)
                        return r;
                    r = r._prev
                }
        }
        ,
        ee = function(t, e, i, r) {
            var n = t._repeat
              , s = j(e) || 0
              , o = t._tTime / t._tDur;
            return o && !r && (t._time *= s / t._dur),
            t._dur = s,
            t._tDur = n ? n < 0 ? 1e10 : j(s * (n + 1) + t._rDelay * n) : s,
            o > 0 && !r && Ve(t, t._tTime = t._tDur * o),
            t.parent && qe(t),
            i || Bt(t.parent, t),
            t
        }
        ,
        fr = function(t) {
            return t instanceof J ? Bt(t) : ee(t, t._dur)
        }
        ,
        _s = {
            _start: 0,
            endTime: ye,
            totalDuration: ye
        },
        ft = function a(t, e, i) {
            var r = t.labels, n = t._recent || _s, s = t.duration() >= dt ? n.endTime(!1) : t._dur, o, l, u;
            return G(e) && (isNaN(e) || e in r) ? (l = e.charAt(0),
            u = e.substr(-1) === "%",
            o = e.indexOf("="),
            l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s),
            r[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)),
            u && i && (l = l / 100 * (Z(i) ? i[0] : i).totalDuration()),
            o > 1 ? a(t, e.substr(0, o - 1), i) + l : s + l)) : e == null ? s : +e
        }
        ,
        me = function(t, e, i) {
            var r = kt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, l;
            if (r && (s.duration = e[1]),
            s.parent = i,
            t) {
                for (o = s,
                l = i; l && !("immediateRender"in o); )
                    o = l.vars.defaults || {},
                    l = st(l.vars.inherit) && l.parent;
                s.immediateRender = st(o.immediateRender),
                t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
            }
            return new W(e[0],s,e[n + 1])
        }
        ,
        Dt = function(t, e) {
            return t || t === 0 ? e(t) : e
        }
        ,
        be = function(t, e, i) {
            return i < t ? t : i > e ? e : i
        }
        ,
        $ = function(t, e) {
            return !G(t) || !(e = rs.exec(t)) ? "" : e[1]
        }
        ,
        ps = function(t, e, i) {
            return Dt(i, function(r) {
                return be(t, e, r)
            })
        }
        ,
        pi = [].slice,
        Mr = function(t, e) {
            return t && vt(t) && "length"in t && (!e && !t.length || t.length - 1 in t && vt(t[0])) && !t.nodeType && t !== mt
        }
        ,
        ms = function(t, e, i) {
            return i === void 0 && (i = []),
            t.forEach(function(r) {
                var n;
                return G(r) && !e || Mr(r, 1) ? (n = i).push.apply(n, _t(r)) : i.push(r)
            }) || i
        }
        ,
        _t = function(t, e, i) {
            return B && !e && B.selector ? B.selector(t) : G(t) && !i && (ci || !ie()) ? pi.call((e || Si).querySelectorAll(t), 0) : Z(t) ? ms(t, i) : Mr(t) ? pi.call(t, 0) : t ? [t] : []
        }
        ,
        mi = function(t) {
            return t = _t(t)[0] || ve("Invalid scope") || {},
            function(e) {
                var i = t.current || t.nativeElement || t;
                return _t(e, i.querySelectorAll ? i : i === t ? ve("Invalid scope") || Si.createElement("div") : t)
            }
        }
        ,
        Ar = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        }
        ,
        Dr = function(t) {
            if (U(t))
                return t;
            var e = vt(t) ? t : {
                each: t
            }
              , i = qt(e.ease)
              , r = e.from || 0
              , n = parseFloat(e.base) || 0
              , s = {}
              , o = r > 0 && r < 1
              , l = isNaN(r) || o
              , u = e.axis
              , h = r
              , d = r;
            return G(r) ? h = d = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !o && l && (h = r[0],
            d = r[1]),
            function(f, _, m) {
                var c = (m || e).length, p = s[c], g, v, y, x, w, S, T, k, b;
                if (!p) {
                    if (b = e.grid === "auto" ? 0 : (e.grid || [1, dt])[1],
                    !b) {
                        for (T = -dt; T < (T = m[b++].getBoundingClientRect().left) && b < c; )
                            ;
                        b < c && b--
                    }
                    for (p = s[c] = [],
                    g = l ? Math.min(b, c) * h - .5 : r % b,
                    v = b === dt ? 0 : l ? c * d / b - .5 : r / b | 0,
                    T = 0,
                    k = dt,
                    S = 0; S < c; S++)
                        y = S % b - g,
                        x = v - (S / b | 0),
                        p[S] = w = u ? Math.abs(u === "y" ? x : y) : gr(y * y + x * x),
                        w > T && (T = w),
                        w < k && (k = w);
                    r === "random" && Ar(p),
                    p.max = T - k,
                    p.min = k,
                    p.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (b > c ? c - 1 : u ? u === "y" ? c / b : b : Math.max(b, c / b)) || 0) * (r === "edges" ? -1 : 1),
                    p.b = c < 0 ? n - c : n,
                    p.u = $(e.amount || e.each) || 0,
                    i = i && c < 0 ? Ur(i) : i
                }
                return c = (p[f] - p.min) / p.max || 0,
                j(p.b + (i ? i(c) : c) * p.v) + p.u
            }
        }
        ,
        gi = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(i) {
                var r = j(Math.round(parseFloat(i) / t) * t * e);
                return (r - r % 1) / e + (kt(i) ? 0 : $(i))
            }
        }
        ,
        Rr = function(t, e) {
            var i = Z(t), r, n;
            return !i && vt(t) && (r = i = t.radius || dt,
            t.values ? (t = _t(t.values),
            (n = !kt(t[0])) && (r *= r)) : t = gi(t.increment)),
            Dt(e, i ? U(t) ? function(s) {
                return n = t(s),
                Math.abs(n - s) <= r ? n : s
            }
            : function(s) {
                for (var o = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), u = dt, h = 0, d = t.length, f, _; d--; )
                    n ? (f = t[d].x - o,
                    _ = t[d].y - l,
                    f = f * f + _ * _) : f = Math.abs(t[d] - o),
                    f < u && (u = f,
                    h = d);
                return h = !r || u <= r ? t[h] : s,
                n || h === s || kt(s) ? h : h + $(s)
            }
            : gi(t))
        }
        ,
        Ir = function(t, e, i, r) {
            return Dt(Z(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
                return Z(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
            })
        }
        ,
        gs = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return function(r) {
                return e.reduce(function(n, s) {
                    return s(n)
                }, r)
            }
        }
        ,
        vs = function(t, e) {
            return function(i) {
                return t(parseFloat(i)) + (e || $(i))
            }
        }
        ,
        ys = function(t, e, i) {
            return Nr(t, e, 0, 1, i)
        }
        ,
        Fr = function(t, e, i) {
            return Dt(i, function(r) {
                return t[~~e(r)]
            })
        }
        ,
        ws = function a(t, e, i) {
            var r = e - t;
            return Z(t) ? Fr(t, a(0, t.length), e) : Dt(i, function(n) {
                return (r + (n - t) % r) % r + t
            })
        }
        ,
        xs = function a(t, e, i) {
            var r = e - t
              , n = r * 2;
            return Z(t) ? Fr(t, a(0, t.length - 1), e) : Dt(i, function(s) {
                return s = (n + (s - t) % n) % n || 0,
                t + (s > r ? n - s : s)
            })
        }
        ,
        re = function(t) {
            for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
                s = t.indexOf(")", r),
                o = t.charAt(r + 7) === "[",
                n = t.substr(r + 7, s - r - 7).match(o ? yr : hi),
                i += t.substr(e, r - e) + Ir(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
                e = s + 1;
            return i + t.substr(e, t.length - e)
        }
        ,
        Nr = function(t, e, i, r, n) {
            var s = e - t
              , o = r - i;
            return Dt(n, function(l) {
                return i + ((l - t) / s * o || 0)
            })
        }
        ,
        bs = function a(t, e, i, r) {
            var n = isNaN(t + e) ? 0 : function(_) {
                return (1 - _) * t + _ * e
            }
            ;
            if (!n) {
                var s = G(t), o = {}, l, u, h, d, f;
                if (i === !0 && (r = 1) && (i = null),
                s)
                    t = {
                        p: t
                    },
                    e = {
                        p: e
                    };
                else if (Z(t) && !Z(e)) {
                    for (h = [],
                    d = t.length,
                    f = d - 2,
                    u = 1; u < d; u++)
                        h.push(a(t[u - 1], t[u]));
                    d--,
                    n = function(m) {
                        m *= d;
                        var c = Math.min(f, ~~m);
                        return h[c](m - c)
                    }
                    ,
                    i = e
                } else
                    r || (t = Ut(Z(t) ? [] : {}, t));
                if (!h) {
                    for (l in e)
                        Mi.call(o, t, l, "get", e[l]);
                    n = function(m) {
                        return Fi(m, o) || (s ? t.p : t)
                    }
                }
            }
            return Dt(i, n)
        }
        ,
        dr = function(t, e, i) {
            var r = t.labels, n = dt, s, o, l;
            for (s in r)
                o = r[s] - e,
                o < 0 == !!i && o && n > (o = Math.abs(o)) && (l = s,
                n = o);
            return l
        }
        ,
        lt = function(t, e, i) {
            var r = t.vars, n = r[e], s = B, o = t._ctx, l, u, h;
            if (!!n)
                return l = r[e + "Params"],
                u = r.callbackScope || t,
                i && Lt.length && De(),
                o && (B = o),
                h = l ? n.apply(u, l) : n.call(u),
                B = s,
                h
        }
        ,
        de = function(t) {
            return At(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!Q),
            t.progress() < 1 && lt(t, "onInterrupt"),
            t
        }
        ,
        zr = [],
        Br = function(t) {
            if (!!t)
                if (t = !t.name && t.default || t,
                xi() || t.headless) {
                    var e = t.name
                      , i = U(t)
                      , r = e && !i && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: ye,
                        render: Fi,
                        add: Mi,
                        kill: zs,
                        modifier: Ns,
                        rawVars: 0
                    }
                      , s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ue,
                        aliases: {},
                        register: 0
                    };
                    if (ie(),
                    t !== r) {
                        if (rt[e])
                            return;
                        pt(r, pt(Re(t, n), s)),
                        Ut(r.prototype, Ut(n, Re(t, s))),
                        rt[r.prop = e] = r,
                        t.targetTest && (Le.push(r),
                        ki[e] = 1),
                        e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    br(e, r),
                    t.register && t.register(K, r, it)
                } else
                    zr.push(t)
        }
        ,
        F = 255,
        _e = {
            aqua: [0, F, F],
            lime: [0, F, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, F],
            navy: [0, 0, 128],
            white: [F, F, F],
            olive: [128, 128, 0],
            yellow: [F, F, 0],
            orange: [F, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [F, 0, 0],
            pink: [F, 192, 203],
            cyan: [0, F, F],
            transparent: [F, F, F, 0]
        },
        ni = function(t, e, i) {
            return t += t < 0 ? 1 : t > 1 ? -1 : 0,
            (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * F + .5 | 0
        }
        ,
        qr = function(t, e, i) {
            var r = t ? kt(t) ? [t >> 16, t >> 8 & F, t & F] : 0 : _e.black, n, s, o, l, u, h, d, f, _, m;
            if (!r) {
                if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
                _e[t])
                    r = _e[t];
                else if (t.charAt(0) === "#") {
                    if (t.length < 6 && (n = t.charAt(1),
                    s = t.charAt(2),
                    o = t.charAt(3),
                    t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
                    t.length === 9)
                        return r = parseInt(t.substr(1, 6), 16),
                        [r >> 16, r >> 8 & F, r & F, parseInt(t.substr(7), 16) / 255];
                    t = parseInt(t.substr(1), 16),
                    r = [t >> 16, t >> 8 & F, t & F]
                } else if (t.substr(0, 3) === "hsl") {
                    if (r = m = t.match(hi),
                    !e)
                        l = +r[0] % 360 / 360,
                        u = +r[1] / 100,
                        h = +r[2] / 100,
                        s = h <= .5 ? h * (u + 1) : h + u - h * u,
                        n = h * 2 - s,
                        r.length > 3 && (r[3] *= 1),
                        r[0] = ni(l + 1 / 3, n, s),
                        r[1] = ni(l, n, s),
                        r[2] = ni(l - 1 / 3, n, s);
                    else if (~t.indexOf("="))
                        return r = t.match(bi),
                        i && r.length < 4 && (r[3] = 1),
                        r
                } else
                    r = t.match(hi) || _e.transparent;
                r = r.map(Number)
            }
            return e && !m && (n = r[0] / F,
            s = r[1] / F,
            o = r[2] / F,
            d = Math.max(n, s, o),
            f = Math.min(n, s, o),
            h = (d + f) / 2,
            d === f ? l = u = 0 : (_ = d - f,
            u = h > .5 ? _ / (2 - d - f) : _ / (d + f),
            l = d === n ? (s - o) / _ + (s < o ? 6 : 0) : d === s ? (o - n) / _ + 2 : (n - s) / _ + 4,
            l *= 60),
            r[0] = ~~(l + .5),
            r[1] = ~~(u * 100 + .5),
            r[2] = ~~(h * 100 + .5)),
            i && r.length < 4 && (r[3] = 1),
            r
        }
        ,
        Vr = function(t) {
            var e = []
              , i = []
              , r = -1;
            return t.split(St).forEach(function(n) {
                var s = n.match(Ht) || [];
                e.push.apply(e, s),
                i.push(r += s.length + 1)
            }),
            e.c = i,
            e
        }
        ,
        _r = function(t, e, i) {
            var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", o = 0, l, u, h, d;
            if (!n)
                return t;
            if (n = n.map(function(f) {
                return (f = qr(f, e, 1)) && s + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
            }),
            i && (h = Vr(t),
            l = i.c,
            l.join(r) !== h.c.join(r)))
                for (u = t.replace(St, "1").split(Ht),
                d = u.length - 1; o < d; o++)
                    r += u[o] + (~l.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
            if (!u)
                for (u = t.split(St),
                d = u.length - 1; o < d; o++)
                    r += u[o] + n[o];
            return r + u[d]
        }
        ,
        St = function() {
            var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
            for (t in _e)
                a += "|" + t + "\\b";
            return new RegExp(a + ")","gi")
        }(),
        Ts = /hsl[a]?\(/,
        Oi = function(t) {
            var e = t.join(" "), i;
            if (St.lastIndex = 0,
            St.test(e))
                return i = Ts.test(e),
                t[1] = _r(t[1], i),
                t[0] = _r(t[0], i, Vr(t[1])),
                !0
        }
        ,
        nt = function() {
            var a = Date.now, t = 500, e = 33, i = a(), r = i, n = 1e3 / 240, s = n, o = [], l, u, h, d, f, _, m = function c(p) {
                var g = a() - r, v = p === !0, y, x, w, S;
                if ((g > t || g < 0) && (i += g - e),
                r += g,
                w = r - i,
                y = w - s,
                (y > 0 || v) && (S = ++d.frame,
                f = w - d.time * 1e3,
                d.time = w = w / 1e3,
                s += y + (y >= n ? 4 : n - y),
                x = 1),
                v || (l = u(c)),
                x)
                    for (_ = 0; _ < o.length; _++)
                        o[_](w, f, S, p)
            };
            return d = {
                time: 0,
                frame: 0,
                tick: function() {
                    m(!0)
                },
                deltaRatio: function(p) {
                    return f / (1e3 / (p || 60))
                },
                wake: function() {
                    wr && (!ci && xi() && (mt = ci = window,
                    Si = mt.document || {},
                    ut.gsap = K,
                    (mt.gsapVersions || (mt.gsapVersions = [])).push(K.version),
                    xr(Ae || mt.GreenSockGlobals || !mt.gsap && mt || {}),
                    zr.forEach(Br)),
                    h = typeof requestAnimationFrame != "undefined" && requestAnimationFrame,
                    l && d.sleep(),
                    u = h || function(p) {
                        return setTimeout(p, s - d.time * 1e3 + 1 | 0)
                    }
                    ,
                    we = 1,
                    m(2))
                },
                sleep: function() {
                    (h ? cancelAnimationFrame : clearTimeout)(l),
                    we = 0,
                    u = ye
                },
                lagSmoothing: function(p, g) {
                    t = p || 1 / 0,
                    e = Math.min(g || 33, t)
                },
                fps: function(p) {
                    n = 1e3 / (p || 240),
                    s = d.time * 1e3 + n
                },
                add: function(p, g, v) {
                    var y = g ? function(x, w, S, T) {
                        p(x, w, S, T),
                        d.remove(y)
                    }
                    : p;
                    return d.remove(p),
                    o[v ? "unshift" : "push"](y),
                    ie(),
                    y
                },
                remove: function(p, g) {
                    ~(g = o.indexOf(p)) && o.splice(g, 1) && _ >= g && _--
                },
                _listeners: o
            },
            d
        }(),
        ie = function() {
            return !we && nt.wake()
        }
        ,
        L = {},
        Ss = /^[\d.\-M][\d.\-,\s]/,
        ks = /["']/g,
        Es = function(t) {
            for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, l, u; n < s; n++)
                l = i[n],
                o = n !== s - 1 ? l.lastIndexOf(",") : l.length,
                u = l.substr(0, o),
                e[r] = isNaN(u) ? u.replace(ks, "").trim() : +u,
                r = l.substr(o + 1).trim();
            return e
        }
        ,
        Cs = function(t) {
            var e = t.indexOf("(") + 1
              , i = t.indexOf(")")
              , r = t.indexOf("(", e);
            return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
        }
        ,
        Ps = function(t) {
            var e = (t + "").split("(")
              , i = L[e[0]];
            return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Es(e[1])] : Cs(t).split(",").map(kr)) : L._CE && Ss.test(t) ? L._CE("", t) : i
        }
        ,
        Ur = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        }
        ,
        Hr = function a(t, e) {
            for (var i = t._first, r; i; )
                i instanceof J ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease,
                i._ease = i._yEase,
                i._yEase = r,
                i._yoyo = e)),
                i = i._next
        }
        ,
        qt = function(t, e) {
            return t && (U(t) ? t : L[t] || Ps(t)) || e
        }
        ,
        Wt = function(t, e, i, r) {
            i === void 0 && (i = function(l) {
                return 1 - e(1 - l)
            }
            ),
            r === void 0 && (r = function(l) {
                return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
            }
            );
            var n = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            }, s;
            return et(t, function(o) {
                L[o] = ut[o] = n,
                L[s = o.toLowerCase()] = i;
                for (var l in n)
                    L[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = L[o + "." + l] = n[l]
            }),
            n
        }
        ,
        Yr = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
            }
        }
        ,
        si = function a(t, e, i) {
            var r = e >= 1 ? e : 1
              , n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
              , s = n / ui * (Math.asin(1 / r) || 0)
              , o = function(h) {
                return h === 1 ? 1 : r * Math.pow(2, -10 * h) * is((h - s) * n) + 1
            }
              , l = t === "out" ? o : t === "in" ? function(u) {
                return 1 - o(1 - u)
            }
            : Yr(o);
            return n = ui / n,
            l.config = function(u, h) {
                return a(t, u, h)
            }
            ,
            l
        }
        ,
        oi = function a(t, e) {
            e === void 0 && (e = 1.70158);
            var i = function(s) {
                return s ? --s * s * ((e + 1) * s + e) + 1 : 0
            }
              , r = t === "out" ? i : t === "in" ? function(n) {
                return 1 - i(1 - n)
            }
            : Yr(i);
            return r.config = function(n) {
                return a(t, n)
            }
            ,
            r
        }
        ;
        et("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
            var e = t < 5 ? t + 1 : t;
            Wt(a + ",Power" + (e - 1), t ? function(i) {
                return Math.pow(i, e)
            }
            : function(i) {
                return i
            }
            , function(i) {
                return 1 - Math.pow(1 - i, e)
            }, function(i) {
                return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
            })
        });
        L.Linear.easeNone = L.none = L.Linear.easeIn;
        Wt("Elastic", si("in"), si("out"), si());
        (function(a, t) {
            var e = 1 / t
              , i = 2 * e
              , r = 2.5 * e
              , n = function(o) {
                return o < e ? a * o * o : o < i ? a * Math.pow(o - 1.5 / t, 2) + .75 : o < r ? a * (o -= 2.25 / t) * o + .9375 : a * Math.pow(o - 2.625 / t, 2) + .984375
            };
            Wt("Bounce", function(s) {
                return 1 - n(1 - s)
            }, n)
        }
        )(7.5625, 2.75);
        Wt("Expo", function(a) {
            return a ? Math.pow(2, 10 * (a - 1)) : 0
        });
        Wt("Circ", function(a) {
            return -(gr(1 - a * a) - 1)
        });
        Wt("Sine", function(a) {
            return a === 1 ? 1 : -es(a * Kn) + 1
        });
        Wt("Back", oi("in"), oi("out"), oi());
        L.SteppedEase = L.steps = ut.SteppedEase = {
            config: function(t, e) {
                t === void 0 && (t = 1);
                var i = 1 / t
                  , r = t + (e ? 0 : 1)
                  , n = e ? 1 : 0
                  , s = 1 - z;
                return function(o) {
                    return ((r * be(0, s, o) | 0) + n) * i
                }
            }
        };
        Kt.ease = L["quad.out"];
        et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
            return Ei += a + "," + a + "Params,"
        });
        Li = function(t, e) {
            this.id = ts++,
            t._gsap = this,
            this.target = t,
            this.harness = e,
            this.get = e ? e.get : Pi,
            this.set = e ? e.getSetter : Ue
        }
        ,
        xe = function() {
            function a(e) {
                this.vars = e,
                this._delay = +e.delay || 0,
                (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
                this._yoyo = !!e.yoyo || !!e.yoyoEase),
                this._ts = 1,
                ee(this, +e.duration, 1, 1),
                this.data = e.data,
                B && (this._ctx = B,
                B.data.push(this)),
                we || nt.wake()
            }
            var t = a.prototype;
            return t.delay = function(i) {
                return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
                this._delay = i,
                this) : this._delay
            }
            ,
            t.duration = function(i) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
            }
            ,
            t.totalDuration = function(i) {
                return arguments.length ? (this._dirty = 0,
                ee(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }
            ,
            t.totalTime = function(i, r) {
                if (ie(),
                !arguments.length)
                    return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Ve(this, i),
                    !n._dp || n.parent || Pr(n, this); n && n.parent; )
                        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                        n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && gt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === z || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
                Sr(this, i, r)),
                this
            }
            ,
            t.time = function(i, r) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + cr(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
            }
            ,
            t.totalProgress = function(i, r) {
                return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
            }
            ,
            t.progress = function(i, r) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + cr(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }
            ,
            t.iteration = function(i, r) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? te(this._tTime, n) + 1 : 1
            }
            ,
            t.timeScale = function(i, r) {
                if (!arguments.length)
                    return this._rts === -z ? 0 : this._rts;
                if (this._rts === i)
                    return this;
                var n = this.parent && this._ts ? Ie(this.parent._time, this) : this._tTime;
                return this._rts = +i || 0,
                this._ts = this._ps || i === -z ? 0 : this._rts,
                this.totalTime(be(-Math.abs(this._delay), this._tDur, n), r !== !1),
                qe(this),
                us(this)
            }
            ,
            t.paused = function(i) {
                return arguments.length ? (this._ps !== i && (this._ps = i,
                i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                this._ts = this._act = 0) : (ie(),
                this._ts = this._rts,
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z)))),
                this) : this._ps
            }
            ,
            t.startTime = function(i) {
                if (arguments.length) {
                    this._start = i;
                    var r = this.parent || this._dp;
                    return r && (r._sort || !this.parent) && gt(r, this, i - this._delay),
                    this
                }
                return this._start
            }
            ,
            t.endTime = function(i) {
                return this._start + (st(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }
            ,
            t.rawTime = function(i) {
                var r = this.parent || this._dp;
                return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ie(r.rawTime(i), this) : this._tTime : this._tTime
            }
            ,
            t.revert = function(i) {
                i === void 0 && (i = ss);
                var r = Q;
                return Q = i,
                (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
                this.totalTime(-.01, i.suppressEvents)),
                this.data !== "nested" && i.kill !== !1 && this.kill(),
                Q = r,
                this
            }
            ,
            t.globalTime = function(i) {
                for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
                    n = r._start + n / (Math.abs(r._ts) || 1),
                    r = r._dp;
                return !this.parent && this._sat ? this._sat.globalTime(i) : n
            }
            ,
            t.repeat = function(i) {
                return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
                fr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }
            ,
            t.repeatDelay = function(i) {
                if (arguments.length) {
                    var r = this._time;
                    return this._rDelay = i,
                    fr(this),
                    r ? this.time(r) : this
                }
                return this._rDelay
            }
            ,
            t.yoyo = function(i) {
                return arguments.length ? (this._yoyo = i,
                this) : this._yoyo
            }
            ,
            t.seek = function(i, r) {
                return this.totalTime(ft(this, i), st(r))
            }
            ,
            t.restart = function(i, r) {
                return this.play().totalTime(i ? -this._delay : 0, st(r))
            }
            ,
            t.play = function(i, r) {
                return i != null && this.seek(i, r),
                this.reversed(!1).paused(!1)
            }
            ,
            t.reverse = function(i, r) {
                return i != null && this.seek(i || this.totalDuration(), r),
                this.reversed(!0).paused(!1)
            }
            ,
            t.pause = function(i, r) {
                return i != null && this.seek(i, r),
                this.paused(!0)
            }
            ,
            t.resume = function() {
                return this.paused(!1)
            }
            ,
            t.reversed = function(i) {
                return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -z : 0)),
                this) : this._rts < 0
            }
            ,
            t.invalidate = function() {
                return this._initted = this._act = 0,
                this._zTime = -z,
                this
            }
            ,
            t.isActive = function() {
                var i = this.parent || this._dp, r = this._start, n;
                return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - z)
            }
            ,
            t.eventCallback = function(i, r, n) {
                var s = this.vars;
                return arguments.length > 1 ? (r ? (s[i] = r,
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
                this) : s[i]
            }
            ,
            t.then = function(i) {
                var r = this;
                return new Promise(function(n) {
                    var s = U(i) ? i : Er
                      , o = function() {
                        var u = r.then;
                        r.then = null,
                        U(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                        n(s),
                        r.then = u
                    };
                    r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o
                }
                )
            }
            ,
            t.kill = function() {
                de(this)
            }
            ,
            a
        }();
        pt(xe.prototype, {
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
            _zTime: -z,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        J = function(a) {
            mr(t, a);
            function t(i, r) {
                var n;
                return i === void 0 && (i = {}),
                n = a.call(this, i) || this,
                n.labels = {},
                n.smoothChildTiming = !!i.smoothChildTiming,
                n.autoRemoveChildren = !!i.autoRemoveChildren,
                n._sort = st(i.sortChildren),
                q && gt(i.parent || q, Tt(n), r),
                i.reversed && n.reverse(),
                i.paused && n.paused(!0),
                i.scrollTrigger && Or(Tt(n), i.scrollTrigger),
                n
            }
            var e = t.prototype;
            return e.to = function(r, n, s) {
                return me(0, arguments, this),
                this
            }
            ,
            e.from = function(r, n, s) {
                return me(1, arguments, this),
                this
            }
            ,
            e.fromTo = function(r, n, s, o) {
                return me(2, arguments, this),
                this
            }
            ,
            e.set = function(r, n, s) {
                return n.duration = 0,
                n.parent = this,
                pe(n).repeatDelay || (n.repeat = 0),
                n.immediateRender = !!n.immediateRender,
                new W(r,n,ft(this, s),1),
                this
            }
            ,
            e.call = function(r, n, s) {
                return gt(this, W.delayedCall(0, r, n), s)
            }
            ,
            e.staggerTo = function(r, n, s, o, l, u, h) {
                return s.duration = n,
                s.stagger = s.stagger || o,
                s.onComplete = u,
                s.onCompleteParams = h,
                s.parent = this,
                new W(r,s,ft(this, l)),
                this
            }
            ,
            e.staggerFrom = function(r, n, s, o, l, u, h) {
                return s.runBackwards = 1,
                pe(s).immediateRender = st(s.immediateRender),
                this.staggerTo(r, n, s, o, l, u, h)
            }
            ,
            e.staggerFromTo = function(r, n, s, o, l, u, h, d) {
                return o.startAt = s,
                pe(o).immediateRender = st(o.immediateRender),
                this.staggerTo(r, n, o, l, u, h, d)
            }
            ,
            e.render = function(r, n, s) {
                var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = r <= 0 ? 0 : j(r), d = this._zTime < 0 != r < 0 && (this._initted || !u), f, _, m, c, p, g, v, y, x, w, S, T;
                if (this !== q && h > l && r >= 0 && (h = l),
                h !== this._tTime || s || d) {
                    if (o !== this._time && u && (h += this._time - o,
                    r += this._time - o),
                    f = h,
                    x = this._start,
                    y = this._ts,
                    g = !y,
                    d && (u || (o = this._zTime),
                    (r || !n) && (this._zTime = r)),
                    this._repeat) {
                        if (S = this._yoyo,
                        p = u + this._rDelay,
                        this._repeat < -1 && r < 0)
                            return this.totalTime(p * 100 + r, n, s);
                        if (f = j(h % p),
                        h === l ? (c = this._repeat,
                        f = u) : (c = ~~(h / p),
                        c && c === h / p && (f = u,
                        c--),
                        f > u && (f = u)),
                        w = te(this._tTime, p),
                        !o && this._tTime && w !== c && this._tTime - w * p - this._dur <= 0 && (w = c),
                        S && c & 1 && (f = u - f,
                        T = 1),
                        c !== w && !this._lock) {
                            var k = S && w & 1
                              , b = k === (S && c & 1);
                            if (c < w && (k = !k),
                            o = k ? 0 : h % u ? u : h,
                            this._lock = 1,
                            this.render(o || (T ? 0 : j(c * p)), n, !u)._lock = 0,
                            this._tTime = h,
                            !n && this.parent && lt(this, "onRepeat"),
                            this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                            o && o !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (u = this._dur,
                            l = this._tDur,
                            b && (this._lock = 2,
                            o = k ? u : -1e-4,
                            this.render(o, !0),
                            this.vars.repeatRefresh && !T && this.invalidate()),
                            this._lock = 0,
                            !this._ts && !g)
                                return this;
                            Hr(this, T)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (v = ds(this, j(o), j(f)),
                    v && (h -= f - (f = v._start))),
                    this._tTime = h,
                    this._time = f,
                    this._act = !y,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                    this._initted = 1,
                    this._zTime = r,
                    o = 0),
                    !o && f && !n && !c && (lt(this, "onStart"),
                    this._tTime !== h))
                        return this;
                    if (f >= o && r >= 0)
                        for (_ = this._first; _; ) {
                            if (m = _._next,
                            (_._act || f >= _._start) && _._ts && v !== _) {
                                if (_.parent !== this)
                                    return this.render(r, n, s);
                                if (_.render(_._ts > 0 ? (f - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (f - _._start) * _._ts, n, s),
                                f !== this._time || !this._ts && !g) {
                                    v = 0,
                                    m && (h += this._zTime = -z);
                                    break
                                }
                            }
                            _ = m
                        }
                    else {
                        _ = this._last;
                        for (var M = r < 0 ? r : f; _; ) {
                            if (m = _._prev,
                            (_._act || M <= _._end) && _._ts && v !== _) {
                                if (_.parent !== this)
                                    return this.render(r, n, s);
                                if (_.render(_._ts > 0 ? (M - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (M - _._start) * _._ts, n, s || Q && (_._initted || _._startAt)),
                                f !== this._time || !this._ts && !g) {
                                    v = 0,
                                    m && (h += this._zTime = M ? -z : z);
                                    break
                                }
                            }
                            _ = m
                        }
                    }
                    if (v && !n && (this.pause(),
                    v.render(f >= o ? 0 : -z)._zTime = f >= o ? 1 : -1,
                    this._ts))
                        return this._start = x,
                        qe(this),
                        this.render(r, n, s);
                    this._onUpdate && !n && lt(this, "onUpdate", !0),
                    (h === l && this._tTime >= this.totalDuration() || !h && o) && (x === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && At(this, 1),
                    !n && !(r < 0 && !o) && (h || o || !l) && (lt(this, h === l && r >= 0 ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(h < l && this.timeScale() > 0) && this._prom())))
                }
                return this
            }
            ,
            e.add = function(r, n) {
                var s = this;
                if (kt(n) || (n = ft(this, n, r)),
                !(r instanceof xe)) {
                    if (Z(r))
                        return r.forEach(function(o) {
                            return s.add(o, n)
                        }),
                        this;
                    if (G(r))
                        return this.addLabel(r, n);
                    if (U(r))
                        r = W.delayedCall(0, r);
                    else
                        return this
                }
                return this !== r ? gt(this, r, n) : this
            }
            ,
            e.getChildren = function(r, n, s, o) {
                r === void 0 && (r = !0),
                n === void 0 && (n = !0),
                s === void 0 && (s = !0),
                o === void 0 && (o = -dt);
                for (var l = [], u = this._first; u; )
                    u._start >= o && (u instanceof W ? n && l.push(u) : (s && l.push(u),
                    r && l.push.apply(l, u.getChildren(!0, n, s)))),
                    u = u._next;
                return l
            }
            ,
            e.getById = function(r) {
                for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
                    if (n[s].vars.id === r)
                        return n[s]
            }
            ,
            e.remove = function(r) {
                return G(r) ? this.removeLabel(r) : U(r) ? this.killTweensOf(r) : (Be(this, r),
                r === this._recent && (this._recent = this._last),
                Bt(this))
            }
            ,
            e.totalTime = function(r, n) {
                return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = j(nt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
                a.prototype.totalTime.call(this, r, n),
                this._forcing = 0,
                this) : this._tTime
            }
            ,
            e.addLabel = function(r, n) {
                return this.labels[r] = ft(this, n),
                this
            }
            ,
            e.removeLabel = function(r) {
                return delete this.labels[r],
                this
            }
            ,
            e.addPause = function(r, n, s) {
                var o = W.delayedCall(0, n || ye, s);
                return o.data = "isPause",
                this._hasPause = 1,
                gt(this, o, ft(this, r))
            }
            ,
            e.removePause = function(r) {
                var n = this._first;
                for (r = ft(this, r); n; )
                    n._start === r && n.data === "isPause" && At(n),
                    n = n._next
            }
            ,
            e.killTweensOf = function(r, n, s) {
                for (var o = this.getTweensOf(r, s), l = o.length; l--; )
                    Ot !== o[l] && o[l].kill(r, n);
                return this
            }
            ,
            e.getTweensOf = function(r, n) {
                for (var s = [], o = _t(r), l = this._first, u = kt(n), h; l; )
                    l instanceof W ? os(l._targets, o) && (u ? (!Ot || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (h = l.getTweensOf(o, n)).length && s.push.apply(s, h),
                    l = l._next;
                return s
            }
            ,
            e.tweenTo = function(r, n) {
                n = n || {};
                var s = this, o = ft(s, r), l = n, u = l.startAt, h = l.onStart, d = l.onStartParams, f = l.immediateRender, _, m = W.to(s, pt({
                    ease: n.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: o,
                    overwrite: "auto",
                    duration: n.duration || Math.abs((o - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || z,
                    onStart: function() {
                        if (s.pause(),
                        !_) {
                            var p = n.duration || Math.abs((o - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                            m._dur !== p && ee(m, p, 0, 1).render(m._time, !0, !0),
                            _ = 1
                        }
                        h && h.apply(m, d || [])
                    }
                }, n));
                return f ? m.render(0) : m
            }
            ,
            e.tweenFromTo = function(r, n, s) {
                return this.tweenTo(n, pt({
                    startAt: {
                        time: ft(this, r)
                    }
                }, s))
            }
            ,
            e.recent = function() {
                return this._recent
            }
            ,
            e.nextLabel = function(r) {
                return r === void 0 && (r = this._time),
                dr(this, ft(this, r))
            }
            ,
            e.previousLabel = function(r) {
                return r === void 0 && (r = this._time),
                dr(this, ft(this, r), 1)
            }
            ,
            e.currentLabel = function(r) {
                return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + z)
            }
            ,
            e.shiftChildren = function(r, n, s) {
                s === void 0 && (s = 0);
                for (var o = this._first, l = this.labels, u; o; )
                    o._start >= s && (o._start += r,
                    o._end += r),
                    o = o._next;
                if (n)
                    for (u in l)
                        l[u] >= s && (l[u] += r);
                return Bt(this)
            }
            ,
            e.invalidate = function(r) {
                var n = this._first;
                for (this._lock = 0; n; )
                    n.invalidate(r),
                    n = n._next;
                return a.prototype.invalidate.call(this, r)
            }
            ,
            e.clear = function(r) {
                r === void 0 && (r = !0);
                for (var n = this._first, s; n; )
                    s = n._next,
                    this.remove(n),
                    n = s;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                r && (this.labels = {}),
                Bt(this)
            }
            ,
            e.totalDuration = function(r) {
                var n = 0, s = this, o = s._last, l = dt, u, h, d;
                if (arguments.length)
                    return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
                if (s._dirty) {
                    for (d = s.parent; o; )
                        u = o._prev,
                        o._dirty && o.totalDuration(),
                        h = o._start,
                        h > l && s._sort && o._ts && !s._lock ? (s._lock = 1,
                        gt(s, o, h - o._delay, 1)._lock = 0) : l = h,
                        h < 0 && o._ts && (n -= h,
                        (!d && !s._dp || d && d.smoothChildTiming) && (s._start += h / s._ts,
                        s._time -= h,
                        s._tTime -= h),
                        s.shiftChildren(-h, !1, -1 / 0),
                        l = 0),
                        o._end > n && o._ts && (n = o._end),
                        o = u;
                    ee(s, s === q && s._time > n ? s._time : n, 1, 1),
                    s._dirty = 0
                }
                return s._tDur
            }
            ,
            t.updateRoot = function(r) {
                if (q._ts && (Sr(q, Ie(r, q)),
                Tr = nt.frame),
                nt.frame >= ur) {
                    ur += ot.autoSleep || 120;
                    var n = q._first;
                    if ((!n || !n._ts) && ot.autoSleep && nt._listeners.length < 2) {
                        for (; n && !n._ts; )
                            n = n._next;
                        n || nt.sleep()
                    }
                }
            }
            ,
            t
        }(xe);
        pt(J.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        Os = function(t, e, i, r, n, s, o) {
            var l = new it(this._pt,t,e,0,1,Ii,null,n), u = 0, h = 0, d, f, _, m, c, p, g, v;
            for (l.b = i,
            l.e = r,
            i += "",
            r += "",
            (g = ~r.indexOf("random(")) && (r = re(r)),
            s && (v = [i, r],
            s(v, t, e),
            i = v[0],
            r = v[1]),
            f = i.match(ii) || []; d = ii.exec(r); )
                m = d[0],
                c = r.substring(u, d.index),
                _ ? _ = (_ + 1) % 5 : c.substr(-5) === "rgba(" && (_ = 1),
                m !== f[h++] && (p = parseFloat(f[h - 1]) || 0,
                l._pt = {
                    _next: l._pt,
                    p: c || h === 1 ? c : ",",
                    s: p,
                    c: m.charAt(1) === "=" ? Yt(p, m) - p : parseFloat(m) - p,
                    m: _ && _ < 4 ? Math.round : 0
                },
                u = ii.lastIndex);
            return l.c = u < r.length ? r.substring(u, r.length) : "",
            l.fp = o,
            (Ti.test(r) || g) && (l.e = 0),
            this._pt = l,
            l
        }
        ,
        Mi = function(t, e, i, r, n, s, o, l, u, h) {
            U(r) && (r = r(n || 0, t, s));
            var d = t[e], f = i !== "get" ? i : U(d) ? u ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : d, _ = U(d) ? u ? Rs : Gr : Ri, m;
            if (G(r) && (~r.indexOf("random(") && (r = re(r)),
            r.charAt(1) === "=" && (m = Yt(f, r) + ($(f) || 0),
            (m || m === 0) && (r = m))),
            !h || f !== r || vi)
                return !isNaN(f * r) && r !== "" ? (m = new it(this._pt,t,e,+f || 0,r - (f || 0),typeof d == "boolean" ? Fs : jr,0,_),
                u && (m.fp = u),
                o && m.modifier(o, this, t),
                this._pt = m) : (!d && !(e in t) && ze(e, r),
                Os.call(this, t, e, f, r, _, l || ot.stringFilter, u))
        }
        ,
        Ls = function(t, e, i, r, n) {
            if (U(t) && (t = ge(t, n, e, i, r)),
            !vt(t) || t.style && t.nodeType || Z(t) || vr(t))
                return G(t) ? ge(t, n, e, i, r) : t;
            var s = {}, o;
            for (o in t)
                s[o] = ge(t[o], n, e, i, r);
            return s
        }
        ,
        Ai = function(t, e, i, r, n, s) {
            var o, l, u, h;
            if (rt[t] && (o = new rt[t]).init(n, o.rawVars ? e[t] : Ls(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = l = new it(i._pt,n,t,0,1,o.render,o,0,o.priority),
            i !== Zt))
                for (u = i._ptLookup[i._targets.indexOf(n)],
                h = o._props.length; h--; )
                    u[o._props[h]] = l;
            return o
        }
        ,
        Di = function a(t, e, i) {
            var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, l = r.lazy, u = r.onUpdate, h = r.runBackwards, d = r.yoyoEase, f = r.keyframes, _ = r.autoRevert, m = t._dur, c = t._startAt, p = t._targets, g = t.parent, v = g && g.data === "nested" ? g.vars.targets : p, y = t._overwrite === "auto" && !wi, x = t.timeline, w, S, T, k, b, M, R, A, D, X, Y, C, P;
            if (x && (!f || !n) && (n = "none"),
            t._ease = qt(n, Kt.ease),
            t._yEase = d ? Ur(qt(d === !0 ? n : d, Kt.ease)) : 0,
            d && t._yoyo && !t._repeat && (d = t._yEase,
            t._yEase = t._ease,
            t._ease = d),
            t._from = !x && !!r.runBackwards,
            !x || f && !r.stagger) {
                if (A = p[0] ? Mt(p[0]).harness : 0,
                C = A && r[A.prop],
                w = Re(r, ki),
                c && (c._zTime < 0 && c.progress(1),
                e < 0 && h && o && !_ ? c.render(-1, !0) : c.revert(h && m ? Oe : ns),
                c._lazy = 0),
                s) {
                    if (At(t._startAt = W.set(p, pt({
                        data: "isStart",
                        overwrite: !1,
                        parent: g,
                        immediateRender: !0,
                        lazy: !c && st(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: u && function() {
                            return lt(t, "onUpdate")
                        }
                        ,
                        stagger: 0
                    }, s))),
                    t._startAt._dp = 0,
                    t._startAt._sat = t,
                    e < 0 && (Q || !o && !_) && t._startAt.revert(Oe),
                    o && m && e <= 0 && i <= 0) {
                        e && (t._zTime = e);
                        return
                    }
                } else if (h && m && !c) {
                    if (e && (o = !1),
                    T = pt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && !c && st(l),
                        immediateRender: o,
                        stagger: 0,
                        parent: g
                    }, w),
                    C && (T[A.prop] = C),
                    At(t._startAt = W.set(p, T)),
                    t._startAt._dp = 0,
                    t._startAt._sat = t,
                    e < 0 && (Q ? t._startAt.revert(Oe) : t._startAt.render(-1, !0)),
                    t._zTime = e,
                    !o)
                        a(t._startAt, z, z);
                    else if (!e)
                        return
                }
                for (t._pt = t._ptCache = 0,
                l = m && st(l) || l && !m,
                S = 0; S < p.length; S++) {
                    if (b = p[S],
                    R = b._gsap || Ci(p)[S]._gsap,
                    t._ptLookup[S] = X = {},
                    fi[R.id] && Lt.length && De(),
                    Y = v === p ? S : v.indexOf(b),
                    A && (D = new A).init(b, C || w, t, Y, v) !== !1 && (t._pt = k = new it(t._pt,b,D.name,0,1,D.render,D,0,D.priority),
                    D._props.forEach(function(O) {
                        X[O] = k
                    }),
                    D.priority && (M = 1)),
                    !A || C)
                        for (T in w)
                            rt[T] && (D = Ai(T, w, t, Y, b, v)) ? D.priority && (M = 1) : X[T] = k = Mi.call(t, b, T, "get", w[T], Y, v, 0, r.stringFilter);
                    t._op && t._op[S] && t.kill(b, t._op[S]),
                    y && t._pt && (Ot = t,
                    q.killTweensOf(b, X, t.globalTime(e)),
                    P = !t.parent,
                    Ot = 0),
                    t._pt && l && (fi[R.id] = 1)
                }
                M && Ni(t),
                t._onInit && t._onInit(t)
            }
            t._onUpdate = u,
            t._initted = (!t._op || t._pt) && !P,
            f && e <= 0 && x.render(dt, !0, !0)
        }
        ,
        Ms = function(t, e, i, r, n, s, o, l) {
            var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, d, f, _;
            if (!u)
                for (u = t._ptCache[e] = [],
                f = t._ptLookup,
                _ = t._targets.length; _--; ) {
                    if (h = f[_][e],
                    h && h.d && h.d._pt)
                        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
                            h = h._next;
                    if (!h)
                        return vi = 1,
                        t.vars[e] = "+=0",
                        Di(t, o),
                        vi = 0,
                        l ? ve(e + " not eligible for reset") : 1;
                    u.push(h)
                }
            for (_ = u.length; _--; )
                d = u[_],
                h = d._pt || d,
                h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c,
                h.c = i - h.s,
                d.e && (d.e = H(i) + $(d.e)),
                d.b && (d.b = h.s + $(d.b))
        }
        ,
        As = function(t, e) {
            var i = t[0] ? Mt(t[0]).harness : 0, r = i && i.aliases, n, s, o, l;
            if (!r)
                return e;
            n = Ut({}, e);
            for (s in r)
                if (s in n)
                    for (l = r[s].split(","),
                    o = l.length; o--; )
                        n[l[o]] = n[s];
            return n
        }
        ,
        Ds = function(t, e, i, r) {
            var n = e.ease || r || "power1.inOut", s, o;
            if (Z(e))
                o = i[t] || (i[t] = []),
                e.forEach(function(l, u) {
                    return o.push({
                        t: u / (e.length - 1) * 100,
                        v: l,
                        e: n
                    })
                });
            else
                for (s in e)
                    o = i[s] || (i[s] = []),
                    s === "ease" || o.push({
                        t: parseFloat(t),
                        v: e[s],
                        e: n
                    })
        }
        ,
        ge = function(t, e, i, r, n) {
            return U(t) ? t.call(e, i, r, n) : G(t) && ~t.indexOf("random(") ? re(t) : t
        }
        ,
        Wr = Ei + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Xr = {};
        et(Wr + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
            return Xr[a] = 1
        });
        W = function(a) {
            mr(t, a);
            function t(i, r, n, s) {
                var o;
                typeof r == "number" && (n.duration = r,
                r = n,
                n = null),
                o = a.call(this, s ? r : pe(r)) || this;
                var l = o.vars, u = l.duration, h = l.delay, d = l.immediateRender, f = l.stagger, _ = l.overwrite, m = l.keyframes, c = l.defaults, p = l.scrollTrigger, g = l.yoyoEase, v = r.parent || q, y = (Z(i) || vr(i) ? kt(i[0]) : "length"in r) ? [i] : _t(i), x, w, S, T, k, b, M, R;
                if (o._targets = y.length ? Ci(y) : ve("GSAP target " + i + " not found. https://gsap.com", !ot.nullTargetWarn) || [],
                o._ptLookup = [],
                o._overwrite = _,
                m || f || Pe(u) || Pe(h)) {
                    if (r = o.vars,
                    x = o.timeline = new J({
                        data: "nested",
                        defaults: c || {},
                        targets: v && v.data === "nested" ? v.vars.targets : y
                    }),
                    x.kill(),
                    x.parent = x._dp = Tt(o),
                    x._start = 0,
                    f || Pe(u) || Pe(h)) {
                        if (T = y.length,
                        M = f && Dr(f),
                        vt(f))
                            for (k in f)
                                ~Wr.indexOf(k) && (R || (R = {}),
                                R[k] = f[k]);
                        for (w = 0; w < T; w++)
                            S = Re(r, Xr),
                            S.stagger = 0,
                            g && (S.yoyoEase = g),
                            R && Ut(S, R),
                            b = y[w],
                            S.duration = +ge(u, Tt(o), w, b, y),
                            S.delay = (+ge(h, Tt(o), w, b, y) || 0) - o._delay,
                            !f && T === 1 && S.delay && (o._delay = h = S.delay,
                            o._start += h,
                            S.delay = 0),
                            x.to(b, S, M ? M(w, b, y) : 0),
                            x._ease = L.none;
                        x.duration() ? u = h = 0 : o.timeline = 0
                    } else if (m) {
                        pe(pt(x.vars.defaults, {
                            ease: "none"
                        })),
                        x._ease = qt(m.ease || r.ease || "none");
                        var A = 0, D, X, Y;
                        if (Z(m))
                            m.forEach(function(C) {
                                return x.to(y, C, ">")
                            }),
                            x.duration();
                        else {
                            S = {};
                            for (k in m)
                                k === "ease" || k === "easeEach" || Ds(k, m[k], S, m.easeEach);
                            for (k in S)
                                for (D = S[k].sort(function(C, P) {
                                    return C.t - P.t
                                }),
                                A = 0,
                                w = 0; w < D.length; w++)
                                    X = D[w],
                                    Y = {
                                        ease: X.e,
                                        duration: (X.t - (w ? D[w - 1].t : 0)) / 100 * u
                                    },
                                    Y[k] = X.v,
                                    x.to(y, Y, A),
                                    A += Y.duration;
                            x.duration() < u && x.to({}, {
                                duration: u - x.duration()
                            })
                        }
                    }
                    u || o.duration(u = x.duration())
                } else
                    o.timeline = 0;
                return _ === !0 && !wi && (Ot = Tt(o),
                q.killTweensOf(y),
                Ot = 0),
                gt(v, Tt(o), n),
                r.reversed && o.reverse(),
                r.paused && o.paused(!0),
                (d || !u && !m && o._start === j(v._time) && st(d) && hs(Tt(o)) && v.data !== "nested") && (o._tTime = -z,
                o.render(Math.max(0, -h) || 0)),
                p && Or(Tt(o), p),
                o
            }
            var e = t.prototype;
            return e.render = function(r, n, s) {
                var o = this._time, l = this._tDur, u = this._dur, h = r < 0, d = r > l - z && !h ? l : r < z ? 0 : r, f, _, m, c, p, g, v, y, x;
                if (!u)
                    fs(this, r, n, s);
                else if (d !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
                    if (f = d,
                    y = this.timeline,
                    this._repeat) {
                        if (c = u + this._rDelay,
                        this._repeat < -1 && h)
                            return this.totalTime(c * 100 + r, n, s);
                        if (f = j(d % c),
                        d === l ? (m = this._repeat,
                        f = u) : (m = ~~(d / c),
                        m && m === j(d / c) && (f = u,
                        m--),
                        f > u && (f = u)),
                        g = this._yoyo && m & 1,
                        g && (x = this._yEase,
                        f = u - f),
                        p = te(this._tTime, c),
                        f === o && !s && this._initted && m === p)
                            return this._tTime = d,
                            this;
                        m !== p && (y && this._yEase && Hr(y, g),
                        this.vars.repeatRefresh && !g && !this._lock && this._time !== c && this._initted && (this._lock = s = 1,
                        this.render(j(c * m), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Lr(this, h ? r : f, s, n, d))
                            return this._tTime = 0,
                            this;
                        if (o !== this._time && !(s && this.vars.repeatRefresh && m !== p))
                            return this;
                        if (u !== this._dur)
                            return this.render(r, n, s)
                    }
                    if (this._tTime = d,
                    this._time = f,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = v = (x || this._ease)(f / u),
                    this._from && (this.ratio = v = 1 - v),
                    f && !o && !n && !m && (lt(this, "onStart"),
                    this._tTime !== d))
                        return this;
                    for (_ = this._pt; _; )
                        _.r(v, _.d),
                        _ = _._next;
                    y && y.render(r < 0 ? r : y._dur * y._ease(f / this._dur), n, s) || this._startAt && (this._zTime = r),
                    this._onUpdate && !n && (h && di(this, r, n, s),
                    lt(this, "onUpdate")),
                    this._repeat && m !== p && this.vars.onRepeat && !n && this.parent && lt(this, "onRepeat"),
                    (d === this._tDur || !d) && this._tTime === d && (h && !this._onUpdate && di(this, r, !0, !0),
                    (r || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && At(this, 1),
                    !n && !(h && !o) && (d || o || g) && (lt(this, d === l ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(d < l && this.timeScale() > 0) && this._prom()))
                }
                return this
            }
            ,
            e.targets = function() {
                return this._targets
            }
            ,
            e.invalidate = function(r) {
                return (!r || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(r),
                a.prototype.invalidate.call(this, r)
            }
            ,
            e.resetTo = function(r, n, s, o, l) {
                we || nt.wake(),
                this._ts || this.play();
                var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
                return this._initted || Di(this, u),
                h = this._ease(u / this._dur),
                Ms(this, r, n, s, o, h, u, l) ? this.resetTo(r, n, s, o, 1) : (Ve(this, 0),
                this.parent || Cr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                this.render(0))
            }
            ,
            e.kill = function(r, n) {
                if (n === void 0 && (n = "all"),
                !r && (!n || n === "all"))
                    return this._lazy = this._pt = 0,
                    this.parent ? de(this) : this;
                if (this.timeline) {
                    var s = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(r, n, Ot && Ot.vars.overwrite !== !0)._first || de(this),
                    this.parent && s !== this.timeline.totalDuration() && ee(this, this._dur * this.timeline._tDur / s, 0, 1),
                    this
                }
                var o = this._targets, l = r ? _t(r) : o, u = this._ptLookup, h = this._pt, d, f, _, m, c, p, g;
                if ((!n || n === "all") && ls(o, l))
                    return n === "all" && (this._pt = 0),
                    de(this);
                for (d = this._op = this._op || [],
                n !== "all" && (G(n) && (c = {},
                et(n, function(v) {
                    return c[v] = 1
                }),
                n = c),
                n = As(o, n)),
                g = o.length; g--; )
                    if (~l.indexOf(o[g])) {
                        f = u[g],
                        n === "all" ? (d[g] = n,
                        m = f,
                        _ = {}) : (_ = d[g] = d[g] || {},
                        m = n);
                        for (c in m)
                            p = f && f[c],
                            p && ((!("kill"in p.d) || p.d.kill(c) === !0) && Be(this, p, "_pt"),
                            delete f[c]),
                            _ !== "all" && (_[c] = 1)
                    }
                return this._initted && !this._pt && h && de(this),
                this
            }
            ,
            t.to = function(r, n) {
                return new t(r,n,arguments[2])
            }
            ,
            t.from = function(r, n) {
                return me(1, arguments)
            }
            ,
            t.delayedCall = function(r, n, s, o) {
                return new t(n,0,{
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: r,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: s,
                    onReverseCompleteParams: s,
                    callbackScope: o
                })
            }
            ,
            t.fromTo = function(r, n, s) {
                return me(2, arguments)
            }
            ,
            t.set = function(r, n) {
                return n.duration = 0,
                n.repeatDelay || (n.repeat = 0),
                new t(r,n)
            }
            ,
            t.killTweensOf = function(r, n, s) {
                return q.killTweensOf(r, n, s)
            }
            ,
            t
        }(xe);
        pt(W.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        });
        et("staggerTo,staggerFrom,staggerFromTo", function(a) {
            W[a] = function() {
                var t = new J
                  , e = pi.call(arguments, 0);
                return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0),
                t[a].apply(t, e)
            }
        });
        Ri = function(t, e, i) {
            return t[e] = i
        }
        ,
        Gr = function(t, e, i) {
            return t[e](i)
        }
        ,
        Rs = function(t, e, i, r) {
            return t[e](r.fp, i)
        }
        ,
        Is = function(t, e, i) {
            return t.setAttribute(e, i)
        }
        ,
        Ue = function(t, e) {
            return U(t[e]) ? Gr : Ne(t[e]) && t.setAttribute ? Is : Ri
        }
        ,
        jr = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
        }
        ,
        Fs = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }
        ,
        Ii = function(t, e) {
            var i = e._pt
              , r = "";
            if (!t && e.b)
                r = e.b;
            else if (t === 1 && e.e)
                r = e.e;
            else {
                for (; i; )
                    r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
                    i = i._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        }
        ,
        Fi = function(t, e) {
            for (var i = e._pt; i; )
                i.r(t, i.d),
                i = i._next
        }
        ,
        Ns = function(t, e, i, r) {
            for (var n = this._pt, s; n; )
                s = n._next,
                n.p === r && n.modifier(t, e, i),
                n = s
        }
        ,
        zs = function(t) {
            for (var e = this._pt, i, r; e; )
                r = e._next,
                e.p === t && !e.op || e.op === t ? Be(this, e, "_pt") : e.dep || (i = 1),
                e = r;
            return !i
        }
        ,
        Bs = function(t, e, i, r) {
            r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
        }
        ,
        Ni = function(t) {
            for (var e = t._pt, i, r, n, s; e; ) {
                for (i = e._next,
                r = n; r && r.pr > e.pr; )
                    r = r._next;
                (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
                (e._next = r) ? r._prev = e : s = e,
                e = i
            }
            t._pt = n
        }
        ,
        it = function() {
            function a(e, i, r, n, s, o, l, u, h) {
                this.t = i,
                this.s = n,
                this.c = s,
                this.p = r,
                this.r = o || jr,
                this.d = l || this,
                this.set = u || Ri,
                this.pr = h || 0,
                this._next = e,
                e && (e._prev = this)
            }
            var t = a.prototype;
            return t.modifier = function(i, r, n) {
                this.mSet = this.mSet || this.set,
                this.set = Bs,
                this.m = i,
                this.mt = n,
                this.tween = r
            }
            ,
            a
        }();
        et(Ei + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
            return ki[a] = 1
        });
        ut.TweenMax = ut.TweenLite = W;
        ut.TimelineLite = ut.TimelineMax = J;
        q = new J({
            sortChildren: !1,
            defaults: Kt,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        });
        ot.stringFilter = Oi;
        Vt = [],
        Me = {},
        qs = [],
        pr = 0,
        Vs = 0,
        ai = function(t) {
            return (Me[t] || qs).map(function(e) {
                return e()
            })
        }
        ,
        yi = function() {
            var t = Date.now()
              , e = [];
            t - pr > 2 && (ai("matchMediaInit"),
            Vt.forEach(function(i) {
                var r = i.queries, n = i.conditions, s, o, l, u;
                for (o in r)
                    s = mt.matchMedia(r[o]).matches,
                    s && (l = 1),
                    s !== n[o] && (n[o] = s,
                    u = 1);
                u && (i.revert(),
                l && e.push(i))
            }),
            ai("matchMediaRevert"),
            e.forEach(function(i) {
                return i.onMatch(i, function(r) {
                    return i.add(null, r)
                })
            }),
            pr = t,
            ai("matchMedia"))
        }
        ,
        Jr = function() {
            function a(e, i) {
                this.selector = i && mi(i),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                this.id = Vs++,
                e && this.add(e)
            }
            var t = a.prototype;
            return t.add = function(i, r, n) {
                U(i) && (n = r,
                r = i,
                i = U);
                var s = this
                  , o = function() {
                    var u = B, h = s.selector, d;
                    return u && u !== s && u.data.push(s),
                    n && (s.selector = mi(n)),
                    B = s,
                    d = r.apply(s, arguments),
                    U(d) && s._r.push(d),
                    B = u,
                    s.selector = h,
                    s.isReverted = !1,
                    d
                };
                return s.last = o,
                i === U ? o(s, function(l) {
                    return s.add(null, l)
                }) : i ? s[i] = o : o
            }
            ,
            t.ignore = function(i) {
                var r = B;
                B = null,
                i(this),
                B = r
            }
            ,
            t.getTweens = function() {
                var i = [];
                return this.data.forEach(function(r) {
                    return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof W && !(r.parent && r.parent.data === "nested") && i.push(r)
                }),
                i
            }
            ,
            t.clear = function() {
                this._r.length = this.data.length = 0
            }
            ,
            t.kill = function(i, r) {
                var n = this;
                if (i ? function() {
                    for (var o = n.getTweens(), l = n.data.length, u; l--; )
                        u = n.data[l],
                        u.data === "isFlip" && (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function(h) {
                            return o.splice(o.indexOf(h), 1)
                        }));
                    for (o.map(function(h) {
                        return {
                            g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
                            t: h
                        }
                    }).sort(function(h, d) {
                        return d.g - h.g || -1 / 0
                    }).forEach(function(h) {
                        return h.t.revert(i)
                    }),
                    l = n.data.length; l--; )
                        u = n.data[l],
                        u instanceof J ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                        u.kill()) : !(u instanceof W) && u.revert && u.revert(i);
                    n._r.forEach(function(h) {
                        return h(i, n)
                    }),
                    n.isReverted = !0
                }() : this.data.forEach(function(o) {
                    return o.kill && o.kill()
                }),
                this.clear(),
                r)
                    for (var s = Vt.length; s--; )
                        Vt[s].id === this.id && Vt.splice(s, 1)
            }
            ,
            t.revert = function(i) {
                this.kill(i || {})
            }
            ,
            a
        }(),
        Us = function() {
            function a(e) {
                this.contexts = [],
                this.scope = e,
                B && B.data.push(this)
            }
            var t = a.prototype;
            return t.add = function(i, r, n) {
                vt(i) || (i = {
                    matches: i
                });
                var s = new Jr(0,n || this.scope), o = s.conditions = {}, l, u, h;
                B && !s.selector && (s.selector = B.selector),
                this.contexts.push(s),
                r = s.add("onMatch", r),
                s.queries = i;
                for (u in i)
                    u === "all" ? h = 1 : (l = mt.matchMedia(i[u]),
                    l && (Vt.indexOf(s) < 0 && Vt.push(s),
                    (o[u] = l.matches) && (h = 1),
                    l.addListener ? l.addListener(yi) : l.addEventListener("change", yi)));
                return h && r(s, function(d) {
                    return s.add(null, d)
                }),
                this
            }
            ,
            t.revert = function(i) {
                this.kill(i || {})
            }
            ,
            t.kill = function(i) {
                this.contexts.forEach(function(r) {
                    return r.kill(i, !0)
                })
            }
            ,
            a
        }(),
        Fe = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                e.forEach(function(r) {
                    return Br(r)
                })
            },
            timeline: function(t) {
                return new J(t)
            },
            getTweensOf: function(t, e) {
                return q.getTweensOf(t, e)
            },
            getProperty: function(t, e, i, r) {
                G(t) && (t = _t(t)[0]);
                var n = Mt(t || {}).get
                  , s = i ? Er : kr;
                return i === "native" && (i = ""),
                t && (e ? s((rt[e] && rt[e].get || n)(t, e, i, r)) : function(o, l, u) {
                    return s((rt[o] && rt[o].get || n)(t, o, l, u))
                }
                )
            },
            quickSetter: function(t, e, i) {
                if (t = _t(t),
                t.length > 1) {
                    var r = t.map(function(h) {
                        return K.quickSetter(h, e, i)
                    })
                      , n = r.length;
                    return function(h) {
                        for (var d = n; d--; )
                            r[d](h)
                    }
                }
                t = t[0] || {};
                var s = rt[e]
                  , o = Mt(t)
                  , l = o.harness && (o.harness.aliases || {})[e] || e
                  , u = s ? function(h) {
                    var d = new s;
                    Zt._pt = 0,
                    d.init(t, i ? h + i : h, Zt, 0, [t]),
                    d.render(1, d),
                    Zt._pt && Fi(1, Zt)
                }
                : o.set(t, l);
                return s ? u : function(h) {
                    return u(t, l, i ? h + i : h, o, 1)
                }
            },
            quickTo: function(t, e, i) {
                var r, n = K.to(t, Ut((r = {},
                r[e] = "+=0.1",
                r.paused = !0,
                r), i || {})), s = function(l, u, h) {
                    return n.resetTo(e, l, u, h)
                };
                return s.tween = n,
                s
            },
            isTweening: function(t) {
                return q.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = qt(t.ease, Kt.ease)),
                hr(Kt, t || {})
            },
            config: function(t) {
                return hr(ot, t || {})
            },
            registerEffect: function(t) {
                var e = t.name
                  , i = t.effect
                  , r = t.plugins
                  , n = t.defaults
                  , s = t.extendTimeline;
                (r || "").split(",").forEach(function(o) {
                    return o && !rt[o] && !ut[o] && ve(e + " effect requires " + o + " plugin.")
                }),
                ri[e] = function(o, l, u) {
                    return i(_t(o), pt(l || {}, n), u)
                }
                ,
                s && (J.prototype[e] = function(o, l, u) {
                    return this.add(ri[e](o, vt(l) ? l : (u = l) && {}, this), u)
                }
                )
            },
            registerEase: function(t, e) {
                L[t] = qt(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? qt(t, e) : L
            },
            getById: function(t) {
                return q.getById(t)
            },
            exportRoot: function(t, e) {
                t === void 0 && (t = {});
                var i = new J(t), r, n;
                for (i.smoothChildTiming = st(t.smoothChildTiming),
                q.remove(i),
                i._dp = 0,
                i._time = i._tTime = q._time,
                r = q._first; r; )
                    n = r._next,
                    (e || !(!r._dur && r instanceof W && r.vars.onComplete === r._targets[0])) && gt(i, r, r._start - r._delay),
                    r = n;
                return gt(q, i, 0),
                i
            },
            context: function(t, e) {
                return t ? new Jr(t,e) : B
            },
            matchMedia: function(t) {
                return new Us(t)
            },
            matchMediaRefresh: function() {
                return Vt.forEach(function(t) {
                    var e = t.conditions, i, r;
                    for (r in e)
                        e[r] && (e[r] = !1,
                        i = 1);
                    i && t.revert()
                }) || yi()
            },
            addEventListener: function(t, e) {
                var i = Me[t] || (Me[t] = []);
                ~i.indexOf(e) || i.push(e)
            },
            removeEventListener: function(t, e) {
                var i = Me[t]
                  , r = i && i.indexOf(e);
                r >= 0 && i.splice(r, 1)
            },
            utils: {
                wrap: ws,
                wrapYoyo: xs,
                distribute: Dr,
                random: Ir,
                snap: Rr,
                normalize: ys,
                getUnit: $,
                clamp: ps,
                splitColor: qr,
                toArray: _t,
                selector: mi,
                mapRange: Nr,
                pipe: gs,
                unitize: vs,
                interpolate: bs,
                shuffle: Ar
            },
            install: xr,
            effects: ri,
            ticker: nt,
            updateRoot: J.updateRoot,
            plugins: rt,
            globalTimeline: q,
            core: {
                PropTween: it,
                globals: br,
                Tween: W,
                Timeline: J,
                Animation: xe,
                getCache: Mt,
                _removeLinkedListItem: Be,
                reverting: function() {
                    return Q
                },
                context: function(t) {
                    return t && B && (B.data.push(t),
                    t._ctx = B),
                    B
                },
                suppressOverwrites: function(t) {
                    return wi = t
                }
            }
        };
        et("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
            return Fe[a] = W[a]
        });
        nt.add(J.updateRoot);
        Zt = Fe.to({}, {
            duration: 0
        });
        Hs = function(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
                i = i._next;
            return i
        }
        ,
        Ys = function(t, e) {
            var i = t._targets, r, n, s;
            for (r in e)
                for (n = i.length; n--; )
                    s = t._ptLookup[n][r],
                    s && (s = s.d) && (s._pt && (s = Hs(s, r)),
                    s && s.modifier && s.modifier(e[r], t, i[n], r))
        }
        ,
        li = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(r, n, s) {
                    s._onInit = function(o) {
                        var l, u;
                        if (G(n) && (l = {},
                        et(n, function(h) {
                            return l[h] = 1
                        }),
                        n = l),
                        e) {
                            l = {};
                            for (u in n)
                                l[u] = e(n[u]);
                            n = l
                        }
                        Ys(o, n)
                    }
                }
            }
        }
        ,
        K = Fe.registerPlugin({
            name: "attr",
            init: function(t, e, i, r, n) {
                var s, o, l;
                this.tween = i;
                for (s in e)
                    l = t.getAttribute(s) || "",
                    o = this.add(t, "setAttribute", (l || 0) + "", e[s], r, n, 0, 0, s),
                    o.op = s,
                    o.b = l,
                    this._props.push(s)
            },
            render: function(t, e) {
                for (var i = e._pt; i; )
                    Q ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
                    i = i._next
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--; )
                    this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
            }
        }, li("roundProps", gi), li("modifiers"), li("snap", Rr)) || Fe;
        W.version = J.version = K.version = "3.12.5";
        wr = 1;
        xi() && ie();
        Ws = L.Power0,
        Xs = L.Power1,
        Gs = L.Power2,
        js = L.Power3,
        Js = L.Power4,
        $s = L.Linear,
        Qs = L.Quad,
        Zs = L.Cubic,
        Ks = L.Quart,
        to = L.Quint,
        eo = L.Strong,
        io = L.Elastic,
        ro = L.Back,
        no = L.SteppedEase,
        so = L.Bounce,
        oo = L.Sine,
        ao = L.Expo,
        lo = L.Circ
    }
    );
    var $r, Rt, se, Wi, Jt, uo, Qr, Xi, ho, Ct, jt, oe, ne, Zr, Gi, co, fo, yt, Vi, _o, po, mo, on, an, go, vo, yo, wo, xo, bo, V, at, To, ln, So, un, hn, Ui, wt, Kr, ae, Hi, Bi, tn, cn, fn, $t, It, en, ko, Ft, Et, Eo, rn, Co, Po, He, Se, dn, _n, nn, ji, Yi, ke, Ye, qi, Oo, Xt, Te, Gt, pn, Lo, Mo, sn, Ao, Ji, mn = I( () => {
        E();
        zi();
        ho = function() {
            return typeof window != "undefined"
        }
        ,
        Ct = {},
        jt = 180 / Math.PI,
        oe = Math.PI / 180,
        ne = Math.atan2,
        Zr = 1e8,
        Gi = /([A-Z])/g,
        co = /(left|right|width|margin|padding|x)/i,
        fo = /[\s,\(]\S/,
        yt = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Vi = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        }
        ,
        _o = function(t, e) {
            return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        }
        ,
        po = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        }
        ,
        mo = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        }
        ,
        on = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }
        ,
        an = function(t, e) {
            return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
        }
        ,
        go = function(t, e, i) {
            return t.style[e] = i
        }
        ,
        vo = function(t, e, i) {
            return t.style.setProperty(e, i)
        }
        ,
        yo = function(t, e, i) {
            return t._gsap[e] = i
        }
        ,
        wo = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        }
        ,
        xo = function(t, e, i, r, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i,
            s.renderTransform(n, s)
        }
        ,
        bo = function(t, e, i, r, n) {
            var s = t._gsap;
            s[e] = i,
            s.renderTransform(n, s)
        }
        ,
        V = "transform",
        at = V + "Origin",
        To = function a(t, e) {
            var i = this
              , r = this.target
              , n = r.style
              , s = r._gsap;
            if (t in Ct && n) {
                if (this.tfm = this.tfm || {},
                t !== "transform")
                    t = yt[t] || t,
                    ~t.indexOf(",") ? t.split(",").forEach(function(o) {
                        return i.tfm[o] = Et(r, o)
                    }) : this.tfm[t] = s.x ? s[t] : Et(r, t),
                    t === at && (this.tfm.zOrigin = s.zOrigin);
                else
                    return yt.transform.split(",").forEach(function(o) {
                        return a.call(i, o, e)
                    });
                if (this.props.indexOf(V) >= 0)
                    return;
                s.svg && (this.svgo = r.getAttribute("data-svg-origin"),
                this.props.push(at, e, "")),
                t = V
            }
            (n || e) && this.props.push(t, e, n[t])
        }
        ,
        ln = function(t) {
            t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
        }
        ,
        So = function() {
            var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
            for (n = 0; n < t.length; n += 3)
                t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Gi, "-$1").toLowerCase());
            if (this.tfm) {
                for (s in this.tfm)
                    r[s] = this.tfm[s];
                r.svg && (r.renderTransform(),
                e.setAttribute("data-svg-origin", this.svgo || "")),
                n = Xi(),
                (!n || !n.isStart) && !i[V] && (ln(i),
                r.zOrigin && i[at] && (i[at] += " " + r.zOrigin + "px",
                r.zOrigin = 0,
                r.renderTransform()),
                r.uncache = 1)
            }
        }
        ,
        un = function(t, e) {
            var i = {
                target: t,
                props: [],
                revert: So,
                save: To
            };
            return t._gsap || K.core.getCache(t),
            e && e.split(",").forEach(function(r) {
                return i.save(r)
            }),
            i
        }
        ,
        Ui = function(t, e) {
            var i = Rt.createElementNS ? Rt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Rt.createElement(t);
            return i && i.style ? i : Rt.createElement(t)
        }
        ,
        wt = function a(t, e, i) {
            var r = getComputedStyle(t);
            return r[e] || r.getPropertyValue(e.replace(Gi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, ae(e) || e, 1) || ""
        }
        ,
        Kr = "O,Moz,ms,Ms,Webkit".split(","),
        ae = function(t, e, i) {
            var r = e || Jt
              , n = r.style
              , s = 5;
            if (t in n && !i)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Kr[s] + t in n); )
                ;
            return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Kr[s] : "") + t
        }
        ,
        Hi = function() {
            ho() && window.document && ($r = window,
            Rt = $r.document,
            se = Rt.documentElement,
            Jt = Ui("div") || {
                style: {}
            },
            uo = Ui("div"),
            V = ae(V),
            at = V + "Origin",
            Jt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            hn = !!ae("perspective"),
            Xi = K.core.reverting,
            Wi = 1)
        }
        ,
        Bi = function a(t) {
            var e = Ui("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
            if (se.appendChild(e),
            e.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    s = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = a
                } catch (o) {}
            else
                this._gsapBBox && (s = this._gsapBBox());
            return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
            se.removeChild(e),
            this.style.cssText = n,
            s
        }
        ,
        tn = function(t, e) {
            for (var i = e.length; i--; )
                if (t.hasAttribute(e[i]))
                    return t.getAttribute(e[i])
        }
        ,
        cn = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (i) {
                e = Bi.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Bi || (e = Bi.call(t, !0)),
            e && !e.width && !e.x && !e.y ? {
                x: +tn(t, ["x", "cx", "x1"]) || 0,
                y: +tn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : e
        }
        ,
        fn = function(t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && cn(t))
        }
        ,
        $t = function(t, e) {
            if (e) {
                var i = t.style, r;
                e in Ct && e !== at && (e = V),
                i.removeProperty ? (r = e.substr(0, 2),
                (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
                i.removeProperty(r === "--" ? e : e.replace(Gi, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        }
        ,
        It = function(t, e, i, r, n, s) {
            var o = new it(t._pt,e,i,0,1,s ? an : on);
            return t._pt = o,
            o.b = r,
            o.e = n,
            t._props.push(i),
            o
        }
        ,
        en = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        ko = {
            grid: 1,
            flex: 1
        },
        Ft = function a(t, e, i, r) {
            var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = Jt.style, l = co.test(e), u = t.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, f = r === "px", _ = r === "%", m, c, p, g;
            if (r === s || !n || en[r] || en[s])
                return n;
            if (s !== "px" && !f && (n = a(t, e, i, "px")),
            g = t.getCTM && fn(t),
            (_ || s === "%") && (Ct[e] || ~e.indexOf("adius")))
                return m = g ? t.getBBox()[l ? "width" : "height"] : t[h],
                H(_ ? n / m * d : n / 100 * m);
            if (o[l ? "width" : "height"] = d + (f ? s : r),
            c = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode,
            g && (c = (t.ownerSVGElement || {}).parentNode),
            (!c || c === Rt || !c.appendChild) && (c = Rt.body),
            p = c._gsap,
            p && _ && p.width && l && p.time === nt.time && !p.uncache)
                return H(n / p.width * d);
            if (_ && (e === "height" || e === "width")) {
                var v = t.style[e];
                t.style[e] = d + r,
                m = t[h],
                v ? t.style[e] = v : $t(t, e)
            } else
                (_ || s === "%") && !ko[wt(c, "display")] && (o.position = wt(t, "position")),
                c === t && (o.position = "static"),
                c.appendChild(Jt),
                m = Jt[h],
                c.removeChild(Jt),
                o.position = "absolute";
            return l && _ && (p = Mt(c),
            p.time = nt.time,
            p.width = c[h]),
            H(f ? m * n / d : m && n ? d / m * n : 0)
        }
        ,
        Et = function(t, e, i, r) {
            var n;
            return Wi || Hi(),
            e in yt && e !== "transform" && (e = yt[e],
            ~e.indexOf(",") && (e = e.split(",")[0])),
            Ct[e] && e !== "transform" ? (n = ke(t, r),
            n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ye(wt(t, at)) + " " + n.zOrigin + "px") : (n = t.style[e],
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = He[e] && He[e](t, e, i) || wt(t, e) || Pi(t, e) || (e === "opacity" ? 1 : 0))),
            i && !~(n + "").trim().indexOf(" ") ? Ft(t, e, n, i) + i : n
        }
        ,
        Eo = function(t, e, i, r) {
            if (!i || i === "none") {
                var n = ae(e, t, 1)
                  , s = n && wt(t, n, 1);
                s && s !== i ? (e = n,
                i = s) : e === "borderColor" && (i = wt(t, "borderTopColor"))
            }
            var o = new it(this._pt,t.style,e,0,1,Ii), l = 0, u = 0, h, d, f, _, m, c, p, g, v, y, x, w;
            if (o.b = i,
            o.e = r,
            i += "",
            r += "",
            r === "auto" && (c = t.style[e],
            t.style[e] = r,
            r = wt(t, e) || r,
            c ? t.style[e] = c : $t(t, e)),
            h = [i, r],
            Oi(h),
            i = h[0],
            r = h[1],
            f = i.match(Ht) || [],
            w = r.match(Ht) || [],
            w.length) {
                for (; d = Ht.exec(r); )
                    p = d[0],
                    v = r.substring(l, d.index),
                    m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1),
                    p !== (c = f[u++] || "") && (_ = parseFloat(c) || 0,
                    x = c.substr((_ + "").length),
                    p.charAt(1) === "=" && (p = Yt(_, p) + x),
                    g = parseFloat(p),
                    y = p.substr((g + "").length),
                    l = Ht.lastIndex - y.length,
                    y || (y = y || ot.units[e] || x,
                    l === r.length && (r += y,
                    o.e += y)),
                    x !== y && (_ = Ft(t, e, c, y) || 0),
                    o._pt = {
                        _next: o._pt,
                        p: v || u === 1 ? v : ",",
                        s: _,
                        c: g - _,
                        m: m && m < 4 || e === "zIndex" ? Math.round : 0
                    });
                o.c = l < r.length ? r.substring(l, r.length) : ""
            } else
                o.r = e === "display" && r === "none" ? an : on;
            return Ti.test(r) && (o.e = 0),
            this._pt = o,
            o
        }
        ,
        rn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Co = function(t) {
            var e = t.split(" ")
              , i = e[0]
              , r = e[1] || "50%";
            return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i,
            i = r,
            r = t),
            e[0] = rn[i] || i,
            e[1] = rn[r] || r,
            e.join(" ")
        }
        ,
        Po = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i = e.t, r = i.style, n = e.u, s = i._gsap, o, l, u;
                if (n === "all" || n === !0)
                    r.cssText = "",
                    l = 1;
                else
                    for (n = n.split(","),
                    u = n.length; --u > -1; )
                        o = n[u],
                        Ct[o] && (l = 1,
                        o = o === "transformOrigin" ? at : V),
                        $t(i, o);
                l && ($t(i, V),
                s && (s.svg && i.removeAttribute("transform"),
                ke(i, 1),
                s.uncache = 1,
                ln(r)))
            }
        }
        ,
        He = {
            clearProps: function(t, e, i, r, n) {
                if (n.data !== "isFromStart") {
                    var s = t._pt = new it(t._pt,e,i,0,0,Po);
                    return s.u = r,
                    s.pr = -10,
                    s.tween = n,
                    t._props.push(i),
                    1
                }
            }
        },
        Se = [1, 0, 0, 1, 0, 0],
        dn = {},
        _n = function(t) {
            return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
        }
        ,
        nn = function(t) {
            var e = wt(t, V);
            return _n(e) ? Se : e.substr(7).match(bi).map(H)
        }
        ,
        ji = function(t, e) {
            var i = t._gsap || Mt(t), r = t.style, n = nn(t), s, o, l, u;
            return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
            n = [l.a, l.b, l.c, l.d, l.e, l.f],
            n.join(",") === "1,0,0,1,0,0" ? Se : n) : (n === Se && !t.offsetParent && t !== se && !i.svg && (l = r.display,
            r.display = "block",
            s = t.parentNode,
            (!s || !t.offsetParent) && (u = 1,
            o = t.nextElementSibling,
            se.appendChild(t)),
            n = nn(t),
            l ? r.display = l : $t(t, "display"),
            u && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : se.removeChild(t))),
            e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
        }
        ,
        Yi = function(t, e, i, r, n, s) {
            var o = t._gsap, l = n || ji(t, !0), u = o.xOrigin || 0, h = o.yOrigin || 0, d = o.xOffset || 0, f = o.yOffset || 0, _ = l[0], m = l[1], c = l[2], p = l[3], g = l[4], v = l[5], y = e.split(" "), x = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0, S, T, k, b;
            i ? l !== Se && (T = _ * p - m * c) && (k = x * (p / T) + w * (-c / T) + (c * v - p * g) / T,
            b = x * (-m / T) + w * (_ / T) - (_ * v - m * g) / T,
            x = k,
            w = b) : (S = cn(t),
            x = S.x + (~y[0].indexOf("%") ? x / 100 * S.width : x),
            w = S.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * S.height : w)),
            r || r !== !1 && o.smooth ? (g = x - u,
            v = w - h,
            o.xOffset = d + (g * _ + v * c) - g,
            o.yOffset = f + (g * m + v * p) - v) : o.xOffset = o.yOffset = 0,
            o.xOrigin = x,
            o.yOrigin = w,
            o.smooth = !!r,
            o.origin = e,
            o.originIsAbsolute = !!i,
            t.style[at] = "0px 0px",
            s && (It(s, o, "xOrigin", u, x),
            It(s, o, "yOrigin", h, w),
            It(s, o, "xOffset", d, o.xOffset),
            It(s, o, "yOffset", f, o.yOffset)),
            t.setAttribute("data-svg-origin", x + " " + w)
        }
        ,
        ke = function(t, e) {
            var i = t._gsap || new Li(t);
            if ("x"in i && !e && !i.uncache)
                return i;
            var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", l = getComputedStyle(t), u = wt(t, at) || "0", h, d, f, _, m, c, p, g, v, y, x, w, S, T, k, b, M, R, A, D, X, Y, C, P, O, tt, ce, fe, Nt, ir, xt, zt;
            return h = d = f = c = p = g = v = y = x = 0,
            _ = m = 1,
            i.svg = !!(t.getCTM && fn(t)),
            l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[V] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[V] !== "none" ? l[V] : "")),
            r.scale = r.rotate = r.translate = "none"),
            T = ji(t, i.svg),
            i.svg && (i.uncache ? (O = t.getBBox(),
            u = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px",
            P = "") : P = !e && t.getAttribute("data-svg-origin"),
            Yi(t, P || u, !!P || i.originIsAbsolute, i.smooth !== !1, T)),
            w = i.xOrigin || 0,
            S = i.yOrigin || 0,
            T !== Se && (R = T[0],
            A = T[1],
            D = T[2],
            X = T[3],
            h = Y = T[4],
            d = C = T[5],
            T.length === 6 ? (_ = Math.sqrt(R * R + A * A),
            m = Math.sqrt(X * X + D * D),
            c = R || A ? ne(A, R) * jt : 0,
            v = D || X ? ne(D, X) * jt + c : 0,
            v && (m *= Math.abs(Math.cos(v * oe))),
            i.svg && (h -= w - (w * R + S * D),
            d -= S - (w * A + S * X))) : (zt = T[6],
            ir = T[7],
            ce = T[8],
            fe = T[9],
            Nt = T[10],
            xt = T[11],
            h = T[12],
            d = T[13],
            f = T[14],
            k = ne(zt, Nt),
            p = k * jt,
            k && (b = Math.cos(-k),
            M = Math.sin(-k),
            P = Y * b + ce * M,
            O = C * b + fe * M,
            tt = zt * b + Nt * M,
            ce = Y * -M + ce * b,
            fe = C * -M + fe * b,
            Nt = zt * -M + Nt * b,
            xt = ir * -M + xt * b,
            Y = P,
            C = O,
            zt = tt),
            k = ne(-D, Nt),
            g = k * jt,
            k && (b = Math.cos(-k),
            M = Math.sin(-k),
            P = R * b - ce * M,
            O = A * b - fe * M,
            tt = D * b - Nt * M,
            xt = X * M + xt * b,
            R = P,
            A = O,
            D = tt),
            k = ne(A, R),
            c = k * jt,
            k && (b = Math.cos(k),
            M = Math.sin(k),
            P = R * b + A * M,
            O = Y * b + C * M,
            A = A * b - R * M,
            C = C * b - Y * M,
            R = P,
            Y = O),
            p && Math.abs(p) + Math.abs(c) > 359.9 && (p = c = 0,
            g = 180 - g),
            _ = H(Math.sqrt(R * R + A * A + D * D)),
            m = H(Math.sqrt(C * C + zt * zt)),
            k = ne(Y, C),
            v = Math.abs(k) > 2e-4 ? k * jt : 0,
            x = xt ? 1 / (xt < 0 ? -xt : xt) : 0),
            i.svg && (P = t.getAttribute("transform"),
            i.forceCSS = t.setAttribute("transform", "") || !_n(wt(t, V)),
            P && t.setAttribute("transform", P))),
            Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (_ *= -1,
            v += c <= 0 ? 180 : -180,
            c += c <= 0 ? 180 : -180) : (m *= -1,
            v += v <= 0 ? 180 : -180)),
            e = e || i.uncache,
            i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
            i.y = d - ((i.yPercent = d && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
            i.z = f + s,
            i.scaleX = H(_),
            i.scaleY = H(m),
            i.rotation = H(c) + o,
            i.rotationX = H(p) + o,
            i.rotationY = H(g) + o,
            i.skewX = v + o,
            i.skewY = y + o,
            i.transformPerspective = x + s,
            (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[at] = Ye(u)),
            i.xOffset = i.yOffset = 0,
            i.force3D = ot.force3D,
            i.renderTransform = i.svg ? Lo : hn ? pn : Oo,
            i.uncache = 0,
            i
        }
        ,
        Ye = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }
        ,
        qi = function(t, e, i) {
            var r = $(e);
            return H(parseFloat(e) + parseFloat(Ft(t, "x", i + "px", r))) + r
        }
        ,
        Oo = function(t, e) {
            e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            pn(t, e)
        }
        ,
        Xt = "0deg",
        Te = "0px",
        Gt = ") ",
        pn = function(t, e) {
            var i = e || this
              , r = i.xPercent
              , n = i.yPercent
              , s = i.x
              , o = i.y
              , l = i.z
              , u = i.rotation
              , h = i.rotationY
              , d = i.rotationX
              , f = i.skewX
              , _ = i.skewY
              , m = i.scaleX
              , c = i.scaleY
              , p = i.transformPerspective
              , g = i.force3D
              , v = i.target
              , y = i.zOrigin
              , x = ""
              , w = g === "auto" && t && t !== 1 || g === !0;
            if (y && (d !== Xt || h !== Xt)) {
                var S = parseFloat(h) * oe, T = Math.sin(S), k = Math.cos(S), b;
                S = parseFloat(d) * oe,
                b = Math.cos(S),
                s = qi(v, s, T * b * -y),
                o = qi(v, o, -Math.sin(S) * -y),
                l = qi(v, l, k * b * -y + y)
            }
            p !== Te && (x += "perspective(" + p + Gt),
            (r || n) && (x += "translate(" + r + "%, " + n + "%) "),
            (w || s !== Te || o !== Te || l !== Te) && (x += l !== Te || w ? "translate3d(" + s + ", " + o + ", " + l + ") " : "translate(" + s + ", " + o + Gt),
            u !== Xt && (x += "rotate(" + u + Gt),
            h !== Xt && (x += "rotateY(" + h + Gt),
            d !== Xt && (x += "rotateX(" + d + Gt),
            (f !== Xt || _ !== Xt) && (x += "skew(" + f + ", " + _ + Gt),
            (m !== 1 || c !== 1) && (x += "scale(" + m + ", " + c + Gt),
            v.style[V] = x || "translate(0, 0)"
        }
        ,
        Lo = function(t, e) {
            var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, l = i.rotation, u = i.skewX, h = i.skewY, d = i.scaleX, f = i.scaleY, _ = i.target, m = i.xOrigin, c = i.yOrigin, p = i.xOffset, g = i.yOffset, v = i.forceCSS, y = parseFloat(s), x = parseFloat(o), w, S, T, k, b;
            l = parseFloat(l),
            u = parseFloat(u),
            h = parseFloat(h),
            h && (h = parseFloat(h),
            u += h,
            l += h),
            l || u ? (l *= oe,
            u *= oe,
            w = Math.cos(l) * d,
            S = Math.sin(l) * d,
            T = Math.sin(l - u) * -f,
            k = Math.cos(l - u) * f,
            u && (h *= oe,
            b = Math.tan(u - h),
            b = Math.sqrt(1 + b * b),
            T *= b,
            k *= b,
            h && (b = Math.tan(h),
            b = Math.sqrt(1 + b * b),
            w *= b,
            S *= b)),
            w = H(w),
            S = H(S),
            T = H(T),
            k = H(k)) : (w = d,
            k = f,
            S = T = 0),
            (y && !~(s + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (y = Ft(_, "x", s, "px"),
            x = Ft(_, "y", o, "px")),
            (m || c || p || g) && (y = H(y + m - (m * w + c * T) + p),
            x = H(x + c - (m * S + c * k) + g)),
            (r || n) && (b = _.getBBox(),
            y = H(y + r / 100 * b.width),
            x = H(x + n / 100 * b.height)),
            b = "matrix(" + w + "," + S + "," + T + "," + k + "," + y + "," + x + ")",
            _.setAttribute("transform", b),
            v && (_.style[V] = b)
        }
        ,
        Mo = function(t, e, i, r, n) {
            var s = 360, o = G(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? jt : 1), u = l - r, h = r + u + "deg", d, f;
            return o && (d = n.split("_")[1],
            d === "short" && (u %= s,
            u !== u % (s / 2) && (u += u < 0 ? s : -s)),
            d === "cw" && u < 0 ? u = (u + s * Zr) % s - ~~(u / s) * s : d === "ccw" && u > 0 && (u = (u - s * Zr) % s - ~~(u / s) * s)),
            t._pt = f = new it(t._pt,e,i,r,u,_o),
            f.e = h,
            f.u = "deg",
            t._props.push(i),
            f
        }
        ,
        sn = function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
        ,
        Ao = function(t, e, i) {
            var r = sn({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, l, u, h, d, f, _, m;
            r.svg ? (u = i.getAttribute("transform"),
            i.setAttribute("transform", ""),
            s[V] = e,
            o = ke(i, 1),
            $t(i, V),
            i.setAttribute("transform", u)) : (u = getComputedStyle(i)[V],
            s[V] = e,
            o = ke(i, 1),
            s[V] = u);
            for (l in Ct)
                u = r[l],
                h = o[l],
                u !== h && n.indexOf(l) < 0 && (_ = $(u),
                m = $(h),
                d = _ !== m ? Ft(i, l, u, m) : parseFloat(u),
                f = parseFloat(h),
                t._pt = new it(t._pt,o,l,d,f - d,Vi),
                t._pt.u = m || 0,
                t._props.push(l));
            sn(o, r)
        }
        ;
        et("padding,margin,Width,Radius", function(a, t) {
            var e = "Top"
              , i = "Right"
              , r = "Bottom"
              , n = "Left"
              , s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
                return t < 2 ? a + o : "border" + o + a
            });
            He[t > 1 ? "border" + a : a] = function(o, l, u, h, d) {
                var f, _;
                if (arguments.length < 4)
                    return f = s.map(function(m) {
                        return Et(o, m, u)
                    }),
                    _ = f.join(" "),
                    _.split(f[0]).length === 5 ? f[0] : _;
                f = (h + "").split(" "),
                _ = {},
                s.forEach(function(m, c) {
                    return _[m] = f[c] = f[c] || f[(c - 1) / 2 | 0]
                }),
                o.init(l, _, d)
            }
        });
        Ji = {
            name: "css",
            register: Hi,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, n) {
                var s = this._props, o = t.style, l = i.vars.startAt, u, h, d, f, _, m, c, p, g, v, y, x, w, S, T, k;
                Wi || Hi(),
                this.styles = this.styles || un(t),
                k = this.styles.props,
                this.tween = i;
                for (c in e)
                    if (c !== "autoRound" && (h = e[c],
                    !(rt[c] && Ai(c, e, i, r, t, n)))) {
                        if (_ = typeof h,
                        m = He[c],
                        _ === "function" && (h = h.call(i, r, t, n),
                        _ = typeof h),
                        _ === "string" && ~h.indexOf("random(") && (h = re(h)),
                        m)
                            m(this, t, c, h, i) && (T = 1);
                        else if (c.substr(0, 2) === "--")
                            u = (getComputedStyle(t).getPropertyValue(c) + "").trim(),
                            h += "",
                            St.lastIndex = 0,
                            St.test(u) || (p = $(u),
                            g = $(h)),
                            g ? p !== g && (u = Ft(t, c, u, g) + g) : p && (h += p),
                            this.add(o, "setProperty", u, h, r, n, 0, 0, c),
                            s.push(c),
                            k.push(c, 0, o[c]);
                        else if (_ !== "undefined") {
                            if (l && c in l ? (u = typeof l[c] == "function" ? l[c].call(i, r, t, n) : l[c],
                            G(u) && ~u.indexOf("random(") && (u = re(u)),
                            $(u + "") || u === "auto" || (u += ot.units[c] || $(Et(t, c)) || ""),
                            (u + "").charAt(1) === "=" && (u = Et(t, c))) : u = Et(t, c),
                            f = parseFloat(u),
                            v = _ === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                            v && (h = h.substr(2)),
                            d = parseFloat(h),
                            c in yt && (c === "autoAlpha" && (f === 1 && Et(t, "visibility") === "hidden" && d && (f = 0),
                            k.push("visibility", 0, o.visibility),
                            It(this, o, "visibility", f ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)),
                            c !== "scale" && c !== "transform" && (c = yt[c],
                            ~c.indexOf(",") && (c = c.split(",")[0]))),
                            y = c in Ct,
                            y) {
                                if (this.styles.save(c),
                                x || (w = t._gsap,
                                w.renderTransform && !e.parseTransform || ke(t, e.parseTransform),
                                S = e.smoothOrigin !== !1 && w.smooth,
                                x = this._pt = new it(this._pt,o,V,0,1,w.renderTransform,w,0,-1),
                                x.dep = 1),
                                c === "scale")
                                    this._pt = new it(this._pt,w,"scaleY",w.scaleY,(v ? Yt(w.scaleY, v + d) : d) - w.scaleY || 0,Vi),
                                    this._pt.u = 0,
                                    s.push("scaleY", c),
                                    c += "X";
                                else if (c === "transformOrigin") {
                                    k.push(at, 0, o[at]),
                                    h = Co(h),
                                    w.svg ? Yi(t, h, 0, S, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0,
                                    g !== w.zOrigin && It(this, w, "zOrigin", w.zOrigin, g),
                                    It(this, o, c, Ye(u), Ye(h)));
                                    continue
                                } else if (c === "svgOrigin") {
                                    Yi(t, h, 1, S, 0, this);
                                    continue
                                } else if (c in dn) {
                                    Mo(this, w, c, f, v ? Yt(f, v + h) : h);
                                    continue
                                } else if (c === "smoothOrigin") {
                                    It(this, w, "smooth", w.smooth, h);
                                    continue
                                } else if (c === "force3D") {
                                    w[c] = h;
                                    continue
                                } else if (c === "transform") {
                                    Ao(this, h, t);
                                    continue
                                }
                            } else
                                c in o || (c = ae(c) || c);
                            if (y || (d || d === 0) && (f || f === 0) && !fo.test(h) && c in o)
                                p = (u + "").substr((f + "").length),
                                d || (d = 0),
                                g = $(h) || (c in ot.units ? ot.units[c] : p),
                                p !== g && (f = Ft(t, c, u, g)),
                                this._pt = new it(this._pt,y ? w : o,c,f,(v ? Yt(f, v + d) : d) - f,!y && (g === "px" || c === "zIndex") && e.autoRound !== !1 ? mo : Vi),
                                this._pt.u = g || 0,
                                p !== g && g !== "%" && (this._pt.b = u,
                                this._pt.r = po);
                            else if (c in o)
                                Eo.call(this, t, c, u, v ? v + h : h);
                            else if (c in t)
                                this.add(t, c, u || t[c], v ? v + h : h, r, n);
                            else if (c !== "parseTransform") {
                                ze(c, h);
                                continue
                            }
                            y || (c in o ? k.push(c, 0, o[c]) : k.push(c, 1, u || t[c])),
                            s.push(c)
                        }
                    }
                T && Ni(this)
            },
            render: function(t, e) {
                if (e.tween._time || !Xi())
                    for (var i = e._pt; i; )
                        i.r(t, i.d),
                        i = i._next;
                else
                    e.styles.revert()
            },
            get: Et,
            aliases: yt,
            getSetter: function(t, e, i) {
                var r = yt[e];
                return r && r.indexOf(",") < 0 && (e = r),
                e in Ct && e !== at && (t._gsap.x || Et(t, "x")) ? i && Qr === i ? e === "scale" ? wo : yo : (Qr = i || {}) && (e === "scale" ? xo : bo) : t.style && !Ne(t.style[e]) ? go : ~e.indexOf("-") ? vo : Ue(t, e)
            },
            core: {
                _removeProperty: $t,
                _getMatrix: ji
            }
        };
        K.utils.checkPrefix = ae;
        K.core.getStyleSaver = un;
        (function(a, t, e, i) {
            var r = et(a + "," + t + "," + e, function(n) {
                Ct[n] = 1
            });
            et(t, function(n) {
                ot.units[n] = "deg",
                dn[n] = 1
            }),
            yt[r[13]] = a + "," + t,
            et(i, function(n) {
                var s = n.split(":");
                yt[s[1]] = r[s[0]]
            })
        }
        )("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
            ot.units[a] = "px"
        });
        K.registerPlugin(Ji)
    }
    );
    var $i, ta, gn = I( () => {
        E();
        zi();
        mn();
        $i = K.registerPlugin(Ji) || K,
        ta = $i.core.Tween
    }
    );
    var Ee, vn = I( () => {
        E();
        lr();
        gn();
        Ee = class {
            constructor(t, e={
                animDuration: .8
            }) {
                this.container = t,
                this.menuItems = Array.from(this.container.querySelectorAll(".sub-nav__link")).map(i => new Ce(i,e)),
                this.columns = Array.from(this.container.querySelectorAll(".sub-nav__column")),
                this.columns.length === 0 && (this.columns = [this.container])
            }
            show() {
                if (this.menuItems.length === 0) {
                    this.columns.forEach(e => e.classList.remove("sub-nav__column--initial"));
                    return
                }
                let t = .3 / this.menuItems.length;
                this.tl = $i.timeline({
                    stagger: t
                }),
                this.tl.to(this.menuItems, {
                    delay: .3,
                    stagger: {
                        each: t,
                        duration: .3,
                        ease: "power2.inOut",
                        onComplete: function(e) {
                            this.targets()[0].animating = !1
                        },
                        onStart: function(e) {
                            this.targets()[0].show()
                        }
                    },
                    onStart: () => {
                        this.columns.forEach(e => e.classList.remove("sub-nav__column--initial"))
                    }
                })
            }
            hide() {
                this.tl && (this.tl.pause(),
                this.tl.seek(0)),
                this.menuItems.forEach(t => t.hide()),
                this.columns.forEach(t => t.classList.add("sub-nav__column--initial"))
            }
        }
    }
    );
    var le, yn, We = I( () => {
        E();
        le = a => {
            let t = document.createElement("template");
            return t.innerHTML = a.trim(),
            t.content.childNodes[0]
        }
        ,
        yn = a => {
            let t = document.createElement("template");
            return t.innerHTML = a,
            t.content.childNodes
        }
    }
    );
    var wn, Do, xn, bn = I( () => {
        E();
        window.loadingJs = window.loadingJs || [];
        window.loadedJs = window.loadedJs || [];
        wn = a => window.loadedJs.includes(a),
        Do = a => window.loadingJs.includes(a),
        xn = a => Pt(void 0, null, function*() {
            return wn(a) ? Promise.resolve() : Do(a) ? new Promise( (t, e) => {
                let i = setInterval( () => {
                    wn(a) && (clearInterval(i),
                    t())
                }
                , 50)
            }
            ) : (window.loadingJs.push(a),
            new Promise( (t, e) => {
                let i = document.createElement("script");
                i.onload = () => {
                    window.loadedJs.push(a),
                    window.loadingJs.splice(window.loadingJs.indexOf(a), 1),
                    t()
                }
                ,
                i.onerror = () => {
                    e()
                }
                ,
                i.src = a,
                document.head.appendChild(i)
            }
            ))
        })
    }
    );
    var Ro, Tn, Sn = I( () => {
        E();
        bn();
        Ro = (a, t={}, e={}) => {
            var M, R, A, D, X, Y;
            if (!a)
                return;
            let i = JSON.parse(a.getAttribute("data-video"))
              , r = a.querySelector("video")
              , n = a.getAttribute("data-poster")
              , s = a.querySelector(".sanity-video__poster-image")
              , o = a.querySelectorAll(".sanity-video__play-button-wrapper")[0]
              , l = a.dataset.videoOverrides ? JSON.parse(a.dataset.videoOverrides) : {}
              , u = ((M = i == null ? void 0 : i.title) == null ? void 0 : M.length) > 0 && !l.plugins ? {
                mux: {
                    debug: !1,
                    data: {
                        env_key: "d17speaiv7l277uthp9bjrp7p",
                        video_id: i.video.asset.assetId,
                        video_title: i.title,
                        video_duration: i.video.asset.data.duration,
                        video_stream_type: "on-demand"
                    }
                }
            } : l.plugins || {}
              , h = bt(ht(ht({
                muted: (R = l.forceMuted) != null ? R : i.muted || i.autoplay && i.muted !== !1,
                autoplay: (A = l.forceAutoplay) != null ? A : i.autoplay,
                loop: (D = l.forceLoop) != null ? D : i.loop,
                controls: (X = l.forceControls) != null ? X : i.controls,
                autoload: (Y = l.forceAutoload) != null ? Y : i.autoload,
                bigPlayButton: !1,
                poster: n
            }, l.preload ? {
                preload: l.preload
            } : {}), t), {
                plugins: u
            })
              , d = {
                progress: 0,
                played: !1,
                paused: !1,
                lastProgress: null
            }
              , f = null
              , _ = []
              , m = 0
              , c = !1
              , p = (C, P) => {
                var O;
                !(i != null && i.title) || ((O = i == null ? void 0 : i.title) == null ? void 0 : O.length) === 0 || (window.dataLayer = window.dataLayer || [],
                window.dataLayer.push(ht({
                    event: "video",
                    action: C,
                    title: i.title
                }, P ? {
                    value: P
                } : {})))
            }
              , g = () => {
                o.classList.remove("sanity-video__play-button--hidden"),
                o.classList.add("sanity-video__play-button--visible")
            }
              , v = () => {
                o.classList.add("sanity-video__play-button--hidden"),
                o.classList.remove("sanity-video__play-button--visible"),
                s && (s.style.display = "none")
            }
              , y = () => {
                _.sort( (P, O) => P.start - O.start);
                let C = [_[0]];
                for (let P = 1; P < _.length; P++) {
                    let O = C[C.length - 1]
                      , tt = _[P];
                    tt.start <= O.end ? O.end = Math.max(O.end, tt.end) : C.push(tt)
                }
                _ = C
            }
              , x = C => {
                let P = .5
                  , O = !1;
                for (let tt of _)
                    if (C >= tt.start - P && C <= tt.end + P) {
                        C > tt.end && (tt.end = C),
                        C < tt.start && (tt.start = C),
                        O = !0;
                        break
                    }
                O || _.push({
                    start: C,
                    end: C
                }),
                y()
            }
              , w = () => {
                let C = 0;
                _.forEach(O => C += O.end - O.start);
                let P = f.duration();
                return Math.round(C / P * 100)
            }
              , S = () => {
                var C;
                if (o.addEventListener("click", P => {
                    f.play(),
                    v()
                }
                ),
                f.on("pause", () => {
                    g()
                }
                ),
                f.on("playing", () => {
                    v()
                }
                ),
                f.on("ended", () => {
                    g()
                }
                ),
                (i == null ? void 0 : i.title) && ((C = i == null ? void 0 : i.title) == null ? void 0 : C.length) > 0) {
                    let P = null;
                    f.on("pause", () => {
                        clearTimeout(P),
                        P = setTimeout( () => {
                            let O = w(f.currentTime());
                            p("pause", O),
                            P = null
                        }
                        , 1e3)
                    }
                    ),
                    f.on("ended", () => {
                        p("progress", 100)
                    }
                    ),
                    f.on("seeking", () => {
                        c = !0
                    }
                    ),
                    f.on("seeked", () => {
                        let O = 1;
                        Math.abs(m - f.currentTime) > O && x(m),
                        c = !1
                    }
                    ),
                    f.on("timeupdate", () => {
                        let O = w();
                        c || (x(f.currentTime()),
                        m = f.currentTime),
                        O > d.progress && O > d.progress && Math.floor(O % 10) === 0 && (d.progress = O,
                        p("progress", O))
                    }
                    ),
                    f.on("play", () => {
                        if (P) {
                            clearTimeout(P);
                            return
                        }
                        P = setTimeout( () => {
                            let O = w();
                            p("play", O),
                            P = null
                        }
                        , 1e3)
                    }
                    )
                }
            }
              , k = {
                element: a,
                video: f,
                destroy: () => {
                    f == null || f.dispose()
                }
            };
            return ( () => {
                xn("https://unpkg.com/@mux/videojs-kit@0.12.0/dist/index.js").then( () => {
                    k.video = f = videojs(r, h),
                    S(),
                    e.onActivate && e.onActivate(f)
                }
                ).catch(C => {
                    console.error(C)
                }
                )
            }
            )(),
            k
        }
        ,
        Tn = Ro
    }
    );
    var Io, kn, En = I( () => {
        E();
        We();
        Io = (a, t="normal", e={}) => {
            var f, _, m;
            let i = typeof a == "string" ? yn(a) : a
              , r = le(`<div class="v2 modal hidden ${e.fadeIn ? "modal--fade-in" : ""} modal--${t} ${(f = e.outerClasses) != null ? f : ""}">
      <div class="modal__inner ${e.classes ? e.classes : ""}">
      <button class="modal__close button button--tertiary button--icon"> 
      <span class="button__inner"> 
        <span class="button__icon"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.832 11.7527L3.53906 4.45977L4.4583 3.54053L11.7512 10.8334C12.3956 11.4778 12.3956 12.5225 11.7512 13.1669L4.4583 20.4598L3.53906 19.5405L10.832 12.2476C10.9686 12.111 10.9686 11.8893 10.832 11.7527ZM13.9583 10.9598L20.4583 4.45977L19.5391 3.54053L13.0391 10.0405L13.9583 10.9598ZM20.4583 19.5405L13.9583 13.0405L13.0391 13.9598L19.5391 20.4598L20.4583 19.5405Z" fill="#22211F"/>
          </svg>
        </span> 
        ${(m = (_ = window.translations) == null ? void 0 : _.close) != null ? m : "Close"}
      </span> 
    </button>
      </div>
    </div>`)
              , n = r.querySelector(".modal__inner")
              , s = () => {
                r.querySelector(".modal__close").addEventListener("click", () => {
                    u()
                }
                )
            }
              , o = () => {
                r.querySelector(".modal__inner").appendChild(i)
            }
              , l = () => {
                r.classList.remove("hidden"),
                document.body.classList.add("modal--open"),
                e.fadeIn && setTimeout( () => r.classList.add("modal--fade-in-show")),
                n.addEventListener("click", c => {
                    c.stopPropagation()
                }
                ),
                r.addEventListener("click", c => {
                    u()
                }
                )
            }
              , u = () => {
                r.classList.add("hidden"),
                document.body.classList.remove("modal--open"),
                e.destroyOnClose && d(),
                e.onClose && e.onClose()
            }
              , h = () => {
                document.body.appendChild(r),
                s(),
                o(),
                e.show && l()
            }
              , d = () => {
                document.body.removeChild(r),
                i = null,
                r = null
            }
            ;
            return h(),
            {
                show: l,
                hide: u,
                destroy: d,
                container: r
            }
        }
        ,
        kn = Io
    }
    );
    var Xe, Cn = I( () => {
        E();
        We();
        Sn();
        En();
        Xe = class {
            constructor(t) {
                this.button = t,
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
                this.video.play()) : this.modal = kn(this.videoElement, "video", {
                    show: !0,
                    onClose: () => this.closeModal()
                })
            }
            initializeVideo() {
                this.videoClass || (this.videoClass = Tn(this.videoElement, {
                    autoplay: !0
                }, {
                    onActivate: t => {
                        this.video = t
                    }
                }))
            }
            addEventListeners() {
                this.button.addEventListener("click", () => this.playVideo()),
                this.button.addEventListener("keydown", t => {
                    t.keyCode === 13 && this.playVideo()
                }
                )
            }
            init() {
                if (!this.videoContainer && this.button.dataset.buttonVideoPid) {
                    let t = le(`<div class="hidden" data-button-video-full>
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
                    this.button.append(t),
                    this.videoContainer = t
                }
                this.videoElement = this.videoContainer.firstElementChild,
                this.videoContainer.removeChild(this.videoElement),
                this.addEventListeners()
            }
        }
    }
    );
    var Ge, Pn = I( () => {
        E();
        Qt();
        vn();
        Cn();
        Ge = class extends ct {
            constructor(t) {
                super(t),
                this.key = this.container.dataset.subNav,
                this.container = t,
                this.items = Array.from(this.container.querySelectorAll("[data-sub-nav-item]")),
                this.animationColumns = Array.from(this.container.querySelectorAll("[data-sub-nav-column]")).map(e => new Ee(e)),
                this.animation = new Ee(this.container),
                this.media = [],
                this.visible = !1,
                this.init()
            }
            init() {
                this.container.querySelectorAll("[data-button-video-pid]").forEach(t => {
                    try {
                        this.media.push(new Xe(t))
                    } catch (e) {
                        console.error(e)
                    }
                }
                )
            }
            get isMobile() {
                return window.innerWidth < 1280
            }
            show() {
                this.isMobile ? this.animation.show() : this.animationColumns.forEach(t => t.show()),
                this.container.classList.remove("sub-nav--initial"),
                this.visible = !0
            }
            hide() {
                !this.visible || (this.isMobile ? this.animation.hide() : this.animationColumns.forEach(t => t.hide()),
                this.container.classList.add("sub-nav--initial"),
                this.visible = !1)
            }
        }
    }
    );
    var je, On = I( () => {
        E();
        Qt();
        Pn();
        je = class extends ct {
            constructor(t, e={}) {
                super(t),
                this.container = t,
                this.callbacks = e,
                this.subNavigationGroups = Array.from(this.container.querySelectorAll("[data-sub-nav]")).map(i => new Ge(i)),
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
            set maxHeight(t) {
                this._maxHeight = t
            }
            get maxHeight() {
                return this._maxHeight
            }
            set height(t) {
                t > 0 && this.maxHeight && window.innerWidth < 1280 && (t = this.maxHeight),
                this.container.style.setProperty("--sub-nav-height", `${t}px`)
            }
            updateHeight() {
                this.current && (this.height = this.current.container.offsetHeight)
            }
            show(t) {
                var e;
                if (!this.current || this.current.key !== t) {
                    let i = this.subNavigationGroups.filter(r => r.key === t).pop();
                    i == null || i.show(),
                    (e = this.current) == null || e.hide(),
                    this.current = i
                }
                this.updateHeight()
            }
            hide(t) {
                var e;
                (e = this.current) == null || e.hide(),
                this.height = 0,
                this.current = null
            }
        }
    }
    );
    var Je, Ln = I( () => {
        E();
        Qt();
        Je = class extends ct {
            constructor(t, e={}) {
                super(t),
                this.key = this.container.dataset.navButton,
                this.callbacks = e
            }
            init() {
                this.on("click", () => this.callbacks.show(this.key))
            }
            set active(t) {
                this._active = t
            }
            get active() {
                return this._active
            }
        }
    }
    );
    var $e, Mn = I( () => {
        E();
        Qt();
        $e = class extends ct {
            constructor(t, e) {
                super(t),
                this.container = t,
                this.callbacks = e,
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
                this.on("click", t => {
                    if (this.mouseMoved && this.active) {
                        t.preventDefault(),
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
            set active(t) {
                t !== this._active && (t ? (this.container.classList.add("nav__button--selected"),
                this.visible = !0) : (this.container.classList.remove("nav__button--selected"),
                this.visible = !1),
                this._active = t)
            }
            get active() {
                return this._active
            }
        }
    }
    );
    var Qe, An = I( () => {
        E();
        On();
        Ln();
        Mn();
        Qe = class {
            constructor(t) {
                this.container = t,
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
                Array.from(this.container.querySelectorAll("[data-nav] [data-nav-button]")).forEach(t => this.addNavigationItem(t)),
                Array.from(this.subNavigationContainer.querySelectorAll("[data-nav-button]")).forEach(t => this.addMobileNavigationItem(t)),
                this.subNavigation = new je(this.subNavigationContainer,{
                    mouseOver: t => this.mode === this.modes.DESKTOP ? this.show(t) : null,
                    mouseOut: t => this.mode === this.modes.DESKTOP ? this.hide(t) : null
                }),
                Array.from(this.subNavigationContainer.querySelectorAll("[data-sub-nav-mobile-back]")).forEach(t => {
                    t.addEventListener("click", () => this.show("main"))
                }
                ),
                this.adjustForDeviceWidth(),
                window.addEventListener("resize", () => this.adjustForDeviceWidth()),
                document.addEventListener("keydown", t => {
                    (t.key === "Escape" || t.keyCode === 27) && this.subNavigation.hide()
                }
                )
            }
            addMobileNavigationItem(t) {
                let e = new Je(t,{
                    show: i => this.show(i),
                    hide: i => this.hide(i)
                });
                this.mobileNavigationItems[t.dataset.navButton] = e,
                e.on("click", () => this.show(t.dataset.navButton))
            }
            addNavigationItem(t) {
                this.navigationItems[t.dataset.navButton] = new $e(t,{
                    show: e => this.show(e),
                    hide: e => this.hide(e)
                })
            }
            show(t) {
                var e;
                this.timeout && (clearTimeout(this.timeout),
                this.timeout = null),
                t && (this.navigationItems[(e = this.subNavigation.current) == null ? void 0 : e.key] && (this.navigationItems[this.subNavigation.current.key].active = !1),
                this.navigationItems[t] && (this.navigationItems[t].active = !0),
                this.subNavigation.show(t))
            }
            set maxSubNavHeight(t) {
                this.subNavigation.maxHeight = t
            }
            get maxSubNavHeight() {
                return this.subNavigation.maxHeight
            }
            hideSubNavigation() {
                Object.keys(this.navigationItems).forEach(t => {
                    this.navigationItems[t].active = !1
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
                let t = this.mode;
                this.mode = window.innerWidth < 1280 ? this.modes.MOBILE : this.modes.DESKTOP,
                t !== this.mode && this.hide()
            }
        }
    }
    );
    var ue, Qi = I( () => {
        E();
        ue = class {
            constructor(t) {
                this.container = t,
                this.initEventListeners()
            }
            setLocaleCookie(t) {
                let e = new Date;
                e.setTime(e.getTime() + 30 * 24 * 60 * 60 * 1e3);
                let i = "expires=" + e.toUTCString();
                document.cookie = "locale=" + t + ";" + i + ";path=/"
            }
            initEventListeners() {
                var t;
                (t = this.container) == null || t.querySelectorAll("a").forEach(e => {
                    e.addEventListener("click", () => (this.setLocaleCookie(e.dataset.lsLang),
                    window.location.reload(),
                    !1))
                }
                )
            }
        }
    }
    );
    var Ze, Dn = I( () => {
        E();
        Qi();
        Ze = class {
            constructor(t, e) {
                this.buttonElement = t,
                this.switcherElement = e,
                this.timeout = null,
                this.init()
            }
            init() {
                this.buttonElement.addEventListener("click", () => this.toggle()),
                this.buttonElement.addEventListener("keydown", t => {
                    t.keyCode === 13 && this.toggle()
                }
                ),
                this.buttonElement.addEventListener("mouseenter", () => this.show()),
                this.buttonElement.addEventListener("mouseleave", () => this.hide()),
                this.switcherElement.addEventListener("mouseenter", () => this.show()),
                this.switcherElement.addEventListener("mouseleave", () => this.hide()),
                this.lang = new ue(this.switcherElement)
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
    }
    );
    function Ke(a) {
        for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e)
                a[i] = e[i]
        }
        return a
    }
    function Zi(a, t) {
        function e(r, n, s) {
            if (typeof document != "undefined") {
                s = Ke({}, t, s),
                typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)),
                s.expires && (s.expires = s.expires.toUTCString()),
                r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var o = "";
                for (var l in s)
                    !s[l] || (o += "; " + l,
                    s[l] !== !0 && (o += "=" + s[l].split(";")[0]));
                return document.cookie = r + "=" + a.write(n, r) + o
            }
        }
        function i(r) {
            if (!(typeof document == "undefined" || arguments.length && !r)) {
                for (var n = document.cookie ? document.cookie.split("; ") : [], s = {}, o = 0; o < n.length; o++) {
                    var l = n[o].split("=")
                      , u = l.slice(1).join("=");
                    try {
                        var h = decodeURIComponent(l[0]);
                        if (s[h] = a.read(u, h),
                        r === h)
                            break
                    } catch (d) {}
                }
                return r ? s[r] : s
            }
        }
        return Object.create({
            set: e,
            get: i,
            remove: function(r, n) {
                e(r, "", Ke({}, n, {
                    expires: -1
                }))
            },
            withAttributes: function(r) {
                return Zi(this.converter, Ke({}, this.attributes, r))
            },
            withConverter: function(r) {
                return Zi(Ke({}, this.converter, r), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(t)
            },
            converter: {
                value: Object.freeze(a)
            }
        })
    }
    var Fo, Ki, Rn = I( () => {
        E();
        Fo = {
            read: function(a) {
                return a[0] === '"' && (a = a.slice(1, -1)),
                a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(a) {
                return encodeURIComponent(a).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        };
        Ki = Zi(Fo, {
            path: "/"
        })
    }
    );
    var In, ti, Fn = I( () => {
        E();
        Rn();
        In = "Aviadrones.-banner",
        ti = class {
            constructor(t, e) {
                this.container = t,
                this.header = e,
                this.bannerCleared = Ki.get(In) === "true",
                this.addEventListeners(),
                this.calculateHeaderPosition()
            }
            set bannerCleared(t) {
                t ? this.container.classList.add("hidden") : this.container.classList.remove("hidden"),
                Ki.set(In, t === !0 ? "true" : null),
                this._bannerCleared = t
            }
            get bannerCleared() {
                return this._bannerCleared
            }
            addEventListeners() {
                var t;
                this.bannerCleared || (window.addEventListener("scroll", () => this.calculateHeaderPosition()),
                (t = document.querySelector(".announcement-banner__dismiss")) == null || t.addEventListener("click", () => {
                    this.bannerCleared = !0,
                    this.calculateHeaderPosition()
                }
                ),
                window.addEventListener("resize", () => this.calculateHeaderPosition()))
            }
            get height() {
                return this.container.offsetHeight
            }
            set headerPos(t) {
                if (this._headerPos !== t) {
                    this._headerPos = t;
                    let e = new CustomEvent("headerOffsetChange",{
                        detail: {
                            offset: this._headerPos,
                            offsetName: "announcementBanner"
                        }
                    });
                    document.dispatchEvent(e)
                }
            }
            get headerPos() {
                return this._headerPos
            }
            calculateHeaderPosition() {
                let t = this.height - window.scrollY
                  , e = window.getComputedStyle(this.header)
                  , i = parseInt(e.marginBottom);
                t >= 0 ? this.header.style.marginTop = i + this.height + "px" : this.headerPos !== 0 && (this.header.style.marginTop = i + "px")
            }
        }
    }
    );
    var he, tr = I( () => {
        E();
        he = class {
            constructor(t, e, i="a") {
                this.category = e,
                this.container = t,
                this.selector = i,
                this.init()
            }
            init() {
                this.trackNavClicks()
            }
            trackClick(t) {
                let e = t.target
                  , i = {
                    event: "navItemClick",
                    category: this.category,
                    label: e.innerText,
                    url: e.href
                };
                !i.label && !i.url || i.label.length === 0 && i.url.length === 0 || (window.dataLayer = window.dataLayer || [],
                window.dataLayer.push(i))
            }
            trackNavClicks() {
                this.container.querySelectorAll(this.selector).forEach(e => {
                    e.addEventListener("click", i => this.trackClick(i))
                }
                )
            }
        }
    }
    );
    var ei, Nn = I( () => {
        E();
        An();
        Dn();
        Qi();
        Fn();
        tr();
        ei = class {
            constructor(t) {
                this.container = t,
                this.analytics = new he(t,"header","a,button"),
                this.navigation = new Qe(t),
                this.mobileMenuButton = this.container.querySelector("[data-mobile-menu-button]"),
                this.logo = t.querySelector("[data-logo]"),
                this.offsets = {},
                this.events = {
                    offsetChange: [],
                    heightChange: []
                },
                this.mobileLanguages = new ue(t.querySelector("[data-mobile-lang]")),
                this.init(),
                this.updateHeaderSize()
            }
            init() {
                let t = document.getElementById("announcement-banner");
                t && (this.announcementBanner = new ti(t,this.container));
                let e = this.container.querySelector("[data-locale-button]")
                  , i = this.container.querySelector("[data-locale-switcher]");
                e && i && (this.languageSwitcher = new Ze(e,i)),
                this.mobileMenuButton.addEventListener("click", () => this.toggleMobileMenu()),
                window.addEventListener("resize", () => this.adjustForDeviceWidth()),
                window.addEventListener("resize", () => this.updateHeaderSize()),
                this.adjustForDeviceWidth()
            }
            callEvent(t, ...e) {
                this.events[t] && this.events[t].forEach(i => i(...e))
            }
            setBodyProperty(t, e, i) {
                document.body.style.getPropertyValue(t) !== e && (document.body.style.setProperty(t, e),
                i())
            }
            headerOffsetChange(t, e) {
                this.offsets[t] = e,
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
                this.top = Object.values(this.offsets).reduce( (t, e) => t + e, 0)
            }
            getAvailableSubNavHeight() {
                let t = this.logo.getBoundingClientRect()
                  , e = getComputedStyle(this.container)
                  , i = e.getPropertyValue("--header-padding")
                  , r = e.getPropertyValue("--header-margin");
                return window.innerHeight - (t.top + t.height + parseInt(i, 10) + parseInt(r, 10))
            }
            set mobileMenuOpen(t) {
                t ? (this.navigation.show("main"),
                this.container.classList.add("header--mobile"),
                document.body.classList.add("no-scroll")) : (this.navigation.hide(),
                this.container.classList.remove("header--mobile"),
                document.body.classList.remove("no-scroll")),
                this._mobileMenuOpen = t
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
    }
    );
    var er, zn, Bn, qn = I( () => {
        E();
        er = (a, t) => {
            let e = a.getFormElem()[0]
              , i = getSelection.call.bind([].slice);
            i(e.querySelectorAll("[style]")).concat(e).forEach(function(s) {
                s.removeAttribute("style")
            }),
            i(document.styleSheets).forEach(function(s) {
                ([mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(s.ownerNode) != -1 || e.contains(s.ownerNode)) && (s.disabled = !0)
            }),
            t || e.setAttribute("data-styles-ready", "true")
        }
        ,
        zn = a => {
            let e = a.getFormElem()[0].querySelector("input[name=confirmtxt]");
            !e || e.value == "" ? a.submittable(!0) : a.submittable(!1)
        }
        ,
        Bn = () => Pt(void 0, null, function*() {
            return window.MktoForms2 ? Promise.resolve() : new Promise( (a, t) => {
                let e = document.createElement("script");
                e.onload = () => {
                    a()
                }
                ,
                e.onerror = () => {
                    a()
                }
                ,
                e.src = "https://pages.aviadrones.com/js/forms2/js/forms2.min.js",
                document.head.appendChild(e)
            }
            )
        })
    }
    );
    var No, Vn, Un = I( () => {
        E();
        We();
        tr();
        qn();
        No = a => {
            let t = i => {
                let r = a.querySelector(".mktoButton")
                  , n = a.dataset.nlLoadingText
                  , s = a.dataset.nlSuccess
                  , o = null
                  , l = () => {
                    r.innerText = n,
                    r.disabled = !0
                }
                  , u = c => {
                    c.value ? a.querySelectorAll("label[for=" + c.id + "]")[0].classList.add("mktoValid") : a.querySelectorAll("label[for=" + c.id + "]")[0].classList.remove("mktoValid")
                }
                  , h = () => {
                    o && (a.removeChild(o),
                    o = null)
                }
                  , d = () => {
                    h(),
                    Array.from(a.children).forEach(c => {
                        a.removeChild(c)
                    }
                    ),
                    a.appendChild(le(`<p class="newsletter__message-success py-1 px-2">${s}</p>`)),
                    a.classList.add("newsletter--success")
                }
                  , f = () => {
                    window.dataLayer = window.dataLayer || [],
                    window.dataLayer.push({
                        event: "emailSignup",
                        signupLocation: "Footer"
                    })
                }
                  , _ = () => (a.querySelectorAll("input[type='email']").forEach(c => {
                    u(c)
                }
                ),
                l(),
                f(),
                !1);
                (c => {
                    c.onSubmit(p => (_(),
                    !1)),
                    c.onSuccess( (p, g) => (d(),
                    !1)),
                    c.onValidate(p => {
                        p && zn(c)
                    }
                    ),
                    MktoForms2.onFormRender( () => {
                        er(c)
                    }
                    ),
                    window.addEventListener("resize", () => {
                        er(c)
                    }
                    ),
                    a.querySelectorAll("input, textarea").forEach(p => {
                        p.addEventListener("change", g => {
                            u(p)
                        }
                        )
                    }
                    )
                }
                )(i)
            }
            ;
            return ( () => {
                Bn().then( () => {
                    MktoForms2.loadForm("//pages.aviadrones.com", "784-TUF-591", "1282", t)
                }
                )
            }
            )(),
            {}
        }
        ,
        Vn = a => {
            if (!a)
                return;
            let t = null
              , e = new he(a,"footer");
            function i(s, o) {
                s.forEach(l => {
                    if (l.isIntersecting) {
                        let u = a.querySelector("[data-nl]");
                        u && (t = No(u)),
                        o.disconnect()
                    }
                }
                )
            }
            let r = {
                root: null,
                rootMargin: "1000px",
                threshold: 0
            };
            return new IntersectionObserver(i,r).observe(a),
            {
                newsletter: t
            }
        }
    }
    );
    var zo = Jn(Hn => {
        E();
        or();
        ar();
        Nn();
        Un();
        globalThis.loadHeaderFooter = (a, t, e, i) => {
            let r = h => new Promise( (d, f) => {
                fetch(h).then(_ => (_.ok || f(new Error(`Failed to load script from ${h}.`)),
                _.text())).then(_ => {
                    let m = document.createElement("script");
                    m.text = _,
                    document.head.appendChild(m),
                    d()
                }
                ).catch(_ => f(_))
            }
            );
            function n(h) {
                return new Promise( (d, f) => {
                    let _ = document.createElement("link");
                    _.rel = "stylesheet",
                    _.href = h,
                    _.onload = () => {
                        d()
                    }
                    ,
                    _.onerror = () => {
                        f(`Failed to load ${h}`)
                    }
                    ,
                    document.head.appendChild(_)
                }
                )
            }
            let s = h => {
                h.forEach(d => n(d))
            }
              , o = h => {
                let d = h.map(f => r(f));
                return Promise.all(d)
            }
              , l = h => typeof h == "string" ? document.querySelector(h) : h
              , u = () => Pt(Hn, null, function*() {
                return window.MktoForms2 ? Promise.resolve() : new Promise( (h, d) => {
                    let f = document.createElement("script");
                    f.onload = () => {
                        h()
                    }
                    ,
                    f.onerror = () => {
                        h()
                    }
                    ,
                    f.src = "https://pages.aviadrones.com/js/forms2/js/forms2.min.js",
                    document.head.appendChild(f)
                }
                )
            });
            fetch("https://www.aviadrones.com/header-footer.json").then(h => {
                h.json().then(d => {
                    let f = [];
                    a && f.push("https://www.aviadrones.com/js/header-template.js"),
                    t && f.push("https://www.aviadrones.com/js/footer-template.js"),
                    n("https://www.aviadrones.com/_styles/header-styles.css").then( () => o(f)).then( () => u()).then( () => {
                        var _, m, c;
                        if (a) {
                            let p = l(a)
                              , g = window.location.href.includes("support.aviadrones.com") || new URLSearchParams(window.location.search).get("emulate") === "support.aviadrones.com";
                            e && p.classList.add(e),
                            p.classList.add("standalone-header-footer");
                            let v = bt(ht({}, d), {
                                header: bt(ht(ht({}, d.header), i != null && i.contactUrl ? {
                                    contact: {
                                        link: {
                                            url: i.contactUrl
                                        }
                                    }
                                } : {}), {
                                    standalone: !0,
                                    supportSite: g
                                }),
                                filters: {
                                    popupJson: () => ""
                                }
                            });
                            ((c = (m = (_ = v == null ? void 0 : v.header) == null ? void 0 : _.translations) == null ? void 0 : m.header) == null ? void 0 : c.contact) && (i == null ? void 0 : i.contactLabel) && (v.header.translations.header.contact = i == null ? void 0 : i.contactLabel),
                            p.innerHTML = window.Aviadrones.Header(v, {
                                filters: {
                                    popupJson: () => ""
                                }
                            });
                            let {header: y} = new ei(p.querySelector("[data-header]"))
                        }
                        if (t) {
                            let p = l(t);
                            e && p.classList.add(e),
                            p.classList.add("standalone-header-footer"),
                            p.innerHTML = window.Aviadrones.Footer(bt(ht({}, d), {
                                footer: bt(ht({}, d.footer), {
                                    standalone: !0
                                }),
                                filters: {
                                    popupJson: () => ""
                                }
                            }), {
                                filters: {
                                    popupJson: () => ""
                                }
                            }),
                            Vn(p.querySelector("[data-footer]"))
                        }
                    }
                    ).then( () => {
                        document.querySelectorAll("[data-drift]").forEach(_ => {
                            sr(_)
                        }
                        )
                    }
                    )
                }
                )
            }
            )
        }
    }
    );
    zo();
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
/*! js-cookie v3.0.5 | MIT */
//# sourceMappingURL=standalone-header.js.map
