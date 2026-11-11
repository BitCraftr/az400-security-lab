const http = require('http');
const url = require('url');
const { exec } = require('child_process');

http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  // BAD: user input goes straight into a shell command
  exec('ping -c 1 ' + q.host, (err, out) => res.end(out));
}).listen(3000);
