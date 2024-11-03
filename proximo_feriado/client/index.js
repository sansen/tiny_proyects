function init()
{
    let htmlxr = JSON.parse(document.getElementById("htmlx-result").innerText);
    document.getElementById("proximo-feriado").innerText = "Proximo Fecha: "
	+htmlxr.data.descripcion;
    let pd = parseDate(htmlxr.data.fecha);

    setInterval(function() {
	computeCountdown(pd)
    }, 1000)
}

function drawCountdown(days, hours, minutes, seconds)
{
    if (isToday(days))
    {
	zeroed('days')
	zeroed('hours')
	zeroed('minutes')
	zeroed('seconds')
    }
    else
    {
	enableControl(days, 'days')
	enableControl(hours, 'hours')
	enableControl(minutes, 'minutes')
	enableControl(seconds, 'seconds')
    }
}

function computeCountdown(pd)
{
    const today = Date.now();
    const millis = pd - today;

    const days = millis / 24 / 60 / 60 / 1000;
    const dayMillis = millis % (24 * 60 *  60 * 1000);

    const hrs = (dayMillis) / 60 / 60 / 1000 ;
    let decimal = (hrs - Math.floor(hrs)) * 60 * 1000

    const mins = decimal / 1000 ;
    decimal = (mins - Math.floor(mins)) 
    
    const secs = decimal * 60;

    drawCountdown(days, hrs, mins, secs)
}
    

function parseDate(dateString)
{
    return new Date(dateString);
}

function enableControl(param, paramName)
{
    const vEven = document.getElementById(paramName+"-even");
    const vOdd = document.getElementById(paramName+"-odd");
    vOdd.classList.remove('today')

    if (Math.floor(param) % 2== 0)
    {
	vEven.innerText = (Math.floor(param) + "").padStart(2, 0);
	vEven.classList.add('active')
	vOdd.classList.remove('active')
    }
    else
    {
	vOdd.innerText = (Math.floor(param) + "").padStart(2, 0);
	vOdd.classList.add('active')
	vEven.classList.remove('active')
    }
}

function zeroed(paramName)
{
    let vEven = document.getElementById(paramName+"even");
    let vOdd = document.getElementById(paramNAme+"-odd");

    vOdd.innerText = "00";
    vOdd.classList.add('today')
    vOdd.classList.add('active')
    vEven.classList.remove('active')
}

function isToday(days)
{
    return Math.floor(Math.abs(days)) == 0
}


window.onload = function() {
    init();
}

