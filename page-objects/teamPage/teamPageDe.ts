import { Locator, Page } from '@playwright/test';
import { TeamPageImp } from './teamPageImp';
import { ApplyJobBody } from '../../pojos/ApplyJobBody';

export class TeamPageDe implements TeamPageImp{

    page:Page;
    jobsLink: Locator;
    allMandotoryWarning: Locator;
    submitButton: Locator;
    gettoKnowButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.jobsLink = page.getByText('JobsEtabliert ein durchgä');
        this.gettoKnowButton= page.getByRole('link', { name: 'Software Test Automation' });
        this.allMandotoryWarning= page.locator('iframe[title="Form 0"]').contentFrame().getByText('Bitte füllen Sie alle');
        this.submitButton= page.locator('iframe[title="Form 0"]').contentFrame().getByRole('button', { name: 'Absenden' });
    }
    
    

    async fillJobApplyForm(user: ApplyJobBody):Promise<void> {
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Vorname*').click();
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Vorname*').fill(user.name);
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Nachname*').click();
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Nachname*').fill(user.lastName);
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('E-Mail*').click();
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('E-Mail*').fill(user.email);
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Telefonnummer*').click();
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Telefonnummer*').fill(user.phone);
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByRole('textbox', { name: 'CV*' }).setInputFiles(user.cv);;
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Motivation*').click();
        await this.page.locator('iframe[title="Form 0"]').contentFrame().getByPlaceholder('Motivation*').fill(user.motivation);
    }

    
    
    
    
    

}