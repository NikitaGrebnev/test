budget = prompt("Ваш бюджет",0);
shopname = prompt('Название магазина');

var mainlist = {
	budg: budget, shop: shopname,
	shopgoods: [], employers: {}
}

var q1 = prompt("Какой тип товаров будем продавать?");
var q2 = prompt("Какой тип товаров будем продавать?");
var q3 = prompt("Какой тип товаров будем продавать?");

mainlist.shopgoods[0] = q1;
mainlist.shopgoods[1] = q2;
mainlist.shopgoods[2] = q3;

budgPerDay = alert("Бюджет на день равен " + budget/30);

document.write(mainlist.shopgoods);