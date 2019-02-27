import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { errorIfIndexNotValid }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';


// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	errorIfIndexNotValid(newIndex, array);

	// We need to guarantee newIndex is positive to simplify algorithm.
	if (newIndex < 0) newIndex = (array.length + newIndex);

	// getAndRemoveByIndex() validates currentIndex.
	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);

	if (newIndex === array.length) array.push(itemBeingMoved);

	else insertAt(newIndex, [itemBeingMoved], array);
}
