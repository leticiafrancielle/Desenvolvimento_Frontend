export class Animal {
    _id: string;
    nome: string;
    raca: string;
    peso: number;

    constructor(_id: string,
                nome: string,
                raca: string,
                peso: number)
    {
        this._id = _id;
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }
}
