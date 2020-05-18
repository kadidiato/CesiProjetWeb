import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
}
