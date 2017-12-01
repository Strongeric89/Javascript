function validateForm(){

  var name = document.form1.name.value;
  var password = document.form1.password.value;

  console.log(name,password);

  if(name.length == 0){
    document.form1.name.focus();
    return false;
  }
  if(password.length == 0){
    document.form1.password.focus();
    return false;
  }

  return true;
}
