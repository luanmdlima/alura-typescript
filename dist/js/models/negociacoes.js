export class Negociacoes {
    constructor() {
        this._lista = [];
    }
    adiciona(negociacao) {
        this._lista.push(negociacao);
    }
    get lista() {
        return this._lista;
    }
}
