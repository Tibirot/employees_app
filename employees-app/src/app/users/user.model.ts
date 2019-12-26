export class User {
  private _age: number = this.age;

  constructor(private _userName: string,private _password: string, private _description: string, private _birthDate: Date) {
  }
  get userName(): string {
    return this._userName;
  }
  set userName(newValue: string) {
    this._userName = newValue;
  }
  get password(): string {
    return this._password;
  }
  set password(newValue){
    this._password = newValue;
  }
  get description(): string{
    return this._description;
  }
  set description(newValue: string) {
    this._description = newValue;
  }
  get age(): number{
    const today = new Date();
    const birthDay = new Date(this.birthDate);
    let a = today.getFullYear() - birthDay.getFullYear();
    const m = today.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())){
      a--
    }
    return a;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(newValue){
    this._birthDate = newValue;
  }


}
