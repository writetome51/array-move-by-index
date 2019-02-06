import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';

// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);
	insertAt(newIndex, [itemBeingMoved], array);
}