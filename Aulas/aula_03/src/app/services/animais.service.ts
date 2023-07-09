import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animal";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root',
})

export class AnimalService {

    constructor(private http: HttpClient) { }

    buscarAnimais(): Observable<Animal[]> {
        return this.http.get<Animal[]>("http://localhost:7700/listar-animais")
    }
}
