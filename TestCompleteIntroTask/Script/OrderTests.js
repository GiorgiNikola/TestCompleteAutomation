var OrderAppSteps = require("OrderAppSteps");
var CreateOrderSteps = require("CreateOrderSteps");
function OrderTest1(){
  OrderAppSteps.openApp();
  CreateOrderSteps.createOrderWithoutName();
  CreateOrderSteps.createOrderWithoutName();
  OrderAppSteps.closeApp();
}