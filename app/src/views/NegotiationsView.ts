import { escape } from "../decorators/escape.js";
import { Negotiations } from "../models/Negotiations.js";
import { View } from "./View.js";

export class NegotiationsView extends View<Negotiations> {
	constructor(selector: string) {
		super(selector);
	}

	@escape
	protected template(model: Negotiations): string {
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
