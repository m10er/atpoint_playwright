import { ResourcesENG } from '../../env/resources';
import { Locator, Page } from '@playwright/test';
import { JobPageInt } from './jobPageInt';

export class JobPageEng implements JobPageInt{
    readonly page:Page;
     readonly jobLoinks: string;

    constructor(page:Page){
        this.page=page;
        this.jobLoinks = ResourcesENG.jobsUrl;
    }
    

}