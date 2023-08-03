import { CadastroComponent } from './../../../../Lista_4/exerc_1/src/app/components/views/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adicionar-animal', component: AdicionarAnimalComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
