export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const negotiation = new Negotiation(new Date(dateString.replace(exp, "/")), parseInt(quantityString), parseFloat(valueString));
        return negotiation;
    }
    get date() {
        return new Date(this._date);
    }
    get volume() {
        return this.value * this.quantity;
    }
}
