import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
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
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation successfully included!");
        this.cleanForm();
        console.log(this.negotiations);
    }
    createNegotiation() {
        const exp = /-/g;
        const negotiation = new Negotiation(new Date(this.inputDate.value.replace(exp, "/")), parseInt(this.inputQuantity.value), parseFloat(this.inputValue.value));
        return negotiation;
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
}
