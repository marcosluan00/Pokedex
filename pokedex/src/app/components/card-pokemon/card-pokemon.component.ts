import { Component, OnInit, Input } from '@angular/core';
import { POKEMONLIST } from 'src/app/Core/Data/PokemonList';
import { Pokemon, PokemonList, PokemonOne } from 'src/app/Core/Data/Pokemon';
import { PokemonService } from 'src/app/Core/Api/pokemon.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  pokemonList = POKEMONLIST;

  pokemon!: PokemonList;
  
  pokemonRequest?: Observable<PokemonListRequest>;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList(){
    return this.pokemonService.getPokemonList().pipe(
      map((result:PokemonList) => {
        return {
          nextPage: result.nextPage,
          previousPage: result.previousPage,
          details: Promise.all<Promise<PokemonOne>[]>(result.detailsPokemon).then(
            res => res.
          )
        } 
       })    
    )
}

}
interface PokemonListRequest {
  nextPage: string;
  previousPage: string;
  details: Promise<PokemonOne[]>
}
