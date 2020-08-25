export function getNextGrid(game){
  if(game.nextPiece === "squareShape"){
    return [
      ["N","N","N","N"],
      ["N","squareShape","squareShape","N"],
      ["N","squareShape","squareShape","N"],
      ["N","N","N","N"]
    ];
  }else if (game.nextPiece === "elShape"){
    return [
      ["N","N","N","N"],
      ["elShape","elShape","elShape","N"],
      ["elShape","N","N","N"],
      ["N","N","N","N"]
    ];
  }else if (game.nextPiece === "reverseElShape"){
    return [
      ["N","N","N","N"],
      ["reverseElShape", "reverseElShape", "reverseElShape","N"],
      ["N","N","reverseElShape","N"],
      ["N","N","N","N"]
    ];
  }else if (game.nextPiece === "tBlockShape"){
    return [
      ["N","N","N","N"],
      ["N","tBlockShape","tBlockShape","tBlockShape"],
      ["N","N","tBlockShape","N"],
      ["N","N","N","N"]
    ];
  }else if (game.nextPiece === "tetrisShape"){
    return [
      ["N","N","tetrisShape","N"],
      ["N","N","tetrisShape","N"],
      ["N","N","tetrisShape","N"],
      ["N","N","tetrisShape","N"]
    ];
  } else if (game.nextPiece === "zShape"){
    return [
      ["N","N","N","N"],
      ["zShape","zShape","N","N"],
      ["N","zShape","zShape","N"],
      ["N","N","N","N"]
    ];
  }else if (game.nextPiece === "reverseZShape"){
    return [
      ["N","N","N","N"],
      ["N","reverseZShape","reverseZShape","N"],
      ["reverseZShape","reverseZShape","N","N"],
      ["N","N","N","N"]
    ];
  }else{
    return[
      ["N","N","N","N"],
      ["N","N","N","N"],
      ["N","N","N","N"],
      ["N","N","N","N"]
    ];
  }
}