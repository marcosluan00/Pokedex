import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonFilter } from '../../interfaces/pokemon.interface';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonFilterComponent } from '../pokemon-filter/pokemon-filter.component';
import { Subject, takeUntil, finalize } from 'rxjs';
import { generationLimits } from '../../data/gens';
import { PokemonModalComponent } from '../../components/pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, PokemonFilterComponent, PokemonModalComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  isLoading = true;
  error: string | null = null;
  selectedPokemon: Pokemon | null = null;
  gradientColor: string | null = null;
  isModalOpen = false;

  private destroy$ = new Subject<void>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons('gen1');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadPokemons(generation: string): void {
    this.isLoading = true;
    this.error = null;

    this.pokemonService.getPokemonList(generation as keyof typeof generationLimits)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (pokemons) => {
          this.pokemons = pokemons;
        },
        error: (error) => {
          console.error('Error loading Pokemon:', error);
          this.error = 'Failed to load Pokemon. Please try again later.';
        }
      });
  }

  onFilterChange(filter: PokemonFilter): void {
    if (filter.generation) {
      this.loadPokemons(filter.generation);
    }
  }

  retryLoading(): void {
    this.loadPokemons('gen1');
  }

  openPokemonModal(event: { pokemon: Pokemon; gradient: string }): void {
    this.selectedPokemon = event.pokemon;
    this.gradientColor = event.gradient;
    console.log(event.gradient);
    this.isModalOpen = true;
}

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedPokemon = null;
  }
}
