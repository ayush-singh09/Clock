function setTime()
{
    let time = new Date()
    var hours = `${time.getHours()}`
    if(hours>12)
    {
        document.querySelector(".hour").innerHTML = `${time.getHours()}` - 12
        var p ="PM"
        document.querySelector(".p").innerHTML = p;
        
    }
    else
    {
        document.querySelector(".hour").innerHTML = `${time.getHours()}`
        var p ="AM"      
        document.querySelector(".p").innerHTML = p;
    }
    document.querySelector(".minute").innerHTML = `${time.getMinutes()}`
    document.querySelector(".second").innerHTML = `${time.getSeconds()}`
    greetings();
}

setInterval(setTime,1000)

setTime();

function greetings()
{
    if(document.querySelector(".hour").innerHTML > 3 && document.querySelector(".hour").innerHTML<12)
    {
        document.querySelector(".greeting").innerHTML = "Good Morning";
        document.querySelector(".image").src = "morning.jpg";

    }

    else if(document.querySelector(".hour").innerHTML>11 && document.querySelector(".hour").innerHTML<5)
    {document.querySelector(".greeting").innerHTML = "Good After Noon";
    document.querySelector(".image").src = "afternoon.jpg";}

    else if(document.querySelector(".hour").innerHTML > 3 && document.querySelector(".hour").innerHTML < 9)
    {document.querySelector(".greeting").innerHTML = "Good Evening";
    document.querySelector(".image").src = "evening.jpg";}

    else 
    {document.querySelector(".greeting").innerHTML = "Good Night";
    document.querySelector(".image").src = "night.jpg";}

}

var flag = 0

var modeBtn = document.querySelector(".ld-mode");

modeBtn.addEventListener("click",function(){
    if(flag===0)
    {
        document.querySelector("#main").style.backgroundColor = "#F7FFE5";
        light();
        flag=1;
    }
    else{
        document.querySelector("#main").style.backgroundColor = "#0C134F";
        dark();
        flag=0;
    }
});

function light()
{
    function logoLight()
    {
        document.querySelector(".logo").style.borderColor = "#A0C49D";
        document.querySelector(".logo").style.color = "black";
    }

    function setTimeLight()
    {
        document.querySelector(".set-time").style.backgroundColor = "#E1ECC8";
        document.querySelector(".set-time").style.borderColor = "#A0C49D";
        document.querySelector(".set-time").style.color = "black";
        document.querySelector("#wake-up-time").style.backgroundColor = "#C4D7B2";
        document.querySelector("#lunch-time").style.backgroundColor = "#C4D7B2";
        document.querySelector("#nap-time").style.backgroundColor = "#C4D7B2";
        document.querySelector("#night-time").style.backgroundColor = "#C4D7B2";
        document.querySelector("#wake-up-time").style.borderColor = "#A0C49D";
        document.querySelector("#lunch-time").style.borderColor = "#A0C49D";
        document.querySelector("#nap-time").style.borderColor = "#A0C49D";
        document.querySelector("#night-time").style.borderColor = "#A0C49D";
        document.querySelector("#wake-up-time").style.color = "black";
        document.querySelector("#lunch-time").style.color = "black";
        document.querySelector("#nap-time").style.color = "black";
        document.querySelector("#night-time").style.color = "black";
    }

    function greetLight()
    {
        document.querySelector(".greet").style.borderColor = "#A0C49D";
        document.querySelector(".greet").style.backgroundColor = "#E1ECC8";
        document.querySelector(".greet").style.color = "black";
    }

    function setAlarmLight()
    {
        document.querySelector(".set-alarm").style.borderColor = "#A0C49D";
        document.querySelector(".set-alarm").style.backgroundColor = "#E1ECC8";
        document.querySelector(".btn").style.backgroundColor = "#C4D7B2";
        document.querySelector(".btn").style.color = "black";
    }

    function timePannelLight(){
        document.querySelector(".time-pannel").style.borderColor = "#A0C49D";
        document.querySelector(".time-pannel").style.backgroundColor = "#E1ECC8";
        document.querySelector(".time-pannel").style.color = "black";
    }

    function displayLight(){
        document.querySelector(".display").style.borderColor = "#A0C49D";
        document.querySelector(".display").style.backgroundColor = "#E1ECC8";
        document.querySelector(".display").style.color = "black";
    }

    function alarmsLight(){
        document.querySelector(".alarms").style.borderColor = "#A0C49D";
        document.querySelector(".alarms").style.backgroundColor = "#E1ECC8";
        document.querySelector(".alarms").style.color = "black";
    }

    alarmsLight();
    displayLight();
    setAlarmLight();
    setTimeLight();
    greetLight();
    logoLight();
    timePannelLight();
}

function dark() 
{
    function logoDark()
    {
        document.querySelector(".logo").style.borderColor = "#D4ADFC";
        document.querySelector(".logo").style.color = "white";
    }

    function setTimeDark()
    {
        document.querySelector(".set-time").style.borderColor = "#D4ADFC";
        document.querySelector(".set-time").style.color = "white";
        document.querySelector(".set-time").style.backgroundColor = "#5C469C";
        document.querySelector("#wake-up-time").style.backgroundColor = "#1D267D";
        document.querySelector("#lunch-time").style.backgroundColor = "#1D267D";
        document.querySelector("#nap-time").style.backgroundColor = "#1D267D";
        document.querySelector("#night-time").style.backgroundColor = "#1D267D";
        document.querySelector("#wake-up-time").style.borderColor = "#0C134F";
        document.querySelector("#lunch-time").style.borderColor = "#0C134F";
        document.querySelector("#nap-time").style.borderColor = "#0C134F";
        document.querySelector("#night-time").style.borderColor = "#0C134F";
        document.querySelector("#wake-up-time").style.color = "white";
        document.querySelector("#lunch-time").style.color = "white";
        document.querySelector("#nap-time").style.color = "white";
        document.querySelector("#night-time").style.color = "white";
    }

    function greetDark()
    {
        document.querySelector(".greet").style.borderColor = "#D4ADFC";
        document.querySelector(".greet").style.backgroundColor = "#5C469C";
        document.querySelector(".greet").style.color = "white";
    }

    function setAlarmDark()
    {
        document.querySelector(".set-alarm").style.borderColor = "#D4ADFC";
        document.querySelector(".set-alarm").style.backgroundColor = "#5C469C";
        document.querySelector(".btn").style.backgroundColor = "#1D267D";
        document.querySelector(".btn").style.color = "white";
    }    

    function timePannelDark(){
        document.querySelector(".time-pannel").style.borderColor = "#D4ADFC";
        document.querySelector(".time-pannel").style.backgroundColor = "#5C469C";
        document.querySelector(".time-pannel").style.color = "white";
    }

    function displayDark(){
        document.querySelector(".display").style.borderColor = "#D4ADFC";
        document.querySelector(".display").style.backgroundColor = "#5C469C";
        document.querySelector(".display").style.color = "white";
    }

    function alarmsLight(){
        document.querySelector(".alarms").style.borderColor = "#0C134F";
        document.querySelector(".alarms").style.backgroundColor = "#1D267D";
        document.querySelector(".alarms").style.color = "white";
    }

    alarmsLight();
    displayDark();
    timePannelDark();
    logoDark();
    setTimeDark();
    greetDark();
    setAlarmDark();
}

// document.querySelector(".wut").innerHTML = document.querySelector(".wut").innerHTML + " " + "happy";

var wakeUpTime = document.querySelector("#wake-up-time").value;
var lunchTime = document.querySelector("#lunch-time").value;
var napTime = document.querySelector("#nap-time").value;
var nightTime = document.querySelector("#night-time").value;



var f1=0;
var f2=0;
var f3=0;
var f4=0;

document.querySelector(".btn").addEventListener("click",function(){
    var wakeUpTime = document.querySelector("#wake-up-time").value;
    var lunchTime = document.querySelector("#lunch-time").value;
    var napTime = document.querySelector("#nap-time").value;
    var nightTime = document.querySelector("#night-time").value;


    if(wakeUpTime!== "none" && f1===0)
    {
        document.querySelector(".wut").innerHTML = document.querySelector(".wut").innerHTML + " - " + wakeUpTime +"AM - "  +(+wakeUpTime+1)+"AM";
        f1=1;
    }

    if(lunchTime!== "none" && f2===0)
    {
        document.querySelector(".lt").innerHTML = document.querySelector(".lt").innerHTML + " - " + lunchTime +"AM - "  +(+lunchTime+1)+"AM";
        f2=1;
    }

    if(napTime!== "none" && f3===0)
    {
        document.querySelector(".napt").innerHTML = document.querySelector(".napt").innerHTML + " - " + napTime +"AM - "  +(+napTime+1)+"AM";
        f3=1;
    }

    if(nightTime!== "none" && f4===0)
    {
        document.querySelector(".nt").innerHTML = document.querySelector(".nt").innerHTML + " - " + nightTime +"AM - "  +(+nightTime+1)+"AM";
        f4=1;
    }
})