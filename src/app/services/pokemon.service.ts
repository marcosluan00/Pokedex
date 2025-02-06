import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { generationLimits } from '../data/gens';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(gen: keyof typeof generationLimits): Observable<Pokemon[]> {
    const { start, end } = generationLimits[gen];
  
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${end}`).pipe(
      map(response => response.results.slice(start - 1, end)), 
      mergeMap((pokemons: any[]) => 
        forkJoin(pokemons.map((pokemon: any) => this.http.get<Pokemon>(pokemon.url))) as Observable<Pokemon[]>
      )
    );
  }
}
