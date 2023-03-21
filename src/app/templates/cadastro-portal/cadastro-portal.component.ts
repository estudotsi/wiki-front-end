import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-portal',
  templateUrl: './cadastro-portal.component.html',
  styleUrls: ['./cadastro-portal.component.css']
})
export class CadastroPortalComponent implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      nomePortal: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      servidorProducao: [''],
      urlProducao: [''],
      versaoWordpressProducao: [''],
      servidorHomogacao: [''],
      urlHomologacao: [''],
      versaoWordpressHomologacao: [''],
      responsavel: [''],
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("teste");
  }

}
