import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;
  @Output() onSelected = new EventEmitter<Person>();
  imc = '';

  constructor() { }

  ngOnInit(): void {
  }

  calcIMC() {
    this.imc = this.person.calcIMC();
  }

  onCick() {
    this.onSelected.emit(this.person);
  }

}
