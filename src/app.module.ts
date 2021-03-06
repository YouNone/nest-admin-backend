import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ScaleService } from './scale/scale.service';
import { ScaleController } from './scale/scale.controller';
import { Scale } from './scale/scale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Division } from './division/division.entity';
import { DivisionService } from './division/division.service';
import { DivisionController } from './division/division.controller';
import { GroupService } from './group/group.service';
import { GroupController } from './group/group.controller';
import { User } from './user/user.entity';
import { TypeOrmconfig } from './config/typeorm.config';
import { TaskService } from './task/task.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TaskController } from './task/task.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Group } from './group/group.entity';
import { Task } from './task/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmconfig),
    TypeOrmModule.forFeature([
      User,
      Group,
      Division,
      Task,
      Scale
    ]),
    AuthModule
  ],
  controllers: [
    DivisionController,
    GroupController,
    UserController,
    TaskController,
    ScaleController,
    AppController
  ],
  providers: [
    DivisionService,
    GroupService,
    TaskService,
    UserService,
    ScaleService,
    AppService
  ],
})
export class AppModule { }
