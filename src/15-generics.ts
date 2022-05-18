import { Dog } from './09-protected'

// function getVAlue(value:unknown) {
//   return value;
// }

// function getVAlue(value:string | number) {
//   return value;
// }

function getValue<myType>(value: myType) {
  return value
}
getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
const fifi = new Dog('Fifi', 'Labrador');
getValue<Dog>(fifi);