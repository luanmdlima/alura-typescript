import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private _lista: Negociacao[] = [];

  constructor() {}

  adiciona(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  get lista(): readonly Negociacao[] {
    return this._lista;
  }
}
