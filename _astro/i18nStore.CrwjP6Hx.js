import {d as a} from "./ui.BFjifYNb.js";
let l = []
  , c = (o, h) => {
    let u = []
      , t = {
        get() {
            return t.lc || t.listen( () => {}
            )(),
            t.value
        },
        l: 0,
        lc: 0,
        listen(i, n) {
            return t.lc = u.push(i, n || t.l) / 2,
            () => {
                let f = u.indexOf(i);
                ~f && (u.splice(f, 2),
                --t.lc || t.off())
            }
        },
        notify(i, n) {
            let f = !l.length;
            for (let e = 0; e < u.length; e += 2)
                l.push(u[e], u[e + 1], t.value, i, n);
            if (f) {
                for (let e = 0; e < l.length; e += 5) {
                    let r;
                    for (let s = e + 1; !r && (s += 5) < l.length; )
                        l[s] < l[e + 1] && (r = l.push(l[e], l[e + 1], l[e + 2], l[e + 3], l[e + 4]));
                    r || l[e](l[e + 2], l[e + 3], l[e + 4])
                }
                l.length = 0
            }
        },
        off() {},
        set(i) {
            let n = t.value;
            n !== i && (t.value = i,
            t.notify(n))
        },
        subscribe(i, n) {
            let f = t.listen(i, n);
            return i(t.value),
            f
        },
        value: o
    };
    return t
}
;
const p = c(a);
export {p as c};
