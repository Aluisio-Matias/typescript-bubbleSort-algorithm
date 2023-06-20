import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    //super() is a reference to the constructor of the parent class
    //which in our case is the "Sorter" class
    super();
  }

  //the get keyword allows to call the method without the parenteses ()
   get length(): number {
    return this.data.length;
  };

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  };

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  };

};