import { HelperBase } from '../helperBase';
import { Page } from '@playwright/test';
import {ApplyJobBody} from '../../pojos/ApplyJobBody';

export class JobApplyPage extends HelperBase {
    page:Page;
    constructor(page:Page){
        super(page);
        this.page=page;

    }

    async loadPage() {
    }
    
    async clickAcceptCookie(): Promise<void> {
        await this.page.getByRole('button', { name: 'Accept All' }).click();    }

    async fillJobApplyForm(user:ApplyJobBody):Promise<void>{
        await this.page.getByTestId('email-container').getByTestId('TextInput').click();
        await this.page.getByTestId('email-container').getByTestId('TextInput').fill(user.email);
        await this.page.getByTestId('FirstName').click();
        await this.page.getByTestId('FirstName').fill(user.name);
        await this.page.getByTestId('LastName').click();
        await this.page.getByTestId('LastName').fill(user.lastName);
        await this.page.getByTestId('ResumeField').getByRole('textbox').setInputFiles(user.cv);
        await this.page.getByTestId('CoverLetterField').getByRole('textbox').setInputFiles(user.additionalDocument);
    }

    async clickJetzBewerbenButton(){
        await this.page.getByRole('button', { name: 'Jetzt bewerben' }).click();
    }

    async clickDataProtectCheckbox(){
        await this.page.getByTestId('CheckboxIcon').click();

    }


}
