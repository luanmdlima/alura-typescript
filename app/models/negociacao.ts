export class Negociacao {
	constructor(
		private _data: Date,
		readonly quantidade: number,
		readonly valor: number
	) {}

	get data() {
		return new Date(this._data);
	}

	get volume(): number {
		return this.valor * this.quantidade;
	}
}
