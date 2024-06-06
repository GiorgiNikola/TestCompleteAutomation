var Constants = require("Constants");

class MainFrameSteps{
  
  constructor(){
    this.Orders = Aliases.Orders;
  }

  addNewOrder(){
    this.Orders.MainForm.MainMenu.Click(Constants.newOrder);
    return this;
  }

}

var mainFrameSteps = new MainFrameSteps();

module.exports = mainFrameSteps;
