const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL from the request object
  const url = req.url;

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Define different responses based on the URL
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    res.end('Page not found');
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
