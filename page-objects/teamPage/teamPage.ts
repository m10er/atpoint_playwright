import { HelperBase } from '../helperBase';
import { Page } from '@playwright/test';
import { TeamPageImp } from './teamPageImp';
import { ApplyJobBody } from '../../pojos/ApplyJobBody';

export class TeamPage extends HelperBase {
    teamPage:TeamPageImp;

    constructor(page:Page, teamPage:TeamPageImp){
        super(page);
        this.teamPage=teamPage;
    }


    async clickJobsLink(): Promise<void> {
        await this.teamPage.jobsLink.click();
    }

    async clickGettoKnowButton():Promise<void>{
        await this.teamPage.gettoKnowButton.click();

    }

    async fillJobApplyForm(user:ApplyJobBody):Promise<void>{
        await this.teamPage.fillJobApplyForm(user);
    }

    async clickSubmitButton():Promise<void>{
        await this.teamPage.submitButton.click();
    }

    async isAllMandotoryWarningVisible():Promise<boolean>{
        return this.teamPage.allMandotoryWarning.isVisible();
    }


}