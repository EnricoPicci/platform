import {PfaProfileGoalModel} from '../+pfa-profile/pfa-profile-goal.model';

export class PfaProfileTemplateModel {
  public age: number; 
  public profession: string;
  public goals: Array<PfaProfileGoalModel>;

  constructor() {}

}