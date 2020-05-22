import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Eleves} from "../Interface/eleve";

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  public url = '/back/api';

  constructor(private http: HttpClient) {
  }

  getAllEleve(): Observable<any> {
    return this.http.get(`${this.url}/eleves`);
  }

  getEleveByid(id: string) {
    return this.http.get<Eleves>(`${this.url}/eleves/${id}`);
  }

  /*  addEleve(eleve: Eleves): Observable<Eleves> {
      return this.http.post<Eleves>(`${this.url}`, eleve);
    }*/

  getOrSave(params: { [key: string]: string }): Promise<HttpResponse<string>> {
    const P = new HttpParams({fromObject: params});
    return this.http.post(`${this.url}/eleves/`, P, {
      observe: 'response',
      responseType: 'text',
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    }).toPromise();
  }

  updateEleve(eleve): Observable<Eleves> {
    return this.http.put<Eleves>(`${this.url}/eleves`, eleve);
  }

  getReservedCourses(id) {
    return this.http.get(`${this.url}/eleveReservationsCours/${id}`)
  }

  cancelResaByCour(idEleve, idCours) {
    return this.http.delete(`${this.url}/reservationsCours/${idEleve}/annuler/${idCours}`);
  }
}
