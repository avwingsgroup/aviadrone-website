class c {
    category;
    container;
    selector;
    constructor(a, e, t="a") {
        this.category = e,
        this.container = a,
        this.selector = t,
        this.init()
    }
    init() {
        this.trackNavClicks()
    }
    trackClick(a) {
        const e = a.target
          , t = {
            event: "navItemClick",
            category: this.category,
            label: e.innerText,
            url: e.href
        };
        !t.label && !t.url || t.label.length === 0 && t.url.length === 0 || (window.dataLayer = window.dataLayer || [],
        window.dataLayer.push(t))
    }
    trackNavClicks() {
        this.container.querySelectorAll(this.selector).forEach(e => {
            e.addEventListener("click", t => this.trackClick(t))
        }
        )
    }
}
export {c as N};
