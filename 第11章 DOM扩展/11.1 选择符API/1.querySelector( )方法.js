/*
    1.接收一个CSS选择符，返回与该模式匹配的第一个元素
    2.如果没有找到匹配的元素则返回null，如果传入了不被支持的选择符，将会抛出错误
    3.可以通过Document类型和Element类型调用该方法，通过Document时，会在文档元素的范围内
    查找匹配元素，而通过Element时，只会在该元素的后代元素中查找匹配元素
*/

//选择body元素
var body=document.querySelector("body");
//ID选择
var myDiv=document.querySelector("#myDiv");
//class 选择
var selected=document.querySelector(".selected");
//选择类为button的第一个元素
var img =document.querySelector("img.button");