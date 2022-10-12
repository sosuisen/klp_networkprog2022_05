const net = require('net');
const server = net.createServer(socket => socket.on('data', data => {    
    console.log(data.toString());
}));
server.listen({ host: 'localhost', port: 8080}, () => console.log('Start HTTP server...'));
