import { Category, CategoryModule } from '@modules';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'2004',
      database:'feane',
      synchronize:true,
      autoLoadModels:true,
      sync:{force:true}
    }),
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
