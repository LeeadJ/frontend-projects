import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            
            return squares[a];
        }
    }
    return null;
}

export default function Board({ xIsNext, squares, handlePlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        handlePlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            {[0,1,2].map(row => (
                <div className="board-row" key={row}>
                    {[0,1,2].map(col => (
                        <Square 
                            key={col}
                            value={squares[row * 3 + col]}
                            onSquareClick={() => handleClick(row * 3 + col)}
                        />
                    ))}
                </div>
            ))}
            


        </>
    )
}

