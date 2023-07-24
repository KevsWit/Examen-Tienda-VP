import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private serverUrl = 'http://192.168.100.5:3000'; // Reemplaza con la URL de tu servidor Node.js

  private ultimoDatoHexSubject = new BehaviorSubject<string>('');
  ultimoDatoHex$ = this.ultimoDatoHexSubject.asObservable();

  constructor(private http: HttpClient) {}

  obtenerDatoHex(datoHex: string) {
    // Define los parámetros para la solicitud HTTP GET
    const params = new HttpParams().set('datoHex', datoHex);

    // Realiza la solicitud HTTP GET al servidor
    return this.http.get<string>(`${this.serverUrl}/datohex`, { params }).pipe(
      tap((datoRecibido: string) => {
        this.ultimoDatoHexSubject.next(datoRecibido);
      })
    );
  }

  obtenerUltimoDatoHex() {
    // Realiza la solicitud HTTP GET al servidor para obtener el último valor almacenado
    return this.http.get(`${this.serverUrl}/ultimoDatoHex`, { responseType: 'text' });
  }
}






