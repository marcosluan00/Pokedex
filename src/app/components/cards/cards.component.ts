import { Component } from '@angular/core';
import { Pokemon, PokemonList, PokemonListRequest } from 'src/app/shared/model/pokemon.model';
import {Observable, map} from 'rxjs'
import { PokemonService } from 'src/app/Core/api/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  pokemonRequest?: Observable<PokemonListRequest>;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.getPokemonList()
  }

  getPokemonList(){
    this.pokemonRequest = this.pokemonService.getPokemonList().pipe(
      map((result: PokemonList) => {
        return {
          nextPage: result.nextPage,
          previousPage: result.previousPage,
          details: Promise.all<Promise<Pokemon>[]>(result.detailsPokemon)
        }
      })
    )
  }
}
