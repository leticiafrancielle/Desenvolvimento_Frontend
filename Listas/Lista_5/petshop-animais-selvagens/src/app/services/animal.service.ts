import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private rota: string = "http://localhost:8700/listar-animais"

  constructor(private httpClient: HttpClient) {}

  getAnimais(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.rota)
  }

  public postAnimal(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(this.rota, animal)
  }
}
