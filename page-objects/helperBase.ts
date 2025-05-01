import { Page } from "@playwright/test"
import { Resources } from '../env/resources';

export abstract class HelperBase {
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    async loadHomePage(){
        await this.page.goto(Resources.BASE_URL)
    }

    async cokieAccept() {
        await this.page.locator('[data-test-id="interactive-frame"]').contentFrame().getByRole('button', { name: 'Close' }).click();  
        await this.page.getByRole('button', { name: 'Okay' }).click();
   
    }

    async chooseLanguage(language:string){
        await this.page.getByRole('navigation').getByRole('link', { name: 'EN', exact: true }).hover();
        if(language.toLowerCase()=="de"){
            await this.page.getByRole('navigation').getByRole('link', { name: 'De' }).click();
        }else if(language.toLocaleLowerCase()=="fr"){
            await this.page.getByRole('navigation').getByRole('link', { name: 'Fr' }).click();
        }
  
    }


}