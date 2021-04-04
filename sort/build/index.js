"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([2, 3, -4, 5, 6, -8, 0]);
numbers.sort();
console.log(numbers.data);
