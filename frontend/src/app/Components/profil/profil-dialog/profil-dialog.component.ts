import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../../Interface/cours";
import {Eleves} from "../../../Interface/eleve";
import {ElevesService} from "../../../Service/eleves.service";
import {Prof} from "../../../Interface/Prof";
import {ProfService} from "../../../Service/prof.service";

@Component({
  selector: 'app-profil-dialog',
  templateUrl: './profil-dialog.component.html',
  styleUrls: ['./profil-dialog.component.scss']
})
export class ProfilDialogComponent implements OnInit {

  /**
   * reference vers l'utilisateur
   */
  @Input() eleve: Eleves;
  @Input() prof: Prof;

  /**
   * boolean pour afficher le dialog
   */
  @Input() afficherDialog = false;

  /**
   * evenement après la fermeture du dialog
   */
  @Output() onDialogHide = new EventEmitter(true);

  type: string;

  constructor(private elevesService: ElevesService, private profService: ProfService) {
  }

  ngOnInit(): void {
  }

  onHide(): void {
    this.onDialogHide.emit();
  }

  ajoutEleve() {
    this.type = localStorage.getItem('type');
    console.log("valeur type dans le dialog");
    console.log(this.type);
    if (this.type === 'eleve') {
      this.elevesService.updateEleve(this.eleve).subscribe((response) => {
        this.eleve = response;
        this.afficherDialog = false;
        console.log("update eleve ok");
      }, error => {
        console.log(error);
      });
    } else if (this.type === 'prof') {
      console.log("update-------");
      this.profService.updateProf(this.prof).subscribe((response) => {
        this.prof = response;
        this.afficherDialog = false;
        console.log("update prof ok");
      }, error => {
        console.log(error);
      })
    }
  }
}
