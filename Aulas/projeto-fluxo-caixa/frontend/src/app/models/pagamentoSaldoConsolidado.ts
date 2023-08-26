import { Pagamento } from "./pagamento";

export interface PagamentoSaldoConsolidado {
    pagamentos: Pagamento[];
    saldoTotalDia: number;
}