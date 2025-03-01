let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box is clicked");
        if(turnO){
            box.innerText="O"
            box.style.color = "green"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const resetGame=()=>{
    turnO=true;
    enableboxes()
    msgContainer.classList.add("hide");
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkwinner=()=>{
    for (let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
reset.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
