import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { errorIfIndexNotValid }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';


// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	errorIfIndexNotValid(newIndex, array);

	// We need to convert newIndex to positive num to simplify algorithm.
	if (newIndex < 0) newIndex = (array.length + newIndex);

	// getAndRemoveByIndex() validates currentIndex.
	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);
	let lastItemMustBeRemoved = false;

	if (newIndex === array.length) {
		array.length += 1; // appends undefined item temporarily to array.
		lastItemMustBeRemoved = true;
	}
	insertAt(newIndex, [itemBeingMoved], array);
	if (lastItemMustBeRemoved) removeByIndex(-1, array);
}