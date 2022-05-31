function setSpeed(speed)
{
    elem = document.getElementsByTagName("video")[0]
    if(elem)
    {
        elem.playbackRate=speed
    }
}

setSpeed(2.5)