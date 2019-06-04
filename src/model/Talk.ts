export class Talk {
    readonly id?: number;

    description?: string;

    constructor(data: Partial<Talk>) {
        Object.assign(this, data);
    }
}
