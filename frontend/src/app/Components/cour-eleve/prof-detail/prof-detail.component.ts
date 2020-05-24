import {Component, OnInit} from '@angular/core';
import {Prof} from "../../../Interface/Prof";
import {ProfService} from "../../../Service/prof.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.scss']
})
export class ProfDetailComponent implements OnInit {

  prof: Prof;

  constructor(private profService: ProfService, private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProfById(params['id']); //  recuperation de l'id passé par l'url
    });
  }

  getProfById(id: string) {
    this.profService.getProfByid(id).subscribe((response) => {
      this.prof = response;
    });
  }

}
