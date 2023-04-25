import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portal } from 'src/app/models/portal';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  listaDePortais!: Portal[];
  subscription!: Subscription;

  constructor(private service: PortalService, private servicePdf: PdfServiceService) { }

  ngOnInit(): void {
    this.subscription = this.service.listarPortais().subscribe({
      next: data => this.listaDePortais = data,
      error: error => console.error(error),
      complete: () => console.log()
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

}

