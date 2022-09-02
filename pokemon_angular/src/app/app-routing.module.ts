import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCharactersComponent } from './pokemon-characters/pokemon-characters.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

const routes: Routes = [
  {path:'' , component: PokemonCharactersComponent},
  {path:'profile' , component: PokemonProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
