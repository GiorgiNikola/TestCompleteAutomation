function assertTrue(param1, param2){
  if(param1 == param2){
    Log.Message("Assert was successful!");
  }else{
    Log.Error("Assert is not successful!");
  }
}
module.exports.assertTrue = assertTrue;