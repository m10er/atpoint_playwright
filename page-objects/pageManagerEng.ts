import { JobDetailPage } from './JobDetailPage/jobDetailPage';
import { JobPageEng } from './JobPage/jobPageEng';
import { JobPage } from './JobPage/jobPage';
import { Page } from '@playwright/test';
import { JobDetailPageEng } from './JobDetailPage/jobDetailPageEng';
import { JobApplyPage } from './JobApplyPage/JobApplyPage';

export class PageManagerEng{

    page:Page;
    private jobPage : JobPage;
    private jobDetailPage:JobDetailPage;
    private jobApplyPage:JobApplyPage;

    constructor(page:Page){
        this.page=page;
        this.jobPage = new JobPage(page, new JobPageEng(page));
        this.jobDetailPage = new JobDetailPage(page, new JobDetailPageEng(page));
        this.jobApplyPage = new JobApplyPage(page);
    }


    getJobsPage( ){
        return this.jobPage;
    }

    getJobsDetailPage(){
        return this.jobDetailPage;
    }

    getJobsApplyPage(){
        return this.jobApplyPage;
    }


}