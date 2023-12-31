// ==UserScript==
// @name         超星隐藏显示正确答案
// @namespace    http://tampermonkey.net/
// @version      v1.0.3
// @description  通过单击键盘左上方的~/`/·键来隐藏/显示正确答案，用于期末复习
// @author       LeonYew-SWPU
// @match        https://mooc1.chaoxing.com/mooc-ans/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @license MIT
// ==/UserScript==
(function() {
    'use strict';
    document.onkeydown = function(e) {
        if (e.key == '`') {
            var myAnswers = document.getElementsByClassName('colorDeep marginRight40 fl');
            var rightAnswers = document.getElementsByClassName('colorGreen marginRight40 fl');
            for (var i = 0; i < myAnswers.length; i++) {
                if(myAnswers[i].style.color == ""){
                    myAnswers[i].style.color = "transparent";
                    rightAnswers[i].style.color = "transparent";
                }else{
                    myAnswers[i].style.color = "";
                    rightAnswers[i].style.color = "";
                }
            }
            console.log((myAnswers[0].style.color == 'transparent') ? '答案已隐藏' : '答案已显示');
        }
    }
})();