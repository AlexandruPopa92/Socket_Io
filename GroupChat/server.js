var express = require("express");
var session = require('express-session');
var app = express();
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  name:null,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
const server = app.listen(8000,'0.0.0.0');
const io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log("New client connected");
  socket.on('message',function(data){
    console.log("++++++++++++++");
    console.log(data.name);
    console.log(data.msg);
    console.log("++++++++++++++");
    io.emit('message',{message:data.msg, username:data.name});
  });
});
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//move your routes and logic from this file and add the follwoing require

require('./routes')(app);