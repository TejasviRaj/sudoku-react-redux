import React from 'react';
import {useParams} from 'react-router-dom';

function Sudoku(props){
   const {difficulty} = useParams();
    return (
        <div>
            {difficulty}
        </div>
    );
}

export default Sudoku;