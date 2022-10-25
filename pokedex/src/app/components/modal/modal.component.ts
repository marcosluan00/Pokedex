import { Component, OnInit, Input } from '@angular/core';
import { PokemonOne } from 'src/app/Core/Data/Pokemon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() pokemonDetails: PokemonOne = {} as PokemonOne;

  option: string = 'about'
  
  constructor() { }

  ngOnInit(): void {
  }

}
