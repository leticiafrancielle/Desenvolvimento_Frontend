import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  public produto: Produto = new Produto()

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    
  }

  saveProduto(){
    this.produtoService.postProduto(this.produto).subscribe(resposta => {
      alert("O jogo " + this.produto.nome + "foi cadastrado com sucesso!")
    })
  }
}
