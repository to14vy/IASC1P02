var myPrompt = Number(prompt("What is your age?"));

theDate = new Date();
var year = Number(theDate.getFullYear());

var result = year - myPrompt;
document.getElementById("year").innerHTML="You were born in the year "+result;
