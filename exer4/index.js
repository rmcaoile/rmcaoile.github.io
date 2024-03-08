// const math = require('./math.js');
// the import can be named anything

import math from './math.js'
import { snakeCase } from 'snake-case';

console.log(math.add(5, 2)); // 7
console.log(math.mul(5, 2)); // 10

console.log(snakeCase('thisIsInCamelCase'));

console.log(math.PI * (5 ** 2)); 
console.log(math.obj.one + math.obj.two); // 2