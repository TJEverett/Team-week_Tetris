import { Shape } from './shape.js';
export class Game {

  constructor() {
    this.currentPiece = [[],[],[],[]];
    this.centerPiece = [0,0];
    this.rows = 0;
    this.shape = new Shape();
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
  findCompletedRows() {}
  
  putPieceOnBoard(str) {
    let iv = this.shape[str];

    this.currentPiece = this.shape[str].map(item => {
      return [...item];
    });

    this.drawOnBoard(iv, "M");
  }

  erasePieceFromBoard() 
  {
    this.drawOnBoard(this.currentPiece,"N");
  }

  goDownByOne(){
    this.erasePieceFromBoard();
    this.currentPiece = this.currentPiece.map(item =>
      [item[0]+=1,item[1]]);
    this.drawOnBoard(this.currentPiece,"M");
  }

  moveSideways(direction){
    let modifier = 0;
    if(direction === "left"){
      modifier = -1;
    } else if (direction === "right"){
      modifier = +1;
    }
    this.erasePieceFromBoard();
    this.currentPiece = this.currentPiece.map(item =>
      [item[0], item[1]+=modifier]);
    this.drawOnBoard(this.currentPiece, "M");
  }
}