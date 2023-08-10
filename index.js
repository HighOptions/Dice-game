var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
var a=randomNumber1.toString();
var b="./images/dice"+a+".png";
document.querySelector(".img1").setAttribute("src",b);

var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);
var c=randomNumber2.toString();
var d="./images/dice"+c+".png";
document.querySelector(".img2").setAttribute("src",d);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent=("Player1 Wins");
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent=("Player2 Wins");
}
else{
    document.querySelector("h1").textContent=("draw");
}