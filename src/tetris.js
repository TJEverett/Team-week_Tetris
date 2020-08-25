import { Shape } from './shape.js';
import { Transforms } from './transforms.js';

export class Game {

  constructor() {
    this.gameOver = false;
    this.currentState;
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

  drawOnBoard(arr, state) {
    // console.log("draw on board");
    // console.log(arr);
    let block1 = arr[0];
    let y = block1[0];
    let x = block1[1];
   
    this.gameArray[y][x] = state;
  
    let block2 = arr[1];
    let y2 = block2[0];
    let x2 = block2[1];
    this.gameArray[y2][x2] = state; 

    let block3 = arr[2];
    let y3 = block3[0];
    let x3 = block3[1];
    this.gameArray[y3][x3] = state; 

    let block4 = arr[3];
    let y4 = block4[0];
    let x4 = block4[1];
    this.gameArray[y4][x4] = state;  
  }

  returnTransFormedPosition(transform){
    let arr = transform.map(item => {
      return [this.centerPiece[0] + item[0],this.centerPiece[1] + item [1]];
    });
    arr.push([...this.centerPiece]);
    return arr;
  }

  drawTransform(transform){
    this.erasePieceFromBoard();
    let arr = this.returnTransFormedPosition(transform);
    this.currentPiece = arr;
    this.drawOnBoard(arr, "M");
  }

  nextTransform(){
    let length = Object.keys(this.transform[this.currentShape]).length - 1;
    let next;
    if(this.currentTransform === length){
      next = this.transform[this.currentShape][0];
    }else{ 
      next = this.transform[this.currentShape][this.currentTransform + 1];
    }
    if(!this.checkTransformMovement(next)){
      if(this.currentTransform === length){
        this.currentTransform = 0;
      }else{
        this.currentTransform += 1;
      }
    }
    this.drawTransform(this.transform[this.currentShape][this.currentTransform]);
  }

  findCompletedRows() {
    return this.gameArray.reduce(function(accumulator, current, idx){
      if (current.every(item => {return !(item === "N")})){
        accumulator.push(idx);
      }
      return accumulator; 
    },[]);
  }

  removeCompletedRowsAndAddNewRows(arr){
    this.rows += arr.length;
    arr = arr.reverse();
    arr.map(item => this.gameArray.splice(item, 1));
    arr.forEach(_ => {this.gameArray.unshift(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"])}); 
  }
  
  putPieceOnBoard() {
    let iv = this.shape[this.nextPiece];
    this.currentPiece = this.shape[this.nextPiece].map(item => {
      return [...item];
    });
    this.currentTransform = 0;
    this.currentShape = this.nextPiece;
    this.centerPiece = [...this.shape[this.nextPiece + "C"]];
    this.drawOnBoard(iv, "M");
  }

  assignRandomPiece(){
    let array = ["elShape","reverseElShape","tBlockShape","tetrisShape","zShape","reverseZShape","squareShape"];
    let random = Math.floor(Math.random()* 7);
    this.nextPiece = array[random];

  }

  erasePieceFromBoard() {
    this.drawOnBoard(this.currentPiece,"N");
  }

  goDownByOne(){
    if(this.checkDownMovement()) {
      this.changeMsToColors();
      let arr = this.findCompletedRows();
      this.removeCompletedRowsAndAddNewRows(arr);
      this.putPieceOnBoard();
      this.assignRandomPiece();
    }else{
      this.erasePieceFromBoard();
      this.currentPiece = this.currentPiece.map(item =>
        [item[0]+1,item[1]]);
      this.centerPiece[0] += 1;
      this.drawOnBoard(this.currentPiece,"M");
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
    this.drawOnBoard(this.currentPiece, "M");
  }

  checkTransformMovement(transform){
    let imaginaryPiece = this.returnTransFormedPosition(transform);
    let result = imaginaryPiece.some(item => (item[0] > 19) || (item[0] < 0)
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
    this.drawOnBoard(this.currentPiece, this.currentShape);
  }
  
  isGameOver(){
    return this.currentPiece.some(item => item[0] === 0);
  }
}