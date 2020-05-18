import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursService} from "../../../Service/cours.service";
import {Cours} from "../../../Interface/cours";

@Component({
  selector: 'app-detail-cour',
  templateUrl: './detail-cour.component.html',
  styleUrls: ['./detail-cour.component.scss']
})
export class DetailCourComponent implements OnInit {
  cours: Cours

  constructor(private route: ActivatedRoute, private  coursService: CoursService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCoursByIdProf(params['id']); //  recuperation de l'id passé par l'url
    });
  }

  getCoursByIdProf(id: string) {
    this.coursService.getCoursByProfeseurID(id).then(res => {
      this.cours = res;
    });
  }

}
