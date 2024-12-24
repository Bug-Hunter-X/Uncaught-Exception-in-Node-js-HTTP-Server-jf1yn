const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // The error is thrown here, but it's not caught
      throw new Error('Simulated error');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});