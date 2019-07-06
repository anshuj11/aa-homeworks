//Write a sum function that takes any number of arguments:
//Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

// const sum = function (){

// }
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length-1; i++) {
        sum += args[i];
    }
    return sum;
}

function sum(){
    let sum = 0;
    for(let i=0; i< arguments.length; i++ ){
        sum+=arguments[i];
    }
    return sum;
};

Function.prototype.myBind = function (context, ...bindArgs){
    
    return (...args) =>  {
    return this.apply(context, bindArgs.concat(args));
    }
};

Function.prototype.myBind = function (context) {
    debugger;
    bindArgs = [].slice.call(arguments, 1);
    // args = Array.from(arguments);
    // args = args.slice(1); 
    that = this  
    return function(){
        // callArgs = [].slice.call(arguments);
        callArgs = Array.from(arguments);
        debugger;
        return that.apply(context, bindArgs.concat(callArgs));
    }
};

class Cat {
    constructor(name){
        this.name = name;
    }
    meow(){
        console.log(`${this.name} goes Meow`);
    }
    playsWith(p1, p2, p3){
        console.log(`${this.name} plays with ${p1}, ${p2} and ${p3}`);
    }
};


// function whatIsThisName () {
//     console.log(this.name)
// }

// cat = {
//     name: "test"
// };

// console.log(whatIsThisName.myBind(cat)());

const curie = new Cat("Curie");
const whiskers = new Cat("Whiskers");
// const unBoundMeow = curie.meow;
// const boundMeow = curie.meow.myBind(whiskers);


const boundPlay = whiskers.playsWith.myBind(curie, "A");
boundPlay("B", "C", "D");
//boundMeow();

//console.log(sum(1,2,3,4,5));