import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portal } from 'src/app/models/portal';
import { PortalService } from 'src/app/services/portal.service';
import { highlightedStateTrigger, shownStateTrigger } from '../../animations';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
  animations: [highlightedStateTrigger, shownStateTrigger]
  
})
export class PortalComponent implements OnInit {

  @Input() portal!: Portal;
  status: boolean = true;
  listaDeVersoes$!: any;
  subscription!: Subscription;
  teste: any;

  constructor(private service: PortalService) { }

  ngOnInit(): void {
    this.subscription = this.service.listarVersoesWordpress().subscribe({
      next: data => this.listaDeVersoes$ = data,
      error: error => console.error(error),
      complete: () => console.log()
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
