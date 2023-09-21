const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Mohd Sharique");

});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
