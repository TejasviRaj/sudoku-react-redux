import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import selectDifficulty from '../../redux/Actions/selectDifficultyCreator'
import ROW from '../Row/Row'
import './Sudoku.css'

function Sudoku(props) {
    let { difficulty } = useParams();
    let {startNewGame, board} = props;
    useEffect(() => {
        startNewGame(difficulty);
    }, [startNewGame, difficulty]);



    return (
        <div>
            <table className="sudokuGrid">
                <tbody>
                    {Object.keys(board).length &&
                        board.rows.map((row, rowNum) => {
                            return (
                                //used rowNum as key as items are not rearranged in this case. Here index is used as key even though it is considered antipattern because in this case the items are not rearranged.
                                <ROW key={rowNum} row={row}></ROW>

                            )
                        })
                    }
                </tbody>
                {/* <Result board={board}/> */}

            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        board: state.board
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: (difficulty) => dispatch(selectDifficulty(difficulty))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);