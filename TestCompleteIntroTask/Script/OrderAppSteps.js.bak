function openApp(){
  TestedApps.Orders.Run();
  aqObject.CheckProperty(Aliases.Orders, "IsOpen", cmpEqual, true);
}

function closeApp(){
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
  aqObject.CheckProperty(Aliases.Orders, "IsOpen", cmpEqual, false);
  //TestedApps.Orders.Close() 
}

module.exports.openApp = openApp;
module.exports.closeApp = closeApp;
