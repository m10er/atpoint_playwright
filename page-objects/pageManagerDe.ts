import { JobPageDE } from './JobPage/jobPageDE';
import { JobPage } from './JobPage/jobPage';
import { Page } from '@playwright/test';
import { JobDetailPage } from './JobDetailPage/jobDetailPage';
import { JobDetailPageDE } from './JobDetailPage/jobDetailPageDE';
import { JobApplyPage } from './JobApplyPage/JobApplyPage';

export class PageManagerDE{

    page:Page;
    private jobPage : JobPage;
    private jobDetailPage:JobDetailPage;
    private jobApplyPage:JobApplyPage;

    constructor(page:Page){
        this.page=page;
        this.jobPage = new JobPage(page, new JobPageDE(page));
        this.jobDetailPage = new JobDetailPage(page, new JobDetailPageDE(page));
        this.jobApplyPage= new JobApplyPage(page);
    }


    getJobsPage(){
        return this.jobPage;
    }

    getJobsDetailPage(){
        return this.jobDetailPage;
    }

    getJobsApplyPage(){
        return this.jobApplyPage;
    }



}