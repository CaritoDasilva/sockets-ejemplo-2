"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = __importDefault(require("socket.io"));
const port = 8000;
class Server {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
    }
    start() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        this.app.get('/', (req, res) => {
            let salida = {
                nombre: 'Carito',
                edad: 36,
                url: req.url
            };
            res.send(salida);
        });
        this.io = socket_io_1.default(this.server);
        this.io.on('connection', (socket) => {
            console.log('Connected');
            socket.on('disconnect', function () {
                console.log('socket disconnected : ' + socket.id);
            });
            socket.on('chat', (message) => {
                console.log(message);
            });
        });
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}`);
    }
}
exports.default = Server;
new Server(port).start();
//# sourceMappingURL=server.js.map