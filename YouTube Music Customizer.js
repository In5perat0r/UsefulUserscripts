// ==UserScript==
// @name         YouTube Music Customizer
// @namespace    none
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://music.youtube.com/watch?v=yUZeZNxiD-M&list=PLuVt-kUON6LguiFNkpP_yo666cbuWUP6q
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
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
    GM_addStyle(css)
})();