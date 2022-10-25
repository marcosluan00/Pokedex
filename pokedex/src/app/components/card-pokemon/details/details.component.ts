import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {  PokemonOne } from 'src/app/Core/Data/Pokemon';
import { PokemonService } from 'src/app/Core/Api/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  onePokemon: PokemonOne = {} as PokemonOne;

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
    this.pokemonService.getOnePokemon(url).subscribe(pokemon => {
      this.onePokemon = pokemon;
    })
  }
  
  
}
