import { Stringable } from "../interfaces/Stringable.js";
import { Comparable } from "./../interfaces/Comparable.js";
export class Negotiation implements Comparable<Negotiation>, Stringable {
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

	public isEqual(other: Negotiation): boolean {
		return (
			this.date.getDate() === other.date.getDate() &&
			this.date.getMonth() === other.date.getMonth() &&
			this.date.getFullYear() === other.date.getFullYear()
		);
	}

	public toString(): string {
		return `Date: ${this.date.getDate()}/${
			this.date.getMonth() + 1
		}/${this.date.getFullYear()} --- Quantity: ${this.quantity} ----  Value: ${
			this.value
		}`;
	}
}
