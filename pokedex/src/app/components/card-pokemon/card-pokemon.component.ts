import { Component, OnInit } from '@angular/core';
import { PokemonList, PokemonListRequest, PokemonOne } from 'src/app/Core/Data/Pokemon';
import { PokemonService } from 'src/app/Core/Api/pokemon.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  pokemonRequest?: Observable<PokemonListRequest>;

  colorCard: string='normal';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
    this.getPokemonList()
    
  }

  getPokemonList(){
    this.pokemonRequest = this.pokemonService.getPokemonList().pipe(
      map((result:PokemonList) => {
        return {
          nextPage: result.nextPage,
          previousPage: result.previousPage,
          details: Promise.all<Promise<PokemonOne>[]>(result.detailsPokemon)
        }
       }
       )   
    )
    
}
  
}
