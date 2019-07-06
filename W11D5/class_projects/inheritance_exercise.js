Function.prototype.inherits = function(parentClass){
   function Surrogate(){};
   
   Surrogate.prototype = parentClass.prototype;
   this.prototype = new Surrogate();
   this.prototype.constructor = this;

};
// The Ship and Asteroid prototypes should not be instances of MovingObject.

// function Animal(name){
//    this.name = name;
// };

// Animal.prototype.eat = function() {
//     console.log(`${this.name} Eats`);
// }

// function Cat(name){
//     this.name = name;
// };

// Cat.inherits(Animal);

// Cat.prototype.meow = function() {
//     console.log(`${this.name} Meows`);
// };

// const lola = new Cat("lola");

// lola.meow();
// lola.eat();


function MovingObject() { }
MovingObject.prototype.movesSlowly = function () {
    console.log(` moves at 1 knot an hour`);
};
MovingObject.prototype.movesFast = function () {
    console.log(` moves at 15 knot an hour`);
};

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }


Asteroid.inherits(MovingObject);

Asteroid.prototype.movesRealFast = function () {
    console.log(` moves at 1 LightYear an hour`);
};






a = new Asteroid;
a.movesFast(); 

s = new Ship;
a.movesRealFast();