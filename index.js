var player1_number= Math.round(Math.random()*5 +1);
var player2_number= Math.round(Math.random()*5 +1);
player1_image= "images/dice"+player1_number+".png";
player2_image= "images/dice"+player2_number+".png";
document.getElementsByClassName("img1")[0].src= player1_image;
document.getElementsByClassName("img2")[0].src= player2_image;

var header_string;
if(player1_number > player2_number){
    header_string= "🚩Player 1 Wins!";
}
else if(player1_number == player2_number){
    header_string= "Draw!";
}
else{
    header_string= "Player 2 Wins!🚩";
}

document.querySelector("h1").textContent= header_string;