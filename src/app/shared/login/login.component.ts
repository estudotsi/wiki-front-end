import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
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
