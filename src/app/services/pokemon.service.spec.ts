import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { generationLimits } from '../data/gens';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonService],
      providers: [        
        provideHttpClient(), // Provide the HttpClient along with HttpClientTesting
        provideHttpClientTesting(),
      ]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a list of Pokemon for a given generation', () => {
    const gen = 'gen1';
    const { start, end } = generationLimits[gen];
    const mockPokemonList = Array.from({ length: end - start + 1 }, (_, i) => ({
      name: `pokemon${i + start}`,
      url: `https://pokeapi.co/api/v2/pokemon/${i + start}`
    }));
    const mockPokemonDetails = mockPokemonList.map(pokemon => ({
      name: pokemon.name,
      id: parseInt(pokemon.url.split('/').slice(-2, -1)[0], 10)
    }));

    const reqList = httpMock.expectOne(`${service['apiUrl']}/pokemon?limit=${end}`);
    expect(reqList.request.method).toBe('GET');
    reqList.flush({ results: mockPokemonList });

    mockPokemonList.forEach((pokemon, index) => {
      const reqDetail = httpMock.expectOne(pokemon.url);
      expect(reqDetail.request.method).toBe('GET');
      reqDetail.flush(mockPokemonDetails[index]);
    });
  });
});
