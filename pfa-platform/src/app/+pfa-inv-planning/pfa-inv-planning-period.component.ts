import { Component } from '@angular/core';

import {PfaPlanTimePeriodModel} from '../pfa-model/pfa-plan-time-period.model'

@Component({
  moduleId: module.id,
  selector: 'pfa-inv-planning-period',
  template: `
    <div id="planning-period">
        {{period.getPeriod()}}
    </div>
  `,
  styleUrls: ['pfa-inv-planning.component.css', '../../styles/common-styles.css'],
  directives: [],
  inputs: ['period']
})
export class PfaInvPlanningPeriodComponent {
    public period: PfaPlanTimePeriodModel;
    
    constructor() {}
    
    ngOnInit() {
        console.log(this);
    }

}
