class s extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Box-${[this.padding, this.borderWidth, this.invert].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            padding: ${this.padding};
            border-width: ${this.borderWidth};
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get padding() {
        return this.getAttribute("padding") || "var(--space-3)"
    }
    set padding(t) {
        return this.setAttribute("padding", t)
    }
    get borderWidth() {
        return this.getAttribute("borderWidth") || "var(--border-thin)"
    }
    set borderWidth(t) {
        return this.setAttribute("borderWidth", t)
    }
    static get observedAttributes() {
        return ["borderWidth", "padding", "invert"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("box-l", s);
class r extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Center-${[this.max, this.andText, this.gutters, this.intrinsic].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            max-width: ${this.max};
            ${this.gutters ? `
            padding-inline-start: ${this.gutters};
            padding-inline-end: ${this.gutters};` : ""}
            ${this.andText ? "text-align: center;" : ""}
            ${this.intrinsic ? `
            display: flex;
            flex-direction: column;
            align-items: center;` : ""}
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get max() {
        return this.getAttribute("max") || "var(--measure)"
    }
    set max(t) {
        return this.setAttribute("max", t)
    }
    get andText() {
        return this.hasAttribute("andText")
    }
    set andText(t) {
        return t ? this.setAttribute("andText", "") : this.removeAttribute("andText")
    }
    get gutters() {
        return this.getAttribute("gutters") || null
    }
    set gutters(t) {
        return this.setAttribute("gutters", t)
    }
    get intrinsic() {
        return this.hasAttribute("intrinsic")
    }
    set intrinsic(t) {
        return t ? this.setAttribute("intrinsic", "") : this.removeAttribute("intrinsic")
    }
    static get observedAttributes() {
        return ["max", "andText", "gutters", "intrinsic"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("center-l", r);
class n extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Cluster-${[this.justify, this.align, this.space].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            justify-content: ${this.justify};
            align-items: ${this.align};
            gap: ${this.space};
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get justify() {
        return this.getAttribute("justify") || "flex-start"
    }
    set justify(t) {
        return this.setAttribute("justify", t)
    }
    get align() {
        return this.getAttribute("align") || "flex-start"
    }
    set align(t) {
        return this.setAttribute("align", t)
    }
    get space() {
        return this.getAttribute("space") || "var(--space-3)"
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    static get observedAttributes() {
        return ["justify", "align", "space"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("cluster-l", n);
class a extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Container-${[this.name]}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
            [data-i="${this.i}"] {
              display: block;
              container-type: inline-size;
              ${this.name ? `container-name: ${this.name};` : ""}
            }
          `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get name() {
        return this.getAttribute("name") || null
    }
    set name(t) {
        return this.setAttribute("name", t)
    }
    static get observedAttributes() {
        return ["name"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("container-l", a);
class h extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.children.length !== 1 && console.warn("<frame-l> elements should have just one child element"),
            this.i = `Frame-${[this.ratio].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = this.ratio.split(":")
                  , i = document.createElement("style");
                i.id = this.i,
                i.innerHTML = `
          [data-i="${this.i}"] {
            aspect-ratio: ${t[0]} / ${t[1]};
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(i)
            }
        }
    }
    get ratio() {
        return this.getAttribute("ratio") || "16:9"
    }
    set ratio(t) {
        return this.setAttribute("ratio", t)
    }
    static get observedAttributes() {
        return ["ratio"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("frame-l", h);
class d extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Grid-${[this.min, this.space].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            grid-gap: ${this.space};
          }

          @supports (width: min(${this.min}, 100%)) {
            [data-i="${this.i}"] {
              grid-template-columns: repeat(auto-fill, minmax(min(${this.min}, 100%), 1fr));
            }
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get min() {
        return this.getAttribute("min") || "250px"
    }
    set min(t) {
        return this.setAttribute("min", t)
    }
    get space() {
        return this.getAttribute("space") || "var(--space-3)"
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    static get observedAttributes() {
        return ["min", "space"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("grid-l", d);
class l extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.label && (this.setAttribute("role", "img"),
            this.setAttribute("aria-label", this.label)),
            this.space && (this.i = `Icon-${this.space}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i))) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
            [data-i="${this.i}"] {
              display: inline-flex;
              align-items: baseline;
            }

            [data-i="${this.i}"] > svg {
              margin-inline-end: ${this.space};
            }
          `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get space() {
        return this.getAttribute("space") || null
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    get label() {
        return this.getAttribute("label") || null
    }
    set label(t) {
        return this.setAttribute("label", t)
    }
    static get observedAttributes() {
        return ["space", "label"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("icon-l", l);
class u extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            this.i = `Imposter-${[this.breakout, this.fixed, this.margin].join("")}`,
            this.dataset.i = this.i;
            let t = this.margin === "0" ? "0px" : this.margin;
            if (!document.getElementById(this.i) && (!this.breakout || this.fixed)) {
                let i = document.createElement("style");
                i.id = this.i,
                i.innerHTML = `
          [data-i="${this.i}"] {
            ${this.breakout ? "" : `
              max-inline-size: calc(100% - (${t} * 2));
              max-block-size: calc(100% - (${t} * 2));
              overflow: auto;`}
            ${this.fixed ? `
              position: fixed;` : ""}
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(i)
            }
        }
    }
    get breakout() {
        return this.hasAttribute("breakout")
    }
    set breakout(t) {
        return t ? this.setAttribute("breakout", "") : this.removeAttribute("breakout")
    }
    get fixed() {
        return this.hasAttribute("fixed")
    }
    set fixed(t) {
        return t ? this.setAttribute("fixed", "") : this.removeAttribute("fixed")
    }
    get margin() {
        return this.getAttribute("margin") || "0px"
    }
    set margin(t) {
        return this.setAttribute("margin", t)
    }
    static get observedAttributes() {
        return ["breakout", "margin", "fixed"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("imposter-l", u);
class c extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Reel-${[this.itemWidth, this.height, this.space, this.noBar].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            height: ${this.height};
          }
      
          [data-i="${this.i}"] > * {
            flex: 0 0 ${this.itemWidth};
          }
      
          [data-i="${this.i}"] > img {
            height: 100%;
            flex-basis: auto;
            width: auto;
          }
      
          [data-i="${this.i}"] > * + * {
            margin-inline-start: ${this.space};
          }
      
          [data-i="${this.i}"].overflowing {
            ${this.noBar ? "" : `padding-bottom: ${this.space}`}
          }
      
          ${this.noBar ? `
          [data-i="${this.i}"] {
            scrollbar-width: none;
          }
          
          [data-i="${this.i}"]::-webkit-scrollbar {
            display: none;
          }
          ` : ""}
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    toggleOverflowClass(t) {
        t.classList.toggle("overflowing", this.scrollWidth > this.clientWidth)
    }
    get itemWidth() {
        return this.getAttribute("itemWidth") || "auto"
    }
    set itemWidth(t) {
        return this.setAttribute("itemWidth", t)
    }
    get height() {
        return this.getAttribute("height") || "auto"
    }
    set height(t) {
        return this.setAttribute("height", t)
    }
    get space() {
        return this.getAttribute("space") || "var(--s0)"
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    get noBar() {
        return this.hasAttribute("noBar")
    }
    set noBar(t) {
        t ? this.setAttribute("noBar", "") : this.removeAttribute("noBar")
    }
    static get observedAttributes() {
        return ["itemWidth", "height", "space", "noBar"]
    }
    connectedCallback() {
        this.render(),
        "ResizeObserver"in window && new ResizeObserver(t => {
            this.toggleOverflowClass(t[0].target)
        }
        ).observe(this),
        "MutationObserver"in window && new MutationObserver(t => {
            this.toggleOverflowClass(t[0].target)
        }
        ).observe(this, {
            childList: !0
        })
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("reel-l", c);
class o extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.contentMin.includes("%") || console.warn("The value for each <sidebar-l> `contentMin` property should be a percentage. Otherwise overflow is likely to occur"),
            this.i = `Sidebar-${[this.side, this.sideWidth, this.contentMin, this.space].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            gap: ${this.space};
            ${this.noStretch ? "align-items: flex-start;" : ""}
          }

          [data-i="${this.i}"] > * {
            ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ""}
          }

          [data-i="${this.i}"] > ${this.side !== "left" ? ":first-child" : ":last-child"} {
            flex-basis: 0;
            flex-grow: 999;
            min-inline-size: ${this.contentMin};
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get side() {
        return this.getAttribute("side") || "left"
    }
    set side(t) {
        return this.setAttribute("side", t)
    }
    get sideWidth() {
        return this.getAttribute("sideWidth") || null
    }
    set sideWidth(t) {
        return this.setAttribute("sideWidth", t)
    }
    get contentMin() {
        return this.getAttribute("contentMin") || "55%"
    }
    set contentMin(t) {
        return this.setAttribute("contentMin", t)
    }
    get space() {
        return this.getAttribute("space") || "var(--space-3)"
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    get noStretch() {
        return this.hasAttribute("noStretch")
    }
    set noStretch(t) {
        t ? this.setAttribute("noStretch", "") : this.removeAttribute("noStretch")
    }
    static get observedAttributes() {
        return ["side", "sideWidth", "contentMin", "space", "noStretch"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback(t) {
        this.render()
    }
}
"customElements"in window && customElements.define("sidebar-l", o);
class m extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Stack-${[`var(--space-${this.space}`, this.recursive, this.splitAfter].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"]${this.recursive ? "" : " >"} * + * {
            margin-block-start: var(--space-${this.space});
          }

          ${this.splitAfter ? `
            [data-i="${this.i}"]:only-child {
              block-size: 100%;
            }

            [data-i="${this.i}"] > :nth-child(${this.splitAfter}) {
              margin-block-end: auto;
            }` : ""}
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get space() {
        return this.getAttribute("space") || 3
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    get recursive() {
        return this.hasAttribute("recursive")
    }
    set recursive(t) {
        return this.setAttribute(t ? "recursive" : "")
    }
    get splitAfter() {
        return this.getAttribute("splitAfter") || null
    }
    set splitAfter(t) {
        return this.setAttribute("splitAfter", t)
    }
    static get observedAttributes() {
        return ["space", "recursive", "splitAfter"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("stack-l", m);
class b extends HTMLElement {
    constructor() {
        super(),
        this.render = () => {
            if (this.i = `Switcher-${[this.threshold, this.space, this.limit].join("")}`,
            this.dataset.i = this.i,
            !document.getElementById(this.i)) {
                let t = document.createElement("style");
                t.id = this.i,
                t.innerHTML = `
          [data-i="${this.i}"] {
            gap: ${this.space};
          }

          [data-i="${this.i}"] > * {
            flex-basis: calc((${this.threshold} - 100%) * 999);
          }

          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit) + 1}),
          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit) + 1}) ~ * {
            flex-basis: 100%;
          }
        `.replace(/\s\s+/g, " ").trim(),
                document.head.appendChild(t)
            }
        }
    }
    get threshold() {
        return this.getAttribute("threshold") || "var(--measure)"
    }
    set threshold(t) {
        return this.setAttribute("threshold", t)
    }
    get space() {
        return this.getAttribute("space") || "var(--space-3)"
    }
    set space(t) {
        return this.setAttribute("space", t)
    }
    get limit() {
        return this.getAttribute("limit") || "5"
    }
    set limit(t) {
        return this.setAttribute("limit", t)
    }
    static get observedAttributes() {
        return ["threshold", "space", "limit"]
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback() {
        this.render()
    }
}
"customElements"in window && customElements.define("switcher-l", b);
