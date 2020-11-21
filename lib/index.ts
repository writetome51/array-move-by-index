import { append } from '@writetome51/array-append-prepend';
import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';


// Moves an item's position in `array`.
// `currentIndex` and `newIndex` can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {
	let arrLength = array.length;
	errorIfIndexNotValid(newIndex, arrLength); // validates `newIndex` and `array`.

	if (newIndex < 0) newIndex = (arrLength + newIndex);

	let itemBeingMoved = getAndRemoveByIndex(currentIndex, array); // validates `currentIndex`.

	if (isLastIndex(newIndex)) append(itemBeingMoved, array);

	else insertAt(newIndex, [itemBeingMoved], array);


	function isLastIndex(i): boolean {
		return i === (arrLength - 1);
	}
}
