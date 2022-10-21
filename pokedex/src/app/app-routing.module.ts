import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { DetailsComponent } from './components/card-pokemon/details/details.component';

const routes: Routes = [
    { path: 'pokemon', component: CardPokemonComponent},
    { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
    { path: 'pokemon/:id', component: DetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }