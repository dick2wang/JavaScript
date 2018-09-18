/* 保证处理事件的代码能够在大多数浏览器中一致运行，只需关注冒泡阶段
*
* 1.第一个要创建的方法是addHandler(),它的职责是视情况分别使用DOM0级方法、DOM2级方法或者IE方法来添加事件
* 该方法属于一个叫EventUtil的对象，该对象接受3个参数：要操作的元素、事件名称和事件处理函数
*
* 2.第二个方法是与addHandle相对的removeHandler方法，它也接受3个同样的参数
* */


//实现

let EventUtil={
    addHandler:function (element, type, handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },

    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(element,handler);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    }
}