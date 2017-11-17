import {Pokemon, Bulbasaur, Squirtle, Charmander } from './../js/Pokemon.js';

describe('Pokemon constructor', function() {
  it("should make a pokemon with a name, level, xp, attack, def, hp, and element", function() {
    var pokemon = new Bulbasaur();
    expect(pokemon.species).not.toEqual(undefined);
    expect(pokemon.level).not.toEqual(undefined);
    expect(pokemon.xp).not.toEqual(undefined);
    expect(pokemon.attack).not.toEqual(undefined);
    expect(pokemon.defense).not.toEqual(undefined);
    expect(pokemon.currentHp).not.toEqual(undefined);
    expect(pokemon.maxHp).not.toEqual(undefined);
    expect(pokemon.element).not.toEqual(undefined);
  });
});

describe('Pokemon gainXp', function() {
  it("should increase the pokemon's xp amount", function() {
    var pokemon = new Bulbasaur();
    pokemon.gainXp(42);
    expect(pokemon.xp).toEqual(42);
  });
  it("should level the pokemon up every 100 xp", function() {
    var pokemon = new Bulbasaur();
    pokemon.gainXp(42);
    pokemon.gainXp(73);
    expect(pokemon.level).toEqual(2);
  });
  it("should increase the pokemon's stats every level", function() {
    var pokemon = new Bulbasaur();
    var initialAttack = pokemon.attack;
    var initialSpecialAttack = pokemon.specialAttack;
    var initialDefense = pokemon.defense;
    var initialCurrentHp = pokemon.currentHp;
    var initialMaxHp = pokemon.maxHp;
    pokemon.gainXp(100);
    expect(pokemon.attack).toBeGreaterThan(initialAttack);
    expect(pokemon.specialAttack).toBeGreaterThan(initialSpecialAttack);
    expect(pokemon.defense).toBeGreaterThan(initialDefense);
    expect(pokemon.currentHp).toBeGreaterThan(initialCurrentHp);
    expect(pokemon.maxHp).toBeGreaterThan(initialMaxHp);
  });
});
