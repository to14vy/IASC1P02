var array1 = new Array();
array1 = ["tree","bird","plant","grasshopper","flower"];
var array2 = new Array();
array2 = ["rubber","weird","light","pretty","short"];

function part2(){
  var pos1 = Math.floor(Math.random()*4);
  var pos2 = Math.floor(Math.random()*4);
  var noun = array1[pos1];
  var adj = array2[pos2];
  document.getElementById("rest").innerHTML+= "What a "+adj+" "+noun+"!"+"<br />";
}
