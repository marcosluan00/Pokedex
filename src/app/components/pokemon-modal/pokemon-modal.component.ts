import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { StatColorPipe } from '../../pipes/stat-color.pipe';

@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [CommonModule, StatColorPipe],
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent {
  @Input() pokemon: Pokemon | null = null;
  @Input() isOpen = false;
  @Input() gradientColor: string | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.isOpen = false;
    this.close.emit();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  getStatPercentage(stat: number): number {
    return (stat / 255) * 100;
  }
}
