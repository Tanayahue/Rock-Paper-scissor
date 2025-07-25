let userScore = 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");


const genCompchoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock,paper,scissors

}

const drawGame=()=> {
    console.log("game was draw");
     msg.innerText="Game was draw! play again";
     msg.style.backgroundColor=" #081b31";
}

const showWinner=(userWin,userchoice,compchoice)=>{

    if(userWin){
        userScore++
        userscorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win!your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++
        compscorePara.innerText=compscore;
        console.log("you lose")
         msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
         msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //comp choice;
     const compchoice = genCompchoice();
        console.log("compchoice=",compchoice);

        if(userchoice==compchoice){
            //draw game
            drawGame();
        } else{

            let userWin= true;
            if(userchoice=="rock"){
                userWin=compchoice==="paper"? false: true;
            } else if(userchoice==="paper"){
                userWin= compchoice==="scissors"? false:true;
            } else{
                userWin= compchoice=="rock"? false:true;
            }

            showWinner(userWin,userchoice,compchoice);
        }

}



//user choice

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });
});

