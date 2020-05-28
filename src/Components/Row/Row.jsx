import React from 'react';
import Cell from '../Cell/Cell'

const Row = (props) =>
{
  
    return (<tr>
        {props.row.cells.map((cell,cellNum) =>
             <Cell key={cellNum} cell = {cell}></Cell>)}
    </tr>)
}
export default Row;