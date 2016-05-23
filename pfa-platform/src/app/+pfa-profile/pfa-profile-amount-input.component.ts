import { Component } from '@angular/core';

import {MdInput} from '@angular2-material/input';

import {PfaProfileModel} from './';
import {ConfigService} from '../util/config.service';
import {SessionService} from '../util/session.service';
import {LabelDictionaryService} from '../util/labelDictionary.service';

@Component({
  moduleId: module.id,
  selector: 'pfa-profile-amount-input',
  template: `
    <div id="sp-label" class="col-sm-6">
        <label for="field" class="sp-label">{{dict.getLabelText(labelId? labelId : inputName)}}</label>
    </div>
    <div id="sp-field" class="col-sm-6">
        <md-input *ngIf="type == 'C'" type="text" id="field" align="end" 
            value="{{profileObj[inputName] | number:'1.0-2'}}" 
            (change)="onChange($event.target.value)">
            <span md-prefix>€&nbsp;</span>
        </md-input>
        <md-input *ngIf="type == 'P'" type="text" id="field" align="end" 
            value="{{profileObj[inputName] | number:'1.2-2'}}" 
            (change)="onChange($event.target.value)">
            <span md-prefix>%&nbsp;</span>
        </md-input>
        <md-input *ngIf="type == 'I'" type="text" id="field" align="end" 
            value="{{profileObj[inputName] | number:'1.0-0'}}" 
            (change)="onChange($event.target.value)">
        </md-input>
    </div>
  `,
  styleUrls: ['pfa-profile.component.css'],
  directives: [MdInput],
  inputs: ['inputName', 'profileObj', 'labelId', 'type']
})
export class PfaProfileAmountInputComponent {
  inputName: string;
  profileObj;
  labelId: string;
  type = 'C';  // C currency, P percentage, I integer

  constructor(private config: ConfigService,
              private session: SessionService,
              private dict: LabelDictionaryService) {}
  
  onChange(inValue: string) {
      this.profileObj[this.inputName] = +inValue;
  }

}
