const Ticket = require("./ticket");

class TicketList {
    constructor() {
        this.lastTicket = 0;
        this.pendingTickets = [];
        this.assignedTickets = [];
    }

    get nextTicket() {
        this.lastTicket++;
        return this.lastTicket;
    }

    //Retornar los ultimos 13 tickets
    get lastThirteenTickets() {
        return this.assignedTickets.slice(0, 13);
    }

    //Crear un nuevo ticket
    createTicket() {
        const newTicket = new Ticket(this.nextTicket);
        this.pendingTickets.push(newTicket);
        return newTicket;
    }

    //Asignar el ticker a un agente
    assignTicket(agente, escritorio) {
        //Validar que haya minimo un ticket
        if (this.pendingTickets.length === 0) return null;

        const nextTicketToAssign = this.pendingTickets.shift();
        nextTicketToAssign.agente = agente;
        nextTicketToAssign.escritorio = escritorio;

        this.assignedTickets.unshift(nextTicketToAssign);
        return nextTicketToAssign;
    }
}

module.exports = TicketList;