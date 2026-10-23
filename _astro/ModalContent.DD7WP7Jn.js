import {p as h} from "./props.DhW_cUaT.js";
import {h as f, o as H, p as A, L as ae, al as se, F as oe, b1 as ne, I as le, b2 as re, k as ie, E as de, s as J, n as V, J as ce, X as fe, W as me, N as ue, G as ve, ad as Q, ae as X, ac as I, K as _e, aH as y, e as o, aG as S, af as L, ag as O, ab as z, ah as w, T as be, aW as N, i as pe, aa as he} from "./template.B2q5ohnV.js";
import {b as B, s as ye} from "./render.aXqWAVnf.js";
import {i as ge, b as Ee, s as ke} from "./attributes.CEG2LPQo.js";
import {h as Ce} from "./html.LbM5bMTP.js";
import {C as Se, s as Te} from "./Close.BT6bvdro.js";
import {a as xe, t as Me} from "./svelteTeleport.CRrgY04d.js";
import {s as Ae} from "./class.DZ8Rft6E.js";
import {t as F, f as D} from "./index.COEW6Nl-.js";
import {b as Ie} from "./props.1hK3DwGu.js";
import {b as G} from "./this.CuUmPRXA.js";
import {i as Le} from "./lifecycle.CWTZk5uM.js";
import {c as Oe} from "./index-client.BM0TrHfX.js";
import {t as we} from "./helpers.D0mxtAvw.js";
/* empty css                       */
import "./clsx.B-dksMZM.js";
function Ne(T, a, q, g, K, x) {
    let E = f;
    f && H();
    var _, m, t = null;
    f && A.nodeType === 1 && (t = A,
    H());
    var i = f ? A : T, n;
    ae( () => {
        const e = a() || null;
        var b = e === "svg" ? ne : null;
        e !== _ && (n && (e === null ? fe(n, () => {
            n = null,
            m = null
        }
        ) : e === m ? me(n) : (ue(n),
        B(!1))),
        e && e !== m && (n = oe( () => {
            if (t = f ? t : b ? document.createElementNS(b, e) : document.createElement(e),
            le(t, t),
            g) {
                f && re(e) && t.append(document.createComment(""));
                var p = f ? ie(t) : t.appendChild(de());
                f && (p === null ? J(!1) : V(p)),
                g(t, p)
            }
            ce.nodes_end = t,
            i.before(t)
        }
        )),
        _ = e,
        _ && (m = _),
        B(!0))
    }
    , se),
    E && (J(!0),
    V(i))
}
var Fe = Q('<div class="modal__body bg--white"><!></div> <button class="button button--tertiary modal__close"> <!></button> <div></div>', 1)
  , De = Q('<div role="dialog" aria-modal="true"><!></div>');
function Ze(T, a) {
    ve(a, !1);
    let q = h(a, "modalLabel", 8)
      , g = h(a, "translations", 24, () => ({}))
      , K = h(a, "classes", 8, "")
      , x = h(a, "key", 8)
      , E = h(a, "overlayColor", 8);
    const _ = we(g())
      , m = P
      , t = Oe();
    let i = S(!1), n, e = S(), b = S(), p = S();
    function P(l) {
        n = document.activeElement,
        y(i, !0),
        t("modalStatus", o(i))
    }
    function U() {
        o(e).addEventListener("keydown", r);
        let s = o(e).querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');
        s = Array.prototype.slice.call(s);
        const d = s[0]
          , k = s[s.length - 1];
        function r(v) {
            v.key === "Escape" && M(),
            v.key === "Tab" && (v.shiftKey ? (document.activeElement === d || document.activeElement.name !== "" && document.activeElement.name === d.name) && (v.preventDefault(),
            k.focus()) : document.activeElement === k && (v.preventDefault(),
            d.focus()))
        }
    }
    function M() {
        y(i, !1),
        t("modalStatus", o(i)),
        n.focus()
    }
    x() && globalThis.addEventListener && globalThis.addEventListener(`openModal:${x()}`, P),
    Le();
    var u = De()
      , Y = L(u);
    {
        var Z = l => {
            var s = Fe()
              , d = z(s)
              , k = L(d);
            Ne(k, () => "div", !1, (c, ee) => {
                var j = he()
                  , te = z(j);
                Te(te, a, "default", {}, null),
                I(ee, j)
            }
            ),
            O(d);
            var r = w(d, 2)
              , v = pe( () => (o(b).focus(),
            U()))
              , R = L(r)
              , $ = w(R);
            Ce($, () => Se),
            O(r),
            G(r, c => y(b, c), () => o(b));
            var C = w(r, 2);
            let W;
            G(C, c => y(p, c), () => o(p)),
            X(c => {
                ye(R, `${c ?? ""} `),
                W = Ee(C, W, {
                    class: "modal__overlay",
                    ...E() && {
                        style: `background-color: ${E()}`
                    },
                    "aria-hidden": "true"
                })
            }
            , [ () => _("close")], be),
            F(3, d, () => D, () => ({
                delay: 50,
                duration: 200,
                ease: "circInOut"
            })),
            N("click", r, M),
            F(3, r, () => D, () => ({
                delay: 150,
                duration: 200,
                ease: "circInOut"
            })),
            N("introend", r, function(...c) {
                o(v)?.apply(this, c)
            }),
            N("click", C, M),
            F(3, C, () => D, () => ({
                delay: 0,
                duration: 200,
                ease: "circInOut"
            })),
            I(l, s)
        }
        ;
        ge(Y, l => {
            o(i) && l(Z)
        }
        )
    }
    return O(u),
    xe(u, (l, s) => Me?.(l, s), () => "teleport"),
    G(u, l => y(e, l), () => o(e)),
    X( () => {
        Ae(u, `modal ${K()}`),
        ke(u, "aria-label", q() || "Modal Content")
    }
    ),
    I(T, u),
    Ie(a, "openModal", m),
    _e({
        openModal: m
    })
}
export {Ze as default};
