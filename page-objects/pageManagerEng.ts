import { HomePageEng } from './homePage/homePageEng';
import { HomePage } from './homePage/homePage';
import { Page } from '@playwright/test';
import { TeamPage } from './teamPage/teamPage';
import { TeamPageEng } from './teamPage/teamPageEng';


export class PageManagerEng{

    page:Page;
    private homePage:HomePage;
    private teampage:TeamPage;

    constructor(page:Page){
        this.page=page;
        this.homePage = new HomePage(page, new HomePageEng(page));
        this.teampage= new TeamPage(page, new TeamPageEng(page));
    }

    getHomePage(){
        return this.homePage;
    }

    getTeamPage(){
        return this.teampage;
    }

}