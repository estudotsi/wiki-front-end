import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  private autenticado: boolean = false;
  private url: string = 'https://localhost:7007/login';
  token!: string;
  respostaRetorno!: Resposta;
  retorno: any

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

  fazerLogin(senha: string): any{
    const usuarioLogin: Login = {
      id: 0,
      name: "Admin",
      password: senha,
      role: "admin"
    };
    this.httpClient.post(this.url, usuarioLogin, { observe: 'response'}).subscribe({
      next:(res => {
        this.autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        return res.body,
        console.log()}),
        error:(error => {
          this.autenticado = false;
          this.mostrarMenuEmitter.emit(false)
          this.retorno = JSON.stringify(error.error.message)
          return this.retorno,
          console.log(this.retorno)})
         
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
