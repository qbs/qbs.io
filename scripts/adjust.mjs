#!/usr/bin/env node

import jsdom from "jsdom";
import fs from "fs";
import fsPromise from "fs/promises";

const args = process.argv.slice(2)

Promise.all(args.map(async (arg) => {
    const data = await fsPromise.readFile(arg)
    const dom = new jsdom.JSDOM(data)

    const elm = dom.window.document.body
    elm.querySelectorAll("[href]").forEach((it) => {
        let attr = it.getAttribute("href")

        if (/(?:^[a-z][a-z0-9+\.-]*:|\/\/)/.test(attr)) {
            // pass
        } else if (attr.startsWith("#")) {
            // pass
        } else if (attr == "index.html") {
            attr = "{{< BaseURL >}}/docs"
        } else {
            attr = "{{< BaseURL >}}/docs/" + attr.replace(".html", "/")
        }

        it.setAttribute("href", attr)
    })
    elm.querySelectorAll("img").forEach((it) => {
        let attr = it.getAttribute("src")

        if (attr.startsWith("images/")) {
            attr = `{{< BaseURL >}}/img/docs/${attr.slice('images/'.length)}`
        }

        it.setAttribute("src", attr)
    })
    elm.querySelectorAll(".qmlproto").forEach((it) => {
        const readOnly = it.querySelector(".qmlreadonly") !== null

        const name = it.querySelector(".name")
        let type = it.querySelector(".type a")
        if (!type) {
            type = {outerHTML: it.querySelector(".type").textContent}
        } else {
            type = type.outerHTML
        }
        it.outerHTML = `<h3 class="qmlproto">${readOnly ? `<span class="opacity-50">readonly </span>` : ""}${name.textContent}: ${type.outerHTML}</h3>`
    })

    return fsPromise.writeFile(arg, "---\n\n---\n" + elm.innerHTML)
}))
