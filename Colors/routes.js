//require controller so we have access to our logic
const controller = require("./controller");

//this module.exports is a function so we can pass the 'app' to routes.js
module.exports = function(app){
    app.get('/', controller.index)
}