import { Page } from "@playwright/test"
import { Locator } from '@playwright/test';

export abstract class HelperBase {
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    protected abstract loadPage();

    async chooseEngLanguage() {
        await this.page.getByRole('link', { name: 'en', exact: true }).click();
    }

    async cokieAccept() {
        await this.page.getByTestId('uc-accept-all-button').click();
    }


}