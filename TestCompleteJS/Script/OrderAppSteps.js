class OrderAppSteps{
  constructor(){
    this.dlgConfirmation = Aliases.Orders.dlgConfirmation;
  }  

  openApp(){
    TestedApps.Orders.Run();
    return this;
  }

  closeApp(){
    Aliases.Orders.MainForm.Close()
    if(this.dlgConfirmation.Enabled){
      this.dlgConfirmation.btnNo.ClickButton();
    }
    return this;
  }
}

var orderAppSteps = new OrderAppSteps();

module.exports = orderAppSteps;