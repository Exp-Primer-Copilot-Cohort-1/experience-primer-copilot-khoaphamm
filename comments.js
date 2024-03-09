//Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = require('./comments.js');

const server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true);
  let pathname = urlObj.pathname;
  if (pathname === '/') {
    //get file path
    let filePath = path.join(__dirname, 'index.html');
    //read file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server Internal Error.');
      }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    });
  } else if (pathname === '/add') {
    let comment = urlObj.query;
    comments.add(comment);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(comment));
  } else if (pathname === '/list') {
    let data = comments.list();
    res.end(JSON.stringify(data));
  } else {
    let filePath = path.join(__dirname, pathname);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not Found.');
      }
      res.end(data);
    });
  }
});

server.listen(3000, '


