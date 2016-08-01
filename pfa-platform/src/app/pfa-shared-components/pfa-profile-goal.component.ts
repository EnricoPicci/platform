import { Component, EventEmitter } from '@angular/core';

import {Draggable} from 'primeng/primeng';

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
        <div id="pg-icon" class="pg-icon" [ngClass]="setClasses()" [ngStyle]="setStyles()" 
                pDraggable="goals" (onDragStart)="dragStart($event)">
            <i class="{{'fa ' + goal.iconId}}"></i>
            <span id="pg-name" [ngClass]="setClasses()">{{goal.name}}</span>
        </div>
    </div>
  `,
  styleUrls: ['pfa-profile-goal.component.css', '../../styles/common-styles.css'],
  directives: [Draggable],
  inputs: ['goal', 'size', 'direction', 'positionTop', 'positionLeft'],
  outputs: ['moveStart']
})
export class PfaProfileGoalComponent {
    public goal: PfaProfileGoalModel;
    public size = 'L'; // L for large, M for medium
    public direction = 'V'; // H for horizontal ; V for vertical
    public positionTop: number;
    public positionLeft: number;
    public moveStart = new EventEmitter<any>();
    
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
        };
        return classes;
    }
    setStyles() {
        let styles;
        if (this.positionTop && this.positionLeft) {
            styles = {
                'position': 'absolute',
                'top': this.positionTop + 'px',
                'left': this.positionLeft + 'px',
                'z-index': 1,
            }
        }
        return styles;
    }
    
    isVertical() {
        return this.direction == 'V';
    }

    dragStart(inEvent) {
        this.moveStart.emit(this)
    }

}
