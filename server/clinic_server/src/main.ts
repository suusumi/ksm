import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// nothing changed
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Обход безопасности CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  })

  await app.listen(8080);

  app.enableShutdownHooks()
}
bootstrap(); // монтируем приложение
