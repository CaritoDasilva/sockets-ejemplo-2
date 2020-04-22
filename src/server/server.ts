import express from 'express'
import http from 'http'
import path from 'path'
import socketIO from 'socket.io'
const port: number = 8000

export default class Server {

    private server: http.Server
    public app: express.Application
    private port: number
    public io: socketIO.Server;
    
    constructor(port: number){
        this.port = port
        this.app = express()        
        this.server = http.createServer(this.app)

    }

    public start(){
        this.app.use(express.static(path.join(__dirname, '../client')))
        this.app.get('/', (req, res) => {
            let salida = {
                nombre: 'Carito',
                edad: 36,
                url: req.url
            }
            res.send(salida)
        })
        this.io = socketIO(this.server)
        this.io.on('connection', (socket) => {
            console.log('Connected');
            socket.on('disconnect', function () {
                console.log('socket disconnected : ' + socket.id);
            });
            socket.on('chat', (message) => {
                console.log(message)
            }) 
        });
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}`);

    }
}

new Server(port).start()