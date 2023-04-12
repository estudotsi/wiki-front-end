import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  private url: string = 'https://localhost:7007/report';
  portal!: Portal;

  constructor(private httpClient: HttpClient) { }

  listarPortais(){
    return this.httpClient.get(this.url, { responseType: 'blob', observe: 'response' });
  }

  listarPortal(portal: Portal){
    return this.httpClient.post('https://localhost:7007/portalPdfInfo', portal, { responseType: 'blob', observe: 'response' });
  }

}







