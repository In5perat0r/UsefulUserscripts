// ==UserScript==
// @name         Custom AIDA Style
// @namespace    none
// @version      1.6
// @description  none
// @author       In5perat0r
// @match        http://r58-aida/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.aida-orga.de
// @updateURL    https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Custom%20AIDA%20Style.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Custom%20AIDA%20Style.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    var css = `
#menu {
    width: min-content;
}

.menuItem {
    border-radius: 15px;
    transition-property: background-color color;
    transition-duration: 0.5s;

    &:not(:last-child) {
        margin: 5px;
    }

    &:last-child {
        margin: 0 5px 5px 5px;
    }

    &.active {
        background-color: hsl(200, 30%, 70%) !important;

        &:hover {
            background-color: hsl(210, 80%, 70%) !important;
        }
    }

    &:hover {
        background-color: hsl(210, 80%, 70%) !important;
    }

    & > a {
        color: white !important;
    }
}
`;
    GM_addStyle(css.join('\n'));
})();