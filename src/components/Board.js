import React from 'react'
import Field from './Field'
import './Board.css'

const Board = ({board, setBoard, currentPlayer, players, setPOT}) =>
{
    return (
        <div className="board">
            {
                board.map((row, i) =>
                    <div key = {i+'top'} className = {i > 0 ? 'row hline': 'row'}>
                        {
                            row.map((rowField, j) =>
                            <>
                                <Field
                                    key = {j}
                                    x = {i}
                                    y = {j}
                                    board = {board}
                                    setBoard = {setBoard}
                                    currentPlayer = {currentPlayer}
                                    players = {players}
                                    setPOT = {setPOT}
                                />
                                {console.log(i.toString() + (row.length + j).toString())}
                                {
                                    j < row.length - 1 ? 
                                        <div
                                            key = {i.toString() + (row.length + j).toString()}
                                            className="vline">
                                        </div>
                                    : null
                                }
                            </>)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Board
