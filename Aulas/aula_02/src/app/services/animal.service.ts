import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Animal } from "../models/animal";

@Injectable({
    providedIn: 'root'
})

export class AnimalService {
    constructor(private http: HttpClient) { }

    public getAnimais(): Observable<Animal[]> {
        return this.http.get<Animal[]>("http://localhost:5700/listar-animais");
   }
}