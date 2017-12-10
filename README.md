Purpose
=======

To create a wrapper for the uci chess interface in node. I don't like any of the existing wrappers very much.

Design
======

Implement Engine interface:
---------------------------
- **getBestMove(board [,callback])** returns a promise or can accept callback function. If no board is provided, the current board state is used.
- **getBestMoveSync()** returns best move synchronously.

**Engine extends EventEmmitter**
emits:
- 'bestmove'
- 'update'



