import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardPokemonComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/cards/details/details.component';
import { ModalComponent } from './components/modal/modal.component';
import { IndicatorBarComponent } from './shared/indicator-bar/indicator-bar.component';
import { BackgroundDirective } from './shared/diretivas/background.directive';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    DetailsComponent,
    ModalComponent,
    IndicatorBarComponent,
    BackgroundDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
