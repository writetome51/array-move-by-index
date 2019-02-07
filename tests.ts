import { moveByIndex } from './index';
import { insertAt } from '@writetome51/array-insert-at';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = [1, 2];
let copy = arr;

// Test 1: Do a simple position switch in a 2 item array:
moveByIndex(0, 1, arr);

if (arraysMatch(arr, [2, 1])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2: make sure the array's reference wasn't broken:
if (arraysMatch(arr, copy)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure it works when more than 2 items in array:
arr = [1, 2, 3, 4];
moveByIndex(2, 3, arr);

if (arraysMatch(arr, [1, 2, 4, 3])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure non-adjacent items are swapped properly:
arr = [1, 2, 3, 4, 5];
moveByIndex(1, 3, arr);

if (arraysMatch(arr, [1, 3, 4, 2, 5])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(-1, 3, arr);

if (arraysMatch(arr, [1, 2, 3, 5, 4])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(-1, 0, arr);

if (arraysMatch(arr, [5, 1, 2, 3, 4])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: make sure nothing goes wrong when currentIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(-2, 1, arr);

if (arraysMatch(arr, [1, 4, 2, 3, 5])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(0, -1, arr);

if (arraysMatch(arr, [2, 3, 4, 5, 1])) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(-1, -1, arr);

if (arraysMatch(arr, [1, 2, 3, 4, 5])) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10: make sure nothing goes wrong when newIndex argument is negative:
arr = [1, 2, 3, 4, 5];
moveByIndex(-1, -3, arr);

if (arraysMatch(arr, [1, 2, 5, 3, 4])) console.log('test 10 passed');
else console.log('test 10 FAILED');


// should error:
arr = [1,2];
moveByIndex(0, 2, arr);