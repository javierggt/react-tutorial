import {useState} from 'react';

function Square() {

  var [state, setState] = useState("X");

  function toggleState() {
    if (state === "") {
      setState("X")
    }
    else if (state === "X") {
      setState("O")
    }
    else {
      setState("")
    }
  }

  return (
    <button className="square" onClick={toggleState}>{state}</button>
  );
}

export default function App() {
  return <Square/>;
}
