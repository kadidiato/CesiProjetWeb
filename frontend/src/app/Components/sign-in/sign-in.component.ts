import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";
import {auth} from "firebase";
import {ElevesService} from "../../Service/eleves.service";
import {Eleves} from "../../Interface/eleve";
import {ProfService} from "../../Service/prof.service";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  eleve: Eleves;
  signInForm: FormGroup;
  errorMessage: any;
  type: string;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService,
              private profService: ProfService, private elevesService: ElevesService,
              private formBuilder: FormBuilder, private route: Router,
              @Inject(DOCUMENT) private document: Document) {
    afAuth.user.subscribe(u => console.log('L\'utilisateur est ', u));
  }

  ngOnInit(): void {
    this.initForm();
    this.authService.checkAndSetAuthState();
  }

  /**
   * login with Google acompt
   */
  loginGoogle() {
    this.type = this.signInForm.get('type').value;
    if (this.type) {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        u => {
          this.route.navigate(['/profil']);
          this.sendToServeur(this.type);
          /*this.message.add({
            severity: 'success',
            summary: `Bienvenue ${u.user.displayName}`,
          });*/
        },
        (error) => {
          this.errorMessage = error;
          /* this.message.add({
             severity: 'error',
             summary: 'Erreur de connexion',
             detail: 'Une erreur est survenue l\'ors de la connexion !'
           });*/
        }
      );
    } else {
      this.errorMessage = 'selectionnez un type';
    }
  }

  // formGroup pour la connexion avec email et le passwod
  initForm() {
    this.signInForm = this.formBuilder.group({
      type: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  /**
   * methode de connexion avec l'email et le mot de pass
   */
  onSubmit() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.type = this.signInForm.get('type').value;
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      u => {
        this.sendToServeur(this.type);
        this.route.navigate(['/profil']);
        /*this.message.add({severity:'success',
          summary:`Bienvenue `,
          detail:'Vous pouvez commander vos films et plats 😁!'});
        this.sendServeur();*/
      },
      (error) => {
        this.errorMessage = error;
        /*this.message.add({severity:'error',
          summary:'Erreur de connexion',
          detail:'Une erreur est survenue l\'ors de la connexion !'});*/
      }
    );
  }


  sendToServeur(type) {
    this.afAuth.user.subscribe(eleve => {
      localStorage.setItem('type', this.type);
      let i;
      let nomEleve;
      let prenomEleve;
      if (eleve.displayName != null) {
        i = eleve.displayName.indexOf(' '); // couper en 2 displayname pour avoir le prenom et le nom
      }
      if (type === 'eleve') {
        if (eleve.displayName != null) {
          nomEleve = eleve.displayName.substr(0, i);
          prenomEleve = eleve.displayName.substr(i);
        }
        this.elevesService.getOrSave({
          // variable que le serveur s'attend a recevoir
          nomEleve,
          prenomEleve,
          mailEleve: eleve.email,
          photo: eleve.photoURL,
          uid: eleve.uid,
        }).then(data => {
          this.type = '';
          this.authService.user = data;
        });
        this.route.navigate(['/profil']);
        this.document.location.reload();
      } else if (type === 'prof') {
        let nomProf;
        let prenomProf;
        if (eleve.displayName != null) {
          nomProf = eleve.displayName.substr(0, i);
          prenomProf = eleve.displayName.substr(i);
        }
        this.profService.getOrSave({
          // variable que le serveur s'attend a recevoir
          nomProf,
          prenomProf,
          mailProf: eleve.email,
          photo: eleve.photoURL,
          uid: eleve.uid,
        }).then(data => {
          this.type = '';
          this.authService.user = data;
        });
        this.authService.checkAndSetAuthState();
        this.route.navigate(['/profil']);
        this.document.location.reload();
      } else {
        this.authService.disconnect();
      }
    });
  }

  refrech(): void {
    window.location.reload();
  }

}
