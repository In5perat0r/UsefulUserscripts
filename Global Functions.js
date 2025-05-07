// ==UserScript==
// @name         Global Functions
// @namespace    none
// @version      1.0
// @description  none
// @author       In5perat0r
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    URL.prototype.searchEntries = function() {
        return Object.fromEntries(Array.from(this.searchParams.entries()));
    }

    document.createElementAttr = function(tagName, attr) {
        let e = document.createElement(tagName);
        let attrList = Object.entries(attr);
        attrList.forEach(item => {
            if (item[0] == 'innerText') {
                e.innerText = item[1];
            } else {
                e.setAttribute(item[0], item[1]);
            }
        });
        return e;
    }

    window.appendChildChain = function(tbl) {
        tbl.reverse();
        tbl = tbl.map((item, index, parent) => {
            return [tbl[index], tbl[index+1]];
        });
        tbl.pop();
        return tbl;
    }
})();