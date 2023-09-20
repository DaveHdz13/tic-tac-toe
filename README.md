# Tic Tac Toe - React Project

This is a simple Tic Tac Toe with features like:
- Showing the board game (empty and dynamic)
- Show the current turn of the player
- Stop the game when 3 'x' or 3 'o' are placed in a row
- Button to restar the game

---

## Structure Explained
First lets set an object for each Turn:
```
const TURNS = {
  x: 'x',
  o: 'o'
}
```

Now I used the **useState hook** for setting an array of 9 index but empty values to represent the empty squares:
```
const [board, setBoard] = useState(Array(9).fill(null))
```

Inside of the **App function** we return the html structure we want. Using a **map method** to return the array of the board taking the index first because it has no values:
```
board.map((_, i) => {
    return(
        <Square key={i} index={i} >

        </Square>
    )
})
```

Now we need to create a component to show the turn of the player:
```
const Square = ({ children, isSelected, updateBoard, i }) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  return(
    <div className={className}>
      {children}
    </div>
  )
}
```
> - **const className**: this variable changes the style of the square depending if its 'true' or 'false'.
> - **children**: whatever is inside our Square component.


Now we show the two squares for each player with an active or not background to show the current turn:
```
<section className='turn'>
    <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
    <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
</section>
```

The updateBoard is in charged of the step by step when we click on an empty square:
