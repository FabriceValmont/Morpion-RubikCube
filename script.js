
let currentPlayer = "X";
let gameOver = false;
const message = document.getElementById("message");

let buttonRightUpBlock = false
let buttonRightMiddleBlock = false
let buttonRightDownBlock = false
let buttonLeftUpBlock = false
let buttonLeftMiddleBlock = false
let buttonLeftDownBlock = false
let buttonUpRightBlock = false
let buttonMiddleRightBlock = false
let buttonDownRightBlock = false
let buttonUpLeftBlock = false
let buttonMiddleLeftBlock = false
let buttonDownLeftBlock = false

const cells = document.querySelectorAll(".cell");
const cells1 = document.querySelectorAll(".cell1");
const cells2 = document.querySelectorAll(".cell2");
const cells3 = document.querySelectorAll(".cell3");
const cells4 = document.querySelectorAll(".cell4");
const cells5 = document.querySelectorAll(".cell5");

const init = () => {
	board = ["","","","","","","","",""];
  board1 = ["","","","","","","","",""];
  board2 = ["","","","","","","","",""];
  board3 = ["","","","","","","","",""];
  board4 = ["","","","","","","","",""];
  board5 = ["","","","","","","","",""];
	// cells.forEach((cell, index) => {
	// 	cell.innerText = "";
	// });
}

const handleClick = (event) => {
  if (gameOver == false){
    const cell = event.target;
    console.log(cell)
    

    const index = Array.from(cells).indexOf(cell);
    console.log(Array.from(cells))
    console.log(index)

    if (cell.innerText == ""){
      cell.innerText = currentPlayer;
      board[index] = currentPlayer;

      buttonRightUpBlock = false
      buttonRightMiddleBlock = false
      buttonRightDownBlock = false
      buttonLeftUpBlock = false
      buttonLeftMiddleBlock = false
      buttonLeftDownBlock = false
      buttonUpRightBlock = false
      buttonMiddleRightBlock = false
      buttonDownRightBlock = false
      buttonUpLeftBlock = false
      buttonMiddleLeftBlock = false
      buttonDownLeftBlock = false

      checkWin()
      
      if (gameOver == false){
      changePlayer()
      }
    }
  }
}

//Permet de cliquer sur une cellule du tableau
cells.forEach((cell, index) => {

  cell.addEventListener("click", handleClick);

});

const changePlayer = () => {

  if (currentPlayer === "X") {
    currentPlayer = "O";
    
  } else {
    currentPlayer = "X";
      
  }
}

const changeLineRight = (verifRightMove) => {

    verifRightMove.forEach((position) => {
      const [a, b, c] = position;
      let memoryBoardEnd = board2[a]
      let memoryBoardEnd1 = board2[b]
      let memoryBoardEnd2 = board2[c]
      let memoryGameEnd = Array.from(cells2)[a].innerText
      let memoryGameEnd1 = Array.from(cells2)[b].innerText
      let memoryGameEnd2 = Array.from(cells2)[c].innerText

      board2[a] = board3[a]
      board2[b] = board3[b]
      board2[c] = board3[c]
      Array.from(cells2)[a].innerText = Array.from(cells3)[a].innerText
      Array.from(cells2)[b].innerText = Array.from(cells3)[b].innerText
      Array.from(cells2)[c].innerText = Array.from(cells3)[c].innerText

      board3[a] = board4[a]
      board3[b] = board4[b]
      board3[c] = board4[c]
      Array.from(cells3)[a].innerText = Array.from(cells4)[a].innerText
      Array.from(cells3)[b].innerText = Array.from(cells4)[b].innerText
      Array.from(cells3)[c].innerText = Array.from(cells4)[c].innerText

      board4[a] = board[a]
      board4[b] = board[b]
      board4[c] = board[c]
      Array.from(cells4)[a].innerText = Array.from(cells)[a].innerText
      Array.from(cells4)[b].innerText = Array.from(cells)[b].innerText
      Array.from(cells4)[c].innerText = Array.from(cells)[c].innerText

      board[a] = memoryBoardEnd
      board[b] = memoryBoardEnd1
      board[c] = memoryBoardEnd2
      Array.from(cells)[a].innerText = memoryGameEnd 
      Array.from(cells)[b].innerText = memoryGameEnd1
      Array.from(cells)[c].innerText = memoryGameEnd2

      changePlayer()
  })
}

const changeLineLeft = (verifLeftMove) => {

  verifLeftMove.forEach((position) => {
    const [a, b, c] = position;
    let memoryBoardEnd = board4[a]
    let memoryBoardEnd1 = board4[b]
    let memoryBoardEnd2 = board4[c]
    let memoryGameEnd = Array.from(cells4)[a].innerText
    let memoryGameEnd1 = Array.from(cells4)[b].innerText
    let memoryGameEnd2 = Array.from(cells4)[c].innerText

    board4[a] = board3[a]
    board4[b] = board3[b]
    board4[c] = board3[c]
    Array.from(cells4)[a].innerText = Array.from(cells3)[a].innerText
    Array.from(cells4)[b].innerText = Array.from(cells3)[b].innerText
    Array.from(cells4)[c].innerText = Array.from(cells3)[c].innerText

    board3[a] = board2[a]
    board3[b] = board2[b]
    board3[c] = board2[c]
    Array.from(cells3)[a].innerText = Array.from(cells2)[a].innerText
    Array.from(cells3)[b].innerText = Array.from(cells2)[b].innerText
    Array.from(cells3)[c].innerText = Array.from(cells2)[c].innerText

    board2[a] = board[a]
    board2[b] = board[b]
    board2[c] = board[c]
    Array.from(cells2)[a].innerText = Array.from(cells)[a].innerText
    Array.from(cells2)[b].innerText = Array.from(cells)[b].innerText
    Array.from(cells2)[c].innerText = Array.from(cells)[c].innerText

    board[a] = memoryBoardEnd
    board[b] = memoryBoardEnd1
    board[c] = memoryBoardEnd2
    Array.from(cells)[a].innerText = memoryGameEnd 
    Array.from(cells)[b].innerText = memoryGameEnd1
    Array.from(cells)[c].innerText = memoryGameEnd2

    changePlayer()
})
}

const changeLineUp = (verifUpMove) => {

  verifUpMove.forEach((position) => {
    const [a, b, c] = position;
    let memoryBoardEnd = board5[a]
    let memoryBoardEnd1 = board5[b]
    let memoryBoardEnd2 = board5[c]
    let memoryGameEnd = Array.from(cells5)[a].innerText
    let memoryGameEnd1 = Array.from(cells5)[b].innerText
    let memoryGameEnd2 = Array.from(cells5)[c].innerText
  
    board5[a] = board3[a]
    board5[b] = board3[b]
    board5[c] = board3[c]
    Array.from(cells5)[a].innerText = Array.from(cells3)[a].innerText
    Array.from(cells5)[b].innerText = Array.from(cells3)[b].innerText
    Array.from(cells5)[c].innerText = Array.from(cells3)[c].innerText
  
    board3[a] = board1[a]
    board3[b] = board1[b]
    board3[c] = board1[c]
    Array.from(cells3)[a].innerText = Array.from(cells1)[a].innerText
    Array.from(cells3)[b].innerText = Array.from(cells1)[b].innerText
    Array.from(cells3)[c].innerText = Array.from(cells1)[c].innerText
  
    board1[a] = board[a]
    board1[b] = board[b]
    board1[c] = board[c]
    Array.from(cells1)[a].innerText = Array.from(cells)[a].innerText
    Array.from(cells1)[b].innerText = Array.from(cells)[b].innerText
    Array.from(cells1)[c].innerText = Array.from(cells)[c].innerText
  
    board[a] = memoryBoardEnd
    board[b] = memoryBoardEnd1
    board[c] = memoryBoardEnd2
    Array.from(cells)[a].innerText = memoryGameEnd 
    Array.from(cells)[b].innerText = memoryGameEnd1
    Array.from(cells)[c].innerText = memoryGameEnd2
    
    changePlayer()
  })
}

const changeLineDown = (verifDownMove) => {

  verifDownMove.forEach((position) => {
  const [a, b, c] = position;
  let memoryBoardEnd = board1[a]
  let memoryBoardEnd1 = board1[b]
  let memoryBoardEnd2 = board1[c]
  let memoryGameEnd = Array.from(cells1)[a].innerText
  let memoryGameEnd1 = Array.from(cells1)[b].innerText
  let memoryGameEnd2 = Array.from(cells1)[c].innerText

  board1[a] = board3[a]
  board1[b] = board3[b]
  board1[c] = board3[c]
  Array.from(cells1)[a].innerText = Array.from(cells3)[a].innerText
  Array.from(cells1)[b].innerText = Array.from(cells3)[b].innerText
  Array.from(cells1)[c].innerText = Array.from(cells3)[c].innerText

  board3[a] = board5[a]
  board3[b] = board5[b]
  board3[c] = board5[c]
  Array.from(cells3)[a].innerText = Array.from(cells5)[a].innerText
  Array.from(cells3)[b].innerText = Array.from(cells5)[b].innerText
  Array.from(cells3)[c].innerText = Array.from(cells5)[c].innerText

  board5[a] = board[a]
  board5[b] = board[b]
  board5[c] = board[c]
  Array.from(cells5)[a].innerText = Array.from(cells)[a].innerText
  Array.from(cells5)[b].innerText = Array.from(cells)[b].innerText
  Array.from(cells5)[c].innerText = Array.from(cells)[c].innerText

  board[a] = memoryBoardEnd
  board[b] = memoryBoardEnd1
  board[c] = memoryBoardEnd2
  Array.from(cells)[a].innerText = memoryGameEnd 
  Array.from(cells)[b].innerText = memoryGameEnd1
  Array.from(cells)[c].innerText = memoryGameEnd2

  changePlayer()
})
}

const rightUp = () => {
  const verifRightMove = [[0,1,2]]

  if(buttonRightUpBlock == false){
    changeLineRight(verifRightMove)

    buttonRightMiddleBlock = false
    buttonRightDownBlock = false
    buttonLeftUpBlock = true
    buttonLeftMiddleBlock = false
    buttonLeftDownBlock = false
    buttonUpRightBlock = false
    buttonMiddleRightBlock = false
    buttonDownRightBlock = false
    buttonUpLeftBlock = false
    buttonMiddleLeftBlock = false
    buttonDownLeftBlock = false
  }
    
}
  
const rightMiddle = () => {
  const verifRightMove = [[3,4,5]]

  if(buttonRightMiddleBlock == false){
  changeLineRight(verifRightMove)

  buttonRightUpBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = true
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}

const rightDown = () => {
  const verifRightMove = [[6,7,8]]

  if(buttonRightDownBlock == false){
  changeLineRight(verifRightMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = true
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}
  document.getElementById("buttonRightUp").addEventListener("click", rightUp);
  document.getElementById("buttonRightMiddle").addEventListener("click", rightMiddle);
  document.getElementById("buttonRightDown").addEventListener("click", rightDown);

const leftUp = () => {
  const verifLeftMove = [[0,1,2]]

  if(buttonLeftUpBlock == false){
  changeLineLeft(verifLeftMove)

  buttonRightUpBlock = true
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}
  
const leftMiddle = () => {
  const verifLeftMove = [[3,4,5]]

  if(buttonLeftMiddleBlock == false){
  changeLineLeft(verifLeftMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = true
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}

const leftDown = () => {
  const verifLeftMove = [[6,7,8]]

  if(buttonLeftUpBlock == false){
  changeLineLeft(verifLeftMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = true
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}

document.getElementById("buttonLeftUp").addEventListener("click", leftUp);
document.getElementById("buttonLeftMiddle").addEventListener("click", leftMiddle);
document.getElementById("buttonLeftDown").addEventListener("click", leftDown);

const upLeft = () => {
  const verifUpMove = [[0,3,6]]

  if(buttonUpRightBlock == false){
  changeLineUp(verifUpMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = true
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
}

const upMiddle = () => {
  const verifUpMove = [[1,4,7]]

  if(buttonMiddleRightBlock == false){
  changeLineUp(verifUpMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = true
  buttonDownLeftBlock = false
  }
}

const upRight = () => {
  const verifUpMove = [[2,5,8]]

  if(buttonDownRightBlock == false){
  changeLineUp(verifUpMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = true
  }
}

document.getElementById("buttonUpLeft").addEventListener("click", upLeft);
document.getElementById("buttonUpMiddle").addEventListener("click", upMiddle);
document.getElementById("buttonUpRight").addEventListener("click", upRight);

const downLeft = () => {
  const verifDownMove = [[0,3,6]]

  if(buttonUpLeftBlock == false){
  changeLineDown(verifDownMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = true
  buttonMiddleRightBlock = false
  buttonDownRightBlock = false
  buttonMiddleLeftBlock = false
  buttonDownLeftBlock = false
  }
} 
    
const downMiddle = () => {
  const verifDownMove = [[1,4,7]]

  if(buttonMiddleLeftBlock == false){
  changeLineDown(verifDownMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = true
  buttonDownRightBlock = false
  buttonUpLeftBlock = false
  buttonDownLeftBlock = false
  }
}

const downRight = () => {
  const verifDownMove = [[2,5,8]]

  if(buttonDownLeftBlock == false){
  changeLineDown(verifDownMove)

  buttonRightUpBlock = false
  buttonRightMiddleBlock = false
  buttonRightDownBlock = false
  buttonLeftUpBlock = false
  buttonLeftMiddleBlock = false
  buttonLeftDownBlock = false
  buttonUpRightBlock = false
  buttonMiddleRightBlock = false
  buttonDownRightBlock = true
  buttonUpLeftBlock = false
  buttonMiddleLeftBlock = false
  }
}

document.getElementById("buttonDownLeft").addEventListener("click", downLeft);
document.getElementById("buttonDownMiddle").addEventListener("click", downMiddle);
document.getElementById("buttonDownRight").addEventListener("click", downRight);

// Vérifie si un joueur a gagné
const checkWin = () => {
	const winningPositions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	winningPositions.forEach((position) => {
		const [a, b, c] = position;
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			gameOver = true;
			message.innerText = `Le joueur ${currentPlayer} a gagné !`;
      
        buttonRightUpBlock = true
        buttonRightMiddleBlock = true
        buttonRightDownBlock = true
        buttonLeftUpBlock = true
        buttonLeftMiddleBlock = true
        buttonLeftDownBlock = true
        buttonUpRightBlock = true
        buttonMiddleRightBlock = true
        buttonDownRightBlock = true
        buttonUpLeftBlock = true
        buttonMiddleLeftBlock = true
        buttonDownLeftBlock = true

          return;
    }
  });
}

init()