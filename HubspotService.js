let request = require('requestretry');
var qs = require('qs');

const postData ={
                    "properties": [
                    {
                        "property": "email",
                        "value": "new-email@hubspot.com"
                    },
                    {
                        "property": "firstname",
                        "value": "Charidimos"
                    },
                    {
                        "property": "lastname",
                        "value": "Tzedakis"
                    },
                    {
                        "property": "phonenumber",
                        "value": "6970000000"
                    }
                    ]
                };


const userURL = 'https://app.hubspot.com/oauth/authorize?client_id=8f53910a-1eea-4f83-951d-fd2748f680fe&scope=contacts&redirect_uri=https://www.example.com/';

//Get OAuth 2.0 Access Toeken and Refresh Tokens
const properties = {
    grant_type: 'authorization_code',
    client_id: '',
    client_secret: '',
    redirect_uri:'',   
}

request.post({
    url: 'https://api.hubapi.com/oauth/v1/token',
    qs: properties,
    json: true,
    maxAttempts: 5,
    retryDelay: 5000,
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
    fullResponse: true, // (default) To resolve the promise with the full response or just the body
  })
  .then((response) => {
    console.log(JSON.stringify(response, null, 2));
  })
  .catch((error) => {
    // error = Any occurred error
  })



//OAuth
//take the authorization token based on Client ID and Client Secret  
//and add to the header of the request the authorization

options.method = 'POST'; 
request({
    url: 'https://api.hubapi.com/contacts/v1/contact',
    json: true,
    maxAttempts: 5,
    retryDelay: 5000,
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
    fullResponse: true, // (default) To resolve the promise with the full response or just the body
  })
  .then((response) => {
    console.log(JSON.stringify(response, null, 2));
  })
  .catch((error) => {
    // error = Any occurred error
  })