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

  test('should prevent side movement off the board', () => {
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

  test('check if left/right movement method detects a block in the way', () => {
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

    expect(reusableGame.gameArray[18][5]).toEqual("squareShape");
    expect(reusableGame.gameArray[18][6]).toEqual("squareShape");
    expect(reusableGame.gameArray[19][5]).toEqual("squareShape");
    expect(reusableGame.gameArray[19][6]).toEqual("squareShape");
  });

  test('check if down movement method hits B', () => {
    reusableGame.putPieceOnBoard("squareShape");
    reusableGame.gameArray[2][5] = "B";
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    reusableGame.goDownByOne();
    
    expect(reusableGame.gameArray[2][5]).toEqual("B");
    expect(reusableGame.gameArray[0][5]).toEqual("squareShape");
    expect(reusableGame.gameArray[0][6]).toEqual("squareShape");
    expect(reusableGame.gameArray[1][5]).toEqual("squareShape");
    expect(reusableGame.gameArray[1][6]).toEqual("squareShape");
  });


  test('check if code is able to find completed rows', () => {
    reusableGame.gameArray[7] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    reusableGame.gameArray[13] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    let rows = reusableGame.findCompletedRows();
    expect(rows).toEqual([7, 13]);
  });

  test('check if code code can remove completed rows', () => {
    reusableGame.gameArray[7] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    reusableGame.gameArray[13] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    let rows = reusableGame.findCompletedRows();
    reusableGame.removeCompletedRowsAndAddNewRows(rows);
    rows = reusableGame.findCompletedRows();
    expect(rows).toEqual([]);
  });

  test('check if code code can add new rows', () => {
    reusableGame.gameArray[7] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    reusableGame.gameArray[13] = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B","B"];
    let rows = reusableGame.findCompletedRows();
    reusableGame.removeCompletedRowsAndAddNewRows(rows);
    expect(reusableGame.gameArray.length).toEqual(20);
    expect(reusableGame.gameArray[0]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
    expect(reusableGame.gameArray[1]).toEqual(["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]);
  });

  test('check that we can add a tBlockShape', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    expect(reusableGame.gameArray[0][4]).toEqual("M");
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[0][6]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
  });

  test('check that we can move a tBlockShape', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    expect(reusableGame.gameArray[1][4]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
    expect(reusableGame.gameArray[1][6]).toEqual("M");
    expect(reusableGame.gameArray[2][5]).toEqual("M");
  });

  test('check that we can rotate a shape', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    let newPosition = reusableGame.returnTransFormedPosition(reusableGame.transform["tBlockShape"]["1"]);
    expect(newPosition).toEqual([[0,5],[1,4],[2,5],[1,5]]);
  });

  test('that we can draw transformed piece on board', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    reusableGame.drawTransform(reusableGame.transform["tBlockShape"]["1"]);
    
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[1][4]).toEqual("M");
    expect(reusableGame.gameArray[2][5]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
  });

  test('that we can get the next transformed piece', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    reusableGame.nextTransform();
    
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[1][4]).toEqual("M");
    expect(reusableGame.gameArray[2][5]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
  });

  test('that we can transform a piece through a full sequence', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    reusableGame.nextTransform();
    reusableGame.nextTransform();
    reusableGame.nextTransform();
    reusableGame.nextTransform();
    reusableGame.nextTransform();
    
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[1][4]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
    expect(reusableGame.gameArray[2][5]).toEqual("M");
  });

  test('that we cant transform a piece through the ceiling', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    
    reusableGame.nextTransform();
    
    expect(reusableGame.gameArray[0][4]).toEqual("M");
    expect(reusableGame.gameArray[0][5]).toEqual("M");
    expect(reusableGame.gameArray[0][6]).toEqual("M");
    expect(reusableGame.gameArray[1][5]).toEqual("M");
  });

  test('that we cant transform a piece through the wall', () => {
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    reusableGame.nextTransform();
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.nextTransform();
    
    expect(reusableGame.gameArray[0][11]).toEqual("M");
    expect(reusableGame.gameArray[1][10]).toEqual("M");
    expect(reusableGame.gameArray[1][11]).toEqual("M");
    expect(reusableGame.gameArray[2][11]).toEqual("M");
  });

  test('that we cant transform a piece through an already placed piece', () => {
    reusableGame.gameArray[1][11] = "B";
    reusableGame.putPieceOnBoard("tBlockShape");
    reusableGame.goDownByOne();
    reusableGame.nextTransform();
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.moveSideways("right");
    reusableGame.nextTransform();

    expect(reusableGame.gameArray[0][10]).toEqual("M");
    expect(reusableGame.gameArray[1][9]).toEqual("M");
    expect(reusableGame.gameArray[1][10]).toEqual("M");
    expect(reusableGame.gameArray[2][10]).toEqual("M");
    expect(reusableGame.gameArray[1][11]).toEqual("B");
  });
});