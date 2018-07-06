const io = require('socket.io')();

io.on('connection', (client) => {
  
    client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('yoyo', (interval=900)=>{
    console.log("yoyo is running")
    setInterval(() => {
        client.emit('weww', "woowww")   
      }, interval);
  })

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);