"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        //super() is a reference to the constructor of the parent class
        //which in our case is the "Sorter" class
        super();
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    ;
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
;
