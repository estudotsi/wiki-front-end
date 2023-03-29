import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { ExcluirPortalComponent } from './templates/excluir-portal/excluir-portal.component';
import { AlterarPortalComponent } from './templates/alterar-portal/alterar-portal.component';
import { MensagemSucessoComponent } from './templates/mensagem-sucesso/mensagem-sucesso.component';
import { MensagemAlterarComponent } from './templates/mensagem-alterar/mensagem-alterar.component';
import { DetalheComponent } from './templates/detalhe/detalhe.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listar', component: ListarPortaisComponent, canActivate: [AuthGuard]},
  {path: 'cadastrar-portal', component: CadastroPortalComponent, canActivate: [AuthGuard]},
  {path: 'excluir-portal/:id', component: ExcluirPortalComponent, canActivate: [AuthGuard]},
  {path: 'alterar-portal/:id', component: AlterarPortalComponent, canActivate: [AuthGuard]},
  {path: 'mensagem-sucesso', component: MensagemSucessoComponent, canActivate: [AuthGuard]},
  {path: 'mensagem-alterar', component: MensagemAlterarComponent, canActivate: [AuthGuard]},
  {path: 'detalhe/:id', component: DetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
