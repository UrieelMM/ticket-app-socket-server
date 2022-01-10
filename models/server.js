//Servidor de Express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");
const Sockets = require("./sockets");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Http server
        this.server = http.createServer(this.app);

        //Configuraciones de sockets
        this.io = socketio(this.server, {/* Configuraciones */});
    }

    middlewares() {
        //Definir ruta
        this.app.use(express.static(path.resolve(__dirname, "../public")));
        //Habilitar cors
        this.app.use(cors());
    }

    configSockets() {
        new Sockets(this.io);
    }

    execute() {
        //Iniciar middlewares
        this.middlewares();

        //Iniciar configSockets
        this.configSockets();

        //Iniciar server
        this.server.listen(this.port, () => {
            console.log("Server corriendo en puerto ", this.port);
        });
    }
}

module.exports = Server;