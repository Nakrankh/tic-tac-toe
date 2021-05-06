import React from 'react'
import Field from './Field'
import './Board.css'

const Board = ({board, currentPlayer, players, setPOT, checkWon, isWon, newGame}) =>
{
    return (
        <div className="board">
            {
                board.map((row, i) =>
                    <div key={i} className={i > 0 ? 'row hline': 'row'}>
                        {
                            row.map((rowField, j) =>
                                <React.Fragment key={j}>
                                    <Field
                                        x = {i}
                                        y = {j}
                                        board = {board}
                                        currentPlayer = {currentPlayer}
                                        players = {players}
                                        setPOT = {setPOT}
                                        checkWon = {checkWon}
                                        isWon = {isWon}
                                        newGame = {newGame}
                                    />
                                    {
                                        j < row.length - 1 ? 
                                            <div
                                                className="vline">
                                            </div>
                                        : null
                                    }
                                </React.Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Board
