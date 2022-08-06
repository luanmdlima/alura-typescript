import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {
	constructor(selector: string) {
		super(selector);
	}

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
