var trackLayout;
var rabbit, tortoise;
var endDistance = 85;
var startRabbit=15;
var startTortoise = 15;
var momentR;
var momentT;
window.addEventListener( "load", start, false );



function func(){
  setInterval(setPath,1000);
}
function start()
{
  var button=document.getElementById("startButton");
  button.addEventListener("click", func, false );
}

function setPath() {
  rabbit = document.getElementById("rabbit");
  tortoise = document.getElementById("tortoise");

  tortoise.style.marginLeft = MoveTortoise() + "%";
  rabbit.style.marginLeft = MoveRabbit()  + "%";
}



function MoveTortoise() {
  
  var valueT=Math.floor(Math.random()*10);

    if (valueT >=0 && valueT<=4){//3
      momentT = startTortoise+3//18
    }
    else if (valueT>=5 && valueT <=6){
      if((startTortoise-6-15)>=0){
        momentT = startTortoise-6;
      }else{
        momentT=startTortoise;
      }
    }
    else {
      momentT = startTortoise+1;
    }

    startTortoise= momentT;

    if(startTortoise>=85){
      alert("Tortoise won the race!");
      momentT=85;
      window.location.reload();
    }

    if (momentT >15 && momentT === momentR){
      alert("OUCH")
    }

    if (momentT === endDistance && momentR=== endDistance){
      alert ("Tied game")
    }
    console.log (momentT)

    return momentT;
}

function MoveRabbit() {
  
  var valueR=Math.floor(Math.random()*10);

  if(valueR>=0 && valueR<=1){
    momentR=startRabbit;
  }
  else if(valueR>=2&&valueR<=3){
    momentR=startRabbit+9;
  }
  else if(valueR===4){
    if((startRabbit-12-15)>=0){
      momentR=startRabbit-12;
    }else{
      momentR=startRabbit;
    }
  }
  else if(valueR>=5 && valueR<=7){
    momentR=startRabbit+1;
  }
  else{
    if((startRabbit-2-15)>=0){
      momentR=startRabbit-2;
    }else{
      momentR=startRabbit
    }
  }
  startRabbit=momentR;
  console.log(momentR);

  if(startRabbit>=85){
    alert("Rabbit won the race!");
    momentR=85;
    window.location.reload();
  }
  return momentR;
    
}
