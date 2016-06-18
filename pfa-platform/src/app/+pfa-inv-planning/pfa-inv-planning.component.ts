import { Component, OnInit } from '@angular/core';

import {Draggable,Droppable} from 'primeng/primeng';
import {DataTable,Column} from 'primeng/primeng';

import {PfaPlanTimePeriodModel} from '../pfa-model/pfa-plan-time-period.model'

import {PfaProfileModel} from '../pfa-model/';
import {PfaProfileGoalModel} from '../pfa-model/';

import {PfaProfileGoalComponent} from '../pfa-shared-components/pfa-profile-goal.component';

//import {PfaInvPlanningTimelineComponent} from './pfa-inv-planning-timeline.component';

import {PfaBackendRestServerService} from '../pfa-backend-rest-server/pfa-backend-rest-server.service';
import {SessionService} from '../util/session.service';

@Component({
  moduleId: module.id,
  selector: 'app-pfa-inv-planning',
  templateUrl: 'pfa-inv-planning.component.html',
  styleUrls: ['pfa-inv-planning.component.css'],
  directives: [PfaProfileGoalComponent,
                Draggable, Droppable, DataTable, Column]
})
export class PfaInvPlanningComponent {
  public profile: PfaProfileModel;
  public goals: Array<PfaProfileGoalModel>;
  public selectedGoals = new Array<PfaProfileGoalModel>();
  public draggedGoal: PfaProfileGoalModel;
  public planLength = 16;  // length of plan in years
  public planPeriodLength = 2; // number of years per period

  constructor(private session: SessionService,
              private backEnd: PfaBackendRestServerService) {}

  ngOnInit() {
    this.backEnd.getGoals(this.profile).subscribe(
      (goals) => {
        this.goals = goals;
      }
    )
  }
  
  getPlanPeriods() {
    let planPeriods = new Array<PfaPlanTimePeriodModel>();
    let numberOfPeriods = Math.floor(this.planLength/this.planPeriodLength);
    let rollingStartPeriod = 2017;
    for (let i = 0; i < numberOfPeriods; i++) {
      let period = new PfaPlanTimePeriodModel();
      period.centralYear = rollingStartPeriod + this.planPeriodLength/2;
      period.periodLength = this.planPeriodLength;
      planPeriods.push(period);
      rollingStartPeriod = rollingStartPeriod + this.planPeriodLength;
    }
    return planPeriods;
  }
  
  dragStart(inEvent, inGoal: PfaProfileGoalModel) {
      this.draggedGoal = inGoal;
      console.log('drag start  ', inEvent);
  }
  
  drop(event) {
      /*if(this.draggedGoal) {
          this.selectedGoals.push(this.draggedGoal);
          this.goals.splice(this.findIndex(this.draggedGoal), 1);
          this.draggedGoal = null;
      }*/
      console.log('drop  ', event);
  }
  
  dragEnd(event) {
      this.draggedGoal = null;
      console.log('drag end  ', event);
  }
  
  onDragOver(event) {
    console.log('onDragOver --- ', event);
  }
  onClick(event) {
    console.log('onClick --- ', event);
  }

}
