import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  private url: string = 'http://homolog-controlesocialup.cg.df.gov.br/report';
  portal!: Portal;

  constructor(private httpClient: HttpClient) { }

  listarPortais(){
    return this.httpClient.get(this.url, { responseType: 'blob', observe: 'response' });
  }

  listarPortal(portal: Portal){
    return this.httpClient.post('http://homolog-controlesocialup.cg.df.gov.br/portalPdfInfo', portal, { responseType: 'blob', observe: 'response' });
  }

  listarPortalAnonimo(portal: Portal){
    portal.servidorProducao = "";
    portal.servidorHomologacao = "";
    return this.httpClient.post('http://homolog-controlesocialup.cg.df.gov.br/portalPdfInfo', portal, { responseType: 'blob', observe: 'response' });
  }

}









