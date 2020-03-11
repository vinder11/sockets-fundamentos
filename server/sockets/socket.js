const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido al chat' });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback({
                res: 'Todo salio bien'
            });
        } else {
            callback({
                res: 'Todo salio mal'
            });
        }*/
    });
});