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
var MIN_CODE = 32;
var MAX_CODE = 127;
var ALPHABET_LENGTH = MAX_CODE - MIN_CODE + 1;
function cipher(text, key) {
    key = getKey(key);
    return Array.from(text).map(function (symb) { return shiftSymbol(symb, key); }).join('');
}
function decipher(text, key) {
    return cipher(text, -key);
}
function getKey(key) {
    key = key % ALPHABET_LENGTH;
    if (key < 0) {
        key = ALPHABET_LENGTH + key;
    }
    return key;
}
function shiftSymbol(symb, key) {
    var newCode = symb.charCodeAt(0) + key;
    var shiftedSymb = newCode > MAX_CODE
        ? newCode - ALPHABET_LENGTH
        : newCode;
    return String.fromCharCode(shiftedSymb);
}
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
//# sourceMappingURL=main.js.map