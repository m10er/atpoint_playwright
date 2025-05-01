import { Locator, Page } from "@playwright/test";;
import { ApplyJobBody } from '../../pojos/ApplyJobBody';


export interface TeamPageImp {
    jobsLink:Locator;
    gettoKnowButton:Locator;
    allMandotoryWarning:Locator;
    submitButton:Locator;
    fillJobApplyForm(user:ApplyJobBody):Promise<void>;

    }