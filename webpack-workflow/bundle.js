// test js loader and module loader
var math = require('./src/js/math');

var addSum = math.add(3,4);
var multiSum = math.multiply(3,4);
var minusRes = math.minus(7,3);

console.log('3 + 4 = ' + addSum);
console.log('3 * 4 = ' + multiSum);
console.log('7 - 3 = ' + minusRes);

// test css loader
require('./src/css/btn.css');

// test image loader
var img1 = require('./src/img/1.jpg');
var imgEle = document.createElement('img');
imgEle.src = img1;
