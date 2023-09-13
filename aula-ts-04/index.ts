function multiply(num1: number | string | null, num2: number | string | null) {
  if (typeof num1 === null || typeof num2 === null)
    console.log("Não é possível executar com esta entrada");

  return Number(num1) * Number(num2);
}

function sum(num1: number | string | null, num2: number | string | null) {
  if (typeof num1 === null || typeof num2 === null)
    console.log("Não é possível executar com esta entrada");

  return Number(num1) + Number(num2);
}

function isEven(num: number | string | null) {
  if (typeof num === null)
    console.log("Não é possível executar com esta entrada");

  return Number(num) % 2 === 0;
}

function showResult(result: number) {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

(() => {
  const num1 = prompt("First Number");
  const num2 = prompt("Second Number");

  let result = sum(num1, num2);
  result += multiply(1, 2);
  showResult(result);
})();
