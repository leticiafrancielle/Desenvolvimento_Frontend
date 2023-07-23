export default class Album {
  nome: string;
  cantor: string;
  estilo: string;
  imagem: string;

  constructor(nome: string, cantor: string, estilo: string, imagem: string){
    this.nome = nome;
    this.cantor = cantor;
    this.estilo = estilo;
    this.imagem = imagem;
  }
}
