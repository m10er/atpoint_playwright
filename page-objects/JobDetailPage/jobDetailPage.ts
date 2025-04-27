import { HelperBase } from '../helperBase';
import { Page } from '@playwright/test';
import { JobDetailPageInt } from '../JobDetailPage/jobDetailPageImp';

export class JobDetailPage extends HelperBase {
    page:Page;
    readonly jobPage:JobDetailPageInt;

    constructor(page:Page, jobPage:JobDetailPageInt){
        super(page);
        this.page=page;
        this.jobPage=jobPage;

    }

    async loadPage() {
    }
    
    async clickJobApplyButton(): Promise<void> {
        await this.jobPage.applyButton.click();
    }


}
