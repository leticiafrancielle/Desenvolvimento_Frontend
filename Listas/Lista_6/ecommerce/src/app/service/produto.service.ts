import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Produto } from "../models/produto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    private rota: string = "http://localhost:8890/listar-produtos"

    constructor(private httpClient: HttpClient) { }

    getProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(this.rota)
    }

    public postProduto(produto: Produto): Observable<Produto> {
        return this.httpClient.post<Produto>(this.rota, produto)
    }
}
