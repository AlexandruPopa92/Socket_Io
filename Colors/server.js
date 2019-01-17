var express = require("express");
var app = express();
const server = app.listen(8000,'0.0.0.0');
var color;
const io = require('socket.io')(server);
io.on('connection', function (socket) {
  io.emit('return',{return:color});
    console.log("New client connected")
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    socket.on('color',function(data){
        color = data.send;
        console.log(color);
  io.emit('return',{return:color});

  });
});

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//move your routes and logic from this file and add the follwoing require

require('./routes')(app);