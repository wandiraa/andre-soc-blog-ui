import { Component, OnInit } from '@angular/core';
import { PeopleInterface, PeopleModel } from '../../_models/people.model';
import { PeopleService } from '../../_services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peoples: PeopleInterface[];
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(): void
  {
    this.peopleService.getPeoples().subscribe(peoples => {
      this.peoples = peoples.map(people => new PeopleModel(people));
    });
  }

}
