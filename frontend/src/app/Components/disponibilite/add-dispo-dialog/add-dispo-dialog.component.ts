import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Disponibilite} from "../../../Interface/disponibilite";
import {DisponibiliteService} from "../../../Service/disponibilite.service";
import {MessageService} from "primeng";
import {AuthService} from "../../../Service/auth.service";

@Component({
  selector: 'app-add-dispo-dialog',
  templateUrl: './add-dispo-dialog.component.html',
  styleUrls: ['./add-dispo-dialog.component.scss']
})
export class AddDispoDialogComponent implements OnInit {

  @Input() dispo: Disponibilite;
  @Input() modif = false;
  @Input() showDialog = false;
  @Output() onDialogHide = new EventEmitter(true);

  constructor(private dispoService: DisponibiliteService, private msgService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.modif) {
      this.dispo = new Disponibilite();
    }
  }

  validateForm() {
    if (this.modif) {
      this.updateDispo();
    } else {
      this.addDispo();
    }
  }

  updateDispo() {
    this.dispoService.updateDispo(this.dispo).subscribe((res) => {
      this.showDialog = false;
      this.msgService.add({
        severity: 'success', summary: 'Mise à jour disponibilité',
        detail: 'Votre dispo a été mise à jour'
      });
    }, error => {
      console.log('error while posting dispo');
      console.log(error);
      this.msgService.add({
        severity: 'error', summary: 'Mise à jour disponibilité',
        detail: `Une erreur est survenue lors de la mise à jour de la disponibilité`
      });
    });
  }

  addDispo() {
    this.dispo.profId = this.authService.user.id;
    this.dispoService.addDispo(this.dispo).subscribe((res) => {
      this.showDialog = false;
      this.msgService.add({
        severity: 'success', summary: 'Nouvelle disponibilité',
        detail: 'Votre nouvelle dispo a été prise en compte'
      });
    }, error => {
      console.log('error while posting dispo');
      console.log(error);
      this.msgService.add({
        severity: 'error', summary: 'Nouvelle disponibilité',
        detail: `Une erreur est survenue lors de l'enregistrement de la nouvelle disponibilité`
      });
    })
  }

  onShow() {
    if (!this.modif) {
      this.dispo = new Disponibilite();
    }

    console.log('dispanip');
    console.log(this.dispo);
  }

  onHide(): void {
    this.onDialogHide.emit();
  }
}
