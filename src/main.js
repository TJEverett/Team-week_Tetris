import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Game } from './tetris.js';
import {getNextGrid} from './nextgrid.js';
import soundfile from './creeper.wav'; 
import soundfile2 from './noire.wav'; 

let game = new Game(); 
let interval;
let pause = false;
let globalTime = 1000;
let points = 0;
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
  
  let myMusic = new Audio(soundfile);
  let myMusic2 = new Audio(soundfile2);
  myMusic.loop = true;
  let gameArray = game.gameArray;
  
  let slider = document.getElementById("myVolume");
  slider.oninput = function() {
    myMusic.volume = this.value;
    myMusic2.volume = this.value;
    game.music.volume = this.value;
  };

  let canvas2 = document.getElementById("nextpiece");
  var ctx2 = canvas2.getContext("2d");

  let canvas3 = document.getElementById("score");
  let ctx3 = canvas3.getContext("2d");
  ctx3.font = "30px Arial";
  ctx3.textAlign = "center";

  drawGrid();
  drawNextPiece();
  drawTextGrid();
  game.gameOver = true;

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
      if(game.rows >= points + 3){
        points += 3;
        clearInterval(interval);
        globalTime = globalTime * .9;
        runDownInterval();
      }

      drawNextPiece();
      drawGrid();
      drawTextGrid();
    }, globalTime);
  }


  $('#pause').click(function(){
    if(pause === false){
      pause = true;
      myMusic.pause();
      clearInterval(interval);
    } else {
      if(game.gameOver === false){
        pause = false;
        myMusic.play();
        runDownInterval();
      } 
    }
  });

  $('#start').click(function () {
    globalTime = 1000;
    points = 0;
    clearInterval(interval);
    game = new Game();
    game.music.volume = slider.value;
    gameArray = game.gameArray;
    game.assignRandomPiece();
    game.putPieceOnBoard();
    game.assignRandomPiece();
    drawNextPiece();
    drawGrid();
    runDownInterval();
    myMusic.play();
    pause = false;
  });


  let keyState = {};
  let delay = false;
  window.addEventListener('keydown',function(e){
    if(!(e.keyCode in keyState) || keyState[e.keyCode] == false){
      delay = true;
    }
    keyState[e.keyCode] = true;
  });    
  window.addEventListener('keyup',function(e){
    keyState[e.keyCode] = false;
  });

  
  function gameLoop() {
    if (pause === false && game.gameOver == false){
      if (keyState[38]){
        game.nextTransform();
        drawGrid();
      } else if (keyState[39]){
        game.moveSideways("right");
        drawGrid();
      }else if (keyState[37]){
        game.moveSideways("left");
        drawGrid();
      }
      else if (keyState[40]){
        game.goDownByOne();
        drawNextPiece();
        drawGrid();    
      }
    }
    let intervalValue = 50;
    if(delay){
      intervalValue = 200;
    }
    delay = false;
    setTimeout(gameLoop, intervalValue);
  }
  gameLoop();
});
