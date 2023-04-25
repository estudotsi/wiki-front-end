import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/login/auth.service';
import { LoginComponent } from './shared/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wikicg-frontend';
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
