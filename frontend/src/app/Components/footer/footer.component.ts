import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: any[] = ["Votre nom: ", "Votre prénom: ", "Votre numéro de téléphone: "];

  mailText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  /*Fonction pour le systeme de mail*/
  mailMe(){
    this.mailText = "mailto:Contact-cours@gmail.com?subject=[Veuillez préciser ici la raison de votre mail]&body= " + this.links.join(" , ");
    window.location.href = this.mailText;
  }

  googleMap(){
    window.open("https://www.google.fr/maps/place/7+Chemin+du+Vieux+Ch%C3%AAne,+38240+Meylan/@45.207277,5.7819282,17z/data=!3m1!4b1!4m5!3m4!1s0x478af5948771b045:0xed1dce015f0a7b9!8m2!3d45.207277!4d5.7841169");
  }
}
