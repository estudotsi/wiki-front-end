import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-alterar-portal',
  templateUrl: './alterar-portal.component.html',
  styleUrls: ['./alterar-portal.component.css']
})
export class AlterarPortalComponent implements OnInit {

  public form!: FormGroup;
  portal!: Portal;

  constructor(private fb: FormBuilder, private service: PortalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((portal) => {
      this.form = this.fb.group({
        id: [portal.id],
        nome: [portal.nome, Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.required
        ])],
        urlProducao: [portal.urlProducao],
        servidorProducao: [portal.servidorProducao],
        versaoWordpressProducao: [portal.versaoWordpressProducao],
        urlHomologacao: [portal.urlHomologacao],
        servidorHomologacao: [portal.servidorHomologacao],
        versaoWordpressHomologacao: [portal.versaoWordpressHomologacao],
        responsavel: [portal.responsavel],
      });
    });
  }

  editarPortal() {
    console.log("Aqui mesmo: ", this.form.value);
    this.service.alterar(this.form.value).subscribe(() => {
      this.router.navigate(['mensagem-alterar'])
    })
  }

  cancelar() {
    this.router.navigate([''])
  }

}
