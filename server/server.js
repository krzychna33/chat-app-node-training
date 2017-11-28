const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) =>{
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welecome to the chatApp!'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'));


  socket.on('createMessage', (message, callback) =>{
    console.log('New Message: ', message)
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this is from the server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () =>{
    console.log('User Disconnected');
  });
});









server.listen(port, ()=>{
  console.log('Server is running on the port', 3000);
})
