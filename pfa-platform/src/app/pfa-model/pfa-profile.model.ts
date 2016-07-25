import {PfaPartyModel} from './pfa-party.model';
import {PfaProfileSavingsModel} from './pfa-profile-savings.model';
import {PfaProfilePropertiesModel} from './pfa-profile-properties.model';
import {PfaProfileMortgagesModel} from './pfa-profile-mortgages.model';
import {PfaProfileLoansModel} from './pfa-profile-loans.model';

export class PfaProfileModel {
  _id;  // mongo internal ID
  
  public party: PfaPartyModel; 
  public savings = new PfaProfileSavingsModel();
  public properties = new PfaProfilePropertiesModel();
  public mortgages = new PfaProfileMortgagesModel();
  public loans = new PfaProfileLoansModel();

  public readyToPrint = false;

  constructor() {}

}