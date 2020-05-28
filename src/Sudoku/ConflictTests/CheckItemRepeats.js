export default function checkItemRepeats(array) {
    let indexForItem = {};
    array.forEach((element, index) => {
        let cellValue = element.cellValue;
        if (cellValue !== '' && indexForItem.hasOwnProperty(cellValue)) {
            array[index].hasConflict = true
            array[indexForItem[cellValue]].hasConflict = true
        }
        indexForItem[cellValue] = index;
    });
}