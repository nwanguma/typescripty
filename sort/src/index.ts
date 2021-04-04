import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbers = new NumbersCollection([2, 3, -4, 5, 6, -8, 0]);

numbers.sort();

console.log(numbers.data);
