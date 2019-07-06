// Define an empty array, numbers.
// Defines a function, _curriedSum that:
// Closes over numArgs and numbers.
// Takes a single number as an argument.
// Appends this to numbers each time.
// If numbers.length === numArgs, it sums the numbers in the array and returns the result.
//     Else, it returns itself.
// Returns _curriedSum.


function curriedSum(numArgs){
    numbers = new Array;
    return function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs) {
            sum = 0;
            numbers.forEach(el => sum += el );
            return sum
        }
        else {
             return _curriedSum;
        }
    } 
}

// If you're confused, think of it this way: _curriedSum keeps collecting arguments and returning itself until it has enough arguments, at which point it actually does the required work of summing.



//console.log(curriedSum(2)(2)(4));

//Show us the call stack


// curriedSum(2)
    // return fn (1)
        // return fn (2)


Function.prototype.curry = function(numArgs) {
    const numbers = new Array;
    const that = this;
    return function _curriedFn(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that.apply(null, numbers)
        }
        else {
            return _curriedFn;
        }
    }
}

// Function.prototype.myBind = function (context, ...bindArgs) {

//     return (...args) => {
//         return this.apply(context, bindArgs.concat(args));
//     }
// };

// const boundPlay = whiskers.playsWith.myBind(curie, "A");
// boundPlay("B", "C", "D");


a = 2;
b = 3;

function sum(...args){
  sum=0;
  args.forEach(el => sum+=el)
  return sum
}

function multiply(...args) {
    product = 1;
    args.forEach(el => product *= el)
    return product
}

function mod(...args) {
    mod = args[0];
    args = args.slice(1);
    args.forEach(el => mod %= el)
    return mod;
}

console.log( "Sum: ", sum.curry(4)(2)(5)(10)(11));
console.log("Multiply: ", multiply.curry(4)(2)(5)(10)(11));

console.log("Mod: ", mod.curry(4)(1559)(44)(29)(2));

// n=5;
// function testing (n) {
//     console.log("N: ", n);
//     return 1;
// }

// Function.prototype.test = function (ele) {
//     console.log("this : ", this, "ele: ", ele)
//     return (callArg) => {
//        return this.call( ele, 3)
//     }
//     return console.log("test");
// }

// console.log(testing.test("x")("y"));


// // console.log("CurrySum: ", sum.curry(3)(2)(4)(5));