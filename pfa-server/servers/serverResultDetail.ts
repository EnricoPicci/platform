export class ServerResultDetail {
    code: string; // OK or KO
    action: string; // ADD UPDATE DELETE
    objectType:  string; // FormTemplate Block
    objectInfo: string;
    error: any;
    
    
    OK() {
        this.code = 'OK';
    }
    KO() {
        this.code = 'KO';
    }
    
    isError() {
        return this.error != null;
    }
}