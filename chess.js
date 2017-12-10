const Chess = require('chess.js').Chess;
var chess = new Chess();
const Engine = require('node-uci').Engine

const engine = new Engine('/home/zorvyyy/Documents/CompSci/Web/nodejs/piping/chess/stockfish')
//for (var i = 0; i < 20; i++) {
engine.chain()
    .init()
        .position(chess.fen())
    engine.chain().init().go({depth: 15})
    .then(result => {
        chess.move({from: result.bestmove.slice(0, 2), to: result.bestmove.slice(2)});
        console.log(chess.pgn());
    })

//}
console.log(chess.pgn());
