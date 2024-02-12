import {useState} from 'react';

function Square(props) {
  return (
    <button onClick={props.onClick} className="square">{props.value}</button>
  );
}


function Board() {

  const [next, setNext] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    let newSquares = squares.slice();
    newSquares[i] = next;
    setSquares(newSquares);
    setNext(next === "X" ? "O" : "X");
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
    </div>
  );
}

export default function App() {
  return <Board/>;
}
