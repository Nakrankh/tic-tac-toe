import React, {useState} from 'react'
import Board from './Board'
import './Game.css'

const Game = () =>
{
    const players =
    {
        [false]: 1,
        [true]: 2,
        1: false,
        2: true
    }
    const [ playerOnTurn, setPlayerOnTurn ] = useState(players.false);
    const [ board, setBoard ] = useState(
        [
            Array(3).fill(),
            Array(3).fill(),
            Array(3).fill()
        ]
    );

    return (
        <div className="game">
            <h1>Player on turn: {playerOnTurn}</h1>
            <Board
                board = {board}
                setBoard = {setBoard}
                currentPlayer = {playerOnTurn}
                players = {players}
                setPOT = {setPlayerOnTurn}
            />
        </div>
    )
}

export default Game
