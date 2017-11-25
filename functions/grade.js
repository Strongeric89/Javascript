/*
the following is a grade calculator in JS
take in the grade for each subject
then add up all results and return the average grade

*/

var subjects = ["programming","maths","webdev","python", "java"];
var grade = [];

for(var i=0;i<subjects.length;i++){
  var result = getGrade(subjects[i]);
  grade.push(result);
}

var total = 0;
//print out all values in array
for(var i=0;i<grade.length;i++){
  total = total + parseInt(grade[i]);
  document.write('<br>' + subjects[i] + ' : ' + grade[i]);
}
  var avg = total / subjects.length;
    // document.write('<br> size is: ' + subjects.length );
    //     document.write('<br> total is: ' + total );
  document.write('<br> The Average grade is: ' + avg );


function getGrade(subject){
  var grade =prompt('what is the grade for ' + subject);
  return grade;
}
