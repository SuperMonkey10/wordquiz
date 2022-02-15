player_1_name=localStorage.getItem("player1name");
player_2_name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player_1_name +": ";
document.getElementById("player2name").innerHTML=player_2_name +": ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("questionturn").innerHTML="Question turn-"+player_1_name;
document.getElementById("answerturn").innerHTML="Answer turn-"+player_2_name;

function send(){
get_Word=document.getElementById("word").value;
word=get_Word.toLowerCase();
console.log(word);
letter_1=word.charAt(1)
console.log(letter_1);
length_divide_2=Math.floor(word.length/2);
letter_2=word.charAt(length_divide_2);
console.log(letter_2);
length_1=word.length-1;
letter_3=word.charAt(length_1);
console.log(letter_3);
remove_1=word.replace(letter_1,"_");
remove_2=remove_1.replace(letter_2,"_");
remove_3=remove_2.replace(letter_3,"_");
question="<h4>Question."+remove_3+"</h4> <br>";
input="<input type='text' id='answer_Input'>";
check1="<br> <br> <button onclick='check()' class='btn btn-info'>check</button> ";
row=question+input+check1;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player_1";
answer_turn="player_2";
function check(){
get_answer=document.getElementById("answer_Input").value;
answer=get_answer.toLowerCase();
console.log("answer="+answer);
if (answer==word) {
    if (answer_turn=="player_1") {
        player1score=player1score+1;
        document.getElementsById("player1score").innerHTML=player1score;
        
    } else {
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
    
}
if (question_turn=="player_1") {
    question_turn="player_2";
    document.getElementById("questionturn").innerHTML="Question turn-"+player_2_name;
} else {
    question_turn="player_1";
    document.getElementById("questionturn").innerHTML="Question turn-"+player_1_name;
}
if (answer_turn=="player_1") {
    answer_turn="player_2";
    document.getElementById("answerturn").innerHTML="Answer turn-"+player_2_name;
} else {
    answer_turn="player_1";
    document.getElementById("answerturn").innerHTML="Answer turn-"+player_1_name;
}
document.getElementById("output").innerHTML="";
}