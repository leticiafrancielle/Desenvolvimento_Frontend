import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
// import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {  }

  public getPokemons() : Observable<any> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon");
  }

  public getInfoPokemon(name: string) : Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}