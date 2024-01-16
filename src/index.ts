// basic Types
let id: number = 5;
let company: string = "Taveesha";
let isPublished: boolean = true;
let x: any = "hi";
let age: number = 3;

// arrays
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "text"];

// tuple
let person: [number, string, boolean] = [1, "text", false];

// tuple array, ie array of tuples
let employee: [number, string][];
employee = [
  [1, "esha"],
  [2, "pircy"],
  [3, "lil"],
];

// union, be more than 1 type
let pid: string | number | boolean | number[];
pid = [1, 2];
pid = "22";
pid = false;

// enum, sset of named constants (?)
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
