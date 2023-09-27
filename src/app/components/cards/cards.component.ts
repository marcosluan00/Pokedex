import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Core/api/pokemon.service';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonList, PokemonListRequest } from 'src/app/shared/model/pokemon.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardPokemonComponent implements OnInit {
  pokemonRequest?: Observable<PokemonListRequest>;
  colorCard: string='normal';

  offset = 0;
  limit = 16;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList(){
    this.pokemonRequest = this.pokemonService.getPokemonList(this.offset, this.limit).pipe(
      map((result:PokemonList) => {
        return {
          nextPage: result.nextPage,
          previousPage: result.previousPage,
          details: Promise.all<Promise<Pokemon>[]>(result.detailsPokemon)
        }
       }
       )
    )
  }
  incrementar(){
    this.offset += this.limit;
    this.getPokemonList();
  }
  decrementar(){
    this.offset -= this.limit;
    this.getPokemonList();
  }

}
