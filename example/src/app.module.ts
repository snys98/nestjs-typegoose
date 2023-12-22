import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatsModule } from './cat/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/nest', {
    }),
    CatsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
