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
   response: any;
   response2: any;
   mostrarMenuEmitter = new EventEmitter<boolean>();
   private autenticado: boolean = false;
   private url: string = 'https://localhost:7007/login';
   token!: string;
   //respostaUsuario!: Resposta;
   //retorno!: Resposta;
   resposta3: any;


  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  /*fazerLogin(){
    this.response = this.authService.fazerLogin(this.senha);
    console.log("Aqui1", this.response);
  }*/
  fazerLogin(){
    const usuarioLogin: Login = {
      id: 0,
      name: "Admin",
      password: this.senha,
      role: "admin"
    };
    this.httpClient.post(this.url, usuarioLogin, { observe: 'response'}).subscribe({
      next:(res => {
        this.autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.response = res.body,
        this.token = this.response.token
        this.resposta3 = this.response.user.name;
        console.log(this.resposta3);
      }),
        error:(error => {
          this.autenticado = false;
          this.mostrarMenuEmitter.emit(false)
          this.response2 = error.error.message
         })
         
    }
    )};

}
