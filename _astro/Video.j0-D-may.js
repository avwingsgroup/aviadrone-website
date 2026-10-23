import {p as n, a as O, b as P} from "./props.DhW_cUaT.js";
import {G as J, ad as I, ae as w, ac as x, K as Q, af as U, ag as X, T as Y} from "./template.B2q5ohnV.js";
import {s as p, i as Z, c as $} from "./attributes.CEG2LPQo.js";
import {s as ee} from "./class.DZ8Rft6E.js";
import {b as te} from "./props.1hK3DwGu.js";
import {i as ae} from "./lifecycle.CWTZk5uM.js";
import {c as se} from "./index.DgjXxqtY.js";
import {c as le, o as oe, a as re} from "./index-client.BM0TrHfX.js";
import {v as f} from "./eventManager.Tnl4DHsi.js";
/* empty css                       */
/* empty css                       */
import {c as E} from "./i18nStore.CrwjP6Hx.js";
import {a as ne} from "./ui.BFjifYNb.js";
import "./clsx.B-dksMZM.js";
import "./_commonjsHelpers.CqkleIqs.js";
var ie = I('<track kind="subtitles" default>')
  , de = I('<video crossorigin="anonymous"><!></video>', 2);
function Me(R, r) {
    J(r, !1);
    const [j,C] = O()
      , D = () => P(E, "$currentLocale", j);
    let k = n(r, "playsinline", 8, !0)
      , s = n(r, "video", 8)
      , K = n(r, "controls", 8, null)
      , N = n(r, "autoload", 8, null)
      , V = n(r, "autoplay", 8, null)
      , W = n(r, "roundedCorners", 24, () => s()?.roundedCorners ?? !1)
      , q = n(r, "muted", 24, () => s()?.muted ?? !1)
      , z = n(r, "width", 8, "100%")
      , T = n(r, "className", 8, "")
      , A = n(r, "classes", 8, "")
      , L = n(r, "poster", 8, null)
      , S = n(r, "eventKey", 8, null);
    const m = le();
    let t, i = {
        fullscreen: !1,
        playing: !1,
        paused: !1
    }, d = "vid_" + s()?.id + "-" + Math.random().toString(36).substr(2, 9), c = [], v = 0, g = !1;
    const h = {
        progress: 0
    }
      , y = (e, l) => {
        !s()?.title || s()?.title?.length === 0 || (globalThis.dataLayer = globalThis.dataLayer || [],
        globalThis.dataLayer.push({
            event: "video",
            action: e,
            title: s()?.title,
            ...l ? {
                value: l
            } : {}
        }))
    }
      , B = () => {
        c.sort( (l, a) => l.start - a.start);
        let e = [c[0]];
        for (let l = 1; l < c.length; l++) {
            let a = e[e.length - 1]
              , o = c[l];
            o.start <= a.end ? a.end = Math.max(a.end, o.end) : e.push(o)
        }
        c = e
    }
      , M = e => {
        let l = .5
          , a = !1;
        for (let o of c)
            if (e >= o.start - l && e <= o.end + l) {
                e > o.end && (o.end = e),
                e < o.start && (o.start = e),
                a = !0;
                break
            }
        a || c.push({
            start: e,
            end: e
        }),
        B()
    }
      , _ = () => {
        let e = 0;
        c.forEach(a => e += a.end - a.start);
        let l = t.duration();
        return Math.round(e / l * 100)
    }
    ;
    oe( () => {
        f.players[d] && f.players[d].dispose(),
        t = f(d, {
            autoload: N() ?? s()?.autoload,
            autoplay: V() ?? s()?.autoplay,
            controls: K() ?? s()?.controls,
            inactivityTimeout: 1e3,
            loop: s()?.loop,
            muted: q(),
            poster: L() ?? s()?.poster?.src,
            preload: "auto",
            plugins: {
                mux: {
                    debug: !1,
                    data: {
                        env_key: void 0,
                        video_id: d,
                        video_title: s()?.title,
                        video_duration: s()?.video?.duration,
                        video_stream_type: "on-demand"
                    }
                }
            }
        }),
        EventManager.dispatchEvent("playerInitialized", {
            videoId: d
        });
        const [e,l] = (s()?.video?.aspect_ratio || "16:9").split(":");
        if (t.el().classList.add(`vjs-${e}-${l}`),
        T()) {
            const a = T().split(" ").filter(Boolean);
            a.length > 0 && t.el().classList.add(...a)
        }
        if (["16:9", "9:16", "1:1"].indexOf(s()?.video?.aspect_ratio) === -1) {
            const a = l / e * 100;
            t.el().style.paddingTop = `${a}%`
        }
        t.src({
            src: s()?.video?.playbackId,
            type: "video/mux"
        }),
        t.ready(async () => {
            if (t.on("play", () => {
                i.playing = !0,
                m("playerStatus", i)
            }
            ),
            t.on("pause", () => {
                i.paused = !0,
                m("playerStatus", i)
            }
            ),
            t.on("ended", () => {
                s()?.loop === !1 && (t.currenttime(0),
                t.poster(L() ?? s()?.poster?.src),
                i.paused = !1,
                i.playing = !1,
                m("playerStatus", i))
            }
            ),
            s()?.title && s()?.title?.length > 0) {
                let a = null;
                t.on("pause", () => {
                    clearTimeout(a),
                    a = setTimeout( () => {
                        const o = _();
                        y("pause", o),
                        a = null
                    }
                    , 1e3)
                }
                ),
                t.on("ended", () => {
                    y("progress", 100)
                }
                ),
                t.on("seeking", () => {
                    g = !0
                }
                ),
                t.on("seeked", () => {
                    Math.abs(v - t.currentTime) > 1 && M(v),
                    g = !1
                }
                ),
                t.on("timeupdate", () => {
                    const o = _();
                    g || (M(t.currentTime()),
                    v = t.currentTime),
                    o > h.progress && o > h.progress && Math.floor(o % 10) === 0 && (h.progress = o,
                    y("progress", o))
                }
                ),
                t.on("play", () => {
                    if (a) {
                        clearTimeout(a);
                        return
                    }
                    a = setTimeout( () => {
                        const o = _();
                        y("play", o),
                        a = null
                    }
                    , 1e3)
                }
                ),
                t.on("fullscreenchange", () => {
                    i.fullscreen = t.isFullscreen(),
                    m("playerStatus", i)
                }
                )
            }
        }
        ),
        S() && EventManager.addEventListener(`${S()}-play`, b)
    }
    ),
    re( () => {
        f.players[d] && f.players[d].dispose()
    }
    );
    const b = () => {
        t.play()
    }
    ;
    ae();
    var u = de();
    p(u, "id", d);
    var F = U(u);
    {
        var G = e => {
            var l = ie();
            p(l, "srclang", E),
            w( () => {
                p(l, "label", ne[D()]),
                p(l, "src", `/.netlify/functions/fetch-subtitle?url=${s()?.subtitleTrack?.url}`)
            }
            ),
            x(e, l)
        }
        ;
        Z(F, e => {
            s()?.subtitleTrack?.url && e(G)
        }
        )
    }
    X(u),
    w(e => {
        ee(u, $(e)),
        p(u, "style", `width: ${z() ?? ""}`),
        p(u, "webkit-playsinline", k() == !0),
        u.playsInline = k()
    }
    , [ () => se({
        "media-constrained": !0,
        "video-js": !0,
        "video--rounded": W(),
        classes: A()
    })], Y),
    x(R, u),
    te(r, "playVideo", b);
    var H = Q({
        playVideo: b
    });
    return C(),
    H
}
export {Me as default};
