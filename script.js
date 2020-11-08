
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

function startup() {
    var el = document.getElementById("canvas.2");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
  }
  
  document.addEventListener("DOMContentLoaded", startup);

  var ongoingTouches = [];

  function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementById("canvas.2");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
          
    for (var i = 0; i < touches.length; i++) {
      console.log("touchstart:" + i + "...");
      ongoingTouches.push(copyTouch(touches[i]));
      var color = colorForTouch(touches[i]);
      ctx.beginPath();
      ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
      ctx.fillStyle = color;
      ctx.fill();
      console.log("touchstart:" + i + ".");
    }
  }