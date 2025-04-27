import { Locator, Page } from '@playwright/test';
import { JobPageInt } from '../JobPage/jobPageInt';
import { ResourcesDE } from '../../env/resources';

export class JobPageDE implements JobPageInt{
    readonly page:Page;
     readonly jobLoinks: string;

    constructor(page:Page){
        this.page=page;
        this.jobLoinks = ResourcesDE.jobsUrl;
    }
    

}