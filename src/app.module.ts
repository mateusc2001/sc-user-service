import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './schemas/user.schema';

const isProd = process.env.NODE_ENV == 'prod'
const database = isProd ? 'db-user-sc' : 'db-user-sc-tst';
const uriDbConnection = `mongodb+srv://mateus:1908@cluster0.f0bostk.mongodb.net/${database}?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(uriDbConnection),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
