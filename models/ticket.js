const {v4: uuidv4} = require("uuid");

class Ticket {
    constructor(numberTicket) {
        this.id = uuidv4();
        this.number = numberTicket;
        this.escritorio = null;
        this.agente = null;
    }
}

module.exports = Ticket;