import { UserResponse } from 'src/model/response/user.model';
import { UserModel } from 'src/model/user.model';

export class UserResponseMapper {
  public static mapToList(userModelList: UserModel[]): UserResponse[] {
    return userModelList.map((item) => this.mapTo(item));
  }

  public static mapTo(userModel: UserModel): UserResponse {
    return new UserResponse({
      id: userModel.id,
      firstName: userModel.firstName,
      lastName: userModel.lastName,
      username: userModel.username,

      password: userModel.password,
      createdAt: userModel.createdAt,
      updatedAt: userModel.updatedAt,
    });
  }
}
