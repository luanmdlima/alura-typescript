var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
import { View } from "./View.js";
export class NegotiationsView extends View {
    constructor(selector) {
        super(selector);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr> 
                        <th>DATE</th> 
                        <th>QUANTITY</th>
                        <th>VALUE</th> 
                        <th>VOLUME</th>
                    </tr> 
                </thead>
                <tbody>
                    ${model.list
            .map((negotiation) => {
            return `
                            <tr>
                                <td>${negotiation.date.toLocaleDateString()}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume}</td>
                            </tr>`;
        })
            .join("")}    
                </tbody>
            </table>`;
    }
}
__decorate([
    escape
], NegotiationsView.prototype, "template", null);
