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
var aim = 0;
var x = 0;
var y = 0;
var directions = [];
for (var i = 0; i < lines.length; i++) {
  directions.push(lines[i].split(' '));
}

directions.forEach(function(direction) {
  if (direction[0] === 'forward') {
    x += Number(direction[1]);
    y += aim * Number(direction[1]);
  } else if (direction[0] === 'down') {
    aim += Number(direction[1]);
  } else if (direction[0] === 'up') {
    aim -= Number(direction[1]);
  }
});

console.log(x, y, x*y);
/*
node day02.js sample
node day02.js input
*/