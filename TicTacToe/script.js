let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnX = true; // true for player 'X', false for computer 'O'
let gameOver = false;
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];


const resetGame = () => {
    turnX = true;
    gameOver = false;
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Disable all boxes after game over
const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const checkWinner = () => {
  for (let pattern of winPatterns) { // Loop through each winning pattern
      if (
          boxes[pattern[0]].innerText &&
          boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
          boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
      ) {
          showWinner(boxes[pattern[0]].innerText); // Display the winner if all three match
          return true; 
      }
  }
  return [...boxes].every(box => box.innerText !== ""); // Checks for a draw if all boxes are filled
};


const showWinner = (winner) => {
    msg.innerText = winner ? ` Winner is ${winner}` : "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameOver = true;
};

// Computer's turn, chooses a random empty box
const computerMove = () => {
    if (!gameOver) {
        let emptyBoxes = Array.from(boxes).filter(box => !box.innerText);
        let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
        randomBox.innerText = "O";
        randomBox.disabled = true;
        if (checkWinner()) return;
        turnX = true; // Switches back to player
    }
};

// Player's turn and check for winner
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameOver && turnX) {
            box.innerText = "X";
            box.disabled = true;
            if (checkWinner()) return;
            turnX = false; // Switch to computer's turn
            setTimeout(computerMove, 500); // Computer moves after a short delay
        }
    });
});

resetBtn.addEventListener("click", resetGame);




  
  