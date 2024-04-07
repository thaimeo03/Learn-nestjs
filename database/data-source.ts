import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Book } from 'src/books/entities/book.entity'
import 'dotenv/config'

export const dataSourceOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  entities: [Book],
  synchronize: true // only for dev
}
