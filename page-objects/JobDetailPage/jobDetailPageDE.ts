import { JobDetailPageInt } from './jobDetailPageImp';
import { Locator, Page } from '@playwright/test';

export class JobDetailPageDE implements JobDetailPageInt{
    page:Page;
    readonly applyButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.applyButton =page.getByRole('link', { name: 'Jetzt bewerben' });
    }
    
    

}