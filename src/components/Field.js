import React, { useState } from 'react'

const Field = ({x, y, board, currentPlayer, players, setPOT, checkWon, isWon, setIsDraw, newGame}) =>
{
    const [field, setField] = useState('');
    const playerMark =
    {
        1: 'x',
        2: 'o'
    };

    if(newGame && field !== ''){
        setField('');
        board[x][y] = '';
    }

    const handleMove = () =>
    {
        if(field === '' && !isWon)
        {
            setField(playerMark[currentPlayer]);
            board[x][y] = currentPlayer;
            if(!checkWon()) setPOT(players[!players[currentPlayer]]);
        }

        if(board.flat().every(field => field !== '')) setIsDraw(true);
    }

    return (
        <div onClick={ handleMove } className="field">
            {field}
        </div>
    )
}

export default Field
