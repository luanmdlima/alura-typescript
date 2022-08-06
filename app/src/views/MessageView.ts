import { View } from "./View.js";

export class MessageView extends View<string> {
	constructor(selector: string) {
		super(selector);
	}

	protected template(model: string): string {
		return `<p class="alert alert-info">${model}</p>`;
	}
}
