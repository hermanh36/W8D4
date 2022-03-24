const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      reader.close();
    }
  }
}




function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
      if (isGreaterThan){
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
          madeAnySwaps = true;
          innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);  
          
      }else { 
        madeAnySwaps = false;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop); 
      }
    });
  }else { 

    outerBubbleSortLoop(madeAnySwaps);
  }
  
}

absurdBubbleSort([1,3,2,5,4], function(arr) {
  console.log(arr);
});



function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
    if (answer === "yes"){
      callback(true);
    }else if (answer === "no"){
      callback(false);
    }else {
      console.log("Incorrect input.  Please say 'yes' or 'no' ");
      askIfGreaterThan(el1, el2, callback)
    }
  });
}

// askIfGreaterThan(3,4, function(ele){
//   console.log(ele);
// });  