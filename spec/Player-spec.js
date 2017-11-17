import { Player } from './../js/Player.js';

describe('Player constructor', function() {
  it('should make a player with a name, pokemon, and inventory', function() {
    var player = new Player("Red");

    expect(player.name).not.toEqual(undefined);
    expect(player.pokemon).not.toEqual(undefined);
    expect(player.inventory).not.toEqual(undefined);
  });
});
