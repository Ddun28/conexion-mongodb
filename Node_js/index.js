const app = require('./app'); //crear protocolo de transferencia
const http = require('http');
const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('El servidor esta corriendo');
})