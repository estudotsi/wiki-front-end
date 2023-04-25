import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/models/portal';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  portal!: Portal;

  constructor(private service: PortalService, private servicePdf: PdfServiceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((portal) => {
      this.portal = portal
    });
  }

  gerarPdf(portal: Portal){
    this.servicePdf.listarPortal(portal).subscribe({
      next: data => {
        let blob: Blob = data.body as Blob;
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: error => console.error(error),
      complete: () => console.log()
    });
  }

  voltar(){
      this.router.navigate(['listar'])
    }
}
