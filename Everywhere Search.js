// ==UserScript==
// @name         Everywhere Search
// @namespace    none
// @version      1.0
// @description  none
// @author       In5perat0r
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    const searchGoogleURL = new URL('http://www.google.com/search'); //      https://www.google.com/search?q=js+add+function+to+existing+object
    const searchYouTubeURL = new URL('https://www.youtube.com/results'); //   https://www.youtube.com/results?search_query=coronita+mikul%C3%A1s+mix
    const empty_regex = /^(\s*?)$/g;
    const search_regex = /^(?<space>\s+)?(?<search>.+)$/g;
    const denied_url = 'http://www.google.com';

    GM_registerMenuCommand('Search Platforms:', null, {autoClose: false});
    GM_registerMenuCommand('Google', () => {
        let search = prompt('Google Search:');
        if (search.match(empty_regex) != null) return;
        let search_content = Array.from(search.matchAll(search_regex))[0].groups.search;
        searchGoogleURL.searchParams.set('q',search_content);
        window.open(searchGoogleURL);
    }, {autoClose: false});
    GM_registerMenuCommand('YouTube', () => {
        let search = prompt('YouTube Search:');
        if (search.match(empty_regex) != null) return;
        let search_content = Array.from(search.matchAll(search_regex))[0].groups.search;
        searchYouTubeURL.searchParams.set('search_query', search_content);
        window.open(searchYouTubeURL);
    }, {autoClose: false});

})();