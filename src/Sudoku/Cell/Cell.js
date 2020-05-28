class Cell {
    constructor(cellValue, rowNumber, columnNumber, isUserEditable = false) {
        this.cellValue = cellValue;
        this.rowNumber = rowNumber;
        this.columnNumber = columnNumber;
        this.isUserEditable = isUserEditable;
        this.hasConflict = false;
    }
}