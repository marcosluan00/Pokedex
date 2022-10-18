import { Component, OnInit, Input } from '@angular/core';
import { POKEMONLIST } from 'src/app/Core/Data/PokemonList';
import { Pokemon } from 'src/app/Core/Data/Pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() receberLista!: Pokemon; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.receberLista);
  }

}
