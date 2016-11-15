/*var theDate = new Date();
var year = theDate.getFullYear();
var month = theDate.getMonth();
var day = theDate.getDate();
console.log(day+"/"+month+"/"+year);
var myAlert = alert("Uh-Oh!");
console.log(myAlert);
var myAlert = confirm("sure?");
console.log(myAlert);
var myAlert = prompt("Here we go!");
console.log(myAlert);*/

function addNum(Num1, Num2){
  var Num1 = Number(document.getElementById("number1").value);
  var Num2 = Number(document.getElementById("number2").value);
  var total = Num1 + Num2;
  document.getElementById("output").innerHTML=total;
}
