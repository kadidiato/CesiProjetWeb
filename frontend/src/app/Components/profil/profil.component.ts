import {Component, OnInit} from '@angular/core';
import {Eleves} from "../../Interface/eleve";
import {Prof} from "../../Interface/Prof";
import {AngularFireAuth} from "@angular/fire/auth";
import {ElevesService} from "../../Service/eleves.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  eleve: Eleves; // l'utilisateur courant
  prof: Prof; // l'utilisateur courant
  userPhoto: Eleves = { // je stock la photo de profil recuperer dans firebase
    photo: '',
  };

  constructor(private afAuth: AngularFireAuth, private elevesService: ElevesService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    await this.afAuth.user.subscribe(u => {
      if (u) {
        console.log(u.uid);
        this.elevesService.getEleveByid(this.eleve.id).subscribe(res => {
          this.eleve = res;
          this.userPhoto.photo = u.photoURL;
        }, r => {
          console.log('errr' + r);
        });
      }
    });
  }


  afficherDialogProfil() {

  }
}
