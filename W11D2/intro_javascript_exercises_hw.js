var titleize = function(arr){
    arr = arr.map(el=>el.slice(0,1).toUpperCase()+el.slice(1))
    arr.forEach(el=> console.log(el))
}


console.log ("Running titleize test")
titleize(["my", "first", "homework"])

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function Elephant(name, height, tricks ){
   this.name = name,
   this.height = height,
   this.tricks = tricks,

    function paradeHelper() {
        console.log(`${this.name} the elephant, is trotting by!`);
    }

}

// function paradeHelper(ele) {
//     console.log(`${ele.name} the elephant, is trotting by!`);
// }

Elephant.prototype.trumpet = function(){
    console.log(`${ this.name } the elephant goes phrRRRRRRRRRRR!!!!!!!`)
}

Elephant.prototype.grow = function(){
    this.height += 12
    console.log(`${this.name } the elephant, is now ${this.height} inches tall`)
}
Elephant.prototype.addTrick = function (new_trick) {
    this.tricks.push(new_trick)
    console.log(`${this.name} the elephant, is now ${this.tricks[this.tricks.length-1]} too`)
}

Elephant.prototype.play = function () {
    
    num = getRandomInt(0, this.tricks.length)
    trick = this.tricks[ num]
    console.log(`${this.name} the elephant, is  ${trick}`)
}



const polo = new Elephant("Polo", 96, ["throwing a ball", "spraying water"])
polo.trumpet()
polo.grow()
polo.addTrick("snuggling")
polo.play()

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

ellie.trumpet()
charlie.grow()
kate.addTrick("snuggling")
micah.play()

// herd.forEach( el => el.paradeHelper() );