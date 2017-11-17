import { Game } from "./../js/Game.js";
import { Player } from "./../js/Player.js";
import { Pokemon, Bulbasaur, Squirtle, Charmander } from "./../js/Pokemon.js";
import { Enemy, GrassEnemy, WaterEnemy, FireEnemy } from "./../js/Enemy.js";
import { Battle } from "./../js/Battle.js";
import { Item, Potion, SuperPotion } from "./../js/Item.js";

var game = new Game();

function showSelectPokemon() {
  $("#player").slideUp();
  $("#pokemon").slideDown();
}

function showMenu() {
  $("#pokemon").slideUp();
  $("#menu").slideDown();
}

function showBattle() {
  $("#menu").slideUp();
  $("#battle").slideDown();
}

function showMenuFromBattle() {
  $("#battle").slideUp();
  $("#menu").slideDown();
}

function updateBattleScreen() {
  updateBattleScreenPlayer();
  updateBattleScreenEnemy();
}

function updateBattleScreenPlayer() {
  $("#player-battle .battle-name").text(game.player.pokemon.species);
  $("#player-battle .battle-level").text(game.player.pokemon.level);
  $("#player-battle .battle-xp").text(game.player.pokemon.xp);
  $("#player-battle .battle-xp-bar").attr("value", game.player.pokemon.xp);
  $("#player-battle .current-hp").text(game.player.pokemon.currentHp);
  $("#player-battle .max-hp").text(game.player.pokemon.maxHp);
  $("#player-battle .battle-hp-bar").attr("value", game.player.pokemon.currentHp);
  $("#player-battle .battle-hp-bar").attr("max", game.player.pokemon.maxHp);
}

function updateBattleScreenEnemy() {
  $("#enemy-battle .battle-name").text(game.currentBattle.enemy.name);
  $("#enemy-battle .battle-level").text(game.currentBattle.enemy.level);
  $("#enemy-battle .current-hp").text(game.currentBattle.enemy.currentHp);
  $("#enemy-battle .max-hp").text(game.currentBattle.enemy.maxHp);
  $("#enemy-battle .battle-hp-bar").attr("value", game.currentBattle.enemy.currentHp);
  $("#enemy-battle .battle-hp-bar").attr("max", game.currentBattle.enemy.maxHp);
}

function setPlayerName() {
  var playerName = $("#player-name").val();
  game.player = new Player(playerName);
}

function setPlayerPokemon() {
  var selectedPokemonName = $("input:radio[name=pokemon]:checked").val();
  var selectedPokemon;
  if (selectedPokemonName === "Bulbasaur") {
    selectedPokemon = new Bulbasaur();
  }
  else if (selectedPokemonName === "Squirtle") {
    selectedPokemon = new Squirtle();
  }
  else if (selectedPokemonName === "Charmander") {
    selectedPokemon = new Charmander();
  }
  game.player.pokemon = selectedPokemon;
}

function startNewBattle() {
  var enemy = Enemy.generateRandomEnemy(game.player.pokemon.level);
  game.currentBattle = new Battle(game.player.pokemon, enemy);
  updateBattleScreen();
}

function doAttack() {
  game.currentBattle.playerAttack();
  updateBattleScreen();
  if (game.currentBattle.status === "player-win") {
    winBattle();
  }
  else {
    takeEnemyTurn();
  }
}

function doSpecialAttack() {
  game.currentBattle.playerSpecialAttack();
  updateBattleScreen();
  if (game.currentBattle.status === "player-win") {
    winBattle();
  }
  else {
    takeEnemyTurn();
  }
}

function takeEnemyTurn() {
  game.currentBattle.enemyAttack();
  updateBattleScreen();
  if (game.currentBattle.status === "player-lose") {
    loseBattle();
  }
}

function winBattle() {
  showMenuFromBattle();
}

function loseBattle() {
  alert("lose");
}

function useItem() {
  alert("You don't have any items because we are lazy...");
}

$(document).ready(function(){
  $("#player").submit(function(event){
    event.preventDefault();
    setPlayerName();
    showSelectPokemon();
  });
  $("#pokemon").submit(function(event){
    event.preventDefault();
    setPlayerPokemon();
    showMenu();
  });
  $("#menu button").click(function(){
    startNewBattle();
    showBattle();
  });
  $("#battle button[name=attack]").click(function(){
    doAttack();
  });
  $("#battle button[name=special-attack]").click(function(){
    doSpecialAttack();
  });
  $("#battle button[name=item]").click(function(){
    useItem();
  });
});
