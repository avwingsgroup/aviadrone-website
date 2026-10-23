function r(e, s, t=!1) {
    let n;
    return function() {
        const o = this
          , c = arguments
          , l = function() {
            n = null,
            t || e.apply(o, c)
        }
          , u = t && !n;
        clearTimeout(n),
        n = setTimeout(l, s),
        u && e.apply(o, c)
    }
}
function a(e, s) {
    let t;
    return function() {
        const n = this
          , o = arguments;
        t || (e.apply(n, o),
        t = !0,
        setTimeout( () => t = !1, s))
    }
}
export {r as d, a as t};
