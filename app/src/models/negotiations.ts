import { Negotiation } from "./Negotiation.js";

export class Negotiations {
	private _list: Negotiation[] = [];

	public add(negotiation: Negotiation): void {
		this._list.push(negotiation);
	}

	get list(): readonly Negotiation[] {
		return this._list;
	}
}
