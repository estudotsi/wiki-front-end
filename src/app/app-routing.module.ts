import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';

const routes: Routes = [
  {path: '', component: ListarPortaisComponent},
  {path: 'cadastrar-portal', component: CadastroPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
