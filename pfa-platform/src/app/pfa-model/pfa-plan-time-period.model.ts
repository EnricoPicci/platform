export class PfaPlanTimePeriodModel {
  public centralYear: number;  // e.g. 2017
  public periodLength = 2;  //  number of years in the period; must be even number greater or equal 2

  constructor() {}
  
  getPeriod() {
      let halfWidth = this.periodLength/2;
      let period = '' + (this.centralYear - halfWidth) + ' - ' + (this.centralYear + halfWidth);
      return period;
  }

}