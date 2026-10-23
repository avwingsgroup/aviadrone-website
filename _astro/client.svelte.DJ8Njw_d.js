import {M as u, I as m, t as h, h as y, p as _, o as $, k as v, ai as g} from "./template.B2q5ohnV.js";
import {h as b, m as k, u as x} from "./render.aXqWAVnf.js";
function f(e) {
    return (a, ...i) => {
        var n = e(...i), t;
        if (y)
            t = _,
            $();
        else {
            var d = n.render().trim()
              , o = u(d);
            t = v(o),
            a.before(t)
        }
        const s = n.setup?.(t);
        m(t, t),
        typeof s == "function" && h(s)
    }
}
const p = new WeakMap
  , M = e => async (a, i, n, {client: t}) => {
    if (!e.hasAttribute("ssr"))
        return;
    let d, o, s = {};
    for (const [r,c] of Object.entries(n))
        o ??= {},
        r === "default" ? (o.default = !0,
        d = f( () => ({
            render: () => `<astro-slot>${c}</astro-slot>`
        }))) : o[r] = f( () => ({
            render: () => `<astro-slot name="${r}">${c}</astro-slot>`
        })),
        r === "default" ? s.children = f( () => ({
            render: () => `<astro-slot>${c}</astro-slot>`
        })) : s[r] = f( () => ({
            render: () => `<astro-slot name="${r}">${c}</astro-slot>`
        }));
    const l = {
        ...i,
        children: d,
        $$slots: o,
        ...s
    };
    if (p.has(e))
        p.get(e).setProps(l);
    else {
        const r = j(a, e, l, t !== "only");
        p.set(e, r),
        e.addEventListener("astro:unmount", () => r.destroy(), {
            once: !0
        })
    }
}
;
function j(e, a, i, n) {
    let t = g(i);
    const o = (n ? b : k)(e, {
        target: a,
        props: t
    });
    return {
        setProps(s) {
            Object.assign(t, s);
            for (const l in t)
                l in s || delete t[l]
        },
        destroy() {
            x(o)
        }
    }
}
export {M as default};
