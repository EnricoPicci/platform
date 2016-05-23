///<reference path="../typings/index.d.ts" />

import * as mongodb from "mongodb";
import * as mongoose from "mongoose";

export class DbManager { 
    private static dbName = 'pfadb';
    private static db: mongoose.Connection;
    
    private static profileSchema;
    
    private static connectAndOpen() {
        if (!this.db) {
        mongoose.connect('mongodb://localhost/' + this.dbName);
        //mongoose.connect('mongodb://ec2-54-213-172-98.us-west-2.compute.amazonaws.com/' + this.dbName);
            this.db = mongoose.connection;
            this.db.on('error', console.error.bind(console, 'connection error:'));
            this.db.once('open', () => {
                console.log('connected!');
            })
        }
    }
    
        
    /*******************************************************************
     *  START Manage Profiles
     *******************************************************************/
    static getProfileModel() {
        this.connectAndOpen();
        return mongoose.model('Profile', this.getProfileSchema());
    }
    private static getProfileSchema() {
        if (!this.profileSchema) {
            this.profileSchema  = new mongoose.Schema( {
                date: { type: Date, default: Date.now }
                },
                {strict: false}  // saves and retrieves also properties not in the schema
            )
        }
        return this.profileSchema;
    }
    
    /*******************************************************************
     *  END Manage Profiles
     *******************************************************************/
  
}