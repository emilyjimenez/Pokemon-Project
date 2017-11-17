import {Enemy, GrassEnemy, WaterEnemy, FireEnemy } from './../js/Enemy.js';

describe('Enemy constructor', function() {
  it("should make an enemy with a name, level, attack, def, hp, and element", function() {
    var enemy = new GrassEnemy(1);

    expect(enemy.name).not.toEqual(undefined);
    expect(enemy.level).toEqual(1);
    expect(enemy.attack).not.toEqual(undefined);
    expect(enemy.defense).not.toEqual(undefined);
    expect(enemy.currentHp).not.toEqual(undefined);
    expect(enemy.maxHp).not.toEqual(undefined);
    expect(enemy.element).not.toEqual(undefined);
  });
});
