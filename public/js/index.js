var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'User2',
    text: 'Hi!'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server')
});

socket.on('newMessage', function(message){
  console.log('New Message: ', message)
});
