import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Game } from './tetris.js';
import {getNextGrid} from './nextgrid.js';
import soundfile from './creeper.wav'; 
import soundfile2 from './noire.wav'; 

let game = new Game(); 
let interval;
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
  
  let myMusic =  new Audio(soundfile);
  let myMusic2 = new Audio(soundfile2);
  myMusic.loop = true;
  let gameArray = game.gameArray;

  let canvas2 = document.getElementById("nextpiece");
  var ctx2 = canvas2.getContext("2d");

  let canvas3 = document.getElementById("score");
  let ctx3 = canvas3.getContext("2d");
  ctx3.font = "30px Arial";
  ctx3.textAlign = "center";

  drawGrid();
  drawNextPiece();
  drawTextGrid();


  function drawTextGrid(){
    ctx3.fillStyle = "black";
    ctx3.fillRect(0,0,canvas3.width,canvas3.height);
    ctx3.fillStyle = "red";
    if(game.gameOver === false){
      ctx3.fillText("Score: " + game.rows, 120, 60);
    } else {
      ctx3.fillText("Game Over", 120, 60);
    }
  }

  function drawGrid(){
    for(let item in gameArray) {
      for(let i in gameArray[item]) {
        let color = gameArray[item][i];
        if(color === "M"){
          color = game.currentShape;
        }
        drawRect(colors[color],i * 30,item * 30 ,ctx);
      }
    }
  }
 
  function drawNextPiece() {
    let nextArray = getNextGrid(game);
    for(let item in nextArray) {
      for(let i in nextArray[item]) {
        let color = nextArray[item][i];
        drawRect(colors[color],i * 30,item * 30 ,ctx2);
      }
    }
  }
  function drawRect(color,x,y,ctxGeneral) {
    ctxGeneral.fillStyle = color;
    ctxGeneral.fillRect(x,y, 30, 30);
  }

  function runDownInterval(){
    interval = setInterval(function(){
      game.goDownByOne();
      if(game.gameOver === true){
        clearInterval(interval);
        myMusic.pause();
        myMusic2.play();
      }
      drawNextPiece();
      drawGrid();
      drawTextGrid();
    }, 1000);
  }

  $('#start').click(function () {
    clearInterval(interval);
    game = new Game();
    gameArray = game.gameArray;
    game.assignRandomPiece();
    game.putPieceOnBoard();
    game.assignRandomPiece();
    drawNextPiece();
    drawGrid();
    runDownInterval();
    myMusic.play();
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
      if(game.gameOver === false){
        game.goDownByOne();
        drawNextPiece();
        drawGrid();
      }
    }
  }

  document.addEventListener('keydown', control);
});