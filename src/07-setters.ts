export class MyDate {

  constructor(
    public year: number = 1992,
    private _month: number = 7,
    private _day: number= 9) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._day += amount;
    } else if (type === 'months') {
      this._month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    
    return this.year % 4 === 0;
  }
  get month(): number {
    return this._month;
  }

  set month(value: number) {
    if(value >= 1 && value <= 12) {
      this._month = value;
    } else {
      throw new Error('Invalid month');
    }
  }
}

const myDate = new MyDate(2000, 1, 11);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log(myDate.isLeapYear);
myDate.month = 12;
console.log(myDate.month);
myDate.month = 10;
console.log(myDate.month);