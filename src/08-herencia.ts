export class Animal  {
  constructor(public name: string) {}

  move() {
    return `${this.name} is moving`;
  }

  greeting() {
    return `${this.name} is greeting`;
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
    ) {
      super(name);
  }
  woof(times: number) {
    for(let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}
const fifi = new Animal('fifi');
console.log(fifi.move());

const cheais = new Dog('cheais', 'nico');
cheais.move();
console.log(cheais.greeting());
cheais.woof(3);
console.log(cheais.owner);