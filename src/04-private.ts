export class MyDate {
  year: number;
  month: number;
  private day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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
