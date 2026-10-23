import {j as p, k as H, H as I, l as L, m as g, s as l, n as A, o as O, p as f, q as x, v as C, w as Y, x as j, y as k, z as M, A as D, B as S, C as c, D as V, E as $, F as q, h as m, G as z, c as B, I as F, J as G, K as J} from "./template.B2q5ohnV.js";
let w = !0;
function W(t) {
    w = t
}
function Q(t, e) {
    var r = e == null ? "" : typeof e == "object" ? e + "" : e;
    r !== (t.__t ??= t.nodeValue) && (t.__t = r,
    t.nodeValue = r + "")
}
function K(t, e) {
    return N(t, e)
}
function U(t, e) {
    p(),
    e.intro = e.intro ?? !1;
    const r = e.target
      , _ = m
      , u = f;
    try {
        for (var s = H(r); s && (s.nodeType !== 8 || s.data !== I); )
            s = L(s);
        if (!s)
            throw g;
        l(!0),
        A(s),
        O();
        const d = N(t, {
            ...e,
            anchor: s
        });
        if (f === null || f.nodeType !== 8 || f.data !== x)
            throw C(),
            g;
        return l(!1),
        d
    } catch (d) {
        if (d === g)
            return e.recover === !1 && Y(),
            p(),
            j(r),
            l(!1),
            K(t, e);
        throw d
    } finally {
        l(_),
        A(u)
    }
}
const i = new Map;
function N(t, {target: e, anchor: r, props: _={}, events: u, context: s, intro: d=!0}) {
    p();
    var h = new Set
      , v = o => {
        for (var a = 0; a < o.length; a++) {
            var n = o[a];
            if (!h.has(n)) {
                h.add(n);
                var R = V(n);
                e.addEventListener(n, c, {
                    passive: R
                });
                var T = i.get(n);
                T === void 0 ? (document.addEventListener(n, c, {
                    passive: R
                }),
                i.set(n, 1)) : i.set(n, T + 1)
            }
        }
    }
    ;
    v(k(M)),
    D.add(v);
    var y = void 0
      , b = S( () => {
        var o = r ?? e.appendChild($());
        return q( () => {
            if (s) {
                z({});
                var a = B;
                a.c = s
            }
            u && (_.$$events = u),
            m && F(o, null),
            w = d,
            y = t(o, _) || {},
            w = !0,
            m && (G.nodes_end = f),
            s && J()
        }
        ),
        () => {
            for (var a of h) {
                e.removeEventListener(a, c);
                var n = i.get(a);
                --n === 0 ? (document.removeEventListener(a, c),
                i.delete(a)) : i.set(a, n)
            }
            D.delete(v),
            o !== r && o.parentNode?.removeChild(o)
        }
    }
    );
    return E.set(y, b),
    y
}
let E = new WeakMap;
function X(t, e) {
    const r = E.get(t);
    return r ? (E.delete(t),
    r(e)) : Promise.resolve()
}
export {w as a, W as b, U as h, K as m, Q as s, X as u};
