var Constants = require("Constants");
var OrderAppSteps = require("OrderAppSteps");
var MainFrameSteps = require("MainFrameSteps");
var OrderSteps = require("OrderSteps");
var Util = require("Util");

class OrderTests{
  testCase(){
  OrderAppSteps
    .openApp();
  MainFrameSteps
    .addNewOrder();
  var state = OrderSteps
    .setState(Constants.state)
    .extractState();
  var addressParts = Util
    .splitState(state);
  OrderSteps
    .setCity(addressParts[0])
    .setStreet(addressParts[1])
    .setZip(addressParts[2])
    .clickButtonOK();
  OrderAppSteps
    .closeApp();
  }
}

var orderTests = new OrderTests();

module.exports = orderTests;