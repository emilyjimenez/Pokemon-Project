export class Pokemon {
  constructor() {
    this.species = "";
    this.level = 1;
    this.xp = 0;
    this.attack = 0;
    this.specialAttack = 0;
    this.defense = 0;
    this.currentHp = 0;
    this.maxHp = 0;
    this.element = "";
  }
  gainXp(amount) {
    this.xp += amount;
    while (this.xp >= 100) {
      this.level++;
      this.attack += 2;
      this.specialAttack += 4;
      this.defense += 2;
      this.currentHp += 5;
      this.maxHp += 5;
      this.xp -= 100;
    }
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
}

export class Bulbasaur extends Pokemon {
  constructor() {
    super();
    this.species = "Bulbasaur";
    this.attack = 5;
    this.specialAttack = 10;
    this.defense = 5;
    this.currentHp = 15;
    this.maxHp = 15;
    this.element = "grass";
  }
}

export class Squirtle extends Pokemon {
  constructor() {
    super();
    this.species = "Squirtle";
    this.attack = 5;
    this.specialAttack = 10;
    this.defense = 7;
    this.currentHp = 10;
    this.maxHp = 10;
    this.element = "water";
  }
}

export class Charmander extends Pokemon {
  constructor() {
    super();
    this.species = "Charmander";
    this.attack = 7;
    this.specialAttack = 14;
    this.defense = 5;
    this.currentHp = 10;
    this.maxHp = 10;
    this.element = "fire";
  }
}
