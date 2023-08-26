import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { CadastrarPagamentoComponent } from './components/views/cadastrar-pagamento/cadastrar-pagamento.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar-pagamento', component: CadastrarPagamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
