import { faker } from "@faker-js/faker";
import { IFakeDataProvider } from "./iFakeDataProvider";

export class FakerProvider implements IFakeDataProvider {
  getMotivation(): string {
    return faker.lorem.paragraphs();
  }
  genaretePhoneNumber(): string {
    return faker.phone.number({style:"human"});
  }
  genareteLastName(): string {
    return faker.person.lastName();
  }

  genareteFirstName():string{
    return faker.person.firstName();
  }
   
  genarateEmail(): string {
    return faker.internet.email();
  }

}
