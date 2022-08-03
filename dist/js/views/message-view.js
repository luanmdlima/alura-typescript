import { View } from "./view.js";
export class MessageView extends View {
    constructor(selector) {
        super(selector);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
