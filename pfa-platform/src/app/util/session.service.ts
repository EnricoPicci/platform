import { Subject }    from 'rxjs/Subject';

import {PfaProfileModel} from '../pfa-model/';

export class SessionService {
    public editMode = false;
    
    //public language = 'en';
    public language = 'it';
    
    public currentProfile: PfaProfileModel;
    
    // Observable string sources
    private titleSource = new Subject<{title: string, subtitle: string}>();
    // Observable string streams
    newTitle$ = this.titleSource.asObservable();
    // Service message commands
    newTitle(inTitleSubtitle: {title: string, subtitle: string}) {
        this.titleSource.next(inTitleSubtitle)
    }
    
}