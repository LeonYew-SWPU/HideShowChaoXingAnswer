// ==UserScript==
// @name         超星隐藏显示正确答案
// @namespace    http://tampermonkey.net/
// @version      v1.2.4
// @description  通过单击键盘左上方的~/`/·键来隐藏/显示正确答案，用于期末复习
// @author       LeonYew-SWPU
// @match        https://mooc1.chaoxing.com/mooc-ans/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @projectURL   https://github.com/LeonYew-SWPU/HideShowChaoXingAnswer
// @license MIT
// ==/UserScript==
(function() {
    'use strict';
    // 引入iconfont
    var link = document.createElement('link');
    link.href = 'https://at.alicdn.com/t/c/font_4394726_ifn084x1vh.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);    // 将link元素添加到head元素中、

    // 初始化，获取元素
    var answersWindow = document.getElementsByClassName('mark_answer'); // 获取答案框div
    var answers = document.getElementsByClassName('mark_key clearfix'); // 获取答案文字div
    var answerStatuses = document.getElementsByClassName('mark_score'); // 获取答案状态div（对错+分数）
    var lightGrey = '#f9f9f9'; // 浅灰色
    var isHidden = false; // 答案隐藏指标

    // 遍历答案框div,添加遮罩层
    for (var i = 0; i < answersWindow.length; i++) {
        addCover(answersWindow[i]);
    }

    document.onkeydown = function (e) {
        if (e.key == '`') {
            flipAns();
        }
    }

    function flipAns(){
        // 改变答案隐藏指标
        isHidden = !isHidden;
        // 遍历答案div
        // 如果遍历窗口div的话，遇到简答题会找不到answers[i].style，也找不到answerStatuses[i].style
        for (var i = 0; i < answers.length; i++) {
            answers[i].style.display = (isHidden) ? 'none' : 'block'; // 隐藏答案文字
            answersWindow[i].style.backgroundColor = (isHidden) ? lightGrey : ''; // 背景调灰
            answersWindow[i].getElementsByClassName('cover')[0].style.display = (isHidden) ? 'block' : 'none'; // 显示遮罩层
            answersWindow[i].getElementsByClassName('icon-hide')[0].style.display = (isHidden) ? 'none' : 'inline'; // 隐藏眼睛图标
            answersWindow[i].getElementsByClassName('icon-eye')[0].style.display = (isHidden) ? 'inline' : 'none'; // 显示闭眼图标
            answerStatuses[i].style.display = (isHidden) ? 'none' : 'block'; // 隐藏答案状态div
            
        }
        // 后台提示
        console.log((isHidden) ? '答案已隐藏' : '答案已显示');
    }

    function addCover(answersWindow){
        // 修改answersWindow的布局方式为flex
        answersWindow.style.display = 'flex';
        answersWindow.style.flexDirection = 'row';

        // 添加遮罩层
        var cover = document.createElement('a');
        cover.className = 'cover';
        cover.href = '#'; // 做成超链接，表示可点击
        cover.style.textDecoration = 'underline'; // 添加下划线
        cover.style.display='none';
        cover.style.textAlign = 'left';
        cover.textContent = '答案已隐藏';
        cover.onclick = function(e){
            e.preventDefault(); // 阻止超链接的默认行为
            flipAns();
        }
        answersWindow.appendChild(cover);

        // 添加眼睛图标
        var eye = document.createElement('i');
        eye.className = 'iconfont icon-eye';
        eye.style.display = 'none'; // 最开始为隐藏状态
        eye.style.fontSize = '20px';
        eye.style.marginRight = '15px';
        eye.style.verticalAlign = 'middle';
        eye.style.fontStyle = 'normal';
        eye.onclick = function(e){
            flipAns();
        }
        answersWindow.prepend(eye);

        // 添加闭眼图标
        var eyeInvisible = document.createElement('i');
        eyeInvisible.className = 'iconfont icon-hide';
        eyeInvisible.style.fontSize = eye.style.fontSize;
        eyeInvisible.style.marginRight = eye.style.marginRight;
        eyeInvisible.style.verticalAlign = eye.style.verticalAlign;
        eyeInvisible.style.fontStyle = eye.style.fontStyle;
        eyeInvisible.onclick = eye.onclick;
        answersWindow.prepend(eyeInvisible);
    }
})();