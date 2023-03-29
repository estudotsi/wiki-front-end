import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './login';
import { Resposta } from './resposta';
import { Senha } from './senha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  senha: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.senha);
  
  }
 
}
