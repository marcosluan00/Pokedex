import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {  PokemonOne } from 'src/app/core/data/Pokemon';
import { PokemonService } from 'src/app/core/api/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  onePokemon: PokemonOne = {} as PokemonOne;


  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

   ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    let url = `https://pokeapi.co/api/v2/pokemon/${routeParams.get("id")}/`

    this.getOnePokemon(url)
  }

  getOnePokemon(url: string){
    this.pokemonService.getOnePokemon(url).subscribe(pokemon => {
      this.onePokemon = pokemon;
    })
  }
  
}
