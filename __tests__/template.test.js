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
});