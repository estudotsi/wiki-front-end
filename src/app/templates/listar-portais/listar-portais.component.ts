import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PortalComponent } from 'src/app/componentes/portal/portal.component';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-listar-portais',
  templateUrl: './listar-portais.component.html',
  styleUrls: ['./listar-portais.component.css']
})
export class ListarPortaisComponent implements OnInit, OnDestroy {

    listaDePortais$!: Portal[];
    subscription!: Subscription;

    constructor(private service: PortalService) { }

    ngOnInit(): void {
      this.subscription = this.service.listarPortais().subscribe({
        next: data => this.listaDePortais$ = data,
        error: error => console.error(error),
        complete: () => console.log()
      });
     }

     ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }


 }
