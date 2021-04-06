import React from 'react'
import './Square.css'
function Square(props) {
    let {value}=props;
    console.log(value);
    return (
        
        (value%2 === 0) ?
            <div className="white-square"></div> :
            <div></div>
    )
}

export default Square
