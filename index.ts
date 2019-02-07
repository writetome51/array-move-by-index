import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';

// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.

export function moveByIndex(currentIndex, newIndex, array): void {

	ifIndexValid_getActionResult(
		newIndex,
		() => {
			if (newIndex < 0) newIndex = (array.length + newIndex);

			// getAndRemoveByIndex() validates currentIndex.
			let itemBeingMoved = getAndRemoveByIndex(currentIndex, array);
			let lastItemMustBeRemoved = false;

			if (newIndex === array.length) {
				lastItemMustBeRemoved = true;
				array.length += 1; // appends undefined item temporarily to array.
			}
			insertAt(newIndex, [itemBeingMoved], array);
			if (lastItemMustBeRemoved) removeByIndex(-1, array);
		},
		array
	);
}