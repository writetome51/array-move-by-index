import { moveByIndex } from './index';
import {insertAt} from '@writetome51/array-insert-at';


let arr = [1, 2];
let copy = arr;

// Test 1: Do a simple position switch in a 2 item array:
moveByIndex(0, 1, arr);
console.log(arr);
console.log(copy);


arr = [1, 2, 3, 4];

moveByIndex(2, 3, arr);
console.log(arr);
