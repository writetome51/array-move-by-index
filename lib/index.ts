import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';


// Moves an item's position in `array`.
// `currentIndex` and `newIndex` can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	errorIfIndexNotValid(newIndex, array.length); // validates newIndex and array.

	// Make sure newIndex is positive to simplify algorithm.
	// This must be done before array's length changes.
	if (newIndex < 0) newIndex = (array.length + newIndex);

	// getAndRemoveByIndex() validates currentIndex.
	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);

	if (newIndex === array.length) array.push(itemBeingMoved);

	else insertAt(newIndex, [itemBeingMoved], array);
}
