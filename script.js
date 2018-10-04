'use strict';

var answerBudget = +prompt("Ваш бюджет на месяц?");
var answerNameStore = prompt("Название вашего магазина?");
var nameStore;
var shopGoods;
var employers;

console.log(answerBudget);
console.log(answerNameStore);

var mainList = {
	budget: answerBudget, 
	nameStore: answerNameStore,
	shopGoods: [],
	employers: {},
	open: false || true 
};

let answerOne = prompt("Какой тип товаров будем продавать ?", "");
let answerTwo = prompt("Какой тип товаров будем продавать ?", "");
let answerThree = prompt("Какой тип товаров будем продавать ?", "");

shopGoods = [answerOne, answerTwo, answerThree];

console.log(shopGoods[0]);
console.log(shopGoods[1]);
console.log(shopGoods[2]);
alert("Бюджет на месяц составляет: "  + answerBudget);
