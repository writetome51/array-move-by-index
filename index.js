"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.
function moveByIndex(currentIndex, newIndex, array) {
    var itemBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(currentIndex, array);
    array_insert_at_1.insertAt(newIndex, [itemBeingMoved], array);
}
exports.moveByIndex = moveByIndex;
