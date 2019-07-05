const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    
    // If numsLeft > 0, then:
    if (numsLeft > 0){
        // Prompt the user for a number(use reader).
        // Pass a callback that:
        reader.question("Enter number: ", function (numString1) {
            // Uses parseInt to parse the input.
            sum += parseInt(numString1);
            numsLeft--;
            // Increment the sum and console.log it.
            console.log(`Partial Sum: ${sum}`);
            // Recursively calls addNumbers again, passing in:
            // the increased sum,
            // the decreased numsLeft,
            // and the same completionCallback
            addNumbers(sum, numsLeft, completionCallback);
            
        }); 
    } else {
    // If numsLeft === 0, call completionCallback(sum)
    // so that the total sum can be used.
    completionCallback(sum)
    reader.close();
 }
}


//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));




// const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    reader.question(`say Y if ${el1} > ${el2}, say N otherwise `, function (user_response) {
    // callback if true; else false.
    (user_response === "Y") ? callback(true) : callback(false);
    });

};

// askIfGreaterThan(45, 12, function(bigger){
//    if(bigger)
//     console.log("ABC");
//    else
//      console.log("DEF");  

// });


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps , outerBubbleSortLoop ) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if ( i === arr.length - 1 ){
        outerBubbleSortLoop(madeAnySwaps)
    }else{
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
        askIfGreaterThan(arr[i], arr[i+1], function swap(bigger) {
            if (bigger){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;
               // console.log("Arr: ", arr);
            }
            i++;
            innerBubbleSortLoop(arr, i, madeAnySwaps , outerBubbleSortLoop);
        });

    }
}



// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps){
           madeAnySwaps = false;
           innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        }else {
           sortCompletionCallback(arr) ;  
        }
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true)

}

absurdBubbleSort([2,3, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});