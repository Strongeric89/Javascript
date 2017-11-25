
var option = prompt('enter [1] for loops\n[2] while loops\n[3]do while loops')

if(option == 1){
  forLoop();
}else if(option == 2){
  whileLoop();
}else if(option == 3){
  doWhile();
}else{
  document.write('not a valid option');
}

function forLoop(){
    document.write('for loops...<br>');
  for(var i=0;i<10;i++){
    document.write('<br>Eric Strong is good at Javascript!');
  }
}

function whileLoop(){
  var isRunning = true;
  var i = 0;
    document.write('while loops...<br>');
  while(isRunning){
      if(i == 10){
        break;
      }
      document.write('<br>Eric Strong is good at Javascript!');
      i++;
  }

}

function doWhile(){
  var x = 0;
    document.write('do while...<br>');
  do{
      document.write('<br>Eric Strong is good at Javascript!');
      x++;
  }while(x < 10);
}
