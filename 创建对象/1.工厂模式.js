/*
为解决的问题：使用构造函数和对象字面量来创建单个对象，难免会产生大量重复代码
* */

//工厂模式

function createPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function () {
        alert(this.name);
    }
    return o;
}

var p1=createPerson("karl",29,"doctor")

