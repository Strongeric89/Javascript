/*
the following script is used to define variables and objects
and display them in order to know how to use them

*/
//call the function
printArray();
arimetic(10, 1);
strings('eric');

function printArray() {
  var types = [];
  var x = 10;
  var _x = 50;
  var $x = 20.45;
  var s = "hello";
  types = [x, _x, $x, s];

  for (var i = 0; i < types.length; i++) {
    document.write(types[i]);
    document.write('<br>');
  }

}


function arimetic(x, y) {
  document.write('<br>add:', x + y);
  document.write('<br>mult:', x * y);
  document.write('<br>divide:', x / y);
  document.write('<br>mod:', x % y);
}

function strings(s){
  document.write('<br>',s.length);

  document.write('<br>',s.replace('eric','strong'));

  //producint NaN - not a number
  var s1 = 'eric';
  var s2 = 'strong';
  var s3 = s1 + s2; // will return eric strong
  var s4 = '1';
  var s5 = '2';
  var s6 = s4 + s5; // will return 3 cause js autotmatically converts to numbers

  var s7 = s6 * s3;
  document.write(s7);
  document.write(s3+s6); // should just concat a string and number


  //power of
  var num1 = 10;
  var num2 = 2;
  document.write('<br>',num1**num2); // power of
  document.write('<br>',Math.pow(6,2));


  //post and pre increment ++
  //decrement --
  var number = 0;
  document.write('<br>',++number);
  document.write('<br>',number++);
  document.write('<br>',number); // should be 2


  //comparisons - returns booleans
  document.write('<br>',10==10);
  document.write('<br>',10<10);
  document.write('<br>',10>10);
  document.write('<br>',10!=10);
}
