import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PokemonApiDetails, PokemonApiType, PokemonList, PokemonOne } from '../data/Pokemon';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(): Observable<PokemonList> {
  return this.http.get<PokemonApiType>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').pipe(
      map(data => {
        return {
          nextPage: data.next,
          previousPage: data.previous,
          detailsPokemon: data.results.map(result => lastValueFrom(this.getOnePokemon(result.url)))
        }
      })
      )     
  }

  getOnePokemon(value: string): Observable<PokemonOne> {
    
    return this.http.get<PokemonApiDetails>(value).pipe(
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
          abilities: data.abilities.map(ab=> ab.ability.name),
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
    
  
