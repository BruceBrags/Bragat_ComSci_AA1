var num1;
var num2;
var num3;
var greatest;
var alph = "ABCDEFGHIJKLMNOPQRSTU"
var alphNum;
var time
var mTime;
var hTime;
function ranNum(){
    var num1 = (parseInt(Math.random()*21));
    var num2 = (parseInt(Math.random()*21));
    var num3 = (parseInt(Math.random()*21));
    document.getElementById('rplc1').innerHTML=num1
    document.getElementById('rplc2').innerHTML=num2
    document.getElementById('rplc3').innerHTML=num3
    greatest = Math.max(num1, num2, num3);
    alphNum = alph[num1]
    time = num2*num3;
    mTime = time%60;
    hTime = Math.trunc(time/60);
    document.getElementById('story').innerHTML="<p>They were fighting against an squad of "+greatest+
    ".</p><p>With their backs turned against the wall, just waiting for the helicopter to arrive, they decided to use plan "+alphNum+
    ".</p><p>Though, they were unsure if they could hold out for "+hTime+" hours and "+mTime+" minutes ("+time+"mins).</p>";
}
