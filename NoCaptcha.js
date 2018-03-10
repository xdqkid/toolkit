// ==UserScript==
// @name         信息门户去验证码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       xdqkid
// @match        http://my.njxzc.edu.cn/index.portal
// ==/UserScript==

(function($) {
    'use strict';
    var captcha = document.getElementById("captchaContent");
    captcha.parentNode.removeChild(captcha);
})();