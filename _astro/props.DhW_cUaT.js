import {aI as V, aF as I, b as O, t as $, aJ as G, a0 as B, e as l, aH as C, g as R, aK as H, aL as J, aM as K, aN as z, ai as Q, aO as Z, S as F, aP as M, aj as W, aQ as X, J as L, aR as k, aS as ee, ao as N, aT as re, i as D, aU as ne, T as ae, aE as v, aV as te} from "./template.B2q5ohnV.js";
const se = "5";
typeof window < "u" && (window.__svelte ||= {
    v: new Set
}).v.add(se);
V();
function q(e, r, a) {
    if (e == null)
        return r(void 0),
        I;
    const n = O( () => e.subscribe(r, a));
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function ue(e) {
    let r;
    return q(e, a => r = a)(),
    r
}
let S = !1
  , m = Symbol();
function oe(e, r, a) {
    const n = a[r] ??= {
        store: null,
        source: B(void 0),
        unsubscribe: I
    };
    if (n.store !== e && !(m in a))
        if (n.unsubscribe(),
        n.store = e ?? null,
        e == null)
            n.source.v = void 0,
            n.unsubscribe = I;
        else {
            var s = !0;
            n.unsubscribe = q(e, u => {
                s ? n.source.v = u : C(n.source, u)
            }
            ),
            s = !1
        }
    return e && m in a ? ue(e) : l(n.source)
}
function _e() {
    const e = {};
    function r() {
        $( () => {
            for (var a in e)
                e[a].unsubscribe();
            G(e, m, {
                enumerable: !1,
                value: !0
            })
        }
        )
    }
    return [e, r]
}
function ie(e) {
    var r = S;
    try {
        return S = !1,
        [e(), S]
    } finally {
        S = r
    }
}
const fe = {
    get(e, r) {
        let a = e.props.length;
        for (; a--; ) {
            let n = e.props[a];
            if (v(n) && (n = n()),
            typeof n == "object" && n !== null && r in n)
                return n[r]
        }
    },
    set(e, r, a) {
        let n = e.props.length;
        for (; n--; ) {
            let s = e.props[n];
            v(s) && (s = s());
            const u = R(s, r);
            if (u && u.set)
                return u.set(a),
                !0
        }
        return !1
    },
    getOwnPropertyDescriptor(e, r) {
        let a = e.props.length;
        for (; a--; ) {
            let n = e.props[a];
            if (v(n) && (n = n()),
            typeof n == "object" && n !== null && r in n) {
                const s = R(n, r);
                return s && !s.configurable && (s.configurable = !0),
                s
            }
        }
    },
    has(e, r) {
        if (r === F || r === M)
            return !1;
        for (let a of e.props)
            if (v(a) && (a = a()),
            a != null && r in a)
                return !0;
        return !1
    },
    ownKeys(e) {
        const r = [];
        for (let a of e.props) {
            v(a) && (a = a());
            for (const n in a)
                r.includes(n) || r.push(n)
        }
        return r
    }
};
function ce(...e) {
    return new Proxy({
        props: e
    },fe)
}
function U(e) {
    for (var r = L, a = L; r !== null && !(r.f & (k | ee)); )
        r = r.parent;
    try {
        return N(r),
        e()
    } finally {
        N(a)
    }
}
function de(e, r, a, n) {
    var s = (a & re) !== 0, u = !W || (a & X) !== 0, g = (a & Z) !== 0, Y = (a & ne) !== 0, y = !1, o;
    g ? [o,y] = ie( () => e[r]) : o = e[r];
    var j = F in e || M in e
      , c = g && (R(e, r)?.set ?? (j && r in e && (t => e[r] = t))) || void 0
      , i = n
      , P = !0
      , h = !1
      , T = () => (h = !0,
    P && (P = !1,
    Y ? i = O(n) : i = n),
    i);
    o === void 0 && n !== void 0 && (c && u && H(),
    o = T(),
    c && c(o));
    var f;
    if (u)
        f = () => {
            var t = e[r];
            return t === void 0 ? T() : (P = !0,
            h = !1,
            t)
        }
        ;
    else {
        var A = U( () => (s ? D : ae)( () => e[r]));
        A.f |= J,
        f = () => {
            var t = l(A);
            return t !== void 0 && (i = void 0),
            t === void 0 ? i : t
        }
    }
    if (!(a & K))
        return f;
    if (c) {
        var x = e.$$legacy;
        return function(t, _) {
            return arguments.length > 0 ? ((!u || !_ || x || y) && c(_ ? f() : t),
            t) : f()
        }
    }
    var p = !1
      , w = !1
      , b = B(o)
      , d = U( () => D( () => {
        var t = f()
          , _ = l(b);
        return p ? (p = !1,
        w = !0,
        _) : (w = !1,
        b.v = t)
    }
    ));
    return s || (d.equals = z),
    function(t, _) {
        if (te !== null && (p = w,
        f(),
        l(b)),
        arguments.length > 0) {
            const E = _ ? l(d) : u && g ? Q(t) : t;
            return d.equals(E) || (p = !0,
            C(b, E),
            h && i !== void 0 && (i = E),
            O( () => l(d))),
            t
        }
        return l(d)
    }
}
export {_e as a, oe as b, de as p, ce as s};
