import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { ExcluirPortalComponent } from './templates/excluir-portal/excluir-portal.component';
import { AlterarPortalComponent } from './templates/alterar-portal/alterar-portal.component';
import { MensagemSucessoComponent } from './templates/mensagem-sucesso/mensagem-sucesso.component';
import { MensagemAlterarComponent } from './templates/mensagem-alterar/mensagem-alterar.component';
import { DetalheComponent } from './templates/detalhe/detalhe.component';

const routes: Routes = [
  {path: '', component: ListarPortaisComponent},
  {path: 'cadastrar-portal', component: CadastroPortalComponent},
  {path: 'excluir-portal/:id', component: ExcluirPortalComponent},
  {path: 'alterar-portal/:id', component: AlterarPortalComponent},
  {path: 'mensagem-sucesso', component: MensagemSucessoComponent},
  {path: 'mensagem-alterar', component: MensagemAlterarComponent},
  {path: 'detalhe/:id', component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
