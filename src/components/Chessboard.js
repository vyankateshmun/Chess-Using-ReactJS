import React from 'react'
import './Chessboard.css'
import Square from './Square'
const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Chessboard() {
    let board=[];
    for(var i=VERTICAL_AXIS.length-1;i>=0;i--){
        for(var j=0;j<HORIZONTAL_AXIS.length;j++){
            const sum=i+j;
            board.push(<Square key={`${j},${i}`} value={sum}/>);
        }
    }
    return (
        <div className="board">{board}</div>
    )
}

export default Chessboard
