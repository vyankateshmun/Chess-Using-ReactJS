import React , {useState} from 'react'
import './Chessboard.css'
import Square from './Square'
import Chess from 'chess.js'
import 'font-awesome/css/font-awesome.min.css';
import initPos from './Constants'
const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

let chess = new Chess();
function Chessboard() {
    const pos = JSON.parse(JSON.stringify(initPos));
    const [pieces, setPieces] = useState(pos);
    const [activePiece, setActivePiece] = useState(null);
    const [currentPiece, setCurrentPiece] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState("WHITE");
    function grabPiece(e){
      const element = e.target;
      let currentPiece1 = pieceAtPos(e.clientX,e.clientY);
      if(element.classList.contains("piece") && currentPiece1)
      {
        let xorg=Math.floor(window.innerWidth/2)-240;
        let yorg=Math.floor(window.innerHeight/2)-240;
        const x = currentPiece1.position.x*60 + xorg;
        const y = Math.abs(currentPiece1.position.y-7)*60 + yorg;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        setCurrentPiece(currentPiece1);
        setActivePiece(element);
      }
    }
    function movePiece(e){
      if (activePiece){
        const x = e.clientX - 30;
        const y = e.clientY - 30;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
      }
    }
    function dropPiece(e){
      if(activePiece && currentPiece)
      {
        let xorg=Math.floor(window.innerWidth/2)-240;
        let yorg=Math.floor(window.innerHeight/2)-240;
        let x=Math.floor((e.clientX-xorg)/60);
        let y=Math.abs(Math.ceil((e.clientY-yorg)/60)-8);
        if ((x>=0) && (x<8) && (y>=0) && (y<=7)){   
          let initpos = `${HORIZONTAL_AXIS[currentPiece.position.x]}${VERTICAL_AXIS[currentPiece.position.y]}`
          let finalpos = `${HORIZONTAL_AXIS[x]}${VERTICAL_AXIS[y]}`; 
          let moves=chess.move({from: initpos, to : finalpos, promotion : 'q'}); 
          if(moves)
          {
            if(moves.promotion==='q')
            {
              if(currentPiece.colour==="WHITE")
                currentPiece.image=`assets/images/qw.png`;
              else
                currentPiece.image=`assets/images/qb.png`;
            }
            let updatedPieces=pieces.filter((piece)=> (piece.position.x!== x || piece.position.y!==y));
            updatedPieces=updatedPieces.filter((piece)=> (currentPiece.position.x!== piece.position.x || currentPiece.position.y!==piece.position.y));
            currentPiece.position.x=x;
            currentPiece.position.y=y;
            if(moves.flags==='e')
            {
              if(currentPiece.colour==="WHITE")
                updatedPieces=updatedPieces.filter((piece)=> (piece.position.x!== x || piece.position.y!==y-1));
              else
              updatedPieces=updatedPieces.filter((piece)=> (piece.position.x!== x || piece.position.y!==y+1));
            }
            if(moves.flags==='k' || moves.flags==='q')  //Kingside and queenside castles
            {
              if(currentPiece.colour==="WHITE")
              {
                var newPiece=null;
                if(moves.san==='O-O')
                {
                  newPiece = updatedPieces.find( p => (p.position.x === 7 && p.position.y === 0));
                  updatedPieces = updatedPieces.filter((piece)=> (piece.position.x!== 7 || piece.position.y!==0));
                  newPiece.position.x=5;
                  updatedPieces.push(newPiece);
                }
                else
                {
                  newPiece = updatedPieces.find( p => (p.position.x === 0 && p.position.y === 0));
                  updatedPieces = updatedPieces.filter((piece)=> (piece.position.x!== 0 || piece.position.y!==0));
                  newPiece.position.x=3;
                  updatedPieces.push(newPiece);
                }
              }
              else
              {
                if(moves.san==='O-O')
                {
                  newPiece = updatedPieces.find( p => (p.position.x === 7 && p.position.y === 7));
                  updatedPieces = updatedPieces.filter((piece)=> (piece.position.x!== 7 || piece.position.y!==7));
                  newPiece.position.x=5;
                  updatedPieces.push(newPiece);
                }
                else
                {
                  newPiece = updatedPieces.find( p => (p.position.x === 0 && p.position.y === 7));
                  updatedPieces = updatedPieces.filter((piece)=> (piece.position.x!== 0 || piece.position.y!==7));
                  newPiece.position.x=3;
                  updatedPieces.push(newPiece);
                }
              }
            }
            updatedPieces.push(currentPiece);
            setPieces(updatedPieces);
            setCurrentPiece(null);
            setActivePiece(null);
            if(chess.game_over()){
              if(chess.in_checkmate())
                alert(`Game Won by ${currentPlayer}`);
              else if(chess.in_draw()){
                if(chess.in_stalemate())
                  alert("Game Drawn By Stalemate");
                else if(chess.in_threefold_repetition())
                  alert("Game Drawn By Threefold Repetition");
                else if(chess.insufficient_material())
                  alert("Game Drawn by Insufficient Material");
                else
                  alert("Drawn By 50 move rule");
              }
            }
            if(currentPlayer==="WHITE")
              setCurrentPlayer("BLACK");
            else
              setCurrentPlayer("WHITE");
          }   
        }
      }
      if(activePiece)
      {
        activePiece.style.position = "relative";
        activePiece.style.removeProperty("top");
        activePiece.style.removeProperty("left");
        setActivePiece(null);
      }
      if(currentPiece)
      {
        setCurrentPiece(null);
      }
    }
    function pieceAtPos(xpos,ypos){
      let xorg=Math.floor(window.innerWidth/2)-240;
      let yorg=Math.floor(window.innerHeight/2)-240;
      let x=Math.floor((xpos-xorg)/60);
      let y=Math.abs(Math.ceil((ypos-yorg)/60)-8);
      let currentPiece1 = null;
      currentPiece1 = pieces.find((p) => (p.position.x === x && p.position.y === y));
      return currentPiece1;
    }
    function newGame(e){
      e.preventDefault();
      setPieces(pos);
      chess = new Chess();
    }
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
      <div className="cent">
        <div className="left">
          <button className="button red" onClick={newGame}>New Game
            <i className="fa fa-undo" aria-hidden="true"> </i>
          </button>
        </div>
        <div className="center">
        <div
            onMouseMove={(e) => movePiece(e)}
            onMouseDown={(e) => grabPiece(e)}
            onMouseUp={(e) => dropPiece(e)}
            className="board"
          >{board}
        </div>
        </div>
        <div className="right">
        </div>
      </div>
    )
}

export default Chessboard
