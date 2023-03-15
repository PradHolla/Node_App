var axios = require('axios');
var data = JSON.stringify({
  "prompt": "What is a fullstack serverless company?"
});

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://amgjmxwce3.execute-api.us-east-1.amazonaws.com/Prod/answer/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
