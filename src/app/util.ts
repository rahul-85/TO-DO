export class Util {
    constructor(
        
    ) {}
    extractShortDate(date : Date): String {
        let newDate :String;
        date.setHours(date.getUTCHours()+5);
        date.setMinutes(date.getUTCMinutes()+30);

        newDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-'
                + date.getUTCDate();
        
        return newDate;
    }
  }
  