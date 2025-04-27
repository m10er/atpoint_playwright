import { test } from '../fixtures/ui-fixture';
import { PageManagerDE } from '../page-objects/pageManagerDe';
import { ApplyJobBody } from '../pojos/ApplyJobBody';
import {DataManager} from '../env/dataManager';

test.describe('Job Bewerbung test', () => {
   let testData: DataManager;
   let randomJobTitle:string;

  test.beforeAll(async ({  }) => {
     testData = new DataManager(); 
  });

  test('Ohne Zustimmung zur Datennutzung sollte die Job Bewerbung fehlschlagen.(Deutsch)', async ({ pageManagerDE }) => {
    await pageManagerDE.getJobsPage().loadPage();
    let jobTitles= testData.getPageDataDE().aktivJobsTitles;
    randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    await pageManagerDE.getJobsPage().clickJobThema(randomJobTitle);

    const page1Promise = pageManagerDE.page.waitForEvent('popup');
    await pageManagerDE.getJobsDetailPage().clickJobApplyButton();

    const popup = await page1Promise;
    const pageNew = new PageManagerDE(popup);

    await pageNew.getJobsApplyPage().clickAcceptCookie();
    const user: ApplyJobBody = testData.getTestData().getFakeApplyJobBody();
    await pageNew.getJobsApplyPage().fillJobApplyForm(user);
    await pageNew.getJobsApplyPage().clickJetzBewerbenButton();
  });

  test('Ohne Zustimmung zur Datennutzung sollte die Job Bewerbung fehlschlagen.(English)', async ({ pageManagerEng }) => {
    await pageManagerEng.getJobsPage().loadPage();
    let jobTitles= testData.getPageDataEng().aktivJobsTitles;
    randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    await pageManagerEng.getJobsPage().clickJobThema(randomJobTitle);

    const page1Promise = pageManagerEng.page.waitForEvent('popup');
    await pageManagerEng.getJobsDetailPage().clickJobApplyButton();

    const popup = await page1Promise;
    const pageNew = new PageManagerDE(popup);

    await pageNew.getJobsApplyPage().clickAcceptCookie();
    const user: ApplyJobBody = testData.getTestData().getFakeApplyJobBody();
    await pageNew.getJobsApplyPage().fillJobApplyForm(user);
    await pageNew.getJobsApplyPage().clickJetzBewerbenButton();
  });
});
