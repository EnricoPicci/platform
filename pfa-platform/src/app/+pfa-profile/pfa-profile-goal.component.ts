import { Component } from '@angular/core';

import {PfaProfileGoalModel} from './pfa-profile-goal.model'

@Component({
  moduleId: module.id,
  selector: 'pfa-profile-goal',
  template: `
    <div id="pg-name" class="col-sm-12" [ngClass]="setClasses()">
        {{goal.name}}
    </div>
    <div id="pg-age" class="col-sm-12">
        <span class="darkred">{{goal.age}}</span>
    </div>
    <div id="pg-icon" class="col-sm-12">
        <i class="{{'fa ' + goal.iconId}}"></i>
    </div>
  `,
  styleUrls: ['pfa-profile.component.css', '../../styles/common-styles.css'],
  directives: [],
  inputs: ['goal', 'size']
})
export class PfaProfileGoalComponent {
    public goal: PfaProfileGoalModel;
    public size = 'L'; // L for large, M for medium
    
    constructor() {}
    
    ngOnInit() {
        console.log('goal ' + this.size);
    }
    
    setClasses() {
    let classes =  {
      pglarge: this.size == 'L',
      pgmedium: this.size == 'M',
    }
    return classes;
  }

}
