import { HelperBase } from '../helperBase';
import { Page } from '@playwright/test';
import { JobPageInt } from '../JobPage/jobPageInt';

export class JobPage extends HelperBase {
    readonly page:Page;
    readonly jobPage:JobPageInt;

    constructor(page:Page, jobPage:JobPageInt){
        super(page);
        this.page=page;
        this.jobPage = jobPage;
    }

    async loadPage() {
        await this.page.goto(this.jobPage.jobLoinks)
    }
    
    async clickJobThema(thema: string): Promise<void> {
        await this.page.getByRole('link', { name: `${thema}` }).click();
    }


}
