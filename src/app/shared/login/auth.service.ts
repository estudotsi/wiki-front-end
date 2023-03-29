import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  senha: any;
  response: any;
  responseError: any;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  autenticado: boolean = false;
  private url: string = 'https://localhost:7007/login';
  token!: string;
  //respostaUsuario!: Resposta;
  //retorno!: Resposta;
  nomeUsuario: any;


  constructor(private router: Router, private httpClient: HttpClient) { }

  /*fazerLogin(senha: string){
    if(senha === '123'){
       this.autenticado = true;
       this.mostrarMenuEmitter.emit(true)
       this.router.navigate(['listar']);
    }else{
      this.autenticado = false;
      this.mostrarMenuEmitter.emit(false)
    }
  }*/

  fazerLogin(senha: string){
    const usuarioLogin: Login = {
      id: 0,
      name: "Admin",
      password: senha,
      role: "admin"
    };
    this.httpClient.post(this.url, usuarioLogin, { observe: 'response'}).subscribe({
      next:(res => {
        this.autenticado = true;
        this.response = res.body,
        this.token = this.response.token
        this.nomeUsuario = this.response.user.name;
        this.autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['listar']);
      }),
        error:(error => {
          this.autenticado = false;
          this.mostrarMenuEmitter.emit(false)
          this.responseError = error.error.message
         })
         
    }
    )};
   /*   res => {
         const token = res.body?.resposta!;
        console.log('token', res.body?.resposta);
        sessionStorage.setItem('token', token);
        //this.autenticado = true;
        //this.mostrarMenuEmitter.emit(true)
        //this.router.navigate(['listar']);
      }, err => {
        console.log('Erro no login', err);
      });*/
  


}
