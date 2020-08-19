import { Game } from './../src/tetris.js';

describe('Game Object Creation', () => {
  let reusableGame;

  beforeEach(() => {
    reusableGame = new Game();
  });

  test('should correctly create an empty game board array containing 20 arrays of 12 N letters', () => {
    expect(reusableGame.gameArray[0]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[1]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[2]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[3]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[4]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[5]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[6]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[7]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[8]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[9]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[10]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[11]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[12]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[13]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[14]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[15]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[16]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[17]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[18]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[19]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
  });

  test('should apply square shape correctly', () => {
    reusableGame.putPieceOnBoard("squareShape");
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[0][6]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
    expect(reusableGame.gameArray[1][6]).toEqual("M");
  });

  test("should update the currentPiece variable to match the location of the new piece", () => {
    reusableGame.putPieceOnBoard("squareShape");
    expect(reusableGame.currentPiece).toEqual(reusableGame.shape.squareShape);
  });

  test('should remove piece from board', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.erasePieceFromBoard();
    expect(reusableGame.gameArray[0][5]).toEqual("N");
    expect(reusableGame.gameArray[0][6]).toEqual("N");
    expect(reusableGame.gameArray[1][5]).toEqual("N");
    expect(reusableGame.gameArray[1][6]).toEqual("N");
  });

  test('should move piece down by 1', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.goDownByOne();
    expect(reusableGame.gameArray[1][5]).toEqual("M");
    expect(reusableGame.gameArray[1][6]).toEqual("M");
    expect(reusableGame.gameArray[2][5]).toEqual("M");
    expect(reusableGame.gameArray[2][6]).toEqual("M");
  });

  test('should move piece to the right by 1', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.moveSideways("right");
    expect(reusableGame.gameArray[0][6]).toEqual("M");
    expect(reusableGame.gameArray[0][7]).toEqual("M");
    expect(reusableGame.gameArray[1][6]).toEqual("M");
    expect(reusableGame.gameArray[1][7]).toEqual("M");
  });

  test('should move piece to the left by 1', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.moveSideways("left");
    expect(reusableGame.gameArray[0][4]).toEqual("M");
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[1][4]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
  });

  test('should prevent movement off the board', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    reusableGame.moveSideways("left");
    expect(reusableGame.gameArray[0][0]).toEqual("M");
    expect(reusableGame.gameArray[0][1]).toEqual("M");
    expect(reusableGame.gameArray[1][0]).toEqual("M");
    expect(reusableGame.gameArray[1][1]).toEqual("M");
  });

  test('check if left/right movement method detects B', () => {
    reusableGame.gameArray[0][11] = "B";


    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    expect(reusableGame.gameArray[0][11]).toEqual("B");
    expect(reusableGame.gameArray[0][10]).toEqual("M");
    expect(reusableGame.gameArray[0][9]).toEqual("M");
    expect(reusableGame.gameArray[1][10]).toEqual("M");
    expect(reusableGame.gameArray[1][9]).toEqual("M");
  });

  test('check if down movement method detects bottom', () => {
    

    reusableGame.putPieceOnBoard("squareShape");
    
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();  

    expect(reusableGame.gameArray[18][5]).toEqual("B");
    expect(reusableGame.gameArray[18][6]).toEqual("B");
    expect(reusableGame.gameArray[19][5]).toEqual("B");
    expect(reusableGame.gameArray[19][6]).toEqual("B");
    
  });

  test('check if down movement method hits b', () => {
    
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.gameArray[2][5] = "B";
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    
    expect(reusableGame.gameArray[2][5]).toEqual("B");
    expect(reusableGame.gameArray[0][5]).toEqual("B");
    expect(reusableGame.gameArray[0][6]).toEqual("B");
    expect(reusableGame.gameArray[1][5]).toEqual("B");
    expect(reusableGame.gameArray[1][6]).toEqual("B");
    
  });


});