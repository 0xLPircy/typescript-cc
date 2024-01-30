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

// enum, set of named constants (?)
enum Direction1 {
  Up = -3,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);

enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

// Objects
type User = {
  id: number;
  name: string;
};
// can have type in or out
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
let cutomerId = <number>cid; //assigning customerId as number
// OR
let customerId = cid as number;
console.log(customerId);

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// if return value
console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}
log("hello");

// Interface, specific struct to a object or function
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "John",
};
// define function as interface
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// INTERFACE FOR CLASS
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is Registered`;
  }
}
const brad = new Person(1, "Esha");
console.log(brad.register());

// sub classes
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shay", "Developer");

console.log(emp.register());
