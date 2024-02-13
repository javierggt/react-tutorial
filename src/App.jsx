import {useState} from 'react';


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function Square(props) {
  return (
    <button onClick={props.onClick} className="square">{props.value}</button>
  );
}


function Board(props) {

  function handleClick(i) {
    if (props.squares[i] || calculateWinner(props.squares)) {
      return;
    }
    let newSquares = props.squares.slice();
    newSquares[i] = props.next;
    props.handleClick(newSquares)
  }

  let status;
  const winner = calculateWinner(props.squares);
  if (winner) {
    status = "Winner: " + winner;
  }

  return (
    <div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={props.squares[0]}/>
        <Square onClick={() => handleClick(1)} value={props.squares[1]}/>
        <Square onClick={() => handleClick(2)} value={props.squares[2]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={props.squares[3]}/>
        <Square onClick={() => handleClick(4)} value={props.squares[4]}/>
        <Square onClick={() => handleClick(5)} value={props.squares[5]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={props.squares[6]}/>
        <Square onClick={() => handleClick(7)} value={props.squares[7]}/>
        <Square onClick={() => handleClick(8)} value={props.squares[8]}/>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}

export default function App() {
  const [next, setNext] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(newSquares) {
    setSquares(newSquares);
    setNext(next === "X" ? "O" : "X");
  }

  return <Board squares={squares} next={next} handleClick={handleClick}/>;
}
