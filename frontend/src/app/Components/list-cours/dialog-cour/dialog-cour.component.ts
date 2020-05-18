import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../../Interface/cours";
import {CoursService} from "../../../Service/cours.service";
import {ProfService} from "../../../Service/prof.service";
import {Prof} from "../../../Interface/Prof";

@Component({
  selector: 'app-dialog-cour',
  templateUrl: './dialog-cour.component.html',
  styleUrls: ['./dialog-cour.component.scss']
})
export class DialogCourComponent implements OnInit {

  profs: [{ id: number, text: string }];
  cours: Cours;

  /**
   * reference vers l'utilisateur
   */
  @Input() cour: Cours;

  /**
   * boolean pour afficher le dialog
   */
  @Input() afficherDialog = false;

  /**
   * evenement après la fermeture du dialog
   */
  @Output() onDialogHide = new EventEmitter(true);
  typesProf: [1, 2];

  constructor(private coursService: CoursService, private profService: ProfService) {
  }

  ngOnInit(): void {
    this.getAllProfs();
  }

  onHide(): void {
    this.onDialogHide.emit();
  }

  ajouterCour(cour: Cours) {
    this.coursService.addCours(cour).subscribe((response) => {
      console.log(response);
      console.log("ok");
    }, error => {
      console.log(error);
    });

  }

  getAllProfs() {
    this.profService.getAllProf().subscribe((res) => {
      this.profs = [Object.assign([])];
      res.map(c => {
        const elt = {id: c.id, text: c.nomProf + ' ' + c.prenomProf};
        if (this.profs.indexOf(elt) === -1) {
          this.profs.push(elt);
        }
      });
      console.log(this.profs);
    }, error => {
      console.log(error);
    });
  }
}
