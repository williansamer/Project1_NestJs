import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // baixar "npm install @nestjg/config"
import { TypeOrmModule } from '@nestjs/typeorm'; // // baixar "npm install @nestjg/typeorm"
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js,.ts,.tsx}']
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
