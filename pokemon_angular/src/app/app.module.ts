import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCharactersComponent } from './pokemon-characters/pokemon-characters.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCharactersComponent,
    PokemonProfileComponent
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
