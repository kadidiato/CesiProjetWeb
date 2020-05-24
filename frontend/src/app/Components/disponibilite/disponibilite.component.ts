import {Component, OnInit} from '@angular/core';
import {Disponibilite} from 'src/app/Interface/disponibilite';
import {DisponibiliteService} from 'src/app/Service/disponibilite.service';
import {Router} from "@angular/router";
import {AuthService} from "../../Service/auth.service";
import {ConfirmationService, MessageService} from "primeng";

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.scss']
})
export class DisponibiliteComponent implements OnInit {

  disponibilites: Disponibilite[];
  dispanip: Disponibilite;
  afficherDialog: boolean;
  modif: boolean;

  constructor(private disponibiliteServiece: DisponibiliteService, private route: Router,
              public authService: AuthService, private confirmService: ConfirmationService,
              private msgService: MessageService) {
  }
/**
   * appel de la fonction init();
 *
   */
  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.disponibiliteServiece.getCoursBe().subscribe(res => {
      this.disponibilites = res;
      console.log(this.disponibilites);
    }, err => {
      console.log('error de recup');
    });
  }

  reserver(resa) {
    if (this.authService.isAuth) {
      console.log(`not implemented yet but we've got your id ` + resa);
    } else {
      this.route.navigate(['/sign-in']);
    }
  }

  showAddDispoDialog() {
    this.dispanip = new Disponibilite();
    this.afficherDialog = true;
  }

  showUpdateDispoDialog(d) {
    this.dispanip = d;
    this.modif = true;
    this.afficherDialog = true;
  }

  confirmDelete(id) {
    this.confirmService.confirm({
      message: `Etes-vous sûr·e de vouloir supprimer cette disponibilité ?`,
      accept: () => {
        this.disponibiliteServiece.deleteDispo(id).subscribe((res) => {
          this.init();
          this.msgService.add({
            severity: 'success', summary: 'Suppression disponibilité',
            detail: 'La disponibilité est maintenant a été supprimée'
          });
        }, error => {
          console.log('erreur');
          console.log(error);
          this.msgService.add({
            severity: 'error', summary: 'Suppression disponibilité',
            detail: 'Une erreur est survenue lors de la suppression de la disponibilité'
          });
        })
      },
      reject: () => {
        console.log('rejected');
      }
    });
  }

  onAddDispoDialogHide(): void {
    this.afficherDialog = false;
    this.init();
  }

}
