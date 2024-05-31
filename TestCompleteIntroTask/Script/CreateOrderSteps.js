
function openCreateOrder(){
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New Order...");
}

function createOrderWithoutName(){
  openCreateOrder();
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("ButtonOK").Click();
}

function createOrderWithName(){
  openCreateOrder();
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer").SetText("Giorgi");
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("ButtonOK").Click();
}

function createOrderWithCreditCard(){
  openCreateOrder();
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer").SetText("Gela");
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("CardNo").Keys("111111111111");
  Aliases.Orders.WinFormsObject("OrderForm").WinFormsObject("ButtonOK").Click();
}
module.exports.createOrderWithoutName = createOrderWithoutName;
module.exports.createOrderWithName = createOrderWithName;
module.exports.createOrderWithCreditCard = createOrderWithCreditCard;