import { inspect } from "../decorators/inspect.js";
import { logExecutioTime } from "../decorators/logExecutionTime.js";

export abstract class View<T> {
	protected element: HTMLElement;

	constructor(selector: string) {
		this.element = document.querySelector(selector) as HTMLElement;
	}

	/* @inspect()
	@logExecutioTime() */
	public update(model: T): void {
		let template = this.template(model);
		this.element.innerHTML = template;
	}

	protected abstract template(model: T): string;
}
