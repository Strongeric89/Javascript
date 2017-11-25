/*
Simple challenge: ask user for number and loop until you reach that number


*/

var number = prompt('enter a number:');
var isRunning = true;
var i=0;
while(isRunning){
  if(number % 3 == 0){
  document.write("<br>number " + i);
  }else{
  continue;
}i++;

  if(i==number){
    break;
  }

}
