import { Component, OnInit } from '@angular/core';
import { POKEMONLIST } from 'src/app/Core/Data/PokemonList';

import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/Core/Data/Pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemonList = POKEMONLIST;

  pokemon: Pokemon = {}as Pokemon;

  option: string = 'about'

  
  constructor(private route: ActivatedRoute) {
   }

   ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let pokemonID = routeParams.get("id");

    this.pokemon = this.pokemonList.find(pokemon => pokemon.id === pokemonID) || {} as Pokemon;

  }
}


