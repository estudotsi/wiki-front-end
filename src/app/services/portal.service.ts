import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private url: string = 'https://localhost:7007/Portal';
  teste: any;
  handleError: any

  constructor(private httpClient: HttpClient) { }

  public listarPortais(): Observable<Portal[]>{
    return this.httpClient.get<Portal[]>(this.url);
  }

  adicionarPortal(portal: Portal): Observable<Portal> {
    return this.httpClient.post<Portal>(this.url, portal);
  }

}
