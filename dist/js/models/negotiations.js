export class Negotiations {
    constructor() {
        this._list = [];
    }
    add(negotiation) {
        this._list.push(negotiation);
    }
    get list() {
        return this._list;
    }
}
