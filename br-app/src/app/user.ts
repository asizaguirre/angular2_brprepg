export class User {
    id: number;
    nome: string = '';
    cargo: string = '';
    status: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
