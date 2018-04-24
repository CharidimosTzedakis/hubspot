let request = require('requestretry');

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
                        "value": "http://updated.example.com"
                    }
                    ]
                };


function customPromiseFactory(resolver) {
    
    return new Promise(resolver);
}

request({
    url: 'https://api.domain.com/v1/a/b',
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