 
function clock()
{
let d= new Date();
let a=d.getHours();
let b=d.getMinutes();
let c=d.getSeconds();
let k="AM";

if(a==0)
{
a=12;
}
if(a>12)
{
    a=a-12;
    k="PM";
}

a=a<10?`0${a}`:a;
b=b<10?`0${b}`:b;
c=c<10?`0${c}`:c;
let ans=a+" : "+b+" : "+c+" : "+k;

setInterval(clock, 10);
document.getElementById("tc").innerText = ans;
}

clock();


