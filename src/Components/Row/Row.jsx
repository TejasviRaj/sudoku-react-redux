import React from 'react';
import Cell from '../Cell/Cell'
import './Row.css'

const Row = (props) =>
{
  
    return (<tr class ="row">
        {props.row.cells.map((cell,cellNum) =>
             <Cell key={cellNum} cell = {cell}></Cell>)}
    </tr>)
}
export default Row;