import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../Service/cours.service";
import {Cours} from "../../Interface/cours";
import {AuthService} from "../../Service/auth.service";
import {ConfirmationService, MessageService} from "primeng";

@Component({
  selector: 'app-list-cours',
  templateUrl: './historique-cours.component.html',
  styleUrls: ['./historique-cours.component.scss']
})
export class HistoriqueCoursComponent implements OnInit {

  cours: Cours[];
  afficherDialog = false;
  courSelectionne: Cours;

  constructor(private coursServiece: CoursService, private confirmService: ConfirmationService,
              private msgService: MessageService) {
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

  ajoutNewCour(): void {
    this.courSelectionne = new Cours();
    this.afficherDialog = true;
  }

  /**
   * fermeture du dialog pop up
   */
  onHideProfilDialog($event): void {
    console.log('Event result');
    console.log($event);
    this.afficherDialog = false;
    if ($event) {
      this.init();
    }
  }


  modificationCour(cour: Cours) {
    this.courSelectionne = cour;
    this.afficherDialog = true;
  }

  confirmDelete(id) {
    this.confirmService.confirm({
      message: `Etes-vous sûr·e de vouloir supprimer cet cour ?`,
      accept: () => {
        this.coursServiece.deleteCour(id).subscribe((res) => {
          this.init();
          this.msgService.add({
            severity: 'success', summary: 'Suppression de cour',
            detail: 'Le a été supprimée avec succes'
          });
        }, error => {
          console.log('erreur');
          console.log(error);
          this.msgService.add({
            severity: 'error', summary: 'Suppression le cour',
            detail: 'Une erreur est survenue lors de la suppression du cour'
          });
        })
      },
      reject: () => {
        console.log('rejected');
      }
    });
  }
}
