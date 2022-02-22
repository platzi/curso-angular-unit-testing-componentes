import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [
    new Person('Nicolas', 'Molina', 23, 1, 1),
    new Person('Valentina', 'Molina', 12, 2, 3),
  ];
  selectedPerson: Person | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  choose(person: Person) {
    this.selectedPerson = person;
  }

}
