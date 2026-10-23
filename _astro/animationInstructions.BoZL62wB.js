import {g as s} from "./index.Brfk6Bdo.js";
import {S as c} from "./ScrollTrigger.6qCihK2t.js";
class g {
    constructor(a, t) {
        this.element = a,
        this.options = t
    }
    getSplitText() {
        switch (this.options.type) {
        case "words":
            this.steps = this.getSplitWords();
            break;
        case "sentences":
            this.steps = this.getSplitSentences();
            break
        }
        return this.steps
    }
    getSplitSentences() {
        const t = this.element.innerText.split(".").filter(r => r.trim() !== "").map(r => `<span data-anim-step>${r}.</span> `);
        return this.element.innerHTML = t.join(" "),
        Array.from(this.element.querySelectorAll("[data-anim-step]"))
    }
    getSplitWords() {
        const t = this.element.innerText.split(" ").map(r => `<span data-anim-step>${r}</span> `);
        return this.element.innerHTML = t.join(" "),
        Array.from(this.element.querySelectorAll("[data-anim-step]"))
    }
}
const w = (m, a) => {
    if (a) {
        s.registerPlugin(c);
        let t = s.timeline();
        window.addEventListener("load", () => {
            c.refresh()
        }
        ),
        Object.entries(a).forEach( ([r,e]) => {
            if (e.batch) {
                const n = e.batch?.onEnter?.from ?? null
                  , o = e.batch?.onEnter?.to ?? null
                  , l = e.batch?.onLeave?.from ?? null
                  , p = e.batch?.onLeave?.to ?? null;
                delete e.batch?.onEnter,
                delete e.batch?.onLeave,
                e.batch?.set && (s.set(r, e.batch?.set),
                delete e.batch?.set),
                c.batch(r, {
                    onEnter: i => {
                        n && s.from(i, n),
                        o && s.to(i, o)
                    }
                    ,
                    onLeave: i => {
                        l && s.from(i, l),
                        p && s.to(i, p)
                    }
                    ,
                    ...e.batch
                });
                return
            }
            m.querySelectorAll(r).forEach(n => {
                let o = n;
                const l = e.timelinePosition || ">";
                e.splitText && (new g(n,e.splitText).getSplitText(),
                o = n.querySelectorAll("[data-anim-step]")),
                e.scrollTrigger && (t = s.timeline({
                    scrollTrigger: {
                        ...e.scrollTrigger,
                        trigger: o
                    }
                })),
                e.tweenFrom ? t.from(o, e.tweenFrom, l) : e.tweenTo ? t.to(o, e.tweenTo, l) : e.tweenFromTo && t.fromTo(o, e.tweenFromTo[0], e.tweenFromTo[1], l)
            }
            )
        }
        )
    }
}
  , d = {
    "h2-headlines-scrolltrigger": {
        h2: {
            scrollTrigger: {
                start: "top 80%",
                end: "top center",
                scrub: !0
            },
            tweenFrom: {
                opacity: 0,
                y: 20,
                duration: 1
            }
        }
    }
}
  , y = {
    "headline-onload": {
        h1: {
            splitText: {
                type: "sentences"
            },
            scrollTrigger: {
                start: "top 80%"
            },
            tweenFrom: {
                opacity: 0,
                y: "20px",
                duration: 1,
                stagger: .8
            }
        },
        "p.subheadline": {
            splitText: {
                type: "words"
            },
            tweenFrom: {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: .1
            }
        }
    },
    "headline-onscroll": {
        h1: {
            splitText: {
                type: "sentences"
            },
            scrollTrigger: {
                start: "top 80%",
                end: "top center",
                scrub: !0
            },
            tweenFrom: {
                opacity: 0,
                y: "20px",
                duration: 1,
                stagger: .8
            }
        },
        "p.subheadline": {
            splitText: {
                type: "words"
            },
            tweenFrom: {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: .1
            }
        }
    }
}
  , f = {
    global: d,
    hero: y,
    "case-study-card": {
        "card-stagger": {
            ".case-study-card": {
                batch: {
                    interval: 1,
                    set: {
                        opacity: 0,
                        y: "20px"
                    },
                    start: "top 80%",
                    onEnter: {
                        to: {
                            stagger: .2,
                            opacity: 1,
                            y: 0
                        }
                    }
                }
            }
        }
    },
    "other-example-options": {
        "sentence-splitText-scrollTrigger": {
            splitText: {
                type: "sentences"
            },
            tweenFrom: {
                scrollTrigger: {
                    start: "top 80%",
                    end: "top center",
                    trigger: ".module--fe29g8b3 h1",
                    scrub: !0
                },
                opacity: 0,
                y: 20,
                duration: 1
            }
        },
        "word-splitText": {
            splitText: {
                type: "words"
            },
            tweenFromTo: [{
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 1
            }]
        },
        tweenFromTo: {
            tweenFromTo: [{
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 1
            }]
        }
    }
};
export {f as A, w as a};
