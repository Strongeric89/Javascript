var infoContainer = document.getElementById('info-area');
var counter = 1;
var url = "https://swapi.co/api/people/?page=";
function getData() {
  var request = new XMLHttpRequest();

  request.open("GET", url+counter, true);
  //request.open("GET","data/animals.json",true);


  var d;
  request.onload = function() {
    //debug to console
    var data = JSON.parse(request.responseText);
    console.log(data);

    if(data.next != null){
        addHtml(data);

    }else{
      var btn = document.getElementById('btn1');
      btn.style.display = "none";
    }



  };
  request.send();
  counter++;





}

function addHtml(data){



  var info = "";



  for(var i=0;i< 9;i++)
  {
        info += "<p>"+data.results[i].name+"</p>";
  }





  infoContainer.insertAdjacentHTML('beforeend',info);

}
