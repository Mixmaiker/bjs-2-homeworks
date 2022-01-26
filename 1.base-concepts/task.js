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

// function calculateTotalMortgage(percent, contribution, c, period) {
//   const P = percent/(12*100);
//   const S = c - contribution;
// 	let monthlyPayment = S * ((P) + (P) / (((1 + (P))**period) - 1));
//   let totalAmount = parseFloat((period * monthlyPayment).toFixed(2));
//   return totalAmount;
// }

// console.log(solveEquation(1, -2 , -7));

// console.log(calculateTotalMortgage(10, 0, 20000, 24));


function calculateTotalMortgage(percent, contribution, amount, period) {

if (isNaN(percent)) {
  totalAmount = “Параметр "Процентная ставка" содержит неправильное значение '${percent}'”
} else if (I=isNaN(contribution)) {
  totalAmount = “Параметр "Начальный взнос" содержит неправильное значение '${сontribution}'”
} else if (I=isNaN(сontribution)) {
  totalAmount = “Параметр "Общая стоимость" содержит неправильное значение '${amount}'”
} else if (I=isNaN(amount)) {
} else {


  const P = percent/(12*100);
  let currentDate = new Date();
  const S = amount - contribution;
	let monthlyPayment = S * ((P) + (P) / (((1 + (P))**period) - 1));
  let totalAmount = parseFloat((period * monthlyPayment).toFixed(2));
  return totalAmount;
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}


console.log(solveEquation(1, -2 , -7));

console.log(calculateTotalMortgage(10, 0, 20000, 24));