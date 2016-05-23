import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {HTTP_PROVIDERS} from '@angular/http';
//import 'rxjs/Rx';

import { PfaPlatformAppComponent, environment } from './app/';
import {ConfigService} from './app/util/config.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(PfaPlatformAppComponent,
            [ConfigService,
              HTTP_PROVIDERS]);

