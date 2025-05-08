// ==UserScript==
// @name         Tampermonkey Documentation
// @namespace    none
// @version      1.6
// @description  none
// @author       In5perat0r
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Tampermonkey%20Documentation.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Tampermonkey%20Documentation.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand('Open Documentation',() => {window.open('https://www.tampermonkey.net/documentation.php')},'O',{accessKey: 'O',title: 'Tampermonkey Documentation'});
})();