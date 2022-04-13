class Bee {
    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.hp = 0;
        this.damage = 0;
        this.alive = true;
        this.resetHp =  0;
    }
    decrease() {
        this.hp -= this.damage;
    }
    checkAlive() {
        if (this.hp <= 0) {
            this.alive = false;
        }
    }
    resetBee(){
        this.alive = true;
        this.hp = this.resetHp
    }
}

class Queen extends Bee{
    constructor(name,id){
        super(name,id)
        this.hp = 100;
        this.damage = 8;
        this.resetHp = 100;
    }
}

class Worker extends Bee{
    constructor(name,id){
        super(name,id)
        this.hp = 75;
        this.damage = 10;
        this.resetHp = 75;
    }
}

class Drone extends Bee{
    constructor(name,id){
        super(name,id)
        this.hp = 50;
        this.damage = 12;
        this.resetHp = 50;
    }
}
//if we want to create new role, you can create class like Queen,Worker or Drone

const queen = new Queen("queen", 0);
const workers = new Array(5)
  .fill("")
  .map((_, i) => new Worker('worker',  1 + i));
const drones = new Array(8)
  .fill("")
  .map((_, i) => new Drone('drone', 7 + i));

export const data = [queen, ...workers, ...drones];

export const getRandomInt = (items) => {
  return Math.floor(Math.random() * items);
};
