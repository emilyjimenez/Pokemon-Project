import {Battle} from './../js/Battle.js'
import {Pokemon, Bulbasaur, Squirtle, Charmander } from './../js/Pokemon.js';
import {Enemy, GrassEnemy, WaterEnemy, FireEnemy } from './../js/Enemy.js';

describe("Battle constructor", function() {
  it("should start a battle between the player and an enemy", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    expect(pokemon).not.toEqual(undefined);
    expect(enemy).not.toEqual(undefined);
  });
});

describe("Battle calcDamage", function() {
  it("should calculate the damage done by an attack", function() {
    var damage = Battle.calcDamage(5, 1, 5, 1);
    expect(damage).toEqual(4);
  });
  it("should deal double damage if the enemy is weak against the attack type", function() {
    var damage = Battle.calcDamage(5, 1, 5, 2);
    expect(damage).toEqual(8);
  });
  it("should deal half damage if the enemy is resistant to the attack type", function() {
    var damage = Battle.calcDamage(5, 1, 5, .5);
    expect(damage).toEqual(2);
  });
});

describe("Battle playerAttack", function() {
  it("should deal damage to the enemy", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    battle.playerAttack();
    expect(enemy.currentHp).toBeLessThan(enemy.maxHp);
  });
  it("should check whether the player has won the battle", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    pokemon.level = 100;
    battle.playerAttack();
    expect(battle.status).toEqual("player-win");
  });
});

describe("Battle playerSpecialAttack", function() {
  it("should deal damage to the enemy", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    battle.playerSpecialAttack();
    expect(enemy.currentHp).toBeLessThan(enemy.maxHp);
  });
  it("should check whether the player has won the battle", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    pokemon.level = 100;
    battle.playerSpecialAttack();
    expect(battle.status).toEqual("player-win");
  });
});

describe("Battle enemyAttack", function() {
  it("should deal damage to the player", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    battle.enemyAttack();
    expect(pokemon.currentHp).toBeLessThan(enemy.maxHp);
  });
  it("should check whether the player has lost the battle", function() {
    var pokemon = new Charmander();
    var enemy = new FireEnemy(1);
    var battle = new Battle(pokemon, enemy);
    enemy.level = 100;
    battle.enemyAttack();
    expect(battle.status).toEqual("player-lose");
  });
});
