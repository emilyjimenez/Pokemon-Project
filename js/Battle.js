import {Pokemon} from './../js/Pokemon.js';
import {Enemy} from './../js/Enemy.js';

export class Battle {
  constructor(playerPokemon, enemy) {
    this.playerPokemon = playerPokemon;
    this.enemy = enemy;
    this.status = "battling";
  }

  playerAttack() {
    var damage = Battle.calcDamage(this.playerPokemon.attack, this.playerPokemon.level, this.enemy.defense, 1);
    this.enemy.modifyHp(-damage);
    this.setStatus();
  }

  playerSpecialAttack() {
    var modifier = 1;
    if (
        this.playerPokemon.element === "grass" && this.enemy.element === "fire" ||
        this.playerPokemon.element === "fire" && this.enemy.element === "water" ||
        this.playerPokemon.element === "water" && this.enemy.element === "grass"
      ) {
      modifier = 0.5;
    }
    else if (
        this.enemy.element === "grass" && this.playerPokemon.element === "fire" ||
        this.enemy.element === "fire" && this.playerPokemon.element === "water" ||
        this.enemy.element === "water" && this.playerPokemon.element === "grass"
      ) {
      modifier = 2;
    }
    var damage = Battle.calcDamage(this.playerPokemon.attack, this.playerPokemon.level, this.enemy.defense, modifier);
    this.enemy.modifyHp(-damage);
    this.setStatus();
  }

  enemyAttack() {
    var damage = Battle.calcDamage(this.enemy.attack, this.enemy.level, this.playerPokemon.defense, 1);
    this.playerPokemon.modifyHp(-damage);
    this.setStatus();
  }

  setStatus() {
    if (this.playerPokemon.currentHp <= 0) {
      this.status = "player-lose";
    }
    else if (this.enemy.currentHp <= 0) {
      this.playerPokemon.currentHp = this.playerPokemon.maxHp;
      this.playerPokemon.gainXp(50);
      this.status =  "player-win";
    }
  }

  static calcDamage(attack, level, defense, modifier) {
    var power = 2;
    return Math.floor((power * level * (attack / defense) + 2) * modifier);
  }
}
