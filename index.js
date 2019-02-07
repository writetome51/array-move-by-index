"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.
function moveByIndex(currentIndex, newIndex, array) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(newIndex, array);
    // We need to convert newIndex to positive num to simplify algorithm.
    if (newIndex < 0)
        newIndex = (array.length + newIndex);
    // getAndRemoveByIndex() validates currentIndex.
    var itemBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(currentIndex, array);
    var lastItemMustBeRemoved = false;
    if (newIndex === array.length) {
        array.length += 1; // appends undefined item temporarily to array.
        lastItemMustBeRemoved = true;
    }
    array_insert_at_1.insertAt(newIndex, [itemBeingMoved], array);
    if (lastItemMustBeRemoved)
        array_remove_by_index_1.removeByIndex(-1, array);
}
exports.moveByIndex = moveByIndex;
