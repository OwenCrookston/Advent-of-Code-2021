const path = require('path')
const fs = require('fs')

const inputFileName = process.argv[2]
if (!inputFileName) {
  console.log(`ERROR: Expected file name. Run using:\n\tnode ${path.basename(process.argv[1])} <input_file>`)
  return
}

const fileContents = fs.readFileSync(inputFileName, {encoding: 'utf8'})

// lines is an array of strings
const lines = fileContents.trim().split('\n')

// Solve things!
//Part 1
var counter = 0;

for (var i = 1; i < lines.length; i++) {
 if (Number(lines[i]) > Number(lines[i - 1])) {
   counter++
 }
}

console.log(counter);

//Part 2
var shiftingCount = 0;

for (var k = 3; k < lines.length; k++) {
  var previousWindow = Number(lines[k - 3]) + Number(lines[k - 2]) + Number(lines[k - 1]);
  var currentWindow = Number(lines[k - 2]) + Number(lines[k - 1]) + Number(lines[k]);

  if (currentWindow > previousWindow) {
    shiftingCount++
  }
}

console.log(shiftingCount);
