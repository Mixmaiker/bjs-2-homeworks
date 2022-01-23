'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if(d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else if(d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, c, period) {
  const P = percent/(12*100);
  const S = c - contribution;
	let monthlyPayment = S * ((P) + (P) / (((1 + (P))**period) - 1));
  let totalAmount = parseFloat((period * monthlyPayment).toFixed(2));
  return totalAmount;
}

console.log(solveEquation(1, -2 , -7));

console.log(calculateTotalMortgage(10, 0, 20000, 24));