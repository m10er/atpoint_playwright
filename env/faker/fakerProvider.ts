import { faker } from "@faker-js/faker";
import { IFakeDataProvider } from "./iFakeDataProvider";

export class FakerProvider implements IFakeDataProvider {
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
