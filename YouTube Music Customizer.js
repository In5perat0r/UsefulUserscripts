// ==UserScript==
// @name         YouTube Music HSL Rainbow Customizer
// @namespace    none
// @version      1.7
// @description  none
// @author       In5perat0r
// @match        https://music.youtube.com/watch?v=yUZeZNxiD-M&list=PLuVt-kUON6LguiFNkpP_yo666cbuWUP6q
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @updateURL    https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/YouTube%20Music%20Customizer.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/YouTube%20Music%20Customizer.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    var css = `
#primaryProgress {
    background: repeating-linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%)) !important;
}

ytmusic-player-bar[enable-cairo-refresh-signature-moments-web] #progress-bar.ytmusic-player-bar {
}
`;
    // Add CSS
    GM_addStyle(css)
})();