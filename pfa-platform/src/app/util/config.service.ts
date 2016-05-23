import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() {}
  
  imgPath = './images/';
  
  baseServicesUrl = 'http://localhost:3200/';

}
