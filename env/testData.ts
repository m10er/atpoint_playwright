import { ApplyJobBody } from './../pojos/ApplyJobBody';
import { FakerProvider } from './faker/fakerProvider';
import {TestEnvironment} from './testEnv';

/**
 * Test data management class that provides test data instances
 */
export class TestData {
    private readonly applyFakeJobBody: ApplyJobBody;
    private readonly testEnv:TestEnvironment;

    constructor() {
        this.testEnv = new TestEnvironment(new FakerProvider());
        // Initialize login bodies with environment data
        this.applyFakeJobBody = new ApplyJobBody(
            this.testEnv.getFakeEmail(),
            this.testEnv.getFakeFirstName(),
            this.testEnv.getFakeLastName(),
            this.testEnv.getFakePhoneNumber(),
            ApplyJobBody.fromPath("env/documents/CVMuammer.pdf"),
            ""
        );
    }

    public getFakeApplyJobBody(): ApplyJobBody {
        return this.applyFakeJobBody;
    }


}
