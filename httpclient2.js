const net = require('net');

const message = 'HEAD /date.html HTTP/1.1\r\n\r\n';
if (process.argv.length >= 3) {
  message = process.argv[2];
}
const client = net.createConnection({ host: 'localhost', port: 8080}, () => {
  client.write(message);
});
client.on('data', data => {
  console.log(data.toString());
  client.end();
});


