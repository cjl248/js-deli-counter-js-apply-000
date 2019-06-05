
function takeANumber(myArray, newCust) {
  
// Declare newCustPos a String that will store the new customer's index within the line array. //
  var newCustPos;
  
// Push the new customer to the front of the current customers. //
  myArray.push(newCust);
  
// Find the current position of the new customer in the line of current customers. //
  newCustPos = myArray.indexOf(newCust);
  
// Account for the array starting at index 0. //
  newCustPos = newCustPos + 1;
  
// Return the welcome message including the new person's position in line. //
  return "Welcome, " + newCust + ". You are number " + newCustPos + " in line."
}

function nowServing(myArray) {
    if(myArray.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      var firstPerson = myArray[0];
      myArray = myArray.shift();
      return "Currently serving " + firstPerson + "."
    }
}

function currentLine(myArray) {
  var currCust;
  var myArrayLength = myArray.length;
  var answer = "The line is currently: ";
  
  if(myArrayLength === 0) {
    return "The line is currently empty."
  } else {
    for(var i = myArrayLength - 1; i >= 0; i--) {
      currCust = myArrayLength - i + ". "  + myArray.shift() + ", ";
      answer += currCust;
    }
    answer = answer.slice(0, -2);
  }
  return answer
}

var i = 0;
function giveANumber(mArray) {
  i++;
  mArray.push(i);
}
