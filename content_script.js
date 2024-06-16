function setSpeed(speed)
{
  elem = document.getElementsByTagName("video")[0]
  if(elem)
  {
    elem.playbackRate=speed
  }
}

setSpeed(3)

function setHighSpeed()
{
  setSpeed(3)
}
function setMidSpeed()
{
  setSpeed(2)
}
function setLowSpeed()
{
  setSpeed(1)
}

if (window.attachEvent) {window.attachEvent('onload', setHighSpeed);}
else if (window.addEventListener) {window.addEventListener('load', setHighSpeed, false);}
else {document.addEventListener('load', setHighSpeed, false);}

document.addEventListener('keydown', function(event) {
  if (event.altKey)
  {
    if (event.key === '3') setHighSpeed()
    if (event.key === '2') setMidSpeed()
    if (event.key === '1') setLowSpeed()
  }
});