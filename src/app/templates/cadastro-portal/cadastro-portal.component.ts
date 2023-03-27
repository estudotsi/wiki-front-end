import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-cadastro-portal',
  templateUrl: './cadastro-portal.component.html',
  styleUrls: ['./cadastro-portal.component.css']
})
export class CadastroPortalComponent implements OnInit {

  public form!: FormGroup;
  
  constructor(private fb: FormBuilder, private service: PortalService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      urlProducao: [''],
      servidorProducao: [''],
      versaoWordpressProducao: [''],
      urlHomologacao: [''],
      servidorHomologacao: [''],
      versaoWordpressHomologacao: [''],
      responsavel: [''],
      status: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  submit(){
    if(this.form.valid){
      this.service.adicionarPortal(this.form.value).subscribe(() => {
      this.router.navigate(['mensagem-sucesso']);
    
      })
    }
  }

  cancelar() {
    this.router.navigate([''])
  }

}
