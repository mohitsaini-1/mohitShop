var bar = document.getElementById("bar");
var close = document.getElementById("close");
var navbar = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click",function(){
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",function(){
        navbar.classList.remove("active");
    })
}