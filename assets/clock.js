function colorClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ownRed = 100;
  var ownGreen = 0;
  var ownBlue = 0;
  
  if (hours <= 9) {
    hours = '0' + hours;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }

  var clockFace = hours + ':' + minutes + ':' + seconds;

document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = 'black';
 ownRed = 255/24*hours;
 ownGreen = 255/60*minutes;
 ownBlue= 255/60*seconds;
document.getElementById("clock").style.color="rgb("+ownRed+","+ownGreen+","+ownBlue+")";
 
  var hexColor = '#' + hours + minutes + seconds;

setTimeout(function() {
  colorClock();
}, 1000);

}

colorClock();
setTimeout(function(){  }, 5000);
var hexColor = '#' + hours + minutes + seconds;