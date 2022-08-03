import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationsView {
	private element: HTMLElement;
	constructor(selector: string) {
		this.element = document.querySelector(selector);
	}

	template(model: Negotiations): string {
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
	update(model: Negotiations): void {
		this.element.innerHTML = this.template(model);
	}
}
