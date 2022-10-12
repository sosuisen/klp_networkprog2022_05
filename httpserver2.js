const net = require('net');
const server = net.createServer(socket => socket.on('data', data => {
  // console.log(data.toString());
  const headers = data.toString().split('\r\n');
  // 配列の長さのチェックが必要ですが略
  const requestLine = headers[0] ; // GET <URL> HTTP/1.1
  const requestArr = requestLine.split(' ');
  const url = requestArr[1];
  
  let html = '';
  let statusLine = 'HTTP/1.1 200 OK\r\n';
  if(url === '/') {
    html = '<h1>Hello, world!</h1>';
  }
  else if(url === '/date.html'){
    html = `いまは ${Date()}`;
  }
  else {
    // URL が存在しないとき
    statusLine = 'HTTP/1.1 404 Not Found\r\n';
    html = `<h1>404 Not Found</h1>${url}はありません。`;
  }
  const res = statusLine
    + 'Content-Length: ' + Buffer.byteLength(html) + '\r\n'
    + 'Content-Type: text/html; charset=UTF-8\r\n\r\n'
    + html;
  socket.write(res);
}));
server.listen({ host: 'localhost', port: 8080 }, () => console.log('Start HTTP server...'));
