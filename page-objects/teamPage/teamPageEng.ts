import { Locator, Page } from '@playwright/test';
import { TeamPageImp } from './teamPageImp';
import { ApplyJobBody } from '../../pojos/ApplyJobBody';

export class TeamPageEng implements TeamPageImp{

    page:Page;
    jobsLink: Locator;
    allMandotoryWarning: Locator;
    submitButton: Locator;
    gettoKnowButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.jobsLink = page.getByText('JobsEstablishes consistent');
        this.gettoKnowButton= page.getByRole('link', { name: 'Software Test Automation' });
        this.allMandotoryWarning= page.locator('iframe[title="Shape 0"]').contentFrame().getByText('Please fill in all mandatory');
        this.submitButton= page.locator('iframe[title="Shape 0"]').contentFrame().getByRole('button', { name: 'Submit' });
    }
    
   

    async fillJobApplyForm(user: ApplyJobBody):Promise<void> {
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('First name*').click();
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('First name*').fill(user.name);
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Surname*').click();
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Surname*').fill(user.lastName);
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('e-mail*').click();
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('e-mail*').fill(user.email);
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Phone number*').click();
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Phone number*').fill(user.phone);
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByRole('textbox', { name: 'CV*' }).setInputFiles(user.cv);
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Motivation*').click();
        await this.page.locator('iframe[title="Shape 0"]').contentFrame().getByPlaceholder('Motivation*').fill(user.motivation);
    }

    
    
    
    
    

}