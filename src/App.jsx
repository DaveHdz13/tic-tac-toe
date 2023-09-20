import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

// Setting each square for the turns
const Square = ({ children, isSelected, updateBoard, i }) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  const handleClick = () => {
    updateBoard(i)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  // Board of 9 empty squares
  const [board, setBoard] = useState(Array(9).fill(null))
  // Set the next turn each time the board updates
  const [turn, setTurn] = useState(TURNS.x)

  const updateBoard = (i) => {
    // Don't update this position
    if(board[i]) return

    // Updates the board
    const newBoard = [...board]
    newBoard[i] = turn
    setBoard(newBoard)

    // Switches the turn
    let newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, i) => {
            return(
              <Square
                key={i}
                index={i} 
                updateBoard={updateBoard}>
                  {board[i]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
    </main>
  )
}

export default App
