import React from 'react'
import './Square.css'
function Square(props) {
    let {value,image,correct}=props;
    if(correct && value%2===0){
        return (
            <div className="square orange-square white-square">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        )
    }
    else if(correct){
        return (
            <div className="square orange-square green-square">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        )
    }
    else if(value%2===0){
        return(
            <div className="square white-square">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        )
    }
    return (
        <div className="square green-square">
            {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
        </div>
    )
}

export default Square
