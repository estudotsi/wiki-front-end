import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-excluir-portal',
  templateUrl: './excluir-portal.component.html',
  styleUrls: ['./excluir-portal.component.css']
})
export class ExcluirPortalComponent implements OnInit {

portal!: Portal;

  constructor( private router: Router, private route: ActivatedRoute, private service: PortalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((portal) => {
      this.portal = portal
    });
  }

  excluirPortal() {
    if(this.portal.id) {
      this.service.excluir(this.portal.id).subscribe(() => {
        this.router.navigate(['listar'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['listar'])
  }


}
