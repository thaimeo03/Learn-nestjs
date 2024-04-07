import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from 'database/data-source'
import { BooksModule } from './books/books.module'
import { MediasModule } from './medias/medias.module'

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BooksModule, MediasModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
