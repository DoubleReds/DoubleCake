define([
    'jquery'
], function ($) {
    'use strict';
    // 获取input的框
    const oInput = $(".input_wrap");
    // 配置ajax请求的参数
    function opations(res) {
        return {
            url: "https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&fields=word",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                word: res
            }
        }
    }
    oInput.on("input", () => {
        let value = oInput.val();
        var options = opations(value);
        $.ajax(options)
            .then((res) => {
                let result = res.result;
                let flag = document.createDocumentFragment();
                for (var i = 0; i < result.length; i++) {
                    var oLi = document.createElement("li");
                    oLi.innerHTML = result[i].word;
                    oLi.className = "item";
                    flag.appendChild(oLi);
                }
                $(".result").html("");
                $(".result").append(flag);
                if (!$(".result").children().length) {
                    $(".result").css({ "display": "none" });
                } else {
                    $(".result").css({ "display": "block" });
                }
            })
    })
    return this;
});