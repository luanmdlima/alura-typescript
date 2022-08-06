export abstract class View<T> {
	protected element: HTMLElement;
	private escape: boolean;

	constructor(selector: string, escape: boolean = false) {
		this.element = document.querySelector(selector) as HTMLElement;
		this.escape = escape;
	}

	public update(model: T): void {
		let template = this.template(model);
		if (this.escape)
			template = template.replace(/<script>[\s\S]*?<\/script>/, "");
		this.element.innerHTML = template;
	}

	protected abstract template(model: T): string;
}
