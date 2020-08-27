import { Shape } from './shape.js';
import { Transforms } from './transforms.js';
import zap from './zap.wav';

export class Game {

  constructor() {
    this.music = new Audio(zap);
    this.gameOver = false;
    this.currentPiece = [[],[],[],[]];
    this.centerPiece = [0,0];
    this.currentShape = "";
    this.currentTransform = 0;
    this.rows = 0;
    this.transform = new Transforms();
    this.shape = new Shape();
    this.nextPiece = "";
    this.gameArray = [
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
      ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]
    ];
  }

  drawOnBoard(state) {
    this.currentPiece.forEach(a => this.gameArray[a[0]][a[1]] = state);
  }

  returnTransFormedPosition(transform){
    let arr = transform.map(item => {
      return [this.centerPiece[0] + item[0],this.centerPiece[1] + item [1]];
    });
    arr.push([...this.centerPiece]);
    return arr;
  }

  nextTransform(){
    let nextV = this.currentTransform + 1;
    let length = Object.keys(this.transform[this.currentShape]).length;
    if (length -1 === this.currentTransform){
      nextV = 0;
    }
    let next = this.transform[this.currentShape][nextV];
    let mov = this.returnTransFormedPosition(next);
    if(!this.checkTransformMovement(mov)){
      this.erasePieceFromBoard();
      this.currentTransform = nextV;
      this.currentPiece = mov;
      this.drawOnBoard("M");
    }
  }

  findCompletedRows() {
    return this.gameArray.reduce(function(accumulator, current, idx){
      if (current.every(item => {return !(item === "N");})){
        accumulator.push(idx);
      }
      return accumulator; 
    },[]);
  }

  removeCompletedRowsAndAddNewRows(arr){
    this.rows += arr.length;
    arr = arr.reverse();
    arr.map(item => this.gameArray.splice(item, 1));
    arr.forEach(_ => {this.gameArray.unshift(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);}); 
  }
  
  putPieceOnBoard() {
    this.centerPiece = [...this.shape[this.nextPiece + "C"]];
    this.currentShape = this.nextPiece;
    this.currentPiece = this.returnTransFormedPosition(this.transform[this.currentShape]["0"]);
    this.currentTransform = 0;
    this.drawOnBoard("M");
  }

  assignRandomPiece(){
    let array = ["elShape","reverseElShape","tBlockShape","tetrisShape","zShape","reverseZShape","squareShape"];
    let random = Math.floor(Math.random()* 7);
    this.nextPiece = array[random];
  }

  erasePieceFromBoard() {
    this.drawOnBoard("N");
  }

  goDownByOne(){
    if(this.checkDownMovement()) {
      this.changeMsToColors();
      let arr = this.findCompletedRows();
      if(arr.length>0){
        this.music.play();
      }
      this.removeCompletedRowsAndAddNewRows(arr);
      this.putPieceOnBoard();
      this.assignRandomPiece();
    }else{
      this.erasePieceFromBoard();
      this.currentPiece = this.currentPiece.map(item =>
        [item[0]+1,item[1]]);
      this.centerPiece[0] += 1;
      this.drawOnBoard("M");
    }
  }

  moveSideways(direction){
    let modifier = 0;
    if(direction === "left"){
      modifier = -1;
    } else if (direction === "right"){
      modifier = 1;
    }
    
    if(this.checkSideMovement(modifier)) return;
    
    this.erasePieceFromBoard();
    this.currentPiece = this.currentPiece.map(item =>
      [item[0], item[1]+modifier]);
    
    this.centerPiece[1] += modifier;
    this.drawOnBoard("M");
  }

  checkTransformMovement(mov){
    let result = mov.some(item => (item[0] > 19) || (item[0] < 0)
    || (item[1] > 11) || (item[1] < 0)
    || (!(this.gameArray[item[0]][item[1]] === "N")
    && !(this.gameArray[item[0]][item[1]] === "M")));
    return result;
  }

  checkSideMovement(modifier){
    let imaginaryPiece = this.currentPiece.map(item =>
      [item[0], item[1]+modifier]);
    let result = imaginaryPiece.some(item => ((item[1] > 12) || (item[1] < 0))
    || (!(this.gameArray[item[0]][item[1]] === "N")
    && !(this.gameArray[item[0]][item[1]] === "M")));
    return result;
  }

  checkDownMovement(){
    let imaginaryPiece = this.currentPiece.map(item => [item[0] + 1, item[1]]);
    let result = imaginaryPiece.some(item => (item[0] > 19)
    || (!(this.gameArray[item[0]][item[1]] === "N")
    && !(this.gameArray[item[0]][item[1]] === "M")));
    return result;
  }

  changeMsToColors(){
    if (this.isGameOver()){
      this.gameOver = true;
    }
    this.drawOnBoard(this.currentShape);
  }
  
  isGameOver(){
    return this.currentPiece.some(item => item[0] === 0);
  }
}