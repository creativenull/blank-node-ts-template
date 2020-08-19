import http, { ServerResponse, Server } from 'http';

const app: Server = http.createServer((_, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ msg: 'Hello World' }));
});

console.log('Listening on localhost:3000');
app.listen(3000);
