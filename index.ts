import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { removeByIndex } from '@writetome51/array-remove-by-index';

// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);
	// We need to do this in case newIndex is greater than last index of array:
	array.length = array.length + 1;
	insertAt(newIndex, [itemBeingMoved], array);
	removeByIndex(-1, array);
}