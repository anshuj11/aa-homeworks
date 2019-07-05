Function.prototype.myBind = function(context){
    return function () {
      that = this;
      console.log ("This : ", this);
      boundContext = context;
      console.log("boundC: ", boundContext );
      Function.prototype.apply(boundContext, [that]);
    }
}
   
// Cat.prototype.meow(name){
    
// };

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
    //return 1;
};

const lamp = new Lamp();

//turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
console.log(myBoundTurnOn);

//boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"






// function dinerBreakfast() {
//     let order = "I'd like cheesy scrambled eggs please.";
//     console.log(order);

//     return function (addFoodItem) {
//         order = `${order.slice(0, order.length - 8)} and ${addFoodItem} please.`;
//         console.log(order);
//     }
// }

// dinerBreakfast();
// let orderBreakfast = dinerBreakfast();

// orderBreakfast("toast");
// dinerBreakfast();