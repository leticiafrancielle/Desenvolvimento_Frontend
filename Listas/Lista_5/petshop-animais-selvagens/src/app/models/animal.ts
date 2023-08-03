export class Animal {
  public _id!: number;
  public nome: string;
  public raca: string;
  public peso: number;
  public imagem: string;

  constructor(nome: string, raca: string, peso: number, imagem: string) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
    this.imagem = imagem;
  }
}