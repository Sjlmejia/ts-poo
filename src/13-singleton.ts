export class MyService {
  static instace: MyService | null = null;
  private constructor(private  name: string) {}

  getName(): string {
    return this.name;
  }

  static create(name: string) {
    if(MyService.instace === null) {
      console.log('create');
      MyService.instace = new MyService(name);
    }
    return MyService.instace;
  }
}

const myService1 =  MyService.create('myService1');
console.log(myService1.getName());

const myService2 = MyService.create('myService2');
console.log(myService2.getName());

console.log(myService1 === myService2);