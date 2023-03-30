import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  senha: any;
  response: any;
  responseError!: string;
  emitirMensagemErro = new EventEmitter<string>();
  mostrarMenuEmitter = new EventEmitter<boolean>();
  autenticado: boolean = false;
  private url: string = 'https://localhost:7007/login';
  token!: string;
  nomeUsuario: any;


  constructor(private router: Router, private httpClient: HttpClient) { }

  fazerLogin(usuarioLogin: Login){

    this.httpClient.post(this.url, usuarioLogin, { observe: 'response'}).subscribe({
      next:(res => {
        this.autenticado = true;
        this.response = res.body,
        this.token = this.response.token
        sessionStorage.setItem('crocknole', this.token);
        this.nomeUsuario = this.response.user.name;
        sessionStorage.setItem('usuario', this.nomeUsuario);
        this.autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['listar']);
      }),
        error:(error => {
          this.autenticado = false;
          this.mostrarMenuEmitter.emit(false)
          this.responseError = error.error.message
          this.emitirMensagemErro.emit(this.responseError);
         })
         
    }
    )};

}
