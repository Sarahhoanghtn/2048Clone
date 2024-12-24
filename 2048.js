let score = 0;
let bestScore = 0;
let rows = 4;
let cols = 4;
let board;

window.onload = function() {
    setUp();
}

function setUp() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    setTwo();
    setTwo();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let tile = document.createElement("div");
            tile.id = `${i}-${j}`;
            let num = board[i][j];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
}


document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        setTwo();
        updateBoard();
    } else if (e.code == "ArrowRight") {
        slideRight();
        setTwo();
        updateBoard();
    } else if (e.code == "ArrowUp") {
        slideUp();
        setTwo();
        updateBoard();
    } else if (e.code == "ArrowDown") {
        slideDown();
        setTwo();
        updateBoard();
    }
    document.getElementById("score").innerHTML = score;
})

function slideLeft() {
    for (let i = 0; i < rows; i++) {
        let row = slide(board[i]);
        while (row.length < cols) {
            row.push(0);
        }
        board[i] = row;
    }
}

function slideRight() {
    for (let i = 0; i < rows; i++) {
        let row = slide(board[i]);
        while (row.length < cols) {
            row.unshift(0);
        }
        board[i] = row;
    }
}

function slideDown() {
    for (let j = 0; j < cols; j++) {
        let row = [board[0][j], board[1][j], board[2][j], board[3][j]];
        row = slide(row);
        while (row.length < cols) {
            row.unshift(0);
        }
        for (let r = 0; r < rows; r++){
            board[r][j] = row[r];
        }
    }
}

function slideUp() {
    for (let j = 0; j < cols; j++) {
        let row = [board[0][j], board[1][j], board[2][j], board[3][j]];
        row = slide(row);
        while (row.length < cols) {
            row.push(0);
        }
        for (let r = 0; r < rows; r++){
            board[r][j] = row[r];
        }
    }
}
        
function slide(row) {
    row = removeZeros(row);
    if (row.length > 1) {
        for (let j = row.length; j > 0; j--) {
            if (row[j] == row[j - 1]) {
                row[j] *= 2;
                row[j - 1] = 0;
                score += row[j];
            }
        }
        row = removeZeros(row);
    }
    return row;
}

function updateBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            updateTile(document.getElementById(`${i}-${j}`), board[i][j]);
        }
    }
}

function updateTile(tile, num) {
    tile.innerHTML = "";
    tile.classList.value = "tile";
    if (num > 0) {
        tile.innerHTML = num;
        if (num <= 4086) {
            tile.classList.add(`x${num}`);
        } else if (num <= 32768) {
            tile.classList.add("bigTile")
        } else {
            tile.classList.add("tile5x5")
        }
    } 
}

function isEmpty() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == 0) {
                return true;
            }
        }
    }
    return false;
}

function removeZeros(row) {
    return row.filter(num => num != 0);
}

function setTwo() {
    if (!isEmpty()) return;
    
    let done = false;
    while (!done) {
        let curRow = Math.floor(Math.random() * rows);
        let curCol = Math.floor(Math.random() * cols);
        if (board[curRow][curCol] == 0) {
            board[curRow][curCol] = 2;
            done = true;
        }
    }
}

function signal() {
    let damn = document.createElement("p");
    damn.innerHTML = "lol";
    document.getElementById("hihi").append(damn);
}

function signal(whatever) {
    let damn = document.createElement("p");
    damn.innerHTML = whatever;
    document.getElementById("hihi").append(damn);
}
