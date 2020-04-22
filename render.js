const electron = require("electron")

const i1 = document.getElementById("i1");
const done = document.getElementById("eb");
var i = 0
var d = 0
//https://hoi4.paradoxwikis.com/National_Focus_modding#Attributes
done.addEventListener("click", function() {

console.log(i1.value);
console.log(i2.value);
console.log(i3.value);
console.log(i4.value);
console.log(i5.value);
console.log(psi1.value);
console.log(psi1.value);

console.log(ai1.value);
console.log(ai2.value);

var clone = dupe.cloneNode(true)

clone.id = "dupe" + ++i


dupe.parentNode.appendChild(clone)
//document.getElementById("id1").innerHTML = "no";
//document.getElementById("dupe1").innerHTML = "well";
var close = document.getElementsByClassName("dele");
var d;
for (d = 0; d < close.length; d++) {
    console.log(close.length)

  close[d].onclick = function() {
      console.log("d")
    var div = this.parentElement;
    div.style.display = "none";
  }
}
});
eb2.addEventListener("click", function(){
    document.getElementById("outp").innerHTML = "";
  textp();  
})

function textp(){
const  fritsa = document.getElementById("outp");

var close = document.getElementsByClassName("dele")
var d;
for (d = 0; d < close.length; d++) {
    
     fritsa.innerHTML = fritsa.innerHTML + "" + getc(d, "i1") + getc(d, "i2")
  
}
 





}

function getc(f, a){
    if (f === 0){
        f = ""
    }
    
    var ci = "dupe"+f;
    console.log(ci)
    var list = document.getElementById(ci).getElementsByClassName(a); 
    var bl = list[0].value;
    return bl;
}




