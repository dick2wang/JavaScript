var a={}
var num;
num=Math.random();
function loadXML(a) {
    a=0;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5}
        xmlhttp = new ActiveXObject("Mircrosoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function () {
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById("getmsg").innerHTML=xmlhttp.responseText;
        }
    }
}