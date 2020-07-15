export class Payment {
    constructor(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} owes ${this.amount} for ${this.details}.`;
    }
}
