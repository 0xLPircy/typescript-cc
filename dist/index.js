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
// enum, sset of named constants (?)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
