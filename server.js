const request = require("request");
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();


var app = express();
var port = 8888;
var jar = request.jar();


var username = process.env.USSERNAME;
var password = process.env.PASSWORD;
app.listen(port);


var api_url = 'https://leekwars.com/api/';
var url = 'farmer/login';
var url2 = 'farmer/login-token';
var data = {login: username, password: password, keep_connected: false};
var data2 = {login: username, password: password};


request.post({
  url: api_url + url2,
  form: data2,
  jar: jar,
}, function (error, response) {
  if (error)
    return reject();
  if (response)
    console.log(JSON.parse(response.body).token)
});