import { test as baseTest, Page } from '@playwright/test';
import { PageManagerDE } from '../page-objects/pageManagerDe';
import { PageManagerEng } from '../page-objects/pageManagerEng';

type UiFixtures = {
  pageManagerDE: PageManagerDE;
  pageManagerEng:PageManagerEng;
};

export const test = baseTest.extend<UiFixtures>({
  pageManagerEng: async ({page}, use) => {
    
    const pageManagerEng = new PageManagerEng(page);
    await use(pageManagerEng); 
    await page.close();
  },

  pageManagerDE: async ({page}, use) => {
    
    const pageManagerDe = new PageManagerDE(page);
    await use(pageManagerDe); 
    await page.close();
  },

});

export { expect } from '@playwright/test';


