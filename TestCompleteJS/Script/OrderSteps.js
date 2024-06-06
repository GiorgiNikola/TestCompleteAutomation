var Constants = require("Constants");

class OrderSteps{
 constructor(){
    this.CustomerName = Aliases.Orders.OrderForm.Group.Customer;
    this.ButtonOK = Aliases.Orders.OrderForm.ButtonOK;
    this.City = Aliases.Orders.OrderForm.Group.City;
    this.State = Aliases.Orders.OrderForm.Group.State_;
    this.Zip = Aliases.Orders.OrderForm.Group.Zip;
    this.Street = Aliases.Orders.OrderForm.Group.Street;
  }
  
  clickButtonOK(){
    this.ButtonOK.Click();
    return this;
  }
  
  setCity(city){
    this.City.Keys("^a[BS]" + city);
    return this;
  }
  
  setState(state){
    this.State.Keys("^a[BS]" + state);
    return this;
  }
  
  extractState(){
    this.State.Keys("^a^c");
    return Sys.Clipboard;
  }
  
  setZip(zip){
    this.Zip.Keys("^a[BS]" + zip);
    return this;
  }
  
  setStreet(street){
    this.Street.Keys("^a[BS]" + street);
    return this;
  }
}

var orderSteps = new OrderSteps();

module.exports = orderSteps;