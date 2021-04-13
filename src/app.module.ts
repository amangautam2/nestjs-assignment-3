import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(
      {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '#HeShe200',
          database: 'postgres',
          entities: [Users],
          synchronize: true,
          logging: true  
      })
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
