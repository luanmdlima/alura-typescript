import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
	private inputDate: HTMLInputElement;
	private inputQuantity: HTMLInputElement;
	private inputValue: HTMLInputElement;
	private negotiations = new Negotiations();
	private negotiationsView = new NegotiationsView("#negotiationsView");

	constructor() {
		this.inputDate = document.querySelector("#date");
		this.inputQuantity = document.querySelector("#quantity");
		this.inputValue = document.querySelector("#value");
		this.negotiationsView.update(this.negotiations);
	}

	add(): void {
		const negotiation = this.createNegotiation();
		this.negotiations.add(negotiation);
		this.negotiationsView.update(this.negotiations);
		this.cleanForm();
		console.log(this.negotiations);
	}

	createNegotiation(): Negotiation {
		const exp = /-/g;
		const negotiation = new Negotiation(
			new Date(this.inputDate.value.replace(exp, "/")),
			parseInt(this.inputQuantity.value),
			parseFloat(this.inputValue.value)
		);
		return negotiation;
	}

	cleanForm(): void {
		this.inputDate.value = "";
		this.inputQuantity.value = "";
		this.inputValue.value = "";
		this.inputDate.focus();
	}
}
