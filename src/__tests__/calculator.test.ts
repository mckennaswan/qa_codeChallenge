import { convertToObject } from "typescript";
import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 35, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 20, y: 10, method: "divide" },
 
  { x: 75, y: 888, method: "add" },
  { x: 409, y: 88, method: "subtract" },
  { x: 118, y: 88, method: "multiply" },
  { x: 80, y: 4, method: "divide" },

  { x: 420, y: 420, method: "add" },
  { x: 117, y: 95, method: "subtract" },
  { x: 520, y: 8, method: "multiply" },
  { x: 42, y: 2, method: "divide" },
 
  { x: 94, y: 333, method: "add" },
  { x: 626, y: 333, method: "subtract" },
  { x: 365, y: 8, method: "multiply" },
  { x: 142, y: 227, method: "divide" },
];



describe("Calculator", () => {
  dataset.forEach((calculation) =>{
    test('the ${calculation.method} with ${calculation.x} and ${calculation.y}',()=> {
    switch(calculation.method){
      case "add":
        expect(calculator.add(calculation.x,calculation.y)).toEqual(calculation.x+calculation.y);
break;
case "subtract":

expect(calculator.subtract(calculation.x,calculation.y)).toEqual(calculation.x-calculation.y);
break;
case "multiply":

expect(calculator.multiply(calculation.x,calculation.y)).toEqual(calculation.x*calculation.y);
break;
case "divide":

expect(calculator.divide(calculation.x,calculation.y)).toEqual(calculation.x/calculation.y);
break;
default:
console.log("No match")
}
});

});
});
