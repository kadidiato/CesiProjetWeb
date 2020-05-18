import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private  authService: AuthService, private formBuilder: FormBuilder, private route: Router,
              private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialisation du formulaire
   */
  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.route.navigate(['/listCours']);

      },
      (error) => {
        this.errorMessage = error;
        console.log(this.errorMessage);
      }
    );

  }
}
