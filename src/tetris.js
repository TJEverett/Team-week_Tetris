import { Shape } from './shape.js';
export class Game {

  constructor() {
    this.centerPiece = [0,0]
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
  drawOnBoard(arr) {
    let block1 = arr[0];
    let y = block1[0];
    let x = block1[1];
    this.gameArray[y][x] = "M";
    
    let block2 = arr[1];
    let y2 = block2[0];
    let x2 = block2[1];
    this.gameArray[y2][x2] = "M"; 

    let block3 = arr[2];
    let y3 = block3[0];
    let x3 = block3[1];
    this.gameArray[y3][x3] = "M"; 

    let block4 = arr[3];
    let y4 = block4[0];
    let x4 = block4[1];
    this.gameArray[y4][x4] = "M"; 

   
  }
  findCompletedRows() {}
  
  putPieceOnBoard(str) {
    let iv = this.shape[str];

    this.drawOnBoard(iv);
  }

  goDownByOne(){
    
  }
}