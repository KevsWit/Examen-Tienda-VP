import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, firstValueFrom, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL : string;
  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:3000/api/registro'
   }

  registro(formValues: {}) :Observable<any>{
    return this.http.post<any>(this.URL, formValues).pipe(
      tap(response => {
          console.log(response)
      })
    )
  }

  // verificarUsuario(user:any){
  //   return this.http.post<any>(this.URL, user)
  // }
}
