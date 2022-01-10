
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        //On Connection
        this.io.on('connection', (socket) => {
            console.log("Cliente conectado");
        });
    }
}

module.exports = Sockets;