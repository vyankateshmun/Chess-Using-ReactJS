import React from 'react'
import './Square.css'
function Square(props) {
    let {value,image}=props;
    return (
        
        (value%2 === 0) ?
            <div className="square white-square">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div> :
            <div className="square">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
    )
}

export default Square
