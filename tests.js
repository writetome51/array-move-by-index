"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [1, 2];
var copy = arr;
// Test 1: Do a simple position switch in a 2 item array:
index_1.moveByIndex(0, 1, arr);
console.log(arr);
console.log(copy);
arr = [1, 2, 3, 4];
index_1.moveByIndex(2, 3, arr);
console.log(arr);
