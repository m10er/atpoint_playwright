import { Locator, Page } from '@playwright/test';
import { HomePageImp } from './homePageImp';

export class HomePageEng implements HomePageImp{

    teamLinkOnNavbar: Locator;

    constructor(page:Page){
        this.teamLinkOnNavbar =  page.getByRole('navigation').getByRole('link', { name: 'Team', exact: true });
    }
    
    
    

}