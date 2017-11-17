export class Enemy {
  constructor(level) {
    this.name = "";
    this.level = level;
    this.attack = 3 + 2 * this.level;
    this.defense = 3 + 2 * this.level;
    this.currentHp = 5 + level * 5;
    this.maxHp = 5 + level * 5;
    this.element = "";
  }
  modifyHp(amount) {
    this.currentHp += amount;
    if(this.currentHp > this.maxHp) {
      this.currentHp = this.maxHp;
    }
    else if(this.currentHp < 0) {
      this.currentHp = 0;
    }
  }
  static generateRandomEnemy(level) {
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      return new GrassEnemy(level);
    }
    else if (randomNumber === 1) {
      return new WaterEnemy(level);
    }
    else if (randomNumber === 2) {
      return new FireEnemy(level);
    }
  }
}

export class GrassEnemy extends Enemy {
  constructor(level) {
    super(level);
    var possibleGrassNames = ["Tangela", "Oddish", "Chikorita", "Bellsprout", "Paras", "Roserade", "Leafeon", "Sunflora"];
    var randomNumber = Math.floor(Math.random() * possibleGrassNames.length);
    this.name = possibleGrassNames[randomNumber];
    this.element = "grass";
  }
}

export class WaterEnemy extends Enemy {
  constructor(level) {
    super(level);
    var possibleWaterNames = ["Poliwhirl", "Tentacool", "Psyduck", "Totodile", "Starmie", "Slowpoke", "Gyarados"];
    var randomNumber = Math.floor(Math.random() * possibleWaterNames.length);
    this.name = possibleWaterNames[randomNumber];
    this.element = "water";
  }
}

export class FireEnemy extends Enemy {
  constructor(level) {
    super(level);
    var possibleFireNames = ["Macargo", "Cyndaquil", "Magmar", "Growlithe", "Vulpix", "Rapidash", "Flareon"];
    var randomNumber = Math.floor(Math.random() * possibleFireNames.length);
    this.name = possibleFireNames[randomNumber];
    this.element = "fire";
  }
}
