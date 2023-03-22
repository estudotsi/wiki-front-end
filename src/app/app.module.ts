import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortalComponent } from './componentes/portal/portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcluirPortalComponent } from './templates/excluir-portal/excluir-portal.component';
import { AlterarPortalComponent } from './templates/alterar-portal/alterar-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortalComponent,
    ListarPortaisComponent,
    CadastroPortalComponent,
    ExcluirPortalComponent,
    AlterarPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
