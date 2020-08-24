import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Game } from './tetris.js';

// function createGrid() {
//   for (var rows = 0; rows < 12; rows++) {
//     for (var columns = 0; columns < 20; columns++) {
//       $("#container").append("<div class='grid'></div>");
//     }
//   }
// }
let colors = {
  "N": "black",
  "elShape": "#FF971C",
  "reverseElShape": "#0341AE",
  "tBlockShape": "#a400ff",
  "tetrisShape": "#00efff",
  "zShape": "#FF3212",
  "reverseZShape": "#72CB3B",
  "squareShape": "#f4f800"

};


$(document).ready(function () {
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let game = new Game();
  let gameArray = game.gameArray;

  drawGrid();

  function drawGrid(){
    for(let item in gameArray) {
      for(let i in gameArray[item]) {
        let color = gameArray[item][i];
        if(color === "M"){
          color = game.currentShape;
        }
        drawRect(colors[color],i * 40,item * 40 );
      }
    }
  }
 
  function drawRect(color,x,y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y, 40, 40);
  }

  function runDownInterval(){
    // setInterval(function(){
    //   game.goDownByOne();
    //   drawGrid();
    // }, 1000);
  }

  $('#start').click(function () {
    game.putRandomPieceOnBoard();
    drawGrid();
    runDownInterval();
  });

  function control(e) {
    if (e.keyCode === 39){
      game.moveSideways("right");
      drawGrid();
    }else if (e.keyCode === 38){
      game.nextTransform();
      drawGrid();
    }else if (e.keyCode === 37){
      game.moveSideways("left");
      drawGrid();
    }else if (e.keyCode === 40){
      game.goDownByOne();
      drawGrid();
    }
  }

  document.addEventListener('keydown', control);
});



