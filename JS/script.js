function clock()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = "";
    if(hours < 12)
    {
        if(hours == '0')
        {
            time = "12" + " : " + minutes + " : " + seconds + " AM";
        }
        else
        {
            time = hours + " : " + minutes + " : " + seconds + " AM"; 
        }
    } 
    else
    {
        if(hours == '12')
        {
            time = "12" + " : " + minutes + " : " + seconds + " PM";
        }
        else
        {
            hours = hours - 12;
            time = hours + " : " + minutes + " : " + seconds + " PM"; 
        }
    }
    document.getElementById('time').innerHTML = time;
}
setInterval(clock, 1000);