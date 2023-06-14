import Rectangle from "./Rectangle";

let n = 10;
n = 20;
let num: number | 'abc' = 12;
num = 100;
num = "abc";
const ar: string[] = [];
ar[0] = "kuku";
ar[1] = "2";
ar.push("abc")
const ar1: [string, number?] = ['abc', 10];
ar1[0] = 'lmn'
const ar2: Array<string> = [];
const map1: Map<string, number> = new Map([["abc", 40]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
function f(a: string | number): number {
    return typeof a == "number" ? a * 2 : +(a + 2);
}
type Comparator<T = number> = (p1: T, p2: T) => number;
let comp: Comparator =
    function (num1: number, num2: number): number {
        return num1 - num2;
    }
type Person = {
    id: number; date: Date | string, name: string,
    gender?: "male" | "female"
};

displayPerson({ id: 123, date: "2000-10-10", name: "Vasya" })
function displayPerson(prs: Person): void {
    prs.gender && console.log(prs.gender?.substring(0, 3))
}

const MIN_CODE = 32
const MAX_CODE = 127
const ALPHABET_LENGTH = MAX_CODE - MIN_CODE + 1

function cipher (text: string, key: number): string {
  key = getKey(key)
  return Array.from(text).map((symb) => shiftSymbol(symb, key)).join('')
}

function decipher (text: string, key: number): string {
  return cipher(text, -key)
}

function getKey (key: number): number {
  key = key % ALPHABET_LENGTH
  if (key < 0) {
    key = ALPHABET_LENGTH + key
  }
  return key
}

function shiftSymbol (symb: string, key: number): string {
  const newCode = symb.charCodeAt(0) + key
  const shiftedSymb = newCode > MAX_CODE
    ? newCode - ALPHABET_LENGTH
    : newCode
  return String.fromCharCode(shiftedSymb)
}

const shape: Rectangle = new Rectangle(3, 4);
let width = shape.width;



