
import { IFakeDataProvider } from '../env/faker/iFakeDataProvider';

export class TestEnvironment {
  private readonly fakeEmail: string;
  private readonly sqlInj: string = `" OR "1"="1`;
  private readonly fakeFirstName:string;
  private readonly fakeLastName:string;
  private readonly fakePhoneNumber:string;
  private readonly dataProvider:IFakeDataProvider;
  private readonly motivation:string;

  constructor(fakeDataProvider: IFakeDataProvider) {
    this.dataProvider=fakeDataProvider;
    this.fakeEmail = this.dataProvider.genarateEmail();
    this.fakeFirstName=this.dataProvider.genareteFirstName();
    this.fakeLastName=this.dataProvider.genareteLastName();
    this.fakePhoneNumber=this.dataProvider.genaretePhoneNumber();
    this.motivation = this.dataProvider.getMotivation();

  }

  public getFakeFirstName(){
    return this.fakeFirstName;
  }
  public getFakeLastName(){
    return this.fakeLastName;
  }

  public getFakeEmail(): string {
    return this.fakeEmail;
  }

  public getFakePhoneNumber():string{
    return this.fakePhoneNumber;
  }

  public getMotivation():string{
    return this.motivation;
  }

  public getSqlInj(): string {
    return this.sqlInj;
  }

}
