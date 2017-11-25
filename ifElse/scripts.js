var x = parseInt(prompt('Enter your grade for JavaScript'));
var y = prompt('Enter your grade for Java');
var z = prompt('Enter your grade for PHP');


grade(x,'javaScript');
grade(y,'Java');
grade(z,'PHP');

function grade(grade,topic){

 document.write('<br>');

  if(grade < 35){
    document.write('you failed ' + topic + ' F');
    gradeSwitch('f', topic);
  }
  else if(grade >=35 && grade <= 59 ){
    document.write('you passed ' + topic + ' C');
    gradeSwitch('c', topic);
  }
  else if(grade >= 60 && grade <= 69){
    document.write('you passed ' + topic + ' B');
    gradeSwitch('b',topic);
  }
  else if(grade >= 70){
    document.write('you passed ' + topic + ' A');
    gradeSwitch('a',topic);
  }
  else {
    document.write('unknown value');
  }
}



function gradeSwitch(grade,topic){
  document.write('<br>using switch<br>');
  switch(grade){
    case 'a':{
      document.write('you passed ' + topic + ' ' + grade);
    }break;

    case 'b':{
      document.write('you passed ' + topic + ' ' + grade);
    }break;

    case 'c':{
      document.write('you passed ' + topic + ' ' + grade);
    }break;



    case 'f':{
      document.write('you failed ' + topic + ' ' + grade);
    }break;

    default:{
      document.write('unknown value');
    }




  }
}
