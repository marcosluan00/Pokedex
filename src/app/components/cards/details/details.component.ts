import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/Core/api/pokemon.service';
import { Pokemon } from 'src/app/shared/model/pokemon.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  onePokemon: Pokemon = {} as Pokemon;

  colorCard: string='';
  idPokemon: number = 0;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

   ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let pokemonID = routeParams.get("id");

    this.idPokemon = pokemonID?.padStart(3, '0') as unknown as number;

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`
    this.getOnePokemon(url)
  }

  getOnePokemon(url: string){
    this.pokemonService.getPokemon(url).subscribe(pokemon => {
      this.onePokemon = pokemon;
    })
  }


}
