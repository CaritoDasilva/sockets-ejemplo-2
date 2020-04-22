var Client = /** @class */ (function () {
    function Client() {
        this.socket = io();
        //On son para escuchar eventos
        this.socket.on('connect', function () {
            console.log('conectado al servidr!');
        });
        this.socket.on('disconnect', function () {
            console.log('desconectado desde el servidor');
        });
        //Emit son los que emiten eventos al servidor pero 1:1
        this.socket.emit('chat', {
            user: 'CaritoNegra',
            profesion: 'developer'
        });
    }
    return Client;
}());
var client = new Client();
