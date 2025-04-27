
import { IFakeDataProvider } from '../env/faker/iFakeDataProvider';

export class TestEnvironment {
  private readonly fakeEmail: string;
  private readonly sqlInj: string = `" OR "1"="1`;
  private readonly fakeFirstName:string;
  private readonly fakeLastName:string;
  private readonly dataProvider:IFakeDataProvider;

  constructor(fakeDataProvider: IFakeDataProvider) {
    this.dataProvider=fakeDataProvider;
    this.fakeEmail = this.dataProvider.genarateEmail();
    this.fakeFirstName=this.dataProvider.genareteFirstName();
    this.fakeLastName=this.dataProvider.genareteLastName();

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


  public getSqlInj(): string {
    return this.sqlInj;
  }

}
