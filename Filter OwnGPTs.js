// ==UserScript==
// @name         Filter OwnGPTs
// @namespace    http://tampermonkey.net/
// @version      2025-02-25
// @description  try to take over the world!
// @author       You
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    function createHide(ref) {
        let cssEntry = `li[data-testid^="history-item"]:has(div>a[href^="${ref}"]) {
        display: none;
    }`
        return cssEntry;
    }

    function getData() {
        let data = Array.from(document.querySelectorAll('[class="group/sidebar"] > div > *:not([tabindex]) > a')).map(x => x.getAttribute('href'));
        console.log(data);
        return data.map(ref => createHide(ref)).join('\n');
    }

    function css() {
        setTimeout(function(){
            let sty = document.createElement('style');
            let styStr = getData();
            sty.innerText = styStr;
            document.head.appendChild(sty);
        }, 200);
    }

    css()

    GM_registerMenuCommand('Test', css);
})();