export class Animal  {
  constructor(protected name: string) {}

  move() {
    console.log( `${this.name} is moving`);
  }

  greeting() {
    return `${this.name} is greeting`;
  }

  protected doSomething() {
    console.log(`${this.name} is doing something`);
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
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log(`${this.name} is running as dog`);
    super.move()
  }
}

const cheais = new Dog('cheais', 'nico');
cheais.woof(1);
cheais.move();