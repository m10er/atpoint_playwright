import { HelperBase } from '../helperBase';
import { Page } from '@playwright/test';
import { HomePageImp } from './homePageImp';

export class HomePage extends HelperBase {
    readonly homePage:HomePageImp;

    constructor(page:Page, homePage:HomePageImp){
        super(page);
        this.homePage=homePage;

    }

    async clickTeamLinkOnNavbar(): Promise<void> {
        await this.homePage.teamLinkOnNavbar.click();
    }


}