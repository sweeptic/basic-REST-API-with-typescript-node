const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: number[] = []
const textResults: string[] = []

type NumOrString = number | string;
type Result = { val: number; timestamp: Date }

interface ResultObj {
   val: number;
   timestamp: Date;
}


//union types
function add(num1: NumOrString, num2: NumOrString) {

   //type guard
   if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
   } else if (typeof num1 === 'string' && typeof num2 === 'string') {
      return num1 + '' + num2;
   }

   return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
   console.log(resultObj.val)
}


buttonElement.addEventListener('click', () => {
   const num1 = num1Element.value;
   const num2 = num2Element.value;

   //only string or numbers
   const result = add(+num1, +num2);
   const stringResult = add(num1, num2);

   numResults.push(result as number);
   textResults.push(stringResult as string)

   printResult({ val: result as number, timestamp: new Date() });

   console.log(numResults, textResults)
})