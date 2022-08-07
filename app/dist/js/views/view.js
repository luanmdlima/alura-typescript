export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
