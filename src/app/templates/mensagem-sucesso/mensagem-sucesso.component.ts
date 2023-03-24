import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem-sucesso',
  templateUrl: './mensagem-sucesso.component.html',
  styleUrls: ['./mensagem-sucesso.component.css']
})
export class MensagemSucessoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate([''])
  }


}
