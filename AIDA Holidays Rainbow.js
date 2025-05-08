// ==UserScript==
// @name         AIDA Holidays Rainbow
// @namespace    none
// @version      1.5
// @description  none
// @author       In5perat0r
// @match        http://r58-aida/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.aida-orga.de
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    var css = `
.highlight-ferien.ng-scope {
    animation: holidays 5s infinite;
}

#widgetPK > #calendarPK > table > tbody > tr[data-ng-repeat]:has(.isToday) > td:nth-child(1) {
    background-image: linear-gradient(0deg, hsl(300,100%,50%) 0%, transparent 50%);
}

@keyframes holidays {
    0% {background-color: hsl(0,100%,50%);}
    16.6666666666667% {background-color: hsl(60,100%,50%);}
    33.3333333333333% {background-color: hsl(120,100%,50%);}
    50% {background-color: hsl(180,100%,50%);}
    66.6666666666667% {background-color: hsl(240,100%,50%);}
    83.3333333333334% {background-color: hsl(300,100%,50%);}
    100% {background-color: hsl(360,100%,50%);}
}
`;
    GM_addStyle(css);
})();