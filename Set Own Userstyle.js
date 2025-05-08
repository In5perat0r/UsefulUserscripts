// ==UserScript==
// @name         Set Own Userstyle
// @namespace    none
// @version      1.6
// @description  none
// @author       In5perat0r
// @match        https://chatgpt.com/*
// @match        https://chatgpt.com/c/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @updateURL    https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Set%20Own%20Userstyle.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/UsefulUserscripts/refs/heads/main/Set%20Own%20Userstyle.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    var css = `
.flex.flex-col.text-sm > .w-full.text-token-text-primary div[data-message-author-role="user"] > div > div {
    margin: 5px;
    border: solid 1px hsl(300, 100%, 30%);
    background-image: linear-gradient(180deg, hsl(300, 100%, 50%) 0%, hsl(300, 100%, 37%) 100%);
    outline: solid 5px hsl(300, 100%, 50%);
}

.flex.flex-col.text-sm > .w-full.text-token-text-primary div[data-message-author-role="assistant"] > div > div {
    margin: 5px;
    width: calc(100% - 5px - 5px);
    min-height: 50px;
    border: solid 1px hsl(200, 100%, 30%);
    background-image: linear-gradient(180deg, hsl(200, 100%, 50%) 0%, hsl(200, 100%, 37%) 100%);
    outline: solid 5px hsl(200, 100%, 50%);
    border-radius: 1.5rem;
    padding: .625rem 1.25rem;
}

.flex.flex-col.text-sm > .w-full.text-token-text-primary div[data-message-author-role="assistant"] > div > div > div.group:has(div.tableContainer) {
    & > div.tableContainer {
        background: rgba(0,0,0,0);
        & > table {
            margin-inline: 20px;
        }

        &::-webkit-scrollbar {
            height: 12px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(0,0,0,0);
        }

        &::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, hsl(200, 100%, 50%) 0%, hsl(200, 100%, 37%) 100%);
            border-radius: 6px;
            border: solid 1px hsl(200, 100%, 30%);
            outline: solid 3px hsl(200, 100%, 50%);;
        }

        &::-webkit-scrollbar-button {
            background: rgba(0,0,0,0);
            width: 10px;
        }
    }
}
`;

    GM_addStyle(css);
})();