import { Component } from '@angular/core';

import {Carousel} from 'primeng/primeng';

import {PfaProfileTemplateModel} from '../pfa-model';
import {PfaProfileTemplateComponent} from './pfa-profile-template.component';

import {LabelDictionaryService} from '../util/labelDictionary.service';

@Component({
  moduleId: module.id,
  providers: [],
  selector: 'pfa-profile-template-carousel',
  template: `
    <div id="pcs-carousel" *ngIf="templates">
      <p-carousel headerText="{{dict.getLabelText('chooseProfileTemplate')}}" 
          [value]="templates">
        <template let-template>
          <li class="ui-carousel-item">
            <pfa-profile-template [template]="template" size="M"></pfa-profile-template>
          </li>
        </template>
      </p-carousel>
    </div>
  `,
  styleUrls: ['pfa-profile-choose-similar.component.css', '../../styles/common-styles.css'],
  directives: [Carousel, PfaProfileTemplateComponent],
  inputs: ['templates']
})
export class PfaProfileTemplateCarouselComponent {
  public templates: Array<PfaProfileTemplateModel>;
  
  constructor(private dict: LabelDictionaryService) {}

}