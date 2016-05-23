import { Component, ViewChild } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

import { PfaProfileChooseSimilarComponent } from './+pfa-profile-choose-similar';
import { PfaProfileComponent } from './+pfa-profile';
import { PfaProfileModel } from './+pfa-profile';
import { PfaPartyModel } from './pfa-party';

import {PfaBackendRestServerService} from './pfa-backend-rest-server/pfa-backend-rest-server.service';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {ConfigService} from './util/config.service';
import {SessionService} from './util/session.service';
import {LabelDictionaryService} from './util/labelDictionary.service';

@Component({
  moduleId: module.id,
  providers: [SessionService, LabelDictionaryService, ROUTER_PROVIDERS, PfaBackendRestServerService],
  selector: 'pfa-platform-app',
  templateUrl: 'pfa-platform.component.html',
  styleUrls: ['pfa-platform.component.css', '../styles/common-styles.css'],
  directives: [MdToolbar, MD_SIDENAV_DIRECTIVES, DROPDOWN_DIRECTIVES, MdButton, ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/pfa-profile', component: PfaProfileComponent},
  {path: '/pfa-profile-choose-similar', component: PfaProfileChooseSimilarComponent}
])
export class PfaPlatformAppComponent {
  title = 'Pfa Platform';
  routeTitle = '';
  routeSubtitle = '';
  toolBarDdMenuDisabled:boolean = false;
  toolBarDdMenuStatus:{isopen:boolean} = {isopen: false};
  @ViewChild('sidenav') sidenav;
  
  constructor(private router: Router,
              private config: ConfigService,
              private session: SessionService,
              private dict: LabelDictionaryService) {
    this.session.newTitle$.subscribe((titleSubtitle) => {
      this.routeTitle = titleSubtitle.title;
      this.routeSubtitle = titleSubtitle.subtitle;
    })
  }
  
  goToProfile() {
    let profile = new PfaProfileModel();
    profile.party = new PfaPartyModel();
    this.session.currentProfile = profile;
    this.router.navigate(['/pfa-profile']);
    this.sidenav.close();
  }
  
  ngOnDestroy(){
    // do not need to unsubscribe session observable since SessionService is provided by me and so 
    // gets destroyed when I get destroyed
  }
  
} 
