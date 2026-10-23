import {L as V, h as n, o as D, al as P, U as j, V as B, n as G, s as h, W as S, F as $, X as O, am as M, p as U, an as z, ao as C, ap as Y, aq as I, ar as H, J, as as K, at as W, au as X, av as Z, aw as Q, ax as x, ay as m, az as ss, aA as as} from "./template.B2q5ohnV.js";
import {c as es} from "./clsx.B-dksMZM.js";
function ls(s, a, e=!1) {
    n && D();
    var f = s
      , r = null
      , l = null
      , y = M
      , p = e ? P : 0
      , c = !1;
    const k = (A, d=!0) => {
        c = !0,
        g(d, A)
    }
      , g = (A, d) => {
        if (y === (y = A))
            return;
        let b = !1;
        if (n) {
            const N = f.data === j;
            !!y === N && (f = B(),
            G(f),
            h(!1),
            b = !0)
        }
        y ? (r ? S(r) : d && (r = $( () => d(f))),
        l && O(l, () => {
            l = null
        }
        )) : (l ? S(l) : d && (l = $( () => d(f))),
        r && O(r, () => {
            r = null
        }
        )),
        b && h(!0)
    }
    ;
    V( () => {
        c = !1,
        a(k),
        c || g(null, null)
    }
    , p),
    n && (f = U)
}
function ts(s) {
    return typeof s == "object" ? es(s) : s ?? ""
}
function cs(s) {
    if (n) {
        var a = !1
          , e = () => {
            if (!a) {
                if (a = !0,
                s.hasAttribute("value")) {
                    var f = s.value;
                    E(s, "value", null),
                    s.value = f
                }
                if (s.hasAttribute("checked")) {
                    var r = s.checked;
                    E(s, "checked", null),
                    s.checked = r
                }
            }
        }
        ;
        s.__on_r = e,
        W(e),
        X()
    }
}
function us(s, a) {
    var e = s.__attributes ??= {};
    e.value === (e.value = a ?? void 0) || s.value === a && (a !== 0 || s.nodeName !== "PROGRESS") || (s.value = a ?? "")
}
function os(s, a) {
    var e = s.__attributes ??= {};
    e.checked !== (e.checked = a ?? void 0) && (s.checked = a)
}
function rs(s, a) {
    a ? s.hasAttribute("selected") || s.setAttribute("selected", "") : s.removeAttribute("selected")
}
function E(s, a, e, f) {
    var r = s.__attributes ??= {};
    n && (r[a] = s.getAttribute(a),
    a === "src" || a === "srcset" || a === "href" && s.nodeName === "LINK") || r[a] !== (r[a] = e) && (a === "style" && "__styles"in s && (s.__styles = {}),
    a === "loading" && (s[I] = e),
    e == null ? s.removeAttribute(a) : typeof e != "string" && w(s).includes(a) ? s[a] = e : s.setAttribute(a, e))
}
function _s(s, a, e) {
    var f = H
      , r = J;
    let l = n;
    n && h(!1),
    z(null),
    C(null);
    try {
        (L.has(s.nodeName) || !customElements || customElements.get(s.tagName.toLowerCase()) ? w(s).includes(a) : e && typeof e == "object") ? s[a] = e : E(s, a, e == null ? e : String(e))
    } finally {
        z(f),
        C(r),
        l && h(!0)
    }
}
function ns(s, a, e, f, r=!1, l=!1, y=!1) {
    let p = n && l;
    p && h(!1);
    var c = a || {}
      , k = s.tagName === "OPTION";
    for (var g in a)
        g in e || (e[g] = null);
    e.class && (e.class = ts(e.class));
    var A = w(s)
      , d = s.__attributes ??= {};
    for (const t in e) {
        let i = e[t];
        if (k && t === "value" && i == null) {
            s.value = s.__value = "",
            c[t] = i;
            continue
        }
        var b = c[t];
        if (i !== b) {
            c[t] = i;
            var N = t[0] + t[1];
            if (N !== "$$") {
                if (N === "on") {
                    const o = {}
                      , v = "$$" + t;
                    let _ = t.slice(2);
                    var T = as(_);
                    if (Z(_) && (_ = _.slice(0, -7),
                    o.capture = !0),
                    !T && b) {
                        if (i != null)
                            continue;
                        s.removeEventListener(_, c[v], o),
                        c[v] = null
                    }
                    if (i != null)
                        if (T)
                            s[`__${_}`] = i,
                            x([_]);
                        else {
                            let q = function(F) {
                                c[t].call(this, F)
                            };
                            c[v] = Q(_, s, q, o)
                        }
                    else
                        T && (s[`__${_}`] = void 0)
                } else if (t === "style" && i != null)
                    s.style.cssText = i + "";
                else if (t === "autofocus")
                    m(s, !!i);
                else if (!l && (t === "__value" || t === "value" && i != null))
                    s.value = s.__value = i;
                else if (t === "selected" && k)
                    rs(s, i);
                else {
                    var u = t;
                    r || (u = ss(u));
                    var R = u === "defaultValue" || u === "defaultChecked";
                    if (i == null && !l && !R)
                        if (d[t] = null,
                        u === "value" || u === "checked") {
                            let o = s;
                            if (u === "value") {
                                let v = o.defaultValue;
                                o.removeAttribute(u),
                                o.defaultValue = v
                            } else {
                                let v = o.defaultChecked;
                                o.removeAttribute(u),
                                o.defaultChecked = v
                            }
                        } else
                            s.removeAttribute(t);
                    else
                        R || A.includes(u) && (l || typeof i != "string") ? s[u] = i : typeof i != "function" && E(s, u, i)
                }
                t === "style" && "__styles"in s && (s.__styles = {})
            }
        }
    }
    return p && h(!0),
    c
}
var L = new Map;
function w(s) {
    var a = L.get(s.nodeName);
    if (a)
        return a;
    L.set(s.nodeName, a = []);
    for (var e, f = s, r = Element.prototype; r !== f; ) {
        e = K(f);
        for (var l in e)
            e[l].set && a.push(l);
        f = Y(f)
    }
    return a
}
function ds(s) {
    if (!n && s.loading === "lazy") {
        var a = s.src;
        s[I] = null,
        s.loading = "eager",
        s.removeAttribute("src"),
        requestAnimationFrame( () => {
            s[I] !== "eager" && (s.loading = "lazy"),
            s.src = a
        }
        )
    }
}
export {_s as a, ns as b, ts as c, us as d, os as e, ds as h, ls as i, cs as r, E as s};
