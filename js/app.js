document.getElementById("home").addEventListener("click",function(){
    location.href="index.html";
});
document.getElementById("nav").addEventListener("click",nav);
function nav() {
  navitem.init(),
  navitem.add({selector:"a,button"}),
  navitem.makeFocusable(),navitem.focus()
}
document.getElementById("navbut").addEventListener("click",function(){
var navex = document.getElementById("navbarsExample07");
if (navex.style.display=="block") {
  navex.style.display="none";
} else {
  navex.style.display="block";
}
});