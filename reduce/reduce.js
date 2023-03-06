var cookieDatas = document.getElementById('j_cookieData').innerHTML,
    cookieArr = cookieDatas.split("; "); //先将字符串转换为数组
     
// 将数组的每一项元素转换为键值对的形式
var newData = cookieArr.reduce(function(prev, elem){
  // 先先将每一项分割为数组
  var item = elem.split("=");
  // 再分别取数组的第1项为键名，第2项为键值
  prev[item[0]] = item[1];
  return prev
},{});
console.log(newData);

// 啊哦，我理解错需求了，我以为是要把对象里面的属性弄成单独的对象，然后把这一个个对象放入数组中，
// 然后就额外声明了一个空对象，reduce的第二个参数可以直接用字面量，不用先声明变量。
// item和elem也用混了

// 步骤
// 1.获取标签里面的内容（innerHTML）
// 2.分割字符串 （split），以“; ”为分隔符
// 再继续分割数组元素中的字符串，以“=”为分隔符
// 为prev增加新属性
// 返回preve