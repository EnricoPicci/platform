"use strict";
var dbManager_1 = require('./dbManager');
var serverResult_1 = require('./serverResult');
var templateSimulator_1 = require('./templateSimulator');
var DataServer = (function () {
    function DataServer() {
    }
    DataServer.getSingleton = function () {
        if (!this.singleton) {
            this.singleton = new DataServer();
        }
        return this.singleton;
    };
    /*******************************************************************
     *  START Manage Profiles
     *******************************************************************/
    DataServer.prototype.saveProfile = function (inProfile, inHttpRes) {
        var _this = this;
        var result = new serverResult_1.ServerResult('saveProfile');
        var ProfileModel = dbManager_1.DbManager.getProfileModel();
        // if the profile has already an id then it means that we need to make an update, otherwise is a save (add) operation
        if (inProfile._id != null) {
            ProfileModel.findOneAndUpdate({ _id: inProfile._id }, inProfile, function (err) {
                _this.manageSaveProfileReturn(inProfile, inHttpRes, result, 'UPDATE', err);
            });
        }
        else {
            var profileToSave_1 = new ProfileModel(inProfile);
            profileToSave_1.save(function (err) {
                _this.manageSaveProfileReturn(profileToSave_1, inHttpRes, result, 'ADD', err);
            });
        }
    };
    DataServer.prototype.manageSaveProfileReturn = function (inProfile, inHttpRes, inResult, inAction, inError) {
        var resultBool = inError == null;
        this.fillResult(inResult, resultBool, inAction, 'Profile', inProfile, inError);
        inResult.returnInfo['_id'] = inProfile['_id'];
        inHttpRes.json(inResult);
    };
    DataServer.prototype.getTemplates = function (inProfile, inHttpRes) {
        // here I shuld have logic here to retrieve the best templates for a profile
        // for now it is just an hardcoded simulation
        var templates = templateSimulator_1.TemplateSimulator.getTemplates();
        inHttpRes.json(templates);
    };
    /*******************************************************************
     *  END Manage Profiles
     *******************************************************************/
    /*******************************************************************
     *  START Common Functions
     *******************************************************************/
    DataServer.prototype.fillResult = function (inResult, inSuccess, inAction, inObjectType, inObjectInfo, inError) {
        var resultDetail = inResult.addDetail();
        if (inSuccess) {
            inResult.OK();
            resultDetail.OK();
        }
        else {
            inResult.KO();
            resultDetail.KO();
            console.error(inError);
        }
        resultDetail.action = inAction;
        resultDetail.objectType = inObjectType;
        resultDetail.objectInfo = inObjectInfo;
        resultDetail.error = inError;
    };
    return DataServer;
}());
exports.DataServer = DataServer;
module.exports = DataServer;
//# sourceMappingURL=dataServer.js.map