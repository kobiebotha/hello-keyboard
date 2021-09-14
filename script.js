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
    default:
      new Audio(`../audio/${key.toLowerCase()}.mp3`).play()
  }


  //random synth frequency
  const n = `${['C', 'E', 'G'][Math.round(Math.random() * 2)]}${Math.round(Math.random() * 2) + 2
    }`;
  synth.volume.value = -20;
  synth.triggerAttackRelease(n, "8n");
});