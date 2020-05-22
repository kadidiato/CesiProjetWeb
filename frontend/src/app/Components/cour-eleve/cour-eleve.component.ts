import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../Service/cours.service";
import {Cours} from "../../Interface/cours";
import {ReservationService} from "../../Service/reservation.service";
import {Reservation} from "../../Interface/Reservation";
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng";

@Component({
  selector: 'app-cour-eleve',
  templateUrl: './cour-eleve.component.html',
  styleUrls: ['./cour-eleve.component.scss']
})
export class CourEleveComponent implements OnInit {

  cours: Cours;
  reservation: Reservation;

  constructor(private coursServiece: CoursService, private route: Router,
              private reservationService: ReservationService, private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.coursServiece.getCoursBe().subscribe(res => {
      this.cours = res;
      console.log(this.cours);
    }, err => {
      console.log('error de recup');
    });
  }

  reserver(cours) {
    if (this.authService.isAuth) {
      this.reservation = {
        coursId: cours,
        eleveId: this.authService.user.id,
        datereservation: new Date().toDateString(),
      };

      this.reservationService.reserver(this.reservation).subscribe((res) => {
        console.log("res de reserver");
        console.log(res);
      }, error => {
        console.log("error de reserver");
        console.log(error);
        let msg = 'Une erreur est survenue lors de la réservation';
        if (error.status === 304) {
          msg = 'Vous avez deja reservé ce cours'
        }
        this.messageService.add({
          severity: 'error', summary: 'Information réservation',
          detail: msg
        });
      });
    } else {
      this.route.navigate(['/sign-in']);
    }
  }
}
