"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
// Moves an item's position in array.
// currentIndex and newIndex can both be negative or positive.
function moveByIndex(currentIndex, newIndex, array) {
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(newIndex, function () {
        if (newIndex < 0)
            newIndex = (array.length + newIndex);
        // getAndRemoveByIndex() validates currentIndex.
        var itemBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(currentIndex, array);
        var lastItemMustBeRemoved = false;
        if (newIndex === array.length) {
            lastItemMustBeRemoved = true;
            array.length += 1; // appends undefined item temporarily to array.
        }
        array_insert_at_1.insertAt(newIndex, [itemBeingMoved], array);
        if (lastItemMustBeRemoved)
            array_remove_by_index_1.removeByIndex(-1, array);
    }, array);
}
exports.moveByIndex = moveByIndex;
