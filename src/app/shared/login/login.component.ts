import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  senha: any;
  menssagemErro!: string;
  
  public form!: FormGroup;
  
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('crocknole')){
     this.authService.mostrarMenuEmitter.emit(true);
     this.authService.autenticado = true;
      this.router.navigate(['listar']);
    }
    this.form = this.fb.group({
      id: [0],
      name: ['Admin'],
      password: ['', Validators.compose([
        Validators.required
      ])],
      role: ['admin'],
    });
  }

  fazerLogin(){
    if(this.form.valid){
      this.authService.fazerLogin(this.form.value);
      this.authService.emitirMensagemErro.subscribe(
        res => this.menssagemErro = res
      )
    }
  }

}


