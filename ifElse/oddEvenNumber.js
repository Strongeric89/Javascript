/*
A simple challenge to accept a number and find out it its odd or even
*/
var number = prompt('Enter a number:');

oddEven(number);

function oddEven(number){
  if(number % 2 == 0 ){
    document.write('<h1>The number '+ number +' is even!</h1>');
  }else if(number % 2 == 1){
    document.write('<h1>the number '+number+' is odd!</h1>');
  }else{
    document.write('<h1>unknown number</h1>');
  }

}
