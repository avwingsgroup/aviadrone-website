import {O as s, b as d, P as p, f as u, ak as i} from "./template.B2q5ohnV.js";
function c(e, o, t) {
    s( () => {
        var a = d( () => o(e, t?.()) || {});
        if (t && a?.update) {
            var n = !1
              , f = {};
            p( () => {
                var r = t();
                u(r),
                n && i(f, r) && (f = r,
                a.update(r))
            }
            ),
            n = !0
        }
        if (a?.destroy)
            return () => a.destroy()
    }
    )
}
function m(e, o) {
    return document.getElementById(o).appendChild(e),
    {
        destroy() {
            e.remove()
        }
    }
}
export {c as a, m as t};
