import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';

import {PfaProfileModel} from '../pfa-model/';
import {PfaProfileAmountInputComponent} from './pfa-profile-amount-input.component';
import {PfaBackendRestServerService} from '../pfa-backend-rest-server/pfa-backend-rest-server.service';

import {ConfigService} from '../util/config.service';
import {SessionService} from '../util/session.service';
import {LabelDictionaryService} from '../util/labelDictionary.service';
import {SlidingButtonComponent} from '../util-components/slidingButton.component'

@Component({
  moduleId: module.id,
  selector: 'app-pfa-profile',
  templateUrl: 'pfa-profile.component.html',
  styleUrls: ['pfa-profile.component.css', '../../styles/common-styles.css'],
  directives: [MdInput, MdButton, SlidingButtonComponent, PfaProfileAmountInputComponent]
})
export class PfaProfileComponent implements OnInit {
  profile: PfaProfileModel;

  constructor(private router: Router,
              private config: ConfigService,
              private session: SessionService,
              private dict: LabelDictionaryService,
              private backEnd: PfaBackendRestServerService) {}

  ngOnInit() {
    this.profile = this.session.currentProfile;
    this.session.newTitle({title: this.dict.getLabelText('profileTitle'), 
                            subtitle: this.dict.getLabelText('profileSubtitle')})
  }
  
  setGender(isMale: boolean) {
    let gender = 'F';
    if (isMale) {
      gender = 'M';
    }
    this.profile.party.gender = gender;
    console.log(isMale);
  }
  
  continue() {
    this.backEnd.saveProfile(this.profile).subscribe(
      (resp) => {
        let _id = resp.json().returnInfo['_id'];
        console.log('Profile saved with _id: ' + _id);
        this.profile._id = _id;
        this.profile.readyToPrint = true;
      },
      (err) => {console.error('Error trying to save profile: ' + err)}
    )
    this.router.navigate(['/pfa-inv-planning']);
  }
  
  cancel() {
    console.log('cancel');
  }

}
