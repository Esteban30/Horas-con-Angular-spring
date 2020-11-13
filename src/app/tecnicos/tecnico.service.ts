import { Injectable } from '@angular/core';
import { TECNICOS } from './tecnicos.json';
import { Tecnico } from './tecnico';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TecnicoService {
  private urlEndPoint: string = 'http://localhost:8080/api/tecnicos';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getTecnicos(): Observable<Tecnico[]> {
    //return of(TECNICOS);
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Tecnico[]));
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(this.urlEndPoint, tecnico, {
      headers: this.httpHeaders,
    });
  }
  getTecnico(id): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${this.urlEndPoint}/${id}`);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(
      `${this.urlEndPoint}/${tecnico.id}`,
      tecnico,
      { headers: this.httpHeaders }
    );
  }
  delete(id): Observable<Tecnico> {
    return this.http.delete<Tecnico>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
