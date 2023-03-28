import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  private autenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(senha: string){
    if(senha === '123'){
       this.autenticado = true;
       this.mostrarMenuEmitter.emit(true)
       this.router.navigate(['listar']);
    }else{
      this.autenticado = false;
      this.mostrarMenuEmitter.emit(false)
    }
  }
}
