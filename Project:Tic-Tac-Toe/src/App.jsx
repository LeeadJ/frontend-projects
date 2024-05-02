import { useState } from 'react';
import Board from './Components/Board';

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSqaures = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1);
    
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let text;
    if(move > 0){
      text = "Go to move #" + move;
    } else {
      text = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{text}</button>
      </li>
    )
  })
  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSqaures} handlePlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

