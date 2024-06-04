var OrderTests = require("OrderTests");
function main(){
 OrderTests
   .validateCustomerName()
   .validateMasterCard()
   .validateEditOrder()
   .validateDeleteOrder()
   .validatePricePerUnit()
   .createOrderWithApiDataTest();
}