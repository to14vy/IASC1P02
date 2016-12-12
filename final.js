//2 lines of code below are from: http://www.w3schools.com/js/tryit.asp?filename=tryjs_date_todatestring
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

function counsel(){//Get user match-up info and re-direct to correct counsellor page
  var trob = String(document.getElementById("relate").value);
  var male = document.getElementById("gender1").value;
  var fmale = document.getElementById("gender2").value;
  console.log(trob);
  console.log(male);


  if ((male=="0"&& fmale=="1")||trob=="sister"){
    location.href = "ariel.html"; //redirects match-up.html to counsellor's info page
  //code from:http://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
  }
  else{
    if (trob == "friend"){
      location.href = "daffy.html"; //redirects match-up.html to counsellor's info page
    //code from:http://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
    }
    if (trob == "brother"){
      location.href = "simon.html"; //redirects match-up.html to counsellor's info page
    //code from:http://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
    }
    if (trob == "special"){
      location.href = "kermit.html"; //redirects match-up.html to counsellor's info page
    //code from:http://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
    }
    if (trob == "other"){
      alert("You have chosen a troubled relationship that we currently do not have a counsellor for.");
      var c = confirm("Would you like to be re-directed to an approved advice column website where you can ask for specific advice and get an answer from Author Ellie Tesher?");
      if (c==true){
        location.href = "http://ellieadvice.com/"; //redirects match-up.html to ellie's advice website
      //code from:http://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
      }
    }
  }//else
}//counsel

function changeScheme(){
  var colours=new Array();
  var i = Math.floor((Math.random() * 8));
  colours = ["#500577","#3C035C","#D9007B","#910091","#AF0067","#55085D","#7C0932","#FF2DA4"]
  console.log(i);
  document.body.style.backgroundColor = colours[i];
  //above line of code from:http://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}
