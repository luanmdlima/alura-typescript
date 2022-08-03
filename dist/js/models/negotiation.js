export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        return new Date(this._date);
    }
    get volume() {
        return this.value * this.quantity;
    }
}
