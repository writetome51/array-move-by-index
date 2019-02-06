"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.
function moveByIndex(currentIndex, newIndex, array) {
    var itemBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(currentIndex, array);
    // We need to do this in case newIndex is greater than last index of array:
    array.length = array.length + 1;
    array_insert_at_1.insertAt(newIndex, [itemBeingMoved], array);
    array_remove_by_index_1.removeByIndex(-1, array);
}
exports.moveByIndex = moveByIndex;
