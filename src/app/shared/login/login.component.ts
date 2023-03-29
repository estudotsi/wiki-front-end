import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  menssagemErro!: string;

  public form!: FormGroup;
  
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0],
      name: ['Admin'],
      password: ['', Validators.compose([
        Validators.required
      ])],
      role: ['admin'],
    });
  }

  /*fazerLogin(){
    this.authService.fazerLogin(this.senha);
    this.authService.emitirMensagemErro.subscribe(
      res => this.menssagemErro = res
    )
  }*/

  fazerLogin(){
    if(this.form.valid){
      this.authService.fazerLogin(this.form.value);
      this.authService.emitirMensagemErro.subscribe(
        res => this.menssagemErro = res
      )
    }
  }

}


