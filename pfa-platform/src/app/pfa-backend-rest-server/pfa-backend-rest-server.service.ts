import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/Rx';

import {PfaProfileModel} from '../pfa-model/';
import {PfaProfileGoalModel} from '../pfa-model/';
import {PfaProfileTemplateModel} from '../pfa-model';

import {ConfigService} from '../util/config.service';

@Injectable()
export class PfaBackendRestServerService {

  constructor(private http: Http, private config: ConfigService) {}
  
  
  
/*******************************************
 * START manage Profiles
 *******************************************/
  saveProfile(inProfile: PfaProfileModel) {
        let myUrl = this.config.baseServicesUrl + 'profile/save';
        let options = this.getOpionsForPost();
        let jsonString = JSON.stringify(inProfile);
        return this.http.post(myUrl, jsonString, options)
                        .catch(this.handleError);
  }
  
  getTemplates(inProfile: PfaProfileModel) {
    let myUrl = this.config.baseServicesUrl + 'profile/templates';
    return this.http.get(myUrl)
        .map(
            res => {
                let templates = new Array<PfaProfileTemplateModel>();
                let templatesJson = res.json();
                for (let i = 0; i < templatesJson.length; i++) {
                  let templateJson = templatesJson[i];
                  let template = new PfaProfileTemplateModel();
                  template.age = templateJson.age;
                  template.profession = templateJson.profession;
                  let goalsJson = templateJson.goals;
                  let goals = new Array<PfaProfileGoalModel>();
                  for (let j = 0; j < goalsJson.length; j++) {
                    let goalJson = goalsJson[j];
                    let goal = this.createGoal(goalJson);
                    goals.push(goal);
                  }
                  template.goals = goals;
                  templates.push(template);
                }
                return templates;
            }
        )
        .catch(this.handleError)
    }
    
  getGoals(inProfile: PfaProfileModel) {
    let myUrl = this.config.baseServicesUrl + 'profile/goals';
    return this.http.get(myUrl)
        .map(
            res => {
                let goals = new Array<PfaProfileGoalModel>();
                let goalsJson = res.json();
                for (let j = 0; j < goalsJson.length; j++) {
                let goalJson = goalsJson[j];
                let goal = this.createGoal(goalJson);
                goals.push(goal);
                }
                return goals;
            }
        )
        .catch(this.handleError)
    }
    
    private createGoal(inGoalJson) {
        let goal = new PfaProfileGoalModel();
        goal.age = inGoalJson.age;
        goal.name = inGoalJson.name;
        goal.iconId = inGoalJson.iconId;
        return goal;
    }
  /*******************************************
 * END manage Profiles
 *******************************************/
  
  
  /*******************************************
 * START shared private methods
 *******************************************/
  private handleError (error: Response) {
      console.error('http error');
      console.error(error);
      let errorText = JSON.stringify(error);
      if (error.status == 200) {
          errorText = 'The whole server is down. The connection has been refused.';
      }
      return Observable.throw(errorText || 'Server error');
  }
  
  private handleApplicationError (inResult: any) {
      console.error('application error');
      console.error(inResult);
      let errorText = JSON.stringify(inResult);
      return Observable.throw(errorText);
  }
  
  private getOpionsForPost() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({headers: headers});
	}
  /*******************************************
 * START shared private methods
 *******************************************/

}
