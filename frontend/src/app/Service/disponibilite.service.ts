import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Disponibilite} from '../Interface/disponibilite';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {
  api_url = '/back/api';

  constructor(private http: HttpClient) {
  }

/**
   * recuperation tous les  coursen connaissant son id tslint:disable-next-line:no-redundant-jsdoc
 *
   */
  getCoursBe(): Observable<any> {
  return this.http.get(`${this.api_url}/disponibilites`);
}

  addDispo(dispo) {
    return this.http.post(`${this.api_url}/disponibilites`, dispo);
  }

  updateDispo(dispo) {
    return this.http.put(`${this.api_url}/disponibilites`, dispo);
  }

  deleteDispo(id) {
    return this.http.delete(`${this.api_url}/disponibilites/${id}`);
  }

  /**
   * recuperation un cour en connaissant son id tslint:disable-next-line:no-redundant-jsdoc
   * @param__id
   */
  async getCoursById(id: string): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      this.http.get(`${this.api_url}/disponibilites?id=${id}`, {responseType: 'text'}).toPromise().then(
        res => {
          console.log('l id disponibilite' + id);
          resolve(JSON.parse(res));
        }, rej => {
          reject(rej);
        }
      );
    }));
  }


  addCours(disponibilite: Disponibilite): Observable<Disponibilite> {
    return this.http.post<Disponibilite>(`${this.api_url}/disponibilites`, disponibilite)
      .pipe(catchError<any, any>(this.handleError));
  }

  /**
   * recuperation un cour en connaissant l'id du professeur
   * @param__id
   */
  async getCoursByProfeseurID(id: string): Promise<Disponibilite> {
    return new Promise<Disponibilite>(((resolve, reject) => {
      this.http.get(`${this.api_url}/profs?id=${id}`, {responseType: 'text'}).toPromise().then(
        res => {
          resolve(JSON.parse(res));
        }, rej => {
          reject(rej);
        }
      );
    }));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
