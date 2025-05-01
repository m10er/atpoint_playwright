import { HomePage } from './homePage/homePage';
import { Page } from '@playwright/test';
import { TeamPage } from './teamPage/teamPage';
import { HomePageDe } from './homePage/homePageDe';
import { TeamPageDe } from './teamPage/teamPageDe';


export class PageManagerDE{

    page:Page;
    private homePage:HomePage;
    private teampage:TeamPage;

    constructor(page:Page){
        this.page=page;
        this.homePage = new HomePage(page, new HomePageDe(page));
        this.teampage= new TeamPage(page, new TeamPageDe(page));
    }

    getHomePage(){
        return this.homePage;
    }

    getTeamPage(){
        return this.teampage;
    }

}