import { ResourcesENG } from '../../env/resources';
import { Locator, Page } from '@playwright/test';
import { JobDetailPageInt } from './jobDetailPageImp';

export class JobDetailPageEng implements JobDetailPageInt{
     readonly applyButton: Locator;

    constructor(page:Page){
        this.applyButton = page.getByRole('link', { name: 'Apply now' });
    }
    
    

}