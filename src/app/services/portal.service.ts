import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Portal } from '../models/portal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private url: string = 'https://localhost:7007/Portal';
  teste: any;
  handleError: any

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  public listarPortais(): Observable<Portal[]>{
    return this.httpClient.get<Portal[]>(this.url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  adicionarPortal(portal: Portal): Observable<Portal> {
    return this.httpClient.post<Portal>(this.url, portal).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}


