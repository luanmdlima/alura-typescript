export class Negotiation {
	constructor(
		private _date: Date,
		readonly quantity: number,
		readonly value: number
	) {}

	get date() {
		return new Date(this._date);
	}

	get volume(): number {
		return this.value * this.quantity;
	}
}
