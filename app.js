let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let winner=document.querySelector(".winner");
let p=document.querySelector("#msg");

// let player1=prompt("Enter player 1");
// let player2=prompt("Enter player 2");

let count=0;

let turn=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    count++;
    console.log(count);
    if(turn===true){
        box.innerText='X';
        
        box.classList.add("red");
        turn=false;
    }
    else{
        box.innerText='O';
        
        box.classList.add("green");
        turn=true;
    }
    box.disabled=true;
    
       

    let check=checkWinner();
    if(count===9 && !check){
        noWinner();
    }
       
  })
})

const checkWinner=()=>{
    
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val  && pos2Val===pos3Val){
                
                console.log("winner",pos1Val);
                // winner.innerText=pos1Val;

                showWinner(pos1Val);
                return true;
               }  
              
         }

    }
}

const showWinner=(win)=>{
    // if(win=='X'){
    p.innerText=`Congratulation, Winner is ${win}`;
    winner.classList.remove('hide');
    disbaledBox();
    // }
    // else{
    //     p.innerText=`Congratulation, Winner is ${player2}`;
    // winner.classList.remove('hide');
    // disbaledBox();

    // }

}
const reStart=()=>{
    // player1=prompt("Enter player 1");
    // player2=prompt("Enter player 2");

    turn=true;
   
    winner.classList.add("hide");
    enabledBox();
    
}

const disbaledBox =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enabledBox =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const noWinner=()=>{
    p.innerText=`ohh no.. No result!!`;
    winner.classList.remove('hide');
    disbaledBox();
}                                                                     
newGame.addEventListener("click",reStart);
resetBtn.addEventListener("click",reStart);

