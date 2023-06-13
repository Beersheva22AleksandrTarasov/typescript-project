let n = 10;
n = 20;
let num:number | 'abc' = 12;
num = 100;
num = "abc";
const ar:string[] = [];
ar[0] = "kuku";
ar[1] = "2";
ar.push("abc")
const ar1:[string, number?] =['abc', 10];
ar1[0] = 'lmn'
const ar2:Array<string> = [];
const map1: Map<string, number> = new Map([["abc", 40]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
function f(a: string | number): number{
    return typeof a == "number" ? a * 2 : +(a + 2);
}

