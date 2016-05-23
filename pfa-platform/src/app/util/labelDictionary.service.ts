import {Injectable} from '@angular/core';

import {SessionService} from './session.service'

@Injectable()
export class LabelDictionaryService { 
    public dictionary: {};
    
    constructor(private _session: SessionService) {
        this.dictionary = this.getDictionary();
    }
    
    getLabelText(inLabelId: string, inLanguageId?: string) {
        let langId;
        if (inLanguageId) {
           langId = inLanguageId; 
        } else {
            langId = this._session.language;
        }
        let text;
        let labelTexts = this.dictionary[inLabelId];
        if (labelTexts) {
            let labelText = labelTexts[langId];
            if (labelText) {
                text = labelText;
            }
        }
        if (text == null) {
           text = inLabelId;
           console.error(inLabelId + ' has no defined text for language ' + langId); 
        }
        return text;
    }
    
    getDictionary() {
        let dict = {};
        let dictEntry: {en: string, it: string};
        
        dict['addProfile'] = {en: 'Add a new profile', it: 'Aggiungi un nuovo profilo'};
        dict['amount'] = {en: 'Amount', it: 'Ammontare'};
        dict['cancel'] = {en: 'Cancel', it: 'Cancella'};
        dict['chooseProfileTemplate'] = {en: 'Choose a profile close to you', it: 'Scegli un profilo che ti somiglia'};
        dict['continue'] = {en: 'Continue', it: 'Continua'};
        dict['durationYears'] = {en: 'Expected increase', it: 'Rivalutazione attesa'};
        dict['expectedIncrease'] = {en: 'Return in the year', it: 'Ritorno annuale'};
        dict['gender'] = {en: 'Gender', it: 'Sesso'};
        dict['interestRate'] = {en: 'Interest rate', it: 'Tasso di interesse'};
        dict['loans'] = {en: 'Loans', it: 'Prestito'};
        dict['manageParties'] = {en: 'Manage your clients', it: 'Gestisci i clienti'};
        dict['monthlySavings'] = {en: 'Monthly savings', it: 'Versamento mensile'};
        dict['mortgage'] = {en: 'Mortgage', it: 'Mutuo'};
        dict['name'] = {en: 'Name', it: 'Nome e cognome'};
        dict['profileChooseSimilarTitle'] = {en: 'Choose your profile', it: 'Seleziona il tuo profilo'};
        dict['profileChooseSimilarSubtitle'] = {en: 'Select the profile that is closest to you', it: 'Scegli il profilo che più ti assomiglia'};
        dict['profileTitle'] = {en: 'Your Profile', it: 'Il tuo profilo'};
        dict['profileSubtitle'] = {en: 'Fill the fields and start simulations', it: 'Riempi tutti i campi ed inizia le simulazioni'};
        dict['properties'] = {en: 'Properties', it: 'Immobili'};
        dict['savings'] = {en: 'Savings', it: 'Risparmio'};
        dict['savingsToday'] = {en: 'Savings up to now', it: 'Risparmio ad oggi'};
        dict['startingPoint'] = {en: 'Your starting point', it: 'Il tuo punto di partenza'};
        dict['valueToday'] = {en: 'Value today', it: 'Valore oggi'};
        dict['yearlyReturn'] = {en: 'Return in the year', it: 'Ritorno annuale'};
        dict['yearOfBirth'] = {en: 'Year of birth', it: 'Anno di nascita'};
        dict['yearStart'] = {en: 'Starting Year', it: 'Anno di partenza'};
        dict['Zipcode'] = {en: 'Zipcode', it: 'CAP'};
        
        // messages
        
        
        dict['M_ProdSavedErr'] = {en: 'Error saving Product', it: 'Errore nel salvataggio del Prodotto'};
        
        return dict;
    }
}