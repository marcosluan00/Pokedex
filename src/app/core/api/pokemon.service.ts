import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PokemonApiDetails, PokemonApiType, PokemonList, PokemonOne } from '../data/Pokemon';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/"
  BASE_URL_OFFSET: string = "https://pokeapi.co/api/v2/pokemon/?offset="

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(): Observable<PokemonList> {
  return this.http.get<PokemonApiType>(`${this.BASE_URL}?limit=151`).pipe(
      map(data => {
        return {
          nextPage: data.next,
          previousPage: data.previous,
          detailsPokemon: data.results.map(result => lastValueFrom(this.getDetailsPokemon(result.url)))
        }
      })
      )     
  }

  

  getDetailsPokemon(value: string): Observable<PokemonOne> {
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

    getOnePokemon(value: string): Observable<PokemonOne> {
      return this.http.get<PokemonApiDetails>(`${this.BASE_URL+value}`).pipe(
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
    
  
// getPokemonListOffset(url: string): Observable<PokemonList> {
  //   const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  //   return this.http.get<PokemonApiType>(url, 
  //     {'headers' : header})
  //     .pipe(
  //       map(data => {
  //         return {
  //           nextPage: data.next,
  //           previousPage: data.previous,
  //           detailsPokemon: data.results.map(result => lastValueFrom(this.getOnePokemon(result.url)))
  //         }
  //       })
  //       )     
  // }