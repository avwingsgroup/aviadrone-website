/*
 * @author Sanford Whiteman
 * @version v1.104
 * @license MIT License: This license must appear with all reproductions of this software.
 *
 * Create a completely barebones, user-styles-only Marketo form
 * by removing inline STYLE attributes and disabling STYLE and LINK elements
 */
const c = (t, r) => {
    const e = t.getFormElem()[0]
      , o = getSelection.call.bind([].slice);
    o(e.querySelectorAll("[style]")).concat(e).forEach(function(s) {
        s.removeAttribute("style")
    }),
    o(document.styleSheets).forEach(function(s) {
        ([mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(s.ownerNode) != -1 || e.contains(s.ownerNode)) && (s.disabled = !0)
    }),
    e.setAttribute("data-styles-ready", "true")
}
  , m = t => {
    let e = t.getFormElem()[0].querySelector("input[name=confirmtxt]");
    !e || e.value == "" ? t.submittable(!0) : t.submittable(!1)
}
  , a = async (t=document.head) => window.MktoForms2 ? Promise.resolve() : new Promise( (r, e) => {
    const o = document.createElement("script");
    o.onload = () => {
        r()
    }
    ,
    o.onerror = () => {
        r()
    }
    ,
    o.src = "https://pages.aviadrones.com/js/forms2/js/forms2.min.js",
    t.appendChild(o)
}
);
export {m as c, c as d, a as l};
