import {ServerResultDetail} from './serverResultDetail'

export class ServerResult {
    private code: string; // OK or KO
    action: string; // the action attempted 
    returnInfo = {};  // object to store variable info that you may want to return to the client
    details = new Array<ServerResultDetail>();
    data;
    
    constructor(inAction?: string) {
        this.action = inAction;
    }
    
    OK() {
        this.code = 'OK';
    }
    KO() {
        this.code = 'KO';
    }
  
    addDetail(inResult?: string, inAction?: string, inObjectType?: string, inObjectInfo?: string, inError?: any) {
        let detail = new ServerResultDetail();
        detail.code = inResult;
        detail.action = inAction;
        detail.objectType = inObjectType;
        detail.objectInfo = inObjectInfo;
        detail.error = inError;
        this.details.push(detail);
        return detail;
    }
}