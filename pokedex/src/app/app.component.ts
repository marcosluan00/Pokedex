import { Component } from '@angular/core';
import { PokemonService } from './Core/Api/pokemon.service';
import { POKEMONLIST } from './Core/Data/PokemonList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';

 
  pokemonList = POKEMONLIST;
  constructor() { }

  ngOnInit(): void {
    console.log("Dados do app component");
  }

  }

