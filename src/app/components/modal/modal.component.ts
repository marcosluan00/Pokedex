import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/model/pokemon.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() pokemonDetails: Pokemon = {} as Pokemon;

  option: string = 'about'

  constructor() { }

  ngOnInit(): void {
  }

}
