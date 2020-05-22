import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../../Interface/cours";
import {CoursService} from "../../../Service/cours.service";
import {ProfService} from "../../../Service/prof.service";

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

  constructor(private coursService: CoursService, private profService: ProfService, private coursServiece: CoursService) {
  }

  ngOnInit(): void {
    this.cour = {
      dateCour: "",
      description: "",
      heureCour: "",
      id: "",
      matiere: "",
      profId: "",
    };
    this.getAllProfs();
  }

  onHide(): void {
    this.onDialogHide.emit();
  }

  async getAllcours() {
    this.coursServiece.getCoursBe().subscribe(res => {
      this.cours = res;
      console.log(this.cours);
    }, err => {
      console.log('error de recup');
    });
  }

  ajouterCour() {
    console.log("-------");
    console.log(this.cour);
    this.coursService.addCours(this.cour).subscribe((response) => {
      this.afficherDialog = false;
      this.getAllcours();
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
