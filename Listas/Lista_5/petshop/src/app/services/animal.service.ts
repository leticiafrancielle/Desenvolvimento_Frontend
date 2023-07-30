import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  getAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:8700/listar-animais")
  }
}
