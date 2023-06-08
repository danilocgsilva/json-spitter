import http from 'http'
import myJson from './myJson.mjs';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(myJson()));
}).listen(3000, "0.0.0.0");

