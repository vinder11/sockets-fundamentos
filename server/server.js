const express = require('express');

const socketIO = require('socket.io'); //llamado a la libreria de socket
const http = require('http'); //llamado a la libreria del servidor http de node ya que socket no trabaja con express

const path = require('path');

const app = express();

let server = http.createServer(app); //invocando al server de node

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); //IO = esta es la comunicacion del backEnd
require('./sockets/socket'); //llamando a los metodos de los sockets

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});