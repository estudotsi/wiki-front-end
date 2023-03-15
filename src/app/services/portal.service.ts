import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private url: string = 'https://localhost:7007/Portal';
  teste: any;

  constructor(private httpClient: HttpClient) { }

  public listarPortais(): Observable<Portal[]>{
    return this.httpClient.get<Portal[]>(this.url);
  }

}
