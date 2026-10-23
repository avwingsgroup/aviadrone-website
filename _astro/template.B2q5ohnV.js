let ye = !1
  , bt = !1;
function An() {
    ye = !0
}
const xn = 1
  , Sn = 2
  , kn = 4
  , In = 8
  , On = 16
  , Rn = 1
  , Nn = 2
  , Dn = 4
  , Pn = 8
  , Cn = 16
  , Ln = 4
  , Tt = 1
  , At = 2
  , xt = "["
  , St = "[!"
  , kt = "]"
  , je = {}
  , g = Symbol()
  , qn = "http://www.w3.org/2000/svg"
  , Ae = !1
  , b = 2
  , He = 4
  , se = 8
  , Oe = 16
  , P = 32
  , ue = 64
  , ce = 128
  , I = 256
  , _e = 512
  , y = 1024
  , C = 2048
  , G = 4096
  , X = 8192
  , we = 16384
  , It = 32768
  , Ye = 65536
  , Ot = 1 << 17
  , Rt = 1 << 19
  , Be = 1 << 20
  , B = Symbol("$state")
  , Mn = Symbol("legacy props")
  , Fn = Symbol("");
var Ve = Array.isArray
  , Nt = Array.prototype.indexOf
  , jn = Array.from
  , Dt = Object.defineProperty
  , te = Object.getOwnPropertyDescriptor
  , Pt = Object.getOwnPropertyDescriptors
  , Ct = Object.prototype
  , Lt = Array.prototype
  , Ue = Object.getPrototypeOf;
function Hn(e) {
    return typeof e == "function"
}
const Yn = () => {}
;
function Bn(e) {
    return e()
}
function Ge(e) {
    for (var t = 0; t < e.length; t++)
        e[t]()
}
function Vn(e, t, n=!1) {
    return e === void 0 ? n ? t() : t : e
}
const qt = typeof requestIdleCallback > "u" ? e => setTimeout(e, 1) : requestIdleCallback;
let ve = !1
  , de = !1
  , xe = []
  , Se = [];
function We() {
    ve = !1;
    const e = xe.slice();
    xe = [],
    Ge(e)
}
function Ke() {
    de = !1;
    const e = Se.slice();
    Se = [],
    Ge(e)
}
function $e(e) {
    ve || (ve = !0,
    queueMicrotask(We)),
    xe.push(e)
}
function Un(e) {
    de || (de = !0,
    qt(Ke)),
    Se.push(e)
}
function Mt() {
    ve && We(),
    de && Ke()
}
function Xe(e) {
    return e === this.v
}
function Ft(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}
function Ze(e) {
    return !Ft(e, this.v)
}
function jt(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}
function Ht() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}
function Yt(e) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}
function Bt() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}
function Gn() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}
function Wn(e) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}
function Vt() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}
function Ut() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}
function Gt() {
    throw new Error("https://svelte.dev/e/state_unsafe_local_read")
}
function Wt() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
function T(e, t) {
    var n = {
        f: 0,
        v: e,
        reactions: null,
        equals: Xe,
        rv: 0,
        wv: 0
    };
    return n
}
function Kn(e) {
    return ze(T(e))
}
function Kt(e, t=!1) {
    const n = T(e);
    return t || (n.equals = Ze),
    ye && p !== null && p.l !== null && (p.l.s ??= []).push(n),
    n
}
function $n(e, t=!1) {
    return ze(Kt(e, t))
}
function ze(e) {
    return v !== null && !D && v.f & b && (k === null ? zt([e]) : k.push(e)),
    e
}
function Xn(e, t) {
    return S(e, be( () => Y(e))),
    t
}
function S(e, t) {
    return v !== null && !D && Te() && v.f & (b | Oe) && (k === null || !k.includes(e)) && Wt(),
    ke(e, t)
}
function ke(e, t) {
    return e.equals(t) || (e.v,
    e.v = t,
    e.wv = at(),
    Je(e, C),
    Te() && d !== null && d.f & y && !(d.f & (P | ue)) && (N === null ? Jt([e]) : N.push(e))),
    t
}
function Je(e, t) {
    var n = e.reactions;
    if (n !== null)
        for (var r = Te(), a = n.length, s = 0; s < a; s++) {
            var u = n[s]
              , _ = u.f;
            _ & C || !r && u === d || (A(u, t),
            _ & (y | I) && (_ & b ? Je(u, G) : me(u)))
        }
}
function Qe(e) {
    var t = b | C
      , n = v !== null && v.f & b ? v : null;
    return d === null || n !== null && n.f & I ? t |= I : d.f |= Be,
    {
        ctx: p,
        deps: null,
        effects: null,
        equals: Xe,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: null,
        wv: 0,
        parent: n ?? d
    }
}
function Zn(e) {
    const t = Qe(e);
    return t.equals = Ze,
    t
}
function et(e) {
    var t = e.effects;
    if (t !== null) {
        e.effects = null;
        for (var n = 0; n < t.length; n += 1)
            U(t[n])
    }
}
function $t(e) {
    for (var t = e.parent; t !== null; ) {
        if (!(t.f & b))
            return t;
        t = t.parent
    }
    return null
}
function Xt(e) {
    var t, n = d;
    F($t(e));
    try {
        et(e),
        t = ut(e)
    } finally {
        F(n)
    }
    return t
}
function tt(e) {
    var t = Xt(e)
      , n = (q || e.f & I) && e.deps !== null ? G : y;
    A(e, n),
    e.equals(t) || (e.v = t,
    e.wv = at())
}
const nt = 0
  , Zt = 1;
let oe = !1
  , fe = nt
  , ne = !1
  , re = null
  , K = !1
  , Re = !1;
function De(e) {
    K = e
}
function Pe(e) {
    Re = e
}
let H = []
  , $ = 0;
let v = null
  , D = !1;
function M(e) {
    v = e
}
let d = null;
function F(e) {
    d = e
}
let k = null;
function zt(e) {
    k = e
}
let E = null
  , m = 0
  , N = null;
function Jt(e) {
    N = e
}
let rt = 1
  , pe = 0
  , q = !1
  , j = null;
function at() {
    return ++rt
}
function J(e) {
    var t = e.f;
    if (t & C)
        return !0;
    if (t & G) {
        var n = e.deps
          , r = (t & I) !== 0;
        if (n !== null) {
            var a, s, u = (t & _e) !== 0, _ = r && d !== null && !q, c = n.length;
            if (u || _) {
                for (a = 0; a < c; a++)
                    s = n[a],
                    (u || !s?.reactions?.includes(e)) && (s.reactions ??= []).push(e);
                u && (e.f ^= _e)
            }
            for (a = 0; a < c; a++)
                if (s = n[a],
                J(s) && tt(s),
                s.wv > e.wv)
                    return !0
        }
        (!r || d !== null && !q) && A(e, y)
    }
    return !1
}
function Qt(e, t) {
    for (var n = t; n !== null; ) {
        if (n.f & ce)
            try {
                n.fn(e);
                return
            } catch {
                n.f ^= ce
            }
        n = n.parent
    }
    throw oe = !1,
    e
}
function en(e) {
    return (e.f & we) === 0 && (e.parent === null || (e.parent.f & ce) === 0)
}
function Ee(e, t, n, r) {
    if (oe) {
        if (n === null && (oe = !1),
        en(t))
            throw e;
        return
    }
    n !== null && (oe = !0);
    {
        Qt(e, t);
        return
    }
}
function st(e, t, n=0) {
    var r = e.reactions;
    if (r !== null)
        for (var a = 0; a < r.length; a++) {
            var s = r[a];
            s.f & b ? st(s, t, n + 1) : t === s && (n === 0 ? A(s, C) : s.f & y && A(s, G),
            me(s))
        }
}
function ut(e) {
    var t = E
      , n = m
      , r = N
      , a = v
      , s = q
      , u = k
      , _ = p
      , c = D
      , l = e.f;
    E = null,
    m = 0,
    N = null,
    v = l & (P | ue) ? null : e,
    q = (l & I) !== 0 && (!K || a === null || c),
    k = null,
    Me(e.ctx),
    D = !1,
    pe++;
    try {
        var o = (0,
        e.fn)()
          , f = e.deps;
        if (E !== null) {
            var i;
            if (he(e, m),
            f !== null && m > 0)
                for (f.length = m + E.length,
                i = 0; i < E.length; i++)
                    f[m + i] = E[i];
            else
                e.deps = f = E;
            if (!q)
                for (i = m; i < f.length; i++)
                    (f[i].reactions ??= []).push(e)
        } else
            f !== null && m < f.length && (he(e, m),
            f.length = m);
        if (Te() && N !== null && !(e.f & (b | G | C)))
            for (i = 0; i < N.length; i++)
                st(N[i], e);
        return a !== null && pe++,
        o
    } finally {
        E = t,
        m = n,
        N = r,
        v = a,
        q = s,
        k = u,
        Me(_),
        D = c
    }
}
function tn(e, t) {
    let n = t.reactions;
    if (n !== null) {
        var r = Nt.call(n, e);
        if (r !== -1) {
            var a = n.length - 1;
            a === 0 ? n = t.reactions = null : (n[r] = n[a],
            n.pop())
        }
    }
    n === null && t.f & b && (E === null || !E.includes(t)) && (A(t, G),
    t.f & (I | _e) || (t.f ^= _e),
    et(t),
    he(t, 0))
}
function he(e, t) {
    var n = e.deps;
    if (n !== null)
        for (var r = t; r < n.length; r++)
            tn(e, n[r])
}
function ge(e) {
    var t = e.f;
    if (!(t & we)) {
        A(e, y);
        var n = d
          , r = p;
        d = e;
        try {
            t & Oe ? cn(e) : yt(e),
            ht(e);
            var a = ut(e);
            e.teardown = typeof a == "function" ? a : null,
            e.wv = rt;
            var s = e.deps, u;
            Ae && bt && e.f & C
        } catch (_) {
            Ee(_, e, n, r || e.ctx)
        } finally {
            d = n
        }
    }
}
function lt() {
    if ($ > 1e3) {
        $ = 0;
        try {
            Bt()
        } catch (e) {
            if (re !== null)
                Ee(e, re, null);
            else
                throw e
        }
    }
    $++
}
function it(e) {
    var t = e.length;
    if (t !== 0) {
        lt();
        var n = K;
        K = !0;
        try {
            for (var r = 0; r < t; r++) {
                var a = e[r];
                a.f & y || (a.f ^= y);
                var s = [];
                ot(a, s),
                nn(s)
            }
        } finally {
            K = n
        }
    }
}
function nn(e) {
    var t = e.length;
    if (t !== 0)
        for (var n = 0; n < t; n++) {
            var r = e[n];
            if (!(r.f & (we | X)))
                try {
                    J(r) && (ge(r),
                    r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? wt(r) : r.fn = null))
                } catch (a) {
                    Ee(a, r, null, r.ctx)
                }
        }
}
function rn() {
    if (ne = !1,
    $ > 1001)
        return;
    const e = H;
    H = [],
    it(e),
    ne || ($ = 0,
    re = null)
}
function me(e) {
    fe === nt && (ne || (ne = !0,
    queueMicrotask(rn))),
    re = e;
    for (var t = e; t.parent !== null; ) {
        t = t.parent;
        var n = t.f;
        if (n & (ue | P)) {
            if (!(n & y))
                return;
            t.f ^= y
        }
    }
    H.push(t)
}
function ot(e, t) {
    var n = e.first
      , r = [];
    e: for (; n !== null; ) {
        var a = n.f
          , s = (a & P) !== 0
          , u = s && (a & y) !== 0
          , _ = n.next;
        if (!u && !(a & X))
            if (a & se) {
                if (s)
                    n.f ^= y;
                else {
                    var c = v;
                    try {
                        v = n,
                        J(n) && ge(n)
                    } catch (i) {
                        Ee(i, n, null, n.ctx)
                    } finally {
                        v = c
                    }
                }
                var l = n.first;
                if (l !== null) {
                    n = l;
                    continue
                }
            } else
                a & He && r.push(n);
        if (_ === null) {
            let i = n.parent;
            for (; i !== null; ) {
                if (e === i)
                    break e;
                var o = i.next;
                if (o !== null) {
                    n = o;
                    continue e
                }
                i = i.parent
            }
        }
        n = _
    }
    for (var f = 0; f < r.length; f++)
        l = r[f],
        t.push(l),
        ot(l, t)
}
function ft(e) {
    var t = fe
      , n = H;
    try {
        lt();
        const a = [];
        fe = Zt,
        H = a,
        ne = !1,
        it(n);
        var r = e?.();
        return Mt(),
        (H.length > 0 || a.length > 0) && ft(),
        $ = 0,
        re = null,
        r
    } finally {
        fe = t,
        H = n
    }
}
async function zn() {
    await Promise.resolve(),
    ft()
}
function Y(e) {
    var t = e.f
      , n = (t & b) !== 0;
    if (j !== null && j.add(e),
    v !== null && !D) {
        k !== null && k.includes(e) && Gt();
        var r = v.deps;
        e.rv < pe && (e.rv = pe,
        E === null && r !== null && r[m] === e ? m++ : E === null ? E = [e] : (!q || !E.includes(e)) && E.push(e))
    } else if (n && e.deps === null && e.effects === null) {
        var a = e
          , s = a.parent;
        s !== null && !(s.f & I) && (a.f ^= I)
    }
    return n && (a = e,
    J(a) && tt(a)),
    e.v
}
function an(e) {
    var t = j;
    j = new Set;
    var n = j, r;
    try {
        if (be(e),
        t !== null)
            for (r of j)
                t.add(r)
    } finally {
        j = t
    }
    return n
}
function Jn(e) {
    var t = an( () => be(e));
    for (var n of t)
        if (n.f & Ot)
            for (const r of n.deps || [])
                r.f & b || ke(r, r.v);
        else
            ke(n, n.v)
}
function be(e) {
    var t = D;
    try {
        return D = !0,
        e()
    } finally {
        D = t
    }
}
const sn = -7169;
function A(e, t) {
    e.f = e.f & sn | t
}
function Qn(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (B in e)
            Ie(e);
        else if (!Array.isArray(e))
            for (let t in e) {
                const n = e[t];
                typeof n == "object" && n && B in n && Ie(n)
            }
    }
}
function Ie(e, t=new Set) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
        t.add(e),
        e instanceof Date && e.getTime();
        for (let r in e)
            try {
                Ie(e[r], t)
            } catch {}
        const n = Ue(e);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = Pt(n);
            for (let a in r) {
                const s = r[a].get;
                if (s)
                    try {
                        s.call(e)
                    } catch {}
            }
        }
    }
}
function ct(e) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}
let x = !1;
function er(e) {
    x = e
}
let h;
function Z(e) {
    if (e === null)
        throw ct(),
        je;
    return h = e
}
function un() {
    return Z(W(h))
}
function tr(e) {
    if (x) {
        if (W(h) !== null)
            throw ct(),
            je;
        h = e
    }
}
function nr(e=1) {
    if (x) {
        for (var t = e, n = h; t--; )
            n = W(n);
        h = n
    }
}
function rr() {
    for (var e = 0, t = h; ; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === kt) {
                if (e === 0)
                    return t;
                e -= 1
            } else
                (n === xt || n === St) && (e += 1)
        }
        var r = W(t);
        t.remove(),
        t = r
    }
}
function ee(e, t=null, n) {
    if (typeof e != "object" || e === null || B in e)
        return e;
    const r = Ue(e);
    if (r !== Ct && r !== Lt)
        return e;
    var a = new Map
      , s = Ve(e)
      , u = T(0);
    s && a.set("length", T(e.length));
    var _;
    return new Proxy(e,{
        defineProperty(c, l, o) {
            (!("value"in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Vt();
            var f = a.get(l);
            return f === void 0 ? (f = T(o.value),
            a.set(l, f)) : S(f, ee(o.value, _)),
            !0
        },
        deleteProperty(c, l) {
            var o = a.get(l);
            if (o === void 0)
                l in c && a.set(l, T(g));
            else {
                if (s && typeof l == "string") {
                    var f = a.get("length")
                      , i = Number(l);
                    Number.isInteger(i) && i < f.v && S(f, i)
                }
                S(o, g),
                Ce(u)
            }
            return !0
        },
        get(c, l, o) {
            if (l === B)
                return e;
            var f = a.get(l)
              , i = l in c;
            if (f === void 0 && (!i || te(c, l)?.writable) && (f = T(ee(i ? c[l] : g, _)),
            a.set(l, f)),
            f !== void 0) {
                var w = Y(f);
                return w === g ? void 0 : w
            }
            return Reflect.get(c, l, o)
        },
        getOwnPropertyDescriptor(c, l) {
            var o = Reflect.getOwnPropertyDescriptor(c, l);
            if (o && "value"in o) {
                var f = a.get(l);
                f && (o.value = Y(f))
            } else if (o === void 0) {
                var i = a.get(l)
                  , w = i?.v;
                if (i !== void 0 && w !== g)
                    return {
                        enumerable: !0,
                        configurable: !0,
                        value: w,
                        writable: !0
                    }
            }
            return o
        },
        has(c, l) {
            if (l === B)
                return !0;
            var o = a.get(l)
              , f = o !== void 0 && o.v !== g || Reflect.has(c, l);
            if (o !== void 0 || d !== null && (!f || te(c, l)?.writable)) {
                o === void 0 && (o = T(f ? ee(c[l], _) : g),
                a.set(l, o));
                var i = Y(o);
                if (i === g)
                    return !1
            }
            return f
        },
        set(c, l, o, f) {
            var i = a.get(l)
              , w = l in c;
            if (s && l === "length")
                for (var O = o; O < i.v; O += 1) {
                    var R = a.get(O + "");
                    R !== void 0 ? S(R, g) : O in c && (R = T(g),
                    a.set(O + "", R))
                }
            i === void 0 ? (!w || te(c, l)?.writable) && (i = T(void 0),
            S(i, ee(o, _)),
            a.set(l, i)) : (w = i.v !== g,
            S(i, ee(o, _)));
            var le = Reflect.getOwnPropertyDescriptor(c, l);
            if (le?.set && le.set.call(f, o),
            !w) {
                if (s && typeof l == "string") {
                    var ie = a.get("length")
                      , L = Number(l);
                    Number.isInteger(L) && L >= ie.v && S(ie, L + 1)
                }
                Ce(u)
            }
            return !0
        },
        ownKeys(c) {
            Y(u);
            var l = Reflect.ownKeys(c).filter(i => {
                var w = a.get(i);
                return w === void 0 || w.v !== g
            }
            );
            for (var [o,f] of a)
                f.v !== g && !(o in c) && l.push(o);
            return l
        },
        setPrototypeOf() {
            Ut()
        }
    })
}
function Ce(e, t=1) {
    S(e, e.v + t)
}
function Le(e) {
    return e !== null && typeof e == "object" && B in e ? e[B] : e
}
function ar(e, t) {
    return Object.is(Le(e), Le(t))
}
var qe, _t, vt;
function sr() {
    if (qe === void 0) {
        qe = window;
        var e = Element.prototype
          , t = Node.prototype;
        _t = te(t, "firstChild").get,
        vt = te(t, "nextSibling").get,
        e.__click = void 0,
        e.__className = "",
        e.__attributes = null,
        e.__styles = null,
        e.__e = void 0,
        Text.prototype.__t = void 0
    }
}
function z(e="") {
    return document.createTextNode(e)
}
function ae(e) {
    return _t.call(e)
}
function W(e) {
    return vt.call(e)
}
function ur(e, t) {
    if (!x)
        return ae(e);
    var n = ae(h);
    if (n === null)
        n = h.appendChild(z());
    else if (t && n.nodeType !== 3) {
        var r = z();
        return n?.before(r),
        Z(r),
        r
    }
    return Z(n),
    n
}
function lr(e, t) {
    if (!x) {
        var n = ae(e);
        return n instanceof Comment && n.data === "" ? W(n) : n
    }
    return h
}
function ir(e, t=1, n=!1) {
    let r = x ? h : e;
    for (var a; t--; )
        a = r,
        r = W(r);
    if (!x)
        return r;
    var s = r?.nodeType;
    if (n && s !== 3) {
        var u = z();
        return r === null ? a?.after(u) : r.before(u),
        Z(u),
        u
    }
    return Z(r),
    r
}
function or(e) {
    e.textContent = ""
}
function dt(e) {
    d === null && v === null && Yt(),
    v !== null && v.f & I && d === null && Ht(),
    Re && jt()
}
function ln(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e,
    e.prev = n,
    t.last = e)
}
function Q(e, t, n, r=!0) {
    var a = (e & ue) !== 0
      , s = d
      , u = {
        ctx: p,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: e | C,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: a ? null : s,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0
    };
    if (n) {
        var _ = K;
        try {
            De(!0),
            ge(u),
            u.f |= It
        } catch (o) {
            throw U(u),
            o
        } finally {
            De(_)
        }
    } else
        t !== null && me(u);
    var c = n && u.deps === null && u.first === null && u.nodes_start === null && u.teardown === null && (u.f & (Be | ce)) === 0;
    if (!c && !a && r && (s !== null && ln(u, s),
    v !== null && v.f & b)) {
        var l = v;
        (l.effects ??= []).push(u)
    }
    return u
}
function on(e) {
    const t = Q(se, null, !1);
    return A(t, y),
    t.teardown = e,
    t
}
function fr(e) {
    dt();
    var t = d !== null && (d.f & P) !== 0 && p !== null && !p.m;
    if (t) {
        var n = p;
        (n.e ??= []).push({
            fn: e,
            effect: d,
            reaction: v
        })
    } else {
        var r = pt(e);
        return r
    }
}
function cr(e) {
    return dt(),
    Ne(e)
}
function _r(e) {
    const t = Q(ue, e, !0);
    return (n={}) => new Promise(r => {
        n.outro ? _n(t, () => {
            U(t),
            r(void 0)
        }
        ) : (U(t),
        r(void 0))
    }
    )
}
function pt(e) {
    return Q(He, e, !1)
}
function vr(e, t) {
    var n = p
      , r = {
        effect: null,
        ran: !1
    };
    n.l.r1.push(r),
    r.effect = Ne( () => {
        e(),
        !r.ran && (r.ran = !0,
        S(n.l.r2, !0),
        be(t))
    }
    )
}
function dr() {
    var e = p;
    Ne( () => {
        if (Y(e.l.r2)) {
            for (var t of e.l.r1) {
                var n = t.effect;
                n.f & y && A(n, G),
                J(n) && ge(n),
                t.ran = !1
            }
            e.l.r2.v = !1
        }
    }
    )
}
function Ne(e) {
    return Q(se, e, !0)
}
function pr(e, t=[], n=Qe) {
    const r = t.map(n);
    return fn( () => e(...r.map(Y)))
}
function fn(e, t=0) {
    return Q(se | Oe | t, e, !0)
}
function hr(e, t=!0) {
    return Q(se | P, e, !0, t)
}
function ht(e) {
    var t = e.teardown;
    if (t !== null) {
        const n = Re
          , r = v;
        Pe(!0),
        M(null);
        try {
            t.call(null)
        } finally {
            Pe(n),
            M(r)
        }
    }
}
function yt(e, t=!1) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
        var r = n.next;
        U(n, t),
        n = r
    }
}
function cn(e) {
    for (var t = e.first; t !== null; ) {
        var n = t.next;
        t.f & P || U(t),
        t = n
    }
}
function U(e, t=!0) {
    var n = !1;
    if ((t || e.f & Rt) && e.nodes_start !== null) {
        for (var r = e.nodes_start, a = e.nodes_end; r !== null; ) {
            var s = r === a ? null : W(r);
            r.remove(),
            r = s
        }
        n = !0
    }
    yt(e, t && !n),
    he(e, 0),
    A(e, we);
    var u = e.transitions;
    if (u !== null)
        for (const c of u)
            c.stop();
    ht(e);
    var _ = e.parent;
    _ !== null && _.first !== null && wt(e),
    e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null
}
function wt(e) {
    var t = e.parent
      , n = e.prev
      , r = e.next;
    n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null && (t.first === e && (t.first = r),
    t.last === e && (t.last = n))
}
function _n(e, t) {
    var n = [];
    Et(e, n, !0),
    vn(n, () => {
        U(e),
        t && t()
    }
    )
}
function vn(e, t) {
    var n = e.length;
    if (n > 0) {
        var r = () => --n || t();
        for (var a of e)
            a.out(r)
    } else
        t()
}
function Et(e, t, n) {
    if (!(e.f & X)) {
        if (e.f ^= X,
        e.transitions !== null)
            for (const u of e.transitions)
                (u.is_global || n) && t.push(u);
        for (var r = e.first; r !== null; ) {
            var a = r.next
              , s = (r.f & Ye) !== 0 || (r.f & P) !== 0;
            Et(r, t, s ? n : !1),
            r = a
        }
    }
}
function yr(e) {
    gt(e, !0)
}
function gt(e, t) {
    if (e.f & X) {
        e.f ^= X,
        e.f & y || (e.f ^= y),
        J(e) && (A(e, C),
        me(e));
        for (var n = e.first; n !== null; ) {
            var r = n.next
              , a = (n.f & Ye) !== 0 || (n.f & P) !== 0;
            gt(n, a ? t : !1),
            n = r
        }
        if (e.transitions !== null)
            for (const s of e.transitions)
                (s.is_global || t) && s.in()
    }
}
let p = null;
function Me(e) {
    p = e
}
function wr(e, t=!1, n) {
    p = {
        p,
        c: null,
        e: null,
        m: !1,
        s: e,
        x: null,
        l: null
    },
    ye && !t && (p.l = {
        s: null,
        u: null,
        r1: [],
        r2: T(!1)
    })
}
function Er(e) {
    const t = p;
    if (t !== null) {
        e !== void 0 && (t.x = e);
        const u = t.e;
        if (u !== null) {
            var n = d
              , r = v;
            t.e = null;
            try {
                for (var a = 0; a < u.length; a++) {
                    var s = u[a];
                    F(s.effect),
                    M(s.reaction),
                    pt(s.fn)
                }
            } finally {
                F(n),
                M(r)
            }
        }
        p = t.p,
        t.m = !0
    }
    return e || {}
}
function Te() {
    return !ye || p !== null && p.l === null
}
function gr(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const dn = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
function mr(e) {
    return dn.includes(e)
}
const pn = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
};
function br(e) {
    return e = e.toLowerCase(),
    pn[e] ?? e
}
const hn = ["touchstart", "touchmove"];
function Tr(e) {
    return hn.includes(e)
}
const yn = ["textarea", "script", "style", "title"];
function Ar(e) {
    return yn.includes(e)
}
function xr(e, t) {
    if (t) {
        const n = document.body;
        e.autofocus = !0,
        $e( () => {
            document.activeElement === n && e.focus()
        }
        )
    }
}
let Fe = !1;
function wn() {
    Fe || (Fe = !0,
    document.addEventListener("reset", e => {
        Promise.resolve().then( () => {
            if (!e.defaultPrevented)
                for (const t of e.target.elements)
                    t.__on_r?.()
        }
        )
    }
    , {
        capture: !0
    }))
}
function mt(e) {
    var t = v
      , n = d;
    M(null),
    F(null);
    try {
        return e()
    } finally {
        M(t),
        F(n)
    }
}
function Sr(e, t, n, r=n) {
    e.addEventListener(t, () => mt(n));
    const a = e.__on_r;
    a ? e.__on_r = () => {
        a(),
        r(!0)
    }
    : e.__on_r = () => r(!0),
    wn()
}
const En = new Set
  , gn = new Set;
function mn(e, t, n, r={}) {
    function a(s) {
        if (r.capture || bn.call(t, s),
        !s.cancelBubble)
            return mt( () => n?.call(this, s))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $e( () => {
        t.addEventListener(e, a, r)
    }
    ) : t.addEventListener(e, a, r),
    a
}
function kr(e, t, n, r, a) {
    var s = {
        capture: r,
        passive: a
    }
      , u = mn(e, t, n, s);
    (t === document.body || t === window || t === document) && on( () => {
        t.removeEventListener(e, u, s)
    }
    )
}
function Ir(e) {
    for (var t = 0; t < e.length; t++)
        En.add(e[t]);
    for (var n of gn)
        n(e)
}
function bn(e) {
    var t = this
      , n = t.ownerDocument
      , r = e.type
      , a = e.composedPath?.() || []
      , s = a[0] || e.target
      , u = 0
      , _ = e.__root;
    if (_) {
        var c = a.indexOf(_);
        if (c !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var l = a.indexOf(t);
        if (l === -1)
            return;
        c <= l && (u = c)
    }
    if (s = a[u] || e.target,
    s !== t) {
        Dt(e, "currentTarget", {
            configurable: !0,
            get() {
                return s || n
            }
        });
        var o = v
          , f = d;
        M(null),
        F(null);
        try {
            for (var i, w = []; s !== null; ) {
                var O = s.assignedSlot || s.parentNode || s.host || null;
                try {
                    var R = s["__" + r];
                    if (R !== void 0 && !s.disabled)
                        if (Ve(R)) {
                            var [le,...ie] = R;
                            le.apply(s, [e, ...ie])
                        } else
                            R.call(s, e)
                } catch (L) {
                    i ? w.push(L) : i = L
                }
                if (e.cancelBubble || O === t || O === null)
                    break;
                s = O
            }
            if (i) {
                for (let L of w)
                    queueMicrotask( () => {
                        throw L
                    }
                    );
                throw i
            }
        } finally {
            e.__root = t,
            delete e.currentTarget,
            M(o),
            F(f)
        }
    }
}
function Tn(e) {
    var t = document.createElement("template");
    return t.innerHTML = e,
    t.content
}
function V(e, t) {
    var n = d;
    n.nodes_start === null && (n.nodes_start = e,
    n.nodes_end = t)
}
function Or(e, t) {
    var n = (t & Tt) !== 0, r = (t & At) !== 0, a, s = !e.startsWith("<!>");
    return () => {
        if (x)
            return V(h, null),
            h;
        a === void 0 && (a = Tn(s ? e : "<!>" + e),
        n || (a = ae(a)));
        var u = r ? document.importNode(a, !0) : a.cloneNode(!0);
        if (n) {
            var _ = ae(u)
              , c = u.lastChild;
            V(_, c)
        } else
            V(u, u);
        return u
    }
}
function Rr(e="") {
    if (!x) {
        var t = z(e + "");
        return V(t, t),
        t
    }
    var n = h;
    return n.nodeType !== 3 && (n.before(n = z()),
    Z(n)),
    V(n, n),
    n
}
function Nr() {
    if (x)
        return V(h, null),
        h;
    var e = document.createDocumentFragment()
      , t = document.createComment("")
      , n = z();
    return e.append(t, n),
    V(t, n),
    e
}
function Dr(e, t) {
    if (x) {
        d.nodes_end = h,
        un();
        return
    }
    e !== null && e.before(t)
}
export {Sn as $, gn as A, _r as B, bn as C, Tr as D, z as E, hr as F, wr as G, xt as H, V as I, d as J, Er as K, fn as L, Tn as M, U as N, pt as O, Ne as P, $e as Q, kn as R, B as S, Zn as T, St as U, rr as V, yr as W, _n as X, X as Y, xn as Z, ke as _, fr as a, nr as a$, Kt as a0, T as a1, Ve as a2, In as a3, Et as a4, vn as a5, On as a6, Te as a7, Sr as a8, ar as a9, mr as aA, Oe as aB, It as aC, Ln as aD, Hn as aE, Yn as aF, $n as aG, S as aH, An as aI, Dt as aJ, Wn as aK, Ot as aL, Dn as aM, Ze as aN, Pn as aO, Mn as aP, Nn as aQ, P as aR, ue as aS, Rn as aT, Cn as aU, j as aV, kr as aW, Rr as aX, Xn as aY, vr as aZ, dr as a_, Nr as aa, lr as ab, Dr as ac, Or as ad, pr as ae, ur as af, tr as ag, ir as ah, ee as ai, ye as aj, Ft as ak, Ye as al, g as am, M as an, F as ao, Ue as ap, Fn as aq, v as ar, Pt as as, Un as at, wn as au, gr as av, mn as aw, Ir as ax, xr as ay, br as az, be as b, Jn as b0, qn as b1, Ar as b2, Vn as b3, Kn as b4, zn as b5, p as c, Ge as d, Y as e, Qn as f, te as g, x as h, Qe as i, sr as j, ae as k, W as l, je as m, Z as n, un as o, h as p, kt as q, Bn as r, er as s, on as t, cr as u, ct as v, Gn as w, or as x, jn as y, En as z};
