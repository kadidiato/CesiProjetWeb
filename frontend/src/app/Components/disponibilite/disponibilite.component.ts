import { Component, OnInit } from '@angular/core';
import { Disponibilite } from 'src/app/Interface/disponibilite';
import { DisponibiliteService } from 'src/app/Service/disponibilite.service';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.scss']
})
export class DisponibiliteComponent implements OnInit {

  disponibilites: Disponibilite;

  constructor(private disponibiliteServiece: DisponibiliteService) {
  }
/**
   * appel de la fonction init();
   * 
   */
  ngOnInit(): void {
    this.init();
  }
  
  async init() {
    this.disponibiliteServiece.getCoursBe().subscribe(res => {
      this.disponibilites = res;
      console.log(this.disponibilites);
    }, err => {
      console.log('error de recup');
    });
  }

  reserver() {

  }

}
