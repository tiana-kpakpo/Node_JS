const http = require('http');

// const server = http.createServer( (req, res) =>{
//  res.writeHead(200, {'Content-Type': 'text/plain'})
//  res.write('this also works')
//  res.end();
// })


// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/greet') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const responseData = {
      message: 'Hello, World!'
    };

    // res.end(JSON.stringify(responseData));
    res.end(JSON.stringify({message : 'Hello world'}));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 3030
const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
