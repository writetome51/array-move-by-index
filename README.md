# moveByIndex()

## moveByIndex(currentIndex, newIndex, array): void

Moves an item, identified by its <b>currentIndex</b>, to <b>newIndex</b>, in <b>array</b>.  
<b>currentIndex</b> and <b>newIndex</b> can both be negative or positive.  
Does not change array length.


## Examples
```
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

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/array-move-by-index
```

## Loading
```
// If using TypeScript:
import { moveByIndex } from '@writetome51/array-move-by-index';
// If using ES5 JavaScript:
var moveByIndex = require('@writetome51/array-move-by-index').moveByIndex;
```
