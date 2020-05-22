import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Prof} from "../../../Interface/Prof";
import {ProfService} from "../../../Service/prof.service";

@Component({
  selector: 'app-prof-diaolg',
  templateUrl: './profil-prof-diaolg.component.html',
  styleUrls: ['./profil-prof-diaolg.component.scss']
})
export class ProfilProfDiaolgComponent implements OnInit {

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

  onHide(): void {
    this.onDialogHide.emit();
  }

  constructor(private profService: ProfService) {
  }

  ngOnInit(): void {
  }

  ajoutProf() {
    console.log("update-------");
    this.profService.updateProf(this.prof).subscribe((response) => {
      this.prof = response;
      console.log(this.prof);
      this.afficherDialog = false;
      console.log("update prof ok");
    }, error => {
      console.log(error);
    })
  }
}
