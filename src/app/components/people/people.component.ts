import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  person: Person = new Person('Nicolas', 'Molina', 23, 1, 1);

  constructor() { }

  ngOnInit(): void {
  }

}
