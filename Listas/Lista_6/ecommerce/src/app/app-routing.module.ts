import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutoComponent } from './components/views/produto/adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
