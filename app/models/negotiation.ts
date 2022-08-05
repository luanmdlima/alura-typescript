export class Negotiation {
	constructor(
		private _date: Date,
		readonly quantity: number,
		readonly value: number
	) {}

	public static createFrom(
		dateString: string,
		quantityString: string,
		valueString: string
	): Negotiation {
		const exp = /-/g;
		const negotiation = new Negotiation(
			new Date(dateString.replace(exp, "/")),
			parseInt(quantityString),
			parseFloat(valueString)
		);
		return negotiation;
	}

	get date() {
		return new Date(this._date);
	}

	get volume(): number {
		return this.value * this.quantity;
	}
}
