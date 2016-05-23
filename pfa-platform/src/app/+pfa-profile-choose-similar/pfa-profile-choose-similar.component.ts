import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {Carousel} from 'primeng/primeng';

import {PfaProfileTemplateComponent} from './pfa-profile-template.component';
import {PfaProfileTemplateCarouselComponent} from './pfa-profile-template-coarousel.component';
import {PfaProfileTemplateModel} from './pfa-profile-template.model';

import {PfaProfileModel} from '../+pfa-profile/';
import {PfaProfileGoalModel} from '../+pfa-profile/';
import {PfaBackendRestServerService} from '../pfa-backend-rest-server/pfa-backend-rest-server.service';

import {ConfigService} from '../util/config.service';
import {SessionService} from '../util/session.service';
import {LabelDictionaryService} from '../util/labelDictionary.service';


@Component({
  moduleId: module.id,
  providers: [MdIconRegistry],
  selector: 'app-pfa-profile-choose-similar',
  template: `
    <!--div id="pcs-body" class="col-sm-12" *ngIf="selectedTemplate">
      <pfa-profile-template [template]="selectedTemplate"></pfa-profile-template>
    </div-->
    <div id="pcs-body" class="col-sm-12" *ngIf="templates">
      <pfa-profile-template-carousel [templates]="templates"></pfa-profile-template-carousel>
    </div>
    <!--div id="pcs-carousel" *ngIf="templates">
      <p-carousel headerText="Templates" [value]="templates">
        <template let-template>
          <li class="ui-carousel-item">
            <pfa-profile-template [template]="template"></pfa-profile-template>
          </li>
        </template>
      </p-carousel>
    </div-->
  `,
  styleUrls: ['pfa-profile-choose-similar.component.css', '../../styles/common-styles.css'],
  directives: [PfaProfileTemplateComponent, PfaProfileTemplateCarouselComponent]
})
export class PfaProfileChooseSimilarComponent implements OnInit {
  public profile: PfaProfileModel;
  public templates: Array<PfaProfileTemplateModel>;
  public selectedTemplate: PfaProfileTemplateModel;

  constructor(private router: Router,
              private config: ConfigService,
              private session: SessionService,
              private dict: LabelDictionaryService,
              private backEnd: PfaBackendRestServerService) {}

  ngOnInit() {
    this.profile = this.session.currentProfile;
    this.session.newTitle({title: this.dict.getLabelText('profileChooseSimilarTitle'), 
                            subtitle: this.dict.getLabelText('profileChooseSimilarSubtitle')});
                            
    this.backEnd.getTemplates(this.profile).subscribe(
      (templates) => {
        this.templates = templates;
        this.selectedTemplate = this.templates[0];
      }
    )
  }

}
