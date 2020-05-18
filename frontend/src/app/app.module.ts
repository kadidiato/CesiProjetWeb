import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
// Angular Forms Modules
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {NavbarModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {SignInComponent} from './Components/sign-in/sign-in.component';
import {FooterComponent} from './Components/footer/footer.component';
import {ForgotPasswordComponent} from './Components/forgot-password/forgot-password.component';
import {SignUpComponent} from './Components/sign-up/sign-up.component';
import {ListCoursComponent} from './Components/list-cours/list-cours.component';
import {DisponibiliteComponent} from './Components/disponibilite/disponibilite.component';
import {ButtonModule, DialogModule, TableModule} from "primeng";

import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireMessagingModule} from '@angular/fire/messaging';


import {MessageService} from 'primeng/api';
import {HttpClientModule} from "@angular/common/http";
import {DetailCourComponent} from './Components/list-cours/detail-cour/detail-cour.component';
import {DialogCourComponent} from './Components/list-cours/dialog-cour/dialog-cour.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSelectModule} from "ngx-select-ex";
import {ProfilComponent} from './Components/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    FooterComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    ListCoursComponent,
    DisponibiliteComponent,
    DetailCourComponent,
    DialogCourComponent,
    ProfilComponent
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

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
