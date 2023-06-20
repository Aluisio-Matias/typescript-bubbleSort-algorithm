"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        //super() is a reference to the constructor of the parent class
        //which in our case is the "Sorter" class
        super();
        this.data = data;
    }
    //the get keyword allows to call the method without the parenteses ()
    get length() {
        return this.data.length;
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    ;
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    ;
}
exports.NumbersCollection = NumbersCollection;
;
