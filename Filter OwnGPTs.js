// ==UserScript==
// @name         Filter OwnGPTs
// @namespace    none
// @version      1.6
// @description  none
// @author       In5perat0r
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @updateURL    https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Filter%20OwnGPTs.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Filter%20OwnGPTs.js
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
            sty.innerHTML = styStr;
            document.head.appendChild(sty);
        }, 200);
    }

    css()

    GM_registerMenuCommand('Hide Non-Default GPT Chats', css);
})();