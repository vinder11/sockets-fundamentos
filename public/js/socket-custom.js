var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
//on para escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

//para enviar informacion
var objeto = {
    usuario: 'Dalvinder',
    mensaje: 'Hola mundo'
};
socket.emit('enviarMensaje', objeto, function(resp) {
    console.log('respuesta server', resp);
});

//escuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});