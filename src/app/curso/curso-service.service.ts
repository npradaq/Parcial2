import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/enviorments/enviorment';
import { CursoDetail } from './curso-detail';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {
  private apiUrl: string = "https://gist.githubusercontent.com/t-montes/67cdf7509174f3556f4ff0082045b8ad/raw/4555fca3360200ab195067e92845c5571d31f624/online-courses.json";

constructor(private http: HttpClient) { }

getCursos(): Observable<CursoDetail[]> {
  return this.http
    .get<CursoDetail[]>(this.apiUrl)
    .pipe(
      catchError((err) => throwError(() => new Error('error en el servicio')))
    );
}

getCurso(id: string): Observable<CursoDetail> {
  return this.http.get<CursoDetail>(this.apiUrl + '/' + id);
}

}
