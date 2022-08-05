import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { WeekDays } from "../enums/week-days.js";

export class NegotiationController {
	private inputDate: HTMLInputElement;
	private inputQuantity: HTMLInputElement;
	private inputValue: HTMLInputElement;
	private negotiations = new Negotiations();
	private negotiationsView = new NegotiationsView("#negotiationsView");
	private messageView = new MessageView("#messageView");

	constructor() {
		this.inputDate = document.querySelector("#date");
		this.inputQuantity = document.querySelector("#quantity");
		this.inputValue = document.querySelector("#value");
		this.negotiationsView.update(this.negotiations);
	}

	public add(): void {
		const negotiation = Negotiation.createFrom(
			this.inputDate.value,
			this.inputQuantity.value,
			this.inputValue.value
		);
		if (this.isBusinessDay(negotiation.date)) {
			this.negotiations.add(negotiation);
			this.updateView();
			this.cleanForm();
			console.log(this.negotiations);
		} else {
			this.messageView.update(
				"New negotiations may only be made on business days!"
			);
		}
	}

	/* private createNegotiation(): Negotiation {} */

	private cleanForm(): void {
		this.inputDate.value = "";
		this.inputQuantity.value = "";
		this.inputValue.value = "";
		this.inputDate.focus();
	}

	private updateView(): void {
		this.negotiationsView.update(this.negotiations);
		this.messageView.update("Negotiation successfully included!");
	}
	private isBusinessDay(date: Date): boolean {
		return (
			date.getDay() !== WeekDays.SUNDAY && date.getDay() !== WeekDays.SATURDAY
		);
	}
}
