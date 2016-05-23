export class StringNumberConverter { 
    
    public static getLocaleStringFromNumber(inNumber: number) {
        return inNumber.toLocaleString('it-IT');
    }
    public static getNumberFromLocaleString(inLocaleString: string) {
        // replace any dot used to separate thousands using regEx
        // http://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string
        let theString = inLocaleString.trim().replace(/\./g, '');
        return +(theString.replace(",", "."));
    }
    
    public static getLocalePercentageStringFromNumber(inNumber: number) {
        return this.getLocaleStringFromNumber(inNumber) + '%';
    }
    public static getNumberFromPercentageString(inPercentageString: string) {
        let indexOfPercentageSymbol = inPercentageString.indexOf('%');
        let retAsString = inPercentageString.substring(0, indexOfPercentageSymbol);
        return this.getNumberFromLocaleString(retAsString);
    }
}