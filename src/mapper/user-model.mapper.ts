import { UserModel } from 'src/model/user.model';
import { UserDocument } from 'src/schemas/user.schema';

export class UserModelMapper {
  public static mapToList(userModelList: UserDocument[]): UserModel[] {
    return userModelList.map((item) => this.mapTo(item));
  }

  public static mapTo(userModel: UserDocument): UserModel {
    return new UserModel({
      id: userModel.id,
      firstName: userModel.firstName,
      lastName: userModel.lastName,
      username: userModel.username,
      password: userModel.password,
      createdAt: new Date(userModel.createdAt),
      updatedAt: new Date(userModel.updatedAt),
    });
  }
}
