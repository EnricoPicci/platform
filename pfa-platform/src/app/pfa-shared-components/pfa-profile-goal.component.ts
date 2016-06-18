import { Component } from '@angular/core';

import {PfaProfileGoalModel} from '../pfa-model/pfa-profile-goal.model'

@Component({
  moduleId: module.id,
  selector: 'pfa-profile-goal',
  template: `
    <div *ngIf="isVertical()">
        <div id="pg-name" class="col-sm-12" [ngClass]="setClasses()">
            {{goal.name}}
        </div>
        <div id="pg-age" class="col-sm-12">
            <span class="darkred">{{goal.age}}</span>
        </div>
        <div id="pg-icon" class="pg-icon col-sm-12">
            <i class="{{'fa ' + goal.iconId}}"></i>
        </div>
    </div>
    <div *ngIf="!isVertical()">
        <div id="pg-icon" class="pg-icon" [ngClass]="setClasses()">
            <i class="{{'fa ' + goal.iconId}}"></i>
            <span id="pg-name" [ngClass]="setClasses()">{{goal.name}}</span>
        </div>
    </div>
  `,
  styleUrls: ['pfa-profile-goal.component.css', '../../styles/common-styles.css'],
  directives: [],
  inputs: ['goal', 'size', 'direction']
})
export class PfaProfileGoalComponent {
    public goal: PfaProfileGoalModel;
    public size = 'L'; // L for large, M for medium
    public direction = 'V'; // H for horizontal ; V for vertical
    
    constructor() {}
    
    ngOnInit() {
        console.log('goal ' + this.size);
    }
    
    setClasses() {
        let classes =  {
            pglarge: this.size == 'L',
            pgmedium: this.size == 'M',
            pgsmall: this.size == 'S',
            pgrotate: this.isVertical(),
            pghorizontal: !this.isVertical()
        }
        return classes;
    }
    
    isVertical() {
        return this.direction == 'V';
    }

}
