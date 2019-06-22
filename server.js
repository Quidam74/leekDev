const request = require("request");
var express = require("express");
var endpoint = require("./endpoint")


var app = express();
var port = 8888;
var jar = request.jar();
var token = null;

app.listen(port);
queryBuild(endpoint.api.url, endpoint.loginToken, consoleLogToken)

function queryBuild (baseUrl, data, then) {
  return new Promise((resolve, reject) => {
    request.post({
      url: baseUrl + data.path,
      form: data.params,
      jar: jar,
    }, function (error, response) {
      if (error)
        reject(error);

      resolve(JSON.parse(response.body))
    })
  }).then(value => {
    then(value)
  })
}


function consoleLogToken (value) {
  token = value.token
}