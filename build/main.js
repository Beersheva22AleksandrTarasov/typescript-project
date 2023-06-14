"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
var n = 10;
n = 20;
var num = 12;
num = 100;
num = "abc";
var ar = [];
ar[0] = "kuku";
ar[1] = "2";
ar.push("abc");
var ar1 = ['abc', 10];
ar1[0] = 'lmn';
var ar2 = [];
var map1 = new Map([["abc", 40]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1])); });
function f(a) {
    return typeof a == "number" ? a * 2 : +(a + 2);
}
var comp = function (num1, num2) {
    return num1 - num2;
};
displayPerson({ id: 123, date: "2000-10-10", name: "Vasya" });
function displayPerson(prs) {
    var _a;
    prs.gender && console.log((_a = prs.gender) === null || _a === void 0 ? void 0 : _a.substring(0, 3));
}
function cipher(test, key) {
    return "";
}
function decipher(test, key) {
    return "";
}
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
//# sourceMappingURL=main.js.map