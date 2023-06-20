import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const arrayToSort: number[] = [10000, 1000, 100, 10, 5, 3, -5, 0, -1];
const numbersCollection = new NumbersCollection(arrayToSort);
numbersCollection.bubbleSort();
console.log(`Sorted numbers Array: ${numbersCollection.data}`);

const stringToSort: string = 'yXedcbaA';
const charactersCollection = new CharactersCollection(stringToSort);
charactersCollection.bubbleSort();
console.log(`Sorted string alphabetically: ${charactersCollection.data}`);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(250);
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-5);
linkedList.add(0);
linkedList.bubbleSort();
console.log('Sorted LinkedList:');
linkedList.print();