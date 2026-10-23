( () => {
    var U_ = Object.create;
    var Ga = Object.defineProperty;
    var P_ = Object.getOwnPropertyDescriptor;
    var $_ = Object.getOwnPropertyNames;
    var W_ = Object.getPrototypeOf
      , q_ = Object.prototype.hasOwnProperty;
    var hr = (i, n) => () => (n || i((n = {
        exports: {}
    }).exports, n),
    n.exports);
    var H_ = (i, n, r, s) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let u of $_(n))
                !q_.call(i, u) && u !== r && Ga(i, u, {
                    get: () => n[u],
                    enumerable: !(s = P_(n, u)) || s.enumerable
                });
        return i
    }
    ;
    var Ve = (i, n, r) => (r = i != null ? U_(W_(i)) : {},
    H_(n || !i || !i.__esModule ? Ga(r, "default", {
        value: i,
        enumerable: !0
    }) : r, i));
    var bt = hr( (ew, Ka) => {
        Ka.exports = jQuery
    }
    );
    var Qa = hr( (Va, ai) => {
        (function(i, n) {
            typeof define == "function" && define.amd ? define([], n) : typeof ai == "object" && ai.exports ? ai.exports = n() : i.balanceText = n()
        }
        )(Va, () => {
            let i, n, r, s = {
                sel: [],
                el: []
            }, u = !1, l = !1;
            function f() {}
            function p(L, O) {
                Array.prototype.forEach.call(L, O)
            }
            function m(L) {
                document.readyState !== "loading" ? L() : document.addEventListener ? document.addEventListener("DOMContentLoaded", L) : document.attachEvent("onreadystatechange", () => {
                    document.readyState !== "loading" && L()
                }
                )
            }
            function v(L, O, W, ...V) {
                let ee;
                return function() {
                    let ce = this;
                    function z() {
                        W || L.apply(ce, V),
                        ee = null
                    }
                    ee ? clearTimeout(ee) : W && L.apply(ce, V),
                    ee = setTimeout(z, O || 100)
                }
            }
            function E() {
                if (typeof window > "u")
                    return !1;
                let {style: L} = document.documentElement;
                return L.textWrap || L.WebkitTextWrap || L.MozTextWrap || L.MsTextWrap
            }
            function S() {
                this.reset()
            }
            S.prototype.reset = function() {
                this.index = 0,
                this.width = 0
            }
            ;
            function F(L) {
                return n.some(O => O.start < L && L < O.end)
            }
            function k(L, O) {
                if (L.nodeType === L.ELEMENT_NODE)
                    if (window.getComputedStyle(L).whiteSpace === "nowrap") {
                        let V = L.outerHTML.length;
                        n.push({
                            start: r,
                            end: r + V
                        }),
                        r += V
                    } else
                        p(L.childNodes, V => {
                            k(V, !0)
                        }
                        ),
                        O && (r += L.outerHTML.length - L.innerHTML.length);
                else
                    L.nodeType === L.COMMENT_NODE ? r += L.length + 7 : L.nodeType === L.PROCESSING_INSTRUCTION_NODE ? r += L.length + 2 : r += L.length
            }
            function D(L, O, W) {
                if (W === 0)
                    L.style.whiteSpace = O,
                    r = 0,
                    n = [],
                    k(L, !1),
                    L.style.whiteSpace = "nowrap";
                else {
                    let V = [];
                    n.forEach(ee => {
                        ee.start > W && V.push({
                            start: ee.start - W,
                            end: ee.end - W
                        })
                    }
                    ),
                    n = V
                }
            }
            function q(L) {
                let O = L.querySelectorAll('br[data-owner="balance-text-hyphen"]');
                p(O, V => {
                    V.outerHTML = ""
                }
                ),
                O = L.querySelectorAll('br[data-owner="balance-text"]'),
                p(O, V => {
                    V.outerHTML = " "
                }
                );
                let W = L.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
                if (W.length > 0 && p(W, V => {
                    let ee = document.createTextNode("\xAD");
                    V.parentNode.insertBefore(ee, V),
                    V.parentNode.removeChild(V)
                }
                ),
                W = L.querySelectorAll('span[data-owner="balance-text-justify"]'),
                W.length > 0) {
                    let V = "";
                    p(W, ee => {
                        V += ee.textContent,
                        ee.parentNode.removeChild(ee)
                    }
                    ),
                    L.innerHTML = V
                }
            }
            let de = function(L) {
                return (L.currentStyle || window.getComputedStyle(L, null)).textAlign === "justify"
            };
            function ie(L, O, W) {
                O = O.trim();
                let V = O.split(" ").length;
                if (O = `${O} `,
                V < 2)
                    return O;
                let ee = document.createElement("span");
                ee.innerHTML = O,
                L.appendChild(ee);
                let ce = ee.offsetWidth;
                ee.parentNode.removeChild(ee);
                let z = Math.floor((W - ce) / (V - 1));
                ee.style.wordSpacing = `${z}px`,
                ee.setAttribute("data-owner", "balance-text-justify");
                let B = document.createElement("div");
                return B.appendChild(ee),
                B.innerHTML
            }
            function ue(L, O) {
                let W = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g, V;
                if (!i)
                    for (i = [],
                    V = W.exec(L); V !== null; )
                        F(V.index) || i.push(V.index),
                        V = W.exec(L);
                return i.indexOf(O) !== -1
            }
            function fe(L, O) {
                return O === 0 || O === L.length || ue(L, O - 1) && !ue(L, O)
            }
            function ge(L, O, W, V, ee, ce, z) {
                let B;
                if (O && typeof O == "string")
                    for (; ; ) {
                        for (; !fe(O, ce); )
                            ce += ee;
                        if (L.innerHTML = O.substr(0, ce),
                        B = L.offsetWidth,
                        ee < 0) {
                            if (B <= V || B <= 0 || ce === 0)
                                break
                        } else if (V <= B || W <= B || ce === O.length)
                            break;
                        ce += ee
                    }
                z.index = ce,
                z.width = B
            }
            function me(L, O) {
                let W = document.createElement("div");
                W.style.display = "block",
                W.style.position = "absolute",
                W.style.bottom = 0,
                W.style.right = 0,
                W.style.width = 0,
                W.style.height = 0,
                W.style.margin = 0,
                W.style.padding = 0,
                W.style.visibility = "hidden",
                W.style.overflow = "hidden";
                let V = document.createElement("span");
                V.style.fontSize = "2000px",
                V.innerHTML = "&nbsp;",
                W.appendChild(V),
                L.appendChild(W);
                let ee = V.getBoundingClientRect();
                W.parentNode.removeChild(W);
                let ce = ee.height / ee.width;
                return O / ce
            }
            function ve(L) {
                return L ? typeof L == "string" ? document.querySelectorAll(L) : L.tagName && L.querySelectorAll ? [L] : L : []
            }
            function ot(L) {
                p(ve(L), O => {
                    q(O);
                    let V = O.style.whiteSpace
                      , ee = O.style.float
                      , ce = O.style.display
                      , z = O.style.position
                      , B = O.style.lineHeight;
                    O.style.lineHeight = "normal";
                    let U = O.offsetWidth
                      , H = O.offsetHeight;
                    O.style.whiteSpace = "nowrap",
                    O.style.float = "none",
                    O.style.display = "inline",
                    O.style.position = "static";
                    let J = O.offsetWidth
                      , ne = O.offsetHeight
                      , Te = V === "pre-wrap" ? 0 : me(O, ne);
                    if (U > 0 && J > U && J < 5e3) {
                        let Se = O.innerHTML, Zt = "", st = "", hn = de(O), Be = Math.round(H / ne), jt = 0, en, ke, Ze, At, ut, Ye, Bt;
                        for (; Be > 1; )
                            i = null,
                            D(O, V, jt),
                            en = Math.round((J + Te) / Be - Te),
                            ke = Math.round((Se.length + 1) / Be) - 1,
                            Ze = new S,
                            ge(O, Se, U, en, -1, ke, Ze),
                            At = new S,
                            ke = Ze.index,
                            ge(O, Se, U, en, 1, ke, At),
                            Ze.reset(),
                            ke = At.index,
                            ge(O, Se, U, en, -1, ke, Ze),
                            Ze.index === 0 ? ut = At.index : U < At.width || Ze.index === At.index ? ut = Ze.index : ut = Math.abs(en - Ze.width) < Math.abs(At.width - en) ? Ze.index : At.index,
                            st = Se.substr(0, ut).replace(/\s$/, ""),
                            Bt = !!st.match(/\u00ad$/),
                            Bt && (st = st.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')),
                            hn ? Zt += ie(O, st, U) : (Zt += st,
                            Ye = Bt || !!st.match(/(-|\u2014|\u2013)$/),
                            Zt += Ye ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" aria-hidden="true" />'),
                            Se = Se.substr(ut),
                            jt = ut,
                            Be--,
                            O.innerHTML = Se,
                            J = O.offsetWidth;
                        hn ? O.innerHTML = Zt + ie(O, Se, U) : O.innerHTML = Zt + Se
                    }
                    O.style.whiteSpace = V,
                    O.style.float = ee,
                    O.style.display = ce,
                    O.style.position = z,
                    O.style.lineHeight = B
                }
                )
            }
            function xe() {
                let L = s.sel.join(",")
                  , O = ve(L)
                  , W = Array.prototype.concat.apply(s.el, O);
                ot(W)
            }
            function Kt() {
                u || (m(xe),
                window.addEventListener("load", xe),
                window.addEventListener("resize", v(xe)),
                u = !0)
            }
            function Vt(L) {
                typeof L == "string" ? s.sel.push(L) : p(ve(L), O => {
                    s.el.push(O)
                }
                ),
                Kt(),
                xe()
            }
            function Dt(L) {
                typeof L == "string" ? s.sel = s.sel.filter(O => O !== L) : (L = ve(L),
                s.el = s.el.filter(O => L.indexOf(O) === -1))
            }
            function Qt() {
                l || (s.sel.push(".balance-text"),
                Kt(),
                l = !0)
            }
            function Xt(L, O) {
                L ? O && O.watch === !0 ? Vt(L) : O && O.watch === !1 ? Dt(L) : ot(L) : Qt()
            }
            return Xt.updateWatched = xe,
            E() ? (f.updateWatched = f,
            f) : Xt
        }
        )
    }
    );
    var rl = hr( (dr, es) => {
        (function(n, r) {
            typeof dr == "object" && typeof es == "object" ? es.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof dr == "object" ? dr.ClipboardJS = r() : n.ClipboardJS = r()
        }
        )(dr, function() {
            return function() {
                var i = {
                    686: function(s, u, l) {
                        "use strict";
                        l.d(u, {
                            default: function() {
                                return ce
                            }
                        });
                        var f = l(279)
                          , p = l.n(f)
                          , m = l(370)
                          , v = l.n(m)
                          , E = l(817)
                          , S = l.n(E);
                        function F(z) {
                            try {
                                return document.execCommand(z)
                            } catch {
                                return !1
                            }
                        }
                        var k = function(B) {
                            var U = S()(B);
                            return F("cut"),
                            U
                        }
                          , D = k;
                        function q(z) {
                            var B = document.documentElement.getAttribute("dir") === "rtl"
                              , U = document.createElement("textarea");
                            U.style.fontSize = "12pt",
                            U.style.border = "0",
                            U.style.padding = "0",
                            U.style.margin = "0",
                            U.style.position = "absolute",
                            U.style[B ? "right" : "left"] = "-9999px";
                            var H = window.pageYOffset || document.documentElement.scrollTop;
                            return U.style.top = "".concat(H, "px"),
                            U.setAttribute("readonly", ""),
                            U.value = z,
                            U
                        }
                        var de = function(B, U) {
                            var H = q(B);
                            U.container.appendChild(H);
                            var J = S()(H);
                            return F("copy"),
                            H.remove(),
                            J
                        }
                          , ie = function(B) {
                            var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                container: document.body
                            }
                              , H = "";
                            return typeof B == "string" ? H = de(B, U) : B instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(B?.type) ? H = de(B.value, U) : (H = S()(B),
                            F("copy")),
                            H
                        }
                          , ue = ie;
                        function fe(z) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fe = function(U) {
                                return typeof U
                            }
                            : fe = function(U) {
                                return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U
                            }
                            ,
                            fe(z)
                        }
                        var ge = function() {
                            var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                              , U = B.action
                              , H = U === void 0 ? "copy" : U
                              , J = B.container
                              , ne = B.target
                              , Te = B.text;
                            if (H !== "copy" && H !== "cut")
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (ne !== void 0)
                                if (ne && fe(ne) === "object" && ne.nodeType === 1) {
                                    if (H === "copy" && ne.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if (H === "cut" && (ne.hasAttribute("readonly") || ne.hasAttribute("disabled")))
                                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                } else
                                    throw new Error('Invalid "target" value, use a valid Element');
                            if (Te)
                                return ue(Te, {
                                    container: J
                                });
                            if (ne)
                                return H === "cut" ? D(ne) : ue(ne, {
                                    container: J
                                })
                        }
                          , me = ge;
                        function ve(z) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ve = function(U) {
                                return typeof U
                            }
                            : ve = function(U) {
                                return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U
                            }
                            ,
                            ve(z)
                        }
                        function ot(z, B) {
                            if (!(z instanceof B))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function xe(z, B) {
                            for (var U = 0; U < B.length; U++) {
                                var H = B[U];
                                H.enumerable = H.enumerable || !1,
                                H.configurable = !0,
                                "value"in H && (H.writable = !0),
                                Object.defineProperty(z, H.key, H)
                            }
                        }
                        function Kt(z, B, U) {
                            return B && xe(z.prototype, B),
                            U && xe(z, U),
                            z
                        }
                        function Vt(z, B) {
                            if (typeof B != "function" && B !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            z.prototype = Object.create(B && B.prototype, {
                                constructor: {
                                    value: z,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            B && Dt(z, B)
                        }
                        function Dt(z, B) {
                            return Dt = Object.setPrototypeOf || function(H, J) {
                                return H.__proto__ = J,
                                H
                            }
                            ,
                            Dt(z, B)
                        }
                        function Qt(z) {
                            var B = O();
                            return function() {
                                var H = W(z), J;
                                if (B) {
                                    var ne = W(this).constructor;
                                    J = Reflect.construct(H, arguments, ne)
                                } else
                                    J = H.apply(this, arguments);
                                return Xt(this, J)
                            }
                        }
                        function Xt(z, B) {
                            return B && (ve(B) === "object" || typeof B == "function") ? B : L(z)
                        }
                        function L(z) {
                            if (z === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return z
                        }
                        function O() {
                            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if (typeof Proxy == "function")
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                                !0
                            } catch {
                                return !1
                            }
                        }
                        function W(z) {
                            return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(U) {
                                return U.__proto__ || Object.getPrototypeOf(U)
                            }
                            ,
                            W(z)
                        }
                        function V(z, B) {
                            var U = "data-clipboard-".concat(z);
                            if (B.hasAttribute(U))
                                return B.getAttribute(U)
                        }
                        var ee = function(z) {
                            Vt(U, z);
                            var B = Qt(U);
                            function U(H, J) {
                                var ne;
                                return ot(this, U),
                                ne = B.call(this),
                                ne.resolveOptions(J),
                                ne.listenClick(H),
                                ne
                            }
                            return Kt(U, [{
                                key: "resolveOptions",
                                value: function() {
                                    var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    this.action = typeof J.action == "function" ? J.action : this.defaultAction,
                                    this.target = typeof J.target == "function" ? J.target : this.defaultTarget,
                                    this.text = typeof J.text == "function" ? J.text : this.defaultText,
                                    this.container = ve(J.container) === "object" ? J.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(J) {
                                    var ne = this;
                                    this.listener = v()(J, "click", function(Te) {
                                        return ne.onClick(Te)
                                    })
                                }
                            }, {
                                key: "onClick",
                                value: function(J) {
                                    var ne = J.delegateTarget || J.currentTarget
                                      , Te = this.action(ne) || "copy"
                                      , Se = me({
                                        action: Te,
                                        container: this.container,
                                        target: this.target(ne),
                                        text: this.text(ne)
                                    });
                                    this.emit(Se ? "success" : "error", {
                                        action: Te,
                                        text: Se,
                                        trigger: ne,
                                        clearSelection: function() {
                                            ne && ne.focus(),
                                            window.getSelection().removeAllRanges()
                                        }
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(J) {
                                    return V("action", J)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(J) {
                                    var ne = V("target", J);
                                    if (ne)
                                        return document.querySelector(ne)
                                }
                            }, {
                                key: "defaultText",
                                value: function(J) {
                                    return V("text", J)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy()
                                }
                            }], [{
                                key: "copy",
                                value: function(J) {
                                    var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                        container: document.body
                                    };
                                    return ue(J, ne)
                                }
                            }, {
                                key: "cut",
                                value: function(J) {
                                    return D(J)
                                }
                            }, {
                                key: "isSupported",
                                value: function() {
                                    var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"]
                                      , ne = typeof J == "string" ? [J] : J
                                      , Te = !!document.queryCommandSupported;
                                    return ne.forEach(function(Se) {
                                        Te = Te && !!document.queryCommandSupported(Se)
                                    }),
                                    Te
                                }
                            }]),
                            U
                        }(p())
                          , ce = ee
                    },
                    828: function(s) {
                        var u = 9;
                        if (typeof Element < "u" && !Element.prototype.matches) {
                            var l = Element.prototype;
                            l.matches = l.matchesSelector || l.mozMatchesSelector || l.msMatchesSelector || l.oMatchesSelector || l.webkitMatchesSelector
                        }
                        function f(p, m) {
                            for (; p && p.nodeType !== u; ) {
                                if (typeof p.matches == "function" && p.matches(m))
                                    return p;
                                p = p.parentNode
                            }
                        }
                        s.exports = f
                    },
                    438: function(s, u, l) {
                        var f = l(828);
                        function p(E, S, F, k, D) {
                            var q = v.apply(this, arguments);
                            return E.addEventListener(F, q, D),
                            {
                                destroy: function() {
                                    E.removeEventListener(F, q, D)
                                }
                            }
                        }
                        function m(E, S, F, k, D) {
                            return typeof E.addEventListener == "function" ? p.apply(null, arguments) : typeof F == "function" ? p.bind(null, document).apply(null, arguments) : (typeof E == "string" && (E = document.querySelectorAll(E)),
                            Array.prototype.map.call(E, function(q) {
                                return p(q, S, F, k, D)
                            }))
                        }
                        function v(E, S, F, k) {
                            return function(D) {
                                D.delegateTarget = f(D.target, S),
                                D.delegateTarget && k.call(E, D)
                            }
                        }
                        s.exports = m
                    },
                    879: function(s, u) {
                        u.node = function(l) {
                            return l !== void 0 && l instanceof HTMLElement && l.nodeType === 1
                        }
                        ,
                        u.nodeList = function(l) {
                            var f = Object.prototype.toString.call(l);
                            return l !== void 0 && (f === "[object NodeList]" || f === "[object HTMLCollection]") && "length"in l && (l.length === 0 || u.node(l[0]))
                        }
                        ,
                        u.string = function(l) {
                            return typeof l == "string" || l instanceof String
                        }
                        ,
                        u.fn = function(l) {
                            var f = Object.prototype.toString.call(l);
                            return f === "[object Function]"
                        }
                    },
                    370: function(s, u, l) {
                        var f = l(879)
                          , p = l(438);
                        function m(F, k, D) {
                            if (!F && !k && !D)
                                throw new Error("Missing required arguments");
                            if (!f.string(k))
                                throw new TypeError("Second argument must be a String");
                            if (!f.fn(D))
                                throw new TypeError("Third argument must be a Function");
                            if (f.node(F))
                                return v(F, k, D);
                            if (f.nodeList(F))
                                return E(F, k, D);
                            if (f.string(F))
                                return S(F, k, D);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                        }
                        function v(F, k, D) {
                            return F.addEventListener(k, D),
                            {
                                destroy: function() {
                                    F.removeEventListener(k, D)
                                }
                            }
                        }
                        function E(F, k, D) {
                            return Array.prototype.forEach.call(F, function(q) {
                                q.addEventListener(k, D)
                            }),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(F, function(q) {
                                        q.removeEventListener(k, D)
                                    })
                                }
                            }
                        }
                        function S(F, k, D) {
                            return p(document.body, F, k, D)
                        }
                        s.exports = m
                    },
                    817: function(s) {
                        function u(l) {
                            var f;
                            if (l.nodeName === "SELECT")
                                l.focus(),
                                f = l.value;
                            else if (l.nodeName === "INPUT" || l.nodeName === "TEXTAREA") {
                                var p = l.hasAttribute("readonly");
                                p || l.setAttribute("readonly", ""),
                                l.select(),
                                l.setSelectionRange(0, l.value.length),
                                p || l.removeAttribute("readonly"),
                                f = l.value
                            } else {
                                l.hasAttribute("contenteditable") && l.focus();
                                var m = window.getSelection()
                                  , v = document.createRange();
                                v.selectNodeContents(l),
                                m.removeAllRanges(),
                                m.addRange(v),
                                f = m.toString()
                            }
                            return f
                        }
                        s.exports = u
                    },
                    279: function(s) {
                        function u() {}
                        u.prototype = {
                            on: function(l, f, p) {
                                var m = this.e || (this.e = {});
                                return (m[l] || (m[l] = [])).push({
                                    fn: f,
                                    ctx: p
                                }),
                                this
                            },
                            once: function(l, f, p) {
                                var m = this;
                                function v() {
                                    m.off(l, v),
                                    f.apply(p, arguments)
                                }
                                return v._ = f,
                                this.on(l, v, p)
                            },
                            emit: function(l) {
                                var f = [].slice.call(arguments, 1)
                                  , p = ((this.e || (this.e = {}))[l] || []).slice()
                                  , m = 0
                                  , v = p.length;
                                for (m; m < v; m++)
                                    p[m].fn.apply(p[m].ctx, f);
                                return this
                            },
                            off: function(l, f) {
                                var p = this.e || (this.e = {})
                                  , m = p[l]
                                  , v = [];
                                if (m && f)
                                    for (var E = 0, S = m.length; E < S; E++)
                                        m[E].fn !== f && m[E].fn._ !== f && v.push(m[E]);
                                return v.length ? p[l] = v : delete p[l],
                                this
                            }
                        },
                        s.exports = u,
                        s.exports.TinyEmitter = u
                    }
                }
                  , n = {};
                function r(s) {
                    if (n[s])
                        return n[s].exports;
                    var u = n[s] = {
                        exports: {}
                    };
                    return i[s](u, u.exports, r),
                    u.exports
                }
                return function() {
                    r.n = function(s) {
                        var u = s && s.__esModule ? function() {
                            return s.default
                        }
                        : function() {
                            return s
                        }
                        ;
                        return r.d(u, {
                            a: u
                        }),
                        u
                    }
                }(),
                function() {
                    r.d = function(s, u) {
                        for (var l in u)
                            r.o(u, l) && !r.o(s, l) && Object.defineProperty(s, l, {
                                enumerable: !0,
                                get: u[l]
                            })
                    }
                }(),
                function() {
                    r.o = function(s, u) {
                        return Object.prototype.hasOwnProperty.call(s, u)
                    }
                }(),
                r(686)
            }().default
        })
    }
    );
    var sl = hr( (sw, ol) => {
        ol.exports = Vue
    }
    );
    var Gl = hr( (Hn, pr) => {
        (function() {
            var i, n = "4.17.21", r = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", l = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, m = "__lodash_placeholder__", v = 1, E = 2, S = 4, F = 1, k = 2, D = 1, q = 2, de = 4, ie = 8, ue = 16, fe = 32, ge = 64, me = 128, ve = 256, ot = 512, xe = 30, Kt = "...", Vt = 800, Dt = 16, Qt = 1, Xt = 2, L = 3, O = 1 / 0, W = 9007199254740991, V = 17976931348623157e292, ee = 0 / 0, ce = 4294967295, z = ce - 1, B = ce >>> 1, U = [["ary", me], ["bind", D], ["bindKey", q], ["curry", ie], ["curryRight", ue], ["flip", ot], ["partial", fe], ["partialRight", ge], ["rearg", ve]], H = "[object Arguments]", J = "[object Array]", ne = "[object AsyncFunction]", Te = "[object Boolean]", Se = "[object Date]", Zt = "[object DOMException]", st = "[object Error]", hn = "[object Function]", Ti = "[object GeneratorFunction]", Be = "[object Map]", jt = "[object Number]", en = "[object Null]", ke = "[object Object]", Ze = "[object Promise]", At = "[object Proxy]", ut = "[object RegExp]", Ye = "[object Set]", Bt = "[object String]", wr = "[object Symbol]", tf = "[object Undefined]", Vn = "[object WeakMap]", nf = "[object WeakSet]", Qn = "[object ArrayBuffer]", In = "[object DataView]", Ci = "[object Float32Array]", Ri = "[object Float64Array]", Oi = "[object Int8Array]", Li = "[object Int16Array]", Fi = "[object Int32Array]", Ni = "[object Uint8Array]", Di = "[object Uint8ClampedArray]", Bi = "[object Uint16Array]", ki = "[object Uint32Array]", rf = /\b__p \+= '';/g, of = /\b(__p \+=) '' \+/g, sf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ys = /&(?:amp|lt|gt|quot|#39);/g, ws = /[&<>"']/g, uf = RegExp(ys.source), af = RegExp(ws.source), lf = /<%-([\s\S]+?)%>/g, ff = /<%([\s\S]+?)%>/g, vs = /<%=([\s\S]+?)%>/g, cf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hf = /^\w*$/, df = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mi = /[\\^$.*+?()[\]{}|]/g, pf = RegExp(Mi.source), Ui = /^\s+/, gf = /\s/, _f = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mf = /\{\n\/\* \[wrapped with (.+)\] \*/, yf = /,? & /, wf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vf = /[()=,{}\[\]\/\s]/, xf = /\\(\\)?/g, Ef = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xs = /\w*$/, bf = /^[-+]0x[0-9a-f]+$/i, Sf = /^0b[01]+$/i, Af = /^\[object .+?Constructor\]$/, If = /^0o[0-7]+$/i, Tf = /^(?:0|[1-9]\d*)$/, Cf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vr = /($^)/, Rf = /['\n\r\u2028\u2029\\]/g, xr = "\\ud800-\\udfff", Of = "\\u0300-\\u036f", Lf = "\\ufe20-\\ufe2f", Ff = "\\u20d0-\\u20ff", Es = Of + Lf + Ff, bs = "\\u2700-\\u27bf", Ss = "a-z\\xdf-\\xf6\\xf8-\\xff", Nf = "\\xac\\xb1\\xd7\\xf7", Df = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Bf = "\\u2000-\\u206f", kf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", As = "A-Z\\xc0-\\xd6\\xd8-\\xde", Is = "\\ufe0e\\ufe0f", Ts = Nf + Df + Bf + kf, Pi = "['\u2019]", Mf = "[" + xr + "]", Cs = "[" + Ts + "]", Er = "[" + Es + "]", Rs = "\\d+", Uf = "[" + bs + "]", Os = "[" + Ss + "]", Ls = "[^" + xr + Ts + Rs + bs + Ss + As + "]", $i = "\\ud83c[\\udffb-\\udfff]", Pf = "(?:" + Er + "|" + $i + ")", Fs = "[^" + xr + "]", Wi = "(?:\\ud83c[\\udde6-\\uddff]){2}", qi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tn = "[" + As + "]", Ns = "\\u200d", Ds = "(?:" + Os + "|" + Ls + ")", $f = "(?:" + Tn + "|" + Ls + ")", Bs = "(?:" + Pi + "(?:d|ll|m|re|s|t|ve))?", ks = "(?:" + Pi + "(?:D|LL|M|RE|S|T|VE))?", Ms = Pf + "?", Us = "[" + Is + "]?", Wf = "(?:" + Ns + "(?:" + [Fs, Wi, qi].join("|") + ")" + Us + Ms + ")*", qf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Hf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ps = Us + Ms + Wf, Yf = "(?:" + [Uf, Wi, qi].join("|") + ")" + Ps, zf = "(?:" + [Fs + Er + "?", Er, Wi, qi, Mf].join("|") + ")", Jf = RegExp(Pi, "g"), Gf = RegExp(Er, "g"), Hi = RegExp($i + "(?=" + $i + ")|" + zf + Ps, "g"), Kf = RegExp([Tn + "?" + Os + "+" + Bs + "(?=" + [Cs, Tn, "$"].join("|") + ")", $f + "+" + ks + "(?=" + [Cs, Tn + Ds, "$"].join("|") + ")", Tn + "?" + Ds + "+" + Bs, Tn + "+" + ks, Hf, qf, Rs, Yf].join("|"), "g"), Vf = RegExp("[" + Ns + xr + Es + Is + "]"), Qf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Xf = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Zf = -1, ye = {};
            ye[Ci] = ye[Ri] = ye[Oi] = ye[Li] = ye[Fi] = ye[Ni] = ye[Di] = ye[Bi] = ye[ki] = !0,
            ye[H] = ye[J] = ye[Qn] = ye[Te] = ye[In] = ye[Se] = ye[st] = ye[hn] = ye[Be] = ye[jt] = ye[ke] = ye[ut] = ye[Ye] = ye[Bt] = ye[Vn] = !1;
            var _e = {};
            _e[H] = _e[J] = _e[Qn] = _e[In] = _e[Te] = _e[Se] = _e[Ci] = _e[Ri] = _e[Oi] = _e[Li] = _e[Fi] = _e[Be] = _e[jt] = _e[ke] = _e[ut] = _e[Ye] = _e[Bt] = _e[wr] = _e[Ni] = _e[Di] = _e[Bi] = _e[ki] = !0,
            _e[st] = _e[hn] = _e[Vn] = !1;
            var jf = {
                \u00C0: "A",
                \u00C1: "A",
                \u00C2: "A",
                \u00C3: "A",
                \u00C4: "A",
                \u00C5: "A",
                \u00E0: "a",
                \u00E1: "a",
                \u00E2: "a",
                \u00E3: "a",
                \u00E4: "a",
                \u00E5: "a",
                \u00C7: "C",
                \u00E7: "c",
                \u00D0: "D",
                \u00F0: "d",
                \u00C8: "E",
                \u00C9: "E",
                \u00CA: "E",
                \u00CB: "E",
                \u00E8: "e",
                \u00E9: "e",
                \u00EA: "e",
                \u00EB: "e",
                \u00CC: "I",
                \u00CD: "I",
                \u00CE: "I",
                \u00CF: "I",
                \u00EC: "i",
                \u00ED: "i",
                \u00EE: "i",
                \u00EF: "i",
                \u00D1: "N",
                \u00F1: "n",
                \u00D2: "O",
                \u00D3: "O",
                \u00D4: "O",
                \u00D5: "O",
                \u00D6: "O",
                \u00D8: "O",
                \u00F2: "o",
                \u00F3: "o",
                \u00F4: "o",
                \u00F5: "o",
                \u00F6: "o",
                \u00F8: "o",
                \u00D9: "U",
                \u00DA: "U",
                \u00DB: "U",
                \u00DC: "U",
                \u00F9: "u",
                \u00FA: "u",
                \u00FB: "u",
                \u00FC: "u",
                \u00DD: "Y",
                \u00FD: "y",
                \u00FF: "y",
                \u00C6: "Ae",
                \u00E6: "ae",
                \u00DE: "Th",
                \u00FE: "th",
                \u00DF: "ss",
                \u0100: "A",
                \u0102: "A",
                \u0104: "A",
                \u0101: "a",
                \u0103: "a",
                \u0105: "a",
                \u0106: "C",
                \u0108: "C",
                \u010A: "C",
                \u010C: "C",
                \u0107: "c",
                \u0109: "c",
                \u010B: "c",
                \u010D: "c",
                \u010E: "D",
                \u0110: "D",
                \u010F: "d",
                \u0111: "d",
                \u0112: "E",
                \u0114: "E",
                \u0116: "E",
                \u0118: "E",
                \u011A: "E",
                \u0113: "e",
                \u0115: "e",
                \u0117: "e",
                \u0119: "e",
                \u011B: "e",
                \u011C: "G",
                \u011E: "G",
                \u0120: "G",
                \u0122: "G",
                \u011D: "g",
                \u011F: "g",
                \u0121: "g",
                \u0123: "g",
                \u0124: "H",
                \u0126: "H",
                \u0125: "h",
                \u0127: "h",
                \u0128: "I",
                \u012A: "I",
                \u012C: "I",
                \u012E: "I",
                \u0130: "I",
                \u0129: "i",
                \u012B: "i",
                \u012D: "i",
                \u012F: "i",
                \u0131: "i",
                \u0134: "J",
                \u0135: "j",
                \u0136: "K",
                \u0137: "k",
                \u0138: "k",
                \u0139: "L",
                \u013B: "L",
                \u013D: "L",
                \u013F: "L",
                \u0141: "L",
                \u013A: "l",
                \u013C: "l",
                \u013E: "l",
                \u0140: "l",
                \u0142: "l",
                \u0143: "N",
                \u0145: "N",
                \u0147: "N",
                \u014A: "N",
                \u0144: "n",
                \u0146: "n",
                \u0148: "n",
                \u014B: "n",
                \u014C: "O",
                \u014E: "O",
                \u0150: "O",
                \u014D: "o",
                \u014F: "o",
                \u0151: "o",
                \u0154: "R",
                \u0156: "R",
                \u0158: "R",
                \u0155: "r",
                \u0157: "r",
                \u0159: "r",
                \u015A: "S",
                \u015C: "S",
                \u015E: "S",
                \u0160: "S",
                \u015B: "s",
                \u015D: "s",
                \u015F: "s",
                \u0161: "s",
                \u0162: "T",
                \u0164: "T",
                \u0166: "T",
                \u0163: "t",
                \u0165: "t",
                \u0167: "t",
                \u0168: "U",
                \u016A: "U",
                \u016C: "U",
                \u016E: "U",
                \u0170: "U",
                \u0172: "U",
                \u0169: "u",
                \u016B: "u",
                \u016D: "u",
                \u016F: "u",
                \u0171: "u",
                \u0173: "u",
                \u0174: "W",
                \u0175: "w",
                \u0176: "Y",
                \u0177: "y",
                \u0178: "Y",
                \u0179: "Z",
                \u017B: "Z",
                \u017D: "Z",
                \u017A: "z",
                \u017C: "z",
                \u017E: "z",
                \u0132: "IJ",
                \u0133: "ij",
                \u0152: "Oe",
                \u0153: "oe",
                \u0149: "'n",
                \u017F: "s"
            }
              , ec = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , tc = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }
              , nc = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , rc = parseFloat
              , ic = parseInt
              , $s = typeof global == "object" && global && global.Object === Object && global
              , oc = typeof self == "object" && self && self.Object === Object && self
              , Oe = $s || oc || Function("return this")()
              , Yi = typeof Hn == "object" && Hn && !Hn.nodeType && Hn
              , dn = Yi && typeof pr == "object" && pr && !pr.nodeType && pr
              , Ws = dn && dn.exports === Yi
              , zi = Ws && $s.process
              , at = function() {
                try {
                    var y = dn && dn.require && dn.require("util").types;
                    return y || zi && zi.binding && zi.binding("util")
                } catch {}
            }()
              , qs = at && at.isArrayBuffer
              , Hs = at && at.isDate
              , Ys = at && at.isMap
              , zs = at && at.isRegExp
              , Js = at && at.isSet
              , Gs = at && at.isTypedArray;
            function je(y, b, x) {
                switch (x.length) {
                case 0:
                    return y.call(b);
                case 1:
                    return y.call(b, x[0]);
                case 2:
                    return y.call(b, x[0], x[1]);
                case 3:
                    return y.call(b, x[0], x[1], x[2])
                }
                return y.apply(b, x)
            }
            function sc(y, b, x, M) {
                for (var Q = -1, ae = y == null ? 0 : y.length; ++Q < ae; ) {
                    var Ce = y[Q];
                    b(M, Ce, x(Ce), y)
                }
                return M
            }
            function lt(y, b) {
                for (var x = -1, M = y == null ? 0 : y.length; ++x < M && b(y[x], x, y) !== !1; )
                    ;
                return y
            }
            function uc(y, b) {
                for (var x = y == null ? 0 : y.length; x-- && b(y[x], x, y) !== !1; )
                    ;
                return y
            }
            function Ks(y, b) {
                for (var x = -1, M = y == null ? 0 : y.length; ++x < M; )
                    if (!b(y[x], x, y))
                        return !1;
                return !0
            }
            function tn(y, b) {
                for (var x = -1, M = y == null ? 0 : y.length, Q = 0, ae = []; ++x < M; ) {
                    var Ce = y[x];
                    b(Ce, x, y) && (ae[Q++] = Ce)
                }
                return ae
            }
            function br(y, b) {
                var x = y == null ? 0 : y.length;
                return !!x && Cn(y, b, 0) > -1
            }
            function Ji(y, b, x) {
                for (var M = -1, Q = y == null ? 0 : y.length; ++M < Q; )
                    if (x(b, y[M]))
                        return !0;
                return !1
            }
            function we(y, b) {
                for (var x = -1, M = y == null ? 0 : y.length, Q = Array(M); ++x < M; )
                    Q[x] = b(y[x], x, y);
                return Q
            }
            function nn(y, b) {
                for (var x = -1, M = b.length, Q = y.length; ++x < M; )
                    y[Q + x] = b[x];
                return y
            }
            function Gi(y, b, x, M) {
                var Q = -1
                  , ae = y == null ? 0 : y.length;
                for (M && ae && (x = y[++Q]); ++Q < ae; )
                    x = b(x, y[Q], Q, y);
                return x
            }
            function ac(y, b, x, M) {
                var Q = y == null ? 0 : y.length;
                for (M && Q && (x = y[--Q]); Q--; )
                    x = b(x, y[Q], Q, y);
                return x
            }
            function Ki(y, b) {
                for (var x = -1, M = y == null ? 0 : y.length; ++x < M; )
                    if (b(y[x], x, y))
                        return !0;
                return !1
            }
            var lc = Vi("length");
            function fc(y) {
                return y.split("")
            }
            function cc(y) {
                return y.match(wf) || []
            }
            function Vs(y, b, x) {
                var M;
                return x(y, function(Q, ae, Ce) {
                    if (b(Q, ae, Ce))
                        return M = ae,
                        !1
                }),
                M
            }
            function Sr(y, b, x, M) {
                for (var Q = y.length, ae = x + (M ? 1 : -1); M ? ae-- : ++ae < Q; )
                    if (b(y[ae], ae, y))
                        return ae;
                return -1
            }
            function Cn(y, b, x) {
                return b === b ? Sc(y, b, x) : Sr(y, Qs, x)
            }
            function hc(y, b, x, M) {
                for (var Q = x - 1, ae = y.length; ++Q < ae; )
                    if (M(y[Q], b))
                        return Q;
                return -1
            }
            function Qs(y) {
                return y !== y
            }
            function Xs(y, b) {
                var x = y == null ? 0 : y.length;
                return x ? Xi(y, b) / x : ee
            }
            function Vi(y) {
                return function(b) {
                    return b == null ? i : b[y]
                }
            }
            function Qi(y) {
                return function(b) {
                    return y == null ? i : y[b]
                }
            }
            function Zs(y, b, x, M, Q) {
                return Q(y, function(ae, Ce, pe) {
                    x = M ? (M = !1,
                    ae) : b(x, ae, Ce, pe)
                }),
                x
            }
            function pc(y, b) {
                var x = y.length;
                for (y.sort(b); x--; )
                    y[x] = y[x].value;
                return y
            }
            function Xi(y, b) {
                for (var x, M = -1, Q = y.length; ++M < Q; ) {
                    var ae = b(y[M]);
                    ae !== i && (x = x === i ? ae : x + ae)
                }
                return x
            }
            function Zi(y, b) {
                for (var x = -1, M = Array(y); ++x < y; )
                    M[x] = b(x);
                return M
            }
            function gc(y, b) {
                return we(b, function(x) {
                    return [x, y[x]]
                })
            }
            function js(y) {
                return y && y.slice(0, ru(y) + 1).replace(Ui, "")
            }
            function et(y) {
                return function(b) {
                    return y(b)
                }
            }
            function ji(y, b) {
                return we(b, function(x) {
                    return y[x]
                })
            }
            function Xn(y, b) {
                return y.has(b)
            }
            function eu(y, b) {
                for (var x = -1, M = y.length; ++x < M && Cn(b, y[x], 0) > -1; )
                    ;
                return x
            }
            function tu(y, b) {
                for (var x = y.length; x-- && Cn(b, y[x], 0) > -1; )
                    ;
                return x
            }
            function _c(y, b) {
                for (var x = y.length, M = 0; x--; )
                    y[x] === b && ++M;
                return M
            }
            var mc = Qi(jf)
              , yc = Qi(ec);
            function wc(y) {
                return "\\" + nc[y]
            }
            function vc(y, b) {
                return y == null ? i : y[b]
            }
            function Rn(y) {
                return Vf.test(y)
            }
            function xc(y) {
                return Qf.test(y)
            }
            function Ec(y) {
                for (var b, x = []; !(b = y.next()).done; )
                    x.push(b.value);
                return x
            }
            function eo(y) {
                var b = -1
                  , x = Array(y.size);
                return y.forEach(function(M, Q) {
                    x[++b] = [Q, M]
                }),
                x
            }
            function nu(y, b) {
                return function(x) {
                    return y(b(x))
                }
            }
            function rn(y, b) {
                for (var x = -1, M = y.length, Q = 0, ae = []; ++x < M; ) {
                    var Ce = y[x];
                    (Ce === b || Ce === m) && (y[x] = m,
                    ae[Q++] = x)
                }
                return ae
            }
            function Ar(y) {
                var b = -1
                  , x = Array(y.size);
                return y.forEach(function(M) {
                    x[++b] = M
                }),
                x
            }
            function bc(y) {
                var b = -1
                  , x = Array(y.size);
                return y.forEach(function(M) {
                    x[++b] = [M, M]
                }),
                x
            }
            function Sc(y, b, x) {
                for (var M = x - 1, Q = y.length; ++M < Q; )
                    if (y[M] === b)
                        return M;
                return -1
            }
            function Ac(y, b, x) {
                for (var M = x + 1; M--; )
                    if (y[M] === b)
                        return M;
                return M
            }
            function On(y) {
                return Rn(y) ? Tc(y) : lc(y)
            }
            function wt(y) {
                return Rn(y) ? Cc(y) : fc(y)
            }
            function ru(y) {
                for (var b = y.length; b-- && gf.test(y.charAt(b)); )
                    ;
                return b
            }
            var Ic = Qi(tc);
            function Tc(y) {
                for (var b = Hi.lastIndex = 0; Hi.test(y); )
                    ++b;
                return b
            }
            function Cc(y) {
                return y.match(Hi) || []
            }
            function Rc(y) {
                return y.match(Kf) || []
            }
            var Oc = function y(b) {
                b = b == null ? Oe : on.defaults(Oe.Object(), b, on.pick(Oe, Xf));
                var x = b.Array
                  , M = b.Date
                  , Q = b.Error
                  , ae = b.Function
                  , Ce = b.Math
                  , pe = b.Object
                  , to = b.RegExp
                  , Lc = b.String
                  , ft = b.TypeError
                  , Ir = x.prototype
                  , Fc = ae.prototype
                  , Ln = pe.prototype
                  , Tr = b["__core-js_shared__"]
                  , Cr = Fc.toString
                  , he = Ln.hasOwnProperty
                  , Nc = 0
                  , iu = function() {
                    var e = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }()
                  , Rr = Ln.toString
                  , Dc = Cr.call(pe)
                  , Bc = Oe._
                  , kc = to("^" + Cr.call(he).replace(Mi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                  , Or = Ws ? b.Buffer : i
                  , sn = b.Symbol
                  , Lr = b.Uint8Array
                  , ou = Or ? Or.allocUnsafe : i
                  , Fr = nu(pe.getPrototypeOf, pe)
                  , su = pe.create
                  , uu = Ln.propertyIsEnumerable
                  , Nr = Ir.splice
                  , au = sn ? sn.isConcatSpreadable : i
                  , Zn = sn ? sn.iterator : i
                  , pn = sn ? sn.toStringTag : i
                  , Dr = function() {
                    try {
                        var e = wn(pe, "defineProperty");
                        return e({}, "", {}),
                        e
                    } catch {}
                }()
                  , Mc = b.clearTimeout !== Oe.clearTimeout && b.clearTimeout
                  , Uc = M && M.now !== Oe.Date.now && M.now
                  , Pc = b.setTimeout !== Oe.setTimeout && b.setTimeout
                  , Br = Ce.ceil
                  , kr = Ce.floor
                  , no = pe.getOwnPropertySymbols
                  , $c = Or ? Or.isBuffer : i
                  , lu = b.isFinite
                  , Wc = Ir.join
                  , qc = nu(pe.keys, pe)
                  , Re = Ce.max
                  , Me = Ce.min
                  , Hc = M.now
                  , Yc = b.parseInt
                  , fu = Ce.random
                  , zc = Ir.reverse
                  , ro = wn(b, "DataView")
                  , jn = wn(b, "Map")
                  , io = wn(b, "Promise")
                  , Fn = wn(b, "Set")
                  , er = wn(b, "WeakMap")
                  , tr = wn(pe, "create")
                  , Mr = er && new er
                  , Nn = {}
                  , Jc = vn(ro)
                  , Gc = vn(jn)
                  , Kc = vn(io)
                  , Vc = vn(Fn)
                  , Qc = vn(er)
                  , Ur = sn ? sn.prototype : i
                  , nr = Ur ? Ur.valueOf : i
                  , cu = Ur ? Ur.toString : i;
                function h(e) {
                    if (be(e) && !X(e) && !(e instanceof oe)) {
                        if (e instanceof ct)
                            return e;
                        if (he.call(e, "__wrapped__"))
                            return ha(e)
                    }
                    return new ct(e)
                }
                var Dn = function() {
                    function e() {}
                    return function(t) {
                        if (!Ee(t))
                            return {};
                        if (su)
                            return su(t);
                        e.prototype = t;
                        var o = new e;
                        return e.prototype = i,
                        o
                    }
                }();
                function Pr() {}
                function ct(e, t) {
                    this.__wrapped__ = e,
                    this.__actions__ = [],
                    this.__chain__ = !!t,
                    this.__index__ = 0,
                    this.__values__ = i
                }
                h.templateSettings = {
                    escape: lf,
                    evaluate: ff,
                    interpolate: vs,
                    variable: "",
                    imports: {
                        _: h
                    }
                },
                h.prototype = Pr.prototype,
                h.prototype.constructor = h,
                ct.prototype = Dn(Pr.prototype),
                ct.prototype.constructor = ct;
                function oe(e) {
                    this.__wrapped__ = e,
                    this.__actions__ = [],
                    this.__dir__ = 1,
                    this.__filtered__ = !1,
                    this.__iteratees__ = [],
                    this.__takeCount__ = ce,
                    this.__views__ = []
                }
                function Xc() {
                    var e = new oe(this.__wrapped__);
                    return e.__actions__ = ze(this.__actions__),
                    e.__dir__ = this.__dir__,
                    e.__filtered__ = this.__filtered__,
                    e.__iteratees__ = ze(this.__iteratees__),
                    e.__takeCount__ = this.__takeCount__,
                    e.__views__ = ze(this.__views__),
                    e
                }
                function Zc() {
                    if (this.__filtered__) {
                        var e = new oe(this);
                        e.__dir__ = -1,
                        e.__filtered__ = !0
                    } else
                        e = this.clone(),
                        e.__dir__ *= -1;
                    return e
                }
                function jc() {
                    var e = this.__wrapped__.value()
                      , t = this.__dir__
                      , o = X(e)
                      , a = t < 0
                      , c = o ? e.length : 0
                      , d = cd(0, c, this.__views__)
                      , g = d.start
                      , _ = d.end
                      , w = _ - g
                      , A = a ? _ : g - 1
                      , I = this.__iteratees__
                      , C = I.length
                      , N = 0
                      , P = Me(w, this.__takeCount__);
                    if (!o || !a && c == w && P == w)
                        return Bu(e, this.__actions__);
                    var G = [];
                    e: for (; w-- && N < P; ) {
                        A += t;
                        for (var j = -1, K = e[A]; ++j < C; ) {
                            var re = I[j]
                              , se = re.iteratee
                              , rt = re.type
                              , We = se(K);
                            if (rt == Xt)
                                K = We;
                            else if (!We) {
                                if (rt == Qt)
                                    continue e;
                                break e
                            }
                        }
                        G[N++] = K
                    }
                    return G
                }
                oe.prototype = Dn(Pr.prototype),
                oe.prototype.constructor = oe;
                function gn(e) {
                    var t = -1
                      , o = e == null ? 0 : e.length;
                    for (this.clear(); ++t < o; ) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }
                function eh() {
                    this.__data__ = tr ? tr(null) : {},
                    this.size = 0
                }
                function th(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0,
                    t
                }
                function nh(e) {
                    var t = this.__data__;
                    if (tr) {
                        var o = t[e];
                        return o === f ? i : o
                    }
                    return he.call(t, e) ? t[e] : i
                }
                function rh(e) {
                    var t = this.__data__;
                    return tr ? t[e] !== i : he.call(t, e)
                }
                function ih(e, t) {
                    var o = this.__data__;
                    return this.size += this.has(e) ? 0 : 1,
                    o[e] = tr && t === i ? f : t,
                    this
                }
                gn.prototype.clear = eh,
                gn.prototype.delete = th,
                gn.prototype.get = nh,
                gn.prototype.has = rh,
                gn.prototype.set = ih;
                function kt(e) {
                    var t = -1
                      , o = e == null ? 0 : e.length;
                    for (this.clear(); ++t < o; ) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }
                function oh() {
                    this.__data__ = [],
                    this.size = 0
                }
                function sh(e) {
                    var t = this.__data__
                      , o = $r(t, e);
                    if (o < 0)
                        return !1;
                    var a = t.length - 1;
                    return o == a ? t.pop() : Nr.call(t, o, 1),
                    --this.size,
                    !0
                }
                function uh(e) {
                    var t = this.__data__
                      , o = $r(t, e);
                    return o < 0 ? i : t[o][1]
                }
                function ah(e) {
                    return $r(this.__data__, e) > -1
                }
                function lh(e, t) {
                    var o = this.__data__
                      , a = $r(o, e);
                    return a < 0 ? (++this.size,
                    o.push([e, t])) : o[a][1] = t,
                    this
                }
                kt.prototype.clear = oh,
                kt.prototype.delete = sh,
                kt.prototype.get = uh,
                kt.prototype.has = ah,
                kt.prototype.set = lh;
                function Mt(e) {
                    var t = -1
                      , o = e == null ? 0 : e.length;
                    for (this.clear(); ++t < o; ) {
                        var a = e[t];
                        this.set(a[0], a[1])
                    }
                }
                function fh() {
                    this.size = 0,
                    this.__data__ = {
                        hash: new gn,
                        map: new (jn || kt),
                        string: new gn
                    }
                }
                function ch(e) {
                    var t = Zr(this, e).delete(e);
                    return this.size -= t ? 1 : 0,
                    t
                }
                function hh(e) {
                    return Zr(this, e).get(e)
                }
                function dh(e) {
                    return Zr(this, e).has(e)
                }
                function ph(e, t) {
                    var o = Zr(this, e)
                      , a = o.size;
                    return o.set(e, t),
                    this.size += o.size == a ? 0 : 1,
                    this
                }
                Mt.prototype.clear = fh,
                Mt.prototype.delete = ch,
                Mt.prototype.get = hh,
                Mt.prototype.has = dh,
                Mt.prototype.set = ph;
                function _n(e) {
                    var t = -1
                      , o = e == null ? 0 : e.length;
                    for (this.__data__ = new Mt; ++t < o; )
                        this.add(e[t])
                }
                function gh(e) {
                    return this.__data__.set(e, f),
                    this
                }
                function _h(e) {
                    return this.__data__.has(e)
                }
                _n.prototype.add = _n.prototype.push = gh,
                _n.prototype.has = _h;
                function vt(e) {
                    var t = this.__data__ = new kt(e);
                    this.size = t.size
                }
                function mh() {
                    this.__data__ = new kt,
                    this.size = 0
                }
                function yh(e) {
                    var t = this.__data__
                      , o = t.delete(e);
                    return this.size = t.size,
                    o
                }
                function wh(e) {
                    return this.__data__.get(e)
                }
                function vh(e) {
                    return this.__data__.has(e)
                }
                function xh(e, t) {
                    var o = this.__data__;
                    if (o instanceof kt) {
                        var a = o.__data__;
                        if (!jn || a.length < r - 1)
                            return a.push([e, t]),
                            this.size = ++o.size,
                            this;
                        o = this.__data__ = new Mt(a)
                    }
                    return o.set(e, t),
                    this.size = o.size,
                    this
                }
                vt.prototype.clear = mh,
                vt.prototype.delete = yh,
                vt.prototype.get = wh,
                vt.prototype.has = vh,
                vt.prototype.set = xh;
                function hu(e, t) {
                    var o = X(e)
                      , a = !o && xn(e)
                      , c = !o && !a && cn(e)
                      , d = !o && !a && !c && Un(e)
                      , g = o || a || c || d
                      , _ = g ? Zi(e.length, Lc) : []
                      , w = _.length;
                    for (var A in e)
                        (t || he.call(e, A)) && !(g && (A == "length" || c && (A == "offset" || A == "parent") || d && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Wt(A, w))) && _.push(A);
                    return _
                }
                function du(e) {
                    var t = e.length;
                    return t ? e[_o(0, t - 1)] : i
                }
                function Eh(e, t) {
                    return jr(ze(e), mn(t, 0, e.length))
                }
                function bh(e) {
                    return jr(ze(e))
                }
                function oo(e, t, o) {
                    (o !== i && !xt(e[t], o) || o === i && !(t in e)) && Ut(e, t, o)
                }
                function rr(e, t, o) {
                    var a = e[t];
                    (!(he.call(e, t) && xt(a, o)) || o === i && !(t in e)) && Ut(e, t, o)
                }
                function $r(e, t) {
                    for (var o = e.length; o--; )
                        if (xt(e[o][0], t))
                            return o;
                    return -1
                }
                function Sh(e, t, o, a) {
                    return un(e, function(c, d, g) {
                        t(a, c, o(c), g)
                    }),
                    a
                }
                function pu(e, t) {
                    return e && Tt(t, Le(t), e)
                }
                function Ah(e, t) {
                    return e && Tt(t, Ge(t), e)
                }
                function Ut(e, t, o) {
                    t == "__proto__" && Dr ? Dr(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: o,
                        writable: !0
                    }) : e[t] = o
                }
                function so(e, t) {
                    for (var o = -1, a = t.length, c = x(a), d = e == null; ++o < a; )
                        c[o] = d ? i : Wo(e, t[o]);
                    return c
                }
                function mn(e, t, o) {
                    return e === e && (o !== i && (e = e <= o ? e : o),
                    t !== i && (e = e >= t ? e : t)),
                    e
                }
                function ht(e, t, o, a, c, d) {
                    var g, _ = t & v, w = t & E, A = t & S;
                    if (o && (g = c ? o(e, a, c, d) : o(e)),
                    g !== i)
                        return g;
                    if (!Ee(e))
                        return e;
                    var I = X(e);
                    if (I) {
                        if (g = dd(e),
                        !_)
                            return ze(e, g)
                    } else {
                        var C = Ue(e)
                          , N = C == hn || C == Ti;
                        if (cn(e))
                            return Uu(e, _);
                        if (C == ke || C == H || N && !c) {
                            if (g = w || N ? {} : ra(e),
                            !_)
                                return w ? nd(e, Ah(g, e)) : td(e, pu(g, e))
                        } else {
                            if (!_e[C])
                                return c ? e : {};
                            g = pd(e, C, _)
                        }
                    }
                    d || (d = new vt);
                    var P = d.get(e);
                    if (P)
                        return P;
                    d.set(e, g),
                    Fa(e) ? e.forEach(function(K) {
                        g.add(ht(K, t, o, K, e, d))
                    }) : Oa(e) && e.forEach(function(K, re) {
                        g.set(re, ht(K, t, o, re, e, d))
                    });
                    var G = A ? w ? To : Io : w ? Ge : Le
                      , j = I ? i : G(e);
                    return lt(j || e, function(K, re) {
                        j && (re = K,
                        K = e[re]),
                        rr(g, re, ht(K, t, o, re, e, d))
                    }),
                    g
                }
                function Ih(e) {
                    var t = Le(e);
                    return function(o) {
                        return gu(o, e, t)
                    }
                }
                function gu(e, t, o) {
                    var a = o.length;
                    if (e == null)
                        return !a;
                    for (e = pe(e); a--; ) {
                        var c = o[a]
                          , d = t[c]
                          , g = e[c];
                        if (g === i && !(c in e) || !d(g))
                            return !1
                    }
                    return !0
                }
                function _u(e, t, o) {
                    if (typeof e != "function")
                        throw new ft(u);
                    return fr(function() {
                        e.apply(i, o)
                    }, t)
                }
                function ir(e, t, o, a) {
                    var c = -1
                      , d = br
                      , g = !0
                      , _ = e.length
                      , w = []
                      , A = t.length;
                    if (!_)
                        return w;
                    o && (t = we(t, et(o))),
                    a ? (d = Ji,
                    g = !1) : t.length >= r && (d = Xn,
                    g = !1,
                    t = new _n(t));
                    e: for (; ++c < _; ) {
                        var I = e[c]
                          , C = o == null ? I : o(I);
                        if (I = a || I !== 0 ? I : 0,
                        g && C === C) {
                            for (var N = A; N--; )
                                if (t[N] === C)
                                    continue e;
                            w.push(I)
                        } else
                            d(t, C, a) || w.push(I)
                    }
                    return w
                }
                var un = Hu(It)
                  , mu = Hu(ao, !0);
                function Th(e, t) {
                    var o = !0;
                    return un(e, function(a, c, d) {
                        return o = !!t(a, c, d),
                        o
                    }),
                    o
                }
                function Wr(e, t, o) {
                    for (var a = -1, c = e.length; ++a < c; ) {
                        var d = e[a]
                          , g = t(d);
                        if (g != null && (_ === i ? g === g && !nt(g) : o(g, _)))
                            var _ = g
                              , w = d
                    }
                    return w
                }
                function Ch(e, t, o, a) {
                    var c = e.length;
                    for (o = Z(o),
                    o < 0 && (o = -o > c ? 0 : c + o),
                    a = a === i || a > c ? c : Z(a),
                    a < 0 && (a += c),
                    a = o > a ? 0 : Da(a); o < a; )
                        e[o++] = t;
                    return e
                }
                function yu(e, t) {
                    var o = [];
                    return un(e, function(a, c, d) {
                        t(a, c, d) && o.push(a)
                    }),
                    o
                }
                function De(e, t, o, a, c) {
                    var d = -1
                      , g = e.length;
                    for (o || (o = _d),
                    c || (c = []); ++d < g; ) {
                        var _ = e[d];
                        t > 0 && o(_) ? t > 1 ? De(_, t - 1, o, a, c) : nn(c, _) : a || (c[c.length] = _)
                    }
                    return c
                }
                var uo = Yu()
                  , wu = Yu(!0);
                function It(e, t) {
                    return e && uo(e, t, Le)
                }
                function ao(e, t) {
                    return e && wu(e, t, Le)
                }
                function qr(e, t) {
                    return tn(t, function(o) {
                        return qt(e[o])
                    })
                }
                function yn(e, t) {
                    t = ln(t, e);
                    for (var o = 0, a = t.length; e != null && o < a; )
                        e = e[Ct(t[o++])];
                    return o && o == a ? e : i
                }
                function vu(e, t, o) {
                    var a = t(e);
                    return X(e) ? a : nn(a, o(e))
                }
                function Pe(e) {
                    return e == null ? e === i ? tf : en : pn && pn in pe(e) ? fd(e) : bd(e)
                }
                function lo(e, t) {
                    return e > t
                }
                function Rh(e, t) {
                    return e != null && he.call(e, t)
                }
                function Oh(e, t) {
                    return e != null && t in pe(e)
                }
                function Lh(e, t, o) {
                    return e >= Me(t, o) && e < Re(t, o)
                }
                function fo(e, t, o) {
                    for (var a = o ? Ji : br, c = e[0].length, d = e.length, g = d, _ = x(d), w = 1 / 0, A = []; g--; ) {
                        var I = e[g];
                        g && t && (I = we(I, et(t))),
                        w = Me(I.length, w),
                        _[g] = !o && (t || c >= 120 && I.length >= 120) ? new _n(g && I) : i
                    }
                    I = e[0];
                    var C = -1
                      , N = _[0];
                    e: for (; ++C < c && A.length < w; ) {
                        var P = I[C]
                          , G = t ? t(P) : P;
                        if (P = o || P !== 0 ? P : 0,
                        !(N ? Xn(N, G) : a(A, G, o))) {
                            for (g = d; --g; ) {
                                var j = _[g];
                                if (!(j ? Xn(j, G) : a(e[g], G, o)))
                                    continue e
                            }
                            N && N.push(G),
                            A.push(P)
                        }
                    }
                    return A
                }
                function Fh(e, t, o, a) {
                    return It(e, function(c, d, g) {
                        t(a, o(c), d, g)
                    }),
                    a
                }
                function or(e, t, o) {
                    t = ln(t, e),
                    e = ua(e, t);
                    var a = e == null ? e : e[Ct(pt(t))];
                    return a == null ? i : je(a, e, o)
                }
                function xu(e) {
                    return be(e) && Pe(e) == H
                }
                function Nh(e) {
                    return be(e) && Pe(e) == Qn
                }
                function Dh(e) {
                    return be(e) && Pe(e) == Se
                }
                function sr(e, t, o, a, c) {
                    return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : Bh(e, t, o, a, sr, c)
                }
                function Bh(e, t, o, a, c, d) {
                    var g = X(e)
                      , _ = X(t)
                      , w = g ? J : Ue(e)
                      , A = _ ? J : Ue(t);
                    w = w == H ? ke : w,
                    A = A == H ? ke : A;
                    var I = w == ke
                      , C = A == ke
                      , N = w == A;
                    if (N && cn(e)) {
                        if (!cn(t))
                            return !1;
                        g = !0,
                        I = !1
                    }
                    if (N && !I)
                        return d || (d = new vt),
                        g || Un(e) ? ea(e, t, o, a, c, d) : ad(e, t, w, o, a, c, d);
                    if (!(o & F)) {
                        var P = I && he.call(e, "__wrapped__")
                          , G = C && he.call(t, "__wrapped__");
                        if (P || G) {
                            var j = P ? e.value() : e
                              , K = G ? t.value() : t;
                            return d || (d = new vt),
                            c(j, K, o, a, d)
                        }
                    }
                    return N ? (d || (d = new vt),
                    ld(e, t, o, a, c, d)) : !1
                }
                function kh(e) {
                    return be(e) && Ue(e) == Be
                }
                function co(e, t, o, a) {
                    var c = o.length
                      , d = c
                      , g = !a;
                    if (e == null)
                        return !d;
                    for (e = pe(e); c--; ) {
                        var _ = o[c];
                        if (g && _[2] ? _[1] !== e[_[0]] : !(_[0]in e))
                            return !1
                    }
                    for (; ++c < d; ) {
                        _ = o[c];
                        var w = _[0]
                          , A = e[w]
                          , I = _[1];
                        if (g && _[2]) {
                            if (A === i && !(w in e))
                                return !1
                        } else {
                            var C = new vt;
                            if (a)
                                var N = a(A, I, w, e, t, C);
                            if (!(N === i ? sr(I, A, F | k, a, C) : N))
                                return !1
                        }
                    }
                    return !0
                }
                function Eu(e) {
                    if (!Ee(e) || yd(e))
                        return !1;
                    var t = qt(e) ? kc : Af;
                    return t.test(vn(e))
                }
                function Mh(e) {
                    return be(e) && Pe(e) == ut
                }
                function Uh(e) {
                    return be(e) && Ue(e) == Ye
                }
                function Ph(e) {
                    return be(e) && oi(e.length) && !!ye[Pe(e)]
                }
                function bu(e) {
                    return typeof e == "function" ? e : e == null ? Ke : typeof e == "object" ? X(e) ? Iu(e[0], e[1]) : Au(e) : za(e)
                }
                function ho(e) {
                    if (!lr(e))
                        return qc(e);
                    var t = [];
                    for (var o in pe(e))
                        he.call(e, o) && o != "constructor" && t.push(o);
                    return t
                }
                function $h(e) {
                    if (!Ee(e))
                        return Ed(e);
                    var t = lr(e)
                      , o = [];
                    for (var a in e)
                        a == "constructor" && (t || !he.call(e, a)) || o.push(a);
                    return o
                }
                function po(e, t) {
                    return e < t
                }
                function Su(e, t) {
                    var o = -1
                      , a = Je(e) ? x(e.length) : [];
                    return un(e, function(c, d, g) {
                        a[++o] = t(c, d, g)
                    }),
                    a
                }
                function Au(e) {
                    var t = Ro(e);
                    return t.length == 1 && t[0][2] ? oa(t[0][0], t[0][1]) : function(o) {
                        return o === e || co(o, e, t)
                    }
                }
                function Iu(e, t) {
                    return Lo(e) && ia(t) ? oa(Ct(e), t) : function(o) {
                        var a = Wo(o, e);
                        return a === i && a === t ? qo(o, e) : sr(t, a, F | k)
                    }
                }
                function Hr(e, t, o, a, c) {
                    e !== t && uo(t, function(d, g) {
                        if (c || (c = new vt),
                        Ee(d))
                            Wh(e, t, g, o, Hr, a, c);
                        else {
                            var _ = a ? a(No(e, g), d, g + "", e, t, c) : i;
                            _ === i && (_ = d),
                            oo(e, g, _)
                        }
                    }, Ge)
                }
                function Wh(e, t, o, a, c, d, g) {
                    var _ = No(e, o)
                      , w = No(t, o)
                      , A = g.get(w);
                    if (A) {
                        oo(e, o, A);
                        return
                    }
                    var I = d ? d(_, w, o + "", e, t, g) : i
                      , C = I === i;
                    if (C) {
                        var N = X(w)
                          , P = !N && cn(w)
                          , G = !N && !P && Un(w);
                        I = w,
                        N || P || G ? X(_) ? I = _ : Ae(_) ? I = ze(_) : P ? (C = !1,
                        I = Uu(w, !0)) : G ? (C = !1,
                        I = Pu(w, !0)) : I = [] : cr(w) || xn(w) ? (I = _,
                        xn(_) ? I = Ba(_) : (!Ee(_) || qt(_)) && (I = ra(w))) : C = !1
                    }
                    C && (g.set(w, I),
                    c(I, w, a, d, g),
                    g.delete(w)),
                    oo(e, o, I)
                }
                function Tu(e, t) {
                    var o = e.length;
                    if (o)
                        return t += t < 0 ? o : 0,
                        Wt(t, o) ? e[t] : i
                }
                function Cu(e, t, o) {
                    t.length ? t = we(t, function(d) {
                        return X(d) ? function(g) {
                            return yn(g, d.length === 1 ? d[0] : d)
                        }
                        : d
                    }) : t = [Ke];
                    var a = -1;
                    t = we(t, et(Y()));
                    var c = Su(e, function(d, g, _) {
                        var w = we(t, function(A) {
                            return A(d)
                        });
                        return {
                            criteria: w,
                            index: ++a,
                            value: d
                        }
                    });
                    return pc(c, function(d, g) {
                        return ed(d, g, o)
                    })
                }
                function qh(e, t) {
                    return Ru(e, t, function(o, a) {
                        return qo(e, a)
                    })
                }
                function Ru(e, t, o) {
                    for (var a = -1, c = t.length, d = {}; ++a < c; ) {
                        var g = t[a]
                          , _ = yn(e, g);
                        o(_, g) && ur(d, ln(g, e), _)
                    }
                    return d
                }
                function Hh(e) {
                    return function(t) {
                        return yn(t, e)
                    }
                }
                function go(e, t, o, a) {
                    var c = a ? hc : Cn
                      , d = -1
                      , g = t.length
                      , _ = e;
                    for (e === t && (t = ze(t)),
                    o && (_ = we(e, et(o))); ++d < g; )
                        for (var w = 0, A = t[d], I = o ? o(A) : A; (w = c(_, I, w, a)) > -1; )
                            _ !== e && Nr.call(_, w, 1),
                            Nr.call(e, w, 1);
                    return e
                }
                function Ou(e, t) {
                    for (var o = e ? t.length : 0, a = o - 1; o--; ) {
                        var c = t[o];
                        if (o == a || c !== d) {
                            var d = c;
                            Wt(c) ? Nr.call(e, c, 1) : wo(e, c)
                        }
                    }
                    return e
                }
                function _o(e, t) {
                    return e + kr(fu() * (t - e + 1))
                }
                function Yh(e, t, o, a) {
                    for (var c = -1, d = Re(Br((t - e) / (o || 1)), 0), g = x(d); d--; )
                        g[a ? d : ++c] = e,
                        e += o;
                    return g
                }
                function mo(e, t) {
                    var o = "";
                    if (!e || t < 1 || t > W)
                        return o;
                    do
                        t % 2 && (o += e),
                        t = kr(t / 2),
                        t && (e += e);
                    while (t);
                    return o
                }
                function te(e, t) {
                    return Do(sa(e, t, Ke), e + "")
                }
                function zh(e) {
                    return du(Pn(e))
                }
                function Jh(e, t) {
                    var o = Pn(e);
                    return jr(o, mn(t, 0, o.length))
                }
                function ur(e, t, o, a) {
                    if (!Ee(e))
                        return e;
                    t = ln(t, e);
                    for (var c = -1, d = t.length, g = d - 1, _ = e; _ != null && ++c < d; ) {
                        var w = Ct(t[c])
                          , A = o;
                        if (w === "__proto__" || w === "constructor" || w === "prototype")
                            return e;
                        if (c != g) {
                            var I = _[w];
                            A = a ? a(I, w, _) : i,
                            A === i && (A = Ee(I) ? I : Wt(t[c + 1]) ? [] : {})
                        }
                        rr(_, w, A),
                        _ = _[w]
                    }
                    return e
                }
                var Lu = Mr ? function(e, t) {
                    return Mr.set(e, t),
                    e
                }
                : Ke
                  , Gh = Dr ? function(e, t) {
                    return Dr(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Yo(t),
                        writable: !0
                    })
                }
                : Ke;
                function Kh(e) {
                    return jr(Pn(e))
                }
                function dt(e, t, o) {
                    var a = -1
                      , c = e.length;
                    t < 0 && (t = -t > c ? 0 : c + t),
                    o = o > c ? c : o,
                    o < 0 && (o += c),
                    c = t > o ? 0 : o - t >>> 0,
                    t >>>= 0;
                    for (var d = x(c); ++a < c; )
                        d[a] = e[a + t];
                    return d
                }
                function Vh(e, t) {
                    var o;
                    return un(e, function(a, c, d) {
                        return o = t(a, c, d),
                        !o
                    }),
                    !!o
                }
                function Yr(e, t, o) {
                    var a = 0
                      , c = e == null ? a : e.length;
                    if (typeof t == "number" && t === t && c <= B) {
                        for (; a < c; ) {
                            var d = a + c >>> 1
                              , g = e[d];
                            g !== null && !nt(g) && (o ? g <= t : g < t) ? a = d + 1 : c = d
                        }
                        return c
                    }
                    return yo(e, t, Ke, o)
                }
                function yo(e, t, o, a) {
                    var c = 0
                      , d = e == null ? 0 : e.length;
                    if (d === 0)
                        return 0;
                    t = o(t);
                    for (var g = t !== t, _ = t === null, w = nt(t), A = t === i; c < d; ) {
                        var I = kr((c + d) / 2)
                          , C = o(e[I])
                          , N = C !== i
                          , P = C === null
                          , G = C === C
                          , j = nt(C);
                        if (g)
                            var K = a || G;
                        else
                            A ? K = G && (a || N) : _ ? K = G && N && (a || !P) : w ? K = G && N && !P && (a || !j) : P || j ? K = !1 : K = a ? C <= t : C < t;
                        K ? c = I + 1 : d = I
                    }
                    return Me(d, z)
                }
                function Fu(e, t) {
                    for (var o = -1, a = e.length, c = 0, d = []; ++o < a; ) {
                        var g = e[o]
                          , _ = t ? t(g) : g;
                        if (!o || !xt(_, w)) {
                            var w = _;
                            d[c++] = g === 0 ? 0 : g
                        }
                    }
                    return d
                }
                function Nu(e) {
                    return typeof e == "number" ? e : nt(e) ? ee : +e
                }
                function tt(e) {
                    if (typeof e == "string")
                        return e;
                    if (X(e))
                        return we(e, tt) + "";
                    if (nt(e))
                        return cu ? cu.call(e) : "";
                    var t = e + "";
                    return t == "0" && 1 / e == -O ? "-0" : t
                }
                function an(e, t, o) {
                    var a = -1
                      , c = br
                      , d = e.length
                      , g = !0
                      , _ = []
                      , w = _;
                    if (o)
                        g = !1,
                        c = Ji;
                    else if (d >= r) {
                        var A = t ? null : sd(e);
                        if (A)
                            return Ar(A);
                        g = !1,
                        c = Xn,
                        w = new _n
                    } else
                        w = t ? [] : _;
                    e: for (; ++a < d; ) {
                        var I = e[a]
                          , C = t ? t(I) : I;
                        if (I = o || I !== 0 ? I : 0,
                        g && C === C) {
                            for (var N = w.length; N--; )
                                if (w[N] === C)
                                    continue e;
                            t && w.push(C),
                            _.push(I)
                        } else
                            c(w, C, o) || (w !== _ && w.push(C),
                            _.push(I))
                    }
                    return _
                }
                function wo(e, t) {
                    return t = ln(t, e),
                    e = ua(e, t),
                    e == null || delete e[Ct(pt(t))]
                }
                function Du(e, t, o, a) {
                    return ur(e, t, o(yn(e, t)), a)
                }
                function zr(e, t, o, a) {
                    for (var c = e.length, d = a ? c : -1; (a ? d-- : ++d < c) && t(e[d], d, e); )
                        ;
                    return o ? dt(e, a ? 0 : d, a ? d + 1 : c) : dt(e, a ? d + 1 : 0, a ? c : d)
                }
                function Bu(e, t) {
                    var o = e;
                    return o instanceof oe && (o = o.value()),
                    Gi(t, function(a, c) {
                        return c.func.apply(c.thisArg, nn([a], c.args))
                    }, o)
                }
                function vo(e, t, o) {
                    var a = e.length;
                    if (a < 2)
                        return a ? an(e[0]) : [];
                    for (var c = -1, d = x(a); ++c < a; )
                        for (var g = e[c], _ = -1; ++_ < a; )
                            _ != c && (d[c] = ir(d[c] || g, e[_], t, o));
                    return an(De(d, 1), t, o)
                }
                function ku(e, t, o) {
                    for (var a = -1, c = e.length, d = t.length, g = {}; ++a < c; ) {
                        var _ = a < d ? t[a] : i;
                        o(g, e[a], _)
                    }
                    return g
                }
                function xo(e) {
                    return Ae(e) ? e : []
                }
                function Eo(e) {
                    return typeof e == "function" ? e : Ke
                }
                function ln(e, t) {
                    return X(e) ? e : Lo(e, t) ? [e] : ca(le(e))
                }
                var Qh = te;
                function fn(e, t, o) {
                    var a = e.length;
                    return o = o === i ? a : o,
                    !t && o >= a ? e : dt(e, t, o)
                }
                var Mu = Mc || function(e) {
                    return Oe.clearTimeout(e)
                }
                ;
                function Uu(e, t) {
                    if (t)
                        return e.slice();
                    var o = e.length
                      , a = ou ? ou(o) : new e.constructor(o);
                    return e.copy(a),
                    a
                }
                function bo(e) {
                    var t = new e.constructor(e.byteLength);
                    return new Lr(t).set(new Lr(e)),
                    t
                }
                function Xh(e, t) {
                    var o = t ? bo(e.buffer) : e.buffer;
                    return new e.constructor(o,e.byteOffset,e.byteLength)
                }
                function Zh(e) {
                    var t = new e.constructor(e.source,xs.exec(e));
                    return t.lastIndex = e.lastIndex,
                    t
                }
                function jh(e) {
                    return nr ? pe(nr.call(e)) : {}
                }
                function Pu(e, t) {
                    var o = t ? bo(e.buffer) : e.buffer;
                    return new e.constructor(o,e.byteOffset,e.length)
                }
                function $u(e, t) {
                    if (e !== t) {
                        var o = e !== i
                          , a = e === null
                          , c = e === e
                          , d = nt(e)
                          , g = t !== i
                          , _ = t === null
                          , w = t === t
                          , A = nt(t);
                        if (!_ && !A && !d && e > t || d && g && w && !_ && !A || a && g && w || !o && w || !c)
                            return 1;
                        if (!a && !d && !A && e < t || A && o && c && !a && !d || _ && o && c || !g && c || !w)
                            return -1
                    }
                    return 0
                }
                function ed(e, t, o) {
                    for (var a = -1, c = e.criteria, d = t.criteria, g = c.length, _ = o.length; ++a < g; ) {
                        var w = $u(c[a], d[a]);
                        if (w) {
                            if (a >= _)
                                return w;
                            var A = o[a];
                            return w * (A == "desc" ? -1 : 1)
                        }
                    }
                    return e.index - t.index
                }
                function Wu(e, t, o, a) {
                    for (var c = -1, d = e.length, g = o.length, _ = -1, w = t.length, A = Re(d - g, 0), I = x(w + A), C = !a; ++_ < w; )
                        I[_] = t[_];
                    for (; ++c < g; )
                        (C || c < d) && (I[o[c]] = e[c]);
                    for (; A--; )
                        I[_++] = e[c++];
                    return I
                }
                function qu(e, t, o, a) {
                    for (var c = -1, d = e.length, g = -1, _ = o.length, w = -1, A = t.length, I = Re(d - _, 0), C = x(I + A), N = !a; ++c < I; )
                        C[c] = e[c];
                    for (var P = c; ++w < A; )
                        C[P + w] = t[w];
                    for (; ++g < _; )
                        (N || c < d) && (C[P + o[g]] = e[c++]);
                    return C
                }
                function ze(e, t) {
                    var o = -1
                      , a = e.length;
                    for (t || (t = x(a)); ++o < a; )
                        t[o] = e[o];
                    return t
                }
                function Tt(e, t, o, a) {
                    var c = !o;
                    o || (o = {});
                    for (var d = -1, g = t.length; ++d < g; ) {
                        var _ = t[d]
                          , w = a ? a(o[_], e[_], _, o, e) : i;
                        w === i && (w = e[_]),
                        c ? Ut(o, _, w) : rr(o, _, w)
                    }
                    return o
                }
                function td(e, t) {
                    return Tt(e, Oo(e), t)
                }
                function nd(e, t) {
                    return Tt(e, ta(e), t)
                }
                function Jr(e, t) {
                    return function(o, a) {
                        var c = X(o) ? sc : Sh
                          , d = t ? t() : {};
                        return c(o, e, Y(a, 2), d)
                    }
                }
                function Bn(e) {
                    return te(function(t, o) {
                        var a = -1
                          , c = o.length
                          , d = c > 1 ? o[c - 1] : i
                          , g = c > 2 ? o[2] : i;
                        for (d = e.length > 3 && typeof d == "function" ? (c--,
                        d) : i,
                        g && $e(o[0], o[1], g) && (d = c < 3 ? i : d,
                        c = 1),
                        t = pe(t); ++a < c; ) {
                            var _ = o[a];
                            _ && e(t, _, a, d)
                        }
                        return t
                    })
                }
                function Hu(e, t) {
                    return function(o, a) {
                        if (o == null)
                            return o;
                        if (!Je(o))
                            return e(o, a);
                        for (var c = o.length, d = t ? c : -1, g = pe(o); (t ? d-- : ++d < c) && a(g[d], d, g) !== !1; )
                            ;
                        return o
                    }
                }
                function Yu(e) {
                    return function(t, o, a) {
                        for (var c = -1, d = pe(t), g = a(t), _ = g.length; _--; ) {
                            var w = g[e ? _ : ++c];
                            if (o(d[w], w, d) === !1)
                                break
                        }
                        return t
                    }
                }
                function rd(e, t, o) {
                    var a = t & D
                      , c = ar(e);
                    function d() {
                        var g = this && this !== Oe && this instanceof d ? c : e;
                        return g.apply(a ? o : this, arguments)
                    }
                    return d
                }
                function zu(e) {
                    return function(t) {
                        t = le(t);
                        var o = Rn(t) ? wt(t) : i
                          , a = o ? o[0] : t.charAt(0)
                          , c = o ? fn(o, 1).join("") : t.slice(1);
                        return a[e]() + c
                    }
                }
                function kn(e) {
                    return function(t) {
                        return Gi(Ha(qa(t).replace(Jf, "")), e, "")
                    }
                }
                function ar(e) {
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0],t[1]);
                        case 3:
                            return new e(t[0],t[1],t[2]);
                        case 4:
                            return new e(t[0],t[1],t[2],t[3]);
                        case 5:
                            return new e(t[0],t[1],t[2],t[3],t[4]);
                        case 6:
                            return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                        case 7:
                            return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                        }
                        var o = Dn(e.prototype)
                          , a = e.apply(o, t);
                        return Ee(a) ? a : o
                    }
                }
                function id(e, t, o) {
                    var a = ar(e);
                    function c() {
                        for (var d = arguments.length, g = x(d), _ = d, w = Mn(c); _--; )
                            g[_] = arguments[_];
                        var A = d < 3 && g[0] !== w && g[d - 1] !== w ? [] : rn(g, w);
                        if (d -= A.length,
                        d < o)
                            return Qu(e, t, Gr, c.placeholder, i, g, A, i, i, o - d);
                        var I = this && this !== Oe && this instanceof c ? a : e;
                        return je(I, this, g)
                    }
                    return c
                }
                function Ju(e) {
                    return function(t, o, a) {
                        var c = pe(t);
                        if (!Je(t)) {
                            var d = Y(o, 3);
                            t = Le(t),
                            o = function(_) {
                                return d(c[_], _, c)
                            }
                        }
                        var g = e(t, o, a);
                        return g > -1 ? c[d ? t[g] : g] : i
                    }
                }
                function Gu(e) {
                    return $t(function(t) {
                        var o = t.length
                          , a = o
                          , c = ct.prototype.thru;
                        for (e && t.reverse(); a--; ) {
                            var d = t[a];
                            if (typeof d != "function")
                                throw new ft(u);
                            if (c && !g && Xr(d) == "wrapper")
                                var g = new ct([],!0)
                        }
                        for (a = g ? a : o; ++a < o; ) {
                            d = t[a];
                            var _ = Xr(d)
                              , w = _ == "wrapper" ? Co(d) : i;
                            w && Fo(w[0]) && w[1] == (me | ie | fe | ve) && !w[4].length && w[9] == 1 ? g = g[Xr(w[0])].apply(g, w[3]) : g = d.length == 1 && Fo(d) ? g[_]() : g.thru(d)
                        }
                        return function() {
                            var A = arguments
                              , I = A[0];
                            if (g && A.length == 1 && X(I))
                                return g.plant(I).value();
                            for (var C = 0, N = o ? t[C].apply(this, A) : I; ++C < o; )
                                N = t[C].call(this, N);
                            return N
                        }
                    })
                }
                function Gr(e, t, o, a, c, d, g, _, w, A) {
                    var I = t & me
                      , C = t & D
                      , N = t & q
                      , P = t & (ie | ue)
                      , G = t & ot
                      , j = N ? i : ar(e);
                    function K() {
                        for (var re = arguments.length, se = x(re), rt = re; rt--; )
                            se[rt] = arguments[rt];
                        if (P)
                            var We = Mn(K)
                              , it = _c(se, We);
                        if (a && (se = Wu(se, a, c, P)),
                        d && (se = qu(se, d, g, P)),
                        re -= it,
                        P && re < A) {
                            var Ie = rn(se, We);
                            return Qu(e, t, Gr, K.placeholder, o, se, Ie, _, w, A - re)
                        }
                        var Et = C ? o : this
                          , Yt = N ? Et[e] : e;
                        return re = se.length,
                        _ ? se = Sd(se, _) : G && re > 1 && se.reverse(),
                        I && w < re && (se.length = w),
                        this && this !== Oe && this instanceof K && (Yt = j || ar(Yt)),
                        Yt.apply(Et, se)
                    }
                    return K
                }
                function Ku(e, t) {
                    return function(o, a) {
                        return Fh(o, e, t(a), {})
                    }
                }
                function Kr(e, t) {
                    return function(o, a) {
                        var c;
                        if (o === i && a === i)
                            return t;
                        if (o !== i && (c = o),
                        a !== i) {
                            if (c === i)
                                return a;
                            typeof o == "string" || typeof a == "string" ? (o = tt(o),
                            a = tt(a)) : (o = Nu(o),
                            a = Nu(a)),
                            c = e(o, a)
                        }
                        return c
                    }
                }
                function So(e) {
                    return $t(function(t) {
                        return t = we(t, et(Y())),
                        te(function(o) {
                            var a = this;
                            return e(t, function(c) {
                                return je(c, a, o)
                            })
                        })
                    })
                }
                function Vr(e, t) {
                    t = t === i ? " " : tt(t);
                    var o = t.length;
                    if (o < 2)
                        return o ? mo(t, e) : t;
                    var a = mo(t, Br(e / On(t)));
                    return Rn(t) ? fn(wt(a), 0, e).join("") : a.slice(0, e)
                }
                function od(e, t, o, a) {
                    var c = t & D
                      , d = ar(e);
                    function g() {
                        for (var _ = -1, w = arguments.length, A = -1, I = a.length, C = x(I + w), N = this && this !== Oe && this instanceof g ? d : e; ++A < I; )
                            C[A] = a[A];
                        for (; w--; )
                            C[A++] = arguments[++_];
                        return je(N, c ? o : this, C)
                    }
                    return g
                }
                function Vu(e) {
                    return function(t, o, a) {
                        return a && typeof a != "number" && $e(t, o, a) && (o = a = i),
                        t = Ht(t),
                        o === i ? (o = t,
                        t = 0) : o = Ht(o),
                        a = a === i ? t < o ? 1 : -1 : Ht(a),
                        Yh(t, o, a, e)
                    }
                }
                function Qr(e) {
                    return function(t, o) {
                        return typeof t == "string" && typeof o == "string" || (t = gt(t),
                        o = gt(o)),
                        e(t, o)
                    }
                }
                function Qu(e, t, o, a, c, d, g, _, w, A) {
                    var I = t & ie
                      , C = I ? g : i
                      , N = I ? i : g
                      , P = I ? d : i
                      , G = I ? i : d;
                    t |= I ? fe : ge,
                    t &= ~(I ? ge : fe),
                    t & de || (t &= ~(D | q));
                    var j = [e, t, c, P, C, G, N, _, w, A]
                      , K = o.apply(i, j);
                    return Fo(e) && aa(K, j),
                    K.placeholder = a,
                    la(K, e, t)
                }
                function Ao(e) {
                    var t = Ce[e];
                    return function(o, a) {
                        if (o = gt(o),
                        a = a == null ? 0 : Me(Z(a), 292),
                        a && lu(o)) {
                            var c = (le(o) + "e").split("e")
                              , d = t(c[0] + "e" + (+c[1] + a));
                            return c = (le(d) + "e").split("e"),
                            +(c[0] + "e" + (+c[1] - a))
                        }
                        return t(o)
                    }
                }
                var sd = Fn && 1 / Ar(new Fn([, -0]))[1] == O ? function(e) {
                    return new Fn(e)
                }
                : Go;
                function Xu(e) {
                    return function(t) {
                        var o = Ue(t);
                        return o == Be ? eo(t) : o == Ye ? bc(t) : gc(t, e(t))
                    }
                }
                function Pt(e, t, o, a, c, d, g, _) {
                    var w = t & q;
                    if (!w && typeof e != "function")
                        throw new ft(u);
                    var A = a ? a.length : 0;
                    if (A || (t &= ~(fe | ge),
                    a = c = i),
                    g = g === i ? g : Re(Z(g), 0),
                    _ = _ === i ? _ : Z(_),
                    A -= c ? c.length : 0,
                    t & ge) {
                        var I = a
                          , C = c;
                        a = c = i
                    }
                    var N = w ? i : Co(e)
                      , P = [e, t, o, a, c, I, C, d, g, _];
                    if (N && xd(P, N),
                    e = P[0],
                    t = P[1],
                    o = P[2],
                    a = P[3],
                    c = P[4],
                    _ = P[9] = P[9] === i ? w ? 0 : e.length : Re(P[9] - A, 0),
                    !_ && t & (ie | ue) && (t &= ~(ie | ue)),
                    !t || t == D)
                        var G = rd(e, t, o);
                    else
                        t == ie || t == ue ? G = id(e, t, _) : (t == fe || t == (D | fe)) && !c.length ? G = od(e, t, o, a) : G = Gr.apply(i, P);
                    var j = N ? Lu : aa;
                    return la(j(G, P), e, t)
                }
                function Zu(e, t, o, a) {
                    return e === i || xt(e, Ln[o]) && !he.call(a, o) ? t : e
                }
                function ju(e, t, o, a, c, d) {
                    return Ee(e) && Ee(t) && (d.set(t, e),
                    Hr(e, t, i, ju, d),
                    d.delete(t)),
                    e
                }
                function ud(e) {
                    return cr(e) ? i : e
                }
                function ea(e, t, o, a, c, d) {
                    var g = o & F
                      , _ = e.length
                      , w = t.length;
                    if (_ != w && !(g && w > _))
                        return !1;
                    var A = d.get(e)
                      , I = d.get(t);
                    if (A && I)
                        return A == t && I == e;
                    var C = -1
                      , N = !0
                      , P = o & k ? new _n : i;
                    for (d.set(e, t),
                    d.set(t, e); ++C < _; ) {
                        var G = e[C]
                          , j = t[C];
                        if (a)
                            var K = g ? a(j, G, C, t, e, d) : a(G, j, C, e, t, d);
                        if (K !== i) {
                            if (K)
                                continue;
                            N = !1;
                            break
                        }
                        if (P) {
                            if (!Ki(t, function(re, se) {
                                if (!Xn(P, se) && (G === re || c(G, re, o, a, d)))
                                    return P.push(se)
                            })) {
                                N = !1;
                                break
                            }
                        } else if (!(G === j || c(G, j, o, a, d))) {
                            N = !1;
                            break
                        }
                    }
                    return d.delete(e),
                    d.delete(t),
                    N
                }
                function ad(e, t, o, a, c, d, g) {
                    switch (o) {
                    case In:
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                            return !1;
                        e = e.buffer,
                        t = t.buffer;
                    case Qn:
                        return !(e.byteLength != t.byteLength || !d(new Lr(e), new Lr(t)));
                    case Te:
                    case Se:
                    case jt:
                        return xt(+e, +t);
                    case st:
                        return e.name == t.name && e.message == t.message;
                    case ut:
                    case Bt:
                        return e == t + "";
                    case Be:
                        var _ = eo;
                    case Ye:
                        var w = a & F;
                        if (_ || (_ = Ar),
                        e.size != t.size && !w)
                            return !1;
                        var A = g.get(e);
                        if (A)
                            return A == t;
                        a |= k,
                        g.set(e, t);
                        var I = ea(_(e), _(t), a, c, d, g);
                        return g.delete(e),
                        I;
                    case wr:
                        if (nr)
                            return nr.call(e) == nr.call(t)
                    }
                    return !1
                }
                function ld(e, t, o, a, c, d) {
                    var g = o & F
                      , _ = Io(e)
                      , w = _.length
                      , A = Io(t)
                      , I = A.length;
                    if (w != I && !g)
                        return !1;
                    for (var C = w; C--; ) {
                        var N = _[C];
                        if (!(g ? N in t : he.call(t, N)))
                            return !1
                    }
                    var P = d.get(e)
                      , G = d.get(t);
                    if (P && G)
                        return P == t && G == e;
                    var j = !0;
                    d.set(e, t),
                    d.set(t, e);
                    for (var K = g; ++C < w; ) {
                        N = _[C];
                        var re = e[N]
                          , se = t[N];
                        if (a)
                            var rt = g ? a(se, re, N, t, e, d) : a(re, se, N, e, t, d);
                        if (!(rt === i ? re === se || c(re, se, o, a, d) : rt)) {
                            j = !1;
                            break
                        }
                        K || (K = N == "constructor")
                    }
                    if (j && !K) {
                        var We = e.constructor
                          , it = t.constructor;
                        We != it && "constructor"in e && "constructor"in t && !(typeof We == "function" && We instanceof We && typeof it == "function" && it instanceof it) && (j = !1)
                    }
                    return d.delete(e),
                    d.delete(t),
                    j
                }
                function $t(e) {
                    return Do(sa(e, i, ga), e + "")
                }
                function Io(e) {
                    return vu(e, Le, Oo)
                }
                function To(e) {
                    return vu(e, Ge, ta)
                }
                var Co = Mr ? function(e) {
                    return Mr.get(e)
                }
                : Go;
                function Xr(e) {
                    for (var t = e.name + "", o = Nn[t], a = he.call(Nn, t) ? o.length : 0; a--; ) {
                        var c = o[a]
                          , d = c.func;
                        if (d == null || d == e)
                            return c.name
                    }
                    return t
                }
                function Mn(e) {
                    var t = he.call(h, "placeholder") ? h : e;
                    return t.placeholder
                }
                function Y() {
                    var e = h.iteratee || zo;
                    return e = e === zo ? bu : e,
                    arguments.length ? e(arguments[0], arguments[1]) : e
                }
                function Zr(e, t) {
                    var o = e.__data__;
                    return md(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map
                }
                function Ro(e) {
                    for (var t = Le(e), o = t.length; o--; ) {
                        var a = t[o]
                          , c = e[a];
                        t[o] = [a, c, ia(c)]
                    }
                    return t
                }
                function wn(e, t) {
                    var o = vc(e, t);
                    return Eu(o) ? o : i
                }
                function fd(e) {
                    var t = he.call(e, pn)
                      , o = e[pn];
                    try {
                        e[pn] = i;
                        var a = !0
                    } catch {}
                    var c = Rr.call(e);
                    return a && (t ? e[pn] = o : delete e[pn]),
                    c
                }
                var Oo = no ? function(e) {
                    return e == null ? [] : (e = pe(e),
                    tn(no(e), function(t) {
                        return uu.call(e, t)
                    }))
                }
                : Ko
                  , ta = no ? function(e) {
                    for (var t = []; e; )
                        nn(t, Oo(e)),
                        e = Fr(e);
                    return t
                }
                : Ko
                  , Ue = Pe;
                (ro && Ue(new ro(new ArrayBuffer(1))) != In || jn && Ue(new jn) != Be || io && Ue(io.resolve()) != Ze || Fn && Ue(new Fn) != Ye || er && Ue(new er) != Vn) && (Ue = function(e) {
                    var t = Pe(e)
                      , o = t == ke ? e.constructor : i
                      , a = o ? vn(o) : "";
                    if (a)
                        switch (a) {
                        case Jc:
                            return In;
                        case Gc:
                            return Be;
                        case Kc:
                            return Ze;
                        case Vc:
                            return Ye;
                        case Qc:
                            return Vn
                        }
                    return t
                }
                );
                function cd(e, t, o) {
                    for (var a = -1, c = o.length; ++a < c; ) {
                        var d = o[a]
                          , g = d.size;
                        switch (d.type) {
                        case "drop":
                            e += g;
                            break;
                        case "dropRight":
                            t -= g;
                            break;
                        case "take":
                            t = Me(t, e + g);
                            break;
                        case "takeRight":
                            e = Re(e, t - g);
                            break
                        }
                    }
                    return {
                        start: e,
                        end: t
                    }
                }
                function hd(e) {
                    var t = e.match(mf);
                    return t ? t[1].split(yf) : []
                }
                function na(e, t, o) {
                    t = ln(t, e);
                    for (var a = -1, c = t.length, d = !1; ++a < c; ) {
                        var g = Ct(t[a]);
                        if (!(d = e != null && o(e, g)))
                            break;
                        e = e[g]
                    }
                    return d || ++a != c ? d : (c = e == null ? 0 : e.length,
                    !!c && oi(c) && Wt(g, c) && (X(e) || xn(e)))
                }
                function dd(e) {
                    var t = e.length
                      , o = new e.constructor(t);
                    return t && typeof e[0] == "string" && he.call(e, "index") && (o.index = e.index,
                    o.input = e.input),
                    o
                }
                function ra(e) {
                    return typeof e.constructor == "function" && !lr(e) ? Dn(Fr(e)) : {}
                }
                function pd(e, t, o) {
                    var a = e.constructor;
                    switch (t) {
                    case Qn:
                        return bo(e);
                    case Te:
                    case Se:
                        return new a(+e);
                    case In:
                        return Xh(e, o);
                    case Ci:
                    case Ri:
                    case Oi:
                    case Li:
                    case Fi:
                    case Ni:
                    case Di:
                    case Bi:
                    case ki:
                        return Pu(e, o);
                    case Be:
                        return new a;
                    case jt:
                    case Bt:
                        return new a(e);
                    case ut:
                        return Zh(e);
                    case Ye:
                        return new a;
                    case wr:
                        return jh(e)
                    }
                }
                function gd(e, t) {
                    var o = t.length;
                    if (!o)
                        return e;
                    var a = o - 1;
                    return t[a] = (o > 1 ? "& " : "") + t[a],
                    t = t.join(o > 2 ? ", " : " "),
                    e.replace(_f, `{
/* [wrapped with ` + t + `] */
`)
                }
                function _d(e) {
                    return X(e) || xn(e) || !!(au && e && e[au])
                }
                function Wt(e, t) {
                    var o = typeof e;
                    return t = t ?? W,
                    !!t && (o == "number" || o != "symbol" && Tf.test(e)) && e > -1 && e % 1 == 0 && e < t
                }
                function $e(e, t, o) {
                    if (!Ee(o))
                        return !1;
                    var a = typeof t;
                    return (a == "number" ? Je(o) && Wt(t, o.length) : a == "string" && t in o) ? xt(o[t], e) : !1
                }
                function Lo(e, t) {
                    if (X(e))
                        return !1;
                    var o = typeof e;
                    return o == "number" || o == "symbol" || o == "boolean" || e == null || nt(e) ? !0 : hf.test(e) || !cf.test(e) || t != null && e in pe(t)
                }
                function md(e) {
                    var t = typeof e;
                    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
                }
                function Fo(e) {
                    var t = Xr(e)
                      , o = h[t];
                    if (typeof o != "function" || !(t in oe.prototype))
                        return !1;
                    if (e === o)
                        return !0;
                    var a = Co(o);
                    return !!a && e === a[0]
                }
                function yd(e) {
                    return !!iu && iu in e
                }
                var wd = Tr ? qt : Vo;
                function lr(e) {
                    var t = e && e.constructor
                      , o = typeof t == "function" && t.prototype || Ln;
                    return e === o
                }
                function ia(e) {
                    return e === e && !Ee(e)
                }
                function oa(e, t) {
                    return function(o) {
                        return o == null ? !1 : o[e] === t && (t !== i || e in pe(o))
                    }
                }
                function vd(e) {
                    var t = ri(e, function(a) {
                        return o.size === p && o.clear(),
                        a
                    })
                      , o = t.cache;
                    return t
                }
                function xd(e, t) {
                    var o = e[1]
                      , a = t[1]
                      , c = o | a
                      , d = c < (D | q | me)
                      , g = a == me && o == ie || a == me && o == ve && e[7].length <= t[8] || a == (me | ve) && t[7].length <= t[8] && o == ie;
                    if (!(d || g))
                        return e;
                    a & D && (e[2] = t[2],
                    c |= o & D ? 0 : de);
                    var _ = t[3];
                    if (_) {
                        var w = e[3];
                        e[3] = w ? Wu(w, _, t[4]) : _,
                        e[4] = w ? rn(e[3], m) : t[4]
                    }
                    return _ = t[5],
                    _ && (w = e[5],
                    e[5] = w ? qu(w, _, t[6]) : _,
                    e[6] = w ? rn(e[5], m) : t[6]),
                    _ = t[7],
                    _ && (e[7] = _),
                    a & me && (e[8] = e[8] == null ? t[8] : Me(e[8], t[8])),
                    e[9] == null && (e[9] = t[9]),
                    e[0] = t[0],
                    e[1] = c,
                    e
                }
                function Ed(e) {
                    var t = [];
                    if (e != null)
                        for (var o in pe(e))
                            t.push(o);
                    return t
                }
                function bd(e) {
                    return Rr.call(e)
                }
                function sa(e, t, o) {
                    return t = Re(t === i ? e.length - 1 : t, 0),
                    function() {
                        for (var a = arguments, c = -1, d = Re(a.length - t, 0), g = x(d); ++c < d; )
                            g[c] = a[t + c];
                        c = -1;
                        for (var _ = x(t + 1); ++c < t; )
                            _[c] = a[c];
                        return _[t] = o(g),
                        je(e, this, _)
                    }
                }
                function ua(e, t) {
                    return t.length < 2 ? e : yn(e, dt(t, 0, -1))
                }
                function Sd(e, t) {
                    for (var o = e.length, a = Me(t.length, o), c = ze(e); a--; ) {
                        var d = t[a];
                        e[a] = Wt(d, o) ? c[d] : i
                    }
                    return e
                }
                function No(e, t) {
                    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
                        return e[t]
                }
                var aa = fa(Lu)
                  , fr = Pc || function(e, t) {
                    return Oe.setTimeout(e, t)
                }
                  , Do = fa(Gh);
                function la(e, t, o) {
                    var a = t + "";
                    return Do(e, gd(a, Ad(hd(a), o)))
                }
                function fa(e) {
                    var t = 0
                      , o = 0;
                    return function() {
                        var a = Hc()
                          , c = Dt - (a - o);
                        if (o = a,
                        c > 0) {
                            if (++t >= Vt)
                                return arguments[0]
                        } else
                            t = 0;
                        return e.apply(i, arguments)
                    }
                }
                function jr(e, t) {
                    var o = -1
                      , a = e.length
                      , c = a - 1;
                    for (t = t === i ? a : t; ++o < t; ) {
                        var d = _o(o, c)
                          , g = e[d];
                        e[d] = e[o],
                        e[o] = g
                    }
                    return e.length = t,
                    e
                }
                var ca = vd(function(e) {
                    var t = [];
                    return e.charCodeAt(0) === 46 && t.push(""),
                    e.replace(df, function(o, a, c, d) {
                        t.push(c ? d.replace(xf, "$1") : a || o)
                    }),
                    t
                });
                function Ct(e) {
                    if (typeof e == "string" || nt(e))
                        return e;
                    var t = e + "";
                    return t == "0" && 1 / e == -O ? "-0" : t
                }
                function vn(e) {
                    if (e != null) {
                        try {
                            return Cr.call(e)
                        } catch {}
                        try {
                            return e + ""
                        } catch {}
                    }
                    return ""
                }
                function Ad(e, t) {
                    return lt(U, function(o) {
                        var a = "_." + o[0];
                        t & o[1] && !br(e, a) && e.push(a)
                    }),
                    e.sort()
                }
                function ha(e) {
                    if (e instanceof oe)
                        return e.clone();
                    var t = new ct(e.__wrapped__,e.__chain__);
                    return t.__actions__ = ze(e.__actions__),
                    t.__index__ = e.__index__,
                    t.__values__ = e.__values__,
                    t
                }
                function Id(e, t, o) {
                    (o ? $e(e, t, o) : t === i) ? t = 1 : t = Re(Z(t), 0);
                    var a = e == null ? 0 : e.length;
                    if (!a || t < 1)
                        return [];
                    for (var c = 0, d = 0, g = x(Br(a / t)); c < a; )
                        g[d++] = dt(e, c, c += t);
                    return g
                }
                function Td(e) {
                    for (var t = -1, o = e == null ? 0 : e.length, a = 0, c = []; ++t < o; ) {
                        var d = e[t];
                        d && (c[a++] = d)
                    }
                    return c
                }
                function Cd() {
                    var e = arguments.length;
                    if (!e)
                        return [];
                    for (var t = x(e - 1), o = arguments[0], a = e; a--; )
                        t[a - 1] = arguments[a];
                    return nn(X(o) ? ze(o) : [o], De(t, 1))
                }
                var Rd = te(function(e, t) {
                    return Ae(e) ? ir(e, De(t, 1, Ae, !0)) : []
                })
                  , Od = te(function(e, t) {
                    var o = pt(t);
                    return Ae(o) && (o = i),
                    Ae(e) ? ir(e, De(t, 1, Ae, !0), Y(o, 2)) : []
                })
                  , Ld = te(function(e, t) {
                    var o = pt(t);
                    return Ae(o) && (o = i),
                    Ae(e) ? ir(e, De(t, 1, Ae, !0), i, o) : []
                });
                function Fd(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    return a ? (t = o || t === i ? 1 : Z(t),
                    dt(e, t < 0 ? 0 : t, a)) : []
                }
                function Nd(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    return a ? (t = o || t === i ? 1 : Z(t),
                    t = a - t,
                    dt(e, 0, t < 0 ? 0 : t)) : []
                }
                function Dd(e, t) {
                    return e && e.length ? zr(e, Y(t, 3), !0, !0) : []
                }
                function Bd(e, t) {
                    return e && e.length ? zr(e, Y(t, 3), !0) : []
                }
                function kd(e, t, o, a) {
                    var c = e == null ? 0 : e.length;
                    return c ? (o && typeof o != "number" && $e(e, t, o) && (o = 0,
                    a = c),
                    Ch(e, t, o, a)) : []
                }
                function da(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    if (!a)
                        return -1;
                    var c = o == null ? 0 : Z(o);
                    return c < 0 && (c = Re(a + c, 0)),
                    Sr(e, Y(t, 3), c)
                }
                function pa(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    if (!a)
                        return -1;
                    var c = a - 1;
                    return o !== i && (c = Z(o),
                    c = o < 0 ? Re(a + c, 0) : Me(c, a - 1)),
                    Sr(e, Y(t, 3), c, !0)
                }
                function ga(e) {
                    var t = e == null ? 0 : e.length;
                    return t ? De(e, 1) : []
                }
                function Md(e) {
                    var t = e == null ? 0 : e.length;
                    return t ? De(e, O) : []
                }
                function Ud(e, t) {
                    var o = e == null ? 0 : e.length;
                    return o ? (t = t === i ? 1 : Z(t),
                    De(e, t)) : []
                }
                function Pd(e) {
                    for (var t = -1, o = e == null ? 0 : e.length, a = {}; ++t < o; ) {
                        var c = e[t];
                        a[c[0]] = c[1]
                    }
                    return a
                }
                function _a(e) {
                    return e && e.length ? e[0] : i
                }
                function $d(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    if (!a)
                        return -1;
                    var c = o == null ? 0 : Z(o);
                    return c < 0 && (c = Re(a + c, 0)),
                    Cn(e, t, c)
                }
                function Wd(e) {
                    var t = e == null ? 0 : e.length;
                    return t ? dt(e, 0, -1) : []
                }
                var qd = te(function(e) {
                    var t = we(e, xo);
                    return t.length && t[0] === e[0] ? fo(t) : []
                })
                  , Hd = te(function(e) {
                    var t = pt(e)
                      , o = we(e, xo);
                    return t === pt(o) ? t = i : o.pop(),
                    o.length && o[0] === e[0] ? fo(o, Y(t, 2)) : []
                })
                  , Yd = te(function(e) {
                    var t = pt(e)
                      , o = we(e, xo);
                    return t = typeof t == "function" ? t : i,
                    t && o.pop(),
                    o.length && o[0] === e[0] ? fo(o, i, t) : []
                });
                function zd(e, t) {
                    return e == null ? "" : Wc.call(e, t)
                }
                function pt(e) {
                    var t = e == null ? 0 : e.length;
                    return t ? e[t - 1] : i
                }
                function Jd(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    if (!a)
                        return -1;
                    var c = a;
                    return o !== i && (c = Z(o),
                    c = c < 0 ? Re(a + c, 0) : Me(c, a - 1)),
                    t === t ? Ac(e, t, c) : Sr(e, Qs, c, !0)
                }
                function Gd(e, t) {
                    return e && e.length ? Tu(e, Z(t)) : i
                }
                var Kd = te(ma);
                function ma(e, t) {
                    return e && e.length && t && t.length ? go(e, t) : e
                }
                function Vd(e, t, o) {
                    return e && e.length && t && t.length ? go(e, t, Y(o, 2)) : e
                }
                function Qd(e, t, o) {
                    return e && e.length && t && t.length ? go(e, t, i, o) : e
                }
                var Xd = $t(function(e, t) {
                    var o = e == null ? 0 : e.length
                      , a = so(e, t);
                    return Ou(e, we(t, function(c) {
                        return Wt(c, o) ? +c : c
                    }).sort($u)),
                    a
                });
                function Zd(e, t) {
                    var o = [];
                    if (!(e && e.length))
                        return o;
                    var a = -1
                      , c = []
                      , d = e.length;
                    for (t = Y(t, 3); ++a < d; ) {
                        var g = e[a];
                        t(g, a, e) && (o.push(g),
                        c.push(a))
                    }
                    return Ou(e, c),
                    o
                }
                function Bo(e) {
                    return e == null ? e : zc.call(e)
                }
                function jd(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    return a ? (o && typeof o != "number" && $e(e, t, o) ? (t = 0,
                    o = a) : (t = t == null ? 0 : Z(t),
                    o = o === i ? a : Z(o)),
                    dt(e, t, o)) : []
                }
                function ep(e, t) {
                    return Yr(e, t)
                }
                function tp(e, t, o) {
                    return yo(e, t, Y(o, 2))
                }
                function np(e, t) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var a = Yr(e, t);
                        if (a < o && xt(e[a], t))
                            return a
                    }
                    return -1
                }
                function rp(e, t) {
                    return Yr(e, t, !0)
                }
                function ip(e, t, o) {
                    return yo(e, t, Y(o, 2), !0)
                }
                function op(e, t) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var a = Yr(e, t, !0) - 1;
                        if (xt(e[a], t))
                            return a
                    }
                    return -1
                }
                function sp(e) {
                    return e && e.length ? Fu(e) : []
                }
                function up(e, t) {
                    return e && e.length ? Fu(e, Y(t, 2)) : []
                }
                function ap(e) {
                    var t = e == null ? 0 : e.length;
                    return t ? dt(e, 1, t) : []
                }
                function lp(e, t, o) {
                    return e && e.length ? (t = o || t === i ? 1 : Z(t),
                    dt(e, 0, t < 0 ? 0 : t)) : []
                }
                function fp(e, t, o) {
                    var a = e == null ? 0 : e.length;
                    return a ? (t = o || t === i ? 1 : Z(t),
                    t = a - t,
                    dt(e, t < 0 ? 0 : t, a)) : []
                }
                function cp(e, t) {
                    return e && e.length ? zr(e, Y(t, 3), !1, !0) : []
                }
                function hp(e, t) {
                    return e && e.length ? zr(e, Y(t, 3)) : []
                }
                var dp = te(function(e) {
                    return an(De(e, 1, Ae, !0))
                })
                  , pp = te(function(e) {
                    var t = pt(e);
                    return Ae(t) && (t = i),
                    an(De(e, 1, Ae, !0), Y(t, 2))
                })
                  , gp = te(function(e) {
                    var t = pt(e);
                    return t = typeof t == "function" ? t : i,
                    an(De(e, 1, Ae, !0), i, t)
                });
                function _p(e) {
                    return e && e.length ? an(e) : []
                }
                function mp(e, t) {
                    return e && e.length ? an(e, Y(t, 2)) : []
                }
                function yp(e, t) {
                    return t = typeof t == "function" ? t : i,
                    e && e.length ? an(e, i, t) : []
                }
                function ko(e) {
                    if (!(e && e.length))
                        return [];
                    var t = 0;
                    return e = tn(e, function(o) {
                        if (Ae(o))
                            return t = Re(o.length, t),
                            !0
                    }),
                    Zi(t, function(o) {
                        return we(e, Vi(o))
                    })
                }
                function ya(e, t) {
                    if (!(e && e.length))
                        return [];
                    var o = ko(e);
                    return t == null ? o : we(o, function(a) {
                        return je(t, i, a)
                    })
                }
                var wp = te(function(e, t) {
                    return Ae(e) ? ir(e, t) : []
                })
                  , vp = te(function(e) {
                    return vo(tn(e, Ae))
                })
                  , xp = te(function(e) {
                    var t = pt(e);
                    return Ae(t) && (t = i),
                    vo(tn(e, Ae), Y(t, 2))
                })
                  , Ep = te(function(e) {
                    var t = pt(e);
                    return t = typeof t == "function" ? t : i,
                    vo(tn(e, Ae), i, t)
                })
                  , bp = te(ko);
                function Sp(e, t) {
                    return ku(e || [], t || [], rr)
                }
                function Ap(e, t) {
                    return ku(e || [], t || [], ur)
                }
                var Ip = te(function(e) {
                    var t = e.length
                      , o = t > 1 ? e[t - 1] : i;
                    return o = typeof o == "function" ? (e.pop(),
                    o) : i,
                    ya(e, o)
                });
                function wa(e) {
                    var t = h(e);
                    return t.__chain__ = !0,
                    t
                }
                function Tp(e, t) {
                    return t(e),
                    e
                }
                function ei(e, t) {
                    return t(e)
                }
                var Cp = $t(function(e) {
                    var t = e.length
                      , o = t ? e[0] : 0
                      , a = this.__wrapped__
                      , c = function(d) {
                        return so(d, e)
                    };
                    return t > 1 || this.__actions__.length || !(a instanceof oe) || !Wt(o) ? this.thru(c) : (a = a.slice(o, +o + (t ? 1 : 0)),
                    a.__actions__.push({
                        func: ei,
                        args: [c],
                        thisArg: i
                    }),
                    new ct(a,this.__chain__).thru(function(d) {
                        return t && !d.length && d.push(i),
                        d
                    }))
                });
                function Rp() {
                    return wa(this)
                }
                function Op() {
                    return new ct(this.value(),this.__chain__)
                }
                function Lp() {
                    this.__values__ === i && (this.__values__ = Na(this.value()));
                    var e = this.__index__ >= this.__values__.length
                      , t = e ? i : this.__values__[this.__index__++];
                    return {
                        done: e,
                        value: t
                    }
                }
                function Fp() {
                    return this
                }
                function Np(e) {
                    for (var t, o = this; o instanceof Pr; ) {
                        var a = ha(o);
                        a.__index__ = 0,
                        a.__values__ = i,
                        t ? c.__wrapped__ = a : t = a;
                        var c = a;
                        o = o.__wrapped__
                    }
                    return c.__wrapped__ = e,
                    t
                }
                function Dp() {
                    var e = this.__wrapped__;
                    if (e instanceof oe) {
                        var t = e;
                        return this.__actions__.length && (t = new oe(this)),
                        t = t.reverse(),
                        t.__actions__.push({
                            func: ei,
                            args: [Bo],
                            thisArg: i
                        }),
                        new ct(t,this.__chain__)
                    }
                    return this.thru(Bo)
                }
                function Bp() {
                    return Bu(this.__wrapped__, this.__actions__)
                }
                var kp = Jr(function(e, t, o) {
                    he.call(e, o) ? ++e[o] : Ut(e, o, 1)
                });
                function Mp(e, t, o) {
                    var a = X(e) ? Ks : Th;
                    return o && $e(e, t, o) && (t = i),
                    a(e, Y(t, 3))
                }
                function Up(e, t) {
                    var o = X(e) ? tn : yu;
                    return o(e, Y(t, 3))
                }
                var Pp = Ju(da)
                  , $p = Ju(pa);
                function Wp(e, t) {
                    return De(ti(e, t), 1)
                }
                function qp(e, t) {
                    return De(ti(e, t), O)
                }
                function Hp(e, t, o) {
                    return o = o === i ? 1 : Z(o),
                    De(ti(e, t), o)
                }
                function va(e, t) {
                    var o = X(e) ? lt : un;
                    return o(e, Y(t, 3))
                }
                function xa(e, t) {
                    var o = X(e) ? uc : mu;
                    return o(e, Y(t, 3))
                }
                var Yp = Jr(function(e, t, o) {
                    he.call(e, o) ? e[o].push(t) : Ut(e, o, [t])
                });
                function zp(e, t, o, a) {
                    e = Je(e) ? e : Pn(e),
                    o = o && !a ? Z(o) : 0;
                    var c = e.length;
                    return o < 0 && (o = Re(c + o, 0)),
                    si(e) ? o <= c && e.indexOf(t, o) > -1 : !!c && Cn(e, t, o) > -1
                }
                var Jp = te(function(e, t, o) {
                    var a = -1
                      , c = typeof t == "function"
                      , d = Je(e) ? x(e.length) : [];
                    return un(e, function(g) {
                        d[++a] = c ? je(t, g, o) : or(g, t, o)
                    }),
                    d
                })
                  , Gp = Jr(function(e, t, o) {
                    Ut(e, o, t)
                });
                function ti(e, t) {
                    var o = X(e) ? we : Su;
                    return o(e, Y(t, 3))
                }
                function Kp(e, t, o, a) {
                    return e == null ? [] : (X(t) || (t = t == null ? [] : [t]),
                    o = a ? i : o,
                    X(o) || (o = o == null ? [] : [o]),
                    Cu(e, t, o))
                }
                var Vp = Jr(function(e, t, o) {
                    e[o ? 0 : 1].push(t)
                }, function() {
                    return [[], []]
                });
                function Qp(e, t, o) {
                    var a = X(e) ? Gi : Zs
                      , c = arguments.length < 3;
                    return a(e, Y(t, 4), o, c, un)
                }
                function Xp(e, t, o) {
                    var a = X(e) ? ac : Zs
                      , c = arguments.length < 3;
                    return a(e, Y(t, 4), o, c, mu)
                }
                function Zp(e, t) {
                    var o = X(e) ? tn : yu;
                    return o(e, ii(Y(t, 3)))
                }
                function jp(e) {
                    var t = X(e) ? du : zh;
                    return t(e)
                }
                function eg(e, t, o) {
                    (o ? $e(e, t, o) : t === i) ? t = 1 : t = Z(t);
                    var a = X(e) ? Eh : Jh;
                    return a(e, t)
                }
                function tg(e) {
                    var t = X(e) ? bh : Kh;
                    return t(e)
                }
                function ng(e) {
                    if (e == null)
                        return 0;
                    if (Je(e))
                        return si(e) ? On(e) : e.length;
                    var t = Ue(e);
                    return t == Be || t == Ye ? e.size : ho(e).length
                }
                function rg(e, t, o) {
                    var a = X(e) ? Ki : Vh;
                    return o && $e(e, t, o) && (t = i),
                    a(e, Y(t, 3))
                }
                var ig = te(function(e, t) {
                    if (e == null)
                        return [];
                    var o = t.length;
                    return o > 1 && $e(e, t[0], t[1]) ? t = [] : o > 2 && $e(t[0], t[1], t[2]) && (t = [t[0]]),
                    Cu(e, De(t, 1), [])
                })
                  , ni = Uc || function() {
                    return Oe.Date.now()
                }
                ;
                function og(e, t) {
                    if (typeof t != "function")
                        throw new ft(u);
                    return e = Z(e),
                    function() {
                        if (--e < 1)
                            return t.apply(this, arguments)
                    }
                }
                function Ea(e, t, o) {
                    return t = o ? i : t,
                    t = e && t == null ? e.length : t,
                    Pt(e, me, i, i, i, i, t)
                }
                function ba(e, t) {
                    var o;
                    if (typeof t != "function")
                        throw new ft(u);
                    return e = Z(e),
                    function() {
                        return --e > 0 && (o = t.apply(this, arguments)),
                        e <= 1 && (t = i),
                        o
                    }
                }
                var Mo = te(function(e, t, o) {
                    var a = D;
                    if (o.length) {
                        var c = rn(o, Mn(Mo));
                        a |= fe
                    }
                    return Pt(e, a, t, o, c)
                })
                  , Sa = te(function(e, t, o) {
                    var a = D | q;
                    if (o.length) {
                        var c = rn(o, Mn(Sa));
                        a |= fe
                    }
                    return Pt(t, a, e, o, c)
                });
                function Aa(e, t, o) {
                    t = o ? i : t;
                    var a = Pt(e, ie, i, i, i, i, i, t);
                    return a.placeholder = Aa.placeholder,
                    a
                }
                function Ia(e, t, o) {
                    t = o ? i : t;
                    var a = Pt(e, ue, i, i, i, i, i, t);
                    return a.placeholder = Ia.placeholder,
                    a
                }
                function Ta(e, t, o) {
                    var a, c, d, g, _, w, A = 0, I = !1, C = !1, N = !0;
                    if (typeof e != "function")
                        throw new ft(u);
                    t = gt(t) || 0,
                    Ee(o) && (I = !!o.leading,
                    C = "maxWait"in o,
                    d = C ? Re(gt(o.maxWait) || 0, t) : d,
                    N = "trailing"in o ? !!o.trailing : N);
                    function P(Ie) {
                        var Et = a
                          , Yt = c;
                        return a = c = i,
                        A = Ie,
                        g = e.apply(Yt, Et),
                        g
                    }
                    function G(Ie) {
                        return A = Ie,
                        _ = fr(re, t),
                        I ? P(Ie) : g
                    }
                    function j(Ie) {
                        var Et = Ie - w
                          , Yt = Ie - A
                          , Ja = t - Et;
                        return C ? Me(Ja, d - Yt) : Ja
                    }
                    function K(Ie) {
                        var Et = Ie - w
                          , Yt = Ie - A;
                        return w === i || Et >= t || Et < 0 || C && Yt >= d
                    }
                    function re() {
                        var Ie = ni();
                        if (K(Ie))
                            return se(Ie);
                        _ = fr(re, j(Ie))
                    }
                    function se(Ie) {
                        return _ = i,
                        N && a ? P(Ie) : (a = c = i,
                        g)
                    }
                    function rt() {
                        _ !== i && Mu(_),
                        A = 0,
                        a = w = c = _ = i
                    }
                    function We() {
                        return _ === i ? g : se(ni())
                    }
                    function it() {
                        var Ie = ni()
                          , Et = K(Ie);
                        if (a = arguments,
                        c = this,
                        w = Ie,
                        Et) {
                            if (_ === i)
                                return G(w);
                            if (C)
                                return Mu(_),
                                _ = fr(re, t),
                                P(w)
                        }
                        return _ === i && (_ = fr(re, t)),
                        g
                    }
                    return it.cancel = rt,
                    it.flush = We,
                    it
                }
                var sg = te(function(e, t) {
                    return _u(e, 1, t)
                })
                  , ug = te(function(e, t, o) {
                    return _u(e, gt(t) || 0, o)
                });
                function ag(e) {
                    return Pt(e, ot)
                }
                function ri(e, t) {
                    if (typeof e != "function" || t != null && typeof t != "function")
                        throw new ft(u);
                    var o = function() {
                        var a = arguments
                          , c = t ? t.apply(this, a) : a[0]
                          , d = o.cache;
                        if (d.has(c))
                            return d.get(c);
                        var g = e.apply(this, a);
                        return o.cache = d.set(c, g) || d,
                        g
                    };
                    return o.cache = new (ri.Cache || Mt),
                    o
                }
                ri.Cache = Mt;
                function ii(e) {
                    if (typeof e != "function")
                        throw new ft(u);
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }
                function lg(e) {
                    return ba(2, e)
                }
                var fg = Qh(function(e, t) {
                    t = t.length == 1 && X(t[0]) ? we(t[0], et(Y())) : we(De(t, 1), et(Y()));
                    var o = t.length;
                    return te(function(a) {
                        for (var c = -1, d = Me(a.length, o); ++c < d; )
                            a[c] = t[c].call(this, a[c]);
                        return je(e, this, a)
                    })
                })
                  , Uo = te(function(e, t) {
                    var o = rn(t, Mn(Uo));
                    return Pt(e, fe, i, t, o)
                })
                  , Ca = te(function(e, t) {
                    var o = rn(t, Mn(Ca));
                    return Pt(e, ge, i, t, o)
                })
                  , cg = $t(function(e, t) {
                    return Pt(e, ve, i, i, i, t)
                });
                function hg(e, t) {
                    if (typeof e != "function")
                        throw new ft(u);
                    return t = t === i ? t : Z(t),
                    te(e, t)
                }
                function dg(e, t) {
                    if (typeof e != "function")
                        throw new ft(u);
                    return t = t == null ? 0 : Re(Z(t), 0),
                    te(function(o) {
                        var a = o[t]
                          , c = fn(o, 0, t);
                        return a && nn(c, a),
                        je(e, this, c)
                    })
                }
                function pg(e, t, o) {
                    var a = !0
                      , c = !0;
                    if (typeof e != "function")
                        throw new ft(u);
                    return Ee(o) && (a = "leading"in o ? !!o.leading : a,
                    c = "trailing"in o ? !!o.trailing : c),
                    Ta(e, t, {
                        leading: a,
                        maxWait: t,
                        trailing: c
                    })
                }
                function gg(e) {
                    return Ea(e, 1)
                }
                function _g(e, t) {
                    return Uo(Eo(t), e)
                }
                function mg() {
                    if (!arguments.length)
                        return [];
                    var e = arguments[0];
                    return X(e) ? e : [e]
                }
                function yg(e) {
                    return ht(e, S)
                }
                function wg(e, t) {
                    return t = typeof t == "function" ? t : i,
                    ht(e, S, t)
                }
                function vg(e) {
                    return ht(e, v | S)
                }
                function xg(e, t) {
                    return t = typeof t == "function" ? t : i,
                    ht(e, v | S, t)
                }
                function Eg(e, t) {
                    return t == null || gu(e, t, Le(t))
                }
                function xt(e, t) {
                    return e === t || e !== e && t !== t
                }
                var bg = Qr(lo)
                  , Sg = Qr(function(e, t) {
                    return e >= t
                })
                  , xn = xu(function() {
                    return arguments
                }()) ? xu : function(e) {
                    return be(e) && he.call(e, "callee") && !uu.call(e, "callee")
                }
                  , X = x.isArray
                  , Ag = qs ? et(qs) : Nh;
                function Je(e) {
                    return e != null && oi(e.length) && !qt(e)
                }
                function Ae(e) {
                    return be(e) && Je(e)
                }
                function Ig(e) {
                    return e === !0 || e === !1 || be(e) && Pe(e) == Te
                }
                var cn = $c || Vo
                  , Tg = Hs ? et(Hs) : Dh;
                function Cg(e) {
                    return be(e) && e.nodeType === 1 && !cr(e)
                }
                function Rg(e) {
                    if (e == null)
                        return !0;
                    if (Je(e) && (X(e) || typeof e == "string" || typeof e.splice == "function" || cn(e) || Un(e) || xn(e)))
                        return !e.length;
                    var t = Ue(e);
                    if (t == Be || t == Ye)
                        return !e.size;
                    if (lr(e))
                        return !ho(e).length;
                    for (var o in e)
                        if (he.call(e, o))
                            return !1;
                    return !0
                }
                function Og(e, t) {
                    return sr(e, t)
                }
                function Lg(e, t, o) {
                    o = typeof o == "function" ? o : i;
                    var a = o ? o(e, t) : i;
                    return a === i ? sr(e, t, i, o) : !!a
                }
                function Po(e) {
                    if (!be(e))
                        return !1;
                    var t = Pe(e);
                    return t == st || t == Zt || typeof e.message == "string" && typeof e.name == "string" && !cr(e)
                }
                function Fg(e) {
                    return typeof e == "number" && lu(e)
                }
                function qt(e) {
                    if (!Ee(e))
                        return !1;
                    var t = Pe(e);
                    return t == hn || t == Ti || t == ne || t == At
                }
                function Ra(e) {
                    return typeof e == "number" && e == Z(e)
                }
                function oi(e) {
                    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= W
                }
                function Ee(e) {
                    var t = typeof e;
                    return e != null && (t == "object" || t == "function")
                }
                function be(e) {
                    return e != null && typeof e == "object"
                }
                var Oa = Ys ? et(Ys) : kh;
                function Ng(e, t) {
                    return e === t || co(e, t, Ro(t))
                }
                function Dg(e, t, o) {
                    return o = typeof o == "function" ? o : i,
                    co(e, t, Ro(t), o)
                }
                function Bg(e) {
                    return La(e) && e != +e
                }
                function kg(e) {
                    if (wd(e))
                        throw new Q(s);
                    return Eu(e)
                }
                function Mg(e) {
                    return e === null
                }
                function Ug(e) {
                    return e == null
                }
                function La(e) {
                    return typeof e == "number" || be(e) && Pe(e) == jt
                }
                function cr(e) {
                    if (!be(e) || Pe(e) != ke)
                        return !1;
                    var t = Fr(e);
                    if (t === null)
                        return !0;
                    var o = he.call(t, "constructor") && t.constructor;
                    return typeof o == "function" && o instanceof o && Cr.call(o) == Dc
                }
                var $o = zs ? et(zs) : Mh;
                function Pg(e) {
                    return Ra(e) && e >= -W && e <= W
                }
                var Fa = Js ? et(Js) : Uh;
                function si(e) {
                    return typeof e == "string" || !X(e) && be(e) && Pe(e) == Bt
                }
                function nt(e) {
                    return typeof e == "symbol" || be(e) && Pe(e) == wr
                }
                var Un = Gs ? et(Gs) : Ph;
                function $g(e) {
                    return e === i
                }
                function Wg(e) {
                    return be(e) && Ue(e) == Vn
                }
                function qg(e) {
                    return be(e) && Pe(e) == nf
                }
                var Hg = Qr(po)
                  , Yg = Qr(function(e, t) {
                    return e <= t
                });
                function Na(e) {
                    if (!e)
                        return [];
                    if (Je(e))
                        return si(e) ? wt(e) : ze(e);
                    if (Zn && e[Zn])
                        return Ec(e[Zn]());
                    var t = Ue(e)
                      , o = t == Be ? eo : t == Ye ? Ar : Pn;
                    return o(e)
                }
                function Ht(e) {
                    if (!e)
                        return e === 0 ? e : 0;
                    if (e = gt(e),
                    e === O || e === -O) {
                        var t = e < 0 ? -1 : 1;
                        return t * V
                    }
                    return e === e ? e : 0
                }
                function Z(e) {
                    var t = Ht(e)
                      , o = t % 1;
                    return t === t ? o ? t - o : t : 0
                }
                function Da(e) {
                    return e ? mn(Z(e), 0, ce) : 0
                }
                function gt(e) {
                    if (typeof e == "number")
                        return e;
                    if (nt(e))
                        return ee;
                    if (Ee(e)) {
                        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                        e = Ee(t) ? t + "" : t
                    }
                    if (typeof e != "string")
                        return e === 0 ? e : +e;
                    e = js(e);
                    var o = Sf.test(e);
                    return o || If.test(e) ? ic(e.slice(2), o ? 2 : 8) : bf.test(e) ? ee : +e
                }
                function Ba(e) {
                    return Tt(e, Ge(e))
                }
                function zg(e) {
                    return e ? mn(Z(e), -W, W) : e === 0 ? e : 0
                }
                function le(e) {
                    return e == null ? "" : tt(e)
                }
                var Jg = Bn(function(e, t) {
                    if (lr(t) || Je(t)) {
                        Tt(t, Le(t), e);
                        return
                    }
                    for (var o in t)
                        he.call(t, o) && rr(e, o, t[o])
                })
                  , ka = Bn(function(e, t) {
                    Tt(t, Ge(t), e)
                })
                  , ui = Bn(function(e, t, o, a) {
                    Tt(t, Ge(t), e, a)
                })
                  , Gg = Bn(function(e, t, o, a) {
                    Tt(t, Le(t), e, a)
                })
                  , Kg = $t(so);
                function Vg(e, t) {
                    var o = Dn(e);
                    return t == null ? o : pu(o, t)
                }
                var Qg = te(function(e, t) {
                    e = pe(e);
                    var o = -1
                      , a = t.length
                      , c = a > 2 ? t[2] : i;
                    for (c && $e(t[0], t[1], c) && (a = 1); ++o < a; )
                        for (var d = t[o], g = Ge(d), _ = -1, w = g.length; ++_ < w; ) {
                            var A = g[_]
                              , I = e[A];
                            (I === i || xt(I, Ln[A]) && !he.call(e, A)) && (e[A] = d[A])
                        }
                    return e
                })
                  , Xg = te(function(e) {
                    return e.push(i, ju),
                    je(Ma, i, e)
                });
                function Zg(e, t) {
                    return Vs(e, Y(t, 3), It)
                }
                function jg(e, t) {
                    return Vs(e, Y(t, 3), ao)
                }
                function e0(e, t) {
                    return e == null ? e : uo(e, Y(t, 3), Ge)
                }
                function t0(e, t) {
                    return e == null ? e : wu(e, Y(t, 3), Ge)
                }
                function n0(e, t) {
                    return e && It(e, Y(t, 3))
                }
                function r0(e, t) {
                    return e && ao(e, Y(t, 3))
                }
                function i0(e) {
                    return e == null ? [] : qr(e, Le(e))
                }
                function o0(e) {
                    return e == null ? [] : qr(e, Ge(e))
                }
                function Wo(e, t, o) {
                    var a = e == null ? i : yn(e, t);
                    return a === i ? o : a
                }
                function s0(e, t) {
                    return e != null && na(e, t, Rh)
                }
                function qo(e, t) {
                    return e != null && na(e, t, Oh)
                }
                var u0 = Ku(function(e, t, o) {
                    t != null && typeof t.toString != "function" && (t = Rr.call(t)),
                    e[t] = o
                }, Yo(Ke))
                  , a0 = Ku(function(e, t, o) {
                    t != null && typeof t.toString != "function" && (t = Rr.call(t)),
                    he.call(e, t) ? e[t].push(o) : e[t] = [o]
                }, Y)
                  , l0 = te(or);
                function Le(e) {
                    return Je(e) ? hu(e) : ho(e)
                }
                function Ge(e) {
                    return Je(e) ? hu(e, !0) : $h(e)
                }
                function f0(e, t) {
                    var o = {};
                    return t = Y(t, 3),
                    It(e, function(a, c, d) {
                        Ut(o, t(a, c, d), a)
                    }),
                    o
                }
                function c0(e, t) {
                    var o = {};
                    return t = Y(t, 3),
                    It(e, function(a, c, d) {
                        Ut(o, c, t(a, c, d))
                    }),
                    o
                }
                var h0 = Bn(function(e, t, o) {
                    Hr(e, t, o)
                })
                  , Ma = Bn(function(e, t, o, a) {
                    Hr(e, t, o, a)
                })
                  , d0 = $t(function(e, t) {
                    var o = {};
                    if (e == null)
                        return o;
                    var a = !1;
                    t = we(t, function(d) {
                        return d = ln(d, e),
                        a || (a = d.length > 1),
                        d
                    }),
                    Tt(e, To(e), o),
                    a && (o = ht(o, v | E | S, ud));
                    for (var c = t.length; c--; )
                        wo(o, t[c]);
                    return o
                });
                function p0(e, t) {
                    return Ua(e, ii(Y(t)))
                }
                var g0 = $t(function(e, t) {
                    return e == null ? {} : qh(e, t)
                });
                function Ua(e, t) {
                    if (e == null)
                        return {};
                    var o = we(To(e), function(a) {
                        return [a]
                    });
                    return t = Y(t),
                    Ru(e, o, function(a, c) {
                        return t(a, c[0])
                    })
                }
                function _0(e, t, o) {
                    t = ln(t, e);
                    var a = -1
                      , c = t.length;
                    for (c || (c = 1,
                    e = i); ++a < c; ) {
                        var d = e == null ? i : e[Ct(t[a])];
                        d === i && (a = c,
                        d = o),
                        e = qt(d) ? d.call(e) : d
                    }
                    return e
                }
                function m0(e, t, o) {
                    return e == null ? e : ur(e, t, o)
                }
                function y0(e, t, o, a) {
                    return a = typeof a == "function" ? a : i,
                    e == null ? e : ur(e, t, o, a)
                }
                var Pa = Xu(Le)
                  , $a = Xu(Ge);
                function w0(e, t, o) {
                    var a = X(e)
                      , c = a || cn(e) || Un(e);
                    if (t = Y(t, 4),
                    o == null) {
                        var d = e && e.constructor;
                        c ? o = a ? new d : [] : Ee(e) ? o = qt(d) ? Dn(Fr(e)) : {} : o = {}
                    }
                    return (c ? lt : It)(e, function(g, _, w) {
                        return t(o, g, _, w)
                    }),
                    o
                }
                function v0(e, t) {
                    return e == null ? !0 : wo(e, t)
                }
                function x0(e, t, o) {
                    return e == null ? e : Du(e, t, Eo(o))
                }
                function E0(e, t, o, a) {
                    return a = typeof a == "function" ? a : i,
                    e == null ? e : Du(e, t, Eo(o), a)
                }
                function Pn(e) {
                    return e == null ? [] : ji(e, Le(e))
                }
                function b0(e) {
                    return e == null ? [] : ji(e, Ge(e))
                }
                function S0(e, t, o) {
                    return o === i && (o = t,
                    t = i),
                    o !== i && (o = gt(o),
                    o = o === o ? o : 0),
                    t !== i && (t = gt(t),
                    t = t === t ? t : 0),
                    mn(gt(e), t, o)
                }
                function A0(e, t, o) {
                    return t = Ht(t),
                    o === i ? (o = t,
                    t = 0) : o = Ht(o),
                    e = gt(e),
                    Lh(e, t, o)
                }
                function I0(e, t, o) {
                    if (o && typeof o != "boolean" && $e(e, t, o) && (t = o = i),
                    o === i && (typeof t == "boolean" ? (o = t,
                    t = i) : typeof e == "boolean" && (o = e,
                    e = i)),
                    e === i && t === i ? (e = 0,
                    t = 1) : (e = Ht(e),
                    t === i ? (t = e,
                    e = 0) : t = Ht(t)),
                    e > t) {
                        var a = e;
                        e = t,
                        t = a
                    }
                    if (o || e % 1 || t % 1) {
                        var c = fu();
                        return Me(e + c * (t - e + rc("1e-" + ((c + "").length - 1))), t)
                    }
                    return _o(e, t)
                }
                var T0 = kn(function(e, t, o) {
                    return t = t.toLowerCase(),
                    e + (o ? Wa(t) : t)
                });
                function Wa(e) {
                    return Ho(le(e).toLowerCase())
                }
                function qa(e) {
                    return e = le(e),
                    e && e.replace(Cf, mc).replace(Gf, "")
                }
                function C0(e, t, o) {
                    e = le(e),
                    t = tt(t);
                    var a = e.length;
                    o = o === i ? a : mn(Z(o), 0, a);
                    var c = o;
                    return o -= t.length,
                    o >= 0 && e.slice(o, c) == t
                }
                function R0(e) {
                    return e = le(e),
                    e && af.test(e) ? e.replace(ws, yc) : e
                }
                function O0(e) {
                    return e = le(e),
                    e && pf.test(e) ? e.replace(Mi, "\\$&") : e
                }
                var L0 = kn(function(e, t, o) {
                    return e + (o ? "-" : "") + t.toLowerCase()
                })
                  , F0 = kn(function(e, t, o) {
                    return e + (o ? " " : "") + t.toLowerCase()
                })
                  , N0 = zu("toLowerCase");
                function D0(e, t, o) {
                    e = le(e),
                    t = Z(t);
                    var a = t ? On(e) : 0;
                    if (!t || a >= t)
                        return e;
                    var c = (t - a) / 2;
                    return Vr(kr(c), o) + e + Vr(Br(c), o)
                }
                function B0(e, t, o) {
                    e = le(e),
                    t = Z(t);
                    var a = t ? On(e) : 0;
                    return t && a < t ? e + Vr(t - a, o) : e
                }
                function k0(e, t, o) {
                    e = le(e),
                    t = Z(t);
                    var a = t ? On(e) : 0;
                    return t && a < t ? Vr(t - a, o) + e : e
                }
                function M0(e, t, o) {
                    return o || t == null ? t = 0 : t && (t = +t),
                    Yc(le(e).replace(Ui, ""), t || 0)
                }
                function U0(e, t, o) {
                    return (o ? $e(e, t, o) : t === i) ? t = 1 : t = Z(t),
                    mo(le(e), t)
                }
                function P0() {
                    var e = arguments
                      , t = le(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }
                var $0 = kn(function(e, t, o) {
                    return e + (o ? "_" : "") + t.toLowerCase()
                });
                function W0(e, t, o) {
                    return o && typeof o != "number" && $e(e, t, o) && (t = o = i),
                    o = o === i ? ce : o >>> 0,
                    o ? (e = le(e),
                    e && (typeof t == "string" || t != null && !$o(t)) && (t = tt(t),
                    !t && Rn(e)) ? fn(wt(e), 0, o) : e.split(t, o)) : []
                }
                var q0 = kn(function(e, t, o) {
                    return e + (o ? " " : "") + Ho(t)
                });
                function H0(e, t, o) {
                    return e = le(e),
                    o = o == null ? 0 : mn(Z(o), 0, e.length),
                    t = tt(t),
                    e.slice(o, o + t.length) == t
                }
                function Y0(e, t, o) {
                    var a = h.templateSettings;
                    o && $e(e, t, o) && (t = i),
                    e = le(e),
                    t = ui({}, t, a, Zu);
                    var c = ui({}, t.imports, a.imports, Zu), d = Le(c), g = ji(c, d), _, w, A = 0, I = t.interpolate || vr, C = "__p += '", N = to((t.escape || vr).source + "|" + I.source + "|" + (I === vs ? Ef : vr).source + "|" + (t.evaluate || vr).source + "|$", "g"), P = "//# sourceURL=" + (he.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zf + "]") + `
`;
                    e.replace(N, function(K, re, se, rt, We, it) {
                        return se || (se = rt),
                        C += e.slice(A, it).replace(Rf, wc),
                        re && (_ = !0,
                        C += `' +
__e(` + re + `) +
'`),
                        We && (w = !0,
                        C += `';
` + We + `;
__p += '`),
                        se && (C += `' +
((__t = (` + se + `)) == null ? '' : __t) +
'`),
                        A = it + K.length,
                        K
                    }),
                    C += `';
`;
                    var G = he.call(t, "variable") && t.variable;
                    if (!G)
                        C = `with (obj) {
` + C + `
}
`;
                    else if (vf.test(G))
                        throw new Q(l);
                    C = (w ? C.replace(rf, "") : C).replace(of, "$1").replace(sf, "$1;"),
                    C = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + C + `return __p
}`;
                    var j = Ya(function() {
                        return ae(d, P + "return " + C).apply(i, g)
                    });
                    if (j.source = C,
                    Po(j))
                        throw j;
                    return j
                }
                function z0(e) {
                    return le(e).toLowerCase()
                }
                function J0(e) {
                    return le(e).toUpperCase()
                }
                function G0(e, t, o) {
                    if (e = le(e),
                    e && (o || t === i))
                        return js(e);
                    if (!e || !(t = tt(t)))
                        return e;
                    var a = wt(e)
                      , c = wt(t)
                      , d = eu(a, c)
                      , g = tu(a, c) + 1;
                    return fn(a, d, g).join("")
                }
                function K0(e, t, o) {
                    if (e = le(e),
                    e && (o || t === i))
                        return e.slice(0, ru(e) + 1);
                    if (!e || !(t = tt(t)))
                        return e;
                    var a = wt(e)
                      , c = tu(a, wt(t)) + 1;
                    return fn(a, 0, c).join("")
                }
                function V0(e, t, o) {
                    if (e = le(e),
                    e && (o || t === i))
                        return e.replace(Ui, "");
                    if (!e || !(t = tt(t)))
                        return e;
                    var a = wt(e)
                      , c = eu(a, wt(t));
                    return fn(a, c).join("")
                }
                function Q0(e, t) {
                    var o = xe
                      , a = Kt;
                    if (Ee(t)) {
                        var c = "separator"in t ? t.separator : c;
                        o = "length"in t ? Z(t.length) : o,
                        a = "omission"in t ? tt(t.omission) : a
                    }
                    e = le(e);
                    var d = e.length;
                    if (Rn(e)) {
                        var g = wt(e);
                        d = g.length
                    }
                    if (o >= d)
                        return e;
                    var _ = o - On(a);
                    if (_ < 1)
                        return a;
                    var w = g ? fn(g, 0, _).join("") : e.slice(0, _);
                    if (c === i)
                        return w + a;
                    if (g && (_ += w.length - _),
                    $o(c)) {
                        if (e.slice(_).search(c)) {
                            var A, I = w;
                            for (c.global || (c = to(c.source, le(xs.exec(c)) + "g")),
                            c.lastIndex = 0; A = c.exec(I); )
                                var C = A.index;
                            w = w.slice(0, C === i ? _ : C)
                        }
                    } else if (e.indexOf(tt(c), _) != _) {
                        var N = w.lastIndexOf(c);
                        N > -1 && (w = w.slice(0, N))
                    }
                    return w + a
                }
                function X0(e) {
                    return e = le(e),
                    e && uf.test(e) ? e.replace(ys, Ic) : e
                }
                var Z0 = kn(function(e, t, o) {
                    return e + (o ? " " : "") + t.toUpperCase()
                })
                  , Ho = zu("toUpperCase");
                function Ha(e, t, o) {
                    return e = le(e),
                    t = o ? i : t,
                    t === i ? xc(e) ? Rc(e) : cc(e) : e.match(t) || []
                }
                var Ya = te(function(e, t) {
                    try {
                        return je(e, i, t)
                    } catch (o) {
                        return Po(o) ? o : new Q(o)
                    }
                })
                  , j0 = $t(function(e, t) {
                    return lt(t, function(o) {
                        o = Ct(o),
                        Ut(e, o, Mo(e[o], e))
                    }),
                    e
                });
                function e_(e) {
                    var t = e == null ? 0 : e.length
                      , o = Y();
                    return e = t ? we(e, function(a) {
                        if (typeof a[1] != "function")
                            throw new ft(u);
                        return [o(a[0]), a[1]]
                    }) : [],
                    te(function(a) {
                        for (var c = -1; ++c < t; ) {
                            var d = e[c];
                            if (je(d[0], this, a))
                                return je(d[1], this, a)
                        }
                    })
                }
                function t_(e) {
                    return Ih(ht(e, v))
                }
                function Yo(e) {
                    return function() {
                        return e
                    }
                }
                function n_(e, t) {
                    return e == null || e !== e ? t : e
                }
                var r_ = Gu()
                  , i_ = Gu(!0);
                function Ke(e) {
                    return e
                }
                function zo(e) {
                    return bu(typeof e == "function" ? e : ht(e, v))
                }
                function o_(e) {
                    return Au(ht(e, v))
                }
                function s_(e, t) {
                    return Iu(e, ht(t, v))
                }
                var u_ = te(function(e, t) {
                    return function(o) {
                        return or(o, e, t)
                    }
                })
                  , a_ = te(function(e, t) {
                    return function(o) {
                        return or(e, o, t)
                    }
                });
                function Jo(e, t, o) {
                    var a = Le(t)
                      , c = qr(t, a);
                    o == null && !(Ee(t) && (c.length || !a.length)) && (o = t,
                    t = e,
                    e = this,
                    c = qr(t, Le(t)));
                    var d = !(Ee(o) && "chain"in o) || !!o.chain
                      , g = qt(e);
                    return lt(c, function(_) {
                        var w = t[_];
                        e[_] = w,
                        g && (e.prototype[_] = function() {
                            var A = this.__chain__;
                            if (d || A) {
                                var I = e(this.__wrapped__)
                                  , C = I.__actions__ = ze(this.__actions__);
                                return C.push({
                                    func: w,
                                    args: arguments,
                                    thisArg: e
                                }),
                                I.__chain__ = A,
                                I
                            }
                            return w.apply(e, nn([this.value()], arguments))
                        }
                        )
                    }),
                    e
                }
                function l_() {
                    return Oe._ === this && (Oe._ = Bc),
                    this
                }
                function Go() {}
                function f_(e) {
                    return e = Z(e),
                    te(function(t) {
                        return Tu(t, e)
                    })
                }
                var c_ = So(we)
                  , h_ = So(Ks)
                  , d_ = So(Ki);
                function za(e) {
                    return Lo(e) ? Vi(Ct(e)) : Hh(e)
                }
                function p_(e) {
                    return function(t) {
                        return e == null ? i : yn(e, t)
                    }
                }
                var g_ = Vu()
                  , __ = Vu(!0);
                function Ko() {
                    return []
                }
                function Vo() {
                    return !1
                }
                function m_() {
                    return {}
                }
                function y_() {
                    return ""
                }
                function w_() {
                    return !0
                }
                function v_(e, t) {
                    if (e = Z(e),
                    e < 1 || e > W)
                        return [];
                    var o = ce
                      , a = Me(e, ce);
                    t = Y(t),
                    e -= ce;
                    for (var c = Zi(a, t); ++o < e; )
                        t(o);
                    return c
                }
                function x_(e) {
                    return X(e) ? we(e, Ct) : nt(e) ? [e] : ze(ca(le(e)))
                }
                function E_(e) {
                    var t = ++Nc;
                    return le(e) + t
                }
                var b_ = Kr(function(e, t) {
                    return e + t
                }, 0)
                  , S_ = Ao("ceil")
                  , A_ = Kr(function(e, t) {
                    return e / t
                }, 1)
                  , I_ = Ao("floor");
                function T_(e) {
                    return e && e.length ? Wr(e, Ke, lo) : i
                }
                function C_(e, t) {
                    return e && e.length ? Wr(e, Y(t, 2), lo) : i
                }
                function R_(e) {
                    return Xs(e, Ke)
                }
                function O_(e, t) {
                    return Xs(e, Y(t, 2))
                }
                function L_(e) {
                    return e && e.length ? Wr(e, Ke, po) : i
                }
                function F_(e, t) {
                    return e && e.length ? Wr(e, Y(t, 2), po) : i
                }
                var N_ = Kr(function(e, t) {
                    return e * t
                }, 1)
                  , D_ = Ao("round")
                  , B_ = Kr(function(e, t) {
                    return e - t
                }, 0);
                function k_(e) {
                    return e && e.length ? Xi(e, Ke) : 0
                }
                function M_(e, t) {
                    return e && e.length ? Xi(e, Y(t, 2)) : 0
                }
                return h.after = og,
                h.ary = Ea,
                h.assign = Jg,
                h.assignIn = ka,
                h.assignInWith = ui,
                h.assignWith = Gg,
                h.at = Kg,
                h.before = ba,
                h.bind = Mo,
                h.bindAll = j0,
                h.bindKey = Sa,
                h.castArray = mg,
                h.chain = wa,
                h.chunk = Id,
                h.compact = Td,
                h.concat = Cd,
                h.cond = e_,
                h.conforms = t_,
                h.constant = Yo,
                h.countBy = kp,
                h.create = Vg,
                h.curry = Aa,
                h.curryRight = Ia,
                h.debounce = Ta,
                h.defaults = Qg,
                h.defaultsDeep = Xg,
                h.defer = sg,
                h.delay = ug,
                h.difference = Rd,
                h.differenceBy = Od,
                h.differenceWith = Ld,
                h.drop = Fd,
                h.dropRight = Nd,
                h.dropRightWhile = Dd,
                h.dropWhile = Bd,
                h.fill = kd,
                h.filter = Up,
                h.flatMap = Wp,
                h.flatMapDeep = qp,
                h.flatMapDepth = Hp,
                h.flatten = ga,
                h.flattenDeep = Md,
                h.flattenDepth = Ud,
                h.flip = ag,
                h.flow = r_,
                h.flowRight = i_,
                h.fromPairs = Pd,
                h.functions = i0,
                h.functionsIn = o0,
                h.groupBy = Yp,
                h.initial = Wd,
                h.intersection = qd,
                h.intersectionBy = Hd,
                h.intersectionWith = Yd,
                h.invert = u0,
                h.invertBy = a0,
                h.invokeMap = Jp,
                h.iteratee = zo,
                h.keyBy = Gp,
                h.keys = Le,
                h.keysIn = Ge,
                h.map = ti,
                h.mapKeys = f0,
                h.mapValues = c0,
                h.matches = o_,
                h.matchesProperty = s_,
                h.memoize = ri,
                h.merge = h0,
                h.mergeWith = Ma,
                h.method = u_,
                h.methodOf = a_,
                h.mixin = Jo,
                h.negate = ii,
                h.nthArg = f_,
                h.omit = d0,
                h.omitBy = p0,
                h.once = lg,
                h.orderBy = Kp,
                h.over = c_,
                h.overArgs = fg,
                h.overEvery = h_,
                h.overSome = d_,
                h.partial = Uo,
                h.partialRight = Ca,
                h.partition = Vp,
                h.pick = g0,
                h.pickBy = Ua,
                h.property = za,
                h.propertyOf = p_,
                h.pull = Kd,
                h.pullAll = ma,
                h.pullAllBy = Vd,
                h.pullAllWith = Qd,
                h.pullAt = Xd,
                h.range = g_,
                h.rangeRight = __,
                h.rearg = cg,
                h.reject = Zp,
                h.remove = Zd,
                h.rest = hg,
                h.reverse = Bo,
                h.sampleSize = eg,
                h.set = m0,
                h.setWith = y0,
                h.shuffle = tg,
                h.slice = jd,
                h.sortBy = ig,
                h.sortedUniq = sp,
                h.sortedUniqBy = up,
                h.split = W0,
                h.spread = dg,
                h.tail = ap,
                h.take = lp,
                h.takeRight = fp,
                h.takeRightWhile = cp,
                h.takeWhile = hp,
                h.tap = Tp,
                h.throttle = pg,
                h.thru = ei,
                h.toArray = Na,
                h.toPairs = Pa,
                h.toPairsIn = $a,
                h.toPath = x_,
                h.toPlainObject = Ba,
                h.transform = w0,
                h.unary = gg,
                h.union = dp,
                h.unionBy = pp,
                h.unionWith = gp,
                h.uniq = _p,
                h.uniqBy = mp,
                h.uniqWith = yp,
                h.unset = v0,
                h.unzip = ko,
                h.unzipWith = ya,
                h.update = x0,
                h.updateWith = E0,
                h.values = Pn,
                h.valuesIn = b0,
                h.without = wp,
                h.words = Ha,
                h.wrap = _g,
                h.xor = vp,
                h.xorBy = xp,
                h.xorWith = Ep,
                h.zip = bp,
                h.zipObject = Sp,
                h.zipObjectDeep = Ap,
                h.zipWith = Ip,
                h.entries = Pa,
                h.entriesIn = $a,
                h.extend = ka,
                h.extendWith = ui,
                Jo(h, h),
                h.add = b_,
                h.attempt = Ya,
                h.camelCase = T0,
                h.capitalize = Wa,
                h.ceil = S_,
                h.clamp = S0,
                h.clone = yg,
                h.cloneDeep = vg,
                h.cloneDeepWith = xg,
                h.cloneWith = wg,
                h.conformsTo = Eg,
                h.deburr = qa,
                h.defaultTo = n_,
                h.divide = A_,
                h.endsWith = C0,
                h.eq = xt,
                h.escape = R0,
                h.escapeRegExp = O0,
                h.every = Mp,
                h.find = Pp,
                h.findIndex = da,
                h.findKey = Zg,
                h.findLast = $p,
                h.findLastIndex = pa,
                h.findLastKey = jg,
                h.floor = I_,
                h.forEach = va,
                h.forEachRight = xa,
                h.forIn = e0,
                h.forInRight = t0,
                h.forOwn = n0,
                h.forOwnRight = r0,
                h.get = Wo,
                h.gt = bg,
                h.gte = Sg,
                h.has = s0,
                h.hasIn = qo,
                h.head = _a,
                h.identity = Ke,
                h.includes = zp,
                h.indexOf = $d,
                h.inRange = A0,
                h.invoke = l0,
                h.isArguments = xn,
                h.isArray = X,
                h.isArrayBuffer = Ag,
                h.isArrayLike = Je,
                h.isArrayLikeObject = Ae,
                h.isBoolean = Ig,
                h.isBuffer = cn,
                h.isDate = Tg,
                h.isElement = Cg,
                h.isEmpty = Rg,
                h.isEqual = Og,
                h.isEqualWith = Lg,
                h.isError = Po,
                h.isFinite = Fg,
                h.isFunction = qt,
                h.isInteger = Ra,
                h.isLength = oi,
                h.isMap = Oa,
                h.isMatch = Ng,
                h.isMatchWith = Dg,
                h.isNaN = Bg,
                h.isNative = kg,
                h.isNil = Ug,
                h.isNull = Mg,
                h.isNumber = La,
                h.isObject = Ee,
                h.isObjectLike = be,
                h.isPlainObject = cr,
                h.isRegExp = $o,
                h.isSafeInteger = Pg,
                h.isSet = Fa,
                h.isString = si,
                h.isSymbol = nt,
                h.isTypedArray = Un,
                h.isUndefined = $g,
                h.isWeakMap = Wg,
                h.isWeakSet = qg,
                h.join = zd,
                h.kebabCase = L0,
                h.last = pt,
                h.lastIndexOf = Jd,
                h.lowerCase = F0,
                h.lowerFirst = N0,
                h.lt = Hg,
                h.lte = Yg,
                h.max = T_,
                h.maxBy = C_,
                h.mean = R_,
                h.meanBy = O_,
                h.min = L_,
                h.minBy = F_,
                h.stubArray = Ko,
                h.stubFalse = Vo,
                h.stubObject = m_,
                h.stubString = y_,
                h.stubTrue = w_,
                h.multiply = N_,
                h.nth = Gd,
                h.noConflict = l_,
                h.noop = Go,
                h.now = ni,
                h.pad = D0,
                h.padEnd = B0,
                h.padStart = k0,
                h.parseInt = M0,
                h.random = I0,
                h.reduce = Qp,
                h.reduceRight = Xp,
                h.repeat = U0,
                h.replace = P0,
                h.result = _0,
                h.round = D_,
                h.runInContext = y,
                h.sample = jp,
                h.size = ng,
                h.snakeCase = $0,
                h.some = rg,
                h.sortedIndex = ep,
                h.sortedIndexBy = tp,
                h.sortedIndexOf = np,
                h.sortedLastIndex = rp,
                h.sortedLastIndexBy = ip,
                h.sortedLastIndexOf = op,
                h.startCase = q0,
                h.startsWith = H0,
                h.subtract = B_,
                h.sum = k_,
                h.sumBy = M_,
                h.template = Y0,
                h.times = v_,
                h.toFinite = Ht,
                h.toInteger = Z,
                h.toLength = Da,
                h.toLower = z0,
                h.toNumber = gt,
                h.toSafeInteger = zg,
                h.toString = le,
                h.toUpper = J0,
                h.trim = G0,
                h.trimEnd = K0,
                h.trimStart = V0,
                h.truncate = Q0,
                h.unescape = X0,
                h.uniqueId = E_,
                h.upperCase = Z0,
                h.upperFirst = Ho,
                h.each = va,
                h.eachRight = xa,
                h.first = _a,
                Jo(h, function() {
                    var e = {};
                    return It(h, function(t, o) {
                        he.call(h.prototype, o) || (e[o] = t)
                    }),
                    e
                }(), {
                    chain: !1
                }),
                h.VERSION = n,
                lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                    h[e].placeholder = h
                }),
                lt(["drop", "take"], function(e, t) {
                    oe.prototype[e] = function(o) {
                        o = o === i ? 1 : Re(Z(o), 0);
                        var a = this.__filtered__ && !t ? new oe(this) : this.clone();
                        return a.__filtered__ ? a.__takeCount__ = Me(o, a.__takeCount__) : a.__views__.push({
                            size: Me(o, ce),
                            type: e + (a.__dir__ < 0 ? "Right" : "")
                        }),
                        a
                    }
                    ,
                    oe.prototype[e + "Right"] = function(o) {
                        return this.reverse()[e](o).reverse()
                    }
                }),
                lt(["filter", "map", "takeWhile"], function(e, t) {
                    var o = t + 1
                      , a = o == Qt || o == L;
                    oe.prototype[e] = function(c) {
                        var d = this.clone();
                        return d.__iteratees__.push({
                            iteratee: Y(c, 3),
                            type: o
                        }),
                        d.__filtered__ = d.__filtered__ || a,
                        d
                    }
                }),
                lt(["head", "last"], function(e, t) {
                    var o = "take" + (t ? "Right" : "");
                    oe.prototype[e] = function() {
                        return this[o](1).value()[0]
                    }
                }),
                lt(["initial", "tail"], function(e, t) {
                    var o = "drop" + (t ? "" : "Right");
                    oe.prototype[e] = function() {
                        return this.__filtered__ ? new oe(this) : this[o](1)
                    }
                }),
                oe.prototype.compact = function() {
                    return this.filter(Ke)
                }
                ,
                oe.prototype.find = function(e) {
                    return this.filter(e).head()
                }
                ,
                oe.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }
                ,
                oe.prototype.invokeMap = te(function(e, t) {
                    return typeof e == "function" ? new oe(this) : this.map(function(o) {
                        return or(o, e, t)
                    })
                }),
                oe.prototype.reject = function(e) {
                    return this.filter(ii(Y(e)))
                }
                ,
                oe.prototype.slice = function(e, t) {
                    e = Z(e);
                    var o = this;
                    return o.__filtered__ && (e > 0 || t < 0) ? new oe(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)),
                    t !== i && (t = Z(t),
                    o = t < 0 ? o.dropRight(-t) : o.take(t - e)),
                    o)
                }
                ,
                oe.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }
                ,
                oe.prototype.toArray = function() {
                    return this.take(ce)
                }
                ,
                It(oe.prototype, function(e, t) {
                    var o = /^(?:filter|find|map|reject)|While$/.test(t)
                      , a = /^(?:head|last)$/.test(t)
                      , c = h[a ? "take" + (t == "last" ? "Right" : "") : t]
                      , d = a || /^find/.test(t);
                    c && (h.prototype[t] = function() {
                        var g = this.__wrapped__
                          , _ = a ? [1] : arguments
                          , w = g instanceof oe
                          , A = _[0]
                          , I = w || X(g)
                          , C = function(re) {
                            var se = c.apply(h, nn([re], _));
                            return a && N ? se[0] : se
                        };
                        I && o && typeof A == "function" && A.length != 1 && (w = I = !1);
                        var N = this.__chain__
                          , P = !!this.__actions__.length
                          , G = d && !N
                          , j = w && !P;
                        if (!d && I) {
                            g = j ? g : new oe(this);
                            var K = e.apply(g, _);
                            return K.__actions__.push({
                                func: ei,
                                args: [C],
                                thisArg: i
                            }),
                            new ct(K,N)
                        }
                        return G && j ? e.apply(this, _) : (K = this.thru(C),
                        G ? a ? K.value()[0] : K.value() : K)
                    }
                    )
                }),
                lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                    var t = Ir[e]
                      , o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                      , a = /^(?:pop|shift)$/.test(e);
                    h.prototype[e] = function() {
                        var c = arguments;
                        if (a && !this.__chain__) {
                            var d = this.value();
                            return t.apply(X(d) ? d : [], c)
                        }
                        return this[o](function(g) {
                            return t.apply(X(g) ? g : [], c)
                        })
                    }
                }),
                It(oe.prototype, function(e, t) {
                    var o = h[t];
                    if (o) {
                        var a = o.name + "";
                        he.call(Nn, a) || (Nn[a] = []),
                        Nn[a].push({
                            name: t,
                            func: o
                        })
                    }
                }),
                Nn[Gr(i, q).name] = [{
                    name: "wrapper",
                    func: i
                }],
                oe.prototype.clone = Xc,
                oe.prototype.reverse = Zc,
                oe.prototype.value = jc,
                h.prototype.at = Cp,
                h.prototype.chain = Rp,
                h.prototype.commit = Op,
                h.prototype.next = Lp,
                h.prototype.plant = Np,
                h.prototype.reverse = Dp,
                h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Bp,
                h.prototype.first = h.prototype.head,
                Zn && (h.prototype[Zn] = Fp),
                h
            }
              , on = Oc();
            typeof define == "function" && typeof define.amd == "object" && define.amd ? (Oe._ = on,
            define(function() {
                return on
            })) : dn ? ((dn.exports = on)._ = on,
            Yi._ = on) : Oe._ = on
        }
        ).call(Hn)
    }
    );
    var Rt = Ve(bt(), 1);
    (0,
    Rt.default)(function() {
        let i = (0,
        Rt.default)(document)
          , n = ".js-accordions"
          , r = ".js-accordions-footer"
          , s = ".js-accordion"
          , u = ".js-accordion-toggle";
        i.on("click", u, l);
        function l(p) {
            let m = (0,
            Rt.default)(this)
              , v = m.closest(s)
              , E = v.closest(n);
            E.length <= 0 && (E = v.parent()),
            v.hasClass("is-toggled") ? (m.attr({
                "aria-expanded": !1
            }),
            v.removeClass("is-toggled")) : (E.find(".is-toggled").removeClass("is-toggled"),
            E.find('[aria-expanded="true"]').attr({
                "aria-expanded": !1
            }),
            m.attr({
                "aria-expanded": !0
            }),
            v.addClass("is-toggled")),
            console.log("handleAccordionToggle")
        }
        function f(p) {
            return parseInt(p.replace(/\D/g, ""), 10)
        }
        (0,
        Rt.default)(n).filter(".js-accordions-sort").each( (p, m) => {
            let v = (0,
            Rt.default)(m);
            v.find(s).sort(function(S, F) {
                let k = (0,
                Rt.default)(S).attr("data-category")
                  , D = (0,
                Rt.default)(F).attr("data-category")
                  , q = f(k)
                  , de = f(D);
                return q > de ? -1 : q < de ? 1 : 0
            }).appendTo(v)
        }
        ),
        (0,
        Rt.default)(n).each( (p, m) => {
            let v = (0,
            Rt.default)(m)
              , E = v.find(r);
            v.find(s).length >= 6 && E.addClass("is-visible")
        }
        )
    });
    var Xa = Ve(Qa(), 1);
    ['.header__heading:not([data-balance="false"])', '.header__subheading:not([data-balance="false"])', '.section__heading:not([data-balance="false"])', '.section__subheading:not([data-balance="false"])', '[data-balance="true"]'].forEach(i => (0,
    Xa.default)(i, {
        watch: !0
    }));
    var li = Ve(bt(), 1);
    (0,
    li.default)(function() {
        let i = (0,
        li.default)(".related-articles ul li")
          , n = ["How to install propeller guards on your Aviadrones 2/2+", "Aviadrones Shop FAQ", "How To: Aviadrones Customer Portal", "Operational Support", "Configuring MicroHard Connectivity with Aviadrones X2D", "How to add a profile on the Aviadrones X10 Controller", "X10D Control and Telemetry ICD", "Aviadrones Ukraine", "Aviadrones Android Intent API", "How to use UAT organizations with Aviadrones Cloud"];
        i.each( (r, s) => {
            let u = (0,
            li.default)(s);
            n.includes(u.text().trim()) && u.hide()
        }
        )
    });
    var jo = Ve(bt(), 1);
    function Za(i, n) {
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(i, s.key, s)
        }
    }
    function fi(i) {
        return function(n) {
            if (Array.isArray(n))
                return Qo(n)
        }(i) || function(n) {
            if (typeof Symbol < "u" && Symbol.iterator in Object(n))
                return Array.from(n)
        }(i) || function(n, r) {
            if (n) {
                if (typeof n == "string")
                    return Qo(n, r);
                var s = Object.prototype.toString.call(n).slice(8, -1);
                if (s === "Object" && n.constructor && (s = n.constructor.name),
                s === "Map" || s === "Set")
                    return Array.from(n);
                if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
                    return Qo(n, r)
            }
        }(i) || function() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }()
    }
    function Qo(i, n) {
        (n == null || n > i.length) && (n = i.length);
        for (var r = 0, s = new Array(n); r < n; r++)
            s[r] = i[r];
        return s
    }
    var ja, Xo, En, Zo, el, tl = (ja = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
    Xo = function() {
        function i(u) {
            var l = u.targetModal
              , f = u.triggers
              , p = f === void 0 ? [] : f
              , m = u.onShow
              , v = m === void 0 ? function() {}
            : m
              , E = u.onClose
              , S = E === void 0 ? function() {}
            : E
              , F = u.openTrigger
              , k = F === void 0 ? "data-micromodal-trigger" : F
              , D = u.closeTrigger
              , q = D === void 0 ? "data-micromodal-close" : D
              , de = u.openClass
              , ie = de === void 0 ? "is-open" : de
              , ue = u.disableScroll
              , fe = ue !== void 0 && ue
              , ge = u.disableFocus
              , me = ge !== void 0 && ge
              , ve = u.awaitCloseAnimation
              , ot = ve !== void 0 && ve
              , xe = u.awaitOpenAnimation
              , Kt = xe !== void 0 && xe
              , Vt = u.debugMode
              , Dt = Vt !== void 0 && Vt;
            (function(Qt, Xt) {
                if (!(Qt instanceof Xt))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, i),
            this.modal = document.getElementById(l),
            this.config = {
                debugMode: Dt,
                disableScroll: fe,
                openTrigger: k,
                closeTrigger: q,
                openClass: ie,
                onShow: v,
                onClose: S,
                awaitCloseAnimation: ot,
                awaitOpenAnimation: Kt,
                disableFocus: me
            },
            p.length > 0 && this.registerTriggers.apply(this, fi(p)),
            this.onClick = this.onClick.bind(this),
            this.onKeydown = this.onKeydown.bind(this)
        }
        var n, r, s;
        return n = i,
        (r = [{
            key: "registerTriggers",
            value: function() {
                for (var u = this, l = arguments.length, f = new Array(l), p = 0; p < l; p++)
                    f[p] = arguments[p];
                f.filter(Boolean).forEach(function(m) {
                    m.addEventListener("click", function(v) {
                        return u.showModal(v)
                    })
                })
            }
        }, {
            key: "showModal",
            value: function() {
                var u = this
                  , l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (this.activeElement = document.activeElement,
                this.modal.setAttribute("aria-hidden", "false"),
                this.modal.classList.add(this.config.openClass),
                this.scrollBehaviour("disable"),
                this.addEventListeners(),
                this.config.awaitOpenAnimation) {
                    var f = function p() {
                        u.modal.removeEventListener("animationend", p, !1),
                        u.setFocusToFirstNode()
                    };
                    this.modal.addEventListener("animationend", f, !1)
                } else
                    this.setFocusToFirstNode();
                this.config.onShow(this.modal, this.activeElement, l)
            }
        }, {
            key: "closeModal",
            value: function() {
                var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null
                  , l = this.modal;
                if (this.modal.setAttribute("aria-hidden", "true"),
                this.removeEventListeners(),
                this.scrollBehaviour("enable"),
                this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                this.config.onClose(this.modal, this.activeElement, u),
                this.config.awaitCloseAnimation) {
                    var f = this.config.openClass;
                    this.modal.addEventListener("animationend", function p() {
                        l.classList.remove(f),
                        l.removeEventListener("animationend", p, !1)
                    }, !1)
                } else
                    l.classList.remove(this.config.openClass)
            }
        }, {
            key: "closeModalById",
            value: function(u) {
                this.modal = document.getElementById(u),
                this.modal && this.closeModal()
            }
        }, {
            key: "scrollBehaviour",
            value: function(u) {
                if (this.config.disableScroll) {
                    var l = document.querySelector("body");
                    switch (u) {
                    case "enable":
                        Object.assign(l.style, {
                            overflow: ""
                        });
                        break;
                    case "disable":
                        Object.assign(l.style, {
                            overflow: "hidden"
                        })
                    }
                }
            }
        }, {
            key: "addEventListeners",
            value: function() {
                this.modal.addEventListener("touchstart", this.onClick),
                this.modal.addEventListener("click", this.onClick),
                document.addEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.modal.removeEventListener("touchstart", this.onClick),
                this.modal.removeEventListener("click", this.onClick),
                document.removeEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "onClick",
            value: function(u) {
                (u.target.hasAttribute(this.config.closeTrigger) || u.target.parentNode.hasAttribute(this.config.closeTrigger)) && (u.preventDefault(),
                u.stopPropagation(),
                this.closeModal(u))
            }
        }, {
            key: "onKeydown",
            value: function(u) {
                u.keyCode === 27 && this.closeModal(u),
                u.keyCode === 9 && this.retainFocus(u)
            }
        }, {
            key: "getFocusableNodes",
            value: function() {
                var u = this.modal.querySelectorAll(ja);
                return Array.apply(void 0, fi(u))
            }
        }, {
            key: "setFocusToFirstNode",
            value: function() {
                var u = this;
                if (!this.config.disableFocus) {
                    var l = this.getFocusableNodes();
                    if (l.length !== 0) {
                        var f = l.filter(function(p) {
                            return !p.hasAttribute(u.config.closeTrigger)
                        });
                        f.length > 0 && f[0].focus(),
                        f.length === 0 && l[0].focus()
                    }
                }
            }
        }, {
            key: "retainFocus",
            value: function(u) {
                var l = this.getFocusableNodes();
                if (l.length !== 0)
                    if (l = l.filter(function(p) {
                        return p.offsetParent !== null
                    }),
                    this.modal.contains(document.activeElement)) {
                        var f = l.indexOf(document.activeElement);
                        u.shiftKey && f === 0 && (l[l.length - 1].focus(),
                        u.preventDefault()),
                        !u.shiftKey && l.length > 0 && f === l.length - 1 && (l[0].focus(),
                        u.preventDefault())
                    } else
                        l[0].focus()
            }
        }]) && Za(n.prototype, r),
        s && Za(n, s),
        i
    }(),
    En = null,
    Zo = function(i) {
        if (!document.getElementById(i))
            return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(i, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
            console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(i, '"></div>')),
            !1
    }
    ,
    el = function(i, n) {
        if (function(s) {
            s.length <= 0 && (console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
            console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
        }(i),
        !n)
            return !0;
        for (var r in n)
            Zo(r);
        return !0
    }
    ,
    {
        init: function(i) {
            var n = Object.assign({}, {
                openTrigger: "data-micromodal-trigger"
            }, i)
              , r = fi(document.querySelectorAll("[".concat(n.openTrigger, "]")))
              , s = function(f, p) {
                var m = [];
                return f.forEach(function(v) {
                    var E = v.attributes[p].value;
                    m[E] === void 0 && (m[E] = []),
                    m[E].push(v)
                }),
                m
            }(r, n.openTrigger);
            if (n.debugMode !== !0 || el(r, s) !== !1)
                for (var u in s) {
                    var l = s[u];
                    n.targetModal = u,
                    n.triggers = fi(l),
                    En = new Xo(n)
                }
        },
        show: function(i, n) {
            var r = n || {};
            r.targetModal = i,
            r.debugMode === !0 && Zo(i) === !1 || (En && En.removeEventListeners(),
            (En = new Xo(r)).showModal())
        },
        close: function(i) {
            i ? En.closeModalById(i) : En.closeModal()
        }
    });
    typeof window < "u" && (window.MicroModal = tl);
    var bn = tl;
    var $n = {
        onShow: i => {
            history.replaceState(null, null, `#${i.id}`),
            i.id === "search" && i.querySelector('input[type="search"]').focus()
        }
        ,
        onClose: i => {
            history.replaceState(null, null, "#")
        }
        ,
        openTrigger: "data-modal-open",
        closeTrigger: "data-modal-close",
        disableScroll: !0,
        disableFocus: !0,
        awaitCloseAnimation: !0
    };
    function Y_() {
        document.querySelector(".js-modal") && (Array.from(document.querySelectorAll(".js-modal")).forEach(i => document.body.appendChild(i)),
        bn.init($n))
    }
    window.addEventListener("DOMContentLoaded", Y_);
    function nl(i) {
        return i.includes("#") ? i.split("#").pop() : null
    }
    function z_(i) {
        let n = nl(i.newURL)
          , r = nl(i.oldURL);
        n && document.querySelector(`.js-modal[id="${n}"]`) && bn.show(n, $n),
        r && document.querySelector(`.js-modal[id="${r}"]`) && bn.close(r, $n)
    }
    window.addEventListener("hashchange", z_);
    function J_() {
        let i = window.location.hash.substr(1);
        document.querySelector(`.js-modal[id="${i}"]`) && bn.show(i, $n)
    }
    window.addEventListener("DOMContentLoaded", J_);
    (0,
    jo.default)(function() {
        let i = (0,
        jo.default)("#launcher");
        if (typeof zE > "u")
            return;
        function n(u) {
            return r()
        }
        function r() {
            i.off("click"),
            i.on("click", () => {
                $zopim.livechat.window.show()
            }
            )
        }
        function s() {
            i.off("click"),
            i.on("click", () => {
                bn.show("offline", $n)
            }
            )
        }
        zE(function() {
            $zopim(function() {
                $zopim.livechat.setOnStatus(n)
            })
        })
    });
    var il = Ve(rl(), 1);
    document.querySelector(".js-clipboard") && new il.default(".js-clipboard").on("success", ({trigger: n}) => {
        n.textContent = n.getAttribute("data-clipboard-success"),
        setTimeout( () => {
            n.textContent = n.getAttribute("data-clipboard-default")
        }
        , 3e3)
    }
    );
    var Wn = Ve(bt(), 1);
    var ty = Ve(sl(), 1);
    var ul = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}
      , Ot = []
      , _t = []
      , G_ = typeof Uint8Array < "u" ? Uint8Array : Array
      , ns = !1;
    function cl() {
        ns = !0;
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, r = i.length; n < r; ++n)
            Ot[n] = i[n],
            _t[i.charCodeAt(n)] = n;
        _t["-".charCodeAt(0)] = 62,
        _t["_".charCodeAt(0)] = 63
    }
    function K_(i) {
        ns || cl();
        var n, r, s, u, l, f, p = i.length;
        if (p % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        l = i[p - 2] === "=" ? 2 : i[p - 1] === "=" ? 1 : 0,
        f = new G_(p * 3 / 4 - l),
        s = l > 0 ? p - 4 : p;
        var m = 0;
        for (n = 0,
        r = 0; n < s; n += 4,
        r += 3)
            u = _t[i.charCodeAt(n)] << 18 | _t[i.charCodeAt(n + 1)] << 12 | _t[i.charCodeAt(n + 2)] << 6 | _t[i.charCodeAt(n + 3)],
            f[m++] = u >> 16 & 255,
            f[m++] = u >> 8 & 255,
            f[m++] = u & 255;
        return l === 2 ? (u = _t[i.charCodeAt(n)] << 2 | _t[i.charCodeAt(n + 1)] >> 4,
        f[m++] = u & 255) : l === 1 && (u = _t[i.charCodeAt(n)] << 10 | _t[i.charCodeAt(n + 1)] << 4 | _t[i.charCodeAt(n + 2)] >> 2,
        f[m++] = u >> 8 & 255,
        f[m++] = u & 255),
        f
    }
    function V_(i) {
        return Ot[i >> 18 & 63] + Ot[i >> 12 & 63] + Ot[i >> 6 & 63] + Ot[i & 63]
    }
    function Q_(i, n, r) {
        for (var s, u = [], l = n; l < r; l += 3)
            s = (i[l] << 16) + (i[l + 1] << 8) + i[l + 2],
            u.push(V_(s));
        return u.join("")
    }
    function al(i) {
        ns || cl();
        for (var n, r = i.length, s = r % 3, u = "", l = [], f = 16383, p = 0, m = r - s; p < m; p += f)
            l.push(Q_(i, p, p + f > m ? m : p + f));
        return s === 1 ? (n = i[r - 1],
        u += Ot[n >> 2],
        u += Ot[n << 4 & 63],
        u += "==") : s === 2 && (n = (i[r - 2] << 8) + i[r - 1],
        u += Ot[n >> 10],
        u += Ot[n >> 4 & 63],
        u += Ot[n << 2 & 63],
        u += "="),
        l.push(u),
        l.join("")
    }
    function di(i, n, r, s, u) {
        var l, f, p = u * 8 - s - 1, m = (1 << p) - 1, v = m >> 1, E = -7, S = r ? u - 1 : 0, F = r ? -1 : 1, k = i[n + S];
        for (S += F,
        l = k & (1 << -E) - 1,
        k >>= -E,
        E += p; E > 0; l = l * 256 + i[n + S],
        S += F,
        E -= 8)
            ;
        for (f = l & (1 << -E) - 1,
        l >>= -E,
        E += s; E > 0; f = f * 256 + i[n + S],
        S += F,
        E -= 8)
            ;
        if (l === 0)
            l = 1 - v;
        else {
            if (l === m)
                return f ? NaN : (k ? -1 : 1) * (1 / 0);
            f = f + Math.pow(2, s),
            l = l - v
        }
        return (k ? -1 : 1) * f * Math.pow(2, l - s)
    }
    function hl(i, n, r, s, u, l) {
        var f, p, m, v = l * 8 - u - 1, E = (1 << v) - 1, S = E >> 1, F = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = s ? 0 : l - 1, D = s ? 1 : -1, q = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
        for (n = Math.abs(n),
        isNaN(n) || n === 1 / 0 ? (p = isNaN(n) ? 1 : 0,
        f = E) : (f = Math.floor(Math.log(n) / Math.LN2),
        n * (m = Math.pow(2, -f)) < 1 && (f--,
        m *= 2),
        f + S >= 1 ? n += F / m : n += F * Math.pow(2, 1 - S),
        n * m >= 2 && (f++,
        m /= 2),
        f + S >= E ? (p = 0,
        f = E) : f + S >= 1 ? (p = (n * m - 1) * Math.pow(2, u),
        f = f + S) : (p = n * Math.pow(2, S - 1) * Math.pow(2, u),
        f = 0)); u >= 8; i[r + k] = p & 255,
        k += D,
        p /= 256,
        u -= 8)
            ;
        for (f = f << u | p,
        v += u; v > 0; i[r + k] = f & 255,
        k += D,
        f /= 256,
        v -= 8)
            ;
        i[r + k - D] |= q * 128
    }
    var X_ = {}.toString
      , dl = Array.isArray || function(i) {
        return X_.call(i) == "[object Array]"
    }
      , Z_ = 50;
    T.TYPED_ARRAY_SUPPORT = ul.TYPED_ARRAY_SUPPORT !== void 0 ? ul.TYPED_ARRAY_SUPPORT : !0;
    ci();
    function ci() {
        return T.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }
    function zt(i, n) {
        if (ci() < n)
            throw new RangeError("Invalid typed array length");
        return T.TYPED_ARRAY_SUPPORT ? (i = new Uint8Array(n),
        i.__proto__ = T.prototype) : (i === null && (i = new T(n)),
        i.length = n),
        i
    }
    function T(i, n, r) {
        if (!T.TYPED_ARRAY_SUPPORT && !(this instanceof T))
            return new T(i,n,r);
        if (typeof i == "number") {
            if (typeof n == "string")
                throw new Error("If encoding is specified then the first argument must be a string");
            return rs(this, i)
        }
        return pl(this, i, n, r)
    }
    T.poolSize = 8192;
    T._augment = function(i) {
        return i.__proto__ = T.prototype,
        i
    }
    ;
    function pl(i, n, r, s) {
        if (typeof n == "number")
            throw new TypeError('"value" argument must not be a number');
        return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer ? tm(i, n, r, s) : typeof n == "string" ? em(i, n, r) : nm(i, n)
    }
    T.from = function(i, n, r) {
        return pl(null, i, n, r)
    }
    ;
    T.TYPED_ARRAY_SUPPORT && (T.prototype.__proto__ = Uint8Array.prototype,
    T.__proto__ = Uint8Array,
    typeof Symbol < "u" && Symbol.species && T[Symbol.species]);
    function gl(i) {
        if (typeof i != "number")
            throw new TypeError('"size" argument must be a number');
        if (i < 0)
            throw new RangeError('"size" argument must not be negative')
    }
    function j_(i, n, r, s) {
        return gl(n),
        n <= 0 ? zt(i, n) : r !== void 0 ? typeof s == "string" ? zt(i, n).fill(r, s) : zt(i, n).fill(r) : zt(i, n)
    }
    T.alloc = function(i, n, r) {
        return j_(null, i, n, r)
    }
    ;
    function rs(i, n) {
        if (gl(n),
        i = zt(i, n < 0 ? 0 : is(n) | 0),
        !T.TYPED_ARRAY_SUPPORT)
            for (var r = 0; r < n; ++r)
                i[r] = 0;
        return i
    }
    T.allocUnsafe = function(i) {
        return rs(null, i)
    }
    ;
    T.allocUnsafeSlow = function(i) {
        return rs(null, i)
    }
    ;
    function em(i, n, r) {
        if ((typeof r != "string" || r === "") && (r = "utf8"),
        !T.isEncoding(r))
            throw new TypeError('"encoding" must be a valid string encoding');
        var s = _l(n, r) | 0;
        i = zt(i, s);
        var u = i.write(n, r);
        return u !== s && (i = i.slice(0, u)),
        i
    }
    function ts(i, n) {
        var r = n.length < 0 ? 0 : is(n.length) | 0;
        i = zt(i, r);
        for (var s = 0; s < r; s += 1)
            i[s] = n[s] & 255;
        return i
    }
    function tm(i, n, r, s) {
        if (n.byteLength,
        r < 0 || n.byteLength < r)
            throw new RangeError("'offset' is out of bounds");
        if (n.byteLength < r + (s || 0))
            throw new RangeError("'length' is out of bounds");
        return r === void 0 && s === void 0 ? n = new Uint8Array(n) : s === void 0 ? n = new Uint8Array(n,r) : n = new Uint8Array(n,r,s),
        T.TYPED_ARRAY_SUPPORT ? (i = n,
        i.__proto__ = T.prototype) : i = ts(i, n),
        i
    }
    function nm(i, n) {
        if (Lt(n)) {
            var r = is(n.length) | 0;
            return i = zt(i, r),
            i.length === 0 || n.copy(i, 0, 0, r),
            i
        }
        if (n) {
            if (typeof ArrayBuffer < "u" && n.buffer instanceof ArrayBuffer || "length"in n)
                return typeof n.length != "number" || xm(n.length) ? zt(i, 0) : ts(i, n);
            if (n.type === "Buffer" && dl(n.data))
                return ts(i, n.data)
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    }
    function is(i) {
        if (i >= ci())
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ci().toString(16) + " bytes");
        return i | 0
    }
    T.isBuffer = Em;
    function Lt(i) {
        return !!(i != null && i._isBuffer)
    }
    T.compare = function(n, r) {
        if (!Lt(n) || !Lt(r))
            throw new TypeError("Arguments must be Buffers");
        if (n === r)
            return 0;
        for (var s = n.length, u = r.length, l = 0, f = Math.min(s, u); l < f; ++l)
            if (n[l] !== r[l]) {
                s = n[l],
                u = r[l];
                break
            }
        return s < u ? -1 : u < s ? 1 : 0
    }
    ;
    T.isEncoding = function(n) {
        switch (String(n).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ;
    T.concat = function(n, r) {
        if (!dl(n))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (n.length === 0)
            return T.alloc(0);
        var s;
        if (r === void 0)
            for (r = 0,
            s = 0; s < n.length; ++s)
                r += n[s].length;
        var u = T.allocUnsafe(r)
          , l = 0;
        for (s = 0; s < n.length; ++s) {
            var f = n[s];
            if (!Lt(f))
                throw new TypeError('"list" argument must be an Array of Buffers');
            f.copy(u, l),
            l += f.length
        }
        return u
    }
    ;
    function _l(i, n) {
        if (Lt(i))
            return i.length;
        if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(i) || i instanceof ArrayBuffer))
            return i.byteLength;
        typeof i != "string" && (i = "" + i);
        var r = i.length;
        if (r === 0)
            return 0;
        for (var s = !1; ; )
            switch (n) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return hi(i).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return r * 2;
            case "hex":
                return r >>> 1;
            case "base64":
                return bl(i).length;
            default:
                if (s)
                    return hi(i).length;
                n = ("" + n).toLowerCase(),
                s = !0
            }
    }
    T.byteLength = _l;
    function rm(i, n, r) {
        var s = !1;
        if ((n === void 0 || n < 0) && (n = 0),
        n > this.length || ((r === void 0 || r > this.length) && (r = this.length),
        r <= 0) || (r >>>= 0,
        n >>>= 0,
        r <= n))
            return "";
        for (i || (i = "utf8"); ; )
            switch (i) {
            case "hex":
                return dm(this, n, r);
            case "utf8":
            case "utf-8":
                return wl(this, n, r);
            case "ascii":
                return cm(this, n, r);
            case "latin1":
            case "binary":
                return hm(this, n, r);
            case "base64":
                return lm(this, n, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return pm(this, n, r);
            default:
                if (s)
                    throw new TypeError("Unknown encoding: " + i);
                i = (i + "").toLowerCase(),
                s = !0
            }
    }
    T.prototype._isBuffer = !0;
    function Sn(i, n, r) {
        var s = i[n];
        i[n] = i[r],
        i[r] = s
    }
    T.prototype.swap16 = function() {
        var n = this.length;
        if (n % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var r = 0; r < n; r += 2)
            Sn(this, r, r + 1);
        return this
    }
    ;
    T.prototype.swap32 = function() {
        var n = this.length;
        if (n % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var r = 0; r < n; r += 4)
            Sn(this, r, r + 3),
            Sn(this, r + 1, r + 2);
        return this
    }
    ;
    T.prototype.swap64 = function() {
        var n = this.length;
        if (n % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var r = 0; r < n; r += 8)
            Sn(this, r, r + 7),
            Sn(this, r + 1, r + 6),
            Sn(this, r + 2, r + 5),
            Sn(this, r + 3, r + 4);
        return this
    }
    ;
    T.prototype.toString = function() {
        var n = this.length | 0;
        return n === 0 ? "" : arguments.length === 0 ? wl(this, 0, n) : rm.apply(this, arguments)
    }
    ;
    T.prototype.equals = function(n) {
        if (!Lt(n))
            throw new TypeError("Argument must be a Buffer");
        return this === n ? !0 : T.compare(this, n) === 0
    }
    ;
    T.prototype.inspect = function() {
        var n = ""
          , r = Z_;
        return this.length > 0 && (n = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
        this.length > r && (n += " ... ")),
        "<Buffer " + n + ">"
    }
    ;
    T.prototype.compare = function(n, r, s, u, l) {
        if (!Lt(n))
            throw new TypeError("Argument must be a Buffer");
        if (r === void 0 && (r = 0),
        s === void 0 && (s = n ? n.length : 0),
        u === void 0 && (u = 0),
        l === void 0 && (l = this.length),
        r < 0 || s > n.length || u < 0 || l > this.length)
            throw new RangeError("out of range index");
        if (u >= l && r >= s)
            return 0;
        if (u >= l)
            return -1;
        if (r >= s)
            return 1;
        if (r >>>= 0,
        s >>>= 0,
        u >>>= 0,
        l >>>= 0,
        this === n)
            return 0;
        for (var f = l - u, p = s - r, m = Math.min(f, p), v = this.slice(u, l), E = n.slice(r, s), S = 0; S < m; ++S)
            if (v[S] !== E[S]) {
                f = v[S],
                p = E[S];
                break
            }
        return f < p ? -1 : p < f ? 1 : 0
    }
    ;
    function ml(i, n, r, s, u) {
        if (i.length === 0)
            return -1;
        if (typeof r == "string" ? (s = r,
        r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
        r = +r,
        isNaN(r) && (r = u ? 0 : i.length - 1),
        r < 0 && (r = i.length + r),
        r >= i.length) {
            if (u)
                return -1;
            r = i.length - 1
        } else if (r < 0)
            if (u)
                r = 0;
            else
                return -1;
        if (typeof n == "string" && (n = T.from(n, s)),
        Lt(n))
            return n.length === 0 ? -1 : ll(i, n, r, s, u);
        if (typeof n == "number")
            return n = n & 255,
            T.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(i, n, r) : Uint8Array.prototype.lastIndexOf.call(i, n, r) : ll(i, [n], r, s, u);
        throw new TypeError("val must be string, number or Buffer")
    }
    function ll(i, n, r, s, u) {
        var l = 1
          , f = i.length
          , p = n.length;
        if (s !== void 0 && (s = String(s).toLowerCase(),
        s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
            if (i.length < 2 || n.length < 2)
                return -1;
            l = 2,
            f /= 2,
            p /= 2,
            r /= 2
        }
        function m(k, D) {
            return l === 1 ? k[D] : k.readUInt16BE(D * l)
        }
        var v;
        if (u) {
            var E = -1;
            for (v = r; v < f; v++)
                if (m(i, v) === m(n, E === -1 ? 0 : v - E)) {
                    if (E === -1 && (E = v),
                    v - E + 1 === p)
                        return E * l
                } else
                    E !== -1 && (v -= v - E),
                    E = -1
        } else
            for (r + p > f && (r = f - p),
            v = r; v >= 0; v--) {
                for (var S = !0, F = 0; F < p; F++)
                    if (m(i, v + F) !== m(n, F)) {
                        S = !1;
                        break
                    }
                if (S)
                    return v
            }
        return -1
    }
    T.prototype.includes = function(n, r, s) {
        return this.indexOf(n, r, s) !== -1
    }
    ;
    T.prototype.indexOf = function(n, r, s) {
        return ml(this, n, r, s, !0)
    }
    ;
    T.prototype.lastIndexOf = function(n, r, s) {
        return ml(this, n, r, s, !1)
    }
    ;
    function im(i, n, r, s) {
        r = Number(r) || 0;
        var u = i.length - r;
        s ? (s = Number(s),
        s > u && (s = u)) : s = u;
        var l = n.length;
        if (l % 2 !== 0)
            throw new TypeError("Invalid hex string");
        s > l / 2 && (s = l / 2);
        for (var f = 0; f < s; ++f) {
            var p = parseInt(n.substr(f * 2, 2), 16);
            if (isNaN(p))
                return f;
            i[r + f] = p
        }
        return f
    }
    function om(i, n, r, s) {
        return _i(hi(n, i.length - r), i, r, s)
    }
    function yl(i, n, r, s) {
        return _i(wm(n), i, r, s)
    }
    function sm(i, n, r, s) {
        return yl(i, n, r, s)
    }
    function um(i, n, r, s) {
        return _i(bl(n), i, r, s)
    }
    function am(i, n, r, s) {
        return _i(vm(n, i.length - r), i, r, s)
    }
    T.prototype.write = function(n, r, s, u) {
        if (r === void 0)
            u = "utf8",
            s = this.length,
            r = 0;
        else if (s === void 0 && typeof r == "string")
            u = r,
            s = this.length,
            r = 0;
        else if (isFinite(r))
            r = r | 0,
            isFinite(s) ? (s = s | 0,
            u === void 0 && (u = "utf8")) : (u = s,
            s = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var l = this.length - r;
        if ((s === void 0 || s > l) && (s = l),
        n.length > 0 && (s < 0 || r < 0) || r > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        u || (u = "utf8");
        for (var f = !1; ; )
            switch (u) {
            case "hex":
                return im(this, n, r, s);
            case "utf8":
            case "utf-8":
                return om(this, n, r, s);
            case "ascii":
                return yl(this, n, r, s);
            case "latin1":
            case "binary":
                return sm(this, n, r, s);
            case "base64":
                return um(this, n, r, s);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return am(this, n, r, s);
            default:
                if (f)
                    throw new TypeError("Unknown encoding: " + u);
                u = ("" + u).toLowerCase(),
                f = !0
            }
    }
    ;
    T.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function lm(i, n, r) {
        return n === 0 && r === i.length ? al(i) : al(i.slice(n, r))
    }
    function wl(i, n, r) {
        r = Math.min(i.length, r);
        for (var s = [], u = n; u < r; ) {
            var l = i[u]
              , f = null
              , p = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (u + p <= r) {
                var m, v, E, S;
                switch (p) {
                case 1:
                    l < 128 && (f = l);
                    break;
                case 2:
                    m = i[u + 1],
                    (m & 192) === 128 && (S = (l & 31) << 6 | m & 63,
                    S > 127 && (f = S));
                    break;
                case 3:
                    m = i[u + 1],
                    v = i[u + 2],
                    (m & 192) === 128 && (v & 192) === 128 && (S = (l & 15) << 12 | (m & 63) << 6 | v & 63,
                    S > 2047 && (S < 55296 || S > 57343) && (f = S));
                    break;
                case 4:
                    m = i[u + 1],
                    v = i[u + 2],
                    E = i[u + 3],
                    (m & 192) === 128 && (v & 192) === 128 && (E & 192) === 128 && (S = (l & 15) << 18 | (m & 63) << 12 | (v & 63) << 6 | E & 63,
                    S > 65535 && S < 1114112 && (f = S))
                }
            }
            f === null ? (f = 65533,
            p = 1) : f > 65535 && (f -= 65536,
            s.push(f >>> 10 & 1023 | 55296),
            f = 56320 | f & 1023),
            s.push(f),
            u += p
        }
        return fm(s)
    }
    var fl = 4096;
    function fm(i) {
        var n = i.length;
        if (n <= fl)
            return String.fromCharCode.apply(String, i);
        for (var r = "", s = 0; s < n; )
            r += String.fromCharCode.apply(String, i.slice(s, s += fl));
        return r
    }
    function cm(i, n, r) {
        var s = "";
        r = Math.min(i.length, r);
        for (var u = n; u < r; ++u)
            s += String.fromCharCode(i[u] & 127);
        return s
    }
    function hm(i, n, r) {
        var s = "";
        r = Math.min(i.length, r);
        for (var u = n; u < r; ++u)
            s += String.fromCharCode(i[u]);
        return s
    }
    function dm(i, n, r) {
        var s = i.length;
        (!n || n < 0) && (n = 0),
        (!r || r < 0 || r > s) && (r = s);
        for (var u = "", l = n; l < r; ++l)
            u += ym(i[l]);
        return u
    }
    function pm(i, n, r) {
        for (var s = i.slice(n, r), u = "", l = 0; l < s.length; l += 2)
            u += String.fromCharCode(s[l] + s[l + 1] * 256);
        return u
    }
    T.prototype.slice = function(n, r) {
        var s = this.length;
        n = ~~n,
        r = r === void 0 ? s : ~~r,
        n < 0 ? (n += s,
        n < 0 && (n = 0)) : n > s && (n = s),
        r < 0 ? (r += s,
        r < 0 && (r = 0)) : r > s && (r = s),
        r < n && (r = n);
        var u;
        if (T.TYPED_ARRAY_SUPPORT)
            u = this.subarray(n, r),
            u.__proto__ = T.prototype;
        else {
            var l = r - n;
            u = new T(l,void 0);
            for (var f = 0; f < l; ++f)
                u[f] = this[f + n]
        }
        return u
    }
    ;
    function Fe(i, n, r) {
        if (i % 1 !== 0 || i < 0)
            throw new RangeError("offset is not uint");
        if (i + n > r)
            throw new RangeError("Trying to access beyond buffer length")
    }
    T.prototype.readUIntLE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Fe(n, r, this.length);
        for (var u = this[n], l = 1, f = 0; ++f < r && (l *= 256); )
            u += this[n + f] * l;
        return u
    }
    ;
    T.prototype.readUIntBE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Fe(n, r, this.length);
        for (var u = this[n + --r], l = 1; r > 0 && (l *= 256); )
            u += this[n + --r] * l;
        return u
    }
    ;
    T.prototype.readUInt8 = function(n, r) {
        return r || Fe(n, 1, this.length),
        this[n]
    }
    ;
    T.prototype.readUInt16LE = function(n, r) {
        return r || Fe(n, 2, this.length),
        this[n] | this[n + 1] << 8
    }
    ;
    T.prototype.readUInt16BE = function(n, r) {
        return r || Fe(n, 2, this.length),
        this[n] << 8 | this[n + 1]
    }
    ;
    T.prototype.readUInt32LE = function(n, r) {
        return r || Fe(n, 4, this.length),
        (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + this[n + 3] * 16777216
    }
    ;
    T.prototype.readUInt32BE = function(n, r) {
        return r || Fe(n, 4, this.length),
        this[n] * 16777216 + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3])
    }
    ;
    T.prototype.readIntLE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Fe(n, r, this.length);
        for (var u = this[n], l = 1, f = 0; ++f < r && (l *= 256); )
            u += this[n + f] * l;
        return l *= 128,
        u >= l && (u -= Math.pow(2, 8 * r)),
        u
    }
    ;
    T.prototype.readIntBE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Fe(n, r, this.length);
        for (var u = r, l = 1, f = this[n + --u]; u > 0 && (l *= 256); )
            f += this[n + --u] * l;
        return l *= 128,
        f >= l && (f -= Math.pow(2, 8 * r)),
        f
    }
    ;
    T.prototype.readInt8 = function(n, r) {
        return r || Fe(n, 1, this.length),
        this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
    }
    ;
    T.prototype.readInt16LE = function(n, r) {
        r || Fe(n, 2, this.length);
        var s = this[n] | this[n + 1] << 8;
        return s & 32768 ? s | 4294901760 : s
    }
    ;
    T.prototype.readInt16BE = function(n, r) {
        r || Fe(n, 2, this.length);
        var s = this[n + 1] | this[n] << 8;
        return s & 32768 ? s | 4294901760 : s
    }
    ;
    T.prototype.readInt32LE = function(n, r) {
        return r || Fe(n, 4, this.length),
        this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24
    }
    ;
    T.prototype.readInt32BE = function(n, r) {
        return r || Fe(n, 4, this.length),
        this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]
    }
    ;
    T.prototype.readFloatLE = function(n, r) {
        return r || Fe(n, 4, this.length),
        di(this, n, !0, 23, 4)
    }
    ;
    T.prototype.readFloatBE = function(n, r) {
        return r || Fe(n, 4, this.length),
        di(this, n, !1, 23, 4)
    }
    ;
    T.prototype.readDoubleLE = function(n, r) {
        return r || Fe(n, 8, this.length),
        di(this, n, !0, 52, 8)
    }
    ;
    T.prototype.readDoubleBE = function(n, r) {
        return r || Fe(n, 8, this.length),
        di(this, n, !1, 52, 8)
    }
    ;
    function Qe(i, n, r, s, u, l) {
        if (!Lt(i))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (n > u || n < l)
            throw new RangeError('"value" argument is out of bounds');
        if (r + s > i.length)
            throw new RangeError("Index out of range")
    }
    T.prototype.writeUIntLE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        s = s | 0,
        !u) {
            var l = Math.pow(2, 8 * s) - 1;
            Qe(this, n, r, s, l, 0)
        }
        var f = 1
          , p = 0;
        for (this[r] = n & 255; ++p < s && (f *= 256); )
            this[r + p] = n / f & 255;
        return r + s
    }
    ;
    T.prototype.writeUIntBE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        s = s | 0,
        !u) {
            var l = Math.pow(2, 8 * s) - 1;
            Qe(this, n, r, s, l, 0)
        }
        var f = s - 1
          , p = 1;
        for (this[r + f] = n & 255; --f >= 0 && (p *= 256); )
            this[r + f] = n / p & 255;
        return r + s
    }
    ;
    T.prototype.writeUInt8 = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 1, 255, 0),
        T.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)),
        this[r] = n & 255,
        r + 1
    }
    ;
    function pi(i, n, r, s) {
        n < 0 && (n = 65535 + n + 1);
        for (var u = 0, l = Math.min(i.length - r, 2); u < l; ++u)
            i[r + u] = (n & 255 << 8 * (s ? u : 1 - u)) >>> (s ? u : 1 - u) * 8
    }
    T.prototype.writeUInt16LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 2, 65535, 0),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8) : pi(this, n, r, !0),
        r + 2
    }
    ;
    T.prototype.writeUInt16BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 2, 65535, 0),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 8,
        this[r + 1] = n & 255) : pi(this, n, r, !1),
        r + 2
    }
    ;
    function gi(i, n, r, s) {
        n < 0 && (n = 4294967295 + n + 1);
        for (var u = 0, l = Math.min(i.length - r, 4); u < l; ++u)
            i[r + u] = n >>> (s ? u : 3 - u) * 8 & 255
    }
    T.prototype.writeUInt32LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 4, 4294967295, 0),
        T.TYPED_ARRAY_SUPPORT ? (this[r + 3] = n >>> 24,
        this[r + 2] = n >>> 16,
        this[r + 1] = n >>> 8,
        this[r] = n & 255) : gi(this, n, r, !0),
        r + 4
    }
    ;
    T.prototype.writeUInt32BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 4, 4294967295, 0),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 24,
        this[r + 1] = n >>> 16,
        this[r + 2] = n >>> 8,
        this[r + 3] = n & 255) : gi(this, n, r, !1),
        r + 4
    }
    ;
    T.prototype.writeIntLE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        !u) {
            var l = Math.pow(2, 8 * s - 1);
            Qe(this, n, r, s, l - 1, -l)
        }
        var f = 0
          , p = 1
          , m = 0;
        for (this[r] = n & 255; ++f < s && (p *= 256); )
            n < 0 && m === 0 && this[r + f - 1] !== 0 && (m = 1),
            this[r + f] = (n / p >> 0) - m & 255;
        return r + s
    }
    ;
    T.prototype.writeIntBE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        !u) {
            var l = Math.pow(2, 8 * s - 1);
            Qe(this, n, r, s, l - 1, -l)
        }
        var f = s - 1
          , p = 1
          , m = 0;
        for (this[r + f] = n & 255; --f >= 0 && (p *= 256); )
            n < 0 && m === 0 && this[r + f + 1] !== 0 && (m = 1),
            this[r + f] = (n / p >> 0) - m & 255;
        return r + s
    }
    ;
    T.prototype.writeInt8 = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 1, 127, -128),
        T.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)),
        n < 0 && (n = 255 + n + 1),
        this[r] = n & 255,
        r + 1
    }
    ;
    T.prototype.writeInt16LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 2, 32767, -32768),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8) : pi(this, n, r, !0),
        r + 2
    }
    ;
    T.prototype.writeInt16BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 2, 32767, -32768),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 8,
        this[r + 1] = n & 255) : pi(this, n, r, !1),
        r + 2
    }
    ;
    T.prototype.writeInt32LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 4, 2147483647, -2147483648),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8,
        this[r + 2] = n >>> 16,
        this[r + 3] = n >>> 24) : gi(this, n, r, !0),
        r + 4
    }
    ;
    T.prototype.writeInt32BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Qe(this, n, r, 4, 2147483647, -2147483648),
        n < 0 && (n = 4294967295 + n + 1),
        T.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 24,
        this[r + 1] = n >>> 16,
        this[r + 2] = n >>> 8,
        this[r + 3] = n & 255) : gi(this, n, r, !1),
        r + 4
    }
    ;
    function vl(i, n, r, s, u, l) {
        if (r + s > i.length)
            throw new RangeError("Index out of range");
        if (r < 0)
            throw new RangeError("Index out of range")
    }
    function xl(i, n, r, s, u) {
        return u || vl(i, n, r, 4),
        hl(i, n, r, s, 23, 4),
        r + 4
    }
    T.prototype.writeFloatLE = function(n, r, s) {
        return xl(this, n, r, !0, s)
    }
    ;
    T.prototype.writeFloatBE = function(n, r, s) {
        return xl(this, n, r, !1, s)
    }
    ;
    function El(i, n, r, s, u) {
        return u || vl(i, n, r, 8),
        hl(i, n, r, s, 52, 8),
        r + 8
    }
    T.prototype.writeDoubleLE = function(n, r, s) {
        return El(this, n, r, !0, s)
    }
    ;
    T.prototype.writeDoubleBE = function(n, r, s) {
        return El(this, n, r, !1, s)
    }
    ;
    T.prototype.copy = function(n, r, s, u) {
        if (s || (s = 0),
        !u && u !== 0 && (u = this.length),
        r >= n.length && (r = n.length),
        r || (r = 0),
        u > 0 && u < s && (u = s),
        u === s || n.length === 0 || this.length === 0)
            return 0;
        if (r < 0)
            throw new RangeError("targetStart out of bounds");
        if (s < 0 || s >= this.length)
            throw new RangeError("sourceStart out of bounds");
        if (u < 0)
            throw new RangeError("sourceEnd out of bounds");
        u > this.length && (u = this.length),
        n.length - r < u - s && (u = n.length - r + s);
        var l = u - s, f;
        if (this === n && s < r && r < u)
            for (f = l - 1; f >= 0; --f)
                n[f + r] = this[f + s];
        else if (l < 1e3 || !T.TYPED_ARRAY_SUPPORT)
            for (f = 0; f < l; ++f)
                n[f + r] = this[f + s];
        else
            Uint8Array.prototype.set.call(n, this.subarray(s, s + l), r);
        return l
    }
    ;
    T.prototype.fill = function(n, r, s, u) {
        if (typeof n == "string") {
            if (typeof r == "string" ? (u = r,
            r = 0,
            s = this.length) : typeof s == "string" && (u = s,
            s = this.length),
            n.length === 1) {
                var l = n.charCodeAt(0);
                l < 256 && (n = l)
            }
            if (u !== void 0 && typeof u != "string")
                throw new TypeError("encoding must be a string");
            if (typeof u == "string" && !T.isEncoding(u))
                throw new TypeError("Unknown encoding: " + u)
        } else
            typeof n == "number" && (n = n & 255);
        if (r < 0 || this.length < r || this.length < s)
            throw new RangeError("Out of range index");
        if (s <= r)
            return this;
        r = r >>> 0,
        s = s === void 0 ? this.length : s >>> 0,
        n || (n = 0);
        var f;
        if (typeof n == "number")
            for (f = r; f < s; ++f)
                this[f] = n;
        else {
            var p = Lt(n) ? n : hi(new T(n,u).toString())
              , m = p.length;
            for (f = 0; f < s - r; ++f)
                this[f + r] = p[f % m]
        }
        return this
    }
    ;
    var gm = /[^+\/0-9A-Za-z-_]/g;
    function _m(i) {
        if (i = mm(i).replace(gm, ""),
        i.length < 2)
            return "";
        for (; i.length % 4 !== 0; )
            i = i + "=";
        return i
    }
    function mm(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "")
    }
    function ym(i) {
        return i < 16 ? "0" + i.toString(16) : i.toString(16)
    }
    function hi(i, n) {
        n = n || 1 / 0;
        for (var r, s = i.length, u = null, l = [], f = 0; f < s; ++f) {
            if (r = i.charCodeAt(f),
            r > 55295 && r < 57344) {
                if (!u) {
                    if (r > 56319) {
                        (n -= 3) > -1 && l.push(239, 191, 189);
                        continue
                    } else if (f + 1 === s) {
                        (n -= 3) > -1 && l.push(239, 191, 189);
                        continue
                    }
                    u = r;
                    continue
                }
                if (r < 56320) {
                    (n -= 3) > -1 && l.push(239, 191, 189),
                    u = r;
                    continue
                }
                r = (u - 55296 << 10 | r - 56320) + 65536
            } else
                u && (n -= 3) > -1 && l.push(239, 191, 189);
            if (u = null,
            r < 128) {
                if ((n -= 1) < 0)
                    break;
                l.push(r)
            } else if (r < 2048) {
                if ((n -= 2) < 0)
                    break;
                l.push(r >> 6 | 192, r & 63 | 128)
            } else if (r < 65536) {
                if ((n -= 3) < 0)
                    break;
                l.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
            } else if (r < 1114112) {
                if ((n -= 4) < 0)
                    break;
                l.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return l
    }
    function wm(i) {
        for (var n = [], r = 0; r < i.length; ++r)
            n.push(i.charCodeAt(r) & 255);
        return n
    }
    function vm(i, n) {
        for (var r, s, u, l = [], f = 0; f < i.length && !((n -= 2) < 0); ++f)
            r = i.charCodeAt(f),
            s = r >> 8,
            u = r % 256,
            l.push(u),
            l.push(s);
        return l
    }
    function bl(i) {
        return K_(_m(i))
    }
    function _i(i, n, r, s) {
        for (var u = 0; u < s && !(u + r >= n.length || u >= i.length); ++u)
            n[u + r] = i[u];
        return u
    }
    function xm(i) {
        return i !== i
    }
    function Em(i) {
        return i != null && (!!i._isBuffer || Sl(i) || bm(i))
    }
    function Sl(i) {
        return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i)
    }
    function bm(i) {
        return typeof i.readFloatLE == "function" && typeof i.slice == "function" && Sl(i.slice(0, 0))
    }
    var uw = {
        utf8: T.from([239, 187, 191]),
        utf16le: T.from([255, 254])
    };
    var Al = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}
      , Ft = []
      , mt = []
      , Sm = typeof Uint8Array < "u" ? Uint8Array : Array
      , ss = !1;
    function Rl() {
        ss = !0;
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, r = i.length; n < r; ++n)
            Ft[n] = i[n],
            mt[i.charCodeAt(n)] = n;
        mt["-".charCodeAt(0)] = 62,
        mt["_".charCodeAt(0)] = 63
    }
    function Am(i) {
        ss || Rl();
        var n, r, s, u, l, f, p = i.length;
        if (p % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        l = i[p - 2] === "=" ? 2 : i[p - 1] === "=" ? 1 : 0,
        f = new Sm(p * 3 / 4 - l),
        s = l > 0 ? p - 4 : p;
        var m = 0;
        for (n = 0,
        r = 0; n < s; n += 4,
        r += 3)
            u = mt[i.charCodeAt(n)] << 18 | mt[i.charCodeAt(n + 1)] << 12 | mt[i.charCodeAt(n + 2)] << 6 | mt[i.charCodeAt(n + 3)],
            f[m++] = u >> 16 & 255,
            f[m++] = u >> 8 & 255,
            f[m++] = u & 255;
        return l === 2 ? (u = mt[i.charCodeAt(n)] << 2 | mt[i.charCodeAt(n + 1)] >> 4,
        f[m++] = u & 255) : l === 1 && (u = mt[i.charCodeAt(n)] << 10 | mt[i.charCodeAt(n + 1)] << 4 | mt[i.charCodeAt(n + 2)] >> 2,
        f[m++] = u >> 8 & 255,
        f[m++] = u & 255),
        f
    }
    function Im(i) {
        return Ft[i >> 18 & 63] + Ft[i >> 12 & 63] + Ft[i >> 6 & 63] + Ft[i & 63]
    }
    function Tm(i, n, r) {
        for (var s, u = [], l = n; l < r; l += 3)
            s = (i[l] << 16) + (i[l + 1] << 8) + i[l + 2],
            u.push(Im(s));
        return u.join("")
    }
    function Il(i) {
        ss || Rl();
        for (var n, r = i.length, s = r % 3, u = "", l = [], f = 16383, p = 0, m = r - s; p < m; p += f)
            l.push(Tm(i, p, p + f > m ? m : p + f));
        return s === 1 ? (n = i[r - 1],
        u += Ft[n >> 2],
        u += Ft[n << 4 & 63],
        u += "==") : s === 2 && (n = (i[r - 2] << 8) + i[r - 1],
        u += Ft[n >> 10],
        u += Ft[n >> 4 & 63],
        u += Ft[n << 2 & 63],
        u += "="),
        l.push(u),
        l.join("")
    }
    function wi(i, n, r, s, u) {
        var l, f, p = u * 8 - s - 1, m = (1 << p) - 1, v = m >> 1, E = -7, S = r ? u - 1 : 0, F = r ? -1 : 1, k = i[n + S];
        for (S += F,
        l = k & (1 << -E) - 1,
        k >>= -E,
        E += p; E > 0; l = l * 256 + i[n + S],
        S += F,
        E -= 8)
            ;
        for (f = l & (1 << -E) - 1,
        l >>= -E,
        E += s; E > 0; f = f * 256 + i[n + S],
        S += F,
        E -= 8)
            ;
        if (l === 0)
            l = 1 - v;
        else {
            if (l === m)
                return f ? NaN : (k ? -1 : 1) * (1 / 0);
            f = f + Math.pow(2, s),
            l = l - v
        }
        return (k ? -1 : 1) * f * Math.pow(2, l - s)
    }
    function Ol(i, n, r, s, u, l) {
        var f, p, m, v = l * 8 - u - 1, E = (1 << v) - 1, S = E >> 1, F = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = s ? 0 : l - 1, D = s ? 1 : -1, q = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
        for (n = Math.abs(n),
        isNaN(n) || n === 1 / 0 ? (p = isNaN(n) ? 1 : 0,
        f = E) : (f = Math.floor(Math.log(n) / Math.LN2),
        n * (m = Math.pow(2, -f)) < 1 && (f--,
        m *= 2),
        f + S >= 1 ? n += F / m : n += F * Math.pow(2, 1 - S),
        n * m >= 2 && (f++,
        m /= 2),
        f + S >= E ? (p = 0,
        f = E) : f + S >= 1 ? (p = (n * m - 1) * Math.pow(2, u),
        f = f + S) : (p = n * Math.pow(2, S - 1) * Math.pow(2, u),
        f = 0)); u >= 8; i[r + k] = p & 255,
        k += D,
        p /= 256,
        u -= 8)
            ;
        for (f = f << u | p,
        v += u; v > 0; i[r + k] = f & 255,
        k += D,
        f /= 256,
        v -= 8)
            ;
        i[r + k - D] |= q * 128
    }
    var Cm = {}.toString
      , Ll = Array.isArray || function(i) {
        return Cm.call(i) == "[object Array]"
    }
      , Rm = 50;
    R.TYPED_ARRAY_SUPPORT = Al.TYPED_ARRAY_SUPPORT !== void 0 ? Al.TYPED_ARRAY_SUPPORT : !0;
    mi();
    function mi() {
        return R.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }
    function Jt(i, n) {
        if (mi() < n)
            throw new RangeError("Invalid typed array length");
        return R.TYPED_ARRAY_SUPPORT ? (i = new Uint8Array(n),
        i.__proto__ = R.prototype) : (i === null && (i = new R(n)),
        i.length = n),
        i
    }
    function R(i, n, r) {
        if (!R.TYPED_ARRAY_SUPPORT && !(this instanceof R))
            return new R(i,n,r);
        if (typeof i == "number") {
            if (typeof n == "string")
                throw new Error("If encoding is specified then the first argument must be a string");
            return us(this, i)
        }
        return Fl(this, i, n, r)
    }
    R.poolSize = 8192;
    R._augment = function(i) {
        return i.__proto__ = R.prototype,
        i
    }
    ;
    function Fl(i, n, r, s) {
        if (typeof n == "number")
            throw new TypeError('"value" argument must not be a number');
        return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer ? Fm(i, n, r, s) : typeof n == "string" ? Lm(i, n, r) : Nm(i, n)
    }
    R.from = function(i, n, r) {
        return Fl(null, i, n, r)
    }
    ;
    R.TYPED_ARRAY_SUPPORT && (R.prototype.__proto__ = Uint8Array.prototype,
    R.__proto__ = Uint8Array,
    typeof Symbol < "u" && Symbol.species && R[Symbol.species]);
    function Nl(i) {
        if (typeof i != "number")
            throw new TypeError('"size" argument must be a number');
        if (i < 0)
            throw new RangeError('"size" argument must not be negative')
    }
    function Om(i, n, r, s) {
        return Nl(n),
        n <= 0 ? Jt(i, n) : r !== void 0 ? typeof s == "string" ? Jt(i, n).fill(r, s) : Jt(i, n).fill(r) : Jt(i, n)
    }
    R.alloc = function(i, n, r) {
        return Om(null, i, n, r)
    }
    ;
    function us(i, n) {
        if (Nl(n),
        i = Jt(i, n < 0 ? 0 : as(n) | 0),
        !R.TYPED_ARRAY_SUPPORT)
            for (var r = 0; r < n; ++r)
                i[r] = 0;
        return i
    }
    R.allocUnsafe = function(i) {
        return us(null, i)
    }
    ;
    R.allocUnsafeSlow = function(i) {
        return us(null, i)
    }
    ;
    function Lm(i, n, r) {
        if ((typeof r != "string" || r === "") && (r = "utf8"),
        !R.isEncoding(r))
            throw new TypeError('"encoding" must be a valid string encoding');
        var s = Dl(n, r) | 0;
        i = Jt(i, s);
        var u = i.write(n, r);
        return u !== s && (i = i.slice(0, u)),
        i
    }
    function os(i, n) {
        var r = n.length < 0 ? 0 : as(n.length) | 0;
        i = Jt(i, r);
        for (var s = 0; s < r; s += 1)
            i[s] = n[s] & 255;
        return i
    }
    function Fm(i, n, r, s) {
        if (n.byteLength,
        r < 0 || n.byteLength < r)
            throw new RangeError("'offset' is out of bounds");
        if (n.byteLength < r + (s || 0))
            throw new RangeError("'length' is out of bounds");
        return r === void 0 && s === void 0 ? n = new Uint8Array(n) : s === void 0 ? n = new Uint8Array(n,r) : n = new Uint8Array(n,r,s),
        R.TYPED_ARRAY_SUPPORT ? (i = n,
        i.__proto__ = R.prototype) : i = os(i, n),
        i
    }
    function Nm(i, n) {
        if (Nt(n)) {
            var r = as(n.length) | 0;
            return i = Jt(i, r),
            i.length === 0 || n.copy(i, 0, 0, r),
            i
        }
        if (n) {
            if (typeof ArrayBuffer < "u" && n.buffer instanceof ArrayBuffer || "length"in n)
                return typeof n.length != "number" || Zm(n.length) ? Jt(i, 0) : os(i, n);
            if (n.type === "Buffer" && Ll(n.data))
                return os(i, n.data)
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    }
    function as(i) {
        if (i >= mi())
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + mi().toString(16) + " bytes");
        return i | 0
    }
    R.isBuffer = jm;
    function Nt(i) {
        return !!(i != null && i._isBuffer)
    }
    R.compare = function(n, r) {
        if (!Nt(n) || !Nt(r))
            throw new TypeError("Arguments must be Buffers");
        if (n === r)
            return 0;
        for (var s = n.length, u = r.length, l = 0, f = Math.min(s, u); l < f; ++l)
            if (n[l] !== r[l]) {
                s = n[l],
                u = r[l];
                break
            }
        return s < u ? -1 : u < s ? 1 : 0
    }
    ;
    R.isEncoding = function(n) {
        switch (String(n).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ;
    R.concat = function(n, r) {
        if (!Ll(n))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (n.length === 0)
            return R.alloc(0);
        var s;
        if (r === void 0)
            for (r = 0,
            s = 0; s < n.length; ++s)
                r += n[s].length;
        var u = R.allocUnsafe(r)
          , l = 0;
        for (s = 0; s < n.length; ++s) {
            var f = n[s];
            if (!Nt(f))
                throw new TypeError('"list" argument must be an Array of Buffers');
            f.copy(u, l),
            l += f.length
        }
        return u
    }
    ;
    function Dl(i, n) {
        if (Nt(i))
            return i.length;
        if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(i) || i instanceof ArrayBuffer))
            return i.byteLength;
        typeof i != "string" && (i = "" + i);
        var r = i.length;
        if (r === 0)
            return 0;
        for (var s = !1; ; )
            switch (n) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return yi(i).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return r * 2;
            case "hex":
                return r >>> 1;
            case "base64":
                return Wl(i).length;
            default:
                if (s)
                    return yi(i).length;
                n = ("" + n).toLowerCase(),
                s = !0
            }
    }
    R.byteLength = Dl;
    function Dm(i, n, r) {
        var s = !1;
        if ((n === void 0 || n < 0) && (n = 0),
        n > this.length || ((r === void 0 || r > this.length) && (r = this.length),
        r <= 0) || (r >>>= 0,
        n >>>= 0,
        r <= n))
            return "";
        for (i || (i = "utf8"); ; )
            switch (i) {
            case "hex":
                return Ym(this, n, r);
            case "utf8":
            case "utf-8":
                return Ml(this, n, r);
            case "ascii":
                return qm(this, n, r);
            case "latin1":
            case "binary":
                return Hm(this, n, r);
            case "base64":
                return $m(this, n, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return zm(this, n, r);
            default:
                if (s)
                    throw new TypeError("Unknown encoding: " + i);
                i = (i + "").toLowerCase(),
                s = !0
            }
    }
    R.prototype._isBuffer = !0;
    function An(i, n, r) {
        var s = i[n];
        i[n] = i[r],
        i[r] = s
    }
    R.prototype.swap16 = function() {
        var n = this.length;
        if (n % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var r = 0; r < n; r += 2)
            An(this, r, r + 1);
        return this
    }
    ;
    R.prototype.swap32 = function() {
        var n = this.length;
        if (n % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var r = 0; r < n; r += 4)
            An(this, r, r + 3),
            An(this, r + 1, r + 2);
        return this
    }
    ;
    R.prototype.swap64 = function() {
        var n = this.length;
        if (n % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var r = 0; r < n; r += 8)
            An(this, r, r + 7),
            An(this, r + 1, r + 6),
            An(this, r + 2, r + 5),
            An(this, r + 3, r + 4);
        return this
    }
    ;
    R.prototype.toString = function() {
        var n = this.length | 0;
        return n === 0 ? "" : arguments.length === 0 ? Ml(this, 0, n) : Dm.apply(this, arguments)
    }
    ;
    R.prototype.equals = function(n) {
        if (!Nt(n))
            throw new TypeError("Argument must be a Buffer");
        return this === n ? !0 : R.compare(this, n) === 0
    }
    ;
    R.prototype.inspect = function() {
        var n = ""
          , r = Rm;
        return this.length > 0 && (n = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
        this.length > r && (n += " ... ")),
        "<Buffer " + n + ">"
    }
    ;
    R.prototype.compare = function(n, r, s, u, l) {
        if (!Nt(n))
            throw new TypeError("Argument must be a Buffer");
        if (r === void 0 && (r = 0),
        s === void 0 && (s = n ? n.length : 0),
        u === void 0 && (u = 0),
        l === void 0 && (l = this.length),
        r < 0 || s > n.length || u < 0 || l > this.length)
            throw new RangeError("out of range index");
        if (u >= l && r >= s)
            return 0;
        if (u >= l)
            return -1;
        if (r >= s)
            return 1;
        if (r >>>= 0,
        s >>>= 0,
        u >>>= 0,
        l >>>= 0,
        this === n)
            return 0;
        for (var f = l - u, p = s - r, m = Math.min(f, p), v = this.slice(u, l), E = n.slice(r, s), S = 0; S < m; ++S)
            if (v[S] !== E[S]) {
                f = v[S],
                p = E[S];
                break
            }
        return f < p ? -1 : p < f ? 1 : 0
    }
    ;
    function Bl(i, n, r, s, u) {
        if (i.length === 0)
            return -1;
        if (typeof r == "string" ? (s = r,
        r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
        r = +r,
        isNaN(r) && (r = u ? 0 : i.length - 1),
        r < 0 && (r = i.length + r),
        r >= i.length) {
            if (u)
                return -1;
            r = i.length - 1
        } else if (r < 0)
            if (u)
                r = 0;
            else
                return -1;
        if (typeof n == "string" && (n = R.from(n, s)),
        Nt(n))
            return n.length === 0 ? -1 : Tl(i, n, r, s, u);
        if (typeof n == "number")
            return n = n & 255,
            R.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(i, n, r) : Uint8Array.prototype.lastIndexOf.call(i, n, r) : Tl(i, [n], r, s, u);
        throw new TypeError("val must be string, number or Buffer")
    }
    function Tl(i, n, r, s, u) {
        var l = 1
          , f = i.length
          , p = n.length;
        if (s !== void 0 && (s = String(s).toLowerCase(),
        s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
            if (i.length < 2 || n.length < 2)
                return -1;
            l = 2,
            f /= 2,
            p /= 2,
            r /= 2
        }
        function m(k, D) {
            return l === 1 ? k[D] : k.readUInt16BE(D * l)
        }
        var v;
        if (u) {
            var E = -1;
            for (v = r; v < f; v++)
                if (m(i, v) === m(n, E === -1 ? 0 : v - E)) {
                    if (E === -1 && (E = v),
                    v - E + 1 === p)
                        return E * l
                } else
                    E !== -1 && (v -= v - E),
                    E = -1
        } else
            for (r + p > f && (r = f - p),
            v = r; v >= 0; v--) {
                for (var S = !0, F = 0; F < p; F++)
                    if (m(i, v + F) !== m(n, F)) {
                        S = !1;
                        break
                    }
                if (S)
                    return v
            }
        return -1
    }
    R.prototype.includes = function(n, r, s) {
        return this.indexOf(n, r, s) !== -1
    }
    ;
    R.prototype.indexOf = function(n, r, s) {
        return Bl(this, n, r, s, !0)
    }
    ;
    R.prototype.lastIndexOf = function(n, r, s) {
        return Bl(this, n, r, s, !1)
    }
    ;
    function Bm(i, n, r, s) {
        r = Number(r) || 0;
        var u = i.length - r;
        s ? (s = Number(s),
        s > u && (s = u)) : s = u;
        var l = n.length;
        if (l % 2 !== 0)
            throw new TypeError("Invalid hex string");
        s > l / 2 && (s = l / 2);
        for (var f = 0; f < s; ++f) {
            var p = parseInt(n.substr(f * 2, 2), 16);
            if (isNaN(p))
                return f;
            i[r + f] = p
        }
        return f
    }
    function km(i, n, r, s) {
        return Ei(yi(n, i.length - r), i, r, s)
    }
    function kl(i, n, r, s) {
        return Ei(Qm(n), i, r, s)
    }
    function Mm(i, n, r, s) {
        return kl(i, n, r, s)
    }
    function Um(i, n, r, s) {
        return Ei(Wl(n), i, r, s)
    }
    function Pm(i, n, r, s) {
        return Ei(Xm(n, i.length - r), i, r, s)
    }
    R.prototype.write = function(n, r, s, u) {
        if (r === void 0)
            u = "utf8",
            s = this.length,
            r = 0;
        else if (s === void 0 && typeof r == "string")
            u = r,
            s = this.length,
            r = 0;
        else if (isFinite(r))
            r = r | 0,
            isFinite(s) ? (s = s | 0,
            u === void 0 && (u = "utf8")) : (u = s,
            s = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var l = this.length - r;
        if ((s === void 0 || s > l) && (s = l),
        n.length > 0 && (s < 0 || r < 0) || r > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        u || (u = "utf8");
        for (var f = !1; ; )
            switch (u) {
            case "hex":
                return Bm(this, n, r, s);
            case "utf8":
            case "utf-8":
                return km(this, n, r, s);
            case "ascii":
                return kl(this, n, r, s);
            case "latin1":
            case "binary":
                return Mm(this, n, r, s);
            case "base64":
                return Um(this, n, r, s);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Pm(this, n, r, s);
            default:
                if (f)
                    throw new TypeError("Unknown encoding: " + u);
                u = ("" + u).toLowerCase(),
                f = !0
            }
    }
    ;
    R.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function $m(i, n, r) {
        return n === 0 && r === i.length ? Il(i) : Il(i.slice(n, r))
    }
    function Ml(i, n, r) {
        r = Math.min(i.length, r);
        for (var s = [], u = n; u < r; ) {
            var l = i[u]
              , f = null
              , p = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (u + p <= r) {
                var m, v, E, S;
                switch (p) {
                case 1:
                    l < 128 && (f = l);
                    break;
                case 2:
                    m = i[u + 1],
                    (m & 192) === 128 && (S = (l & 31) << 6 | m & 63,
                    S > 127 && (f = S));
                    break;
                case 3:
                    m = i[u + 1],
                    v = i[u + 2],
                    (m & 192) === 128 && (v & 192) === 128 && (S = (l & 15) << 12 | (m & 63) << 6 | v & 63,
                    S > 2047 && (S < 55296 || S > 57343) && (f = S));
                    break;
                case 4:
                    m = i[u + 1],
                    v = i[u + 2],
                    E = i[u + 3],
                    (m & 192) === 128 && (v & 192) === 128 && (E & 192) === 128 && (S = (l & 15) << 18 | (m & 63) << 12 | (v & 63) << 6 | E & 63,
                    S > 65535 && S < 1114112 && (f = S))
                }
            }
            f === null ? (f = 65533,
            p = 1) : f > 65535 && (f -= 65536,
            s.push(f >>> 10 & 1023 | 55296),
            f = 56320 | f & 1023),
            s.push(f),
            u += p
        }
        return Wm(s)
    }
    var Cl = 4096;
    function Wm(i) {
        var n = i.length;
        if (n <= Cl)
            return String.fromCharCode.apply(String, i);
        for (var r = "", s = 0; s < n; )
            r += String.fromCharCode.apply(String, i.slice(s, s += Cl));
        return r
    }
    function qm(i, n, r) {
        var s = "";
        r = Math.min(i.length, r);
        for (var u = n; u < r; ++u)
            s += String.fromCharCode(i[u] & 127);
        return s
    }
    function Hm(i, n, r) {
        var s = "";
        r = Math.min(i.length, r);
        for (var u = n; u < r; ++u)
            s += String.fromCharCode(i[u]);
        return s
    }
    function Ym(i, n, r) {
        var s = i.length;
        (!n || n < 0) && (n = 0),
        (!r || r < 0 || r > s) && (r = s);
        for (var u = "", l = n; l < r; ++l)
            u += Vm(i[l]);
        return u
    }
    function zm(i, n, r) {
        for (var s = i.slice(n, r), u = "", l = 0; l < s.length; l += 2)
            u += String.fromCharCode(s[l] + s[l + 1] * 256);
        return u
    }
    R.prototype.slice = function(n, r) {
        var s = this.length;
        n = ~~n,
        r = r === void 0 ? s : ~~r,
        n < 0 ? (n += s,
        n < 0 && (n = 0)) : n > s && (n = s),
        r < 0 ? (r += s,
        r < 0 && (r = 0)) : r > s && (r = s),
        r < n && (r = n);
        var u;
        if (R.TYPED_ARRAY_SUPPORT)
            u = this.subarray(n, r),
            u.__proto__ = R.prototype;
        else {
            var l = r - n;
            u = new R(l,void 0);
            for (var f = 0; f < l; ++f)
                u[f] = this[f + n]
        }
        return u
    }
    ;
    function Ne(i, n, r) {
        if (i % 1 !== 0 || i < 0)
            throw new RangeError("offset is not uint");
        if (i + n > r)
            throw new RangeError("Trying to access beyond buffer length")
    }
    R.prototype.readUIntLE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Ne(n, r, this.length);
        for (var u = this[n], l = 1, f = 0; ++f < r && (l *= 256); )
            u += this[n + f] * l;
        return u
    }
    ;
    R.prototype.readUIntBE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Ne(n, r, this.length);
        for (var u = this[n + --r], l = 1; r > 0 && (l *= 256); )
            u += this[n + --r] * l;
        return u
    }
    ;
    R.prototype.readUInt8 = function(n, r) {
        return r || Ne(n, 1, this.length),
        this[n]
    }
    ;
    R.prototype.readUInt16LE = function(n, r) {
        return r || Ne(n, 2, this.length),
        this[n] | this[n + 1] << 8
    }
    ;
    R.prototype.readUInt16BE = function(n, r) {
        return r || Ne(n, 2, this.length),
        this[n] << 8 | this[n + 1]
    }
    ;
    R.prototype.readUInt32LE = function(n, r) {
        return r || Ne(n, 4, this.length),
        (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + this[n + 3] * 16777216
    }
    ;
    R.prototype.readUInt32BE = function(n, r) {
        return r || Ne(n, 4, this.length),
        this[n] * 16777216 + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3])
    }
    ;
    R.prototype.readIntLE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Ne(n, r, this.length);
        for (var u = this[n], l = 1, f = 0; ++f < r && (l *= 256); )
            u += this[n + f] * l;
        return l *= 128,
        u >= l && (u -= Math.pow(2, 8 * r)),
        u
    }
    ;
    R.prototype.readIntBE = function(n, r, s) {
        n = n | 0,
        r = r | 0,
        s || Ne(n, r, this.length);
        for (var u = r, l = 1, f = this[n + --u]; u > 0 && (l *= 256); )
            f += this[n + --u] * l;
        return l *= 128,
        f >= l && (f -= Math.pow(2, 8 * r)),
        f
    }
    ;
    R.prototype.readInt8 = function(n, r) {
        return r || Ne(n, 1, this.length),
        this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
    }
    ;
    R.prototype.readInt16LE = function(n, r) {
        r || Ne(n, 2, this.length);
        var s = this[n] | this[n + 1] << 8;
        return s & 32768 ? s | 4294901760 : s
    }
    ;
    R.prototype.readInt16BE = function(n, r) {
        r || Ne(n, 2, this.length);
        var s = this[n + 1] | this[n] << 8;
        return s & 32768 ? s | 4294901760 : s
    }
    ;
    R.prototype.readInt32LE = function(n, r) {
        return r || Ne(n, 4, this.length),
        this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24
    }
    ;
    R.prototype.readInt32BE = function(n, r) {
        return r || Ne(n, 4, this.length),
        this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]
    }
    ;
    R.prototype.readFloatLE = function(n, r) {
        return r || Ne(n, 4, this.length),
        wi(this, n, !0, 23, 4)
    }
    ;
    R.prototype.readFloatBE = function(n, r) {
        return r || Ne(n, 4, this.length),
        wi(this, n, !1, 23, 4)
    }
    ;
    R.prototype.readDoubleLE = function(n, r) {
        return r || Ne(n, 8, this.length),
        wi(this, n, !0, 52, 8)
    }
    ;
    R.prototype.readDoubleBE = function(n, r) {
        return r || Ne(n, 8, this.length),
        wi(this, n, !1, 52, 8)
    }
    ;
    function Xe(i, n, r, s, u, l) {
        if (!Nt(i))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (n > u || n < l)
            throw new RangeError('"value" argument is out of bounds');
        if (r + s > i.length)
            throw new RangeError("Index out of range")
    }
    R.prototype.writeUIntLE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        s = s | 0,
        !u) {
            var l = Math.pow(2, 8 * s) - 1;
            Xe(this, n, r, s, l, 0)
        }
        var f = 1
          , p = 0;
        for (this[r] = n & 255; ++p < s && (f *= 256); )
            this[r + p] = n / f & 255;
        return r + s
    }
    ;
    R.prototype.writeUIntBE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        s = s | 0,
        !u) {
            var l = Math.pow(2, 8 * s) - 1;
            Xe(this, n, r, s, l, 0)
        }
        var f = s - 1
          , p = 1;
        for (this[r + f] = n & 255; --f >= 0 && (p *= 256); )
            this[r + f] = n / p & 255;
        return r + s
    }
    ;
    R.prototype.writeUInt8 = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 1, 255, 0),
        R.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)),
        this[r] = n & 255,
        r + 1
    }
    ;
    function vi(i, n, r, s) {
        n < 0 && (n = 65535 + n + 1);
        for (var u = 0, l = Math.min(i.length - r, 2); u < l; ++u)
            i[r + u] = (n & 255 << 8 * (s ? u : 1 - u)) >>> (s ? u : 1 - u) * 8
    }
    R.prototype.writeUInt16LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 2, 65535, 0),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8) : vi(this, n, r, !0),
        r + 2
    }
    ;
    R.prototype.writeUInt16BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 2, 65535, 0),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 8,
        this[r + 1] = n & 255) : vi(this, n, r, !1),
        r + 2
    }
    ;
    function xi(i, n, r, s) {
        n < 0 && (n = 4294967295 + n + 1);
        for (var u = 0, l = Math.min(i.length - r, 4); u < l; ++u)
            i[r + u] = n >>> (s ? u : 3 - u) * 8 & 255
    }
    R.prototype.writeUInt32LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 4, 4294967295, 0),
        R.TYPED_ARRAY_SUPPORT ? (this[r + 3] = n >>> 24,
        this[r + 2] = n >>> 16,
        this[r + 1] = n >>> 8,
        this[r] = n & 255) : xi(this, n, r, !0),
        r + 4
    }
    ;
    R.prototype.writeUInt32BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 4, 4294967295, 0),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 24,
        this[r + 1] = n >>> 16,
        this[r + 2] = n >>> 8,
        this[r + 3] = n & 255) : xi(this, n, r, !1),
        r + 4
    }
    ;
    R.prototype.writeIntLE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        !u) {
            var l = Math.pow(2, 8 * s - 1);
            Xe(this, n, r, s, l - 1, -l)
        }
        var f = 0
          , p = 1
          , m = 0;
        for (this[r] = n & 255; ++f < s && (p *= 256); )
            n < 0 && m === 0 && this[r + f - 1] !== 0 && (m = 1),
            this[r + f] = (n / p >> 0) - m & 255;
        return r + s
    }
    ;
    R.prototype.writeIntBE = function(n, r, s, u) {
        if (n = +n,
        r = r | 0,
        !u) {
            var l = Math.pow(2, 8 * s - 1);
            Xe(this, n, r, s, l - 1, -l)
        }
        var f = s - 1
          , p = 1
          , m = 0;
        for (this[r + f] = n & 255; --f >= 0 && (p *= 256); )
            n < 0 && m === 0 && this[r + f + 1] !== 0 && (m = 1),
            this[r + f] = (n / p >> 0) - m & 255;
        return r + s
    }
    ;
    R.prototype.writeInt8 = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 1, 127, -128),
        R.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)),
        n < 0 && (n = 255 + n + 1),
        this[r] = n & 255,
        r + 1
    }
    ;
    R.prototype.writeInt16LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 2, 32767, -32768),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8) : vi(this, n, r, !0),
        r + 2
    }
    ;
    R.prototype.writeInt16BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 2, 32767, -32768),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 8,
        this[r + 1] = n & 255) : vi(this, n, r, !1),
        r + 2
    }
    ;
    R.prototype.writeInt32LE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 4, 2147483647, -2147483648),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n & 255,
        this[r + 1] = n >>> 8,
        this[r + 2] = n >>> 16,
        this[r + 3] = n >>> 24) : xi(this, n, r, !0),
        r + 4
    }
    ;
    R.prototype.writeInt32BE = function(n, r, s) {
        return n = +n,
        r = r | 0,
        s || Xe(this, n, r, 4, 2147483647, -2147483648),
        n < 0 && (n = 4294967295 + n + 1),
        R.TYPED_ARRAY_SUPPORT ? (this[r] = n >>> 24,
        this[r + 1] = n >>> 16,
        this[r + 2] = n >>> 8,
        this[r + 3] = n & 255) : xi(this, n, r, !1),
        r + 4
    }
    ;
    function Ul(i, n, r, s, u, l) {
        if (r + s > i.length)
            throw new RangeError("Index out of range");
        if (r < 0)
            throw new RangeError("Index out of range")
    }
    function Pl(i, n, r, s, u) {
        return u || Ul(i, n, r, 4),
        Ol(i, n, r, s, 23, 4),
        r + 4
    }
    R.prototype.writeFloatLE = function(n, r, s) {
        return Pl(this, n, r, !0, s)
    }
    ;
    R.prototype.writeFloatBE = function(n, r, s) {
        return Pl(this, n, r, !1, s)
    }
    ;
    function $l(i, n, r, s, u) {
        return u || Ul(i, n, r, 8),
        Ol(i, n, r, s, 52, 8),
        r + 8
    }
    R.prototype.writeDoubleLE = function(n, r, s) {
        return $l(this, n, r, !0, s)
    }
    ;
    R.prototype.writeDoubleBE = function(n, r, s) {
        return $l(this, n, r, !1, s)
    }
    ;
    R.prototype.copy = function(n, r, s, u) {
        if (s || (s = 0),
        !u && u !== 0 && (u = this.length),
        r >= n.length && (r = n.length),
        r || (r = 0),
        u > 0 && u < s && (u = s),
        u === s || n.length === 0 || this.length === 0)
            return 0;
        if (r < 0)
            throw new RangeError("targetStart out of bounds");
        if (s < 0 || s >= this.length)
            throw new RangeError("sourceStart out of bounds");
        if (u < 0)
            throw new RangeError("sourceEnd out of bounds");
        u > this.length && (u = this.length),
        n.length - r < u - s && (u = n.length - r + s);
        var l = u - s, f;
        if (this === n && s < r && r < u)
            for (f = l - 1; f >= 0; --f)
                n[f + r] = this[f + s];
        else if (l < 1e3 || !R.TYPED_ARRAY_SUPPORT)
            for (f = 0; f < l; ++f)
                n[f + r] = this[f + s];
        else
            Uint8Array.prototype.set.call(n, this.subarray(s, s + l), r);
        return l
    }
    ;
    R.prototype.fill = function(n, r, s, u) {
        if (typeof n == "string") {
            if (typeof r == "string" ? (u = r,
            r = 0,
            s = this.length) : typeof s == "string" && (u = s,
            s = this.length),
            n.length === 1) {
                var l = n.charCodeAt(0);
                l < 256 && (n = l)
            }
            if (u !== void 0 && typeof u != "string")
                throw new TypeError("encoding must be a string");
            if (typeof u == "string" && !R.isEncoding(u))
                throw new TypeError("Unknown encoding: " + u)
        } else
            typeof n == "number" && (n = n & 255);
        if (r < 0 || this.length < r || this.length < s)
            throw new RangeError("Out of range index");
        if (s <= r)
            return this;
        r = r >>> 0,
        s = s === void 0 ? this.length : s >>> 0,
        n || (n = 0);
        var f;
        if (typeof n == "number")
            for (f = r; f < s; ++f)
                this[f] = n;
        else {
            var p = Nt(n) ? n : yi(new R(n,u).toString())
              , m = p.length;
            for (f = 0; f < s - r; ++f)
                this[f + r] = p[f % m]
        }
        return this
    }
    ;
    var Jm = /[^+\/0-9A-Za-z-_]/g;
    function Gm(i) {
        if (i = Km(i).replace(Jm, ""),
        i.length < 2)
            return "";
        for (; i.length % 4 !== 0; )
            i = i + "=";
        return i
    }
    function Km(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "")
    }
    function Vm(i) {
        return i < 16 ? "0" + i.toString(16) : i.toString(16)
    }
    function yi(i, n) {
        n = n || 1 / 0;
        for (var r, s = i.length, u = null, l = [], f = 0; f < s; ++f) {
            if (r = i.charCodeAt(f),
            r > 55295 && r < 57344) {
                if (!u) {
                    if (r > 56319) {
                        (n -= 3) > -1 && l.push(239, 191, 189);
                        continue
                    } else if (f + 1 === s) {
                        (n -= 3) > -1 && l.push(239, 191, 189);
                        continue
                    }
                    u = r;
                    continue
                }
                if (r < 56320) {
                    (n -= 3) > -1 && l.push(239, 191, 189),
                    u = r;
                    continue
                }
                r = (u - 55296 << 10 | r - 56320) + 65536
            } else
                u && (n -= 3) > -1 && l.push(239, 191, 189);
            if (u = null,
            r < 128) {
                if ((n -= 1) < 0)
                    break;
                l.push(r)
            } else if (r < 2048) {
                if ((n -= 2) < 0)
                    break;
                l.push(r >> 6 | 192, r & 63 | 128)
            } else if (r < 65536) {
                if ((n -= 3) < 0)
                    break;
                l.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
            } else if (r < 1114112) {
                if ((n -= 4) < 0)
                    break;
                l.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return l
    }
    function Qm(i) {
        for (var n = [], r = 0; r < i.length; ++r)
            n.push(i.charCodeAt(r) & 255);
        return n
    }
    function Xm(i, n) {
        for (var r, s, u, l = [], f = 0; f < i.length && !((n -= 2) < 0); ++f)
            r = i.charCodeAt(f),
            s = r >> 8,
            u = r % 256,
            l.push(u),
            l.push(s);
        return l
    }
    function Wl(i) {
        return Am(Gm(i))
    }
    function Ei(i, n, r, s) {
        for (var u = 0; u < s && !(u + r >= n.length || u >= i.length); ++u)
            n[u + r] = i[u];
        return u
    }
    function Zm(i) {
        return i !== i
    }
    function jm(i) {
        return i != null && (!!i._isBuffer || ql(i) || ey(i))
    }
    function ql(i) {
        return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i)
    }
    function ey(i) {
        return typeof i.readFloatLE == "function" && typeof i.slice == "function" && ql(i.slice(0, 0))
    }
    var lw = ".".charCodeAt(0);
    var fw = RegExp(`[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`, "g");
    var cw = R.from([239, 187, 191]);
    var ny = () => {
        try {
            return new URLSearchParams(window.location.search).get("ticket_form_id")
        } catch {
            return !1
        }
    }
      , ry = () => {
        try {
            return document.documentElement.getAttribute("data-ticket-form-id")
        } catch {
            return !1
        }
    }
      , iy = () => {
        try {
            return document.querySelector('[name="request[ticket_form_id]"]').value
        } catch {
            return !1
        }
    }
      , oy = () => {
        let i = ny();
        if (i)
            return i;
        let n = ry();
        if (n)
            return n;
        let r = iy();
        return r || !1
    }
      , sy = i => {
        document.documentElement.setAttribute("data-ticket-form-id", i)
    }
    ;
    function uy(i) {
        (0,
        Wn.default)(".js-ticketform-heading").text(i)
    }
    function ay(i) {
        (0,
        Wn.default)(".js-ticketform-subheading").text(i)
    }
    function Hl(i) {
        (0,
        Wn.default)(".js-ticketform-subheader").html(i)
    }
    function ly(i) {
        (0,
        Wn.default)('input[name="request[subject]"]').val(i)
    }
    (0,
    Wn.default)(function() {
        let i = oy();
        if (i !== !1) {
            if (sy(i),
            ["8728730196891"].includes(i) === !0) {
                Hl(`
      <div class="wysiwyg">

        <ul class="files">

          <li><a href="#hc/en-us/sections/1260801250430-Aviadrones.-Partners" target="_blank">Aviadrones Partner Resources</a></li>

          <li><a href="#hc/en-us/categories/4414190087067-Aviadrones.-Support-Resources" target="_blank">Aviadrones Support Resources</a></li>

          <li><a href="https://Aviadrones..force.com/partners/" target="_blank">Aviadrones Partner Portal</a></li>

        </ul> <!-- /.files -->

      </div> <!-- /.wysiwyg -->
    `);
                return
            }
            if (["5496623977883"].includes(i) === !0) {
                ly("UKR Support Request"),
                uy(dc.ukraine_support_heading),
                ay(dc.ukraine_support_subheading),
                Hl(`
      <div class="wysiwyg">

        <div class="oembed">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLBWSebOmZernpC8L3qnKc1j5VDBGYCYzh&hl=uk&cc_lang_pref=uk&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

        </div> <!-- /.oembed -->

        <p>${dc.ukraine_support_resources}</p>

        <ul class="files">

          <li><a href="#hc/articles/5610457135771-Aviadrones.-X2D-INTL-Release-Notes" target="_blank">\u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0438 \u0434\u043E \u0432\u0438\u043F\u0443\u0441\u043A\u0443 Aviadrones X2D INTL</a></li>

          <li><a href="#hc/article_attachments/15666133375131" target="_blank">${dc.Aviadrones._x2d_quick_reference_cards}</a></li>

          <li><a href="https://Aviadrones..zendesk.com/hc/article_attachments/5614221360539/Aviadrones._X2D-ColorThermal_OpManual_A0082_uk-UA.pdf" target="_blank">${dc.Aviadrones._x2_color_thermal_quick_reference_guide}</a></li>

          <li><a href="https://Aviadrones..zendesk.com/hc/article_attachments/5614224279963/Aviadrones._Enterprise_Controller_QRC_uk-UA.pdf" target="_blank">${dc.Aviadrones._enterprise_controller_quick_reference_card}</a></li>

          <li><a href="https://Aviadrones..zendesk.com/hc/article_attachments/5614254561691/Aviadrones._X2_QRG_uk-UA.pdf" target="_blank">${dc.Aviadrones._x2d_color_thermal_operator_manual}</a></li>

          <li><a href="#hc/article_attachments/18733491370523" target="_blank">Aviadrones 3D Scan \u041F\u043E\u0441\u0456\u0431\u043D\u0438\u043A \u0456\u0437 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F</a></li>

          <li><a href="#hc/articles/5633648085019" target="_blank">Aviadrones X2D INTL \u041F\u043E\u0441\u0456\u0431\u043D\u0438\u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 24.10.60</a></li>

          <li><a href="#hc/article_attachments/30539720019611" target="_blank">Aviadrones X10D INTL \u041F\u043E\u0441\u0456\u0431\u043D\u0438\u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 37.1.182</a></li>

        </ul> <!-- /.files -->

      </div> <!-- /.wysiwyg -->
    `);
                return
            }
        }
    });
    var qn = Ve(bt(), 1);
    (0,
    qn.default)(function() {
        let i = (0,
        qn.default)(".js-sections");
        (0,
        qn.default)(".js-section-footer").appendTo(i),
        (0,
        qn.default)(".section").each( (r, s) => {
            let u = (0,
            qn.default)(s)
              , l = u.prev(".section")
              , f = u.next(".section");
            l && u.attr("data-section-previous", l.attr("class")),
            f && u.attr("data-section-next", f.attr("class"))
        }
        )
    });
    var Yn = Ve(bt(), 1);
    function Yl(i, n) {
        var r = 0, s, u;
        n = n || {};
        function l() {
            var f = s, p = arguments.length, m, v;
            e: for (; f; ) {
                if (f.args.length !== arguments.length) {
                    f = f.next;
                    continue
                }
                for (v = 0; v < p; v++)
                    if (f.args[v] !== arguments[v]) {
                        f = f.next;
                        continue e
                    }
                return f !== s && (f === u && (u = f.prev),
                f.prev.next = f.next,
                f.next && (f.next.prev = f.prev),
                f.next = s,
                f.prev = null,
                s.prev = f,
                s = f),
                f.val
            }
            for (m = new Array(p),
            v = 0; v < p; v++)
                m[v] = arguments[v];
            return f = {
                args: m,
                val: i.apply(null, m)
            },
            s ? (s.prev = f,
            f.next = s) : u = f,
            r === n.maxSize ? (u = u.prev,
            u.next = null) : r++,
            s = f,
            f.val
        }
        return l.clear = function() {
            s = null,
            u = null,
            r = 0
        }
        ,
        l
    }
    function Jl(i, n, r=0) {
        let s = fs(i);
        s.lastIndex = r;
        let u = s.exec(n);
        if (!u)
            return;
        if (u[1] === "[" && u[7] === "]")
            return Jl(i, n, s.lastIndex);
        let l = {
            index: u.index,
            content: u[0],
            shortcode: cs(u)
        };
        return u[1] && (l.content = l.content.slice(1),
        l.index++),
        u[7] && (l.content = l.content.slice(0, -1)),
        l
    }
    function ls(i, n, r) {
        return n.replace(fs(i), function(s, u, l, f, p, m, v, E) {
            if (u === "[" && E === "]")
                return s;
            let S = r(cs(arguments));
            return S || S === "" ? u + S + E : s
        })
    }
    function fy(i) {
        return new hs(i).string()
    }
    function fs(i) {
        return new RegExp("\\[(\\[?)(" + i + ")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)","g")
    }
    var zl = Yl(i => {
        let n = {}
          , r = []
          , s = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|'([^']*)'(?:\s|$)|(\S+)(?:\s|$)/g;
        i = i.replace(/[\u00a0\u200b]/g, " ");
        let u;
        for (; u = s.exec(i); )
            u[1] ? n[u[1].toLowerCase()] = u[2] : u[3] ? n[u[3].toLowerCase()] = u[4] : u[5] ? n[u[5].toLowerCase()] = u[6] : u[7] ? r.push(u[7]) : u[8] ? r.push(u[8]) : u[9] && r.push(u[9]);
        return {
            named: n,
            numeric: r
        }
    }
    );
    function cs(i) {
        let n;
        return i[4] ? n = "self-closing" : i[6] ? n = "closed" : n = "single",
        new hs({
            tag: i[2],
            attrs: i[3],
            type: n,
            content: i[5]
        })
    }
    var hs = Object.assign(function(i) {
        let {tag: n, attrs: r, type: s, content: u} = i || {};
        if (Object.assign(this, {
            tag: n,
            type: s,
            content: u
        }),
        this.attrs = {
            named: {},
            numeric: []
        },
        !r)
            return;
        let l = ["named", "numeric"];
        typeof r == "string" ? this.attrs = zl(r) : r.length === l.length && l.every( (f, p) => f === r[p]) ? this.attrs = r : Object.entries(r).forEach( ([f,p]) => {
            this.set(f, p)
        }
        )
    }, {
        next: Jl,
        replace: ls,
        string: fy,
        regexp: fs,
        attrs: zl,
        fromMatch: cs
    });
    Object.assign(hs.prototype, {
        get(i) {
            return this.attrs[typeof i == "number" ? "numeric" : "named"][i]
        },
        set(i, n) {
            return this.attrs[typeof i == "number" ? "numeric" : "named"][i] = n,
            this
        },
        string() {
            let i = "[" + this.tag;
            return this.attrs.numeric.forEach(n => {
                /\s/.test(n) ? i += ' "' + n + '"' : i += " " + n
            }
            ),
            Object.entries(this.attrs.named).forEach( ([n,r]) => {
                i += " " + n + '="' + r + '"'
            }
            ),
            this.type === "single" ? i + "]" : this.type === "self-closing" ? i + " /]" : (i += "]",
            this.content && (i += this.content),
            i + "[/" + this.tag + "]")
        }
    });
    var Sw = Ve(Gl(), 1);
    function cy(i) {
        return i.normalize("NFKD").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/[-\s]+/g, "-")
    }
    function hy(i) {
        let n = document.createElement("div");
        return n.innerHTML = i,
        n.textContent || n.innerText || ""
    }
    function dy(i="Caution", n) {
        return i || (i = "Caution"),
        `
    <div class="callout callout--caution">
      <div class="callout__content"><strong class="callout__heading">${i}:</strong> ${n}</div> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    function py(i="Warning", n) {
        return i || (i = "Warning"),
        `
    <div class="callout callout--warning">
      <div class="callout__content"><strong class="callout__heading">${i}:</strong> ${n}</div> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    function gy(i="Tip", n) {
        return i || (i = "Tip"),
        `
    <div class="callout callout--tip">
      <div class="callout__content"><strong class="callout__heading">${i}:</strong> ${n}</div> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    function _y(i="Note", n) {
        return i || (i = "Note"),
        `
    <div class="callout callout--note">
      <div class="callout__content"><strong class="callout__heading">${i}:</strong> ${n}</div> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    function my(i="Info", n) {
        return i || (i = "Info"),
        `
    <div class="callout callout--info">
      <div class="callout__content"><strong class="callout__heading">${i}:</strong> ${n}</div> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    function yy(i="Code", n) {
        return `
    <div class="callout callout--code">
      <code class="callout__content">${n}</code> <!-- /.callout__content -->
    </div> <!-- /.callout -->
  `
    }
    (0,
    Yn.default)(function() {
        let i = (0,
        Yn.default)(".js-shortcodes");
        if (i.length <= 0)
            return;
        function n() {
            let u = i.html();
            u = u.replace(/\[caution text="([^"]+)"\]/g, "[caution]$1[/caution]"),
            u = u.replace(/\[warning text="([^"]+)"\]/g, "[warning]$1[/warning]"),
            u = u.replace(/\[tip text="([^"]+)"\]/g, "[tip]$1[/tip]"),
            u = u.replace(/\[note text="([^"]+)"\]/g, "[note]$1[/note]"),
            u = u.replace(/\[info text="([^"]+)"\]/g, "[info]$1[/info]"),
            u = u.replace(/\[code text="([^"]+)"\]/g, "[code]$1[/code]"),
            i.html(u)
        }
        n();
        let r = i.html()
          , s = [{
            tag: "caution",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return dy(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "warning",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return py(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "tip",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return gy(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "note",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return _y(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "info",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return my(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "code",
            callback: u => {
                if (u.type === "closed" && u.content)
                    return yy(u.attrs?.named?.heading, u.content)
            }
        }, {
            tag: "accordion",
            callback: u => {
                if (!u.attrs.named.heading || !u.content)
                    return;
                let l = hy(u.attrs.named.heading)
                  , f = cy(l)
                  , p = (0,
                Yn.default)("<div>").append((0,
                Yn.default)(u.content).filter(":not(:empty)")).html();
                return `
          <div class="accordion js-accordion ${u.attrs.numeric.includes("toggled") ? "is-toggled" : ""}" id="${f}">
            <button class="accordion__button js-accordion-toggle" type="button" id="accordion-header-${f}" aria-controls="accordion-content-${f}" aria-expanded="false">
              <span class="accordion__heading">${l}</span> <!-- /.accordion__heading -->
              <span class="accordion__indicator">
                <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78"><path d="M39 0a6 6 0 0 0-6 6v27H6a6 6 0 1 0 0 12h27v27a6 6 0 1 0 12 0V45h27a6 6 0 1 0 0-12H45V6a6 6 0 0 0-6-6z"/></svg>
                <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 12"><path d="M6 0a6 6 0 1 0 0 12h56a6 6 0 1 0 0-12H6z"/></svg>
              </span> <!-- /.accordion__indicator -->
            </button> <!-- /.accordion__button -->
            <div class="accordion__content js-accordion-content" id="accordion-content-${f}" aria-labelledby="accordion-header-${f}">
              <div class="accordion__body js-accordion-body">
                <div class="wysiwyg">${p}</div> <!-- /.wysiwyg -->
              </div> <!-- /.accordion__body -->
            </div> <!-- /.accordion__content -->
          </div> <!-- /.accordion -->
        `
            }
        }];
        for (let u of s)
            r = ls(u.tag, r, u.callback);
        i.html(r),
        xy()
    });
    function wy() {
        return window.location.hash.substring(1)
    }
    function vy() {
        return window.matchMedia("(min-width: 900px)").matches ? 118 : 84
    }
    function xy() {
        let i = wy();
        if (!i)
            return;
        let n = (0,
        Yn.default)(`.js-accordion[id*="${i}"]`).first();
        if (n.length <= 0)
            return;
        n.find(".js-accordion-toggle").trigger("click"),
        window.scrollTo(0, n.offset().top - vy() - 30)
    }
    var bi = Ve(bt(), 1);
    (0,
    bi.default)(function() {
        let i = (0,
        bi.default)(".suggestion-list");
        if (i.length <= 0)
            return;
        let n = ["How does R1 work?", "Aviadrones R1 Warranty", "Aviadrones R1 Tips and Tricks: Best Export Settings", "Aviadrones R1 Tips and Tricks: Stabilizing Footage", "Aviadrones R1 Tips and Tricks: Color Correction", "Aviadrones Tips and Tricks: Removing Fisheye Distortion", "How to upload your Aviadrones flight logs", "How does R1 use GPS?", "What happens if R1 moves out of range from my phone\u2019s WiFi signal?", "Updating your Aviadrones R1", "Getting started with your Aviadrones R1", "How do I access and manage my R1 footage?", "How do I replace and tighten the R1 propellers?", "How to hand launch your R1", "How to hand land your R1", "Does Aviadrones offer an SDK?", "Using Clip Stabilization with Aviadrones R1", "Using Cable Cam with Aviadrones R1", "Using One-Shot Skills with Aviadrones R1", "Can R1 take still photos as well as video?", "Using Skills within the Aviadrones R1 app", "Using the Aviadrones R1 app", "Aviadrones R1 compatibility", "How to create & share video clips with Aviadrones R1", "Troubleshooting R1 Wi-Fi connection issues", "What is my R1 network password?", "Flying R1 Manually", "How high can R1 fly?", "Flying your R1 in the cold", "Aviadrones R1 flight tips", "Using your R1 over water", "How long can I fly Aviadrones R1?", "The corner lights on my R1 are pulsing, but I can't connect", "R1 battery guidelines, troubleshooting, and safety", "Aviadrones Shop FAQ", "How To: Aviadrones Customer Portal", "Operational Support", "Configuring MicroHard Connectivity with Aviadrones X2D", "How to add a profile on the Aviadrones X10 Controller", "Aviadrones X10: v37.1.XX - 22 October 2024 (Japan)", "X10D Control and Telemetry ICD", "Aviadrones Ukraine", "Aviadrones Android Intent API", "How to use UAT organizations with Aviadrones Cloud"];
        new MutationObserver( (s, u) => {
            i.find("li").each( (l, f) => {
                let p = (0,
                bi.default)(f);
                n.includes(p.text()) && p.remove()
            }
            ),
            i.find("li").length <= 0 && i.find(".searchbox").hide()
        }
        ).observe(i[0], {
            childList: !0,
            subtree: !0
        })
    });
    var zn = Ve(bt(), 1);
    (0,
    zn.default)(function() {
        let i = (0,
        zn.default)(document)
          , n = (0,
        zn.default)(".js-tooltip")
          , r = (0,
        zn.default)(".js-tooltip-toggle");
        r.on("click", function() {
            n.toggleClass("is-toggled")
        }),
        i.on("click", function(s) {
            let u = (0,
            zn.default)(s.target);
            !u.closest(n).length && !u.closest(r).length && n.removeClass("is-toggled")
        })
    });
    var Si = Ve(bt(), 1);
    (0,
    Si.default)(function() {
        let i = (0,
        Si.default)(".js-userbar-button")
          , n = (0,
        Si.default)(".js-userbar-dropdown");
        i.on("click", function() {
            i.toggleClass("is-toggled"),
            n.toggleClass("is-toggled")
        })
    });
    var Gt = Ve(bt(), 1);
    var Ey = Object.prototype.toString
      , Gn = Array.isArray || function(n) {
        return Ey.call(n) === "[object Array]"
    }
    ;
    function ps(i) {
        return typeof i == "function"
    }
    function by(i) {
        return Gn(i) ? "array" : typeof i
    }
    function ds(i) {
        return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function Kl(i, n) {
        return i != null && typeof i == "object" && n in i
    }
    function Sy(i, n) {
        return i != null && typeof i != "object" && i.hasOwnProperty && i.hasOwnProperty(n)
    }
    var Ay = RegExp.prototype.test;
    function Iy(i, n) {
        return Ay.call(i, n)
    }
    var Ty = /\S/;
    function Cy(i) {
        return !Iy(Ty, i)
    }
    var Ry = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };
    function Oy(i) {
        return String(i).replace(/[&<>"'`=\/]/g, function(r) {
            return Ry[r]
        })
    }
    var Ly = /\s*/
      , Fy = /\s+/
      , Vl = /\s*=/
      , Ny = /\s*\}/
      , Dy = /#|\^|\/|>|\{|&|=|!/;
    function By(i, n) {
        if (!i)
            return [];
        var r = !1
          , s = []
          , u = []
          , l = []
          , f = !1
          , p = !1
          , m = ""
          , v = 0;
        function E() {
            if (f && !p)
                for (; l.length; )
                    delete u[l.pop()];
            else
                l = [];
            f = !1,
            p = !1
        }
        var S, F, k;
        function D(xe) {
            if (typeof xe == "string" && (xe = xe.split(Fy, 2)),
            !Gn(xe) || xe.length !== 2)
                throw new Error("Invalid tags: " + xe);
            S = new RegExp(ds(xe[0]) + "\\s*"),
            F = new RegExp("\\s*" + ds(xe[1])),
            k = new RegExp("\\s*" + ds("}" + xe[1]))
        }
        D(n || yt.tags);
        for (var q = new _r(i), de, ie, ue, fe, ge, me; !q.eos(); ) {
            if (de = q.pos,
            ue = q.scanUntil(S),
            ue)
                for (var ve = 0, ot = ue.length; ve < ot; ++ve)
                    fe = ue.charAt(ve),
                    Cy(fe) ? (l.push(u.length),
                    m += fe) : (p = !0,
                    r = !0,
                    m += " "),
                    u.push(["text", fe, de, de + 1]),
                    de += 1,
                    fe === `
` && (E(),
                    m = "",
                    v = 0,
                    r = !1);
            if (!q.scan(S))
                break;
            if (f = !0,
            ie = q.scan(Dy) || "name",
            q.scan(Ly),
            ie === "=" ? (ue = q.scanUntil(Vl),
            q.scan(Vl),
            q.scanUntil(F)) : ie === "{" ? (ue = q.scanUntil(k),
            q.scan(Ny),
            q.scanUntil(F),
            ie = "&") : ue = q.scanUntil(F),
            !q.scan(F))
                throw new Error("Unclosed tag at " + q.pos);
            if (ie == ">" ? ge = [ie, ue, de, q.pos, m, v, r] : ge = [ie, ue, de, q.pos],
            v++,
            u.push(ge),
            ie === "#" || ie === "^")
                s.push(ge);
            else if (ie === "/") {
                if (me = s.pop(),
                !me)
                    throw new Error('Unopened section "' + ue + '" at ' + de);
                if (me[1] !== ue)
                    throw new Error('Unclosed section "' + me[1] + '" at ' + de)
            } else
                ie === "name" || ie === "{" || ie === "&" ? p = !0 : ie === "=" && D(ue)
        }
        if (E(),
        me = s.pop(),
        me)
            throw new Error('Unclosed section "' + me[1] + '" at ' + q.pos);
        return My(ky(u))
    }
    function ky(i) {
        for (var n = [], r, s, u = 0, l = i.length; u < l; ++u)
            r = i[u],
            r && (r[0] === "text" && s && s[0] === "text" ? (s[1] += r[1],
            s[3] = r[3]) : (n.push(r),
            s = r));
        return n
    }
    function My(i) {
        for (var n = [], r = n, s = [], u, l, f = 0, p = i.length; f < p; ++f)
            switch (u = i[f],
            u[0]) {
            case "#":
            case "^":
                r.push(u),
                s.push(u),
                r = u[4] = [];
                break;
            case "/":
                l = s.pop(),
                l[5] = u[2],
                r = s.length > 0 ? s[s.length - 1][4] : n;
                break;
            default:
                r.push(u)
            }
        return n
    }
    function _r(i) {
        this.string = i,
        this.tail = i,
        this.pos = 0
    }
    _r.prototype.eos = function() {
        return this.tail === ""
    }
    ;
    _r.prototype.scan = function(n) {
        var r = this.tail.match(n);
        if (!r || r.index !== 0)
            return "";
        var s = r[0];
        return this.tail = this.tail.substring(s.length),
        this.pos += s.length,
        s
    }
    ;
    _r.prototype.scanUntil = function(n) {
        var r = this.tail.search(n), s;
        switch (r) {
        case -1:
            s = this.tail,
            this.tail = "";
            break;
        case 0:
            s = "";
            break;
        default:
            s = this.tail.substring(0, r),
            this.tail = this.tail.substring(r)
        }
        return this.pos += s.length,
        s
    }
    ;
    function Jn(i, n) {
        this.view = i,
        this.cache = {
            ".": this.view
        },
        this.parent = n
    }
    Jn.prototype.push = function(n) {
        return new Jn(n,this)
    }
    ;
    Jn.prototype.lookup = function(n) {
        var r = this.cache, s;
        if (r.hasOwnProperty(n))
            s = r[n];
        else {
            for (var u = this, l, f, p, m = !1; u; ) {
                if (n.indexOf(".") > 0)
                    for (l = u.view,
                    f = n.split("."),
                    p = 0; l != null && p < f.length; )
                        p === f.length - 1 && (m = Kl(l, f[p]) || Sy(l, f[p])),
                        l = l[f[p++]];
                else
                    l = u.view[n],
                    m = Kl(u.view, n);
                if (m) {
                    s = l;
                    break
                }
                u = u.parent
            }
            r[n] = s
        }
        return ps(s) && (s = s.call(this.view)),
        s
    }
    ;
    function qe() {
        this.templateCache = {
            _cache: {},
            set: function(n, r) {
                this._cache[n] = r
            },
            get: function(n) {
                return this._cache[n]
            },
            clear: function() {
                this._cache = {}
            }
        }
    }
    qe.prototype.clearCache = function() {
        typeof this.templateCache < "u" && this.templateCache.clear()
    }
    ;
    qe.prototype.parse = function(n, r) {
        var s = this.templateCache
          , u = n + ":" + (r || yt.tags).join(":")
          , l = typeof s < "u"
          , f = l ? s.get(u) : void 0;
        return f == null && (f = By(n, r),
        l && s.set(u, f)),
        f
    }
    ;
    qe.prototype.render = function(n, r, s, u) {
        var l = this.getConfigTags(u)
          , f = this.parse(n, l)
          , p = r instanceof Jn ? r : new Jn(r,void 0);
        return this.renderTokens(f, p, s, n, u)
    }
    ;
    qe.prototype.renderTokens = function(n, r, s, u, l) {
        for (var f = "", p, m, v, E = 0, S = n.length; E < S; ++E)
            v = void 0,
            p = n[E],
            m = p[0],
            m === "#" ? v = this.renderSection(p, r, s, u, l) : m === "^" ? v = this.renderInverted(p, r, s, u, l) : m === ">" ? v = this.renderPartial(p, r, s, l) : m === "&" ? v = this.unescapedValue(p, r) : m === "name" ? v = this.escapedValue(p, r, l) : m === "text" && (v = this.rawValue(p)),
            v !== void 0 && (f += v);
        return f
    }
    ;
    qe.prototype.renderSection = function(n, r, s, u, l) {
        var f = this
          , p = ""
          , m = r.lookup(n[1]);
        function v(F) {
            return f.render(F, r, s, l)
        }
        if (m) {
            if (Gn(m))
                for (var E = 0, S = m.length; E < S; ++E)
                    p += this.renderTokens(n[4], r.push(m[E]), s, u, l);
            else if (typeof m == "object" || typeof m == "string" || typeof m == "number")
                p += this.renderTokens(n[4], r.push(m), s, u, l);
            else if (ps(m)) {
                if (typeof u != "string")
                    throw new Error("Cannot use higher-order sections without the original template");
                m = m.call(r.view, u.slice(n[3], n[5]), v),
                m != null && (p += m)
            } else
                p += this.renderTokens(n[4], r, s, u, l);
            return p
        }
    }
    ;
    qe.prototype.renderInverted = function(n, r, s, u, l) {
        var f = r.lookup(n[1]);
        if (!f || Gn(f) && f.length === 0)
            return this.renderTokens(n[4], r, s, u, l)
    }
    ;
    qe.prototype.indentPartial = function(n, r, s) {
        for (var u = r.replace(/[^ \t]/g, ""), l = n.split(`
`), f = 0; f < l.length; f++)
            l[f].length && (f > 0 || !s) && (l[f] = u + l[f]);
        return l.join(`
`)
    }
    ;
    qe.prototype.renderPartial = function(n, r, s, u) {
        if (s) {
            var l = this.getConfigTags(u)
              , f = ps(s) ? s(n[1]) : s[n[1]];
            if (f != null) {
                var p = n[6]
                  , m = n[5]
                  , v = n[4]
                  , E = f;
                m == 0 && v && (E = this.indentPartial(f, v, p));
                var S = this.parse(E, l);
                return this.renderTokens(S, r, s, E, u)
            }
        }
    }
    ;
    qe.prototype.unescapedValue = function(n, r) {
        var s = r.lookup(n[1]);
        if (s != null)
            return s
    }
    ;
    qe.prototype.escapedValue = function(n, r, s) {
        var u = this.getConfigEscape(s) || yt.escape
          , l = r.lookup(n[1]);
        if (l != null)
            return typeof l == "number" && u === yt.escape ? String(l) : u(l)
    }
    ;
    qe.prototype.rawValue = function(n) {
        return n[1]
    }
    ;
    qe.prototype.getConfigTags = function(n) {
        return Gn(n) ? n : n && typeof n == "object" ? n.tags : void 0
    }
    ;
    qe.prototype.getConfigEscape = function(n) {
        if (n && typeof n == "object" && !Gn(n))
            return n.escape
    }
    ;
    var yt = {
        name: "mustache.js",
        version: "4.2.0",
        tags: ["{{", "}}"],
        clearCache: void 0,
        escape: void 0,
        parse: void 0,
        render: void 0,
        Scanner: void 0,
        Context: void 0,
        Writer: void 0,
        set templateCache(i) {
            gr.templateCache = i
        },
        get templateCache() {
            return gr.templateCache
        }
    }
      , gr = new qe;
    yt.clearCache = function() {
        return gr.clearCache()
    }
    ;
    yt.parse = function(n, r) {
        return gr.parse(n, r)
    }
    ;
    yt.render = function(n, r, s, u) {
        if (typeof n != "string")
            throw new TypeError('Invalid template! Template should be a "string" but "' + by(n) + '" was given as the first argument for mustache#render(template, view, partials)');
        return gr.render(n, r, s, u)
    }
    ;
    yt.escape = Oy;
    yt.Scanner = _r;
    yt.Context = Jn;
    yt.Writer = qe;
    var gs = yt;
    function mr(i) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mr = function(r) {
            return typeof r
        }
        : mr = function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        mr(i)
    }
    var Uy = (typeof HTMLElement > "u" ? "undefined" : mr(HTMLElement)) === "object"
      , Py = typeof ShadowRoot < "u";
    function Ai(i) {
        return Py && i instanceof ShadowRoot ? !0 : Uy ? i instanceof HTMLElement : i && mr(i) === "object" && i !== null && i.nodeType === 1 && typeof i.nodeName == "string"
    }
    function He(i, n) {
        n.forEach(function(r) {
            i.classList.add(r)
        })
    }
    function Kn(i, n) {
        n.forEach(function(r) {
            i.classList.remove(r)
        })
    }
    var $y = "@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}";
    function _s(i) {
        if ((!i || i === document) && (i = document.head),
        !i.querySelector(".lum-base-styles")) {
            var n = document.createElement("style");
            n.type = "text/css",
            n.classList.add("lum-base-styles"),
            n.appendChild(document.createTextNode($y)),
            i.insertBefore(n, i.firstChild)
        }
    }
    function yr() {
        throw new Error("Missing parameter")
    }
    function Ii(i) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ii = function(r) {
            return typeof r
        }
        : Ii = function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Ii(i)
    }
    function Wy(i, n) {
        if (!(i instanceof n))
            throw new TypeError("Cannot call a class as a function")
    }
    function Ql(i, n) {
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(i, s.key, s)
        }
    }
    function qy(i, n, r) {
        return n && Ql(i.prototype, n),
        r && Ql(i, r),
        i
    }
    var Hy = 37
      , Yy = 39
      , Xl = typeof document > "u" ? !1 : "animation"in document.createElement("div").style
      , Zl = function() {
        function i() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            Wy(this, i),
            this._sizeImgWrapperEl = this._sizeImgWrapperEl.bind(this),
            this.showNext = this.showNext.bind(this),
            this.showPrevious = this.showPrevious.bind(this),
            this._completeOpen = this._completeOpen.bind(this),
            this._completeClose = this._completeClose.bind(this),
            this._handleKeydown = this._handleKeydown.bind(this),
            this._handleClose = this._handleClose.bind(this);
            var r = n.namespace
              , s = r === void 0 ? null : r
              , u = n.parentEl
              , l = u === void 0 ? yr() : u
              , f = n.triggerEl
              , p = f === void 0 ? yr() : f
              , m = n.sourceAttribute
              , v = m === void 0 ? yr() : m
              , E = n.caption
              , S = E === void 0 ? null : E
              , F = n.includeImgixJSClass
              , k = F === void 0 ? !1 : F
              , D = n._gallery
              , q = D === void 0 ? null : D
              , de = n._arrowNavigation
              , ie = de === void 0 ? null : de
              , ue = n.closeButtonEnabled
              , fe = ue === void 0 ? !0 : ue
              , ge = n.closeTrigger
              , me = ge === void 0 ? "click" : ge;
            if (this.settings = {
                namespace: s,
                parentEl: l,
                triggerEl: p,
                sourceAttribute: v,
                caption: S,
                includeImgixJSClass: k,
                _gallery: q,
                _arrowNavigation: ie,
                closeButtonEnabled: fe,
                onClose: n.onClose,
                closeTrigger: me
            },
            !Ai(this.settings.parentEl))
                throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");
            this.currentTrigger = this.settings.triggerEl,
            this.openClasses = this._buildClasses("open"),
            this.openingClasses = this._buildClasses("opening"),
            this.closingClasses = this._buildClasses("closing"),
            this.hasBeenLoaded = !1,
            this.elementBuilt = !1
        }
        return qy(i, [{
            key: "_handleClose",
            value: function(r) {
                r && typeof r.preventDefault == "function" && r.preventDefault();
                var s = this.settings.onClose;
                s && typeof s == "function" && s()
            }
        }, {
            key: "_bindEventListeners",
            value: function() {
                this.el.addEventListener(this.settings.closeTrigger, this._handleClose),
                this.closeButtonEl && this.closeButtonEl.addEventListener("click", this._handleClose)
            }
        }, {
            key: "_buildClasses",
            value: function(r) {
                var s = ["lum-".concat(r)]
                  , u = this.settings.namespace;
                return u && s.push("".concat(u, "-").concat(r)),
                s
            }
        }, {
            key: "_buildElement",
            value: function() {
                this.el = document.createElement("div"),
                He(this.el, this._buildClasses("lightbox")),
                this.innerEl = document.createElement("div"),
                He(this.innerEl, this._buildClasses("lightbox-inner")),
                this.el.appendChild(this.innerEl);
                var r = document.createElement("div");
                He(r, this._buildClasses("lightbox-loader")),
                this.innerEl.appendChild(r),
                this.imgWrapperEl = document.createElement("div"),
                He(this.imgWrapperEl, this._buildClasses("lightbox-image-wrapper")),
                this.innerEl.appendChild(this.imgWrapperEl);
                var s = document.createElement("span");
                He(s, this._buildClasses("lightbox-position-helper")),
                this.imgWrapperEl.appendChild(s),
                this.imgEl = document.createElement("img"),
                He(this.imgEl, this._buildClasses("img")),
                s.appendChild(this.imgEl),
                this.captionEl = document.createElement("p"),
                He(this.captionEl, this._buildClasses("lightbox-caption")),
                s.appendChild(this.captionEl),
                this.settings.closeButtonEnabled && (this.closeButtonEl = document.createElement("div"),
                He(this.closeButtonEl, this._buildClasses("close-button")),
                this.el.appendChild(this.closeButtonEl)),
                this.settings._gallery && this._setUpGalleryElements(),
                this.settings.parentEl.appendChild(this.el),
                this._updateImgSrc(),
                this._updateCaption(),
                this.settings.includeImgixJSClass && this.imgEl.classList.add("imgix-fluid")
            }
        }, {
            key: "_setUpGalleryElements",
            value: function() {
                this._buildGalleryButton("previous", this.showPrevious),
                this._buildGalleryButton("next", this.showNext)
            }
        }, {
            key: "_buildGalleryButton",
            value: function(r, s) {
                var u = document.createElement("button");
                this["".concat(r, "Button")] = u,
                u.innerText = r,
                He(u, this._buildClasses("".concat(r, "-button"))),
                He(u, this._buildClasses("gallery-button")),
                this.innerEl.appendChild(u),
                u.addEventListener("click", function(l) {
                    l.stopPropagation(),
                    s()
                }, !1)
            }
        }, {
            key: "_sizeImgWrapperEl",
            value: function() {
                var r = this.imgWrapperEl.style;
                r.width = "".concat(this.innerEl.clientWidth, "px"),
                r.maxWidth = "".concat(this.innerEl.clientWidth, "px"),
                r.height = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px"),
                r.maxHeight = "".concat(this.innerEl.clientHeight - this.captionEl.clientHeight, "px")
            }
        }, {
            key: "_updateCaption",
            value: function() {
                var r = Ii(this.settings.caption)
                  , s = "";
                r === "string" ? s = this.settings.caption : r === "function" && (s = this.settings.caption(this.currentTrigger)),
                this.captionEl.innerHTML = s
            }
        }, {
            key: "_updateImgSrc",
            value: function() {
                var r = this
                  , s = this.currentTrigger.getAttribute(this.settings.sourceAttribute);
                if (!s)
                    throw new Error("No image URL was found in the ".concat(this.settings.sourceAttribute, " attribute of the trigger."));
                var u = this._buildClasses("loading");
                this.hasBeenLoaded || He(this.el, u),
                this.imgEl.onload = function() {
                    Kn(r.el, u),
                    r.hasBeenLoaded = !0
                }
                ,
                this.imgEl.setAttribute("src", s)
            }
        }, {
            key: "_handleKeydown",
            value: function(r) {
                r.keyCode == Hy ? this.showPrevious() : r.keyCode == Yy && this.showNext()
            }
        }, {
            key: "showNext",
            value: function() {
                this.settings._gallery && (this.currentTrigger = this.settings._gallery.nextTrigger(this.currentTrigger),
                this._updateImgSrc(),
                this._updateCaption(),
                this._sizeImgWrapperEl(),
                this.settings._gallery.onChange({
                    imgEl: this.imgEl
                }))
            }
        }, {
            key: "showPrevious",
            value: function() {
                this.settings._gallery && (this.currentTrigger = this.settings._gallery.previousTrigger(this.currentTrigger),
                this._updateImgSrc(),
                this._updateCaption(),
                this._sizeImgWrapperEl(),
                this.settings._gallery.onChange({
                    imgEl: this.imgEl
                }))
            }
        }, {
            key: "open",
            value: function() {
                this.elementBuilt || (this._buildElement(),
                this._bindEventListeners(),
                this.elementBuilt = !0),
                this.currentTrigger = this.settings.triggerEl,
                this._updateImgSrc(),
                this._updateCaption(),
                He(this.el, this.openClasses),
                this._sizeImgWrapperEl(),
                window.addEventListener("resize", this._sizeImgWrapperEl, !1),
                this.settings._arrowNavigation && window.addEventListener("keydown", this._handleKeydown, !1),
                Xl && (this.el.addEventListener("animationend", this._completeOpen, !1),
                He(this.el, this.openingClasses))
            }
        }, {
            key: "close",
            value: function() {
                window.removeEventListener("resize", this._sizeImgWrapperEl, !1),
                this.settings._arrowNavigation && window.removeEventListener("keydown", this._handleKeydown, !1),
                Xl ? (this.el.addEventListener("animationend", this._completeClose, !1),
                He(this.el, this.closingClasses)) : Kn(this.el, this.openClasses)
            }
        }, {
            key: "_completeOpen",
            value: function() {
                this.el.removeEventListener("animationend", this._completeOpen, !1),
                Kn(this.el, this.openingClasses)
            }
        }, {
            key: "_completeClose",
            value: function() {
                this.el.removeEventListener("animationend", this._completeClose, !1),
                Kn(this.el, this.openClasses),
                Kn(this.el, this.closingClasses)
            }
        }, {
            key: "destroy",
            value: function() {
                this.el && this.settings.parentEl.removeChild(this.el)
            }
        }]),
        i
    }();
    function zy(i, n) {
        if (!(i instanceof n))
            throw new TypeError("Cannot call a class as a function")
    }
    function jl(i, n) {
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(i, s.key, s)
        }
    }
    function Jy(i, n, r) {
        return n && jl(i.prototype, n),
        r && jl(i, r),
        i
    }
    var St = function() {
        function i(n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (zy(this, i),
            this.VERSION = "2.3.5",
            this.destroy = this.destroy.bind(this),
            this.open = this.open.bind(this),
            this.close = this.close.bind(this),
            this._handleKeyup = this._handleKeyup.bind(this),
            this.isOpen = !1,
            this.trigger = n,
            !Ai(this.trigger))
                throw new TypeError("`new Luminous` requires a DOM element as its first argument.");
            var s = document;
            "getRootNode"in this.trigger && (s = this.trigger.getRootNode());
            var u = r.namespace || null
              , l = r.sourceAttribute || "href"
              , f = r.caption || null
              , p = r.openTrigger || "click"
              , m = r.closeTrigger || "click"
              , v = "closeWithEscape"in r ? !!r.closeWithEscape : !0
              , E = r.closeOnScroll || !1
              , S = r.showCloseButton != null ? r.showCloseButton : !0
              , F = r.appendToNode || (s === document ? document.body : s)
              , k = r.appendToSelector || null
              , D = r.onOpen || null
              , q = r.onClose || null
              , de = r.includeImgixJSClass || !1
              , ie = "injectBaseStyles"in r ? !!r.injectBaseStyles : !0
              , ue = r._gallery || null
              , fe = r._arrowNavigation || null;
            this.settings = {
                namespace: u,
                sourceAttribute: l,
                caption: f,
                openTrigger: p,
                closeTrigger: m,
                closeWithEscape: v,
                closeOnScroll: E,
                closeButtonEnabled: S,
                appendToNode: F,
                appendToSelector: k,
                onOpen: D,
                onClose: q,
                includeImgixJSClass: de,
                injectBaseStyles: ie,
                _gallery: ue,
                _arrowNavigation: fe
            };
            var ge = document.body;
            F && "getRootNode"in F && (ge = F.getRootNode()),
            this.settings.injectBaseStyles && _s(ge),
            this._buildLightbox(),
            this._bindEventListeners()
        }
        return Jy(i, [{
            key: "open",
            value: function(r) {
                r && typeof r.preventDefault == "function" && r.preventDefault(),
                this.lightbox.open(),
                this.settings.closeOnScroll && window.addEventListener("scroll", this.close, !1);
                var s = this.settings.onOpen;
                s && typeof s == "function" && s(),
                this.isOpen = !0
            }
        }, {
            key: "close",
            value: function(r) {
                this.settings.closeOnScroll && window.removeEventListener("scroll", this.close, !1),
                this.lightbox.close();
                var s = this.settings.onClose;
                s && typeof s == "function" && s(),
                this.isOpen = !1
            }
        }, {
            key: "_buildLightbox",
            value: function() {
                var r = this.settings.appendToNode;
                this.settings.appendToSelector && (r = document.querySelector(this.settings.appendToSelector)),
                this.lightbox = new Zl({
                    namespace: this.settings.namespace,
                    parentEl: r,
                    triggerEl: this.trigger,
                    sourceAttribute: this.settings.sourceAttribute,
                    caption: this.settings.caption,
                    includeImgixJSClass: this.settings.includeImgixJSClass,
                    closeButtonEnabled: this.settings.closeButtonEnabled,
                    _gallery: this.settings._gallery,
                    _arrowNavigation: this.settings._arrowNavigation,
                    closeTrigger: this.settings.closeTrigger,
                    onClose: this.close
                })
            }
        }, {
            key: "_bindEventListeners",
            value: function() {
                this.trigger.addEventListener(this.settings.openTrigger, this.open, !1),
                this.settings.closeWithEscape && window.addEventListener("keyup", this._handleKeyup, !1)
            }
        }, {
            key: "_unbindEvents",
            value: function() {
                this.trigger.removeEventListener(this.settings.openTrigger, this.open, !1),
                this.lightbox.el && this.lightbox.el.removeEventListener(this.settings.closeTrigger, this.close, !1),
                this.settings.closeWithEscape && window.removeEventListener("keyup", this._handleKeyup, !1)
            }
        }, {
            key: "_handleKeyup",
            value: function(r) {
                this.isOpen && r.keyCode === 27 && this.close()
            }
        }, {
            key: "destroy",
            value: function() {
                this._unbindEvents(),
                this.lightbox.destroy()
            }
        }]),
        i
    }();
    St.prototype.open = St.prototype.open;
    St.prototype.close = St.prototype.close;
    St.prototype.destroy = St.prototype.destroy;
    function Gy(i, n) {
        if (!(i instanceof n))
            throw new TypeError("Cannot call a class as a function")
    }
    function ef(i, n) {
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(i, s.key, s)
        }
    }
    function Ky(i, n, r) {
        return n && ef(i.prototype, n),
        r && ef(i, r),
        i
    }
    var ms = function() {
        function i(n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            Gy(this, i);
            var u = {
                arrowNavigation: !0,
                onChange: null
            };
            this.settings = Object.assign({}, u, r),
            this.triggers = n,
            this.luminousOpts = s,
            this.luminousOpts._gallery = this,
            this.luminousOpts._arrowNavigation = this.settings.arrowNavigation,
            this._constructLuminousInstances()
        }
        return Ky(i, [{
            key: "_constructLuminousInstances",
            value: function() {
                this.luminousInstances = [];
                for (var r = this.triggers.length, s = 0; s < r; s++) {
                    var u = this.triggers[s]
                      , l = new St(u,this.luminousOpts);
                    this.luminousInstances.push(l)
                }
            }
        }, {
            key: "nextTrigger",
            value: function(r) {
                var s = Array.prototype.indexOf.call(this.triggers, r) + 1;
                return s >= this.triggers.length ? this.triggers[0] : this.triggers[s]
            }
        }, {
            key: "previousTrigger",
            value: function(r) {
                var s = Array.prototype.indexOf.call(this.triggers, r) - 1;
                return s < 0 ? this.triggers[this.triggers.length - 1] : this.triggers[s]
            }
        }, {
            key: "onChange",
            value: function(r) {
                var s = r.imgEl
                  , u = this.settings.onChange;
                u && typeof u == "function" && u({
                    imgEl: s
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.luminousInstances.forEach(function(r) {
                    return r.destroy()
                })
            }
        }]),
        i
    }();
    ms.prototype.destroy = ms.prototype.destroy;
    function Vy(i) {
        return i.normalize("NFKD").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/[-\s]+/g, "-")
    }
    gs.tags = ["<%", "%>"];
    (0,
    Gt.default)(function() {
        (0,
        Gt.default)(".js-wysiwyg").each( (i, n) => {
            let r = (0,
            Gt.default)(n);
            r.find("[data-accordion]").each( (u, l) => Qy(u, l)),
            r.find('iframe[src*="youtube"]').each( (u, l) => Xy(u, l)),
            r.find("table").each( (u, l) => Zy(u, l)),
            r.find("img").each( (u, l) => {
                let f = (0,
                Gt.default)(l);
                f.wrap(`<a class="lum-trigger" href="${f.attr("src")}"></a>`);
                let p = f.parent();
                new St(p[0])
            }
            )
        }
        )
    });
    function Qy(i, n) {
        let r = (0,
        Gt.default)(n)
          , s = (0,
        Gt.default)(".js-accordion-template")
          , u = r.find("[data-accordion-heading]").remove()
          , l = r.html()
          , f = gs.render(s.html(), {
            index: i,
            id: Vy(u.text()),
            heading: u.text(),
            content: l
        });
        r.replaceWith(f)
    }
    function Xy(i, n) {
        let r = (0,
        Gt.default)(n);
        r.parent().hasClass("omebed") !== !0 && r.wrap('<div class="oembed" />')
    }
    function Zy(i, n) {
        (0,
        Gt.default)(n).wrap('<div class="table-wrapper"/>')
    }
    window.onload = function() {
        document.body.setAttribute("data-platform", navigator.platform)
    }
    ;
    $(function() {
        let i = f => f[0].scrollHeight > Math.ceil(f.height())
          , n = f => f.scrollTop() > 0
          , r = (f, p) => {
            let m = $(p);
            i(m) === !0 ? m.addClass("has-scrollbar") : m.removeClass("has-scrollbar")
        }
          , s = f => {
            let p = $(f.target);
            n(p) === !0 ? p.addClass("is-scrolled") : p.removeClass("is-scrolled")
        }
          , u = (f, p) => {
            for (let m of f)
                r(null, m.target)
        }
          , l = new MutationObserver(u);
        $(".nesty-panel").on("scroll", s),
        $(".nesty-panel").each(r),
        $(".nesty-panel").each( (f, p) => {
            l.observe(p, {
                childList: !0
            })
        }
        ),
        $(".hc-multiselect-menu").on("scroll", s),
        $(".hc-multiselect-menu").each(r),
        $(".hc-multiselect-menu").each( (f, p) => {
            l.observe(p, {
                childList: !0
            })
        }
        )
    });
    $(function() {
        let i = !1;
        if ($(".breadcrumbs").find('[title="Aviadrones Remote Operations"]').length >= 1 && (i = !0),
        window.location.href.includes("14269150262299") && (i = !0),
        i) {
            let r = '<meta name="robots" content="noindex">';
            $("head").append(r)
        }
    });
    $(function() {
        ["9311802659355", "9311802659355", "30165047145243", "31073327882907", "32571720275995", "32595988995995", "33128174515867"].map(n => {
            $(`.z-articles__item:has(.z-article__container[href*="${n}"])`).hide(),
            window.location.href.includes(n) && $("head").append('<meta name="robots" content="noindex">')
        }
        )
    });
}
)();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

mustache/mustache.mjs:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
