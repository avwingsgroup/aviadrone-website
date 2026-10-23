function me(i) {
    return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
}
function pe(i, e) {
    i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t => {
        typeof i[t] > "u" ? i[t] = e[t] : me(e[t]) && me(i[t]) && Object.keys(e[t]).length > 0 && pe(i[t], e[t])
    }
    )
}
const be = {
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
function H() {
    const i = typeof document < "u" ? document : {};
    return pe(i, be),
    i
}
const Ie = {
    document: be,
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
        return typeof setTimeout > "u" ? (i(),
        null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout > "u" || clearTimeout(i)
    }
};
function $() {
    const i = typeof window < "u" ? window : {};
    return pe(i, Ie),
    i
}
function Ae(i) {
    return i === void 0 && (i = ""),
    i.trim().split(" ").filter(e => !!e.trim())
}
function ke(i) {
    const e = i;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function ce(i, e) {
    return e === void 0 && (e = 0),
    setTimeout(i, e)
}
function ee() {
    return Date.now()
}
function Oe(i) {
    const e = $();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
}
function ze(i, e) {
    e === void 0 && (e = "x");
    const t = $();
    let s, r, n;
    const o = Oe(i);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(a => a.replace(",", ".")).join(", ")),
    n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])),
    r || 0
}
function Q(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}
function De(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}
function F() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !De(s)) {
            const r = Object.keys(Object(s)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, o = r.length; n < o; n += 1) {
                const a = r[n]
                  , l = Object.getOwnPropertyDescriptor(s, a);
                l !== void 0 && l.enumerable && (Q(i[a]) && Q(s[a]) ? s[a].__swiper__ ? i[a] = s[a] : F(i[a], s[a]) : !Q(i[a]) && Q(s[a]) ? (i[a] = {},
                s[a].__swiper__ ? i[a] = s[a] : F(i[a], s[a])) : i[a] = s[a])
            }
        }
    }
    return i
}
function J(i, e, t) {
    i.style.setProperty(e, t)
}
function ye(i) {
    let {swiper: e, targetPosition: t, side: s} = i;
    const r = $()
      , n = -e.translate;
    let o = null, a;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    r.cancelAnimationFrame(e.cssModeFrameID);
    const f = t > n ? "next" : "prev"
      , p = (m, h) => f === "next" && m >= h || f === "prev" && m <= h
      , u = () => {
        a = new Date().getTime(),
        o === null && (o = a);
        const m = Math.max(Math.min((a - o) / l, 1), 0)
          , h = .5 - Math.cos(m * Math.PI) / 2;
        let g = n + h * (t - n);
        if (p(g, t) && (g = t),
        e.wrapperEl.scrollTo({
            [s]: g
        }),
        p(g, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [s]: g
                })
            }
            ),
            r.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = r.requestAnimationFrame(u)
    }
    ;
    u()
}
function R(i, e) {
    e === void 0 && (e = "");
    const t = $()
      , s = [...i.children];
    return t.HTMLSlotElement && i instanceof HTMLSlotElement && s.push(...i.assignedElements()),
    e ? s.filter(r => r.matches(e)) : s
}
function Ge(i, e) {
    const t = [e];
    for (; t.length > 0; ) {
        const s = t.shift();
        if (i === s)
            return !0;
        t.push(...s.children, ...s.shadowRoot?.children || [], ...s.assignedElements?.() || [])
    }
}
function Be(i, e) {
    const t = $();
    let s = e.contains(i);
    return !s && t.HTMLSlotElement && e instanceof HTMLSlotElement && (s = [...e.assignedElements()].includes(i),
    s || (s = Ge(i, e))),
    s
}
function te(i) {
    try {
        console.warn(i);
        return
    } catch {}
}
function Y(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Ae(e)),
    t
}
function Ve(i) {
    const e = $()
      , t = H()
      , s = i.getBoundingClientRect()
      , r = t.body
      , n = i.clientTop || r.clientTop || 0
      , o = i.clientLeft || r.clientLeft || 0
      , a = i === e ? e.scrollY : i.scrollTop
      , l = i === e ? e.scrollX : i.scrollLeft;
    return {
        top: s.top + a - n,
        left: s.left + l - o
    }
}
function $e(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function Fe(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function j(i, e) {
    return $().getComputedStyle(i, null).getPropertyValue(e)
}
function X(i) {
    let e = i, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function ie(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
        e ? s.matches(e) && t.push(s) : t.push(s),
        s = s.parentElement;
    return t
}
function fe(i, e, t) {
    const s = $();
    return i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
function z(i) {
    return (Array.isArray(i) ? i : [i]).filter(e => !!e)
}
let se;
function Ne() {
    const i = $()
      , e = H();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}
function Te() {
    return se || (se = Ne()),
    se
}
let ne;
function He(i) {
    let {userAgent: e} = i === void 0 ? {} : i;
    const t = Te()
      , s = $()
      , r = s.navigator.platform
      , n = e || s.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , a = s.screen.width
      , l = s.screen.height
      , f = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = n.match(/(iPad).*OS\s([\d_]+)/);
    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , h = r === "Win32";
    let g = r === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !p && g && t.touch && v.indexOf(`${a}x${l}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
    p || (p = [0, 1, "13_0_0"]),
    g = !1),
    f && !h && (o.os = "android",
    o.android = !0),
    (p || m || u) && (o.os = "ios",
    o.ios = !0),
    o
}
function xe(i) {
    return i === void 0 && (i = {}),
    ne || (ne = He(i)),
    ne
}
let re;
function Re() {
    const i = $()
      , e = xe();
    let t = !1;
    function s() {
        const a = i.navigator.userAgent.toLowerCase();
        return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
    }
    if (s()) {
        const a = String(i.navigator.userAgent);
        if (a.includes("Version/")) {
            const [l,f] = a.split("Version/")[1].split(" ")[0].split(".").map(p => Number(p));
            t = l < 16 || l === 16 && f < 2
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
      , n = s()
      , o = n || r && e.ios;
    return {
        isSafari: t || n,
        needPerspectiveFix: t,
        need3dFix: o,
        isWebView: r
    }
}
function Ee() {
    return re || (re = Re()),
    re
}
function _e(i) {
    let {swiper: e, on: t, emit: s} = i;
    const r = $();
    let n = null
      , o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , l = () => {
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(u => {
            o = r.requestAnimationFrame( () => {
                const {width: m, height: h} = e;
                let g = m
                  , v = h;
                u.forEach(x => {
                    let {contentBoxSize: b, contentRect: d, target: c} = x;
                    c && c !== e.el || (g = d ? d.width : (b[0] || b).inlineSize,
                    v = d ? d.height : (b[0] || b).blockSize)
                }
                ),
                (g !== m || v !== h) && a()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , f = () => {
        o && r.cancelAnimationFrame(o),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , p = () => {
        !e || e.destroyed || !e.initialized || s("orientationchange")
    }
    ;
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            l();
            return
        }
        r.addEventListener("resize", a),
        r.addEventListener("orientationchange", p)
    }
    ),
    t("destroy", () => {
        f(),
        r.removeEventListener("resize", a),
        r.removeEventListener("orientationchange", p)
    }
    )
}
function We(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = []
      , o = $()
      , a = function(p, u) {
        u === void 0 && (u = {});
        const m = o.MutationObserver || o.WebkitMutationObserver
          , h = new m(g => {
            if (e.__preventObserver__)
                return;
            if (g.length === 1) {
                r("observerUpdate", g[0]);
                return
            }
            const v = function() {
                r("observerUpdate", g[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
        }
        );
        h.observe(p, {
            attributes: typeof u.attributes > "u" ? !0 : u.attributes,
            childList: e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
            characterData: typeof u.characterData > "u" ? !0 : u.characterData
        }),
        n.push(h)
    }
      , l = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const p = ie(e.hostEl);
                for (let u = 0; u < p.length; u += 1)
                    a(p[u])
            }
            a(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            a(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , f = () => {
        n.forEach(p => {
            p.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", l),
    s("destroy", f)
}
var qe = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const r = t ? "unshift" : "push";
        return i.split(" ").forEach(n => {
            s.eventsListeners[n] || (s.eventsListeners[n] = []),
            s.eventsListeners[n][r](e)
        }
        ),
        s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function r() {
            s.off(i, r),
            r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                o[a] = arguments[a];
            e.apply(s, o)
        }
        return r.__emitterProxy = e,
        s.on(i, r, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function")
            return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i),
        t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
            typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach( (r, n) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[s].splice(n, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
            return i;
        let e, t, s;
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0],
        t = n.slice(1, n.length),
        s = i) : (e = n[0].events,
        t = n[0].data,
        s = n[0].context || i),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(f => {
                f.apply(s, [l, ...t])
            }
            ),
            i.eventsListeners && i.eventsListeners[l] && i.eventsListeners[l].forEach(f => {
                f.apply(s, t)
            }
            )
        }
        ),
        i
    }
};
function je() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(j(s, "padding-left") || 0, 10) - parseInt(j(s, "padding-right") || 0, 10),
    t = t - parseInt(j(s, "padding-top") || 0, 10) - parseInt(j(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}
function Ye() {
    const i = this;
    function e(T, C) {
        return parseFloat(T.getPropertyValue(i.getDirectionLabel(C)) || 0)
    }
    const t = i.params
      , {wrapperEl: s, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: a} = i
      , l = i.virtual && t.virtual.enabled
      , f = l ? i.virtual.slides.length : i.slides.length
      , p = R(r, `.${i.params.slideClass}, swiper-slide`)
      , u = l ? i.virtual.slides.length : p.length;
    let m = [];
    const h = []
      , g = [];
    let v = t.slidesOffsetBefore;
    typeof v == "function" && (v = t.slidesOffsetBefore.call(i));
    let x = t.slidesOffsetAfter;
    typeof x == "function" && (x = t.slidesOffsetAfter.call(i));
    const b = i.snapGrid.length
      , d = i.slidesGrid.length;
    let c = t.spaceBetween
      , w = -v
      , y = 0
      , A = 0;
    if (typeof n > "u")
        return;
    typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * n : typeof c == "string" && (c = parseFloat(c)),
    i.virtualSize = -c,
    p.forEach(T => {
        o ? T.style.marginLeft = "" : T.style.marginRight = "",
        T.style.marginBottom = "",
        T.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (J(s, "--swiper-centered-offset-before", ""),
    J(s, "--swiper-centered-offset-after", ""));
    const k = t.grid && t.grid.rows > 1 && i.grid;
    k ? i.grid.initSlides(p) : i.grid && i.grid.unsetSlides();
    let I;
    const O = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(T => typeof t.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < u; T += 1) {
        I = 0;
        let C;
        if (p[T] && (C = p[T]),
        k && i.grid.updateSlide(T, C, p),
        !(p[T] && j(C, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                O && (p[T].style[i.getDirectionLabel("width")] = "");
                const L = getComputedStyle(C)
                  , E = C.style.transform
                  , P = C.style.webkitTransform;
                if (E && (C.style.transform = "none"),
                P && (C.style.webkitTransform = "none"),
                t.roundLengths)
                    I = i.isHorizontal() ? fe(C, "width") : fe(C, "height");
                else {
                    const D = e(L, "width")
                      , B = e(L, "padding-left")
                      , S = e(L, "padding-right")
                      , M = e(L, "margin-left")
                      , G = e(L, "margin-right")
                      , V = L.getPropertyValue("box-sizing");
                    if (V && V === "border-box")
                        I = D + M + G;
                    else {
                        const {clientWidth: _, offsetWidth: W} = C;
                        I = D + B + S + M + G + (W - _)
                    }
                }
                E && (C.style.transform = E),
                P && (C.style.webkitTransform = P),
                t.roundLengths && (I = Math.floor(I))
            } else
                I = (n - (t.slidesPerView - 1) * c) / t.slidesPerView,
                t.roundLengths && (I = Math.floor(I)),
                p[T] && (p[T].style[i.getDirectionLabel("width")] = `${I}px`);
            p[T] && (p[T].swiperSlideSize = I),
            g.push(I),
            t.centeredSlides ? (w = w + I / 2 + y / 2 + c,
            y === 0 && T !== 0 && (w = w - n / 2 - c),
            T === 0 && (w = w - n / 2 - c),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            t.roundLengths && (w = Math.floor(w)),
            A % t.slidesPerGroup === 0 && m.push(w),
            h.push(w)) : (t.roundLengths && (w = Math.floor(w)),
            (A - Math.min(i.params.slidesPerGroupSkip, A)) % i.params.slidesPerGroup === 0 && m.push(w),
            h.push(w),
            w = w + I + c),
            i.virtualSize += I + c,
            y = I,
            A += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, n) + x,
    o && a && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + c}px`),
    t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + c}px`),
    k && i.grid.updateWrapperSize(I, m),
    !t.centeredSlides) {
        const T = [];
        for (let C = 0; C < m.length; C += 1) {
            let L = m[C];
            t.roundLengths && (L = Math.floor(L)),
            m[C] <= i.virtualSize - n && T.push(L)
        }
        m = T,
        Math.floor(i.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 && m.push(i.virtualSize - n)
    }
    if (l && t.loop) {
        const T = g[0] + c;
        if (t.slidesPerGroup > 1) {
            const C = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup)
              , L = T * t.slidesPerGroup;
            for (let E = 0; E < C; E += 1)
                m.push(m[m.length - 1] + L)
        }
        for (let C = 0; C < i.virtual.slidesBefore + i.virtual.slidesAfter; C += 1)
            t.slidesPerGroup === 1 && m.push(m[m.length - 1] + T),
            h.push(h[h.length - 1] + T),
            i.virtualSize += T
    }
    if (m.length === 0 && (m = [0]),
    c !== 0) {
        const T = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
        p.filter( (C, L) => !t.cssMode || t.loop ? !0 : L !== p.length - 1).forEach(C => {
            C.style[T] = `${c}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let T = 0;
        g.forEach(L => {
            T += L + (c || 0)
        }
        ),
        T -= c;
        const C = T > n ? T - n : 0;
        m = m.map(L => L <= 0 ? -v : L > C ? C + x : L)
    }
    if (t.centerInsufficientSlides) {
        let T = 0;
        g.forEach(L => {
            T += L + (c || 0)
        }
        ),
        T -= c;
        const C = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
        if (T + C < n) {
            const L = (n - T - C) / 2;
            m.forEach( (E, P) => {
                m[P] = E - L
            }
            ),
            h.forEach( (E, P) => {
                h[P] = E + L
            }
            )
        }
    }
    if (Object.assign(i, {
        slides: p,
        snapGrid: m,
        slidesGrid: h,
        slidesSizesGrid: g
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        J(s, "--swiper-centered-offset-before", `${-m[0]}px`),
        J(s, "--swiper-centered-offset-after", `${i.size / 2 - g[g.length - 1] / 2}px`);
        const T = -i.snapGrid[0]
          , C = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(L => L + T),
        i.slidesGrid = i.slidesGrid.map(L => L + C)
    }
    if (u !== f && i.emit("slidesLengthChange"),
    m.length !== b && (i.params.watchOverflow && i.checkOverflow(),
    i.emit("snapGridLengthChange")),
    h.length !== d && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    i.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const T = `${t.containerModifierClass}backface-hidden`
          , C = i.el.classList.contains(T);
        u <= t.maxBackfaceHiddenSlides ? C || i.el.classList.add(T) : C && i.el.classList.remove(T)
    }
}
function Xe(i) {
    const e = this
      , t = []
      , s = e.virtual && e.params.virtual.enabled;
    let r = 0, n;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const o = a => s ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(a => {
                t.push(a)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const a = e.activeIndex + n;
                if (a > e.slides.length && !s)
                    break;
                t.push(o(a))
            }
    else
        t.push(o(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const a = t[n].offsetHeight;
            r = a > r ? a : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function Ue() {
    const i = this
      , e = i.slides
      , t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
const he = (i, e, t) => {
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
}
;
function Ke(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: s, rtlTranslate: r, snapGrid: n} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -i;
    r && (o = i),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < s.length; l += 1) {
        const f = s[l];
        let p = f.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (p -= s[0].swiperSlideOffset);
        const u = (o + (t.centeredSlides ? e.minTranslate() : 0) - p) / (f.swiperSlideSize + a)
          , m = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - p) / (f.swiperSlideSize + a)
          , h = -(o - p)
          , g = h + e.slidesSizesGrid[l]
          , v = h >= 0 && h <= e.size - e.slidesSizesGrid[l]
          , x = h >= 0 && h < e.size - 1 || g > 1 && g <= e.size || h <= 0 && g >= e.size;
        x && (e.visibleSlides.push(f),
        e.visibleSlidesIndexes.push(l)),
        he(f, x, t.slideVisibleClass),
        he(f, v, t.slideFullyVisibleClass),
        f.progress = r ? -u : u,
        f.originalProgress = r ? -m : m
    }
}
function Qe(i) {
    const e = this;
    if (typeof i > "u") {
        const p = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * p || 0
    }
    const t = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: n, isEnd: o, progressLoop: a} = e;
    const l = n
      , f = o;
    if (s === 0)
        r = 0,
        n = !0,
        o = !0;
    else {
        r = (i - e.minTranslate()) / s;
        const p = Math.abs(i - e.minTranslate()) < 1
          , u = Math.abs(i - e.maxTranslate()) < 1;
        n = p || r <= 0,
        o = u || r >= 1,
        p && (r = 0),
        u && (r = 1)
    }
    if (t.loop) {
        const p = e.getSlideIndexByData(0)
          , u = e.getSlideIndexByData(e.slides.length - 1)
          , m = e.slidesGrid[p]
          , h = e.slidesGrid[u]
          , g = e.slidesGrid[e.slidesGrid.length - 1]
          , v = Math.abs(i);
        v >= m ? a = (v - m) / g : a = (v + g - h) / g,
        a > 1 && (a -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: a,
        isBeginning: n,
        isEnd: o
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    n && !l && e.emit("reachBeginning toEdge"),
    o && !f && e.emit("reachEnd toEdge"),
    (l && !n || f && !o) && e.emit("fromEdge"),
    e.emit("progress", r)
}
const ae = (i, e, t) => {
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
}
;
function Je() {
    const i = this
      , {slides: e, params: t, slidesEl: s, activeIndex: r} = i
      , n = i.virtual && t.virtual.enabled
      , o = i.grid && t.grid && t.grid.rows > 1
      , a = u => R(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    let l, f, p;
    if (n)
        if (t.loop) {
            let u = r - i.virtual.slidesBefore;
            u < 0 && (u = i.virtual.slides.length + u),
            u >= i.virtual.slides.length && (u -= i.virtual.slides.length),
            l = a(`[data-swiper-slide-index="${u}"]`)
        } else
            l = a(`[data-swiper-slide-index="${r}"]`);
    else
        o ? (l = e.find(u => u.column === r),
        p = e.find(u => u.column === r + 1),
        f = e.find(u => u.column === r - 1)) : l = e[r];
    l && (o || (p = Fe(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !p && (p = e[0]),
    f = $e(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !f === 0 && (f = e[e.length - 1]))),
    e.forEach(u => {
        ae(u, u === l, t.slideActiveClass),
        ae(u, u === p, t.slideNextClass),
        ae(u, u === f, t.slidePrevClass)
    }
    ),
    i.emitSlidesClasses()
}
const Z = (i, e) => {
    if (!i || i.destroyed || !i.params)
        return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      , s = e.closest(t());
    if (s) {
        let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !r && i.isElement && (s.shadowRoot ? r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            s.shadowRoot && (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),
            r && r.remove())
        }
        )),
        r && r.remove()
    }
}
  , le = (i, e) => {
    if (!i.slides[e])
        return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , ue = i => {
    if (!i || i.destroyed || !i.params)
        return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView)
      , r = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
        const o = r
          , a = [o - e];
        a.push(...Array.from({
            length: e
        }).map( (l, f) => o + s + f)),
        i.slides.forEach( (l, f) => {
            a.includes(l.column) && le(i, f)
        }
        );
        return
    }
    const n = r + s - 1;
    if (i.params.rewind || i.params.loop)
        for (let o = r - e; o <= n + e; o += 1) {
            const a = (o % t + t) % t;
            (a < r || a > n) && le(i, a)
        }
    else
        for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1)
            o !== r && (o > n || o < r) && le(i, o)
}
;
function Ze(i) {
    const {slidesGrid: e, params: t} = i
      , s = i.rtlTranslate ? i.translate : -i.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : s >= e[n] && s < e[n + 1] && (r = n + 1) : s >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
    r
}
function et(i) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: r, activeIndex: n, realIndex: o, snapIndex: a} = e;
    let l = i, f;
    const p = h => {
        let g = h - e.virtual.slidesBefore;
        return g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
    }
    ;
    if (typeof l > "u" && (l = Ze(e)),
    s.indexOf(t) >= 0)
        f = s.indexOf(t);
    else {
        const h = Math.min(r.slidesPerGroupSkip, l);
        f = h + Math.floor((l - h) / r.slidesPerGroup)
    }
    if (f >= s.length && (f = s.length - 1),
    l === n && !e.params.loop) {
        f !== a && (e.snapIndex = f,
        e.emit("snapIndexChange"));
        return
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = p(l);
        return
    }
    const u = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop)
        m = p(l);
    else if (u) {
        const h = e.slides.find(v => v.column === l);
        let g = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(h), 0)),
        m = Math.floor(g / r.grid.rows)
    } else if (e.slides[l]) {
        const h = e.slides[l].getAttribute("data-swiper-slide-index");
        h ? m = parseInt(h, 10) : m = l
    } else
        m = l;
    Object.assign(e, {
        previousSnapIndex: a,
        snapIndex: f,
        previousRealIndex: o,
        realIndex: m,
        previousIndex: n,
        activeIndex: l
    }),
    e.initialized && ue(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== m && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function tt(i, e) {
    const t = this
      , s = t.params;
    let r = i.closest(`.${s.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(a => {
        !r && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (r = a)
    }
    );
    let n = !1, o;
    if (r) {
        for (let a = 0; a < t.slides.length; a += 1)
            if (t.slides[a] === r) {
                n = !0,
                o = a;
                break
            }
    }
    if (r && n)
        t.clickedSlide = r,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var it = {
    updateSize: je,
    updateSlides: Ye,
    updateAutoHeight: Xe,
    updateSlidesOffset: Ue,
    updateSlidesProgress: Ke,
    updateProgress: Qe,
    updateSlidesClasses: Je,
    updateActiveIndex: et,
    updateClickedSlide: tt
};
function st(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: s, translate: r, wrapperEl: n} = e;
    if (t.virtualTranslate)
        return s ? -r : r;
    if (t.cssMode)
        return r;
    let o = ze(n, i);
    return o += e.cssOverflowAdjustment(),
    s && (o = -o),
    o || 0
}
function nt(i, e) {
    const t = this
      , {rtlTranslate: s, params: r, wrapperEl: n, progress: o} = t;
    let a = 0
      , l = 0;
    const f = 0;
    t.isHorizontal() ? a = s ? -i : i : l = i,
    r.roundLengths && (a = Math.floor(a),
    l = Math.floor(l)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? a : l,
    r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : r.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${a}px, ${l}px, ${f}px)`);
    let p;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? p = 0 : p = (i - t.minTranslate()) / u,
    p !== o && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e)
}
function rt() {
    return -this.snapGrid[0]
}
function at() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function lt(i, e, t, s, r) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
    const n = this
      , {params: o, wrapperEl: a} = n;
    if (n.animating && o.preventInteractionOnTransition)
        return !1;
    const l = n.minTranslate()
      , f = n.maxTranslate();
    let p;
    if (s && i > l ? p = l : s && i < f ? p = f : p = i,
    n.updateProgress(p),
    o.cssMode) {
        const u = n.isHorizontal();
        if (e === 0)
            a[u ? "scrollLeft" : "scrollTop"] = -p;
        else {
            if (!n.support.smoothScroll)
                return ye({
                    swiper: n,
                    targetPosition: -p,
                    side: u ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [u ? "left" : "top"]: -p,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(p),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(p),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(m) {
        !n || n.destroyed || m.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        n.animating = !1,
        t && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var ot = {
    getTranslate: st,
    setTranslate: nt,
    minTranslate: rt,
    maxTranslate: at,
    translateTo: lt
};
function dt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`,
    t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e)
}
function Ce(i) {
    let {swiper: e, runCallbacks: t, direction: s, step: r} = i;
    const {activeIndex: n, previousIndex: o} = e;
    let a = s;
    if (a || (n > o ? a = "next" : n < o ? a = "prev" : a = "reset"),
    e.emit(`transition${r}`),
    t && n !== o) {
        if (a === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
        a === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function ct(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(),
    Ce({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}
function ft(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    t.animating = !1,
    !s.cssMode && (t.setTransition(0),
    Ce({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var ut = {
    setTransition: dt,
    transitionStart: ct,
    transitionEnd: ft
};
function pt(i, e, t, s, r) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    let o = i;
    o < 0 && (o = 0);
    const {params: a, snapGrid: l, slidesGrid: f, previousIndex: p, activeIndex: u, rtlTranslate: m, wrapperEl: h, enabled: g} = n;
    if (!g && !s && !r || n.destroyed || n.animating && a.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = n.params.speed);
    const v = Math.min(n.params.slidesPerGroupSkip, o);
    let x = v + Math.floor((o - v) / n.params.slidesPerGroup);
    x >= l.length && (x = l.length - 1);
    const b = -l[x];
    if (a.normalizeSlideIndex)
        for (let k = 0; k < f.length; k += 1) {
            const I = -Math.floor(b * 100)
              , O = Math.floor(f[k] * 100)
              , T = Math.floor(f[k + 1] * 100);
            typeof f[k + 1] < "u" ? I >= O && I < T - (T - O) / 2 ? o = k : I >= O && I < T && (o = k + 1) : I >= O && (o = k)
        }
    if (n.initialized && o !== u && (!n.allowSlideNext && (m ? b > n.translate && b > n.minTranslate() : b < n.translate && b < n.minTranslate()) || !n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (u || 0) !== o))
        return !1;
    o !== (p || 0) && t && n.emit("beforeSlideChangeStart"),
    n.updateProgress(b);
    let d;
    o > u ? d = "next" : o < u ? d = "prev" : d = "reset";
    const c = n.virtual && n.params.virtual.enabled;
    if (!(c && r) && (m && -b === n.translate || !m && b === n.translate))
        return n.updateActiveIndex(o),
        a.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        a.effect !== "slide" && n.setTranslate(b),
        d !== "reset" && (n.transitionStart(t, d),
        n.transitionEnd(t, d)),
        !1;
    if (a.cssMode) {
        const k = n.isHorizontal()
          , I = m ? b : -b;
        if (e === 0)
            c && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            c && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                h[k ? "scrollLeft" : "scrollTop"] = I
            }
            )) : h[k ? "scrollLeft" : "scrollTop"] = I,
            c && requestAnimationFrame( () => {
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            );
        else {
            if (!n.support.smoothScroll)
                return ye({
                    swiper: n,
                    targetPosition: I,
                    side: k ? "left" : "top"
                }),
                !0;
            h.scrollTo({
                [k ? "left" : "top"]: I,
                behavior: "smooth"
            })
        }
        return !0
    }
    const A = Ee().isSafari;
    return c && !r && A && n.isElement && n.virtual.update(!1, !1, o),
    n.setTransition(e),
    n.setTranslate(b),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, s),
    n.transitionStart(t, d),
    e === 0 ? n.transitionEnd(t, d) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(I) {
        !n || n.destroyed || I.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(t, d))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function mt(i, e, t, s) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    if (r.destroyed)
        return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = i;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            o = o + r.virtual.slidesBefore;
        else {
            let a;
            if (n) {
                const m = o * r.params.grid.rows;
                a = r.slides.find(h => h.getAttribute("data-swiper-slide-index") * 1 === m).column
            } else
                a = r.getSlideIndexByData(o);
            const l = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
              , {centeredSlides: f} = r.params;
            let p = r.params.slidesPerView;
            p === "auto" ? p = r.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
            f && p % 2 === 0 && (p = p + 1));
            let u = l - a < p;
            if (f && (u = u || a < Math.ceil(p / 2)),
            s && f && r.params.slidesPerView !== "auto" && !n && (u = !1),
            u) {
                const m = f ? a < r.activeIndex ? "prev" : "next" : a - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: m,
                    slideTo: !0,
                    activeSlideIndex: m === "next" ? a + 1 : a - l + 1,
                    slideRealIndex: m === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const m = o * r.params.grid.rows;
                o = r.slides.find(h => h.getAttribute("data-swiper-slide-index") * 1 === m).column
            } else
                o = r.getSlideIndexByData(o)
        }
    return requestAnimationFrame( () => {
        r.slideTo(o, e, t, s)
    }
    ),
    r
}
function ht(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {enabled: r, params: n, animating: o} = s;
    if (!r || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    let a = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : a
      , f = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (o && !f && n.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && n.cssMode)
            return requestAnimationFrame( () => {
                s.slideTo(s.activeIndex + l, i, e, t)
            }
            ),
            !0
    }
    return n.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + l, i, e, t)
}
function gt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {params: r, snapGrid: n, slidesGrid: o, rtlTranslate: a, enabled: l, animating: f} = s;
    if (!l || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    const p = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (f && !p && r.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const u = a ? s.translate : -s.translate;
    function m(d) {
        return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d)
    }
    const h = m(u)
      , g = n.map(d => m(d))
      , v = r.freeMode && r.freeMode.enabled;
    let x = n[g.indexOf(h) - 1];
    if (typeof x > "u" && (r.cssMode || v)) {
        let d;
        n.forEach( (c, w) => {
            h >= c && (d = w)
        }
        ),
        typeof d < "u" && (x = v ? n[d] : n[d > 0 ? d - 1 : d])
    }
    let b = 0;
    if (typeof x < "u" && (b = o.indexOf(x),
    b < 0 && (b = s.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (b = b - s.slidesPerViewDynamic("previous", !0) + 1,
    b = Math.max(b, 0))),
    r.rewind && s.isBeginning) {
        const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(d, i, e, t)
    } else if (r.loop && s.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame( () => {
            s.slideTo(b, i, e, t)
        }
        ),
        !0;
    return s.slideTo(b, i, e, t)
}
function vt(i, e, t) {
    e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
        return typeof i > "u" && (i = s.params.speed),
        s.slideTo(s.activeIndex, i, e, t)
}
function wt(i, e, t, s) {
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const r = this;
    if (r.destroyed)
        return;
    typeof i > "u" && (i = r.params.speed);
    let n = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, n)
      , a = o + Math.floor((n - o) / r.params.slidesPerGroup)
      , l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
        const f = r.snapGrid[a]
          , p = r.snapGrid[a + 1];
        l - f > (p - f) * s && (n += r.params.slidesPerGroup)
    } else {
        const f = r.snapGrid[a - 1]
          , p = r.snapGrid[a];
        l - f <= (p - f) * s && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, r.slidesGrid.length - 1),
    r.slideTo(n, i, e, t)
}
function St() {
    const i = this;
    if (i.destroyed)
        return;
    const {params: e, slidesEl: t} = i
      , s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let r = i.clickedIndex, n;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating)
            return;
        n = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? r < i.loopedSlides - s / 2 || r > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(),
        r = i.getSlideIndex(R(t, `${o}[data-swiper-slide-index="${n}"]`)[0]),
        ce( () => {
            i.slideTo(r)
        }
        )) : i.slideTo(r) : r > i.slides.length - s ? (i.loopFix(),
        r = i.getSlideIndex(R(t, `${o}[data-swiper-slide-index="${n}"]`)[0]),
        ce( () => {
            i.slideTo(r)
        }
        )) : i.slideTo(r)
    } else
        i.slideTo(r)
}
var bt = {
    slideTo: pt,
    slideToLoop: mt,
    slideNext: ht,
    slidePrev: gt,
    slideReset: vt,
    slideToClosest: wt,
    slideToClickedSlide: St
};
function yt(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = () => {
        R(s, `.${t.slideClass}, swiper-slide`).forEach( (u, m) => {
            u.setAttribute("data-swiper-slide-index", m)
        }
        )
    }
      , n = e.grid && t.grid && t.grid.rows > 1
      , o = t.slidesPerGroup * (n ? t.grid.rows : 1)
      , a = e.slides.length % o !== 0
      , l = n && e.slides.length % t.grid.rows !== 0
      , f = p => {
        for (let u = 0; u < p; u += 1) {
            const m = e.isElement ? Y("swiper-slide", [t.slideBlankClass]) : Y("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(m)
        }
    }
    ;
    if (a) {
        if (t.loopAddBlankSlides) {
            const p = o - e.slides.length % o;
            f(p),
            e.recalcSlides(),
            e.updateSlides()
        } else
            te("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const p = t.grid.rows - e.slides.length % t.grid.rows;
            f(p),
            e.recalcSlides(),
            e.updateSlides()
        } else
            te("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function Tt(i) {
    let {slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: r, activeSlideIndex: n, byController: o, byMousewheel: a} = i === void 0 ? {} : i;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: f, allowSlidePrev: p, allowSlideNext: u, slidesEl: m, params: h} = l
      , {centeredSlides: g} = h;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && h.virtual.enabled) {
        t && (!h.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = p,
        l.allowSlideNext = u,
        l.emit("loopFix");
        return
    }
    let v = h.slidesPerView;
    v === "auto" ? v = l.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)),
    g && v % 2 === 0 && (v = v + 1));
    const x = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
    let b = x;
    b % x !== 0 && (b += x - b % x),
    b += h.loopAdditionalSlides,
    l.loopedSlides = b;
    const d = l.grid && h.grid && h.grid.rows > 1;
    f.length < v + b ? te("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : d && h.grid.fill === "row" && te("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const c = []
      , w = [];
    let y = l.activeIndex;
    typeof n > "u" ? n = l.getSlideIndex(f.find(E => E.classList.contains(h.slideActiveClass))) : y = n;
    const A = s === "next" || !s
      , k = s === "prev" || !s;
    let I = 0
      , O = 0;
    const T = d ? Math.ceil(f.length / h.grid.rows) : f.length
      , L = (d ? f[n].column : n) + (g && typeof r > "u" ? -v / 2 + .5 : 0);
    if (L < b) {
        I = Math.max(b - L, x);
        for (let E = 0; E < b - L; E += 1) {
            const P = E - Math.floor(E / T) * T;
            if (d) {
                const D = T - P - 1;
                for (let B = f.length - 1; B >= 0; B -= 1)
                    f[B].column === D && c.push(B)
            } else
                c.push(T - P - 1)
        }
    } else if (L + v > T - b) {
        O = Math.max(L - (T - b * 2), x);
        for (let E = 0; E < O; E += 1) {
            const P = E - Math.floor(E / T) * T;
            d ? f.forEach( (D, B) => {
                D.column === P && w.push(B)
            }
            ) : w.push(P)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        l.__preventObserver__ = !1
    }
    ),
    k && c.forEach(E => {
        f[E].swiperLoopMoveDOM = !0,
        m.prepend(f[E]),
        f[E].swiperLoopMoveDOM = !1
    }
    ),
    A && w.forEach(E => {
        f[E].swiperLoopMoveDOM = !0,
        m.append(f[E]),
        f[E].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    h.slidesPerView === "auto" ? l.updateSlides() : d && (c.length > 0 && k || w.length > 0 && A) && l.slides.forEach( (E, P) => {
        l.grid.updateSlide(P, E, l.slides)
    }
    ),
    h.watchSlidesProgress && l.updateSlidesOffset(),
    t) {
        if (c.length > 0 && k) {
            if (typeof e > "u") {
                const E = l.slidesGrid[y]
                  , D = l.slidesGrid[y + I] - E;
                a ? l.setTranslate(l.translate - D) : (l.slideTo(y + Math.ceil(I), 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D))
            } else if (r) {
                const E = d ? c.length / h.grid.rows : c.length;
                l.slideTo(l.activeIndex + E, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (w.length > 0 && A)
            if (typeof e > "u") {
                const E = l.slidesGrid[y]
                  , D = l.slidesGrid[y - O] - E;
                a ? l.setTranslate(l.translate - D) : (l.slideTo(y - O, 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D))
            } else {
                const E = d ? w.length / h.grid.rows : w.length;
                l.slideTo(l.activeIndex - E, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = p,
    l.allowSlideNext = u,
    l.controller && l.controller.control && !o) {
        const E = {
            slideRealIndex: e,
            direction: s,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(P => {
            !P.destroyed && P.params.loop && P.loopFix({
                ...E,
                slideTo: P.params.slidesPerView === h.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...E,
            slideTo: l.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function xt() {
    const i = this
      , {params: e, slidesEl: t} = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
        return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(r => {
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        s[n] = r
    }
    ),
    i.slides.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(r => {
        t.append(r)
    }
    ),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0)
}
var Et = {
    loopCreate: yt,
    loopFix: Tt,
    loopDestroy: xt
};
function Ct(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function Mt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0),
    i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    i.isElement && requestAnimationFrame( () => {
        i.__preventObserver__ = !1
    }
    ))
}
var Pt = {
    setGrabCursor: Ct,
    unsetGrabCursor: Mt
};
function Lt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
        if (!s || s === H() || s === $())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const r = s.closest(i);
        return !r && !s.getRootNode ? null : r || t(s.getRootNode().host)
    }
    return t(e)
}
function ge(i, e, t) {
    const s = $()
      , {params: r} = i
      , n = r.edgeSwipeDetection
      , o = r.edgeSwipeThreshold;
    return n && (t <= o || t >= s.innerWidth - o) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function It(i) {
    const e = this
      , t = H();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== s.pointerId)
            return;
        r.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        ge(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: o, enabled: a} = e;
    if (!a || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = s.target;
    if (n.touchEventsTarget === "wrapper" && !Be(l, e.wrapperEl) || "which"in s && s.which === 3 || "button"in s && s.button > 0 || r.isTouched && r.isMoved)
        return;
    const f = !!n.noSwipingClass && n.noSwipingClass !== ""
      , p = s.composedPath ? s.composedPath() : s.path;
    f && s.target && s.target.shadowRoot && p && (l = p[0]);
    const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , m = !!(s.target && s.target.shadowRoot);
    if (n.noSwiping && (m ? Lt(u, l) : l.closest(u))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler))
        return;
    o.currentX = s.pageX,
    o.currentY = s.pageY;
    const h = o.currentX
      , g = o.currentY;
    if (!ge(e, s, h))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = h,
    o.startY = g,
    r.touchStartTime = ee(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
    let v = !0;
    l.matches(r.focusableElements) && (v = !1,
    l.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== l && (s.pointerType === "mouse" || s.pointerType !== "mouse" && !l.matches(r.focusableElements)) && t.activeElement.blur();
    const x = v && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || x) && !l.isContentEditable && s.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function At(i) {
    const e = H()
      , t = this
      , s = t.touchEventsData
      , {params: r, touches: n, rtlTranslate: o, enabled: a} = t;
    if (!a || !r.simulateTouch && i.pointerType === "mouse")
        return;
    let l = i;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (s.touchId !== null || l.pointerId !== s.pointerId))
        return;
    let f;
    if (l.type === "touchmove") {
        if (f = [...l.changedTouches].find(y => y.identifier === s.touchId),
        !f || f.identifier !== s.touchId)
            return
    } else
        f = l;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const p = f.pageX
      , u = f.pageY;
    if (l.preventedByNestedSwiper) {
        n.startX = p,
        n.startY = u;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched && (Object.assign(n, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u
        }),
        s.touchStartTime = ee());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (u < n.startY && t.translate <= t.maxTranslate() || u > n.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (p < n.startX && t.translate <= t.maxTranslate() || p > n.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && e.activeElement.matches(s.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(),
    e.activeElement && l.target === e.activeElement && l.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", l),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = p,
    n.currentY = u;
    const m = n.currentX - n.startX
      , h = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + h ** 2) < t.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let y;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : m * m + h * h >= 25 && (y = Math.atan2(Math.abs(h), Math.abs(m)) * 180 / Math.PI,
        s.isScrolling = t.isHorizontal() ? y > r.touchAngle : 90 - y > r.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", l),
    typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
    s.isScrolling || l.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    t.allowClick = !1,
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = t.isHorizontal() ? m : h
      , v = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1),
    v = Math.abs(v) * (o ? 1 : -1)),
    n.diff = g,
    g *= r.touchRatio,
    o && (g = -g,
    v = -v);
    const x = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next",
    t.touchesDirection = v > 0 ? "prev" : "next";
    const b = t.params.loop && !r.cssMode
      , d = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (b && d && t.loopFix({
            direction: t.swipeDirection
        }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const y = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            t.wrapperEl.dispatchEvent(y)
        }
        s.allowMomentumBounce = !1,
        r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)
    }
    if (new Date().getTime(),
    r._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && x !== t.touchesDirection && b && d && Math.abs(g) >= 1) {
        Object.assign(n, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", l),
    s.isMoved = !0,
    s.currentTranslate = g + s.startTranslate;
    let c = !0
      , w = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (w = 0),
    g > 0 ? (b && d && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > t.minTranslate() && (c = !1,
    r.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** w))) : g < 0 && (b && d && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }),
    s.currentTranslate < t.maxTranslate() && (c = !1,
    r.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** w))),
    c && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
        if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                s.currentTranslate = s.startTranslate,
                n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function kt(i) {
    const e = this
      , t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let r;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (r = [...s.changedTouches].find(y => y.identifier === t.touchId),
        !r || r.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId)
            return;
        r = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: o, touches: a, rtlTranslate: l, slidesGrid: f, enabled: p} = e;
    if (!p || !o.simulateTouch && s.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = ee()
      , m = u - t.touchStartTime;
    if (e.allowClick) {
        const y = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(y && y[0] || s.target, y),
        e.emit("tap click", s),
        m < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = ee(),
    ce( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let h;
    if (o.followFinger ? h = l ? e.translate : -e.translate : h = -t.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    const g = h >= -e.maxTranslate() && !e.params.loop;
    let v = 0
      , x = e.slidesSizesGrid[0];
    for (let y = 0; y < f.length; y += y < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const A = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof f[y + A] < "u" ? (g || h >= f[y] && h < f[y + A]) && (v = y,
        x = f[y + A] - f[y]) : (g || h >= f[y]) && (v = y,
        x = f[f.length - 1] - f[f.length - 2])
    }
    let b = null
      , d = null;
    o.rewind && (e.isBeginning ? d = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (b = 0));
    const c = (h - f[v]) / x
      , w = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (m > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (c >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? b : v + w) : e.slideTo(v)),
        e.swipeDirection === "prev" && (c > 1 - o.longSwipesRatio ? e.slideTo(v + w) : d !== null && c < 0 && Math.abs(c) > o.longSwipesRatio ? e.slideTo(d) : e.slideTo(v))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + w) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : v + w),
        e.swipeDirection === "prev" && e.slideTo(d !== null ? d : v))
    }
}
function ve() {
    const i = this
      , {params: e, el: t} = i;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && i.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = i
      , o = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0,
    i.allowSlidePrev = !0,
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !a ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout),
    i.autoplay.resizeTimeout = setTimeout( () => {
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }
    , 500)),
    i.allowSlidePrev = r,
    i.allowSlideNext = s,
    i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow()
}
function Ot(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
    i.stopImmediatePropagation())))
}
function zt() {
    const i = this
      , {wrapperEl: e, rtlTranslate: t, enabled: s} = i;
    if (!s)
        return;
    i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
    let r;
    const n = i.maxTranslate() - i.minTranslate();
    n === 0 ? r = 0 : r = (i.translate - i.minTranslate()) / n,
    r !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1)
}
function Dt(i) {
    const e = this;
    Z(e, i.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Gt() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0,
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const Me = (i, e) => {
    const t = H()
      , {params: s, el: r, wrapperEl: n, device: o} = i
      , a = !!s.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , f = e;
    !r || typeof r == "string" || (t[l]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: a
    }),
    r[l]("touchstart", i.onTouchStart, {
        passive: !1
    }),
    r[l]("pointerdown", i.onTouchStart, {
        passive: !1
    }),
    t[l]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: a
    }),
    t[l]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: a
    }),
    t[l]("touchend", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerup", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointercancel", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("touchcancel", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerout", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerleave", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("contextmenu", i.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && r[l]("click", i.onClick, !0),
    s.cssMode && n[l]("scroll", i.onScroll),
    s.updateOnWindowResize ? i[f](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ve, !0) : i[f]("observerUpdate", ve, !0),
    r[l]("load", i.onLoad, {
        capture: !0
    }))
}
;
function Bt() {
    const i = this
      , {params: e} = i;
    i.onTouchStart = It.bind(i),
    i.onTouchMove = At.bind(i),
    i.onTouchEnd = kt.bind(i),
    i.onDocumentTouchStart = Gt.bind(i),
    e.cssMode && (i.onScroll = zt.bind(i)),
    i.onClick = Ot.bind(i),
    i.onLoad = Dt.bind(i),
    Me(i, "on")
}
function Vt() {
    Me(this, "off")
}
var $t = {
    attachEvents: Bt,
    detachEvents: Vt
};
const we = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function Ft() {
    const i = this
      , {realIndex: e, initialized: t, params: s, el: r} = i
      , n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const o = H()
      , a = s.breakpointsBase === "window" || !s.breakpointsBase ? s.breakpointsBase : "container"
      , l = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? i.el : o.querySelector(s.breakpointsBase)
      , f = i.getBreakpoint(n, a, l);
    if (!f || i.currentBreakpoint === f)
        return;
    const u = (f in n ? n[f] : void 0) || i.originalParams
      , m = we(i, s)
      , h = we(i, u)
      , g = i.params.grabCursor
      , v = u.grabCursor
      , x = s.enabled;
    m && !h ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()) : !m && h && (r.classList.add(`${s.containerModifierClass}grid`),
    (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()),
    g && !v ? i.unsetGrabCursor() : !g && v && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(A => {
        if (typeof u[A] > "u")
            return;
        const k = s[A] && s[A].enabled
          , I = u[A] && u[A].enabled;
        k && !I && i[A].disable(),
        !k && I && i[A].enable()
    }
    );
    const b = u.direction && u.direction !== s.direction
      , d = s.loop && (u.slidesPerView !== s.slidesPerView || b)
      , c = s.loop;
    b && t && i.changeDirection(),
    F(i.params, u);
    const w = i.params.enabled
      , y = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }),
    x && !w ? i.disable() : !x && w && i.enable(),
    i.currentBreakpoint = f,
    i.emit("_beforeBreakpoint", u),
    t && (d ? (i.loopDestroy(),
    i.loopCreate(e),
    i.updateSlides()) : !c && y ? (i.loopCreate(e),
    i.updateSlides()) : c && !y && i.loopDestroy()),
    i.emit("breakpoint", u)
}
function Nt(i, e, t) {
    if (e === void 0 && (e = "window"),
    !i || e === "container" && !t)
        return;
    let s = !1;
    const r = $()
      , n = e === "window" ? r.innerHeight : t.clientHeight
      , o = Object.keys(i).map(a => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const l = parseFloat(a.substr(1));
            return {
                value: n * l,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    o.sort( (a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const {point: l, value: f} = o[a];
        e === "window" ? r.matchMedia(`(min-width: ${f}px)`).matches && (s = l) : f <= t.clientWidth && (s = l)
    }
    return s || "max"
}
var Ht = {
    setBreakpoint: Ft,
    getBreakpoint: Nt
};
function Rt(i, e) {
    const t = [];
    return i.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(r => {
            s[r] && t.push(e + r)
        }
        ) : typeof s == "string" && t.push(e + s)
    }
    ),
    t
}
function _t() {
    const i = this
      , {classNames: e, params: t, rtl: s, el: r, device: n} = i
      , o = Rt(["initialized", t.direction, {
        "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: s
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...o),
    r.classList.add(...e),
    i.emitContainerClasses()
}
function Wt() {
    const i = this
      , {el: e, classNames: t} = i;
    !e || typeof e == "string" || (e.classList.remove(...t),
    i.emitContainerClasses())
}
var qt = {
    addClasses: _t,
    removeClasses: Wt
};
function jt() {
    const i = this
      , {isLocked: e, params: t} = i
      , {slidesOffsetBefore: s} = t;
    if (s) {
        const r = i.slides.length - 1
          , n = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
        i.isLocked = i.size > n
    } else
        i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var Yt = {
    checkOverflow: jt
}
  , Se = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
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
    threshold: 5,
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
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
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
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Xt(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const r = Object.keys(s)[0]
          , n = s[r];
        if (typeof n != "object" || n === null) {
            F(e, s);
            return
        }
        if (i[r] === !0 && (i[r] = {
            enabled: !0
        }),
        r === "navigation" && i[r] && i[r].enabled && !i[r].prevEl && !i[r].nextEl && (i[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && i[r] && i[r].enabled && !i[r].el && (i[r].auto = !0),
        !(r in i && "enabled"in n)) {
            F(e, s);
            return
        }
        typeof i[r] == "object" && !("enabled"in i[r]) && (i[r].enabled = !0),
        i[r] || (i[r] = {
            enabled: !1
        }),
        F(e, s)
    }
}
const oe = {
    eventsEmitter: qe,
    update: it,
    translate: ot,
    transition: ut,
    slide: bt,
    loop: Et,
    grabCursor: Pt,
    events: $t,
    breakpoints: Ht,
    checkOverflow: Yt,
    classes: qt
}
  , de = {};
class N {
    constructor() {
        let e, t;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e,t] = r,
        t || (t = {}),
        t = F({}, t),
        e && !t.el && (t.el = e);
        const o = H();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const p = [];
            return o.querySelectorAll(t.el).forEach(u => {
                const m = F({}, t, {
                    el: u
                });
                p.push(new N(m))
            }
            ),
            p
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = Te(),
        a.device = xe({
            userAgent: t.userAgent
        }),
        a.browser = Ee(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach(p => {
            p({
                params: t,
                swiper: a,
                extendParams: Xt(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const f = F({}, Se, l);
        return a.params = F({}, f, de, t),
        a.originalParams = F({}, a.params),
        a.passedParams = F({}, t),
        a.params && a.params.on && Object.keys(a.params.on).forEach(p => {
            a.on(p, a.params.on[p])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
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
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
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
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: s} = this
          , r = R(t, `.${s.slideClass}, swiper-slide`)
          , n = X(r[0]);
        return X(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find(t => t.getAttribute("data-swiper-slide-index") * 1 === e))
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: s} = e;
        e.slides = R(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = s.minTranslate()
          , o = (s.maxTranslate() - r) * e + r;
        s.translateTo(o, typeof t > "u" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(s => {
            const r = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: r
            }),
            e.emit("_slideClass", s, r)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const s = this
          , {params: r, slides: n, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: f} = s;
        let p = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let u = n[f] ? Math.ceil(n[f].swiperSlideSize) : 0, m;
            for (let h = f + 1; h < n.length; h += 1)
                n[h] && !m && (u += Math.ceil(n[h].swiperSlideSize),
                p += 1,
                u > l && (m = !0));
            for (let h = f - 1; h >= 0; h -= 1)
                n[h] && !m && (u += n[h].swiperSlideSize,
                p += 1,
                u > l && (m = !0))
        } else if (e === "current")
            for (let u = f + 1; u < n.length; u += 1)
                (t ? o[u] + a[u] - o[f] < l : o[u] - o[f] < l) && (p += 1);
        else
            for (let u = f - 1; u >= 0; u -= 1)
                o[f] - o[u] < l && (p += 1);
        return p
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && Z(e, o)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function r() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
              , a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            r(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this
          , r = s.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        t && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = t,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : R(s, r())[0];
        return !o && t.params.createElements && (o = Y("div", t.params.wrapperClass),
        s.append(o),
        R(s, `.${t.params.slideClass}`).forEach(a => {
            o.append(a)
        }
        )),
        Object.assign(t, {
            el: s,
            wrapperEl: o,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || j(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || j(s, "direction") === "rtl"),
            wrongRTL: j(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(n => {
            n.complete ? Z(t, n) : n.addEventListener("load", o => {
                Z(t, o.target)
            }
            )
        }
        ),
        ue(t),
        t.initialized = !0,
        ue(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const s = this
          , {params: r, el: n, wrapperEl: o, slides: a} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        t && (s.removeClasses(),
        n && typeof n != "string" && n.removeAttribute("style"),
        o && o.removeAttribute("style"),
        a && a.length && a.forEach(l => {
            l.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(l => {
            s.off(l)
        }
        ),
        e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null),
        ke(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        F(de, e)
    }
    static get extendedDefaults() {
        return de
    }
    static get defaults() {
        return Se
    }
    static installModule(e) {
        N.prototype.__modules__ || (N.prototype.__modules__ = []);
        const t = N.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => N.installModule(t)),
        N) : (N.installModule(e),
        N)
    }
}
Object.keys(oe).forEach(i => {
    Object.keys(oe[i]).forEach(e => {
        N.prototype[e] = oe[i][e]
    }
    )
}
);
N.use([_e, We]);
function Kt(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = H()
      , o = $();
    e.keyboard = {
        enabled: !1
    },
    t({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });
    function a(p) {
        if (!e.enabled)
            return;
        const {rtlTranslate: u} = e;
        let m = p;
        m.originalEvent && (m = m.originalEvent);
        const h = m.keyCode || m.charCode
          , g = e.params.keyboard.pageUpDown
          , v = g && h === 33
          , x = g && h === 34
          , b = h === 37
          , d = h === 39
          , c = h === 38
          , w = h === 40;
        if (!e.allowSlideNext && (e.isHorizontal() && d || e.isVertical() && w || x) || !e.allowSlidePrev && (e.isHorizontal() && b || e.isVertical() && c || v))
            return !1;
        if (!(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (e.params.keyboard.onlyInViewport && (v || x || b || d || c || w)) {
                let y = !1;
                if (ie(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && ie(e.el, `.${e.params.slideActiveClass}`).length === 0)
                    return;
                const A = e.el
                  , k = A.clientWidth
                  , I = A.clientHeight
                  , O = o.innerWidth
                  , T = o.innerHeight
                  , C = Ve(A);
                u && (C.left -= A.scrollLeft);
                const L = [[C.left, C.top], [C.left + k, C.top], [C.left, C.top + I], [C.left + k, C.top + I]];
                for (let E = 0; E < L.length; E += 1) {
                    const P = L[E];
                    if (P[0] >= 0 && P[0] <= O && P[1] >= 0 && P[1] <= T) {
                        if (P[0] === 0 && P[1] === 0)
                            continue;
                        y = !0
                    }
                }
                if (!y)
                    return
            }
            e.isHorizontal() ? ((v || x || b || d) && (m.preventDefault ? m.preventDefault() : m.returnValue = !1),
            ((x || d) && !u || (v || b) && u) && e.slideNext(),
            ((v || b) && !u || (x || d) && u) && e.slidePrev()) : ((v || x || c || w) && (m.preventDefault ? m.preventDefault() : m.returnValue = !1),
            (x || w) && e.slideNext(),
            (v || c) && e.slidePrev()),
            r("keyPress", h)
        }
    }
    function l() {
        e.keyboard.enabled || (n.addEventListener("keydown", a),
        e.keyboard.enabled = !0)
    }
    function f() {
        e.keyboard.enabled && (n.removeEventListener("keydown", a),
        e.keyboard.enabled = !1)
    }
    s("init", () => {
        e.params.keyboard.enabled && l()
    }
    ),
    s("destroy", () => {
        e.keyboard.enabled && f()
    }
    ),
    Object.assign(e.keyboard, {
        enable: l,
        disable: f
    })
}
function Pe(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(r => {
        if (!t[r] && t.auto === !0) {
            let n = R(i.el, `.${s[r]}`)[0];
            n || (n = Y("div", s[r]),
            n.className = s[r],
            i.el.append(n)),
            t[r] = n,
            e[r] = n
        }
    }
    ),
    t
}
function Qt(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    t({
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
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    function n(g) {
        let v;
        return g && typeof g == "string" && e.isElement && (v = e.el.querySelector(g) || e.hostEl.querySelector(g),
        v) ? v : (g && (typeof g == "string" && (v = [...document.querySelectorAll(g)]),
        e.params.uniqueNavElements && typeof g == "string" && v && v.length > 1 && e.el.querySelectorAll(g).length === 1 ? v = e.el.querySelector(g) : v && v.length === 1 && (v = v[0])),
        g && !v ? g : v)
    }
    function o(g, v) {
        const x = e.params.navigation;
        g = z(g),
        g.forEach(b => {
            b && (b.classList[v ? "add" : "remove"](...x.disabledClass.split(" ")),
            b.tagName === "BUTTON" && (b.disabled = v),
            e.params.watchOverflow && e.enabled && b.classList[e.isLocked ? "add" : "remove"](x.lockClass))
        }
        )
    }
    function a() {
        const {nextEl: g, prevEl: v} = e.navigation;
        if (e.params.loop) {
            o(v, !1),
            o(g, !1);
            return
        }
        o(v, e.isBeginning && !e.params.rewind),
        o(g, e.isEnd && !e.params.rewind)
    }
    function l(g) {
        g.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        r("navigationPrev"))
    }
    function f(g) {
        g.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        r("navigationNext"))
    }
    function p() {
        const g = e.params.navigation;
        if (e.params.navigation = Pe(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(g.nextEl || g.prevEl))
            return;
        let v = n(g.nextEl)
          , x = n(g.prevEl);
        Object.assign(e.navigation, {
            nextEl: v,
            prevEl: x
        }),
        v = z(v),
        x = z(x);
        const b = (d, c) => {
            d && d.addEventListener("click", c === "next" ? f : l),
            !e.enabled && d && d.classList.add(...g.lockClass.split(" "))
        }
        ;
        v.forEach(d => b(d, "next")),
        x.forEach(d => b(d, "prev"))
    }
    function u() {
        let {nextEl: g, prevEl: v} = e.navigation;
        g = z(g),
        v = z(v);
        const x = (b, d) => {
            b.removeEventListener("click", d === "next" ? f : l),
            b.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        g.forEach(b => x(b, "next")),
        v.forEach(b => x(b, "prev"))
    }
    s("init", () => {
        e.params.navigation.enabled === !1 ? h() : (p(),
        a())
    }
    ),
    s("toEdge fromEdge lock unlock", () => {
        a()
    }
    ),
    s("destroy", () => {
        u()
    }
    ),
    s("enable disable", () => {
        let {nextEl: g, prevEl: v} = e.navigation;
        if (g = z(g),
        v = z(v),
        e.enabled) {
            a();
            return
        }
        [...g, ...v].filter(x => !!x).forEach(x => x.classList.add(e.params.navigation.lockClass))
    }
    ),
    s("click", (g, v) => {
        let {nextEl: x, prevEl: b} = e.navigation;
        x = z(x),
        b = z(b);
        const d = v.target;
        let c = b.includes(d) || x.includes(d);
        if (e.isElement && !c) {
            const w = v.path || v.composedPath && v.composedPath();
            w && (c = w.find(y => x.includes(y) || b.includes(y)))
        }
        if (e.params.navigation.hideOnClick && !c) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === d || e.pagination.el.contains(d)))
                return;
            let w;
            x.length ? w = x[0].classList.contains(e.params.navigation.hiddenClass) : b.length && (w = b[0].classList.contains(e.params.navigation.hiddenClass)),
            r(w === !0 ? "navigationShow" : "navigationHide"),
            [...x, ...b].filter(y => !!y).forEach(y => y.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const m = () => {
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        p(),
        a()
    }
      , h = () => {
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        u()
    }
    ;
    Object.assign(e.navigation, {
        enable: m,
        disable: h,
        update: a,
        init: p,
        destroy: u
    })
}
function q(i) {
    return i === void 0 && (i = ""),
    `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Jt(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = "swiper-pagination";
    t({
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
            formatFractionCurrent: d => d,
            formatFractionTotal: d => d,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let o, a = 0;
    function l() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function f(d, c) {
        const {bulletActiveClass: w} = e.params.pagination;
        d && (d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`],
        d && (d.classList.add(`${w}-${c}`),
        d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`],
        d && d.classList.add(`${w}-${c}-${c}`)))
    }
    function p(d, c, w) {
        if (d = d % w,
        c = c % w,
        c === d + 1)
            return "next";
        if (c === d - 1)
            return "previous"
    }
    function u(d) {
        const c = d.target.closest(q(e.params.pagination.bulletClass));
        if (!c)
            return;
        d.preventDefault();
        const w = X(c) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === w)
                return;
            const y = p(e.realIndex, w, e.slides.length);
            y === "next" ? e.slideNext() : y === "previous" ? e.slidePrev() : e.slideToLoop(w)
        } else
            e.slideTo(w)
    }
    function m() {
        const d = e.rtl
          , c = e.params.pagination;
        if (l())
            return;
        let w = e.pagination.el;
        w = z(w);
        let y, A;
        const k = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , I = e.params.loop ? Math.ceil(k / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (A = e.previousRealIndex || 0,
        y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex,
        A = e.previousSnapIndex) : (A = e.previousIndex || 0,
        y = e.activeIndex || 0),
        c.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const O = e.pagination.bullets;
            let T, C, L;
            if (c.dynamicBullets && (o = fe(O[0], e.isHorizontal() ? "width" : "height"),
            w.forEach(E => {
                E.style[e.isHorizontal() ? "width" : "height"] = `${o * (c.dynamicMainBullets + 4)}px`
            }
            ),
            c.dynamicMainBullets > 1 && A !== void 0 && (a += y - (A || 0),
            a > c.dynamicMainBullets - 1 ? a = c.dynamicMainBullets - 1 : a < 0 && (a = 0)),
            T = Math.max(y - a, 0),
            C = T + (Math.min(O.length, c.dynamicMainBullets) - 1),
            L = (C + T) / 2),
            O.forEach(E => {
                const P = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(D => `${c.bulletActiveClass}${D}`)].map(D => typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
                E.classList.remove(...P)
            }
            ),
            w.length > 1)
                O.forEach(E => {
                    const P = X(E);
                    P === y ? E.classList.add(...c.bulletActiveClass.split(" ")) : e.isElement && E.setAttribute("part", "bullet"),
                    c.dynamicBullets && (P >= T && P <= C && E.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),
                    P === T && f(E, "prev"),
                    P === C && f(E, "next"))
                }
                );
            else {
                const E = O[y];
                if (E && E.classList.add(...c.bulletActiveClass.split(" ")),
                e.isElement && O.forEach( (P, D) => {
                    P.setAttribute("part", D === y ? "bullet-active" : "bullet")
                }
                ),
                c.dynamicBullets) {
                    const P = O[T]
                      , D = O[C];
                    for (let B = T; B <= C; B += 1)
                        O[B] && O[B].classList.add(...`${c.bulletActiveClass}-main`.split(" "));
                    f(P, "prev"),
                    f(D, "next")
                }
            }
            if (c.dynamicBullets) {
                const E = Math.min(O.length, c.dynamicMainBullets + 4)
                  , P = (o * E - o) / 2 - L * o
                  , D = d ? "right" : "left";
                O.forEach(B => {
                    B.style[e.isHorizontal() ? D : "top"] = `${P}px`
                }
                )
            }
        }
        w.forEach( (O, T) => {
            if (c.type === "fraction" && (O.querySelectorAll(q(c.currentClass)).forEach(C => {
                C.textContent = c.formatFractionCurrent(y + 1)
            }
            ),
            O.querySelectorAll(q(c.totalClass)).forEach(C => {
                C.textContent = c.formatFractionTotal(I)
            }
            )),
            c.type === "progressbar") {
                let C;
                c.progressbarOpposite ? C = e.isHorizontal() ? "vertical" : "horizontal" : C = e.isHorizontal() ? "horizontal" : "vertical";
                const L = (y + 1) / I;
                let E = 1
                  , P = 1;
                C === "horizontal" ? E = L : P = L,
                O.querySelectorAll(q(c.progressbarFillClass)).forEach(D => {
                    D.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${P})`,
                    D.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            c.type === "custom" && c.renderCustom ? (O.innerHTML = c.renderCustom(e, y + 1, I),
            T === 0 && r("paginationRender", O)) : (T === 0 && r("paginationRender", O),
            r("paginationUpdate", O)),
            e.params.watchOverflow && e.enabled && O.classList[e.isLocked ? "add" : "remove"](c.lockClass)
        }
        )
    }
    function h() {
        const d = e.params.pagination;
        if (l())
            return;
        const c = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let w = e.pagination.el;
        w = z(w);
        let y = "";
        if (d.type === "bullets") {
            let A = e.params.loop ? Math.ceil(c / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && A > c && (A = c);
            for (let k = 0; k < A; k += 1)
                d.renderBullet ? y += d.renderBullet.call(e, k, d.bulletClass) : y += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`
        }
        d.type === "fraction" && (d.renderFraction ? y = d.renderFraction.call(e, d.currentClass, d.totalClass) : y = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),
        d.type === "progressbar" && (d.renderProgressbar ? y = d.renderProgressbar.call(e, d.progressbarFillClass) : y = `<span class="${d.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        w.forEach(A => {
            d.type !== "custom" && (A.innerHTML = y || ""),
            d.type === "bullets" && e.pagination.bullets.push(...A.querySelectorAll(q(d.bulletClass)))
        }
        ),
        d.type !== "custom" && r("paginationRender", w[0])
    }
    function g() {
        e.params.pagination = Pe(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const d = e.params.pagination;
        if (!d.el)
            return;
        let c;
        typeof d.el == "string" && e.isElement && (c = e.el.querySelector(d.el)),
        !c && typeof d.el == "string" && (c = [...document.querySelectorAll(d.el)]),
        c || (c = d.el),
        !(!c || c.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(c) && c.length > 1 && (c = [...e.el.querySelectorAll(d.el)],
        c.length > 1 && (c = c.find(w => ie(w, ".swiper")[0] === e.el))),
        Array.isArray(c) && c.length === 1 && (c = c[0]),
        Object.assign(e.pagination, {
            el: c
        }),
        c = z(c),
        c.forEach(w => {
            d.type === "bullets" && d.clickable && w.classList.add(...(d.clickableClass || "").split(" ")),
            w.classList.add(d.modifierClass + d.type),
            w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === "bullets" && d.dynamicBullets && (w.classList.add(`${d.modifierClass}${d.type}-dynamic`),
            a = 0,
            d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" && d.progressbarOpposite && w.classList.add(d.progressbarOppositeClass),
            d.clickable && w.addEventListener("click", u),
            e.enabled || w.classList.add(d.lockClass)
        }
        ))
    }
    function v() {
        const d = e.params.pagination;
        if (l())
            return;
        let c = e.pagination.el;
        c && (c = z(c),
        c.forEach(w => {
            w.classList.remove(d.hiddenClass),
            w.classList.remove(d.modifierClass + d.type),
            w.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.clickable && (w.classList.remove(...(d.clickableClass || "").split(" ")),
            w.removeEventListener("click", u))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(w => w.classList.remove(...d.bulletActiveClass.split(" ")))
    }
    s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el)
            return;
        const d = e.params.pagination;
        let {el: c} = e.pagination;
        c = z(c),
        c.forEach(w => {
            w.classList.remove(d.horizontalClass, d.verticalClass),
            w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
        }
        )
    }
    ),
    s("init", () => {
        e.params.pagination.enabled === !1 ? b() : (g(),
        h(),
        m())
    }
    ),
    s("activeIndexChange", () => {
        typeof e.snapIndex > "u" && m()
    }
    ),
    s("snapIndexChange", () => {
        m()
    }
    ),
    s("snapGridLengthChange", () => {
        h(),
        m()
    }
    ),
    s("destroy", () => {
        v()
    }
    ),
    s("enable disable", () => {
        let {el: d} = e.pagination;
        d && (d = z(d),
        d.forEach(c => c.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    s("lock unlock", () => {
        m()
    }
    ),
    s("click", (d, c) => {
        const w = c.target
          , y = z(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && y && y.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
                return;
            const A = y[0].classList.contains(e.params.pagination.hiddenClass);
            r(A === !0 ? "paginationShow" : "paginationHide"),
            y.forEach(k => k.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const x = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = z(d),
        d.forEach(c => c.classList.remove(e.params.pagination.paginationDisabledClass))),
        g(),
        h(),
        m()
    }
      , b = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = z(d),
        d.forEach(c => c.classList.add(e.params.pagination.paginationDisabledClass))),
        v()
    }
    ;
    Object.assign(e.pagination, {
        enable: x,
        disable: b,
        render: h,
        update: m,
        init: g,
        destroy: v
    })
}
function Zt(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
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
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
        }
    }),
    e.a11y = {
        clicked: !1
    };
    let r = null, n, o, a = new Date().getTime();
    function l(S) {
        const M = r;
        M.length !== 0 && (M.innerHTML = "",
        M.innerHTML = S)
    }
    function f(S) {
        const M = () => Math.round(16 * Math.random()).toString(16);
        return "x".repeat(S).replace(/x/g, M)
    }
    function p(S) {
        S = z(S),
        S.forEach(M => {
            M.setAttribute("tabIndex", "0")
        }
        )
    }
    function u(S) {
        S = z(S),
        S.forEach(M => {
            M.setAttribute("tabIndex", "-1")
        }
        )
    }
    function m(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("role", M)
        }
        )
    }
    function h(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("aria-roledescription", M)
        }
        )
    }
    function g(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("aria-controls", M)
        }
        )
    }
    function v(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("aria-label", M)
        }
        )
    }
    function x(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("id", M)
        }
        )
    }
    function b(S, M) {
        S = z(S),
        S.forEach(G => {
            G.setAttribute("aria-live", M)
        }
        )
    }
    function d(S) {
        S = z(S),
        S.forEach(M => {
            M.setAttribute("aria-disabled", !0)
        }
        )
    }
    function c(S) {
        S = z(S),
        S.forEach(M => {
            M.setAttribute("aria-disabled", !1)
        }
        )
    }
    function w(S) {
        if (S.keyCode !== 13 && S.keyCode !== 32)
            return;
        const M = e.params.a11y
          , G = S.target;
        if (!(e.pagination && e.pagination.el && (G === e.pagination.el || e.pagination.el.contains(S.target)) && !S.target.matches(q(e.params.pagination.bulletClass)))) {
            if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
                const V = z(e.navigation.prevEl);
                z(e.navigation.nextEl).includes(G) && (e.isEnd && !e.params.loop || e.slideNext(),
                e.isEnd ? l(M.lastSlideMessage) : l(M.nextSlideMessage)),
                V.includes(G) && (e.isBeginning && !e.params.loop || e.slidePrev(),
                e.isBeginning ? l(M.firstSlideMessage) : l(M.prevSlideMessage))
            }
            e.pagination && G.matches(q(e.params.pagination.bulletClass)) && G.click()
        }
    }
    function y() {
        if (e.params.loop || e.params.rewind || !e.navigation)
            return;
        const {nextEl: S, prevEl: M} = e.navigation;
        M && (e.isBeginning ? (d(M),
        u(M)) : (c(M),
        p(M))),
        S && (e.isEnd ? (d(S),
        u(S)) : (c(S),
        p(S)))
    }
    function A() {
        return e.pagination && e.pagination.bullets && e.pagination.bullets.length
    }
    function k() {
        return A() && e.params.pagination.clickable
    }
    function I() {
        const S = e.params.a11y;
        A() && e.pagination.bullets.forEach(M => {
            e.params.pagination.clickable && (p(M),
            e.params.pagination.renderBullet || (m(M, "button"),
            v(M, S.paginationBulletMessage.replace(/\{\{index\}\}/, X(M) + 1)))),
            M.matches(q(e.params.pagination.bulletActiveClass)) ? M.setAttribute("aria-current", "true") : M.removeAttribute("aria-current")
        }
        )
    }
    const O = (S, M, G) => {
        p(S),
        S.tagName !== "BUTTON" && (m(S, "button"),
        S.addEventListener("keydown", w)),
        v(S, G),
        g(S, M)
    }
      , T = S => {
        o && o !== S.target && !o.contains(S.target) && (n = !0),
        e.a11y.clicked = !0
    }
      , C = () => {
        n = !1,
        requestAnimationFrame( () => {
            requestAnimationFrame( () => {
                e.destroyed || (e.a11y.clicked = !1)
            }
            )
        }
        )
    }
      , L = S => {
        a = new Date().getTime()
    }
      , E = S => {
        if (e.a11y.clicked || !e.params.a11y.scrollOnFocus || new Date().getTime() - a < 100)
            return;
        const M = S.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!M || !e.slides.includes(M))
            return;
        o = M;
        const G = e.slides.indexOf(M) === e.activeIndex
          , V = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(M);
        G || V || S.sourceCapabilities && S.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0,
        requestAnimationFrame( () => {
            n || (e.params.loop ? e.slideToLoop(parseInt(M.getAttribute("data-swiper-slide-index")), 0) : e.slideTo(e.slides.indexOf(M), 0),
            n = !1)
        }
        ))
    }
      , P = () => {
        const S = e.params.a11y;
        S.itemRoleDescriptionMessage && h(e.slides, S.itemRoleDescriptionMessage),
        S.slideRole && m(e.slides, S.slideRole);
        const M = e.slides.length;
        S.slideLabelMessage && e.slides.forEach( (G, V) => {
            const _ = e.params.loop ? parseInt(G.getAttribute("data-swiper-slide-index"), 10) : V
              , W = S.slideLabelMessage.replace(/\{\{index\}\}/, _ + 1).replace(/\{\{slidesLength\}\}/, M);
            v(G, W)
        }
        )
    }
      , D = () => {
        const S = e.params.a11y;
        e.el.append(r);
        const M = e.el;
        S.containerRoleDescriptionMessage && h(M, S.containerRoleDescriptionMessage),
        S.containerMessage && v(M, S.containerMessage),
        S.containerRole && m(M, S.containerRole);
        const G = e.wrapperEl
          , V = S.id || G.getAttribute("id") || `swiper-wrapper-${f(16)}`
          , _ = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        x(G, V),
        b(G, _),
        P();
        let {nextEl: W, prevEl: U} = e.navigation ? e.navigation : {};
        W = z(W),
        U = z(U),
        W && W.forEach(K => O(K, V, S.nextSlideMessage)),
        U && U.forEach(K => O(K, V, S.prevSlideMessage)),
        k() && z(e.pagination.el).forEach(Le => {
            Le.addEventListener("keydown", w)
        }
        ),
        H().addEventListener("visibilitychange", L),
        e.el.addEventListener("focus", E, !0),
        e.el.addEventListener("focus", E, !0),
        e.el.addEventListener("pointerdown", T, !0),
        e.el.addEventListener("pointerup", C, !0)
    }
    ;
    function B() {
        r && r.remove();
        let {nextEl: S, prevEl: M} = e.navigation ? e.navigation : {};
        S = z(S),
        M = z(M),
        S && S.forEach(V => V.removeEventListener("keydown", w)),
        M && M.forEach(V => V.removeEventListener("keydown", w)),
        k() && z(e.pagination.el).forEach(_ => {
            _.removeEventListener("keydown", w)
        }
        ),
        H().removeEventListener("visibilitychange", L),
        e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", E, !0),
        e.el.removeEventListener("pointerdown", T, !0),
        e.el.removeEventListener("pointerup", C, !0))
    }
    s("beforeInit", () => {
        r = Y("span", e.params.a11y.notificationClass),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true")
    }
    ),
    s("afterInit", () => {
        e.params.a11y.enabled && D()
    }
    ),
    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        e.params.a11y.enabled && P()
    }
    ),
    s("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && y()
    }
    ),
    s("paginationUpdate", () => {
        e.params.a11y.enabled && I()
    }
    ),
    s("destroy", () => {
        e.params.a11y.enabled && B()
    }
    )
}
export {Zt as A, Kt as K, Qt as N, Jt as P, N as S};
