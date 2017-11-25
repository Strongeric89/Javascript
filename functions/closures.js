/*

Closures are functions within functions
*/
greet();

function greet(){
  var a = "hello";

  //another functions
  function greetAgain(){
    var b = "eric";
    document.write(a + ' '+ b);

  }
  //note you are returning the inner function
  return greetAgain();
}
