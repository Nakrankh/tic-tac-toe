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
    
    const boardTemplate =
    [
        Array(3).fill(''),
        Array(3).fill(''),
        Array(3).fill('')
    ]

    const [ playerOnTurn, setPlayerOnTurn ] = useState(1);
    const [ isWon, setIsWon] = useState(false);
    const [ board, setBoard ] = useState(boardTemplate);
    const [ newGame, setNewGame ] = useState(false);

    const checkWon = () =>
    {
        const checks = [];
        
        const diag1 = [];
        const diag2 = [];
        for(let i = 0; i < board.length; i++)
        {
            //checks horizontal
            checks.push(board[i].every((field) => field === playerOnTurn));

            //checks vertical
            const temp = [];
            for(let j = 0; j < board.length; j++)
            {
                temp.push(board[j][i]);
            }
            checks.push(temp.every((field) => field === playerOnTurn));

            //checks diagional 1
            diag1.push(board[i][i]);
        }

        //checks diagional 2
        let i;
        let j = 0;
        for(i = board.length-1 ; i >= 0; i--)
        {
            diag2.push(board[i][j]);
            j++;
        }

        if(i < 0)
        {
            checks.push(
                diag1.every((field) => field === playerOnTurn),
                diag2.every((field) => field === playerOnTurn)
            );
        }

        if(checks.includes(true))
        {
            setIsWon(true);
            return true;
        }
    }

    const handleNewGame = () =>
    {
        setNewGame(true);
        setIsWon(false);
        setPlayerOnTurn(1);
        const flatBoard = [];
        fetch(board)
        .then(() => flatBoard.push(...board.flat()))
        .then(() => 
        {
            if(flatBoard.every(field => field === '')) setNewGame(false);
            else throw new Error('ResetBoardError');
        }).catch((e) => console.log(e));
    }

    return (
        <div className="game">
            <h1>Player
                {
                   isWon ? ` ${playerOnTurn} won`
                   : ` on turn: ${playerOnTurn}`
                }
            </h1>
            <Board
                board = {board}
                currentPlayer = {playerOnTurn}
                players = {players}
                setPOT = {setPlayerOnTurn}
                checkWon = {checkWon}
                isWon = {isWon}
                newGame = {newGame}
            />
            {
                isWon ?
                <button onClick={ handleNewGame }>new Game</button>
                : null
            }
        </div>
    )
}

export default Game
