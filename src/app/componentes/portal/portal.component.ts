import { Component, Input, OnInit } from '@angular/core';
import { Portal } from 'src/app/models/portal';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  @Input() portal!: Portal;

  constructor() { }

  ngOnInit(): void {
  }

}
