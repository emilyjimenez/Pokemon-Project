import { Item, Potion, SuperPotion } from './../js/Item.js';
import {Pokemon, Bulbasaur, Squirtle, Charmander } from './../js/Pokemon.js';

describe('Item constructor', function() {
  it('should define item', function() {
    var item = new Potion();

    expect(item.name).toEqual("Potion");
    expect(item.healValue).toEqual(15);
  });
});

describe('Potion use', function() {
  it("should heal the pokemon by 15 hp", function() {
    var potion = new Potion();
    var pokemon = new Squirtle();
    var initialHp = pokemon.currentHp;
    pokemon.currentHp -= 10;
    potion.use(pokemon);
    expect(pokemon.currentHp).not.toBeLessThan(initialHp);
  });
  it("should not increase the pokemon's hp over the max hp", function() {
    var potion = new Potion();
    var pokemon = new Squirtle();
    pokemon.currentHp -= 10;
    potion.use(pokemon);
    expect(pokemon.currentHp).toEqual(pokemon.maxHp);
  });
});
