"use strict";
var ServerResultDetail = (function () {
    function ServerResultDetail() {
    }
    ServerResultDetail.prototype.OK = function () {
        this.code = 'OK';
    };
    ServerResultDetail.prototype.KO = function () {
        this.code = 'KO';
    };
    ServerResultDetail.prototype.isError = function () {
        return this.error != null;
    };
    return ServerResultDetail;
}());
exports.ServerResultDetail = ServerResultDetail;
//# sourceMappingURL=serverResultDetail.js.map