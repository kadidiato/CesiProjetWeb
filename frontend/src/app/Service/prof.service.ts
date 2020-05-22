import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Prof} from "../Interface/Prof";

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  public url = '/back/api';

  constructor(private http: HttpClient) {
  }


  getAllProf(): Observable<any> {
    return this.http.get(`${this.url}/profs`);
  }

  getOrSave(params: { [key: string]: string }): Promise<HttpResponse<string>> {
    const P = new HttpParams({fromObject: params});
    return this.http.post(`${this.url}/profs/enregistrerOuConnecter`, P, {
      observe: 'response',
      responseType: 'text',
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    }).toPromise();
  }

  getProfByid(id: string) {
    return this.http.get<Prof>(`${this.url}/profs/${id}`);
  }

  updateProf(prof): Observable<Prof> {
    return this.http.put<Prof>(`${this.url}/profs`, prof);
  }
}
