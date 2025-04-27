import { TestData } from './testData';
import { TestEnvironment } from './testEnv';
import { FakerProvider } from './faker/fakerProvider';
import { PageData, PageDataDE, PageDataENG } from './pageData';
import { Page } from '@playwright/test';


/**
 * Central data management class that provides access to all environment and test data
 */
export class DataManager {
    private testData:TestData;
    private testEnv:TestEnvironment; 
    private pageDataENG:PageData;
    private pageDataDE:PageData;

    constructor() {
        this.testData = new TestData();
        this.testEnv=new TestEnvironment(new FakerProvider());
        this.pageDataENG= new PageDataENG();
        this.pageDataDE = new PageDataDE();
    }

    public getTestEnvironment() {
        return this.testEnv;
    }

    public getTestData() {
        return this.testData;
    }

    public getPageDataEng(){
        return this.pageDataENG;
    }
    public getPageDataDE(){
        return this.pageDataDE;
    }
}
