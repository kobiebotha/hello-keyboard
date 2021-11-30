var synth = new Tone.Synth().toDestination();

function col() {
  var hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
  ];
  var newColor = '#';

  for (var i = 0; i < 6; i++) {
    var x = Math.round(Math.random() * 14);
    var y = hexValues[x];
    newColor += y;
  }
  return newColor;
}

document.addEventListener('keydown', (event) => {
  document.body.style.backgroundColor = col();

  let key = event.key;
  document.querySelector("#keyboard-out").innerHTML = key;

  //FIXME: hack. doesn't work with some characters

  switch (key) {
    case '`':
      new Audio(`../audio/backtick.mp3`).play();
      break;
    case ' ':
      new Audio('../audio/spacebar.mp3').play();
      break;
    case '.':
      new Audio('../audio/period.mp3').play();
      break;
    case '/':
      new Audio('../audio/fslash.mp3').play();
      break;
    case '\\':
      new Audio('../audio/bslash.mp3').play();
      break;
    case '*':
      new Audio('../audio/asterisk.mp3').play();
      break;
    case 'ArrowDown':
      new Audio('../audio/DownArrow.mp3').play();
      break;
    case 'ArrowUp':
      new Audio('../audio/UpArrow.mp3').play();
      break;
    case 'ArrowLeft':
      new Audio('../audio/LeftArrow.mp3').play();
      break;
    case 'ArrowRight':
      new Audio('../audio/RightArrow.mp3').play();
      break;
    case 'Help':
      new Audio('../audio/Help.mp3').play();
      break;
    default:
      new Audio(`../audio/${key.toLowerCase()}.mp3`).play()
  }


  //random synth frequency
  const n = `${['C', 'E', 'G'][Math.round(Math.random() * 2)]}${Math.round(Math.random() * 2) + 2
    }`;
  synth.volume.value = -20;
  synth.triggerAttackRelease(n, "8n");
});


$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 15;
      
      var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
      var sizeInt = getRandomInt(10, 30);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('#keyboard-out').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 1);
});

