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
// obj.foo();
// obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

/*
Type Annotations on Variables
    When declaring a varaible can optionally add a type annotation to explicityl specify the type of the variable
    Typed annotations go after the name
    Most cases aren't needed
 */
let myName: string = "Alice";

/*
Functions
    Means of passing data specifying the input and output values
Parameter Type Annoations
    Declaring a function you can add a type annotation after each paramter to see what it accepts
*/
function greet(name: string){
    console.log("Hello, " +name.toUpperCase() +"!!");
}

// runtime error if not matching data
greet("Shawn");

/*
Return Type Annotations
    Can add return type annotations, it goes after the parameter list
 */
function getFaveNumber(): number{
    return 26;
}

/*
Function Return Promises
    Return type of a function returns a promise use Promise type
*/
// async function getFavoriteNumber(): Promise<number>{
//     return 26;
// }

/* 
Anonymous Functions
    Different from function declarations, parameters of func are auto given
*/
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
    console.log(s.toUpperCase());
  });

/*
Object Types
  Common type is the object type, refers to any js value with props
  Can use , or ; to seperate properties
  type part is optional and will be assumed as any
 */
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

/*
Interfaces
    An interface declaration is another way to name an object type:
*/
interface Point {
    x: number;
    y: number;
  }
   
  function printCoordinate(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });