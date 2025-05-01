import { TestData } from './testData';
import { TestEnvironment } from './testEnv';
import { FakerProvider } from './faker/fakerProvider';


/**
 * Central data management class that provides access to all environment and test data
 */
export class DataManager {
    private testData:TestData;
    private testEnv:TestEnvironment; 


    constructor() {
        this.testData = new TestData();
        this.testEnv=new TestEnvironment(new FakerProvider());
    }

    public getTestEnvironment() {
        return this.testEnv;
    }

    public getTestData() {
        return this.testData;
    }

}
