// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let msgContainer = document.querySelector(".msg-container");
// let newGameBtn = document.querySelector("#new-btn");
// let msg = document.querySelector("#msg");

// let turn0 = true;

// const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// const resetGame = () => {
//     turn0 = true;
//     enableboxes();
//     msgContainer.classList.add("hide");
// }
// // const resetBtn = () => {
// //     turn0 = true;
// //     enableboxes();
// //     msgContainer.classList.add("hide");
// // }


// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if(turn0){
//             box.innerText = "0";
//             turn0 = false;
//         }else{
//             box.innerText = "X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const showWinner=(winner) => {
//     msg.innerText = ` Congratulations Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableboxes();
// }
// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if(pos1val != "" && pos2val != "" && pos3val != ""){
//             if(pos1val === pos2val && pos2val === pos3val){
//                 showWinner(pos1val);
//             }
//         }
//     }
// };
// const disableboxes = () => {
//     for(let box of boxes){
//         box.disabled = true;
//     }
// }
// const enableboxes = () => {
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// }
// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Reset the game state
const resetGame = () => {
    turn0 = true;
    enableboxes(); // Enable and clear all boxes
    msgContainer.classList.add("hide"); // Hide the winner message
};

// Add click listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; // Disable the clicked box
        checkWinner(); // Check for a winner
    });
});

// Display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes(); // Disable all boxes
};

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
};

// Disable all boxes
const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable and clear all boxes
const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Attach event listeners to buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
