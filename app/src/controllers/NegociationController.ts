import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { MessageView } from "../views/MessageView.js";
import { NegotiationsView } from "../views/NegotiationsView.js";
import { WeekDays } from "../enums/WeekDays.js";
import { logExecutioTime } from "../decorators/logExecutionTime.js";
import { inspect } from "../decorators/inspect.js";
import { domInject } from "../decorators/domInject.js";

export class NegotiationController {
	// @domInject("#date")
	private inputDate: HTMLInputElement;
	// @domInject("#quantity")
	private inputQuantity: HTMLInputElement;
	// @domInject("#value")
	private inputValue: HTMLInputElement;
	private negotiations = new Negotiations();
	private negotiationsView = new NegotiationsView("#negotiationsView");
	private messageView = new MessageView("#messageView");

	constructor() {
		this.inputDate = document.querySelector("#date") as HTMLInputElement;
		this.inputQuantity = document.querySelector(
			"#quantity"
		) as HTMLInputElement;
		this.inputValue = document.querySelector("#value") as HTMLInputElement;
		this.negotiationsView.update(this.negotiations);
	}

	@inspect()
	@logExecutioTime()
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
			// console.log(this.negotiations);
		} else {
			this.messageView.update(
				"New negotiations may only be made on business days!"
			);
		}
	}

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
