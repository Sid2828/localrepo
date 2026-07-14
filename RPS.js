
let humanScore=0,computerScore=0;
function getComputerChoice(){
    let num=Math.floor(Math.random()*3);
    if(num==1){
        return "rock";
    }else if(num==0){
        return "paper";
    }else{
        return "scissor";
    }
}




function getHumanChoice(choice){
    if(choice==null) {
        return "cancelled"
    }
    let formattedChoice=choice.toLowerCase();
    if(formattedChoice=="rock"){
        return "rock"
    }else if(formattedChoice=="paper"){
        return "paper";

    }else{
        return "scissor";
    }
}

function playRound(humanChoice,computerChoice){
        if(computerChoice==humanChoice){
            console.log("It's a tie");

        }else if((humanChoice=="rock" && computerChoice=="scissor") ||
                (humanChoice=="paper" && computerChoice=="rock" ) ||
                (humanChoice=="scissor" && computerChoice=="paper")){

                    humanScore+=1;
                    console.log("You won!"+humanChoice+" beats "+computerChoice);

        }else{
            computerScore+=1;
            console.log("You lose!"+computerChoice+" beats "+humanChoice);
        }
    }



function playGame(){
    

    let  choice=prompt("Your choice(paper,rock,scissor): ");

    let humanChoice=getHumanChoice(choice);
    console.log("Your choice: "+humanChoice);

    let computerChoice=getComputerChoice();
    console.log("Computers choice: "+computerChoice);

    
    playRound(humanChoice,computerChoice);

}

for(let i=0;i<5;i++){
    playGame();
}

if(humanScore>computerScore){
    console.log("You are the winner");
}else{
    console.log("Computer is the winnner")
}
