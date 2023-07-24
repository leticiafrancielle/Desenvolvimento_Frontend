export default class Album {
  public id: number;
  public nome: string;
  public cantor: string;
  public imagem: string;
  public emoji: string;

  constructor(id: number, nome: string, cantor: string, imagem: string, emoji: string){
    this.id = id;
    this.nome = nome;
    this.cantor = cantor;
    this.imagem = imagem;
    this.emoji = emoji;
  }
}
