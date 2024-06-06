var Util = require("Util");
var Constants = require("Constants");
class FunctionTests{
  functionsTest(){
  Log.Message(Util.concatenateProducts(112, 231, 123));
  Log.Message(Util.todaysPattern());
  Log.Message(Util.todaysDatesDigitsProduct());
  Log.Message(Util.isPalindrome(Constants.notPalindrome));
  Log.Message(Util.isPalindrome(Constants.palindrome));
  }
}

var functionTests = new FunctionTests();

module.exports = functionTests;