//lose : box-shadow: 8px 8px 8px  rgba(209, 3, 3, 0.6);
//win : box-shadow: 8px 8px 8px  rgba(3, 209, 37, 0.6);
//draw : box-shadow: 8px 8px 8px rgba(192, 224, 6, 0.938)

const winText="YOU WON";
const loseText="YOU LOST";
const drawText="DRAW"
let gameContent=""
choices=["rock","paper","scissors"]
winNumber=0;
drawNumber=0;
loseNumber=0;


function play(src){
    gameContent="";
    AIChoice=getAIChoice();
    console.log(AIChoice);
    status=getStatus(src.id,AIChoice);
    showContent(src.id,AIChoice,status);
    showResultNumbers(status);
}

function getAIChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

showContent=(yourChoice,AIChoice,status)=>{
    let color;
    let text;
    if(status==1){
        color='rgba(3, 209, 37, 0.6)'
        text=winText
    }
    else if(status==2){
        color="blue"
        text=drawText
    }
    else{
        color = "rgba(209, 3, 3, 0.6)"
        text=loseText
    }
    yourChoiceContent=`<img src="assets/images/${yourChoice}.png" alt="${yourChoice}" width="200px" height="200px" style="box-shadow:8px 8px 8px ${color} ;" >`
    AIChoiceContent=`<img src="assets/images/${AIChoice}.png" alt="${AIChoice}" width="200px" height="200px" style="box-shadow:8px 8px 8px ${color} ;" >`
    resultTextContent=`<h1 style="display: inline; color : ${color};">${text}</h1>`
    gameContent+=`${yourChoiceContent} ${resultTextContent} ${AIChoiceContent}`
    document.getElementsByClassName("game")[0].innerHTML=gameContent
}

function getStatus(yourChoice,AIChoice){
    if(yourChoice==AIChoice){
        return 2;//draw
    }
    else if ((yourChoice=="rock"&&AIChoice=="paper")||(yourChoice=="paper"&&AIChoice=="scissors")||(yourChoice=="scissors"&&AIChoice=="rock")) {
        return 3;//lose
    }
    else{
        return 1;//win
    }
}

function showResultNumbers(status){
    if(status==1){
        winNumber++;
        document.getElementById("win-number").innerHTML=winNumber;
    }
    else if(status==2){
        drawNumber++;
        document.getElementById("draw-number").innerHTML=drawNumber
    }
    else{
        loseNumber++;
        document.getElementById("lose-number").innerHTML=loseNumber
    }
    
}