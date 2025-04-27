
export interface PageData {
  aktivJobsTitles:string[];

  }

  export class PageDataDE implements PageData{

    aktivJobsTitles: string[];
    
    constructor() {
        this.aktivJobsTitles = ["Senior Frontend Developer","Ruby Backend Developer","Business Analyst Bankensoftware"
             ,"Studentische Arbeit im Bereich Software Test Automatisierung"];
    }
    
  }

  export class PageDataENG implements PageData{
      aktivJobsTitles: string[];
      constructor() {
        this.aktivJobsTitles = ["Senior Frontend Developer","Ruby Backend Developer",
             "Business Analyst Banking Software","Student work in the field of software test automation"];
    }

  }
