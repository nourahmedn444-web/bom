// var w=window.innerWidth;
// var h=window.innerHeight;
// document .querySelector("#demo")="your width is"+w+"and height is"+h;
window.addEventListener("scroll",function(){
    var scrollValue=window.scrollY;
    var navbar=document.querySelector(".navbar");
    if(scrollValue>400){
        navbar.setAttribute("class","navbar md:navbar-expand bg-primary");
    }else{
        navbar.setAttribute("class","navbar md:navbar-expand bg-danger")
    }
})

// ========================================================
var mouse=setInterval(myTimer,1000);
function myTimer (){
    var d =new Date();
    document.getElementById("nour").innerHTML= d;
}
// ==========================================
var time=setInterval(myTimer,1000);
function getData (){
   alert(123);
}