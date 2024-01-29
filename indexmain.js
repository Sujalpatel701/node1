const http = require('http');
const port = 3000;
const hoast = "localhost";
const server = http.createServer((req, res,next) => {
  if(req.url === '/'){
    res.write('Hello World');
    res.end();
  }
  if(req.url === '/about'){
    res.write('About Page');
    res.end();
  }
  if(req.url === '/contact'){
    res.write('Contact Page');
    res.end();
  }
  else{
    res.write('Not Found');
    res.end();
  }
});

server.listen(port,hoast, () => {
  console.log('Server listening on port http://localhost:3000');
});
