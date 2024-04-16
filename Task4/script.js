document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const resetBtn = document.getElementById('resetBtn');
    const ROWS = 6;
    const COLS = 7;
    let currentPlayer = 'red';
    let boardArray = [];
  
    function createBoard() {
      for (let i = 0; i < ROWS; i++) {
        boardArray[i] = [];
        for (let j = 0; j < COLS; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.row = i;
          cell.dataset.col = j;
          board.appendChild(cell);
          boardArray[i][j] = null;
        }
      }
    }
  
    function checkWin(row, col) {
      const directions = [
        { row: 1, col: 0 },
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: -1 }
      ];
  
      for (let dir of directions) {
        let count = 1;
        for (let step of [-1, 1]) {
          let r = row + step * dir.row;
          let c = col + step * dir.col;
          while (r >= 0 && r < ROWS && c >= 0 && c < COLS && boardArray[r][c] === currentPlayer) {
            count++;
            r += step * dir.row;
            c += step * dir.col;
          }
        }
        if (count >= 4) return true;
      }
      return false;
    }
  
    function handleClick(e) {
      const col = parseInt(e.target.dataset.col);
      for (let row = ROWS - 1; row >= 0; row--) {
        if (boardArray[row][col] === null) {
          boardArray[row][col] = currentPlayer;
          const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
          cell.style.backgroundColor = currentPlayer;
          if (checkWin(row, col)) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
            return;
          }
          currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
          break;
        }
      }
    }
  
    function resetGame() {
      board.innerHTML = '';
      currentPlayer = 'red';
      createBoard();
    }
  
    createBoard();
    board.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', resetGame);
  });
  