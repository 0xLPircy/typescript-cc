"use strict";
// basic Types
let id = 5;
let company = "Taveesha";
let isPublished = true;
let x = "hi";
let age = 3;
// arrays
let ids = [1, 2, 3, 4];
let arr = [1, true, "text"];
// tuple
let person = [1, "text", false];
// tuple array, ie array of tuples
let employee;
employee = [
    [1, "esha"],
    [2, "pircy"],
    [3, "lil"],
];
// union, be more than 1 type
let pid;
pid = [1, 2];
pid = "22";
pid = false;
// enum, set of named constants (?)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = -3] = "Up";
    Direction1[Direction1["Down"] = -2] = "Down";
    Direction1[Direction1["Left"] = -1] = "Left";
    Direction1[Direction1["Right"] = 0] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
// can have type in or out
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
let cutomerId = cid; //assigning customerId as number
// OR
let customerId = cid;
console.log(customerId);
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
