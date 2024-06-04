var Constants = require("Constants");
var Assert = require("Assert");


class MainFrameSteps{
  constructor(){
    this.Orders = Aliases.Orders;
    this.dlgConfirmation = Aliases.Orders.dlgConfirmation;
  }

  addNewOrder(){
    this.Orders.MainForm.MainMenu.Click(Constants.newOrder);
    return this;
  }

  editOrder(){
    this.Orders.MainForm.OrdersView.ClickItemR(0, Constants.orderName);
    this.Orders.MainForm.OrdersView.PopupMenu.Click(Constants.editOrder);
    return this;
  }

  clickOnOrder(){
    this.Orders.MainForm.OrdersView.DblClickItem(0, Constants.orderName);
    return this;
  }

  deleteOrder(){
    this.Orders.MainForm.OrdersView.ClickItemR(0, Constants.orderName);
    this.Orders.MainForm.OrdersView.PopupMenu.Click(Constants.deleteOrder);
    this.dlgConfirmation.btnYes.Click();
    return this;
  }

  validateOrdersCount(size){
    Assert.assertTrue(this.Orders.MainForm.OrdersView.wItemCount, size);
    return this;
  }
}

var mainFrameSteps = new MainFrameSteps();

module.exports = mainFrameSteps;