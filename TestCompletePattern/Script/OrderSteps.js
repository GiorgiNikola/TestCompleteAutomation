var Constants = require("Constants");
var Assert = require("Assert");
class OrderSteps{
  constructor(){
    this.CustomerName = Aliases.Orders.OrderForm.Group.Customer;
    this.MasterCard = Aliases.Orders.OrderForm.Group.MasterCard;
    this.ButtonOK = Aliases.Orders.OrderForm.ButtonOK;
    this.Price = Aliases.Orders.OrderForm.Group.Price;
    this.City = Aliases.Orders.OrderForm.Group.City;
    this.State = Aliases.Orders.OrderForm.Group.State_;
    this.Zip = Aliases.Orders.OrderForm.Group.Zip;
    this.Street = Aliases.Orders.OrderForm.Group.Street;
  }
  
  validateCustomerNameFieldReadOnly(){
    Assert.assertTrue(this.CustomerName.ReadOnly, false);
    return this;
  }
  
  validateCustomerNameFieldWrittable(){
    this.setCustomerName(Constants.initialCustomerName);
    Assert.assertTrue(this.CustomerName.get_text(), Constants.initialCustomerName);
    return this;
  }
  
  validateMasterCardChecked(){
    Assert.assertTrue(this.MasterCard.get_Checked(), false);
    this.MasterCard.Click();
    Assert.assertTrue(this.MasterCard.get_Checked(), true);
    return this;
  }
  
  clickButtonOK(){
    this.ButtonOK.Click();
    return this;
  }
  
  setCustomerName(name){
    this.CustomerName.setText(name);
    return this;
  }
  
  validateCustomerName(name){
    Assert.assertTrue(this.CustomerName.get_text(), name);
    return this;
  }
  
  setPrice(price){
    this.Price.setText(price);
    return this;
  }
  
  validatePrice(price){
    Assert.assertTrue(this.Price.get_text(), price);
    return this;
  }
  
  setCity(city){
    this.City.setText(city);
    return this;
  }
  
  setState(state){
    this.State.setText(state);
    return this;
  }
  
  setZip(zip){
    this.Zip.setText(zip);
    return this;
  }
  
  setStreet(street){
    this.Street.setText(street);
    return this;
  }
}

var orderSteps = new OrderSteps();

module.exports = orderSteps;