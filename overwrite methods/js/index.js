
// var dataStr = document.getElementsByTagName('div')[0].innerHTML;
// var data = JSON.parse(dataStr);
// console.log(data);
// ;(
//   function(data){
    // for循环
    // var arr = data;
    // var oLi = document.getElementsByTagName('li');
        // len = data.length;
        // str = '';
    // for(var i = 0; i< len; i++){
    //   // console.log(arr[i], i, arr);
    // }

    // forEach遍历
    // arr.forEach(function(elem, index, array){
    //   this[index].innerHTML = elem.course;
    //   console.log(elem.course);
    // },oLi);

    // 重写forEach
    // Array.prototype.myForEach = function(fn){
    //   var arr = this,
    //       len = arr.length,
    //       args2 = arguments[1] || window;
    //      for(var i = 0; i< len; i++){
    //       fn.apply(args2, [arr[i], i, arr]);
    //     }
    // };

    // arr.myForEach(function(elem, index, array){
    //   console.log(elem.course);
    //   this[index].innerHTML = elem.course;
    // },oLi);

    // filter
    // var newArr = arr.filter(function(elem, index, array){
    //   // console.log(this);
    //   return elem.is_free === '1';
    // }, {a: 1});
    // console.log(newArr);
   

    // 重写filter
    // Array.prototype.myFilter = function(fn){
    //   var arr = this,
    //   len = arr.length,
    //   nArr = [],
    //   args2 = arguments[1] || window;
    //   for(var i = 0; i < len; i++){
    //     item = deepClone(arr[i]);
    //     fn.apply(args2, [arr[i], i, arr]) ? nArr.push(item) : '';
    //   }
    //   return nArr;
    // }
  
    // var newArr1 = arr.myFilter(function(elem, index, array){
    //   return elem.is_free === '1';
    // }, oLi);
    // console.log(newArr1);
    // for(var i = 0; i < newArr1.length; i++){
    //   oLi[i].innerHTML = newArr1[i].course;
    // }
  // }
// )(data); 


var data = [
  {
    "name":"张三",
    "age": "30"
  },
    {
    "name":"李四",
    "age": "31"
  },
    {
    "name":"王五",
    "age": "30"
  }
];
// filter 返回一个新数组，数组元素由return后面的条件决定，当满足条件时，就将对应元素放入新数组中。
var newArr = data.filter(function(elem, index, array){
  return elem['age'] === '30';
});
console.log(newArr);
// [
//   {name: '张三', age: '30'},
//   {name: '王五', age: '30'}
// ]

// 重新封装filter
Array.prototype.myFilter = function(fn){
  var arr = this,
      len = arr.length,
      arg2 = arguments[1] || window,
      nArr = [];
  for(var i = 0; i < len; i++){
    // 如果数组元素是引用值，则应该先深拷贝后再放入新数组中。
    item = deepClone(arr[i]);
    // fn执行完后会返回一个布尔值，根据布尔值将元素放入新数组。
    fn.apply(arg2, [arr[i], i, arr]) ? nArr.push(item) : '';
  }
  return nArr;
}

var newArr1 = data.myFilter(function(elem, index, array){
  return elem['age'] === '31';
});
console.log(newArr1);
// [{name: '李四', age: '31'}]
// 深拷贝
// function deepClone(origin, target){
//   // 判断是否传入目标数组，如果没有就创建{}
//   var target = target || {},
//       toStr = Object.prototype.toString,
//       arrType = '[object Array]'; 
//   // for in 遍历
//   for(var key in origin){
//     // 判断源对象中有没有这个属性，排除原型上的属性
//     if(origin.hasOwnProperty(key)){
//       // 缓存数组元素
//       var item = origin[key];
//       // typeof中除null之外的引用值（Array、Object）
//       if(typeof(item) === 'object' && item !== null){
//         // 分情况讨论，如果数组元素中的某个属性值为数组，就新建一个空数组，不是就新建空对象
//         if(toStr.call(item) === arrType){
//           target[key] = [];
//         }else{
//           target[key] = {};
//         }
//         // 申请了内存空间后，再利用递归将里面的值一层层拷贝，直到不是引用类型的值
//         deepClone(item, target[key]);
//       }else{
//         // 不是引用类型，以源对象的属性名为键名，直接将源对象的键值赋给目标对象的属性，
//         target[key] = item;
//       }
//     }
//   }
//   // 最后将目标对象返回出去
//   return target;
// }