class Util{
  concatenateProducts(num1, num2, num3) {
  var prod1 = this.productOfDigits(num1);
  var prod2 = this.productOfDigits(num2);
  var prod3 = this.productOfDigits(num3);
  return aqConvert.IntToStr(prod1) + aqConvert.IntToStr(prod2) + aqConvert.IntToStr(prod3);
  }

  productOfDigits(num) {
   var product = 1;
   var numStr = num.toString();
   for (var i = 0; i < numStr.length; i++) {
     product *= parseInt(aqString.GetChar(numStr, i));
   }
   return product;
  }

  todaysPattern(){
  var now = aqDateTime.Now();
  var formatStr = "%Y Year %#d %B %#I:%M %p %#S Sec";
  return aqConvert.DateTimeToFormatStr(now, formatStr);
  }

  todaysDatesDigitsProduct(){
    var today = aqDateTime.Today();
    today = aqString.Replace(today, "0", "");
    today = aqString.Replace(today, "/", "");
    return this.productOfDigits(StrToInt(today));
  }

  isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  splitState(state){
    var addressParts = state.split(", ");
    return addressParts;
  }
}

var util = new Util();

module.exports = util;