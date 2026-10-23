import {l as _, d as g, c as y} from "./forms.CWVHOfyz.js";
const L = async (e, n) => _().then( () => {
    const o = e.getAttribute("data-marketo-form-id") ?? n.formId;
    document.getElementById("mktoForm_" + o);
    const i = t => {
        window.dataLayer = window.dataLayer || [],
        window.dataLayer.push(t)
    }
      , c = t => {
        t.value || t.options[t.selectedIndex].value !== "" ? e.querySelectorAll("label[for=" + t.id + "]")[0].classList.add("mktoValid") : e.querySelectorAll("label[for=" + t.id + "]")[0].classList.remove("mktoValid")
    }
    ;
    return new Promise( (t, h) => {
        MktoForms2.loadForm("//pages.aviadrones.com", "784-TUF-591", o, l => {
            g(l);
            const m = e.getAttribute("data-show-success");
            b(e),
            e.elements.recentUTMUrl && (e.elements.recentUTMUrl.value = window.location.href.split("?")[0]),
            e.classList.add("init");
            for (let a in e.elements)
                if (e.elements[a].tagName == "INPUT" || e.elements[a].tagName == "TEXTAREA") {
                    if (e.elements[a].addEventListener("change", s => {
                        c(s.target)
                    }
                    ),
                    e.elements[a].type == "checkbox") {
                        const s = e.querySelector("#Lbl" + e.elements[a].id);
                        s && s.setAttribute("for", e.elements[a].id)
                    }
                } else
                    e.elements[a].tagName == "SELECT" && (e.querySelectorAll("label[for=" + e.elements[a].id + "]")[0].classList.add("Aviadrones.-select"),
                    e.elements[a].addEventListener("change", s => {
                        c(s.target)
                    }
                    ));
            l.onValidate(a => {
                if (!a)
                    Object.keys(l.getValues()).forEach(d => {
                        const u = document.querySelector("#mktoForm_" + o + " [name=" + d + "]");
                        if (u) {
                            const r = document.querySelector("#mktoForm_" + o + " label[for=" + d + "]");
                            r && u.value !== "" && r.classList.add("mktoValid")
                        }
                    }
                    );
                else {
                    try {
                        Object.keys(l.getValues()).forEach(d => {
                            if (document.querySelector("#mktoForm_" + o + " [name=" + d + "]")) {
                                const r = document.querySelector("#mktoForm_" + o + " label[for=" + d + "]");
                                r && r.classList.add("mktoValid")
                            }
                        }
                        )
                    } catch (s) {
                        console.log(s)
                    }
                    y(l)
                }
            }
            ),
            l.onSuccess( (a, s) => {
                if (m) {
                    if (e.dataset.gaFormType) {
                        const d = {
                            event: "formSubmit",
                            formType: e.dataset.gaFormType,
                            formDescription: e.dataset.gaFormDesc,
                            vertical: e.dataset.gaVertical
                        };
                        i(d)
                    }
                    return e.classList.add("marketo-form--success"),
                    Array.from(document.querySelectorAll(`[data-module-id="${e.dataset.marketoFormModule}"]`)).forEach(d => {
                        d.classList.add("market-form--module-success")
                    }
                    ),
                    !1
                }
                return !1
            }
            );
            const k = new CustomEvent("marketoFormLoaded",{
                detail: l
            });
            return document.dispatchEvent(k),
            t(l)
        }
        )
    }
    )
}
);
function b(e) {
    var n = {
        utm_campaign: "Recent_UTM_Campaign__c",
        utm_source: "Recent_UTM_Source__c",
        utm_medium: "Recent_UTM_Medium__c",
        utm_term: "Recent_UTM_Term__c",
        utm_content: "Recent_UTM_Content__c"
    };
    const o = p("utmcookie");
    if (o) {
        var i = JSON.parse(o);
        Object.keys(i).map(c => {
            e.elements[n[i[c].key]] && (e.elements[n[i[c].key]].value = i[c].value)
        }
        )
    }
}
function p(e) {
    let n = e + "="
      , i = decodeURIComponent(document.cookie).split(";");
    for (let c = 0; c < i.length; c++) {
        let t = i[c];
        for (; t.charAt(0) == " "; )
            t = t.substring(1);
        if (t.indexOf(n) == 0)
            return t.substring(n.length, t.length)
    }
    return ""
}
export {L as I};
