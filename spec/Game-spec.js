import { Game } from './../js/Game.js';

describe('Game constructor', function() {
  it("should start a new game", function() {
    var game = new Game();
    expect(game.player).not.toEqual(undefined);
    expect(game.currentBattle).not.toEqual(undefined);
  });
});
