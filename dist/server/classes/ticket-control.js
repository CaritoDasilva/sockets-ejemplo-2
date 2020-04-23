"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class TicketControl {
    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        let data = require('../data/data.json');
        // let x = require('../../../dist/server/data/data.json')
        if (data.today === this.today) {
            this.last = data.last;
        }
        else {
            this.resetDay();
        }
    }
    nextTicket() {
        this.last++;
        this.writeFile();
        return `Ticket ${this.last}`;
    }
    writeFile() {
        let jsdonData = {
            last: this.last,
            today: this.today
        };
        let jsonDataString = JSON.stringify(jsdonData);
        fs_1.default.writeFileSync('./dist/server/data/data.json', jsonDataString);
        console.log('se ha reiniciado el sistema!');
    }
    resetDay() {
        this.last = 0;
        this.writeFile();
    }
}
exports.TicketControl = TicketControl;
//# sourceMappingURL=ticket-control.js.map