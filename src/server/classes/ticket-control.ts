import fs from 'fs'

export class TicketControl {
    last: number;
    today: number;
    constructor() {
        this.last = 0;
        this.today = new Date().getDate();

        let data = require('../data/data.json')
        // let x = require('../../../dist/server/data/data.json')
        if(data.today === this.today) {
            this.last = data.last;
        } else {
            this.resetDay()
        }

    }

    nextTicket() {
        this.last ++;
        this.writeFile();
        return `Ticket ${this.last}`
    }

    writeFile() {

        let jsdonData = {
            last: this.last,
            today: this.today
        }
    
    
        let jsonDataString = JSON.stringify(jsdonData);
        fs.writeFileSync('./dist/server/data/data.json', jsonDataString)
        console.log('se ha reiniciado el sistema!')
    }

    resetDay() {
        this.last = 0; 
        this.writeFile()
        
    }
}