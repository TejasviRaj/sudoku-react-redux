import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

function Sudoku(props){
   const {difficulty} = useParams();
    return (
        <div>
            {difficulty}
        </div>
    );
}

export default Sudoku;