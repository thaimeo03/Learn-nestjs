import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true
  })

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()

  app.useBodyParser('json', { limit: '20mb' })

  await app.listen(9999)
}
bootstrap()
