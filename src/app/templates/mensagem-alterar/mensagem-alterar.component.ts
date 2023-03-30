import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem-alterar',
  templateUrl: './mensagem-alterar.component.html',
  styleUrls: ['./mensagem-alterar.component.css']
})
export class MensagemAlterarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['listar'])
  }


}
