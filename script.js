'use strict'


// let firstMonth = 500;
// let secondMonth = 200;
// let result = (+firstMonth + +secondMonth)
// let bonus = 1;
// let resultBonus = (+result + +bonus);
// let minSalary = 2000;
// // console.log( `Your salary for 2 month is: ${result} $`)
// // console.log (`Your have extra bonus! Your total salary was: ${result}$ it's increase for 1$ and now it is: ${resultBonus}$ `)
// // console.log( resultBonus >= minSalary )
// let comparison = ( +resultBonus >= +minSalary )? "I'm ready to work" : "I'm out";
// console.log( comparison )



let firstMonth = prompt("Enter first month salary", '1');
let secondMonth = prompt("Enter rst month salary", '2');
let result = (+firstMonth + +secondMonth)
alert(`Your salary for 2 month is: ${result} $`);
let bonus = 1;
let resultBonus = (+result + +bonus);
alert(`Your have extra bonus! Your total salary was: ${result}$ it's increase for 1$ and now it is: ${resultBonus}$ `);
let minSalary = 2000;
let comparison = ( +resultBonus >= +minSalary )? "I'm ready to work" : "I'm out";
alert(`Will you work next? ${comparison} `);
