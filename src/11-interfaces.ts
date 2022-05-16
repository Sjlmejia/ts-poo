export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: 'test',
//   password: '123',
//   port: 3306,
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('Postgres connected');
  }

  disconnect(): void {
    console.log('Postgres disconnected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}

class PostgDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('Postgres connected');
  }

  disconnect(): void {
    console.log('Postgres disconnected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}
