import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  api_url = '/back/api';

  constructor(private http: HttpClient) {
  }

  reserver(reservation) {
    return this.http.post(`${this.api_url}/reservationsCours`, reservation);
  }
}
