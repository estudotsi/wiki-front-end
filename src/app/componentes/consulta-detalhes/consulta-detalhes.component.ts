import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/models/portal';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-consulta-detalhes',
  templateUrl: './consulta-detalhes.component.html',
  styleUrls: ['./consulta-detalhes.component.css']
})
export class ConsultaDetalhesComponent implements OnInit {

  portal!: Portal;

  constructor(private service: PortalService, private servicePdf: PdfServiceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((portal) => {
      this.portal = portal
    });
  }

  login(){
    this.router.navigate(['login']);
  }

  listarPortais(){
    this.servicePdf.listarPortais().subscribe({
      next: data => {
        let blob: Blob = data.body as Blob;
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: error => console.error(error),
      complete: () => console.log()
    });
  }

  gerarPdf(portal: Portal){
    this.servicePdf.listarPortalAnonimo(portal).subscribe({
      next: data => {
        let blob: Blob = data.body as Blob;
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: error => console.error(error),
      complete: () => console.log()
    });
  }

}
