export class Shape {
  constructor() {
    this.cElShape = [0, 5];
    this.cReverseElShape = [0, 5];
    this.cTBlockShape = [0, 5];
    this.cTetrisShape = [1, 5];
    this.cZShape = [0,5];
    this.cReverseZShape = [0,5];

    this.pElShape = 1;
    this.pReverseElShape = 1;
    this.pTBlockShape = 1;
    this.pTetrisShape = 1;
    this.pZshape = 1;
    this.pReverseZShape = 1;


    this.squareShape = [
      [0, 5],
      [0, 6],
      [1, 5],
      [1, 6]
    ];
    this.elShape = [
      [0, 6],
      [0, 5],
      [0, 4],
      [1, 4]
    ];
    this.reverseElShape = [
      [0, 4],
      [0, 5],
      [0, 6],
      [1, 6]
    ];
    this.tBlockShape = [
      [0, 4],
      [0, 5],
      [0, 6],
      [1, 5]
    ];
    this.tetrisShape = [
      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5]
    ];
    this.reverseZShape = [
      [0, 6],
      [0, 5],
      [1, 5],
      [1, 4]
    ];
    this.zShape = [
      [0, 5],
      [0, 4],
      [1, 5],
      [1, 6]
    ];
  }
}