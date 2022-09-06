import { useState } from "react";

const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", "", ]

function Game() {
  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">Tic Tac Toe Game</h1>
      <div>
        <div>
          {INITIAL_GAME_STATE.map((player, index) => (
            <div>{player}</div>
          ))}
        </div>
        <div>Scores Go Here</div>
      </div>
    </div>
  );
};

export default Game;