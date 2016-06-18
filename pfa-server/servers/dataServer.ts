import {DbManager} from './dbManager';

import {ServerResult} from './serverResult';
import {ServerResultDetail} from './serverResultDetail';

import {Simulator} from './simulator'

export class DataServer {
    private static singleton;
    
    public static getSingleton() {
        if (!this.singleton) {
            this.singleton = new DataServer()
        }
        return this.singleton;
    }
    
    /*******************************************************************
     *  START Manage Profiles
     *******************************************************************/
    public saveProfile(inProfile, inHttpRes) {
        let result = new ServerResult('saveProfile');
        let ProfileModel = DbManager.getProfileModel();
        // if the profile has already an id then it means that we need to make an update, otherwise is a save (add) operation
        if (inProfile._id != null) {
            ProfileModel.findOneAndUpdate({_id: inProfile._id}, inProfile, (err) => { 
                this.manageSaveProfileReturn(inProfile, inHttpRes, result, 'UPDATE', err);
            })
        } else {
            let profileToSave = new ProfileModel(inProfile);
            profileToSave.save((err) => { 
                this.manageSaveProfileReturn(profileToSave, inHttpRes, result, 'ADD', err);
            })
        }
    }
    private manageSaveProfileReturn(inProfile, inHttpRes, inResult: ServerResult, inAction: string, inError) {
        let resultBool = inError == null;
        this.fillResult(inResult, resultBool, inAction, 'Profile', inProfile, inError);
        inResult.returnInfo['_id'] = inProfile['_id'];
        inHttpRes.json(inResult);
    }
    
    public getTemplates(inProfile, inHttpRes) {
        // here I could maybe have logic here to retrieve the best templates for a profile
        // for now it is just an hardcoded simulation
        let templates = Simulator.getTemplates();
        inHttpRes.json(templates);
    }
    
    public getGoals(inProfile, inHttpRes) {
        // here I shuld have logic here to retrieve the best goals for a profile
        // for now it is just an hardcoded simulation
        let goals = Simulator.getGoals();
        inHttpRes.json(goals);
    } 
    /*******************************************************************
     *  END Manage Profiles
     *******************************************************************/
    
    
    /*******************************************************************
     *  START Common Functions
     *******************************************************************/
     private fillResult(inResult: ServerResult, inSuccess: boolean, inAction: string, 
                inObjectType: string, inObjectInfo: string, inError) {
         let resultDetail = inResult.addDetail();
         if (inSuccess) {
             inResult.OK();
             resultDetail.OK();
         } else {
             inResult.KO();
             resultDetail.KO();
             console.error(inError);
         }
         resultDetail.action = inAction;
         resultDetail.objectType = inObjectType;
         resultDetail.objectInfo = inObjectInfo;
         resultDetail.error = inError;
     }
     /*******************************************************************
     *  END Common Functions
     *******************************************************************/
}

module.exports = DataServer;