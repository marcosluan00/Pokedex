import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CardPokemonComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/cards/details/details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: 'pokemon', component: CardPokemonComponent},
    { path: '', component: HomeComponent  },
    { path: 'pokemon/:id', component: DetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
