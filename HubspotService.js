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

const options;
const authenticationURL = 'https://app.hubspot.com/oauth/authorize';
const properties = {
                    clientID: '8f53910a-1eea-4f83-951d-fd2748f680fe', 
                       scope: 'contacts automation', 
                redirect_uri:'https://www.example.com/' 
            }; 


options.method = 'GET'; 
request({
    url: authenticationURL,
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