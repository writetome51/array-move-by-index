# moveByIndex(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Moves an item from its `currentIndex` to `newIndex`, in `array`.  
`currentIndex` and `newIndex` can both be negative or positive.  


## Examples
```js
let arr = [10, 20];
moveByIndex(0, 1, arr);
// arr is now [20, 10]

arr = ['a', 'b', 'c', 'd', 'e'];
moveByIndex(1, 3, arr);
// arr is now ['a', 'c', 'd', 'b', 'e']

arr = [1, 2, 3, 4, 5];
moveByIndex(0, -1, arr);
// arr is now [2, 3, 4, 5, 1]

arr = [1, 2, 3, 4, 5];
moveByIndex(-1, -2, arr);
// arr is now [1, 2, 3, 5, 4]
```

## Installation
`npm i  @writetome51/array-move-by-index`

## Loading
```js
import { moveByIndex } from '@writetome51/array-move-by-index';
```
