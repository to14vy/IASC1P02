function addNum(){ //function to find the sum of the input numbers
  var firstNum = String(document.getElementById("num1").value); //get first number
  var secNum = String(document.getElementById("num2").value); //get second number

  var input1 = firstNum.toLowerCase(); //put input 1 in all lowercase
  var input2 = secNum.toLowerCase(); //put input 2 in all lowercase

  var operand1 = getDigit(input1); //turn input numbers into digits
  var operand2 = getDigit(input2);

  var total = operand1 + operand2; //add the digits
  if (operand1==0||operand2==0){ //if the number(s) could not be converted to digits, tell user to try again
    alert("Invalid Input. Please try again.");
  }
  else{ //if numbers were successfully converted and thus successfully added, turn the sum into a word
    var result = getWord(total);//get the word-version of the "total" digit
  }
  document.getElementById("outputBold").innerHTML="Output:"; //bold "Output" for display
  firstNum=input1.toUpperCase();
  secNum=input2.toUpperCase();
  total=result.toUpperCase(); //write all numbers in Upper case.
  document.getElementById("output").innerHTML=firstNum+" plus "+secNum+" equals "+total+"."; //output statement
}

function subtract(){ //function to find the difference of the input numbers
  var firstNum = String(document.getElementById("num1").value); //get first number
  var secNum = String(document.getElementById("num2").value); //get second number

  var input1 = firstNum.toLowerCase(); //put input 1 in all lowercase
  var input2 = secNum.toLowerCase(); //put input 2 in all lowercase

  var operand1 = getDigit(input1); //turn input numbers into digits
  var operand2 = getDigit(input2);

  var total = operand1 - operand2; //subtract the digits
  if (operand1==0||operand2==0){ //if the number(s) could not be converted to digits, tell user to try again
    alert("Invalid Input. Please try again.");
  }
  else{ //if numbers were successfully converted and thus successfully subtracted, turn the difference into a word
    var result = getWord(total);//get the word-version of the "total" digit
  }
  document.getElementById("outputBold").innerHTML="Output:"; //bold "Output" for display
  firstNum=input1.toUpperCase();
  secNum=input2.toUpperCase();
  newResult=result.toUpperCase();
  if(total<0){
    var negative = "NEGATIVE";
    newResult = negative.concat(" ",newResult);
  }
  document.getElementById("output").innerHTML=firstNum+" minus "+secNum+" equals "+newResult+"."; //output statement
}

function multiply(){ //function to find the product of the input numbers
  var firstNum = String(document.getElementById("num1").value); //get first number
  var secNum = String(document.getElementById("num2").value); //get second number

  var input1 = firstNum.toLowerCase(); //put input 1 in all lowercase
  var input2 = secNum.toLowerCase(); //put input 2 in all lowercase

  var operand1 = getDigit(input1); //turn input numbers into digits
  var operand2 = getDigit(input2);

  var total = operand1 * operand2; //multiply the digits
  if (operand1==0||operand2==0){ //if the number(s) could be converted to digits, tell user to try again
    alert("Invalid Input. Please try again.");
  }
  else{ //if numbers were successfully converted and thus successfully multiplied, turn the product into a word
    var result = getWord(total);//get the word-version of the "total" digit
  }
  document.getElementById("outputBold").innerHTML="Output:"; //bold "Output" for display
  firstNum=input1.toUpperCase();
  secNum=input2.toUpperCase();
  total=result.toUpperCase(); //write all numbers in Upper case.
  document.getElementById("output").innerHTML=firstNum+" multiplied by "+secNum+" equals "+total+".";//output statement
}

function divide(){ //function to find the quotient of the input numbers
  var firstNum = String(document.getElementById("num1").value); //get first number
  var secNum = String(document.getElementById("num2").value); //get second number

  var input1 = firstNum.toLowerCase(); //put input 1 in all lowercase
  var input2 = secNum.toLowerCase(); //put input 2 in all lowercase

  var operand1 = getDigit(input1); //turn input numbers into digits
  var operand2 = getDigit(input2);

  var total = operand1 / operand2; //divide the digits
  if (operand1==0||operand2==0){ //if the number(s) could not be converted to digits, tell user to try again
    alert("Invalid Input. Please try again.");
  }
  else{ //if numbers were successfully converted and thus successfully divided, turn the quotient into a word
    var result = getWord(total);//get the word-version of the "total" digit
  }
  document.getElementById("outputBold").innerHTML="Output:"; //bold "Output" for display

  firstNum=input1.toUpperCase();
  secNum=input2.toUpperCase();
  total=result.toUpperCase(); //write all numbers (and statement if needed) in Upper case.

  if (total=="N/I"){
    alert("Sorry, your result is not an integer and this program only produces integer results.");
  }
  else{
    document.getElementById("output").innerHTML=firstNum+" divided by "+secNum+" equals "+total+"."; //output statement
  }
}

function getDigit(input){ //function called to turn input into digits
  var operand = 0; //set variable to return to false(i.e. 0)
  var wordArray = new Array(); //array of words to recognize the input
  wordArray = ["one","two","three","four","five"];

  for (i=0;i<5;i++){ //check 5 times...
    if (String(input)==String(wordArray[i])){ //if one of the words matches the one of the input from the user
      operand = i+1; //give the input it's corresponding digit
    }
  }
  return operand; //return the digit to the operation function that called it
}

function getWord(total){ //turn the result into a word for output
  var totalW = "decimal";//initialize returning variable to falso (i.e. 0)
  var check = true;
  var digitArray = new Array(); //array of numbers to recognize the new found total
  digitArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                            20,21,22,23,24,25];
  var wordArray = new Array();//array of numbers in word form to get the total's expression in words
  wordArray = ["Zero","One","Two","Three","Four","Five","Six","Seven",
                            "Eight","Nine","Ten","Eleven","Twelve","Thirteen",
                            "Fourteen","Fifteen","Sixteen","Seventeen",
                            "Eighteen","Nineteen","Twenty","Twenty-One",
                            "Twenty-Two","Twenty-Three","Twenty-Four",
                            "Twenty-Five"];

  var i = 0; //counter
  posTotal = total;//assign the original total to a separate variable (posTotal)
  if(posTotal<0){ //if the total is a negative value...
    posTotal = total*(-1); //...assign posTotal to positive version of the REAL total.

  }
  while(check){ //while the string expression of the total has not been found...
    if (posTotal==digitArray[i]){ //...when one of the digits in the digit array match the positive version of total and...
      totalW=wordArray[i]; //...assign the total it's word-equivalent from WordArray for returning, then...
      check = false; //...break out of while loop.
    }
    i++; //increment counter
    if (i>wordArray.length) {check = false;} //if the total was a not an integer, break out of the loop
  }//end of while loop

  if (totalW=="decimal"){ //if the total was a not an integer, return this statement.
    return "N/I"; //non-integer statement
  }

  else { //if the total was a not an integer...
    return totalW; //...return the string totals.
  }
}

function reset(){ //resets text boxes for new input
  document.getElementById("num1").value="";
  document.getElementById("num2").value="";
}

function random(){ //generates random numbers for input
  var wordArray = new Array();
  wordArray = ["one","two","three","four","five"];

  var i = Math.floor((Math.random() * 5));
  var j = Math.floor((Math.random() * 5));
  document.getElementById("num1").value= wordArray[i];
  document.getElementById("num2").value= wordArray[j];
}
