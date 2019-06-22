var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  api: {url: 'https://leekwars.com/api/'},
  loginToken: {
    params: {
      login: process.env.USSERNAME,
      password: process.env.PASSWORD
    },
    path: 'farmer/login-token'
  }
}