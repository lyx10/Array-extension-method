;(function(doc) {
  var oNav = doc.getElementsByClassName("J_nav")[0],
      oList = doc.getElementsByClassName("J_list")[0],
      tpl = doc.getElementById("J_tpl").innerHTML,
      data = JSON.parse(doc.getElementById("J_data").innerHTML);
  // 初始化函数
  function init() {
    oList.innerHTML = renderList(filterData(data, "all"));
    bindEvent();
  }

  init();

  // 绑定事件处理函数
  function bindEvent() {
    oNav.addEventListener("click", navClick, false);
  }

  // 点击事件处理函数
  function navClick() {
    var e = e || window.event,
        tar = e.target || e.srcElement,
        tagName = tar.tagName.toLowerCase();
    if(tagName === "a"){
      var field = tar.getAttribute("data-field");
      oList.innerHTML = renderList(filterData(data, field));
    }

  }

  // 数据处理函数
  function filterData(data, field) {
    return data.filter(function(elem) {
      switch(field) {
        case "all":
          return true;
        case "free":
          return elem.is_free === "1";
        case "vip":
          return elem.is_free === "0";
        default: 
          return true;
      }
    })
  }

  // 渲染函数
  function renderList(data) {
    var list = "";
    data.forEach(function(elem) {
      // 匹配双括号里面的子表达式，所有字符出现0次到多次，非贪婪模式
      list += tpl.replace(/{{(.*?)}}/g, function(node, key) {
        return {
          course: elem.course
        }[key];
      });
    });
    return list
  }


})(document)