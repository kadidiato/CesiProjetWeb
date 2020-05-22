import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../Service/cours.service";

@Component({
  selector: 'app-list-cours',
  templateUrl: './historique-cours.component.html',
  styleUrls: ['./historique-cours.component.scss']
})
export class HistoriqueCoursComponent implements OnInit {

  cours: any[];
  afficherDialog = false; // boolean pour ouvrir et fermer le dialogue pop up

  constructor(private coursServiece: CoursService) {
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

  afficherDialogCour(): void {
    this.afficherDialog = true;
  }

  /**
   * fermeture du dialog pop up
   */
  onHideProfilDialog(): void {
    this.afficherDialog = false;
  }
}
