export class UserModel {
  public id: string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(partial: Partial<UserModel>) {
    Object.assign(this, partial);
  }
}
