class Client{
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io()

        //On son para escuchar eventos
        this.socket.on('connect', () => {
            console.log('conectado al servidr!')
        })
        this.socket.on('disconnect', () => {
            console.log('desconectado desde el servidor')
        })

        //Emit son los que emiten eventos al servidor pero 1:1
        this.socket.emit('chat',   {
            user: 'CaritoNegra',
            profesion: 'developer'
        })
    }
}

const client = new Client();