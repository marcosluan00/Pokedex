import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Pokemon, PokemonApiDetails, PokemonApiRequest, PokemonList,  } from 'src/app/shared/model/pokemon.model';
import { Observable, map, lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonList> {
    return this.http.get<PokemonApiRequest>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').pipe(
      map(data => {
        return {
          nextPage: data.next,
          previousPage: data.previous,
          detailsPokemon: data.results.map(result => lastValueFrom(this.getPokemon(result.url)))
        }
      })
    )
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<PokemonApiDetails>(url).pipe(
      map(data => {
        return {
          order: data.order,
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          sprites: {
            artwork_default: data.sprites.other['official-artwork'].front_default
          },
          types: data.types.map(type => type.type.name),
          abilities: data.abilities.map(ab => ab.ability.name),
          stats: data.stats.map( stat => {
            return {
              name: stat.stat.name,
              value: stat.base_stat
            }
          })
        }
      })
    )
  }
}
