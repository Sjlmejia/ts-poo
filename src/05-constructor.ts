export class MyDate {

  constructor(
    public year: number = 1992,
    public month: number = 7,
    public day: number= 9) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}-${month}-${day}`;
  }
  private addPadding(value:number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  getDay(): number {
    return this.day;
  }
}

const myDate = new MyDate(2022, 1, 11);
console.log(myDate.printFormat());
console.log(myDate.getDay());


const myDate2 = new MyDate();
console.log(myDate2.printFormat());


const myDate3 = new MyDate(2021);
console.log(myDate3.printFormat());