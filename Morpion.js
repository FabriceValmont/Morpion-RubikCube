// Variables globales
let board;
let currentPlayer = "X";
let gameOver = false;

// Sélectionne toutes les cellules du plateau de jeu
const cells = document.querySelectorAll(".cell");

// Sélectionne le message affiché à la fin du jeu
const message = document.getElementById("message");

// Initialise le plateau de jeu et ajoute les écouteurs d'événements
function init() {
	board = ["", "", "", "", "", "", "", "", ""];
	cells.forEach((cell, index) => {
		cell.innerText = "";
		cell.addEventListener("click", handleClick, { once: true });
	});
	message.innerText = "";
	gameOver = false;
}

// Gère le clic sur une cellule
function handleClick(event) {
	const cell = event.target;
	const index = Array.from(cells).indexOf(cell);
	cell.innerText = currentPlayer;
	board[index] = currentPlayer;
	checkGameStatus();
}

// Vérifie l'état du jeu à chaque tour
function checkGameStatus() {
	checkWin();
	checkDraw();
}

// Vérifie si un joueur a gagné
function checkWin() {
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
			message.innerText = `Le joueur
            // ${currentPlayer} a gagné !`;
            return;
            }
            });

            // Si aucun joueur n'a gagné, on change de joueur
if (currentPlayer === "X") {
	currentPlayer = "O";
} else {
	currentPlayer = "X";
}

}

// Vérifie si le match est nul
function checkDraw() {
if (!board.includes("")) {
gameOver = true;
message.innerText = "Match nul !";
}
}

// Réinitialise le jeu
document.getElementById("reset").addEventListener("click", init);

// Initialise le jeu au chargement de la page
init();