import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListagemPokemonsComponent } from './components/shared/listagem-pokemons/listagem-pokemons.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: ListagemPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
