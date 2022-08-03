import { View } from "./view.js";

export class MessageView extends View<string> {
	constructor(selector: string) {
		super(selector);
	}

	public template(model: string): string {
		return `<p class="alert alert-info">${model}</p>`;
	}
}
