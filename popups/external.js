//alerts
alert('works');

//confirms
var x = confirm('do you know javascript?');
if(x == true){
  document.write('well done!');
}else{
  document.write('sorry ;(');
}

//prompts
var y = prompt('enter your favourite language');
document.write(y);

add();
function add(){
  var num1 = prompt('enter number 1:');
  var num2 = prompt('enter number 2:');
  var z = parseInt(num1) + parseInt(num2);
  document.write('result is: ',z);

}
