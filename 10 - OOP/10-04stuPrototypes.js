// TODO: Add a comment describing what kind of function this is
//This is an object constructor
function Character(name, type, age, strength, hitpoints) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  
  // TODO: Add a comment describing the purpose of `.prototype` in this method declaration
  //printStats function inherits the properties of the Character function
  Character.prototype.printStats = function () {
    console.log(
      `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
    );
    console.log('\n-------------\n');
  };
  
  // TODO: Add a comment describing the functionality of this method
  //Character is given is Alive function to console log Is alive! if
  //hitpoints are . 0
  Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  };
  
  // TODO: Add a comment describing the functionality of this method
  // Character 2 loses hitpoints depending on strength of Character
  Character.prototype.attack = function (character2) {
    character2.hitpoints -= this.strength;
  };
  
  // TODO: Add a comment describing the functionality of this method
  //Adds maths to properties if Character is given .levelup prototype
  Character.prototype.levelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
  
  const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
  const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);
  
  warrior.printStats();
  rogue.printStats();
  
  rogue.attack(warrior);
  
  // TODO: Add a comment describing what you expect to see printed in the console
  //Crusher, warrior age 25 strength 10 hitpoints 55
  warrior.printStats();
  
  // TODO: Add a comment describing what you expect to see printed in the console
  //Crusher is still alive!
  warrior.isAlive();
  
  rogue.levelUp();
  
  // TODO: Add a comment describing what you expect to see printed in the console
  //Dodger, rogue, 24, 25, 75
  rogue.printStats();
  