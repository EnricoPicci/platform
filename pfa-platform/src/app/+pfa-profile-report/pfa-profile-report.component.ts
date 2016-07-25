import { Component, OnInit } from '@angular/core';

import {ConfigService} from '../util/config.service';
import {SessionService} from '../util/session.service';
import {LabelDictionaryService} from '../util/labelDictionary.service';

@Component({
  moduleId: module.id,
  selector: 'app-pfa-profile-report',
  templateUrl: 'pfa-profile-report.component.html',
  styleUrls: ['pfa-profile-report.component.css']
})
export class PfaProfileReportComponent implements OnInit {


  constructor(private config: ConfigService,
              private session: SessionService,
              private dict: LabelDictionaryService) {}

  ngOnInit() {
    this.session.newTitle({title: this.dict.getLabelText('reportTitle'), 
                            subtitle: this.dict.getLabelText('reportSubtitle')})
  }

}
