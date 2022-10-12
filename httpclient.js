const net = require('net');
let message = 'Hello!';
if (process.argv.length >= 3) {
  message = process.argv[2];
}
const socket = net.createConnection({ host: 'localhost', port: 10000}, () => {
  socket.write(message);
});
socket.on('data', data => {
  console.log(data.toString());
  socket.end();
});
