"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2];
// Test 1: Do a simple position switch in a 2 item array:
index_1.moveByIndex(0, 1, arr);
if (arrays_match_1.arraysMatch(arr, [2, 1]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 1A: Do the same as previous test, but with the indexes reversed:
arr = [1, 2];
var copy = arr;
index_1.moveByIndex(1, 0, arr);
if (arrays_match_1.arraysMatch(arr, [2, 1]))
    console.log('test 1A passed');
else
    console.log('test 1A FAILED');
// Test 2: make sure the array's reference wasn't broken:
if (arrays_match_1.arraysMatch(arr, copy))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: make sure it works when more than 2 items in array:
arr = [1, 2, 3, 4, 5, 6];
index_1.moveByIndex(1, 4, arr);
if (arrays_match_1.arraysMatch(arr, [1, 3, 4, 5, 2, 6]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure non-adjacent items are swapped properly:
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
index_1.moveByIndex(1, 3, arr);
if (arrays_match_1.arraysMatch(arr, ['a', 'c', 'd', 'b', 'e', 'f']))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5, 6];
index_1.moveByIndex(-1, 3, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 6, 4, 5]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(-1, 0, arr);
if (arrays_match_1.arraysMatch(arr, [5, 1, 2, 3, 4]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(-2, 1, arr);
if (arrays_match_1.arraysMatch(arr, [1, 4, 2, 3, 5]))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(0, -1, arr);
if (arrays_match_1.arraysMatch(arr, [2, 3, 4, 5, 1]))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(-1, -1, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5]))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(-1, -3, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 5, 3, 4]))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
index_1.moveByIndex(-1, -2, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 5, 4]))
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: make sure it works with nested arrays:
arr = [[1, 2], [3, 4], [5, 6]];
index_1.moveByIndex(-1, -2, arr);
if (arrays_match_1.arraysMatch(arr, [[1, 2], [5, 6], [3, 4]]))
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: make sure function errors when invalid currentIndex is passed:
var errorTriggered = false;
arr = [1, 2];
try {
    index_1.moveByIndex(2, 0, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 14: make sure function errors when invalid newIndex is passed:
errorTriggered = false;
arr = [1, 2];
try {
    index_1.moveByIndex(0, 2, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// Test 15: make sure function errors when something other than array is passed as third arg:
errorTriggered = false;
try {
    index_1.moveByIndex(0, 0, 'hello');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');
