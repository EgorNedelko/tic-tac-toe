class TicTacToe {
   playersSymbols = ['x', 'o']
   winningCombos = [
       [0, 1, 2], 
       [3, 4, 5], 
       [6, 7, 8], 
       [0, 3, 6], 
       [1, 4, 7], 
       [2, 5, 8], 
       [2, 4, 6], 
       [0, 4, 8]  
   ]

   constructor() {
       this.board = Array(3).fill(null).map(el => Array(3).fill(null))
       this.currPlayer = this.playersSymbols[0]
   }

   //should return `x` or `o`
   getCurrentPlayerSymbol() {
       return this.currPlayer
   }

   //should properly update class state (change current player, update marks storage etc.)
   nextTurn(row, col) {
       if (this.board[row][col] === null) {
           this.board[row][col] = this.currPlayer
           //if a move's been made, swap players
           this.currPlayer = this.playersSymbols.reverse()[0]
       }
   }

   //should return true if game is finished (e.g. there is a winner or it is a draw)
   isFinished() {
      //  return !!this.getWinner() || this.noMoreTurns()
       return this.isDraw() || this.getWinner() !== null
   }

   //should return winner symbol (`x` or `o`) or null if there is no winner yet
   getWinner() {
       const fields = this.board.join(',').split(',')
       let winner = null

       this.winningCombos.forEach(combo => {
           if (combo.every(index => fields[index] === 'x')) {
               winner = 'x'
           } else if (combo.every(index => fields[index] === 'o')) {
               winner = 'o'
           }
       })

       return winner
   }

   //should return true if there is no more fields to place a `x` or `o`
   noMoreTurns() {
       for (let i = 0; i < this.board.length; i++) {
           for (let j = 0; j < this.board[i].length; j++) {
               if (this.board[i][j] === null) return false
           }
       }
       return true
   }

   //should return true if there is no more turns and no winner
   isDraw() {
       return this.noMoreTurns() && !this.getWinner()
   }

   //should return `matrix[row][col]` value (if any) or `null`
   getFieldValue(row, col) {
       return this.board[row][col]
   }
}

module.exports = TicTacToe;
