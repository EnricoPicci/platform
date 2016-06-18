import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {PfaProfileTemplateModel} from '../pfa-model';

import {PfaProfileGoalComponent} from '../pfa-shared-components/pfa-profile-goal.component';

@Component({
  moduleId: module.id,
  providers: [],
  selector: 'pfa-profile-template',
  template: `
  <div id="pt-box" class="col-sm-12" (click)="onClick()">
    <div class="col-sm-9 col-sm-offset-1">
      <div id="pt-top-background" [ngClass]="setTopBackgroundClasses()"></div>
    </div>
    <div id="pt-age" class="col-sm-2 col-sm-offset-2 pt-top" [ngClass]="setClasses()">
      <span class="darkred">{{template.age}}</span>
    </div>
    <div id="pt-profession" class="col-sm-6 pt-top" [ngClass]="setClasses()">
      {{template.profession}}
    </div>
    <div id="pt-goals">
      <div class="col-sm-12">
        <div id="pt-line">
      </div>
      <div *ngFor="let goal of template.goals" id="pt-goal" class="col-sm-3">
        <pfa-profile-goal [goal]="goal" [size]="size"></pfa-profile-goal>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['pfa-profile-choose-similar.component.css', '../../styles/common-styles.css'],
  directives: [PfaProfileGoalComponent],
  inputs: ['template', 'size']
})
export class PfaProfileTemplateComponent {
  public template: PfaProfileTemplateModel;
  public size = 'L'; // L for large, M for medium
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    console.log('here I am 1 ' + this.size);
  }

  setClasses() {
    let classes =  {
      ptlarge: this.size == 'L',
      ptmedium: this.size == 'M',
    }
    return classes;
  }
  setTopBackgroundClasses() {
    let classes =  {
      pttoplarge: this.size == 'L',
      pttopmedium: this.size == 'M',
    }
    return classes;
  }
  
  onClick() {
    this.router.navigate(['pfa-profile']);
  }

}