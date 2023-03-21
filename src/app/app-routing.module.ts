import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { ExcluirPortalComponent } from './templates/excluir-portal/excluir-portal.component';

const routes: Routes = [
  {path: '', component: ListarPortaisComponent},
  {path: 'cadastrar-portal', component: CadastroPortalComponent},
  {path: 'excluir-portal/:id', component: ExcluirPortalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
