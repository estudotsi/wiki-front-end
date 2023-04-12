import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-portal-anonimo',
  templateUrl: './portal-anonimo.component.html',
  styleUrls: ['./portal-anonimo.component.css']
})
export class PortalAnonimoComponent implements OnInit {

  @Input() portalAnonimo!: Portal;
  status: boolean = true;
  listaDeVersoes!: any;
  subscription!: Subscription;
  version!: string;

  constructor(private service: PortalService) { }

  ngOnInit(): void {
 
    this.subscription = this.service.listarVersoesWordpress().subscribe({
      next: data => (this.listaDeVersoes = Object.keys(data),
      this.version = this.listaDeVersoes.pop()),
      error: error => console.error(error),
      complete: () => console.log()
    
    });
  }
  
 ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}

