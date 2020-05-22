import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/auth";
import {ElevesService} from "./eleves.service";
import {ProfService} from "./prof.service";

function AlxToObjectString(data?: object): {[key: string]: string} {
  const res = {};
  for (const k of Object.keys(data || {}) ) {
    const v = data[k];
    res[k] = typeof v === 'string' ? v : JSON.stringify(v);
  }
  return res;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_redirect = '/back/api';
  public isAuth: boolean;
  public user;
  public type: string;

  constructor(private http: HttpClient, private afAuth: AngularFireAuth,
              private elevesService: ElevesService, private  profService: ProfService) {
    this.checkAndSetAuthState();
  }

  get getFirebaseToken() {
    return localStorage.getItem('token');
  }

  disconnect() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('type');
    this.isAuth = false;
  }

  checkAndSetAuthState() {
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          this.type = localStorage.getItem('type');
          if (this.type === 'prof') {
            this.getProfInfofromDB(user.uid);
          } else if (this.type === 'eleve') {
            this.getEleveInfofromDB(user.uid);
          }
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  getEleveInfofromDB(uid) {
    this.elevesService.getEleveByid(uid).subscribe(res => {
      // console.log("getEleveInfofromDB");
      // console.log(res);
      this.user = res;
    }, r => {
      console.error('errr');
      console.error(r);
    });
  }

  getProfInfofromDB(uid) {
    this.profService.getProfByid(uid).subscribe(res => {
      this.user = res;
    }, r => {
      console.log('errr' + r);
    });
  }
}
