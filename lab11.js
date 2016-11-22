function first(){
  var num = Number(document.getElementById("input").value);
  for(i=0;i<=num;i++){
    document.getElementById("output").innerHTML+= i+"<br />";
  }
}
