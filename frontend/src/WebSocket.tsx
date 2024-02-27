import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', function open() {
  console.log('Connected to server');
  ws.send('Hello, server!');
});

ws.on('message', function incoming(data: WebSocket.Data) {
  console.log('Received from server:', data.toString());
});
