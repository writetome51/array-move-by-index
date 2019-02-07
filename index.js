"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.
function moveByIndex(currentIndex, newIndex, array) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(newIndex, array);
    // We need to guarantee newIndex is positive to simplify algorithm.
    if (newIndex < 0)
        newIndex = (array.length + newIndex);
    // getAndRemoveByIndex() validates currentIndex.
    var itemBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(currentIndex, array);
    if (newIndex === array.length)
        array.push(itemBeingMoved);
    else
        array_insert_at_1.insertAt(newIndex, [itemBeingMoved], array);
}
exports.moveByIndex = moveByIndex;
