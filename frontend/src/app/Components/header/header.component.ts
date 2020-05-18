import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private afAuth: AngularFireAuth, private route: Router) {
  }

  ngOnInit(): void {
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;

        } else {
          this.isAuth = false;
        }
      }
    );
  }


  onSignOut() {
    this.afAuth.auth.signOut();
    this.route.navigate(['/sign-in']);
    //this.init();

  }

}
