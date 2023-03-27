import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  portal!: Portal;

  constructor(private service: PortalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((portal) => {
      this.portal = portal
    });
  }

}
