import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {  PokemonOne } from 'src/app/Core/Data/Pokemon';
import { PokemonService } from 'src/app/Core/Api/pokemon.service';
import { typesColors, typeColor } from 'src/app/shared/TypesColors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  onePokemon!: PokemonOne;

  pokemonID!: number;

  colorCard!: string;

  corzinha!: string;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

   ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.pokemonID = Number(routeParams.get("id"));

    let url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonID}/`
    this.getOnePokemon(url)
  }

  getOnePokemon(url: string){
    this.pokemonService.getOnePokemon(url).subscribe(pokemon => {
      this.onePokemon = pokemon;
      this.colorCard = this.onePokemon.types[0]
      console.log(this.colorCard)
      
    })
  }
  
  
}
