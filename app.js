let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#imsg");
let conty = document.querySelector(".container");
let pain = document.querySelector(".camper");
let turny = document.querySelector(".yy")
let boxer = document.querySelector(".boxer");

let turnO = true;
let gameOver = false;
let moves = 0;

let turnDisplay = document.querySelector("#turn");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    gameOver = false;
    moves = 0;
    dise();
    msgcontainer.classList.add("hide");
    turnDisplay.innerText = "Turn: O";
    turnDisplay.classList.remove("hide"); 
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver || box.innerText !== "") return;
        box.innerText = turnO ? "O" : "X";
        box.disabled = true;
        moves++;

        checkwinner(); 
       
        if (!gameOver) {
            turnO = !turnO;
            turnDisplay.innerText = "Turn: " + (turnO ? "O" : "X");
        }
    });
});

const disa = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const dise = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        turnDisplay.classList.remove("hide");
        reset.classList.remove("hide");
        pain.classList.remove("hide")
        conty.classList.remove("hide")
        turny.classList.remove("hide")
        boxer.classList.remove("hide");
        
        
    }
};

const showinner = (winner) => {
    msg.innerText = `CONGRATULATION, WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    turnDisplay.classList.add("hide");
    reset.classList.add("hide");
    conty.classList.add("hide");
    pain.classList.add("hide");
    turny.classList.add("hide");
    boxer.classList.add("hide");


    gameOver = true;
    disa();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showinner(pos1val);
            return;
        }
    }

    if (!gameOver && moves === 9) {
        msg.innerText = "IT'S A DRAW!";
        msgcontainer.classList.remove("hide");
        turnDisplay.classList.add("hide");
        reset.classList.add("hide");
        conty.classList.add("hide");
        pain.classList.add("hide");
        turny.classList.add("hide");
        boxer.classList.add("hide");

        gameOver = true;
        disa();
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

