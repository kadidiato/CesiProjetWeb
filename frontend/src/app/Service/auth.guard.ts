import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.onAuthStateChanged(
          (user) => {
            if (user) {
              if (!route.data.role || route.data.role === localStorage.getItem('type')) {
                resolve(true);
              } else {
                console.log('message de cerberus le AuthGuard: Vous ne pouvez pas acceder à cette page: i ka missin');
                this.router.navigate(['cours']);
                reject(false);
              }
            } else {
              this.router.navigate(['sign-in']);
              reject(false);
            }
          }
        );
      }
    );
  }

}
