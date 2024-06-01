var OrderAppSteps = require("OrderAppSteps");
var CreateOrderSteps = require("CreateOrderSteps");
function orderTest1(){
  OrderAppSteps.openApp();
  CreateOrderSteps.createOrderWithoutName();
  CreateOrderSteps.createOrderWithName();
  OrderAppSteps.closeApp();
}