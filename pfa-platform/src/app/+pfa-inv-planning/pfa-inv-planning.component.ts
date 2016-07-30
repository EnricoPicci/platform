import { Component, ComponentResolver, ComponentRef, ComponentFactory, ViewContainerRef, ViewChild } from '@angular/core';

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
  templateUrl: 'pfa-inv-planning.component.prime.html',
  styleUrls: ['pfa-inv-planning.component.css'],
  viewProviders: [],
  directives: [PfaProfileGoalComponent,
                Draggable, Droppable]
})
export class PfaInvPlanningComponent {
  @ViewChild('target', {read: ViewContainerRef}) target;
  cmpRef: ComponentRef<any>;

  public profile: PfaProfileModel;
  public goals: Array<PfaProfileGoalModel>;
  public selectedGoals = new Array<PfaProfileGoalModel>();
  public draggedGoal: PfaProfileGoalModel;
  public planLength = 16;  // length of plan in years
  public planPeriodLength = 2; // number of years per period

  public goalComponentOnTheMove: PfaProfileGoalComponent;

  constructor(private session: SessionService,
              private config: ConfigService,
              private backEnd: PfaBackendRestServerService,
              private dict: LabelDictionaryService,
              private resolver: ComponentResolver) {}

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
  goalComponentMoveStart(inGoalComponent: PfaProfileGoalComponent) {
    this.goalComponentOnTheMove = inGoalComponent;
  }
  
  drop(event) {
    console.log('drop  ', event);
    console.log('drop x --', event.clientX);
    console.log('drop y --', event.clientY);

    if (this.goalComponentOnTheMove) {
      this.goalComponentOnTheMove.positionLeft = event.clientX;
      this.goalComponentOnTheMove.positionTop = event.clientY;
      this.goalComponentOnTheMove = null;
    } else {
      this.resolver.resolveComponent(PfaProfileGoalComponent).then(
        (factory: ComponentFactory<any>) => {
          this.cmpRef = this.target.createComponent(factory);
          this.cmpRef.instance.goal = this.draggedGoal;
          this.cmpRef.instance.direction = 'H';
          this.cmpRef.instance.size = 'S';
          this.cmpRef.instance.positionLeft = event.clientX;
          this.cmpRef.instance.positionTop = event.clientY;
          this.cmpRef.instance.moveStart.subscribe((goalComponent) => this.goalComponentMoveStart(goalComponent));
        }
      )
    }
  }
  
  dragEnd(event) {
      this.draggedGoal = null;
      console.log('drag end  ', event);
  }

}
