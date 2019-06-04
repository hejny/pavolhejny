export class Talk {
    readonly id?: number;

    constructor(data: Partial<Talk>) {
        Object.assign(this, data);
    }
}
