let btnBoxes = document.querySelectorAll(".btn-box"); 
let btnReset = document.querySelector("#btn-reset"); 
let newGameButton = document.querySelector("#btn-newgame");
let msgContainer = document.querySelector(".msg-contain");
let msg = document.querySelector("#winner");

let turnO = true; //playerX, playerO

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
console.log(`Game's JS file has been sucessfully loaded`);


let btnCounter = 0;
const ifDraw = () => {
    for (box of btnBoxes) {
        box.addEventListener("click", () => {
            btnCounter++;
            console.log(`button is clicked for ${btnCounter} time`);
            if (btnCounter === 9){
            showDraw();
             btnCounter = 0;
               
        }
        })
       
    }
}


btnBoxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
              box.innerText = "X";
              box.style.color= "black";
              turnO = true;
        }

    box.style.fontSize  = "8vmin";
    box.disabled = true;
    checkWinner();

    
  
    });
});


const disableBoxes = () => {
    for (let box of btnBoxes) {
        box.disabled= true;
    }

};

const enableBoxes = () => {
    for (let box of btnBoxes) {
        box.disabled= false;
        box.innerText = "";
    }

};

const showDraw = () => {
    msg.innerText =` OOPS A DRAW! `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const showWinner = (winner) => {
    msg.innerText =` Congratulation, winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();

    
};
    const checkWinner = () => {
        
        for(let pattern of winPatterns){
            // console.log(pattern[0], pattern[1], pattern[2]);
            // console.log(btnBoxes[pattern[0]].innerText,
            //             btnBoxes[pattern[1]].innerText, 
            //             btnBoxes[pattern[2]].innerText
            //         );

            let pos1Val = btnBoxes[pattern[0]].innerText;
            let pos2Val = btnBoxes[pattern[1]].innerText;
            let pos3Val = btnBoxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner");
                    showWinner(pos1Val);
                }
            }
        }

    }

    const resetGame = () => {
        turnO = true;
        enableBoxes();

         msgContainer.classList.add("hide");
      
    }

newGameButton.addEventListener("click", resetGame);
btnReset.addEventListener("click", resetGame);
