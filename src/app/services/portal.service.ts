import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private url: string = 'http://homolog-controlesocialup.cg.df.gov.br/Portal';
  private urlWordpress: string = "http://api.wordpress.org/core/stable-check/1.0/";
  teste: any;
  handleError: any;

  constructor(private httpClient: HttpClient) { }

  listarVersoesWordpress(){
    return this.httpClient.get(this.urlWordpress);
}

  listarPortais(){
    const token = sessionStorage.getItem('crocknole');
    console.log("Aqui: ", token);
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token

     });
    return this.httpClient.get<Portal[]>(this.url, { headers: reqHeader });
}

  adicionarPortal(portal: Portal): Observable<Portal> {
    const token = sessionStorage.getItem('crocknole');
    console.log("Aqui: ", token);
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token

     });
    return this.httpClient.post<Portal>(this.url, portal, { headers: reqHeader }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  excluir(id: number): Observable<Portal> {
    const token = sessionStorage.getItem('crocknole');
    console.log("Aqui: ", token);
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token

     });
    const url = `${this.url}/${id}`
    return this.httpClient.delete<Portal>(url, { headers: reqHeader }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarPorId(id: number): Observable<Portal> {
    const url = `${this.url}/${id}`
    return this.httpClient.get<Portal>(url)
  }

  alterar(portal: Portal): Observable<Portal> {
    const token = sessionStorage.getItem('crocknole');
    console.log("Aqui: ", token);
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token

     });
    console.log("Aqui", portal.id)
    const url = `${this.url}/${portal.id}`
    return this.httpClient.put<Portal>(url, portal, { headers: reqHeader }).pipe(
    map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log("Ocorreu um erro!", e);
    return EMPTY;
  }
}


