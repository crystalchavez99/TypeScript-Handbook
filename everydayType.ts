/* 
Primitives: string, number, boolean
    string: represents string values
    number: represents numbers
    boolean: true or false values

Arrays
    to specify the type of an array like [1,2,3] use the syntax number[] works for any type
    can also be written as Array<number>

Any
    TS has a special type `any` that can be used when you dont want to use a particular value
*/
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;