const http = require('http');
const port = 3000;
const hoast = "localhost";

const fs = require('fs');

const index=fs.readFileSync('./index.html','utf-8');
const server = http.createServer((req, res,next) => {
  if(req.url === '/'){
    return res.end(index);
  }
  if(req.url === '/about'){
    res.write('About Page');
    return res.end();
  }
  if(req.url === '/contact'){
    res.write('Contact Page');
    return res.end();
  }
  else{
    res.write('Not Found');
    return res.end();
  }
});

server.listen(port,hoast, () => {
  console.log('Server listening on port http://localhost:3000');
});
