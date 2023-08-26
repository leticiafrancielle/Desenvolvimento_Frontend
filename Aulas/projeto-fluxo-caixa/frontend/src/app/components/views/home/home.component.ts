import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';
import { PagamentoSaldoConsolidado } from 'src/app/models/pagamentoSaldoConsolidado';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pagamentos!: Pagamento[];
  public pagamentosSaldoConsolidado!: PagamentoSaldoConsolidado;
  public colunas: string[] = ['descricao', 'valorPagamento', 'tipoPagamento', 'dataPagamento']
  public dataReferencia!: Date;
  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.pagamentoService.buscarPagamentos().subscribe((response: Pagamento[]) => {
      this.pagamentos = response
    });
  }

  public buscarPagamentoSaldoConsolidado() {
    this.pagamentoService.buscarPagamentosComSaldoConsolidado(this.dataReferencia).subscribe((response: PagamentoSaldoConsolidado) => {
      this.pagamentosSaldoConsolidado = response
      console.log(response)
    });
  }
}
