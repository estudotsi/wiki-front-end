import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortalComponent } from './componentes/portal/portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcluirPortalComponent } from './templates/excluir-portal/excluir-portal.component';
import { AlterarPortalComponent } from './templates/alterar-portal/alterar-portal.component';
import { MensagemSucessoComponent } from './templates/mensagem-sucesso/mensagem-sucesso.component';
import { MensagemAlterarComponent } from './templates/mensagem-alterar/mensagem-alterar.component';
import { DetalheComponent } from './templates/detalhe/detalhe.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthService } from './shared/login/auth.service';
import { AuthGuard } from './shared/guards/auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './shared/logout/logout.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ConsultaDetalhesComponent } from './componentes/consulta-detalhes/consulta-detalhes.component';
import { PortalAnonimoComponent } from './componentes/portal-anonimo/portal-anonimo.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortalComponent,
    ListarPortaisComponent,
    CadastroPortalComponent,
    ExcluirPortalComponent,
    AlterarPortalComponent,
    MensagemSucessoComponent,
    MensagemAlterarComponent,
    DetalheComponent,
    LoginComponent,
    LogoutComponent,
    ConsultaComponent,
    ConsultaDetalhesComponent,
    PortalAnonimoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
