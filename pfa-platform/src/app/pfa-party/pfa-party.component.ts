import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-pfa-party',
  templateUrl: 'pfa-party.component.html',
  styleUrls: ['pfa-party.component.css']
})
export class PfaPartyComponent implements OnInit {
  public name: string; // holds the generic first name + last name registered as part of initial contact
  public yearOfBirth: string;
  public firstName: string;
  public lastName: string;
  public gender: string;  // M or F

  constructor() {}

  ngOnInit() {
  }

}
