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


function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
	} else if (isNaN(contribution)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
	} else if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
	}
  
  const P = percent/(12*100);
  let currentDate = new Date();
  let period = monthDiff(currentDate, date) + 1;
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

const myDate = new Date(2021, 2, 1);

console.log(solveEquation(1, -2 , -7));
console.log(calculateTotalMortgage(10, 0, 20000, myDate));
