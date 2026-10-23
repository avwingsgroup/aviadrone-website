const n = t => {
    const e = document.createElement("template");
    return e.innerHTML = t.trim(),
    e.content.childNodes[0]
}
;
export {n as h};
