console.log('MAth.PI',Math.PI);
console.log('MAth.max',Math.max(1, 2, 3, 4, 5));

export class MyMath {
  static readonly PI =3.14;

  static max(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc > curr ? acc : curr,0);
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(1, 2, 3, 4, 5));
const numbers = [1, 2, 3, 4, 5, 8, 9, 10];
console.log('MyMath', MyMath.max(...numbers));
