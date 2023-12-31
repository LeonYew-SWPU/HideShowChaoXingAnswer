// ==UserScript==
// @name         超星隐藏显示正确答案
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  通过单击键盘左上方的~/`/·键来隐藏/显示正确答案，用于期末复习
// @author       LeonYew-SWPU
// @match        https://mooc1.chaoxing.com/mooc-ans/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @license MIT
// ==/UserScript==
 
(function() {
    'use strict';
    // Your code here...
    document.onkeydown = function(e) {
        if (e.key == '`') {
            var answers = document.getElementsByClassName('mark_answer');
            for (var i = 0; i < answers.length; i++) {
                answers[i].style.display = (answers[i].style.display == 'none') ? 'block' : 'none';
            }
            console.log((answers[0].style.display == 'none') ? '答案已隐藏' : '答案已显示');
        }
    }
})();
