import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { WeekDays } from "../enums/week-days.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (this.isBusinessDay(negotiation.date)) {
            this.negotiations.add(negotiation);
            this.updateView();
            this.cleanForm();
            console.log(this.negotiations);
        }
        else {
            this.messageView.update("New negotiations may only be made on business days!");
        }
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation successfully included!");
    }
    isBusinessDay(date) {
        return (date.getDay() !== WeekDays.SUNDAY && date.getDay() !== WeekDays.SATURDAY);
    }
}
