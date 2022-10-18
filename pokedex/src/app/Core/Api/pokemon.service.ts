import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../Data/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  onInit(){
    
  }
  getPokemonList(){
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }
}
