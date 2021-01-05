var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2") ;

document.getElementById("player1_name").innerHTML =  player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player_question").innerHTML = "Question turn :"+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn :"+player2_name;

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
var getWord;
function send(){
    getWord = "";
    getWord = document.getElementById("word").value;
    getWord = getWord.toLowerCase();
    console.log(getWord);

    char1 = getWord.charAt(1);
    len = getWord.length;
    char2 = getWord.charAt(Math.floor(len/2));
    char3 = getWord.charAt(len-1);
    console.log(char1+" "+char2+" "+char3);
    var word = getWord.replace(char1,"_");
    word = word.replace(char2,"_");
    word = word.replace(char3,"_");
    var Q = "<h4>Q."+word+"</h4>";
    var i = "<br>Answer : <input id = 'answer_input' type = 'text' placeholder = 'type your answer'>";
    var b = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    var row = Q + i + b;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";
}

var question_turn = "player1";
var Answer_turn = "player2";

function check(){
    var getAns = document.getElementById("answer_input").value;
    getAns.toLowerCase();
    if(getWord == getAns){
        if(Answer_turn == "player2"){
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }else{
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn : "+player2_name;
        Answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn : "+player1_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn : "+player1_name;
        Answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn : "+player2_name;
    }
    document.getElementById("output").innerHTML = " ";
}