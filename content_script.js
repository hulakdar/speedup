function setSpeed(speed)
{
  elements = document.getElementsByTagName("video")
  for (let elem of elements)
  {
    elem.playbackRate=speed
  }
}

setSpeed(3)

function setHighSpeed()
{
  setSpeed(3)
}

if (window.attachEvent) {window.attachEvent('onload', setHighSpeed);}
else if (window.addEventListener) {window.addEventListener('load', setHighSpeed, false);}
else {document.addEventListener('load', setHighSpeed, false);}

document.addEventListener('keydown', function(event) {
  if (event.altKey)
  {
    if (event.key === '4') setSpeed(3.5)
    if (event.key === '3') setSpeed(2.5)
    if (event.key === '2') setSpeed(2)
    if (event.key === '1') setSpeed(1)
  }
});