;(function(){
    function deepClone(origin, target) {
      var target = target || {},
          toStr = Object.prototype.toString,
          arrType = '[object Array]';
      for(var key in origin){
        if(origin.hasOwnProperty(key)){
          item = origin[key];
          if(typeof(item) === 'object' && item !== null){
            if(toStr.call(item) === arrType){
              target[key] = [];  
            }else{
              target[key] = {};
            }
            deepClone(origin[key], target[key]);
          }else{
            target[key] = item;
          }
        }
      }
      return target
    }

  window.deepClone = deepClone;
})();

// 浅拷贝 for in 遍历，去除原型上的属性

function conloe(origin,target) {
  var target = target || {};
  for(key in data){
    if(origin.hasOwnProperty(key)){
      target[key] = origin[key];
    }
  }
  return target;
}

// 深拷贝 for in 循环，先判断是否是引用类型的值，除去null，然后判断是不是数组，是数组就为新属性新建空数组，然后递归调用，直到不是引用值才返回，如果不是数组，就创建空对象，也调用递归，剩下被排除出去的值就直接拷贝
