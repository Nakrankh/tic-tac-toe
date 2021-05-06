import React, { useState } from 'react'

const Field = ({x, y, board, setBoard, currentPlayer, players, setPOT}) =>
{
    const [field, setField] = useState(0);
    const playerMark =
    {
        1: 'x',
        2: 'o'
    };

    const move = () =>
    {
        if (field === 0)
        {
            setField(playerMark[currentPlayer]);
            board[x][y] = currentPlayer;
            const newBoard = [...board];
            setBoard(newBoard);
            setPOT(players[!players[currentPlayer]]);
        }
    }

    return (
        <div onClick={ move }>
            { field }
        </div>
    )
}

export default Field
