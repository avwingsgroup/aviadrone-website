import {O as S, P as h, b as k, Q as O, S as T} from "./template.B2q5ohnV.js";
function u(r, i) {
    return r === i || r?.[T] === i
}
function d(r={}, i, a, b) {
    return S( () => {
        var f, s;
        return h( () => {
            f = s,
            s = b?.() || [],
            k( () => {
                r !== a(...s) && (i(r, ...s),
                f && u(a(...f), r) && i(null, ...f))
            }
            )
        }
        ),
        () => {
            O( () => {
                s && u(a(...s), r) && i(null, ...s)
            }
            )
        }
    }
    ),
    r
}
export {d as b};
