import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { typeColors } from '../../data/colors';

interface TypeColors {
  [key: string]: string;
}

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() cardClick = new EventEmitter<{ pokemon: Pokemon; gradient: string }>();
  typeColors = typeColors;

  getGradientBackground(): string {
    const mainType = this.pokemon.types[0].type.name;
    const color = this.typeColors[mainType];
    return `linear-gradient(45deg, ${color.main}, ${color.secondary})`;
  }

  openModal(): void {
    const gradient = this.getGradientBackground();
    this.cardClick.emit({ pokemon: this.pokemon, gradient });
  }
}
