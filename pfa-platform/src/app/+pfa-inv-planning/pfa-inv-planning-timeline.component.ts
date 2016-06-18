import { Component } from '@angular/core';

import {PfaInvPlanningPeriodComponent} from './pfa-inv-planning-period.component';
import {PfaPlanTimePeriodModel} from '../pfa-model/pfa-plan-time-period.model';

@Component({
  moduleId: module.id,
  selector: 'pfa-inv-planning-timeline',
  template: `
    <pfa-inv-planning-period 
        *ngFor="let period of getPeriods()" [period]="period">
    </pfa-inv-planning-period>
    <!--div id="planning-timeline">
        <pfa-inv-planning-period 
            *ngFor="let period of getPeriods()" [period]="period">
        </pfa-inv-planning-period>
    </div-->
  `,
  styleUrls: ['pfa-inv-planning.component.css', '../../styles/common-styles.css'],
  directives: [PfaInvPlanningPeriodComponent],
  inputs: ['from', 'to', 'periodLength']
})
export class PfaInvPlanningTimelineComponent {
    public from: number;  // from year
    public to: number;  // to year
    public periodLength = 2;  // even number greater or equal to 2
    public periods: Array<PfaPlanTimePeriodModel>;
    
    constructor() {}
    
    ngOnInit() {
        console.log(this);
    }
    
    getPeriods() {
        let numberOfYears = this.to - this.from;
        let numberOfPeriods = Math.floor(numberOfYears/this.periodLength);
        this.periods = new Array<PfaPlanTimePeriodModel>();
        let rollingStartPeriod = this.from;
        for (let i = 0; i < numberOfPeriods; i++) {
            let period = new PfaPlanTimePeriodModel();
            period.centralYear = rollingStartPeriod + this.periodLength/2;
            period.periodLength = this.periodLength;
            this.periods.push(period);
            rollingStartPeriod = rollingStartPeriod + this.periodLength;
        }
        return this.periods;
    }

}
