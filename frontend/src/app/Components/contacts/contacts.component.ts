import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  links: any[] = ["Votre nom: ", "Votre prénom: ", "Votre numéro de téléphone: "];

  mailText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  mailTo(){
    this.mailText = "mailto:Contact-cours@gmail.com?subject=[Veuillez préciser ici la raison de votre mail]&body= " + this.links.join(" , ");
    window.location.href = this.mailText;
    console.log('Mailing system launched');
  }
}
