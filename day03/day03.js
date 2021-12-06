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
console.log(lines);
// Solve things!
var digits= [];
var majority = '';
var minority = '';

for (var i = 0; i < lines[0].length; i++) {
  var digit = '';
  for (var j = 0; j < lines.length; j++) {
    digit += lines[j][i];
  }
  digits.push(digit);
}

for (var k = 0; k < digits.length; k++) {
  var digitSorted = digits[k].split('').sort();
  if (digitSorted[Math.floor(digitSorted.length / 2)] === '0') {
    majority += '0';
    minority += '1';
  } else {
    majority += '1';
    minority += '0';
  }
}

console.log(parseInt(majority, 2) * parseInt(minority, 2));
console.log(majority);

//PART TWO
var OxygenFilter = function (lines) {
  var i = 0;
  var oxygenInput = lines.slice();

  while (oxygenInput.length > 1) {
    var one = 0;
    var zero = 0;
    var oxygen = '';

    for (var k = 0; k < oxygenInput.length; k++) {
      oxygenInput[k][i] === '0' ? zero++ : one++;
    }
    one === zero ? oxygen = '1' : (one > zero ? oxygen = '1' : oxygen = '0');

    oxygenInput = oxygenInput.filter(function(line) {
      return line[i] === oxygen;
    });
    i++
  }

  return oxygenInput[0];
};

var Co2Filter = function (lines) {
  var i = 0;
  var oxygenInput = lines.slice();

  while (oxygenInput.length > 1) {
    var one = 0;
    var zero = 0;
    var oxygen = '';

    for (var k = 0; k < oxygenInput.length; k++) {
      oxygenInput[k][i] === '0' ? zero++ : one++;
    }
    one === zero ? oxygen = '0' : (one > zero ? oxygen = '0' : oxygen = '1');

    oxygenInput = oxygenInput.filter(function(line) {
      return line[i] === oxygen;
    });
    i++
  }

  return oxygenInput[0];
};

console.log(OxygenFilter(lines));
console.log(Co2Filter(lines));
console.log(parseInt(OxygenFilter(lines), 2) * parseInt(Co2Filter(lines), 2));

/*
node day03.js sample
node day03.js input
*/