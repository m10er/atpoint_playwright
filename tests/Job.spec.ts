import { expect, test } from '../fixtures/ui-fixture';
import {DataManager} from '../env/dataManager';

test.describe('Job Bewerbung test', () => {

  const dataManager:DataManager= new DataManager();

    test('Ohne Motivation input einzugeben sollte die Job Bewerbung fehlschlagen.(Deutsch)', async ({ pageManagerDE }) => {
    await pageManagerDE.getHomePage().loadHomePage();
    await pageManagerDE.getHomePage().cokieAccept();
    await pageManagerDE.getHomePage().chooseLanguage("De");
    await pageManagerDE.getHomePage().clickTeamLinkOnNavbar();
    await pageManagerDE.getTeamPage().clickJobsLink();
    await pageManagerDE.getTeamPage().clickGettoKnowButton();
    await pageManagerDE.getTeamPage().fillJobApplyForm(dataManager.getTestData().getFakeApplyJobBody());
    await pageManagerDE.getTeamPage().clickSubmitButton();
    await expect(await pageManagerDE.getTeamPage().isAllMandotoryWarningVisible()).toBeTruthy();

  });

  test('Ohne Motivation input einzugeben  sollte die Job Bewerbung fehlschlagen.(English)', async ({ pageManagerEng }) => {
    await pageManagerEng.getHomePage().loadHomePage();
    await pageManagerEng.getHomePage().cokieAccept();
    await pageManagerEng.getHomePage().clickTeamLinkOnNavbar();
    await pageManagerEng.getTeamPage().clickJobsLink();
    await pageManagerEng.getTeamPage().clickGettoKnowButton();
    await pageManagerEng.getTeamPage().fillJobApplyForm(dataManager.getTestData().getFakeApplyJobBody());
    await pageManagerEng.getTeamPage().clickSubmitButton();
    await expect(await pageManagerEng.getTeamPage().isAllMandotoryWarningVisible()).toBeTruthy();
  });
});
