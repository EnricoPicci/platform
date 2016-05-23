///<reference path="../typings/index.d.ts" />
"use strict";
var mongoose = require("mongoose");
var DbManager = (function () {
    function DbManager() {
    }
    DbManager.connectAndOpen = function () {
        if (!this.db) {
            mongoose.connect('mongodb://localhost/' + this.dbName);
            //mongoose.connect('mongodb://ec2-54-213-172-98.us-west-2.compute.amazonaws.com/' + this.dbName);
            this.db = mongoose.connection;
            this.db.on('error', console.error.bind(console, 'connection error:'));
            this.db.once('open', function () {
                console.log('connected!');
            });
        }
    };
    /*******************************************************************
     *  START Manage Profiles
     *******************************************************************/
    DbManager.getProfileModel = function () {
        this.connectAndOpen();
        return mongoose.model('Profile', this.getProfileSchema());
    };
    DbManager.getProfileSchema = function () {
        if (!this.profileSchema) {
            this.profileSchema = new mongoose.Schema({
                date: { type: Date, default: Date.now }
            }, { strict: false } // saves and retrieves also properties not in the schema
            );
        }
        return this.profileSchema;
    };
    DbManager.dbName = 'pfadb';
    return DbManager;
}());
exports.DbManager = DbManager;
//# sourceMappingURL=dbManager.js.map