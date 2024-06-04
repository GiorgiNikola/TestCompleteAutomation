var Constants = require("Constants");
var ApiSteps = require("ApiSteps");
var OrderAppSteps = require("OrderAppSteps");
var OrderSteps = require("OrderSteps");
var MainFrameSteps = require("MainFrameSteps");

class OrderTests{
  validateCustomerName(){
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .addNewOrder();
    OrderSteps
      .validateCustomerNameFieldReadOnly()
      .validateCustomerNameFieldWrittable()
      .clickButtonOK();
    OrderAppSteps
      .closeApp();
    return this;
  }

  validateMasterCard(){
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .addNewOrder();
    OrderSteps
      .validateMasterCardChecked()
      .clickButtonOK();
    OrderAppSteps
      .closeApp();
    return this;
  }

  validateEditOrder(){
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .addNewOrder();
    OrderSteps
      .setCustomerName(Constants.initialCustomerName)
      .clickButtonOK();
    MainFrameSteps
      .editOrder();
    OrderSteps
      .setCustomerName(Constants.editedCustomerName)
      .clickButtonOK();
    MainFrameSteps
      .clickOnOrder();
    OrderSteps
      .validateCustomerName(Constants.editedCustomerName)
      .clickButtonOK();
    OrderAppSteps
      .closeApp();
    return this;
  }

  validateDeleteOrder(){
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .validateOrdersCount(0)
      .addNewOrder();
    OrderSteps
      .clickButtonOK();
    MainFrameSteps
      .validateOrdersCount(1)
      .deleteOrder()
      .validateOrdersCount(0);
    OrderAppSteps
      .closeApp();
    return this;
  }

  validatePricePerUnit(){
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .addNewOrder();
    OrderSteps
      .setPrice(Constants.editedPrice)
      .clickButtonOK();
    MainFrameSteps
      .clickOnOrder();
    OrderSteps
      .validatePrice(Constants.initialPrice)
      .clickButtonOK();
    OrderAppSteps
      .closeApp();
    return this;
  }

  createOrderWithApiDataTest(){
    const data1 = ApiSteps
      .createHttpObject(Constants.agifyApiUrl)
      .sendGetRequest()
      .extractDataFromResponse()
      .data;
    const data2 = ApiSteps
      .createHttpObject(Constants.ipinfoApiUrl)
      .sendGetRequest()
      .extractDataFromResponse()
      .data;
    OrderAppSteps
      .openApp();
    MainFrameSteps
      .addNewOrder();
    OrderSteps
      .setCustomerName(data1.name)
      .setState(data2.region)
      .setCity(data2.city)
      .setZip(data2.postal)
      .setStreet(data2.org)
      .clickButtonOK();
    OrderAppSteps
      .closeApp();
    return this;
  }
}

var orderTests = new OrderTests();

module.exports = orderTests;