import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonFilter } from '../../interfaces/pokemon.interface';
import { generationLimits } from '../../data/gens';

@Component({
  selector: 'app-pokemon-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.css'
})

export class PokemonFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<PokemonFilter>();

  filter: PokemonFilter = {};
  generations: string[] = Object.keys(generationLimits);
  
  ngOnInit(): void {
    this.filter.generation = this.generations[0];
    this.onFilterChange();
  }

  onFilterChange(): void {
    this.filterChange.emit({ generation: this.filter.generation });
  }
}
