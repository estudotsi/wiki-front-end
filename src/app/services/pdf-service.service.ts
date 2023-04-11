import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  private url: string = 'https://localhost:7007/report';

  constructor(private httpClient: HttpClient) { }

  listarPortais(){
    return this.httpClient.get(this.url, { responseType: 'blob', observe: 'response' });
  }

}




