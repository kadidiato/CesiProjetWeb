import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../../Interface/cours";
import {CoursService} from "../../../Service/cours.service";
import {ProfService} from "../../../Service/prof.service";
import {AuthService} from "../../../Service/auth.service";

@Component({
  selector: 'app-dialog-cour',
  templateUrl: './dialog-cour.component.html',
  styleUrls: ['./dialog-cour.component.scss']
})
export class DialogCourComponent implements OnInit {

  profs: [{ id: number, text: string }];
  // cours: Cours;

  @Input() cour: Cours;

  @Input() afficherDialog = false;

  @Output() onDialogHide = new EventEmitter(true);

  titreDialog: string;
  status: string;


  constructor(private coursService: CoursService, private profService: ProfService, private coursServiece: CoursService,
              protected authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.modeModification()) {
      this.status = "";
    }
  }

  onHide(): void {
    this.onDialogHide.emit();
  }

  modeModification(): boolean {
    return this.cour.id !== undefined
  }

  private setTitreDialog(): void {
    setTimeout(() => {
      if (this.modeModification()) {
        this.titreDialog = `Modification du cour ${this.cour.matiere}`;
        this.status = this.cour.status === 0 ? "dispo" : "indispo;"
      } else {
        this.titreDialog = `Ajout d'un nouveau cour`;
      }
    })
  }


  onShow(): void {
    this.setTitreDialog();
  }

  valider(): void {
    if (this.modeModification()) {
      this.coursService.updateCour(this.cour).subscribe(response => {
        this.afficherDialog = false;
        this.onDialogHide.emit(true);
      }, error => {
        this.onDialogHide.emit(false);
      })
    } else {
      this.cour.profId = this.authService.user.id;
      this.cour.status = this.status === "dispo" ? 0 : 1;
      this.coursService.addCours(this.cour).subscribe((response) => {
        this.afficherDialog = false;
        this.onDialogHide.emit(true);
      }, error => {
        console.log(error);
        this.onDialogHide.emit(false);
      });
    }

  }
}
