import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModelMapper } from './mapper/user-model.mapper';
import { UserResponseMapper } from './mapper/user-response.mapper';
import { UserModel } from './model/user.model';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AppService {

  constructor(@InjectModel(User.name) private readonly userDb: Model<UserDocument>) {}

  async create(user: any): Promise<UserModel> {
    const userDB: UserDocument = await this.userDb.create(user);
    return UserModelMapper.mapTo(userDB);
  }

  async findById(userId: string): Promise<UserModel> {
    const userDB: UserDocument = await this.userDb.findById(userId);
    return UserModelMapper.mapTo(userDB);
  }

  async findAll(): Promise<UserModel[]> {
    const userDBList: UserDocument[] = await this.userDb.find();
    return UserModelMapper.mapToList(userDBList);
  }

  async findByIdList(idList: string[]): Promise<UserModel[]> {
    console.log(idList['id']);
    const userDBList: UserDocument[] = await this.userDb.find({
      _id: { $in: idList['id'] }
    });
    return UserModelMapper.mapToList(userDBList);
  }

  async findByUsername(username: string): Promise<UserModel> {
    const userDBList: UserDocument = await this.userDb.findOne({ username: username });
    return UserModelMapper.mapTo(userDBList);
  }
}
