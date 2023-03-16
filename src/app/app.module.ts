import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortalComponent } from './componentes/portal/portal.component';
import { ListarPortaisComponent } from './templates/listar-portais/listar-portais.component';
import { CadastroPortalComponent } from './templates/cadastro-portal/cadastro-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortalComponent,
    ListarPortaisComponent,
    CadastroPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
