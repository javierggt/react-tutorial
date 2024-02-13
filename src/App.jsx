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


function Board() {

  const [next, setNext] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    let newSquares = squares.slice();
    newSquares[i] = next;
    setSquares(newSquares);
    setNext(next === "X" ? "O" : "X");
  }

  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  }

  return (
    <div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={squares[0]}/>
        <Square onClick={() => handleClick(1)} value={squares[1]}/>
        <Square onClick={() => handleClick(2)} value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={squares[3]}/>
        <Square onClick={() => handleClick(4)} value={squares[4]}/>
        <Square onClick={() => handleClick(5)} value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={squares[6]}/>
        <Square onClick={() => handleClick(7)} value={squares[7]}/>
        <Square onClick={() => handleClick(8)} value={squares[8]}/>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}

export default function App() {
  return <Board/>;
}
