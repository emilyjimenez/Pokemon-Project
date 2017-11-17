import {Pokemon} from './../js/Pokemon.js';

export class Item {
  constructor() {
    this.name = "";
  }
  use(target) {

  }
}

export class Potion extends Item {
  constructor(){
    super();
    this.name = "Potion";
    this.healValue = 15;
  }
  use(target) {
    if (target instanceof Pokemon) {
      target.modifyHp(this.healValue);
      return true;
    }
    else {
      return false;
    }
  }
}

export class SuperPotion extends Item {
  constructor(){
    super();
    this.name = "Super Potion";
    this.healValue = 30;
  }
  use(target) {
    if (target instanceof Pokemon) {
      target.modifyHp(this.healValue);
      return true;
    }
    else {
      return false;
    }
  }
}
