const u = e => {
    if (e === "1")
        return "100%";
    const [i,n] = e.split(/:|\//).map(Number);
    return `${n / i * 100}%`
}
  , l = e => function(n, s={}) {
    let t = n.split(".").reduce( (r, a) => r && r[a], e);
    if (!t)
        return null;
    if (t && typeof t == "string")
        for (const [r,a] of Object.entries(s))
            t = t.replace(`{{ ${r} }}`, a);
    return t
}
;
export {u as a, l as t};
