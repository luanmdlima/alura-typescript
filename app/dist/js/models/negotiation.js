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
    isEqual(other) {
        return (this.date.getDate() === other.date.getDate() &&
            this.date.getMonth() === other.date.getMonth() &&
            this.date.getFullYear() === other.date.getFullYear());
    }
    toString() {
        return `Date: ${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()} --- Quantity: ${this.quantity} ----  Value: ${this.value}`;
    }
}
