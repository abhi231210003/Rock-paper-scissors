let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const userMove=document.querySelector(".user-move");
const compMove=document.querySelector("compMove");


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"]
    //rock,paper scissors
    const randIdx=Math.floor(Math.random()*3);//multiply by n+1 to get number in range of 0 to n
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}

showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //generate computer choice->modular
    const compChoice=genComputerChoice();
    userMove.innerText=userChoice;
    compMove.innerText=compChoice;
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock ,scissors
            userWin=compChoice==="Scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})