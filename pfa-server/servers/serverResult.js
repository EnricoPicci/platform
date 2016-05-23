"use strict";
var serverResultDetail_1 = require('./serverResultDetail');
var ServerResult = (function () {
    function ServerResult(inAction) {
        this.returnInfo = {}; // object to store variable info that you may want to return to the client
        this.details = new Array();
        this.action = inAction;
    }
    ServerResult.prototype.OK = function () {
        this.code = 'OK';
    };
    ServerResult.prototype.KO = function () {
        this.code = 'KO';
    };
    ServerResult.prototype.addDetail = function (inResult, inAction, inObjectType, inObjectInfo, inError) {
        var detail = new serverResultDetail_1.ServerResultDetail();
        detail.code = inResult;
        detail.action = inAction;
        detail.objectType = inObjectType;
        detail.objectInfo = inObjectInfo;
        detail.error = inError;
        this.details.push(detail);
        return detail;
    };
    return ServerResult;
}());
exports.ServerResult = ServerResult;
//# sourceMappingURL=serverResult.js.map