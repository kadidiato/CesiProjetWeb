import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule, NavbarModule} from 'angular-bootstrap-md';
// Angular Forms Modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {SignInComponent} from './Components/sign-in/sign-in.component';
import {FooterComponent} from './Components/footer/footer.component';
import {ForgotPasswordComponent} from './Components/forgot-password/forgot-password.component';
import {SignUpComponent} from './Components/sign-up/sign-up.component';
import {HistoriqueCoursComponent} from './Components/historique-cours/historique-cours.component';
import {DisponibiliteComponent} from './Components/disponibilite/disponibilite.component';
import {
  ButtonModule,
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  TableModule,
  ToastModule,
  TooltipModule,
} from "primeng";

import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireMessagingModule} from '@angular/fire/messaging';


import {MessageService} from 'primeng/api';
import {HttpClientModule} from "@angular/common/http";
import {DetailCourComponent} from './Components/historique-cours/detail-cour/detail-cour.component';
import {DialogCourComponent} from './Components/historique-cours/dialog-cour/dialog-cour.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSelectModule} from "ngx-select-ex";
import {ProfilComponent} from './Components/profil/profil.component';
import {ProfilDialogComponent} from './Components/profil/profil-dialog/profil-dialog.component';
import {CourEleveComponent} from './Components/cour-eleve/cour-eleve.component';
import {ProfilProfDiaolgComponent} from './Components/profil/profil-prof-diaolg/profil-prof-diaolg.component';
import {AddDispoDialogComponent} from './Components/disponibilite/add-dispo-dialog/add-dispo-dialog.component';
import {ProfDetailComponent} from './Components/cour-eleve/prof-detail/prof-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    FooterComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    HistoriqueCoursComponent,
    DisponibiliteComponent,
    DetailCourComponent,
    DialogCourComponent,
    ProfilComponent,
    ProfilDialogComponent,
    CourEleveComponent,
    ProfilProfDiaolgComponent,
    AddDispoDialogComponent,
    ProfDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,


    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    NgxSelectModule,
    ConfirmDialogModule,
    ToastModule,
    TooltipModule,

  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
