// 立即执行函数
;(function(doc) {
  // 获取数据
  var data = JSON.parse(doc.getElementById("J_data").innerHTML),
      oSearch = doc.getElementsByTagName('input')[0],
      oList = doc.getElementsByClassName('J_list')[0];
  // console.log(data);
  function init() {
    bindEvent();
  }

  init();
  
  // 绑定事件处理函数
  function bindEvent() {
    oSearch.addEventListener('input',searchCourse,false);
  }

  // input的事件处理函数
  function searchCourse() {
    var val = this.value,
        len = val.length;
    // 如果长度大于0，渲染数据，否则返回暂无数据
    if(len > 0){
      var list = makeList(searchData(data, val));
      // 判断makeList的执行结果是否为空，不为空就将结果渲染到ul，为空就显示暂无数据
      if(list){
        oList.innerHTML = list;
      }else{
        oList.innerHTML = '<sapn>- 暂无数据 -</sapn>'
      }

    }else{
      oList.innerHTML = '<sapn>- 暂无数据 -</sapn>'
    }
  }
  
  // 搜索函数
  function searchData(data, keyWords) {
   return  data.reduce(function(prev, elem) {
      var res = elem.course.indexOf(keyWords);
      if(res !== -1){
        // 放进prev中
        prev.push(elem["course"]);
      }
      return prev;
    },[])
  }

  // 渲染函数
  function makeList(data) {
    var list = '';
    if(!data || data.length <= 0){
      return
    }else{
      data.forEach(function(elem){
        list += '<li>'+ elem + '</li>'
      });
      return list
    }
  }

})(document)