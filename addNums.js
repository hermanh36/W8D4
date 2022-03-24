const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
 if(numsLeft === 0) {
   reader.close();
   return completionCallback(sum);
 }
 reader.question("Give me a number", function(sums) {
  numsLeft--;
  sum+=parseInt(sums);
  console.log(`Current sum is ${sum}`);
  return addNumbers(sum,numsLeft,completionCallback);
 });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));





