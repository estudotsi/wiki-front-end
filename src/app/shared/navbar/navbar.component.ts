import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { PdfServiceService } from 'src/app/services/pdf-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  subscription!: Subscription;


  constructor(private service: PdfServiceService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const usuario = sessionStorage.getItem('usuario');
    this.user = usuario;
  }

    listarPortais(){
      this.service.listarPortais().subscribe({
        next: data => {
          let blob: Blob = data.body as Blob;
          let url = window.URL.createObjectURL(blob);
          window.open(url);
        },
        error: error => console.error(error),
        complete: () => console.log()
      });
    }

    download(){
      
    }
}





