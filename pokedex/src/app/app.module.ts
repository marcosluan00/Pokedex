import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { DetailsComponent } from './components/card-pokemon/details/details.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './shared/header/header.component';
import { IndicatorBarComponent } from './shared/indicator-bar/indicator-bar.component';
import { BackgroundDirective } from './shared/diretivas/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    DetailsComponent,
    ModalComponent,
    HeaderComponent,
    IndicatorBarComponent,
    BackgroundDirective
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
