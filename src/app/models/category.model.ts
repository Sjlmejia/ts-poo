export enum AccessType {
  PRIVATE = 'private',
  Public = 'public',
}


export interface Category {
  id:    number;
  name:  string;
  image: string;
  access?:AccessType
}