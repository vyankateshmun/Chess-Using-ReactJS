import React , {useState} from 'react'
import './Chessboard.css'
import Square from './Square'
const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Chessboard() {
    const [pieces, setPieces] = useState([
        {
          image : `assets/images/rb.png`,
          position : {
            x: 0,
            y: 7,
          },
          type : "r",
          colour : "BLACK",
        },
        {
          image: `assets/images/nb.png`,
          position: {
            x: 1,
            y: 7,
          },
          type: "n",
          colour : "BLACK",
        },
        {
          image: `assets/images/bb.png`,
          position: {
            x: 2,
            y: 7,
          },
          type: "b",
          colour : "BLACK",
        },
        {
          image: `assets/images/qb.png`,
          position: {
            x: 3,
            y: 7,
          },
          type: "q",
          colour : "BLACK",
        },
        {
          image: `assets/images/kb.png`,
          position: {
            x: 4,
            y: 7,
          },
          type: "k",
          colour : "BLACK",
        },
        {
          image: `assets/images/bb.png`,
          position: {
            x: 5,
            y: 7,
          },
          type: "b",
          colour : "BLACK",
        },
        {
          image: `assets/images/nb.png`,
          position: {
            x: 6,
            y: 7,
          },
          type: "n",
          colour : "BLACK",
        },
        {
          image: `assets/images/rb.png`,
          position: {
            x: 7,
            y: 7,
          },
          type: "r",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 0,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 1,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 2,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 3,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 4,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 5,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 6,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
        {
          image: `assets/images/pb.png`,
          position: {
            x: 7,
            y: 6,
          },
          type : "p",
          colour : "BLACK",
        },
      
        {
          image: `assets/images/rw.png`,
          position: {
            x: 0,
            y: 0,
          },
          type: "r",
          colour : "WHITE",
        },
        {
          image: `assets/images/nw.png`,
          position: {
            x: 1,
            y: 0,
          },
          type: "n",
          colour : "WHITE",
        },
        {
          image: `assets/images/bw.png`,
          position: {
            x: 2,
            y: 0,
          },
          type: "b",
          colour : "WHITE",
        },
        {
          image: `assets/images/qw.png`,
          position: {
            x: 3,
            y: 0,
          },
          type: "q",
          colour : "WHITE",
        },
        {
          image: `assets/images/kw.png`,
          position: {
            x: 4,
            y: 0,
          },
          type: "k",
          colour : "WHITE",
        },
        {
          image: `assets/images/bw.png`,
          position: {
            x: 5,
            y: 0,
          },
          type: "b",
          colour : "WHITE",
        },
        {
          image: `assets/images/nw.png`,
          position: {
            x: 6,
            y: 0,
          },
          type: "n",
          colour : "WHITE",
        },
        {
          image: `assets/images/rw.png`,
          position: {
            x: 7,
            y: 0,
          },
          type: "r",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 0,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 1,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 2,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 3,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 4,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 5,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 6,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        },
        {
          image: `assets/images/pw.png`,
          position: {
            x: 7,
            y: 1,
          },
          type : "p",
          colour : "WHITE",
        }
    ]);
    let board=[];
    for(let i=VERTICAL_AXIS.length-1;i>=0;i--){
        for(let j=0;j<HORIZONTAL_AXIS.length;j++){
            const piece = pieces.find( p => (p.position.x === j && p.position.y === i));
            let image = piece ? piece.image : undefined;
            const sum=i+j;
            board.push(<Square key={`${j},${i}`} value={sum} image={image}/>);
        }
    }
    return (
        <div className="board">{board}</div>
    )
}

export default Chessboard
