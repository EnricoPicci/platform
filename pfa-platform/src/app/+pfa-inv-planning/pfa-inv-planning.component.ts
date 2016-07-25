import { Component, OnInit } from '@angular/core';

import {Draggable,Droppable} from 'primeng/primeng';
import {DataTable,Column} from 'primeng/primeng';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

import {PfaPlanTimePeriodModel} from '../pfa-model/pfa-plan-time-period.model'

import {PfaProfileModel} from '../pfa-model/';
import {PfaProfileGoalModel} from '../pfa-model/';

import {PfaProfileGoalComponent} from '../pfa-shared-components/pfa-profile-goal.component';

//import {PfaInvPlanningTimelineComponent} from './pfa-inv-planning-timeline.component';

import {PfaBackendRestServerService} from '../pfa-backend-rest-server/pfa-backend-rest-server.service';

import {ConfigService} from '../util/config.service';
import {SessionService} from '../util/session.service';;
import {LabelDictionaryService} from '../util/labelDictionary.service';

@Component({
  moduleId: module.id,
  selector: 'app-pfa-inv-planning',
  templateUrl: 'pfa-inv-planning.component.html',
  styleUrls: ['pfa-inv-planning.component.css'],
  viewProviders: [DragulaService],
  directives: [PfaProfileGoalComponent,
                Draggable, Droppable, DataTable, Column,
                Dragula]
})
export class PfaInvPlanningComponent {
  public profile: PfaProfileModel;
  public goals: Array<PfaProfileGoalModel>;
  public selectedGoals = new Array<PfaProfileGoalModel>();
  public draggedGoal: PfaProfileGoalModel;
  public planLength = 16;  // length of plan in years
  public planPeriodLength = 2; // number of years per period

  constructor(private session: SessionService,
              private config: ConfigService,
              private backEnd: PfaBackendRestServerService,
              private dict: LabelDictionaryService) {}

  ngOnInit() {
    this.backEnd.getGoals(this.profile).subscribe(
      (goals) => {
        this.goals = goals;
      }
    );
    this.session.newTitle({title: this.dict.getLabelText('planningTitle'), 
                            subtitle: this.dict.getLabelText('planningSubtitle')})
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
