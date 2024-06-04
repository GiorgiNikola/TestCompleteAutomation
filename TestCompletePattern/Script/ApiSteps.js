class ApiSteps{
  constructor(){
    this.httpObject = null;
    this.response = null;
    this.data = null;  
  }
  
  createHttpObject(address){
    this.httpObject = aqHttp.CreateGetRequest(address);
    return this;  
  }
  
  sendGetRequest(){
    this.response = this.httpObject.Send();
    return this;
  }
  
  extractDataFromResponse() {
    this.data = JSON.parse(this.response.Text);
    return this;
  }
}

var apiSteps = new ApiSteps();

module.exports = apiSteps;